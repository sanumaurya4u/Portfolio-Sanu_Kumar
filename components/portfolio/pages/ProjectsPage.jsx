'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  RefreshCw,
  Folder,
  Search,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  ArrowUpDown,
  ChevronDown,
  X,
  Layers
} from 'lucide-react';

const DEFAULT_USERNAME = 'sanumaurya4u';

const KNOWN_HOMEPAGES = {
  'campusconnect': 'https://campus-connect-smoky-rho.vercel.app',
  'alphahometut': 'https://alphahometuition.app',
  'jalgram_4_water-mang': 'https://jalgram.vercel.app',
  'master_calc': 'https://master-calc.vercel.app',
  'habit-flow': 'https://habit-flow-theta.vercel.app/',
  'weather-app': 'https://aero-weather-eta.vercel.app',
  'portfolio-sanu_kumar': 'https://sanumaurya.me',
  'e-cell_uiet-mdu': 'https://ecellmdu.vercel.app',
  'kisan-direct': 'https://kisan-direct-omega.vercel.app/',
  'magnus-ai': 'https://magnus4ai.vercel.app/learner',
};

// Manually featured flagship projects (pinned at the front)
const FEATURED_PROJECTS = [
  {
    id: 'ecell-uiet-mdu',
    name: 'E-CELL UIET-MDU',
    repoKey: 'e-cell_uiet-mdu',
    tag: 'FLAGSHIP · E-CELL',
    tagType: 'orange',
    isFeatured: true,
    year: '2026',
    subtitle: 'Next.js · TypeScript · Tailwind CSS · Supabase · GSAP',
    description:
      'Official website of the Entrepreneurship Cell that showcases events, team, and startup resources with high-performance animations.',
    language: 'TypeScript',
    html_url: 'https://github.com/sanumaurya4u/E-CELL_UIET-MDU',
    homepage: 'https://ecellmdu.vercel.app',
    stars: 2,
    forks: 0,
    topics: ['nextjs', 'typescript', 'tailwind', 'supabase', 'gsap'],
    updated_at: '2026-09-01T10:00:00Z',
  },
  {
    id: 'kisan-direct',
    name: 'Kisan Direct',
    repoKey: 'kisan-direct',
    tag: 'AGRITECH',
    tagType: 'orange',
    isFeatured: true,
    year: '2026',
    subtitle: 'React · Node.js · Express.js · PostgreSQL',
    description:
      'Platform connecting farmers directly with consumers with product listing, real-time orders, and secure authentication.',
    language: 'JavaScript',
    html_url: 'https://github.com/sanumaurya4u/Kisan-Direct',
    homepage: 'https://kisan-direct-omega.vercel.app/',
    stars: 1,
    forks: 0,
    topics: ['react', 'nodejs', 'express', 'postgresql', 'rest-api'],
    updated_at: '2026-08-15T12:00:00Z',
  },
  {
    id: 'magnus-ai',
    name: 'Magnus AI',
    repoKey: 'magnus-ai',
    tag: 'AI APPLICATION',
    tagType: 'orange',
    isFeatured: true,
    year: '2026',
    subtitle: 'React · Gemini API · Tailwind CSS',
    description:
      'AI-powered web app using the Google Gemini API for intelligent content generation with a clean, responsive UI.',
    language: 'JavaScript',
    html_url: 'https://github.com/sanumaurya4u/Magnus-AI',
    homepage: 'https://magnus4ai.vercel.app/learner',
    stars: 1,
    forks: 0,
    topics: ['react', 'gemini-api', 'tailwind', 'ai-generation'],
    updated_at: '2026-08-10T14:30:00Z',
  },
  {
    id: 'campus-connect',
    name: 'Campus Connect',
    repoKey: 'campusconnect',
    tag: 'COMMUNITY',
    tagType: 'neutral',
    isFeatured: true,
    year: '2026',
    subtitle: 'React · Supabase · Tailwind CSS',
    description:
      'Campus networking app to share resources, events, and announcements with real-time features and student collaboration.',
    language: 'TypeScript',
    html_url: 'https://github.com/sanumaurya4u/CampusConnect',
    homepage: 'https://campus-connect-smoky-rho.vercel.app',
    stars: 0,
    forks: 0,
    topics: ['react', 'supabase', 'tailwind', 'realtime'],
    updated_at: '2026-08-28T21:48:13Z',
  },
  {
    id: 'alpha-home-tuition',
    name: 'Alpha Home Tuition',
    repoKey: 'alphahometut',
    tag: 'EDTECH & AI',
    tagType: 'neutral',
    isFeatured: true,
    year: '2025-26',
    subtitle: 'React · Supabase · Tailwind CSS · NVIDIA AI Chatbot',
    description:
      'Built a tuition platform with NVIDIA AI chatbot, user authentication, student portal, admin dashboard, and real-time database.',
    language: 'JavaScript',
    html_url: 'https://github.com/sanumaurya4u/AlphaHomeTut',
    homepage: 'https://alphahometuition.app',
    stars: 1,
    forks: 0,
    topics: ['react', 'supabase', 'nvidia-ai', 'chatbot'],
    updated_at: '2026-07-19T15:31:24Z',
  },
];

