'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Globe,
  Layout,
  GitFork,
  Github,
  Zap,
  MousePointer2,
  Smartphone,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const SKILLS_CATEGORIES = [
  {
    id: 'languages',
    name: 'Programming Languages',
    description: 'Core languages utilized for system logic, algorithms, and database queries.',
    skills: [
      { name: 'C++', desc: 'Primary language for DSA & competitive problem solving', level: 'Advanced', highlight: true },
      { name: 'C', desc: 'System programming, memory management, pointers', level: 'Proficient' },
      { name: 'Python Basics', desc: 'Data manipulation, scripts, AI automation pipelines', level: 'Intermediate' },
      { name: 'SQL', desc: 'Relational schema design, complex joins, indexing', level: 'Proficient', highlight: true },
    ],
  },
  {
    id: 'frameworks',
    name: 'Technologies & Frameworks',
    description: 'Frontend and backend frameworks for engineering responsive web applications.',
    skills: [
      { name: 'React', desc: 'Component architecture, custom hooks, state management', level: 'Advanced', highlight: true },
      { name: 'React Router', desc: 'Client-side routing, route loaders, nested navigation', level: 'Advanced', highlight: true },
      { name: 'Node.js', desc: 'Server runtime, asynchronous event loops, microservices', level: 'Proficient' },
      { name: 'ExpressJS', desc: 'RESTful API routing, middleware, authentication flows', level: 'Proficient' },
      { name: 'MongoDB', desc: 'Document schemas, aggregation pipelines, Mongoose ODM', level: 'Proficient' },
      { name: 'Supabase', desc: 'PostgreSQL, Row Level Security, Realtime subscriptions', level: 'Advanced', highlight: true },
      { name: 'Tailwind CSS', desc: 'Utility-first styling, design tokens, responsive layouts', level: 'Advanced', highlight: true },
      { name: 'HTML5 & CSS3', desc: 'Semantic markups, accessibility, modern Flexbox & Grid', level: 'Advanced' },
      { name: 'REST APIs', desc: 'API architecture, request handling, error boundaries', level: 'Advanced' },
    ],
  },
  {
    id: 'tools',
    name: 'Developer Tools & Workflows',
    description: 'Software development environments, version control, and deployment hosting.',
    skills: [
      { name: 'Git & GitHub', desc: 'Branching strategies, pull requests, version control', level: 'Advanced', highlight: true },
      { name: 'VS Code & Cursor', desc: 'Modern IDE environments, extensions, debugging tools', level: 'Advanced' },
      { name: 'Antigravity (IDE/CLI)', desc: 'Agentic coding, workflows, and automated generation', level: 'Advanced', highlight: true },
      { name: 'Vercel', desc: 'Serverless deployment, edge caching, continuous delivery', level: 'Proficient' },
      { name: 'Hostinger', desc: 'Domain management, DNS configuration, web hosting', level: 'Proficient' },
      { name: 'n8n', desc: 'Workflow orchestration, webhooks, automation triggers', level: 'Proficient' },
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI Automation & Specializations',
    description: 'Designing agentic bots, social automations, and intelligent workflows.',
    skills: [
      { name: 'NVIDIA AI Chatbot', desc: 'Integrated conversational assistants for education platforms', level: 'Specialized', highlight: true },
      { name: 'WhatsApp AI Chatbot', desc: 'Automated ordering & reservation systems for businesses', level: 'Specialized', highlight: true },
      { name: 'Auto-Post Automation', desc: 'Automated content pipelines for LinkedIn, Facebook, Instagram', level: 'Specialized' },
      { name: 'Prompt Engineering', desc: 'Structured outputs, system prompting, few-shot conditioning', level: 'Advanced', highlight: true },
      { name: 'Stitch', desc: "Leveraging Google's advanced tools for rapid UI prototyping", level: 'Advanced' },
    ],
  },
];

const ENGINEERING_PRACTICES = [
  { title: 'API Integration', desc: 'Connecting client UIs to external and custom REST APIs securely.' },
  { title: 'Authentication & RLS', desc: 'Role-based access control, JWTs, Supabase Auth, and protected routes.' },
  { title: 'Responsive Design', desc: 'Cross-browser, mobile-first design ensuring optimal layout on all devices.' },
  { title: 'Deployment & CI/CD', desc: 'Deploying robust production builds with environment variables and secure secrets.' },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? SKILLS_CATEGORIES
      : SKILLS_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="chai-kicker">Technical Competence & Tooling</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight">
          Skills & <span className="text-[#E45D25]">Technologies</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C4E43] max-w-2xl leading-relaxed">
          Languages, frameworks, databases, and automated tooling verified from my project work and academic foundation.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
              activeTab === 'all'
                ? 'bg-[#1F1712] text-white shadow-sm'
                : 'bg-[#FAF7F2] border border-[#DDD3C5] text-[#63574E] hover:text-[#1F1712] hover:bg-[#F2ECE2]'
            }`}
          >
            All Categories
          </button>
          {SKILLS_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                activeTab === cat.id
                  ? 'bg-[#1F1712] text-white shadow-sm'
                  : 'bg-[#FAF7F2] border border-[#DDD3C5] text-[#63574E] hover:text-[#1F1712] hover:bg-[#F2ECE2]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-12">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[#EFE8DD]">
              <h2 className="text-xl font-bold text-[#1F1712] tracking-tight">
                {cat.name}
              </h2>
              <p className="text-xs text-[#8C7667]">{cat.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-150 flex flex-col justify-between ${
                    skill.highlight
                      ? 'border-[#E5DCD0] hover:border-[#1F1712]'
                      : 'border-[#E7DEC8] hover:border-[#D8CDBA]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#1F1712]">
                        {skill.name}
                      </h3>
                      <span
                        className={
                          skill.highlight
                            ? 'chai-tag-orange text-[10px] py-0.5 px-2'
                            : 'chai-tag text-[10px] py-0.5 px-2'
                        }
                      >
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#63574E] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Practices & Foundations */}
      <div className="space-y-6 pt-6 border-t border-[#E7DEC8]">
        <div className="space-y-1">
          <div className="chai-kicker">Core Competencies</div>
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Engineering Standards & Practices
          </h2>
          <p className="text-sm text-[#5C4E43]">
            Practical disciplines applied across all client projects and software repositories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENGINEERING_PRACTICES.map((practice) => (
            <div key={practice.title} className="chai-card p-5 bg-white space-y-2">
              <div className="flex items-center gap-2 text-[#E45D25]">
                <ShieldCheck className="w-4 h-4" />
                <h3 className="text-sm font-bold text-[#1F1712]">{practice.title}</h3>
              </div>
              <p className="text-xs text-[#63574E] leading-relaxed">{practice.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="pt-8 border-t border-[#E7DEC8] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#1F1712]">Want to see these skills in action?</h3>
          <p className="text-xs text-[#63574E]">Check out live demonstrations and GitHub code repositories.</p>
        </div>
        <Link
          to="/projects"
          className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          View Projects <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
