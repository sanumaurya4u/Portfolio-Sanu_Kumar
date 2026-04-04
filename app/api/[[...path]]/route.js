import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME || 'portfolio_db';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  const db = client.db(DB_NAME);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

async function handleGitHubRepos(request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'sanumaurya4u';
    const { db } = await connectToDatabase();
    
    // Try repos API first, then search API as fallback
    let formattedRepos = null;
    
    // Attempt 1: repos API
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
        { headers: { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'Portfolio-App' } }
      );
      if (response.ok) {
        const repos = await response.json();
        formattedRepos = repos.map(repo => ({
          id: repo.id.toString(), name: repo.name,
          description: repo.description || 'No description available',
          language: repo.language || 'Unknown', html_url: repo.html_url,
          homepage: repo.homepage || null, stars: repo.stargazers_count,
          forks: repo.forks_count, updated_at: repo.updated_at,
          topics: repo.topics || [], fork: repo.fork
        }));
      }
    } catch (e) { console.log('Repos API failed:', e.message); }
    
    // Attempt 2: search API (separate rate limit)
    if (!formattedRepos) {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=user:${username}&sort=updated&per_page=30`,
          { headers: { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'Portfolio-App' } }
        );
        if (response.ok) {
          const data = await response.json();
          formattedRepos = (data.items || []).map(repo => ({
            id: repo.id.toString(), name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language || 'Unknown', html_url: repo.html_url,
            homepage: repo.homepage || null, stars: repo.stargazers_count,
            forks: repo.forks_count, updated_at: repo.updated_at,
            topics: repo.topics || [], fork: repo.fork
          }));
        }
      } catch (e) { console.log('Search API failed:', e.message); }
    }
    
    // Cache if we got data
    if (formattedRepos) {
      await db.collection('github_cache').updateOne(
        { username },
        { $set: { username, repos: formattedRepos, cached_at: new Date().toISOString() } },
        { upsert: true }
      );
    }
    
    // If GitHub fetch failed, try cache
    if (!formattedRepos) {
      const cached = await db.collection('github_cache').findOne({ username });
      if (cached) {
        return NextResponse.json(
          { success: true, repos: cached.repos, cached: true, cached_at: cached.cached_at },
          { headers: corsHeaders() }
        );
      }
      return NextResponse.json(
        { success: false, error: 'GitHub API rate limited and no cached data available' },
        { status: 429, headers: corsHeaders() }
      );
    }
    
    return NextResponse.json({ success: true, repos: formattedRepos }, { headers: corsHeaders() });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

async function handleContactSubmit(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400, headers: corsHeaders() }
      );
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400, headers: corsHeaders() }
      );
    }
    
    const { db } = await connectToDatabase();
    const contactMessage = {
      id: uuidv4(),
      name,
      email,
      message,
      created_at: new Date().toISOString(),
      read: false
    };
    
    await db.collection('contact_messages').insertOne(contactMessage);
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 201, headers: corsHeaders() }
    );
  } catch (error) {
    console.error('Contact submit error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500, headers: corsHeaders() }
    );
  }
}

async function handleGetContacts() {
  try {
    const { db } = await connectToDatabase();
    const messages = await db.collection('contact_messages')
      .find({})
      .sort({ created_at: -1 })
      .limit(100)
      .toArray();
    
    const sanitized = messages.map(({ _id, ...rest }) => rest);
    
    return NextResponse.json({ success: true, messages: sanitized }, { headers: corsHeaders() });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

async function handleHealth() {
  try {
    const { db } = await connectToDatabase();
    await db.command({ ping: 1 });
    return NextResponse.json({ status: 'healthy', database: 'connected' }, { headers: corsHeaders() });
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', database: 'disconnected', error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function GET(request, { params }) {
  const path = (await params)?.path || [];
  const route = path.join('/');
  
  switch (route) {
    case 'github':
      return handleGitHubRepos(request);
    case 'contact':
      return handleGetContacts();
    case 'health':
      return handleHealth();
    default:
      return NextResponse.json(
        { message: 'Portfolio API', routes: ['/api/github', '/api/contact', '/api/health'] },
        { headers: corsHeaders() }
      );
  }
}

export async function POST(request, { params }) {
  const path = (await params)?.path || [];
  const route = path.join('/');
  
  switch (route) {
    case 'contact':
      return handleContactSubmit(request);
    default:
      return NextResponse.json(
        { error: 'Not found' },
        { status: 404, headers: corsHeaders() }
      );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}
