'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Github, Linkedin, Mail, Menu, X, Moon, Sun, ExternalLink, Star, GitFork,
  Download, Send, MapPin, GraduationCap, Code2, ChevronDown, ArrowUp,
  Briefcase, Heart, Globe, Terminal, Cpu, Database, Layout, Smartphone,
  FileCode, Coffee, Loader2
} from 'lucide-react';

const GITHUB_USERNAME = 'sanumaurya4u';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sanu-kumar-91619b233';
const RESUME_URL = 'https://customer-assets.emergentagent.com/job_cb536e5c-c6ff-4e60-9732-e9af9a31c485/artifacts/nhp0mich_Profile%20%284%29.pdf';
const HERO_BG = 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBzZXR1cHxlbnwwfHx8Ymx1ZXwxNzc1MzMwNzYxfDA&ixlib=rb-4.1.0&q=85';

// ===================== NAVBAR =====================
function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            &lt;SK /&gt;
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
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
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  SK
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background" />
          </div>
        </div>

        {/* Text Content */}
        <div className="animate-fade-in-up animation-delay-200">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            <Coffee className="w-3 h-3 mr-1" /> Available for Freelance
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sanu Kumar
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 font-light">
            Aspiring Software Developer & Full Stack Web Developer
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            B.Tech CSE '28 at UIET, Maharshi Dayanand University, Rohtak
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up animation-delay-600">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

