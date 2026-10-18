'use client';

import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
  Trophy,
  CheckCircle2,
  Code2,
  Database,
  Cpu,
  Layers,
  MapPin
} from 'lucide-react';

const PROFILE_IMAGE = 'https://customer-assets.emergentagent.com/job_cse-portfolio-39/artifacts/609ekhyr_IMG_20260130_222658.jpg';

export default function HomePage() {
  const featuredProjects = [
    {
      title: 'E-CELL UIET-MDU',
      tag: 'FLAGSHIP · E-CELL',
      tagType: 'orange',
      subtitle: 'Next.js · TypeScript · Tailwind CSS · Supabase · GSAP',
      description:
        'Official website of the Entrepreneurship Cell that showcases events, team, and startup resources with interactive animations.',
      topics: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GSAP'],
      github: 'https://github.com/sanumaurya4u',
      demo: null,
      link: '/projects',
      year: '2026',
    },
    {
      title: 'Kisan Direct',
      tag: 'AGRITECH',
      tagType: 'orange',
      subtitle: 'React · Node.js · Express.js · PostgreSQL',
      description:
        'Platform connecting farmers directly with consumers with product listing, real-time orders, and secure authentication.',
      topics: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      github: 'https://github.com/sanumaurya4u',
      demo: null,
      link: '/projects',
      year: '2026',
    },
    {
      title: 'Magnus AI',
      tag: 'AI APPLICATION',
      tagType: 'orange',
      subtitle: 'React · Gemini API · Tailwind CSS',
      description:
        'AI-powered web app using the Google Gemini API for intelligent content generation with a responsive UI.',
      topics: ['React', 'Gemini API', 'Tailwind CSS', 'AI Generation'],
      github: 'https://github.com/sanumaurya4u',
      demo: null,
      link: '/projects',
      year: '2026',
    },
    {
      title: 'Campus Connect',
      tag: 'COMMUNITY',
      tagType: 'neutral',
      subtitle: 'React · Supabase · Tailwind CSS',
      description:
        'Campus networking app to share resources, events, and announcements with real-time features.',
      topics: ['React', 'Supabase', 'Tailwind CSS', 'Realtime'],
      github: 'https://github.com/sanumaurya4u/CampusConnect',
      demo: 'https://campus-connect-smoky-rho.vercel.app',
      link: '/projects',
      year: '2026',
    },
    {
      title: 'Alpha Home Tuition',
      tag: 'EDTECH & AI',
      tagType: 'neutral',
      subtitle: 'React · Supabase · Tailwind CSS · NVIDIA AI Chatbot',
      description:
        'Built a tuition platform with NVIDIA AI chatbot, user authentication, student portal, admin dashboard, and real-time database.',
      topics: ['React', 'Supabase', 'NVIDIA AI', 'Tailwind CSS'],
      github: 'https://github.com/sanumaurya4u/AlphaHomeTut',
      demo: 'https://alphahometuition.app',
      link: '/projects',
      year: '2025-26',
    },
  ];

  return (
    <div className="space-y-24 py-10 sm:py-16">
      {/* ===================== HERO SECTION ===================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="chai-kicker">Watch Computer Science Think</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25]" />
              <span className="text-xs text-[#8C7667] font-medium">B.Tech CSE '28 · UIET MDU Rohtak</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F1712] tracking-tight leading-[1.1]">
              Data. Systems.{' '}
              <span className="text-[#E45D25]">Algorithms.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C4E43] leading-relaxed max-w-xl font-normal">
              I'm <strong className="text-[#1F1712] font-semibold">Sanu Kumar</strong>, a full-stack developer, Tech supporter of E-Cell, and computer science undergraduate at UIET MDU Rohtak. I build responsive web applications using React, Node.js, Express.js, PostgreSQL, Supabase, and Railway, architect scalable data models, and automate workflows with modern AI.
            </p>

            {/* Topic Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Full-Stack Web',
                'React & Next.js',
                'PostgreSQL & Supabase',
                'Node.js & Express',
                'Algorithms & DSA',
                'Railway & Deployment',
                'AI & Automation'
              ].map((topic) => (
                <span key={topic} className="chai-tag">
                  {topic}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                to="/projects"
                className="bg-[#1F1712] hover:bg-[#382D25] text-white px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-sm transition-all duration-150 hover:gap-3"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/resume"
                className="bg-[#FAF7F2] border border-[#DDD3C5] hover:bg-[#F2ECE2] text-[#1F1712] px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-150"
              >
                <span>View Resume</span>
              </Link>
              <Link
                to="/about"
                className="text-[#63574E] hover:text-[#1F1712] px-4 py-3 text-sm font-medium transition-colors"
              >
                About My Journey
              </Link>
            </div>
          </div>

          {/* Right Column: Simplified Professional Profile Card */}
          <div className="lg:col-span-5">
            <div className="chai-card p-6 sm:p-7 bg-white shadow-sm border border-[#E7DEC8] relative overflow-hidden flex flex-col items-center text-center space-y-4">
              {/* Top Row: Availability Badge & Location */}
              <div className="flex items-center justify-between w-full pb-3 border-b border-[#EFE8DD]">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Roles</span>
                </div>
                <span className="text-xs font-mono text-[#8C7667]">
                  Rohtak, IN
                </span>
              </div>

              {/* Centered Profile Avatar with Glowing Neon Gradient Ring */}
              <div className="relative my-3 flex items-center justify-center">
                {/* Ambient glow behind avatar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-500/15 to-[#E45D25]/20 blur-xl scale-105 -z-10" />

                {/* Circular Avatar with Glowing Neon Gradient Ring */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-[3px] bg-gradient-to-tr from-[#9333EA] via-[#EC4899] to-[#E45D25] shadow-[0_0_24px_rgba(168,85,247,0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1F1712]">
                    <img
                      src={PROFILE_IMAGE}
                      alt="Sanu Kumar"
                      className="w-full h-full object-cover object-top"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              {/* Centered Concise Details */}
              <div className="space-y-1.5 w-full">
                <h3 className="text-2xl font-bold text-[#1F1712] tracking-tight">
                  Sanu Kumar
                </h3>
                <div>
                  <span className="chai-tag-orange text-xs py-0.5 px-3 font-semibold">
                    Tech Support · E-Cell UIET
                  </span>
                </div>
                <p className="text-xs text-[#63574E] font-medium pt-0.5">
                  Full-Stack Developer · B.Tech CSE '28
                </p>
                <p className="text-xs text-[#5C4E43] leading-relaxed max-w-xs mx-auto pt-1">
                  Crafting clean, responsive web apps and AI-powered digital products at UIET MDU.
                </p>
              </div>

              {/* Action Links Row */}
              <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between w-full text-xs">
                <div className="flex items-center gap-3 text-[#E45D25] font-semibold">
                  <Link to="/about" className="hover:underline inline-flex items-center gap-1">
                    Read bio <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-[#DDD3C5]">·</span>
                  <Link to="/contact" className="hover:underline">
                    Send message
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/sanumaurya4u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E7DEC8] hover:border-[#1F1712] hover:bg-[#F2ECE2] text-[#1F1712] flex items-center justify-center transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanu-kumar-91619b233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E7DEC8] hover:border-[#1F1712] hover:bg-[#F2ECE2] text-[#1F1712] flex items-center justify-center transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUICK STATS SECTION ===================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'E-Cell UIET-MDU', value: 'Tech Support', sub: 'Official web & initiatives' },
            { label: 'Engineering CGPA', value: '8.3', sub: 'UIET MDU Rohtak' },
            { label: 'Hackathons', value: 'SIH-25/26', sub: 'Head Coordinator' },
            { label: 'Resume Projects', value: '5 Flagship', sub: 'Full-stack & AI' },
          ].map((stat, i) => (
            <div
              key={i}
              className="chai-card p-5 bg-white text-center hover:border-[#D8CDBA] transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-[#1F1712] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[#1F1712] mt-1">{stat.label}</div>
              <div className="text-[11px] text-[#8C7667] mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#E7DEC8]">
          <div>
            <div className="chai-kicker">Curated Engineering</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1712] tracking-tight mt-1">
              Featured Projects
            </h2>
            <p className="text-sm text-[#63574E] mt-1">
              Production web applications, AI integrations, and platforms from my official resume.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-semibold text-[#E45D25] hover:text-[#C94E1B] inline-flex items-center gap-1 group self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Adaptive responsive grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.title}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                idx === 0
                  ? 'sm:col-span-2 lg:col-span-2 chai-card-active'
                  : 'chai-card bg-white'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1F1712] tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-[#8C7667]">{project.year}</span>
                    <span
                      className={
                        project.tagType === 'orange' ? 'chai-tag-orange' : 'chai-tag'
                      }
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-medium text-[#8C7667]">{project.subtitle}</p>
                <p className="text-sm text-[#5C4E43] leading-relaxed">
                  {project.description}
                </p>

                {/* Topics Cloud */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.topics.map((t) => (
                    <span key={t} className="chai-tag text-[11px] py-0.5 px-2.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 mt-6 border-t border-[#EFE8DD] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#63574E] hover:text-[#1F1712] inline-flex items-center gap-1 font-medium"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#63574E] hover:text-[#1F1712] inline-flex items-center gap-1 font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
                <Link
                  to="/projects"
                  className="text-xs font-bold text-[#E45D25] hover:text-[#C94E1B] inline-flex items-center gap-1"
                >
                  Enter <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PHILOSOPHY / EDITORIAL BANNER ===================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="chai-card p-8 sm:p-12 bg-white relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="chai-kicker-orange">First Principles · Clean Design</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1712] tracking-tight leading-tight">
              Never stop at the <span className="text-[#E45D25]">first</span> solution.
            </h2>
            <p className="text-base text-[#5C4E43] leading-relaxed">
              Every system problem carries multiple approaches — the obvious brute force and the sharp optimization. I balance reliable architecture, algorithmic efficiency, and clean ergonomics so that codebases stay maintainable, fast, and pleasant to use.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/skills"
                className="bg-[#1F1712] hover:bg-[#382D25] text-white px-5 py-2.5 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors"
              >
                Inspect Technical Skills
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/experience"
                className="bg-[#FAF7F2] border border-[#DDD3C5] hover:bg-[#F2ECE2] text-[#1F1712] px-5 py-2.5 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-colors"
              >
                View Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
