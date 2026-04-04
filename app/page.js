'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Github, Linkedin, Mail, Menu, X, Moon, Sun, ExternalLink, Star, GitFork,
  Download, Send, MapPin, GraduationCap, Code2, ChevronDown, ArrowUp,
  Briefcase, Heart, Globe, Terminal, Cpu, Database, Layout, Smartphone,
  FileCode, Coffee, Loader2, Sparkles, Zap, BookOpen
} from 'lucide-react';

const GITHUB_USERNAME = 'sanumaurya4u';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sanu-kumar-91619b233';
const RESUME_URL = 'https://customer-assets.emergentagent.com/job_cb536e5c-c6ff-4e60-9732-e9af9a31c485/artifacts/nhp0mich_Profile%20%284%29.pdf';
const PROFILE_IMAGE = 'https://customer-assets.emergentagent.com/job_cse-portfolio-39/artifacts/609ekhyr_IMG_20260130_222658.jpg';

// ===================== SCROLL REVEAL HOOK =====================
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const reveals = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      reveals.forEach((r) => observer.observe(r));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ===================== TYPEWRITER HOOK =====================
function useTypewriter(texts, speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timer;

    if (!isDeleting && charIndex < current.length) {
      timer = setTimeout(() => setCharIndex(charIndex + 1), speed);
    } else if (!isDeleting && charIndex === current.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    setDisplayText(current.substring(0, charIndex));
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
}

// ===================== PARTICLE BACKGROUND =====================
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/10 animate-float"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// ===================== NAVBAR =====================
function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass-strong shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold gradient-text-blue tracking-tight">
            &lt;SK /&gt;
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </a>
              );
            })}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-3 p-2 rounded-xl glass hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl glass transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl glass transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in glass-strong rounded-2xl mt-2 p-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ===================== HERO SECTION =====================