const INITIAL_VISIBLE_COUNT = 9;

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('updated'); // updated, stars, forks, name
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [dataSource, setDataSource] = useState('');

  const fetchRepos = async (forceRefresh = false) => {
    try {
      if (forceRefresh) setRefreshing(true);
      else setLoading(true);

      // Attempt 1: Server-side Next.js API route (/api/github)
      try {
        const url = `/api/github${forceRefresh ? '?refresh=true' : ''}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.repos)) {
            if (data.username) setUsername(data.username);
            const filtered = data.repos
              .filter(
                (r) =>
                  !r.fork &&
                  r.name.toLowerCase() !== (data.username || DEFAULT_USERNAME).toLowerCase()
              )
              .map((r) => ({
                ...r,
                homepage: r.homepage || KNOWN_HOMEPAGES[r.name.toLowerCase()] || null,
              }));
            setRepos(filtered);
            setDataSource(data.source || 'live');
            return;
          }
        }
      } catch (e) {
        console.warn('Internal API route failed, trying direct GitHub fetch fallback');
      }

      // Attempt 2: Direct GitHub API fallback
      try {
        const res = await fetch(
          `https://api.github.com/users/${DEFAULT_USERNAME}/repos?sort=updated&per_page=100`
        );
        if (res.ok) {
          const directData = await res.json();
          const formatted = directData
            .filter(
              (r) => !r.fork && r.name.toLowerCase() !== DEFAULT_USERNAME.toLowerCase()
            )
            .map((r) => ({
              id: r.id.toString(),
              name: r.name,
              description: r.description || 'No description available',
              language: r.language || 'Code',
              html_url: r.html_url,
              homepage: r.homepage || KNOWN_HOMEPAGES[r.name.toLowerCase()] || null,
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
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

      // Fallback: static verified projects
      setRepos([]);
      setDataSource('fallback');
    } catch (err) {
      setRepos([]);
      setDataSource('fallback');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRepos(false);
  }, []);

  // Merge Featured Projects with Dynamic Repos (deduplicating and enriching)
  const unifiedProjects = useMemo(() => {
    const featuredRepoKeys = new Set(
      FEATURED_PROJECTS.map((p) => p.repoKey.toLowerCase())
    );

    // Enrich featured projects with real-time stats from GitHub if available
    const enrichedFeatured = FEATURED_PROJECTS.map((featured) => {
      const match = repos.find(
        (r) => r.name.toLowerCase() === featured.repoKey.toLowerCase()
      );
      if (match) {
        return {
          ...featured,
          stars: match.stars ?? featured.stars,
          forks: match.forks ?? featured.forks,
          updated_at: match.updated_at || featured.updated_at,
          description: match.description || featured.description,
          topics: match.topics && match.topics.length > 0 ? match.topics : featured.topics,
          homepage: featured.homepage || match.homepage,
        };
      }
      return featured;
    });

    // Dynamic repos that are NOT already pinned as featured
    const dynamicOnly = repos.filter(
      (r) => !featuredRepoKeys.has(r.name.toLowerCase())
    );

    // Apply sort order to the dynamic repos
    const sortedDynamic = [...dynamicOnly].sort((a, b) => {
      if (sortBy === 'stars') return (b.stars || 0) - (a.stars || 0);
      if (sortBy === 'forks') return (b.forks || 0) - (a.forks || 0);
      if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
      // default: updated
      return new Date(b.updated_at || 0).getTime() - new Date(a.updated_at || 0).getTime();
    });

    // Keep featured projects pinned at the top, followed by sorted dynamic repos
    return [...enrichedFeatured, ...sortedDynamic];
  }, [repos, sortBy]);

  // Apply search query filter
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return unifiedProjects;
    const q = searchQuery.toLowerCase().trim();
    return unifiedProjects.filter((p) => {
      const nameMatch = (p.name || '').toLowerCase().includes(q);
      const descMatch = (p.description || '').toLowerCase().includes(q);
      const subtitleMatch = (p.subtitle || '').toLowerCase().includes(q);
      const topicMatch = (p.topics || []).some((t) => t.toLowerCase().includes(q));
      const langMatch = (p.language || '').toLowerCase().includes(q);
      return nameMatch || descMatch || subtitleMatch || topicMatch || langMatch;
    });
  }, [unifiedProjects, searchQuery]);

  // Visible sliced projects for pagination
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const timeAgo = (dateStr) => {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days <= 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    return `${Math.floor(months / 12)}y ago`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 pb-8 border-b border-[#E7DEC8]">
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
            className="self-start sm:self-auto px-4 py-2 rounded-full border border-[#DDD3C5] bg-[#FAF7F2] hover:bg-[#F2ECE2] text-[#1F1712] text-xs font-semibold inline-flex items-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
            title="Synchronize fresh data from GitHub API"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-[#E45D25]' : ''}`} />
            <span>{refreshing ? 'Syncing...' : 'Sync GitHub'}</span>
          </button>
        </div>
        <p className="text-base text-[#5C4E43] max-w-2xl leading-relaxed">
          Production applications, AI platforms, and open-source repositories verified from my official resume and dynamically synchronized with GitHub.
        </p>
      </div>

      {/* Controls Bar: Search & Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E7DEC8] shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#8C7667] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects, topics, or technologies..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(INITIAL_VISIBLE_COUNT);
            }}
            className="w-full bg-[#FAF7F2] border border-[#DDD3C5] rounded-xl pl-10 pr-9 py-2 text-xs text-[#1F1712] placeholder-[#8C7667] focus:outline-none focus:border-[#E45D25] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7667] hover:text-[#1F1712] p-0.5"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Selector & Count */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C7667]" />
            <span className="text-xs font-medium text-[#8C7667] hidden md:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF7F2] border border-[#DDD3C5] rounded-xl px-3 py-2 text-xs text-[#1F1712] font-medium focus:outline-none focus:border-[#E45D25] cursor-pointer"
            >
              <option value="updated">Recently Updated</option>
              <option value="stars">Most Stars</option>
              <option value="forks">Most Forks</option>
              <option value="name">Name (A–Z)</option>
            </select>
          </div>

          <span className="text-xs font-mono text-[#8C7667] px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E7DEC8] whitespace-nowrap">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </div>

      {/* Main Unified Projects Grid */}
      {loading ? (
        <div className="py-24 text-center space-y-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#E45D25] border-t-transparent animate-spin mx-auto" />
          <p className="text-xs text-[#63574E] font-medium tracking-wide">
            Fetching repositories and live deployments from GitHub...
          </p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="chai-card p-12 text-center bg-white space-y-3">
          <Folder className="w-10 h-10 text-[#DDD3C5] mx-auto" />
          <h3 className="text-base font-bold text-[#1F1712]">No projects found</h3>
          <p className="text-xs text-[#63574E] max-w-sm mx-auto">
            No projects matched "{searchQuery}". Try searching for another keyword or clear the search.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-xs font-semibold text-[#E45D25] hover:underline inline-flex items-center gap-1 pt-1"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, idx) => {
              const isFlagship = Boolean(project.isFeatured);
              return (
                <div
                  key={project.id || project.name}
                  className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 rounded-2xl ${
                    isFlagship && idx === 0
                      ? 'sm:col-span-2 lg:col-span-2 chai-card-active shadow-sm'
                      : isFlagship
                      ? 'chai-card bg-white border-[#E45D25]/30 hover:border-[#E45D25]'
                      : 'chai-card bg-white hover:border-[#D8CDBA]'
                  }`}
                >
                  <div className="space-y-3.5">
                    {/* Header Row: Title & Badges */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isFlagship
                              ? 'bg-[#E45D25]/10 text-[#E45D25]'
                              : 'bg-[#FAF7F2] border border-[#E7DEC8] text-[#8C7667]'
                          }`}
                        >
                          {isFlagship ? (
                            <Sparkles className="w-3.5 h-3.5" />
                          ) : (
                            <Folder className="w-3.5 h-3.5" />
                          )}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#1F1712] tracking-tight">
                          {project.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {isFlagship && (
                          <span className="chai-tag-orange text-[10px] py-0.5 px-2 font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                        {project.language && (
                          <span className="chai-tag text-[10px] py-0.5 px-2">
                            {project.language}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subtitle / Tech Spec if present */}
                    {project.subtitle && (
                      <p className="text-xs font-medium text-[#8C7667]">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-xs text-[#5C4E43] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Topic Tags */}
                    {project.topics && project.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.topics.slice(0, 4).map((topic) => (
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

                  {/* Footer Row: Metrics & Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-[#EFE8DD] flex items-center justify-between text-xs">
                    {/* Stars, Forks, Updated Time */}
                    <div className="flex items-center gap-3 text-[#8C7667]">
                      <span
                        className="inline-flex items-center gap-1 font-medium"
                        title={`${project.stars || 0} GitHub Stars`}
                      >
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        {project.stars || 0}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 font-medium"
                        title={`${project.forks || 0} GitHub Forks`}
                      >
                        <GitFork className="w-3.5 h-3.5" />
                        {project.forks || 0}
                      </span>
                      {project.updated_at && (
                        <span
                          className="hidden sm:inline-flex items-center gap-1 text-[11px]"
                          title={`Last updated ${project.updated_at}`}
                        >
                          <Clock className="w-3 h-3" />
                          {timeAgo(project.updated_at)}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons: Code & Live Demo */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chai-btn-secondary py-1.5 px-3 text-xs inline-flex items-center gap-1"
                        title="View source code on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#1F1712] hover:bg-[#382D25] text-white py-1.5 px-3 rounded-full text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                          title="Open live production deployment"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="pt-4 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2.5 rounded-full border border-[#DDD3C5] bg-white hover:bg-[#FAF7F2] text-[#1F1712] text-xs font-bold inline-flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Load More Projects</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E45D25]" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* GitHub Profile Banner */}
      <div className="chai-card p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6 border-[#E7DEC8]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1F1712] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1F1712]">
              Explore Complete GitHub Profile
            </h3>
            <p className="text-xs text-[#63574E] mt-0.5">
              Inspect repositories, commit history, and open-source contributions on github.com/{username}.
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 flex-shrink-0 transition-colors shadow-sm"
        >
          <span>Open Full GitHub Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
