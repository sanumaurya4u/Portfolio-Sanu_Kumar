'use client';

import { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  RefreshCw,
  Folder,
  Search,
  ArrowRight,
  Globe,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';

const GITHUB_USERNAME = 'sanumaurya4u';

const RESUME_PROJECTS = [
  {
    id: 'ecell-uiet-mdu',
    name: 'E-CELL UIET-MDU',
    tag: 'FLAGSHIP · E-CELL',
    tagType: 'orange',
    year: '2026',
    subtitle: 'Next.js · TypeScript · Tailwind CSS · Supabase · GSAP',
    description:
      'Official website of the Entrepreneurship Cell that showcases events, team, and startup resources with high-performance animations.',
    language: 'TypeScript',
    html_url: 'https://github.com/sanumaurya4u',
    homepage: null,
    topics: ['nextjs', 'typescript', 'tailwind', 'supabase', 'gsap'],
  },
  {
    id: 'kisan-direct',
    name: 'Kisan Direct',
    tag: 'AGRITECH',
    tagType: 'orange',
    year: '2026',
    subtitle: 'React · Node.js · Express.js · PostgreSQL',
    description:
      'Platform connecting farmers directly with consumers with product listing, real-time orders, and secure authentication.',
    language: 'JavaScript',
    html_url: 'https://github.com/sanumaurya4u',
    homepage: null,
    topics: ['react', 'nodejs', 'express', 'postgresql', 'rest-api'],
  },
  {
    id: 'magnus-ai',
    name: 'Magnus AI',
    tag: 'AI APPLICATION',
    tagType: 'orange',
    year: '2026',
    subtitle: 'React · Gemini API · Tailwind CSS',
    description:
      'AI-powered web app using the Google Gemini API for intelligent content generation with a clean, responsive UI.',
    language: 'JavaScript',
    html_url: 'https://github.com/sanumaurya4u',
    homepage: null,
    topics: ['react', 'gemini-api', 'tailwind', 'ai-generation'],
  },
  {
    id: 'campus-connect',
    name: 'Campus Connect',
    tag: 'COMMUNITY',
    tagType: 'neutral',
    year: '2026',
    subtitle: 'React · Supabase · Tailwind CSS',
    description:
      'Campus networking app to share resources, events, and announcements with real-time features and student collaboration.',
    language: 'TypeScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/CampusConnect`,
    homepage: 'https://campus-connect-smoky-rho.vercel.app',
    topics: ['react', 'supabase', 'tailwind', 'realtime'],
  },
  {
    id: 'alpha-home-tuition',
    name: 'Alpha Home Tuition',
    tag: 'EDTECH & AI',
    tagType: 'neutral',
    year: '2025-26',
    subtitle: 'React · Supabase · Tailwind CSS · NVIDIA AI Chatbot',
    description:
      'Built a tuition platform with NVIDIA AI chatbot, user authentication, student portal, admin dashboard, and real-time database.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/AlphaHomeTut`,
    homepage: 'https://alphahometuition.app',
    topics: ['react', 'supabase', 'nvidia-ai', 'chatbot'],
  },
];

const FALLBACK_REPOS = [
  {
    id: 'ecell-uiet-mdu',
    name: 'E-CELL UIET-MDU',
    description:
      'Official website of the Entrepreneurship Cell that showcases events, team, and startup resources built with Next.js, TypeScript, Supabase, and GSAP.',
    language: 'TypeScript',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    homepage: null,
    stars: 2,
    forks: 0,
    topics: ['nextjs', 'typescript', 'tailwind', 'supabase', 'gsap'],
    updated_at: '2026-09-01T10:00:00Z',
  },
  {
    id: 'kisan-direct',
    name: 'Kisan Direct',
    description:
      'Platform connecting farmers directly with consumers with product listing, real-time orders, and secure authentication.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    homepage: null,
    stars: 1,
    forks: 0,
    topics: ['react', 'nodejs', 'express', 'postgresql'],
    updated_at: '2026-08-15T12:00:00Z',
  },
  {
    id: 'magnus-ai',
    name: 'Magnus AI',
    description:
      'AI-powered web app using the Google Gemini API for intelligent content generation with a clean, responsive UI.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    homepage: null,
    stars: 1,
    forks: 0,
    topics: ['react', 'gemini-api', 'tailwind', 'ai'],
    updated_at: '2026-08-10T14:30:00Z',
  },
  {
    id: '1239149007',
    name: 'AlphaHomeTut',
    description:
      'An AI-powered home tuition platform connecting students with verified tutors through role-based dashboards, Supabase backend, Chatbot Automation, and secure workflows.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/AlphaHomeTut`,
    homepage: 'https://alphahometuition.app',
    stars: 1,
    forks: 0,
    topics: ['react', 'supabase', 'chatbot', 'ai-tutor'],
    updated_at: '2026-07-19T15:31:24Z',
  },
  {
    id: '1343706849',
    name: 'CampusConnect',
    description:
      'Campus Connect is a centralized campus engagement and community platform designed to streamline student club discovery, event management, and institutional collaboration.',
    language: 'TypeScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/CampusConnect`,
    homepage: 'https://campus-connect-smoky-rho.vercel.app',
    stars: 0,
    forks: 0,
    topics: ['nextjs', 'typescript', 'tailwind', 'community'],
    updated_at: '2026-08-28T21:48:13Z',
  },
  {
    id: '1071741371',
    name: 'Jalgram_4_Water-Mang',
    description:
      "Smart India Hackathon (SIH 2025) Team Leader Project — A comprehensive smart water management and monitoring system for rural communities.",
    language: 'TypeScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/Jalgram_4_Water-Mang`,
    homepage: 'https://jalgram.vercel.app',
    stars: 1,
    forks: 0,
    topics: ['sih2025', 'water-management', 'iot', 'typescript'],
    updated_at: '2026-07-15T07:30:43Z',
  },
  {
    id: '1301427575',
    name: 'Master_Calc',
    description:
      'A comprehensive, all-in-one developer and converter app built with Next.js, TypeScript, Tailwind CSS, and Framer Motion with multi-unit conversions.',
    language: 'TypeScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/Master_Calc`,
    homepage: 'https://master-calc.vercel.app',
    stars: 0,
    forks: 0,
    topics: ['calculator', 'typescript', 'nextjs', 'math-tools'],
    updated_at: '2026-07-15T09:48:31Z',
  },
  {
    id: '1179200102',
    name: 'Habit-Flow',
    description:
      'Productivity and daily habit tracking web application built with React, Vite, and deployed on Vercel with clean analytics.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/Habit-Flow`,
    homepage: 'https://habit-flow-theta.vercel.app/',
    stars: 1,
    forks: 0,
    topics: ['productivity', 'react', 'habit-tracker'],
    updated_at: '2026-07-15T08:43:18Z',
  },
  {
    id: '1175414143',
    name: 'Weather-app',
    description:
      'Real-time weather forecast application with clean modern UI, location queries, and responsive meteorological metrics built with React and Vite.',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/Weather-app`,
    homepage: 'https://aero-weather-eta.vercel.app',
    stars: 1,
    forks: 0,
    topics: ['weather-app', 'react', 'api', 'metrics'],
    updated_at: '2026-07-15T08:29:19Z',
  },
];

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedLang, setSelectedLang] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dataSource, setDataSource] = useState('');

  const fetchRepos = async (forceRefresh = false) => {
    try {
      if (forceRefresh) setRefreshing(true);
      else setLoading(true);

      // Attempt 1: Next.js internal API route
      try {
        const url = `/api/github?username=${GITHUB_USERNAME}${forceRefresh ? '&refresh=true' : ''}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.success && data.repos && data.repos.length > 0) {
          setRepos(data.repos.filter((r) => !r.fork));
          setDataSource(data.source || 'live');
          return;
        }
      } catch (e) {
        console.warn('API route failed, trying direct GitHub fetch');
      }

      // Attempt 2: Direct GitHub API
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
        );
        if (res.ok) {
          const directData = await res.json();
          const formatted = directData
            .filter((r) => !r.fork)
            .map((r) => ({
              id: r.id.toString(),
              name: r.name,
              description: r.description || 'No description available',
              language: r.language || 'Code',
              html_url: r.html_url,
              homepage: r.homepage || null,
              stars: r.stargazers_count,
              forks: r.forks_count,
              topics: r.topics || [],
              updated_at: r.updated_at,
            }));
          setRepos(formatted);
          setDataSource('direct');
          return;
        }
      } catch (e) {
        console.warn('Direct fetch failed, falling back to static repos');
      }

      // Fallback
      setRepos(FALLBACK_REPOS);
      setDataSource('fallback');
    } catch (err) {
      setRepos(FALLBACK_REPOS);
      setDataSource('fallback');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRepos(false);
  }, []);

  const languages = ['All', ...new Set(repos.map((r) => r.language).filter(Boolean))];

  const filteredRepos = repos.filter((r) => {
    const matchesLang = selectedLang === 'All' || r.language === selectedLang;
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (r.topics && r.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesLang && matchesSearch;
  });

  const timeAgo = (dateStr) => {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    return `${Math.floor(months / 12)}y ago`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="chai-kicker">Software Engineering & Production Builds</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight mt-1">
              Projects & <span className="text-[#E45D25]">Repositories</span>
            </h1>
          </div>
          <button
            onClick={() => fetchRepos(true)}
            disabled={refreshing}
            className="self-start sm:self-auto px-4 py-2 rounded-full border border-[#DDD3C5] bg-[#FAF7F2] hover:bg-[#F2ECE2] text-[#1F1712] text-xs font-semibold inline-flex items-center gap-2 transition-colors disabled:opacity-50"
            title="Refresh repository cache"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
            <span>{refreshing ? 'Syncing...' : 'Sync GitHub'}</span>
          </button>
        </div>
        <p className="text-base text-[#5C4E43] max-w-2xl leading-relaxed">
          Production applications, AI platforms, and open-source repositories verified from my official resume and GitHub profile.
        </p>
      </div>

      {/* ===================== SECTION 1: FLAGSHIP RESUME PROJECTS ===================== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E45D25]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667]">
                Official Resume Showcase
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
              Flagship Resume Projects
            </h2>
          </div>
          <span className="chai-tag-orange text-xs py-1 px-3">
            5 Verified Projects
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                idx === 0
                  ? 'sm:col-span-2 lg:col-span-2 chai-card-active'
                  : 'chai-card bg-white'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-[#1F1712] tracking-tight">
                    {proj.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-[#8C7667]">{proj.year}</span>
                    <span
                      className={
                        proj.tagType === 'orange' ? 'chai-tag-orange' : 'chai-tag'
                      }
                    >
                      {proj.tag}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-medium text-[#8C7667]">{proj.subtitle}</p>

                <p className="text-sm text-[#5C4E43] leading-relaxed">
                  {proj.description}
                </p>

                {/* Topics / Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E7DEC8] text-[#63574E] font-mono"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-[#EFE8DD] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <a
                    href={proj.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chai-btn-secondary py-1.5 px-3 text-xs inline-flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                  {proj.homepage && (
                    <a
                      href={proj.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1F1712] hover:bg-[#382D25] text-white py-1.5 px-3 rounded-full text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
                <span className="text-[11px] text-[#8C7667] font-medium">
                  Resume Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== SECTION 2: GITHUB REPOSITORIES ===================== */}
      <section className="space-y-6 pt-8 border-t border-[#E7DEC8]">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1F1712]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667]">
                Live Version Control
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
              Open-Source GitHub Repositories
            </h2>
            <p className="text-sm text-[#5C4E43]">
              Codebases and public repositories synchronized with github.com/{GITHUB_USERNAME}.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Language filter pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    selectedLang === lang
                      ? 'bg-[#1F1712] text-white shadow-sm'
                      : 'bg-[#FAF7F2] border border-[#DDD3C5] text-[#63574E] hover:text-[#1F1712] hover:bg-[#F2ECE2]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 text-[#8C7667] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#DDD3C5] rounded-full pl-9 pr-4 py-1.5 text-xs text-[#1F1712] placeholder-[#8C7667] focus:outline-none focus:border-[#E45D25] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#E45D25] border-t-transparent animate-spin mx-auto" />
            <p className="text-xs text-[#63574E] font-medium">Fetching repository data from GitHub...</p>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="chai-card p-12 text-center bg-white space-y-2">
            <Folder className="w-10 h-10 text-[#DDD3C5] mx-auto" />
            <h3 className="text-base font-bold text-[#1F1712]">No projects found</h3>
            <p className="text-xs text-[#63574E]">Try adjusting your search terms or language filter.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id || repo.name}
                className="chai-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#D8CDBA] transition-all bg-white"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#FAF7F2] border border-[#E7DEC8] flex items-center justify-center text-[#E45D25]">
                        <Folder className="w-4 h-4" />
                      </span>
                      <h3 className="text-base font-bold text-[#1F1712] tracking-tight">
                        {repo.name}
                      </h3>
                    </div>
                    {repo.language && (
                      <span className="chai-tag text-[10px] py-0.5 px-2">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#5C4E43] leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>

                  {/* Topics / Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E7DEC8] text-[#63574E] font-mono"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom stats and action buttons */}
                <div className="pt-6 mt-6 border-t border-[#EFE8DD] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-[#8C7667]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {repo.stars || 0}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks || 0}
                    </span>
                    {repo.updated_at && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        {timeAgo(repo.updated_at)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chai-btn-secondary py-1.5 px-3 text-xs"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1F1712] hover:bg-[#382D25] text-white py-1.5 px-3 rounded-full text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* GitHub Profile Banner */}
      <div className="chai-card p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1F1712] text-white flex items-center justify-center flex-shrink-0">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1F1712]">
              Want to inspect more code repositories?
            </h3>
            <p className="text-xs text-[#63574E] mt-0.5">
              Explore repositories, commit activity, and open-source contributions on github.com/{GITHUB_USERNAME}.
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 flex-shrink-0 transition-colors"
        >
          <span>Open Full GitHub Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