function HeroSection() {
  const typedText = useTypewriter([
    'Full Stack Web Developer',
    'DSA Enthusiast',
    'Freelancer',
    'UGC Creator',
  ], 80, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-1" />
      <ParticleField />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float animation-delay-400" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                <Sparkles className="w-3 h-3 mr-1.5" /> Available for Opportunities
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight animate-fade-in-up animation-delay-100">
              Hi, I'm{' '}
              <span className="gradient-text">Sanu Kumar</span>
            </h1>

            <div className="h-10 sm:h-12 mb-6 animate-fade-in-up animation-delay-200">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
                <span className="text-foreground font-medium">{typedText}</span>
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </p>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-300">
              B.Tech CSE '28 at UIET, Maharshi Dayanand University, Rohtak.
              Passionate about building elegant solutions through code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl shadow-indigo-500/20 rounded-xl px-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5">
                <a href="#projects"><Zap className="w-4 h-4 mr-2" /> View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl px-8 border-border/50 glass hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                <a href="#contact"><Mail className="w-4 h-4 mr-2" /> Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8 animate-fade-in-up animation-delay-600">
              {[
                { icon: <Github className="w-5 h-5" />, href: `https://github.com/${GITHUB_USERNAME}`, label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, href: LINKEDIN_URL, label: 'LinkedIn' },
                { icon: <Mail className="w-5 h-5" />, href: '#contact', label: 'Email' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-3 rounded-xl glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-20 animate-pulse-glow scale-110" />

              {/* Rotating gradient border */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 animate-gradient">
                  <div className="w-full h-full rounded-full bg-background p-1">
                    <img
                      src={PROFILE_IMAGE}
                      alt="Sanu Kumar"
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Floating badges around image */}
                <div className="absolute -top-2 -right-2 p-2 rounded-xl glass-strong shadow-lg animate-float animation-delay-200">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="absolute -bottom-2 -left-2 p-2 rounded-xl glass-strong shadow-lg animate-float animation-delay-600">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <div className="absolute top-1/2 -right-6 p-2 rounded-xl glass-strong shadow-lg animate-float animation-delay-400">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-1000">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION HEADING =====================
function SectionHeading({ badge, icon, title, subtitle }) {
  return (
    <div className="text-center mb-16 reveal">
      <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium border-primary/20 bg-primary/5">
        {icon} <span className="ml-1.5">{badge}</span>
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

// ===================== ABOUT SECTION =====================
function AboutSection() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 mesh-gradient-2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          icon={<BookOpen className="w-3.5 h-3.5" />}
          title="Get to Know Me"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6 reveal-left">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="text-foreground font-semibold gradient-text">Sanu Kumar</span>, a technophile
              pursuing CS Honours from UIET, Maharshi Dayanand University, Rohtak. I'm currently building
              a strong foundation in programming with C and Python, and actively exploring the world of
              web & app development.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm deeply interested in solving real-world problems through efficient code and continuously
              improving my skills in DSA and software engineering. Whether it's debugging code or designing
              user-friendly websites, I enjoy the process of learning and growing with each project.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { icon: <Terminal className="w-3 h-3" />, text: 'Full Stack Developer' },
                { icon: <Code2 className="w-3 h-3" />, text: 'DSA Enthusiast' },
                { icon: <Briefcase className="w-3 h-3" />, text: 'Freelancer' },
                { icon: <Globe className="w-3 h-3" />, text: 'UGC Creator' },
              ].map((tag) => (
                <Badge key={tag.text} className="px-3 py-1.5 text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors">
                  {tag.icon} <span className="ml-1">{tag.text}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 reveal-right">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                iconColor: 'text-indigo-400',
                iconBg: 'from-indigo-500/15 to-purple-500/15 border-indigo-500/20',
                title: 'Bachelor of Technology (B.Tech)',
                subtitle: 'Computer Science Engineering',
                subtitleColor: 'text-indigo-400',
                details: ['Maharshi Dayanand University, Rohtak', 'UIET - University Institute of Engineering & Technology'],
                badge: 'July 2024 - May 2028'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                iconColor: 'text-emerald-400',
                iconBg: 'from-emerald-500/15 to-teal-500/15 border-emerald-500/20',
                title: 'Location',
                details: ['Rohtak, Haryana, India']
              },
              {
                icon: <FileCode className="w-6 h-6" />,
                iconColor: 'text-amber-400',
                iconBg: 'from-amber-500/15 to-orange-500/15 border-amber-500/20',
                title: 'Certification',
                details: ['Certificate of Completion - React & Redux']
              },
            ].map((card, i) => (
              <Card key={i} className="glass hover-card-lift border-border/50 overflow-hidden group">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${card.iconBg} border ${card.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold">{card.title}</h3>
                      {card.subtitle && <p className={`font-medium text-sm ${card.subtitleColor}`}>{card.subtitle}</p>}
                      {card.details?.map((d, j) => (
                        <p key={j} className="text-sm text-muted-foreground mt-0.5">{d}</p>
                      ))}
                      {card.badge && <Badge variant="outline" className="mt-2 text-xs border-primary/20">{card.badge}</Badge>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== SKILLS SECTION =====================
const skillsData = {
  'Programming Languages': [
    { name: 'C++', icon: <Terminal className="w-5 h-5" />, gradient: 'from-blue-500 to-blue-700' },
    { name: 'Java', icon: <Coffee className="w-5 h-5" />, gradient: 'from-red-500 to-orange-500' },
    { name: 'Python', icon: <Code2 className="w-5 h-5" />, gradient: 'from-yellow-500 to-green-500' },
    { name: 'JavaScript', icon: <FileCode className="w-5 h-5" />, gradient: 'from-yellow-400 to-yellow-600' },
    { name: 'C', icon: <Terminal className="w-5 h-5" />, gradient: 'from-slate-500 to-slate-700' },
  ],
  'Web Technologies': [
    { name: 'HTML5', icon: <Layout className="w-5 h-5" />, gradient: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: <Layout className="w-5 h-5" />, gradient: 'from-blue-400 to-blue-600' },
    { name: 'React', icon: <Code2 className="w-5 h-5" />, gradient: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', icon: <Globe className="w-5 h-5" />, gradient: 'from-gray-500 to-gray-800' },
    { name: 'Tailwind', icon: <Layout className="w-5 h-5" />, gradient: 'from-teal-400 to-cyan-500' },
  ],
  'Tools & Others': [
    { name: 'Git & GitHub', icon: <Github className="w-5 h-5" />, gradient: 'from-gray-500 to-gray-800' },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, gradient: 'from-green-500 to-green-700' },
    { name: 'Node.js', icon: <Cpu className="w-5 h-5" />, gradient: 'from-green-400 to-green-600' },
    { name: 'DSA', icon: <Terminal className="w-5 h-5" />, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Responsive', icon: <Smartphone className="w-5 h-5" />, gradient: 'from-pink-400 to-rose-500' },
  ],
};

function SkillsSection() {
  const sectionRef = useReveal();

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 mesh-gradient-1 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Skills"
          icon={<Cpu className="w-3.5 h-3.5" />}
          title="Technologies I Work With"
          subtitle="Constantly learning and pushing boundaries to build better solutions"
        />

        <div className="space-y-14">
          {Object.entries(skillsData).map(([category, items], catIndex) => (
            <div key={category} className="reveal" style={{ transitionDelay: `${catIndex * 150}ms` }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {items.map((skill, i) => (
                  <Card
                    key={skill.name}
                    className="group glass hover-card-lift border-border/50 cursor-default overflow-hidden"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <CardContent className="p-4 sm:p-5 text-center relative">
                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <div className={`relative inline-flex p-3 rounded-2xl bg-gradient-to-br ${skill.gradient} mb-3 text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        {skill.icon}
                      </div>
                      <p className="relative text-sm font-medium">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== PROJECTS SECTION =====================
function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLang, setSelectedLang] = useState('All');
  const [languages, setLanguages] = useState(['All']);
  const sectionRef = useReveal();

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      let repos_data = [];
      try {
        const res = await fetch(`/api/github?username=${GITHUB_USERNAME}`);
        const data = await res.json();
        if (data.success) repos_data = data.repos;
        else throw new Error('API proxy failed');
      } catch {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
          { headers: { 'Accept': 'application/vnd.github.v3+json' } }
        );
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const raw = await res.json();
        repos_data = raw.map(repo => ({
          id: repo.id.toString(), name: repo.name,
          description: repo.description || 'No description available',
          language: repo.language || 'Unknown', html_url: repo.html_url,
          homepage: repo.homepage || null, stars: repo.stargazers_count,
          forks: repo.forks_count, updated_at: repo.updated_at,
          topics: repo.topics || [], fork: repo.fork
        }));
      }
      const nonForked = repos_data.filter(r => !r.fork);
      setRepos(nonForked);
      const langs = ['All', ...new Set(nonForked.map(r => r.language).filter(l => l && l !== 'Unknown'))];
      setLanguages(langs);
    } catch (err) {
      setError('Failed to fetch projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filteredRepos = selectedLang === 'All' ? repos : repos.filter(r => r.language === selectedLang);

  const langColors = {
    JavaScript: '#f1e05a', Python: '#3572A5', Java: '#b07219',
    'C++': '#f34b7d', C: '#555555', HTML: '#e34c26', CSS: '#563d7c',
    TypeScript: '#3178c6', PowerShell: '#012456', Unknown: '#8b8b8b',
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 mesh-gradient-2 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Projects"
          icon={<Github className="w-3.5 h-3.5" />}
          title="Featured Projects"
          subtitle="A collection of my work fetched directly from GitHub"
        />

        {/* Language Filter */}
        {!loading && !error && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 reveal">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedLang === lang
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'glass text-muted-foreground hover:text-foreground hover:bg-primary/5'
                }`}
              >
                {lang !== 'All' && (
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: langColors[lang] || '#8b8b8b' }}
                  />
                )}
                {lang}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
              <Github className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-muted-foreground mt-4">Fetching projects from GitHub...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 reveal">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchProjects} variant="outline" className="rounded-xl">Try Again</Button>
          </div>
        )}

        {!loading && !error && (
          <>
            {filteredRepos.length === 0 ? (
              <p className="text-center text-muted-foreground py-10">No projects found for this filter.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredRepos.map((repo, index) => (
                  <Card
                    key={repo.id}
                    className="group glass hover-card-lift border-border/50 flex flex-col overflow-hidden reveal-scale"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Top gradient accent */}
                    <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg truncate group-hover:gradient-text transition-all duration-300">
                            {repo.name}
                          </CardTitle>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl hover:bg-primary/10 transition-all duration-300 flex-shrink-0 text-muted-foreground hover:text-primary"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <CardDescription className="line-clamp-2 mt-1 text-sm">
                        {repo.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0">
                      <div className="flex items-center gap-3">
                        {repo.language && repo.language !== 'Unknown' && (
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span
                              className="w-3 h-3 rounded-full ring-2 ring-offset-1 ring-offset-background"
                              style={{ backgroundColor: langColors[repo.language] || '#8b8b8b', ringColor: langColors[repo.language] || '#8b8b8b' }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3" /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <GitFork className="w-3 h-3" /> {repo.forks}
                        </span>
                      </div>
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="text-center mt-12 reveal">
              <Button asChild variant="outline" size="lg" className="rounded-xl glass border-border/50 hover:bg-primary/5 hover:border-primary/30">
                <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" /> View All on GitHub
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ===================== RESUME SECTION =====================
function ResumeSection() {
  const sectionRef = useReveal();

  return (
    <section id="resume" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 mesh-gradient-1 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Resume"
          icon={<FileCode className="w-3.5 h-3.5" />}
          title="My Resume"
          subtitle="Download my resume to learn more about my education, skills, and experiences"
        />

        <Card className="max-w-lg mx-auto glass border-border/50 overflow-hidden reveal-scale">
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <CardContent className="p-8 sm:p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-500/20 flex items-center justify-center">
              <FileCode className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sanu Kumar</h3>
            <p className="text-muted-foreground text-sm mb-6">
              B.Tech CSE | Full Stack Developer | Freelancer
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl shadow-indigo-500/20 rounded-xl w-full sm:w-auto px-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
                <Download className="w-4 h-4 mr-2" /> Download Resume (PDF)
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// ===================== CONTACT SECTION =====================
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const sectionRef = useReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 mesh-gradient-2 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          icon={<Mail className="w-3.5 h-3.5" />}
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 reveal-left">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Let's work{' '}
              <span className="gradient-text">together</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-3">
              {[
                { icon: <MapPin className="w-5 h-5 text-indigo-400" />, bg: 'from-indigo-500/15 to-purple-500/15 border-indigo-500/20', label: 'Location', value: 'Rohtak, Haryana, India' },
                { icon: <Github className="w-5 h-5 text-purple-400" />, bg: 'from-purple-500/15 to-pink-500/15 border-purple-500/20', label: 'GitHub', value: `github.com/${GITHUB_USERNAME}`, href: `https://github.com/${GITHUB_USERNAME}` },
                { icon: <Linkedin className="w-5 h-5 text-blue-400" />, bg: 'from-blue-500/15 to-indigo-500/15 border-blue-500/20', label: 'LinkedIn', value: 'Sanu Kumar', href: LINKEDIN_URL },
              ].map((item) => (
                <Card key={item.label} className="glass hover-card-lift border-border/50 group">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.bg} border flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass border-border/50 overflow-hidden reveal-right">
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Name</label>
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-background/50 rounded-xl border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-background/50 rounded-xl border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-colors focus:border-primary/50"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  size="lg"
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl shadow-indigo-500/20 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  {status === 'sending' ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4 mr-2" /> Send Message</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ===================== FOOTER =====================
function Footer() {
  return (
    <footer className="border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-1 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text-blue tracking-tight">
              &lt;SK /&gt;
            </a>
            <p className="text-sm text-muted-foreground mt-1">Aspiring Software Developer</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: <Github className="w-5 h-5" />, href: `https://github.com/${GITHUB_USERNAME}` },
              { icon: <Linkedin className="w-5 h-5" />, href: LINKEDIN_URL },
              { icon: <Mail className="w-5 h-5" />, href: '#contact' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6 opacity-50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sanu Kumar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===================== SCROLL TO TOP =====================
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:scale-110 transition-all duration-300 animate-fade-in"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

// ===================== MAIN APP =====================
function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
