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
  const client = new MongoClient(MONGO_URL, {
    serverSelectionTimeoutMS: 3000,
    connectTimeoutMS: 3000,
  });
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

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_HEADERS = {
  'Accept': 'application/vnd.github.v3+json',
  'User-Agent': 'Portfolio-App',
  ...(GITHUB_TOKEN ? { 'Authorization': `token ${GITHUB_TOKEN}` } : {})
};

// ===== In-memory cache (no MongoDB needed) =====
let memoryCache = {};
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes (longer to avoid rate limits)

function formatRepo(repo) {
  return {
    id: repo.id.toString(),
    name: repo.name,
    description: repo.description || 'No description available',
    language: repo.language || 'Unknown',
    html_url: repo.html_url,
    homepage: repo.homepage || null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count || 0,
    open_issues: repo.open_issues_count || 0,
    size: repo.size || 0,
    default_branch: repo.default_branch || 'main',
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    pushed_at: repo.pushed_at,
    topics: repo.topics || [],
    fork: repo.fork,
    archived: repo.archived || false,
    visibility: repo.visibility || 'public'
  };
}

async function handleGitHubRepos(request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'sanumaurya4u';
    const forceRefresh = searchParams.get('refresh') === 'true';

    // Check in-memory cache first (no DB needed)
    if (!forceRefresh && memoryCache[username]) {
      const cacheAge = Date.now() - memoryCache[username].timestamp;
      if (cacheAge < CACHE_TTL_MS) {
        return NextResponse.json({
          success: true,
          repos: memoryCache[username].repos,
          profile: memoryCache[username].profile,
          source: 'cache',
          cached_at: memoryCache[username].cached_at,
          cache_age_seconds: Math.floor(cacheAge / 1000)
        }, { headers: corsHeaders() });
      }
    }

    let formattedRepos = null;
    let profileData = null;

    // Fetch profile + repos in parallel from GitHub
    try {
      const fetchOptions = forceRefresh 
        ? { headers: GITHUB_HEADERS, cache: 'no-store' }
        : { headers: GITHUB_HEADERS, next: { revalidate: 3600 } }; // Cache for 1 hour

      const [profileRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, fetchOptions),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`, fetchOptions)
      ]);

      // If token is invalid or expired (401 Bad credentials), fallback to unauthenticated request
      if ((profileRes && profileRes.status === 401) || (reposRes && reposRes.status === 401)) {
        console.warn('GitHub token rejected with 401 Unauthorized. Retrying with unauthenticated public request...');
        const publicHeaders = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        };
        const publicOptions = forceRefresh 
          ? { headers: publicHeaders, cache: 'no-store' }
          : { headers: publicHeaders, next: { revalidate: 3600 } };

        const [retryProfileRes, retryReposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, publicOptions),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`, publicOptions)
        ]);

        if (retryProfileRes.ok) {
          const p = await retryProfileRes.json();
          profileData = {
            avatar_url: p.avatar_url,
            name: p.name || username,
            bio: p.bio || '',
            public_repos: p.public_repos,
            followers: p.followers,
            following: p.following,
            location: p.location || '',
            blog: p.blog || '',
            html_url: p.html_url,
            created_at: p.created_at
          };
        }

        if (retryReposRes.ok) {
          const repos = await retryReposRes.json();
          formattedRepos = repos.map(formatRepo);
        }
      } else {
        if (profileRes.ok) {
          const p = await profileRes.json();
          profileData = {
            avatar_url: p.avatar_url,
            name: p.name || username,
            bio: p.bio || '',
            public_repos: p.public_repos,
            followers: p.followers,
            following: p.following,
            location: p.location || '',
            blog: p.blog || '',
            html_url: p.html_url,
            created_at: p.created_at
          };
        } else {
          console.log('GitHub profile API returned:', profileRes.status);
        }

        if (reposRes.ok) {
          const repos = await reposRes.json();
          formattedRepos = repos.map(formatRepo);
        } else {
          console.log('GitHub repos API returned:', reposRes.status);
        }
      }
    } catch (e) {
      console.log('GitHub API fetch failed:', e.message);
    }

    // Fallback: search API (separate rate limit)
    if (!formattedRepos) {
      try {
        const publicHeaders = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        };
        const searchHeaders = GITHUB_TOKEN ? GITHUB_HEADERS : publicHeaders;
        let response = await fetch(
          `https://api.github.com/search/repositories?q=user:${username}&sort=updated&per_page=30`,
          { headers: searchHeaders, cache: 'no-store' }
        );
        if (response.status === 401) {
          response = await fetch(
            `https://api.github.com/search/repositories?q=user:${username}&sort=updated&per_page=30`,
            { headers: publicHeaders, cache: 'no-store' }
          );
        }
        if (response.ok) {
          const data = await response.json();
          formattedRepos = (data.items || []).map(formatRepo);
        }
      } catch (e) {
        console.log('Search API failed:', e.message);
      }
    }

    // Got fresh data — cache it in memory and return
    if (formattedRepos) {
      const now = new Date().toISOString();
      memoryCache[username] = {
        repos: formattedRepos,
        profile: profileData,
        cached_at: now,
        timestamp: Date.now()
      };

      return NextResponse.json({
        success: true,
        repos: formattedRepos,
        profile: profileData,
        source: 'live',
        cached_at: now
      }, { headers: corsHeaders() });
    }

    // All APIs failed — serve stale memory cache if available
    if (memoryCache[username]) {
      return NextResponse.json({
        success: true,
        repos: memoryCache[username].repos,
        profile: memoryCache[username].profile,
        source: 'stale_cache',
        cached_at: memoryCache[username].cached_at
      }, { headers: corsHeaders() });
    }

    return NextResponse.json(
      { success: false, error: 'GitHub API rate limited. Please try again in a few minutes.' },
      { status: 429, headers: corsHeaders() }
    );
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

    // Try MongoDB, but gracefully handle if unavailable
    try {
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
    } catch (dbError) {
      console.log('MongoDB not available for contact form, message logged to console instead');
      console.log('Contact message:', { name, email, message, created_at: new Date().toISOString() });
    }
    
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
      { success: false, error: 'Database not available. ' + error.message },
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
      { status: 'partially_healthy', database: 'disconnected', github_api: 'available', error: error.message },
      { status: 200, headers: corsHeaders() }
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