// ===================== ABOUT SECTION =====================
function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Code2 className="w-3 h-3 mr-1" /> About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Get to Know Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="text-foreground font-semibold">Sanu Kumar</span>, a technophile
              pursuing CS Honours from UIET, Maharshi Dayanand University, Rohtak. I'm currently building
              a strong foundation in programming with C and Python, and actively exploring the world of
              web & app development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm deeply interested in solving real-world problems through efficient code and continuously
              improving my skills in DSA and software engineering. Whether it's debugging code or designing
              user-friendly websites, I enjoy the process of learning and growing with each project.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1">
                <Terminal className="w-3 h-3 mr-1" /> Full Stack Developer
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Code2 className="w-3 h-3 mr-1" /> DSA Enthusiast
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Briefcase className="w-3 h-3 mr-1" /> Freelancer
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Globe className="w-3 h-3 mr-1" /> UGC Creator
              </Badge>
            </div>
          </div>

          {/* Education Card */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Bachelor of Technology (B.Tech)</h3>
                    <p className="text-blue-500 font-medium">Computer Science Engineering</p>
                    <p className="text-muted-foreground mt-1">Maharshi Dayanand University, Rohtak</p>
                    <p className="text-sm text-muted-foreground">UIET - University Institute of Engineering & Technology</p>
                    <Badge variant="outline" className="mt-2">July 2024 - May 2028</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">Rohtak, Haryana, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                    <FileCode className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Certification</h3>
                    <p className="text-muted-foreground">Certificate of Completion - React & Redux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== SKILLS SECTION =====================
const skills = {
  'Programming Languages': [
    { name: 'C++', icon: <Terminal className="w-5 h-5" />, color: 'from-blue-500 to-blue-700' },
    { name: 'Java', icon: <Coffee className="w-5 h-5" />, color: 'from-red-500 to-orange-500' },
    { name: 'Python', icon: <Code2 className="w-5 h-5" />, color: 'from-yellow-500 to-green-500' },
    { name: 'JavaScript', icon: <FileCode className="w-5 h-5" />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'C', icon: <Terminal className="w-5 h-5" />, color: 'from-gray-500 to-gray-700' },
  ],
  'Web Technologies': [
    { name: 'HTML5', icon: <Layout className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: <Layout className="w-5 h-5" />, color: 'from-blue-400 to-blue-600' },
    { name: 'React', icon: <Code2 className="w-5 h-5" />, color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', icon: <Globe className="w-5 h-5" />, color: 'from-gray-600 to-gray-900' },
    { name: 'Tailwind CSS', icon: <Layout className="w-5 h-5" />, color: 'from-teal-400 to-cyan-500' },
  ],
  'Tools & Others': [
    { name: 'Git & GitHub', icon: <Github className="w-5 h-5" />, color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, color: 'from-green-500 to-green-700' },
    { name: 'Node.js', icon: <Cpu className="w-5 h-5" />, color: 'from-green-400 to-green-600' },
    { name: 'DSA', icon: <Terminal className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Responsive Design', icon: <Smartphone className="w-5 h-5" />, color: 'from-pink-400 to-rose-500' },
  ],
};

function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-3 h-3 mr-1" /> My Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Technologies I Work With</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Constantly learning and improving my skill set to build better solutions
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {items.map((skill) => (
                  <Card
                    key={skill.name}
                    className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 cursor-default"
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 mb-3 text-white group-hover:scale-110 transition-transform`}>
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
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

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // Try our API proxy first, fallback to direct GitHub API
      let repos_data = [];
      try {
        const res = await fetch(`/api/github?username=${GITHUB_USERNAME}`);
        const data = await res.json();
        if (data.success) {
          repos_data = data.repos;
        } else {
          throw new Error('API proxy failed');
        }
      } catch {
        // Fallback: call GitHub API directly from client
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
          { headers: { 'Accept': 'application/vnd.github.v3+json' } }
        );
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const raw = await res.json();
        repos_data = raw.map(repo => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || 'No description available',
          language: repo.language || 'Unknown',
          html_url: repo.html_url,
          homepage: repo.homepage || null,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated_at: repo.updated_at,
          topics: repo.topics || [],
          fork: repo.fork
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

  const filteredRepos = selectedLang === 'All'
    ? repos
    : repos.filter(r => r.language === selectedLang);

  const langColors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    HTML: '#e34c26',
    CSS: '#563d7c',
    TypeScript: '#3178c6',
    Unknown: '#8b8b8b',
  };

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Github className="w-3 h-3 mr-1" /> My Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            A collection of my work fetched directly from GitHub
          </p>
        </div>

        {/* Language Filter */}
        {!loading && !error && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedLang === lang
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
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

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Fetching projects from GitHub...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchProjects} variant="outline">Try Again</Button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            {filteredRepos.length === 0 ? (
              <p className="text-center text-muted-foreground py-10">No projects found for this filter.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo, index) => (
                  <Card
                    key={repo.id}
                    className="group bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg truncate group-hover:text-primary transition-colors">
                            {repo.name}
                          </CardTitle>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <CardDescription className="line-clamp-2 mt-1">
                        {repo.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {repo.language && repo.language !== 'Unknown' && (
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: langColors[repo.language] || '#8b8b8b' }}
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
                      </div>
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs px-2 py-0">
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

            {/* View more on GitHub */}
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
  return (
    <section id="resume" className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            <FileCode className="w-3 h-3 mr-1" /> Resume
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Resume</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my resume to learn more about my education, skills, and experiences
          </p>

          <Card className="max-w-lg mx-auto bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center">
                <FileCode className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sanu Kumar - Resume</h3>
              <p className="text-muted-foreground text-sm mb-6">
                B.Tech CSE | Full Stack Developer | Freelancer
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 w-full sm:w-auto"
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-4 h-4 mr-2" /> Download Resume (PDF)
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ===================== CONTACT SECTION =====================
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

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
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Mail className="w-3 h-3 mr-1" /> Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's work together</h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Rohtak, Haryana, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <Github className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a
                      href={`https://github.com/${GITHUB_USERNAME}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      github.com/{GITHUB_USERNAME}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      Sanu Kumar
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
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
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              &lt;SK /&gt;
            </a>
            <p className="text-sm text-muted-foreground mt-1">Aspiring Software Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sanu Kumar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
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
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-110 transition-all animate-fade-in"
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
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
