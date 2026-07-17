'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Github, Linkedin, Mail, Menu, X, Moon, Sun, ExternalLink, Star, GitFork,
  Download, Send, MapPin, GraduationCap, Code2, ChevronDown, ArrowUp,
  Briefcase, Heart, Globe, Terminal, Cpu, Database, Layout, Smartphone,
  FileCode, Coffee, Loader2, Sparkles, Zap, BookOpen, Users, Eye,
  Calendar, RefreshCw, Clock, Activity, Folder, Trophy, Target, Flame,
  Award, ArrowRight, MousePointer2, Monitor
} from 'lucide-react';

const GITHUB_USERNAME = 'sanumaurya4u';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sanu-kumar-91619b233';
const RESUME_URL = '/Sanu_Resume(2).pdf';
const PROFILE_IMAGE = 'https://customer-assets.emergentagent.com/job_cse-portfolio-39/artifacts/609ekhyr_IMG_20260130_222658.jpg';

// Section background images
const BG_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1657894825744-1da6d5fbf24d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NzUzMzM2MTh8MA&ixlib=rb-4.1.0&q=85',
  about: 'https://images.unsplash.com/photo-1604011237320-8e0506614fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NzUzMzM2MTh8MA&ixlib=rb-4.1.0&q=85',
  skills: 'https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NzUzMzM2MTh8MA&ixlib=rb-4.1.0&q=85',
  projects: 'https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzc1MzMzNjIzfDA&ixlib=rb-4.1.0&q=85',
  resume: 'https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzc1MzMzNjIzfDA&ixlib=rb-4.1.0&q=85',
  contact: 'https://images.unsplash.com/photo-1604011237320-8e0506614fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5fGVufDB8fHxibHVlfDE3NzUzMzM2MTh8MA&ixlib=rb-4.1.0&q=85',
};

// ===================== SECTION BACKGROUND COMPONENT =====================
function SectionBg({ image, opacity = 0.08, overlay = 'from-background via-background/95 to-background' }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
    </div>
  );
}

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
      const reveals = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
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

// ===================== COUNTER HOOK =====================
function useCounter(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, inView]);

  return count;
}

// ===================== MOUSE GLOW HOOK =====================
function useMouseGlow(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    };

    el.addEventListener('mousemove', handleMouse);
    return () => el.removeEventListener('mousemove', handleMouse);
  }, [ref]);
}

// ===================== PARTICLE BACKGROUND =====================
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['rgba(99,102,241,0.3)', 'rgba(139,92,246,0.3)', 'rgba(236,72,153,0.2)', 'rgba(6,182,212,0.2)'][Math.floor(Math.random() * 4)]
            }, transparent)`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 6 + 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// ===================== AURORA BACKGROUND =====================
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute -top-[40%] -left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-transparent blur-3xl animate-aurora" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-l from-pink-500/15 via-violet-500/15 to-transparent blur-3xl animate-aurora animation-delay-500" />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-b from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl animate-aurora animation-delay-1000" />
    </div>
  );
}

// ===================== NAVBAR =====================
function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'ai', 'certifications', 'resume', 'contact'];
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
    { name: 'Home', href: '#home', icon: <Monitor className="w-3.5 h-3.5" /> },
    { name: 'About', href: '#about', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { name: 'Skills', href: '#skills', icon: <Cpu className="w-3.5 h-3.5" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { name: 'Projects', href: '#projects', icon: <Folder className="w-3.5 h-3.5" /> },
    { name: 'AI', href: '#ai', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { name: 'Certifications', href: '#certifications', icon: <Award className="w-3.5 h-3.5" /> },
    { name: 'Resume', href: '#resume', icon: <FileCode className="w-3.5 h-3.5" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-premium shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}>
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold gradient-text-aurora tracking-tight hover:scale-105 transition-transform duration-300">
              &lt;SK /&gt;
            </a>

            <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl glass">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl flex items-center gap-2 ${
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg shadow-indigo-500/25 -z-10 animate-scale-in" />
                    )}
                    {link.icon}
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl glass hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary hover:scale-110 hover:rotate-12"
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
            <div className="md:hidden pb-4 animate-slide-up glass-premium rounded-2xl mt-2 p-3">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-primary border border-primary/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.icon}
                    {link.name}
                    {isActive && <Sparkles className="w-3 h-3 ml-auto text-primary" />}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

// ===================== HERO SECTION =====================
function HeroSection() {
  const typedText = useTypewriter([
    'Full-Stack Developer',
    'AI Automation Enthusiast',
    'UGC Creator',
    'Freelancer',
  ], 80, 2000);

  const heroRef = useRef(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      {/* Background image */}
      <SectionBg image={BG_IMAGES.hero} opacity={0.12} overlay="from-background via-background/90 to-background" />
      {/* Aurora & Mesh gradient */}
      <AuroraBackground />
      <div className="absolute inset-0 mesh-gradient-1" />
      <ParticleField />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-400" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-morph" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 px-5 py-2 text-xs font-medium bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-primary border-primary/20 hover:border-primary/40 transition-colors">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Opportunities
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight animate-fade-in-up animation-delay-100">
              Hi, I'm{' '}
              <span className="gradient-text-aurora">Sanu Kumar</span>
            </h1>

            <div className="h-10 sm:h-12 mb-6 animate-fade-in-up animation-delay-200">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
                <span className="text-foreground font-medium">{typedText}</span>
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </p>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-300">
              Passionate about building scalable web applications with React, Node.js, Supabase, and AI Automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
              <Button asChild size="lg" className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl shadow-indigo-500/20 rounded-xl px-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1">
                <a href="#projects">
                  <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group rounded-xl px-8 border-border/50 glass hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 gradient-border">
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </a>
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
                  className="group p-3 rounded-xl glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
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
                <div className="absolute -top-2 -right-2 p-2.5 rounded-xl glass-premium shadow-lg animate-float animation-delay-200">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="absolute -bottom-2 -left-2 p-2.5 rounded-xl glass-premium shadow-lg animate-float animation-delay-600">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <div className="absolute top-1/2 -right-6 p-2.5 rounded-xl glass-premium shadow-lg animate-float animation-delay-400">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <div className="absolute -top-4 left-1/3 p-2 rounded-xl glass-premium shadow-lg animate-float animation-delay-800">
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-1000">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION HEADING =====================
function SectionHeading({ badge, icon, title, subtitle }) {
  return (
    <div className="text-center mb-16 reveal">
      <Badge variant="outline" className="mb-4 px-5 py-2 text-xs font-medium border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5 hover:border-primary/40 transition-colors">
        {icon} <span className="ml-1.5">{badge}</span>
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {i === title.split(' ').length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              word + ' '
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
      <div className="flex justify-center mt-6">
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-draw-line" />
      </div>
    </div>
  );
}

// ===================== STAT CARD =====================
function StatCard({ icon, value, label, suffix = '', inView }) {
  const count = useCounter(parseInt(value), 2000, inView);
  return (
    <div className="text-center p-4 rounded-2xl glass hover-card-lift group cursor-default">
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-2xl sm:text-3xl font-bold gradient-text stat-number">{count}{suffix}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

// ===================== ABOUT SECTION =====================
function AboutSection() {
  const sectionRef = useReveal();
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.about} opacity={0.07} overlay="from-background via-background/95 to-background" />
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
              Computer Science undergraduate with hands-on experience in full-stack web development using JavaScript, React, Node.js, Express.js, MongoDB, HTML, and CSS.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Passionate about building scalable web applications and eager to contribute as an entry-level Software or Full-Stack Developer with a passion for solving real-world problems. Actively learning Data Structures and Algorithms (DSA) to enhance coding and analytical skills.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { icon: <Terminal className="w-3 h-3" />, text: 'Full Stack Developer' },
                { icon: <Code2 className="w-3 h-3" />, text: 'DSA Enthusiast' },
                { icon: <Briefcase className="w-3 h-3" />, text: 'Freelancer' },
                { icon: <Globe className="w-3 h-3" />, text: 'UGC Creator' },
              ].map((tag) => (
                <Badge key={tag.text} className="px-3 py-1.5 text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:scale-105 transition-all cursor-default">
                  {tag.icon} <span className="ml-1">{tag.text}</span>
                </Badge>
              ))}
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 pt-4">
              <StatCard icon={<Code2 className="w-5 h-5 text-indigo-400" />} value="15" suffix="+" label="Projects" inView={statsInView} />
              <StatCard icon={<Trophy className="w-5 h-5 text-amber-400" />} value="500" suffix="+" label="DSA Problems" inView={statsInView} />
              <StatCard icon={<Target className="w-5 h-5 text-emerald-400" />} value="3" suffix="+" label="Certifications" inView={statsInView} />
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 reveal-right">
            {[
              {
                icon: <GraduationCap className="w-6 h-6" />,
                iconColor: 'text-indigo-400',
                iconBg: 'from-indigo-500/15 to-purple-500/15 border-indigo-500/20',
                title: 'B.Tech CSE',
                subtitle: 'UIET',
                subtitleColor: 'text-indigo-400',
                details: ['CGPA: 8.3'],
                badge: '2024-2028'
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                iconColor: 'text-emerald-400',
                iconBg: 'from-emerald-500/15 to-teal-500/15 border-emerald-500/20',
                title: 'Coursework',
                details: ['Data Structures, OOP Concepts, Operating System, Domestic IT Assistant']
              }
            ].map((card, i) => (
              <Card key={i} className="glass-premium hover-card-lift border-border/50 overflow-hidden group gradient-border" style={{ transitionDelay: `${i * 100}ms` }}>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${card.iconBg} border ${card.iconColor} flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors">{card.title}</h3>
                      {card.subtitle && <p className={`font-medium text-sm ${card.subtitleColor}`}>{card.subtitle}</p>}
                      {card.details?.map((d, j) => (
                        <p key={j} className="text-sm text-muted-foreground mt-0.5">{d}</p>
                      ))}
                      {card.badge && <Badge variant="outline" className="mt-2 text-xs border-primary/20 animate-border-glow">{card.badge}</Badge>}
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
    { name: 'C++', icon: <Terminal className="w-5 h-5" />, gradient: 'from-blue-500 to-blue-700', level: 85 },
    { name: 'C', icon: <Terminal className="w-5 h-5" />, gradient: 'from-slate-500 to-slate-700', level: 70 },
    { name: 'Python', icon: <Code2 className="w-5 h-5" />, gradient: 'from-yellow-500 to-green-500', level: 80 },
    { name: 'SQL', icon: <Database className="w-5 h-5" />, gradient: 'from-blue-400 to-blue-600', level: 80 },
  ],
  'Technologies/Frameworks': [
    { name: 'HTML5', icon: <Layout className="w-5 h-5" />, gradient: 'from-orange-500 to-red-500', level: 95 },
    { name: 'CSS3', icon: <Layout className="w-5 h-5" />, gradient: 'from-blue-400 to-blue-600', level: 90 },
    { name: 'React', icon: <Code2 className="w-5 h-5" />, gradient: 'from-cyan-400 to-blue-500', level: 85 },
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, gradient: 'from-green-500 to-green-700', level: 80 },
    { name: 'ExpressJS', icon: <Cpu className="w-5 h-5" />, gradient: 'from-gray-500 to-gray-800', level: 75 },
    { name: 'NodeJS', icon: <Cpu className="w-5 h-5" />, gradient: 'from-green-400 to-green-600', level: 80 },
    { name: 'Rest APIs', icon: <Globe className="w-5 h-5" />, gradient: 'from-purple-500 to-pink-500', level: 85 },
    { name: 'Supabase', icon: <Database className="w-5 h-5" />, gradient: 'from-emerald-400 to-teal-500', level: 80 },
    { name: 'Tailwind CSS', icon: <Layout className="w-5 h-5" />, gradient: 'from-teal-400 to-cyan-500', level: 90 },
    { name: 'React Router', icon: <Code2 className="w-5 h-5" />, gradient: 'from-red-400 to-pink-500', level: 85 },
  ],
  'Developer Tools': [
    { name: 'VS Code', icon: <Terminal className="w-5 h-5" />, gradient: 'from-blue-500 to-blue-700', level: 90 },
    { name: 'Antigravity', icon: <Zap className="w-5 h-5" />, gradient: 'from-indigo-500 to-purple-500', level: 85 },
    { name: 'Cursor', icon: <MousePointer2 className="w-5 h-5" />, gradient: 'from-gray-400 to-gray-600', level: 85 },
    { name: 'Git', icon: <GitFork className="w-5 h-5" />, gradient: 'from-orange-500 to-red-500', level: 85 },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, gradient: 'from-gray-500 to-gray-800', level: 85 },
    { name: 'Vercel', icon: <Globe className="w-5 h-5" />, gradient: 'from-slate-800 to-black', level: 85 },
    { name: 'Hostinger', icon: <Database className="w-5 h-5" />, gradient: 'from-purple-500 to-purple-700', level: 80 },
    { name: 'n8n', icon: <Activity className="w-5 h-5" />, gradient: 'from-pink-500 to-rose-500', level: 80 },
  ],
  'AI Automation': [
    { name: 'NVIDIA AI Chatbot', icon: <Sparkles className="w-5 h-5" />, gradient: 'from-green-400 to-green-600', level: 85 },
    { name: 'n8n', icon: <Activity className="w-5 h-5" />, gradient: 'from-pink-500 to-rose-500', level: 80 },
    { name: 'WhatsApp AI Chatbot', icon: <Smartphone className="w-5 h-5" />, gradient: 'from-green-500 to-teal-500', level: 85 },
    { name: 'Auto-post automation', icon: <RefreshCw className="w-5 h-5" />, gradient: 'from-blue-400 to-indigo-500', level: 80 },
    { name: 'Prompt Engineering', icon: <Terminal className="w-5 h-5" />, gradient: 'from-yellow-400 to-orange-500', level: 90 },
    { name: 'Stitch', icon: <Zap className="w-5 h-5" />, gradient: 'from-purple-500 to-indigo-500', level: 85 },
  ]
};

function SkillCard({ skill, index }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={ref}
      className="group glass-premium hover-card-lift border-border/50 cursor-default overflow-hidden gradient-border"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CardContent className="p-4 sm:p-5 text-center relative">
        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        <div className={`relative inline-flex p-3 rounded-2xl bg-gradient-to-br ${skill.gradient} mb-3 text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3 transition-all duration-300`}>
          {skill.icon}
        </div>
        <p className="relative text-sm font-medium mb-2">{skill.name}</p>
        {/* Skill progress bar */}
        <div className="skill-progress">
          <div
            className={`skill-progress-bar ${inView ? 'visible' : ''}`}
            style={{ transform: inView ? `scaleX(${skill.level / 100})` : 'scaleX(0)' }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</p>
      </CardContent>
    </Card>
  );
}

function SkillsSection() {
  const sectionRef = useReveal();

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.skills} opacity={0.06} overlay="from-background via-background/95 to-background" />
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
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-draw-line" />
                {category}
                <Badge variant="outline" className="ml-auto text-xs border-primary/20 bg-primary/5">{items.length} skills</Badge>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {items.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
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

// Static fallback data — shown when GitHub API is rate-limited or unavailable
const FALLBACK_REPOS = [
  {
    id: '1233327421',
    name: 'skills-copilot-codespaces-vscode',
    description: 'GitHub Copilot skills project using Codespaces and VS Code',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/skills-copilot-codespaces-vscode`,
    homepage: null,
    stars: 0, forks: 0, watchers: 0, open_issues: 0, size: 0,
    default_branch: 'main',
    created_at: '2026-05-08T20:54:20Z',
    updated_at: '2026-05-08T20:54:21Z',
    pushed_at: '2026-05-08T20:54:21Z',
    topics: ['github-copilot', 'vscode', 'codespaces'],
    fork: false, archived: false, visibility: 'public'
  },
  {
    id: '1230569004',
    name: 'sanumaurya4u.github.io',
    description: 'Personal portfolio website hosted on GitHub Pages',
    language: 'HTML',
    html_url: `https://github.com/${GITHUB_USERNAME}/sanumaurya4u.github.io`,
    homepage: `https://${GITHUB_USERNAME}.github.io`,
    stars: 0, forks: 0, watchers: 0, open_issues: 0, size: 1,
    default_branch: 'main',
    created_at: '2026-05-06T05:54:50Z',
    updated_at: '2026-05-06T05:54:54Z',
    pushed_at: '2026-05-06T05:54:52Z',
    topics: ['portfolio', 'github-pages'],
    fork: false, archived: false, visibility: 'public'
  },
  {
    id: '1084036437',
    name: 'Sci_cal_proj',
    description: 'Scientific calculator project with advanced mathematical operations',
    language: 'PowerShell',
    html_url: `https://github.com/${GITHUB_USERNAME}/Sci_cal_proj`,
    homepage: null,
    stars: 0, forks: 0, watchers: 0, open_issues: 0, size: 64,
    default_branch: 'main',
    created_at: '2025-10-27T06:03:54Z',
    updated_at: '2025-10-27T06:49:57Z',
    pushed_at: '2025-10-27T06:49:53Z',
    topics: ['calculator', 'powershell'],
    fork: false, archived: false, visibility: 'public'
  },
  {
    id: '985656422',
    name: 'techmaurya-demo',
    description: 'This is my first Git Repository — a learning demo project',
    language: 'JavaScript',
    html_url: `https://github.com/${GITHUB_USERNAME}/techmaurya-demo`,
    homepage: null,
    stars: 0, forks: 0, watchers: 0, open_issues: 0, size: 2,
    default_branch: 'main',
    created_at: '2025-05-18T08:43:14Z',
    updated_at: '2025-05-18T08:51:41Z',
    pushed_at: '2025-05-18T08:51:38Z',
    topics: ['demo', 'learning'],
    fork: false, archived: false, visibility: 'public'
  },
];

const FALLBACK_PROFILE = {
  avatar_url: 'https://avatars.githubusercontent.com/u/202846918?v=4',
  name: 'Sanu Maurya',
  bio: '',
  public_repos: 4,
  followers: 1,
  following: 1,
  location: '',
  blog: '',
  html_url: `https://github.com/${GITHUB_USERNAME}`,
  created_at: '2025-03-11T18:54:26Z'
};

function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLang, setSelectedLang] = useState('All');
  const [languages, setLanguages] = useState(['All']);
  const [dataSource, setDataSource] = useState('');
  const [cachedAt, setCachedAt] = useState('');

  useEffect(() => { fetchProjects(false); }, []);

  const applyRepoData = (repoList, profileData, source, cacheTime) => {
    const nonForked = (repoList || []).filter(r => !r.fork);
    setRepos(nonForked);
    setProfile(profileData || null);
    setDataSource(source);
    setCachedAt(cacheTime || '');
    const langs = ['All', ...new Set(nonForked.map(r => r.language).filter(l => l && l !== 'Unknown'))];
    setLanguages(langs);
  };

  const fetchProjects = async (forceRefresh = false) => {
    try {
      if (forceRefresh) setRefreshing(true);
      else setLoading(true);
      setError(null);

      // Try 1: Our own API route (which has caching + fallback logic)
      try {
        const url = `/api/github?username=${GITHUB_USERNAME}${forceRefresh ? '&refresh=true' : ''}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.success && data.repos && data.repos.length > 0) {
          applyRepoData(data.repos, data.profile, data.source || 'live', data.cached_at);
          return;
        }
      } catch (apiErr) {
        console.warn('API route failed, trying direct GitHub fetch:', apiErr.message);
      }

      // Try 2: Direct GitHub API call from the browser (separate rate limit from server)
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: { 'Accept': 'application/vnd.github.v3+json' }
          }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`, {
            headers: { 'Accept': 'application/vnd.github.v3+json' }
          })
        ]);

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          let profileData = null;
          if (profileRes.ok) {
            const p = await profileRes.json();
            profileData = {
              avatar_url: p.avatar_url,
              name: p.name || GITHUB_USERNAME,
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
          const formatted = reposData.map(repo => ({
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
          }));
          applyRepoData(formatted, profileData, 'direct', new Date().toISOString());
          return;
        }
      } catch (directErr) {
        console.warn('Direct GitHub API failed, using fallback:', directErr.message);
      }

      // Try 3: Static fallback data — always available, no network needed
      console.log('Using static fallback project data');
      applyRepoData(FALLBACK_REPOS, FALLBACK_PROFILE, 'fallback', new Date().toISOString());

    } catch (err) {
      // Even the ultimate fallback — use static data
      console.error('All fetch methods failed:', err);
      applyRepoData(FALLBACK_REPOS, FALLBACK_PROFILE, 'fallback', new Date().toISOString());
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const filteredRepos = selectedLang === 'All' ? repos : repos.filter(r => r.language === selectedLang);

  const langColors = {
    JavaScript: '#f1e05a', Python: '#3572A5', Java: '#b07219',
    'C++': '#f34b7d', C: '#555555', HTML: '#e34c26', CSS: '#563d7c',
    TypeScript: '#3178c6', PowerShell: '#012456', Unknown: '#8b8b8b',
    Shell: '#89e051', Go: '#00ADD8', Rust: '#dea584', Ruby: '#701516',
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const timeAgo = (dateStr) => {
    if (!dateStr) return '';
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    return `${Math.floor(months / 12)}y ago`;
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <SectionBg image={BG_IMAGES.projects} opacity={0.08} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-3 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-5 py-2 text-xs font-medium border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
            <Github className="w-3.5 h-3.5" /> <span className="ml-1.5">My Projects</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Dynamically fetched from GitHub API — always up to date
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          </div>
        </div>

        {/* GitHub Profile Stats Bar */}
        {!loading && profile && (
          <div className="mb-10 animate-fade-in-up">
            <Card className="glass-premium border-border/50 overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse-glow opacity-30" />
                      <img
                        src={profile.avatar_url}
                        alt={profile.name}
                        className="relative w-14 h-14 rounded-full ring-2 ring-primary/30"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-base">{profile.name}</h3>
                        <a
                          href={profile.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          @{GITHUB_USERNAME}
                        </a>
                      </div>
                      {profile.bio && (
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{profile.bio}</p>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 sm:gap-6 sm:ml-auto">
                    {[
                      { value: profile.public_repos, label: 'Repos' },
                      { value: profile.followers, label: 'Followers' },
                      { value: profile.following, label: 'Following' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center group">
                        <p className="text-lg font-bold text-primary group-hover:scale-110 transition-transform">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Refresh + Source */}
                  <div className="flex items-center gap-2 sm:ml-4">
                    <button
                      onClick={() => fetchProjects(true)}
                      disabled={refreshing}
                      className="p-2.5 rounded-xl glass hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 disabled:opacity-50 hover:scale-110 hover:rotate-180"
                      title="Refresh from GitHub"
                    >
                      <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                    </button>
                    <Badge
                      className={`text-xs px-3 py-1 ${
                        dataSource === 'live' || dataSource === 'direct'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : dataSource === 'cache'
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                          : dataSource === 'fallback'
                          ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}
                    >
                      <span className="relative flex h-1.5 w-1.5 mr-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          dataSource === 'live' || dataSource === 'direct' ? 'bg-emerald-400' : dataSource === 'cache' ? 'bg-blue-400' : dataSource === 'fallback' ? 'bg-purple-400' : 'bg-amber-400'
                        }`}></span>
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                          dataSource === 'live' || dataSource === 'direct' ? 'bg-emerald-500' : dataSource === 'cache' ? 'bg-blue-500' : dataSource === 'fallback' ? 'bg-purple-500' : 'bg-amber-500'
                        }`}></span>
                      </span>
                      {dataSource === 'live' ? 'Live' : dataSource === 'direct' ? 'Direct' : dataSource === 'cache' ? 'Cached' : dataSource === 'fallback' ? 'Offline' : 'Stale'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Language Filter */}
        {!loading && !error && repos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedLang === lang
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 scale-105'
                    : 'glass text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:scale-105'
                }`}
              >
                {lang !== 'All' && (
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                    style={{ backgroundColor: langColors[lang] || '#8b8b8b' }}
                  />
                )}
                {lang} ({lang === 'All' ? repos.length : repos.filter(r => r.language === lang).length})
              </button>
            ))}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Github className="w-8 h-8 text-primary animate-pulse" />
              </div>
            </div>
            <p className="text-muted-foreground mt-6 animate-pulse">Fetching projects from GitHub...</p>
            <p className="text-xs text-muted-foreground mt-1">github.com/{GITHUB_USERNAME}</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex p-4 rounded-2xl bg-destructive/10 border border-destructive/20 mb-4 animate-scale-in">
              <Github className="w-8 h-8 text-destructive" />
            </div>
            <p className="text-destructive mb-2 font-medium">{error}</p>
            <p className="text-xs text-muted-foreground mb-4">GitHub API may be rate-limited. Try refreshing.</p>
            <Button onClick={() => fetchProjects(true)} variant="outline" className="rounded-xl hover:scale-105 transition-transform">
              <RefreshCw className="w-4 h-4 mr-2" /> Try Again
            </Button>
          </div>
        )}

        {/* Project Cards */}
        {!loading && !error && (
          <>
            {/* Pinned Alpha Home Tuition */}
            <div className="mb-6 grid grid-cols-1">
              <Card className="group glass-premium hover-card-lift border-primary/30 flex flex-col overflow-hidden animate-fade-in-up gradient-border relative shadow-lg shadow-primary/10 max-w-sm sm:max-w-none mx-auto sm:mx-0 w-full lg:w-[calc(33.333%-13px)]">
                <div className="absolute top-0 right-0 p-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] px-2 py-0.5 shadow-sm">Pinned</Badge>
                </div>
                <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 min-w-0 pt-2">
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 flex-shrink-0">
                        <Folder className="w-4 h-4 text-emerald-500" />
                      </div>
                      <CardTitle className="text-base sm:text-lg truncate group-hover:text-emerald-500 transition-colors duration-300">
                        Alpha Home Tuition
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="line-clamp-2 mt-2 text-sm leading-relaxed">
                    A comprehensive platform built for Alpha Home Tuition.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0 space-y-3">
                  <div className="flex items-center flex-wrap gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="w-3 h-3 rounded-full ring-2 ring-offset-1 ring-offset-background bg-cyan-400 ring-cyan-400" />
                      React
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground/70 pt-1 border-t border-border/30">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 2026</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['React', 'Supabase', 'Tailwind CSS', 'React Router', 'NVIDIA AI Chatbot'].map(t => (
                      <Badge key={t} className="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {filteredRepos.length === 0 ? (
              <div className="text-center py-16">
                <Folder className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">No projects found for this filter.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredRepos.map((repo, index) => (
                  <Card
                    key={repo.id}
                    className="group glass-premium hover-card-lift border-border/50 flex flex-col overflow-hidden animate-fade-in-up gradient-border"
                    style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
                  >
                    {/* Top gradient accent */}
                    <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="p-1.5 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                            <Folder className="w-4 h-4 text-primary" />
                          </div>
                          <CardTitle className="text-base sm:text-lg truncate group-hover:text-primary transition-colors duration-300">
                            {repo.name}
                          </CardTitle>
                        </div>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl hover:bg-primary/10 transition-all duration-300 flex-shrink-0 text-muted-foreground hover:text-primary hover:scale-110 hover:rotate-12"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <CardDescription className="line-clamp-2 mt-2 text-sm leading-relaxed">
                        {repo.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-auto pt-0 space-y-3">
                      {/* Stats row */}
                      <div className="flex items-center flex-wrap gap-3">
                        {repo.language && repo.language !== 'Unknown' && (
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span
                              className="w-3 h-3 rounded-full ring-2 ring-offset-1 ring-offset-background"
                              style={{ backgroundColor: langColors[repo.language] || '#8b8b8b', ringColor: langColors[repo.language] || '#8b8b8b' }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs text-muted-foreground hover:text-amber-400 transition-colors cursor-default">
                          <Star className="w-3 h-3" /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blue-400 transition-colors cursor-default">
                          <GitFork className="w-3 h-3" /> {repo.forks}
                        </span>
                        {(repo.watchers || 0) > 0 && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground hover:text-emerald-400 transition-colors cursor-default">
                            <Eye className="w-3 h-3" /> {repo.watchers}
                          </span>
                        )}
                      </div>

                      {/* Date info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground/70 pt-1 border-t border-border/30">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Updated {timeAgo(repo.updated_at || repo.pushed_at)}
                        </span>
                        {(repo.size || 0) > 0 && (
                          <span>{repo.size < 1024 ? `${repo.size} KB` : `${(repo.size / 1024).toFixed(1)} MB`}</span>
                        )}
                      </div>

                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {repo.topics.slice(0, 4).map((topic) => (
                            <Badge key={topic} className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Homepage link */}
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline group/link"
                        >
                          <Globe className="w-3 h-3 group-hover/link:rotate-12 transition-transform" /> Live Demo
                          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* View All + Last Updated */}
            <div className="text-center mt-12 space-y-3 animate-fade-in">
              <Button asChild variant="outline" size="lg" className="group rounded-xl glass border-border/50 hover:bg-primary/5 hover:border-primary/30 hover:scale-105 transition-all gradient-border">
                <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" /> View All on GitHub
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              {cachedAt && (
                <p className="text-xs text-muted-foreground/50 flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> Last synced: {formatDate(cachedAt)} &middot; Source: {dataSource}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ===================== EXPERIENCE SECTION =====================
function ExperienceSection() {
  const sectionRef = useReveal();

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.about} opacity={0.05} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-2 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="My Experience"
          icon={<Briefcase className="w-3.5 h-3.5" />}
          title="Experience"
          subtitle="My professional journey and freelance work"
        />

        <div className="max-w-4xl mx-auto space-y-8 reveal-scale">
          <Card className="glass-premium border-border/50 overflow-hidden gradient-border group">
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:h-1.5 transition-all duration-300" />
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold">Freelancer - Frontend Developer</h3>
                  <p className="text-primary font-medium mt-1">ParivartanX</p>
                </div>
                <Badge variant="outline" className="border-primary/20 bg-primary/5">March 2026 &middot; Remote</Badge>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Developed responsive web app using React & Tailwind.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Integrated React Router for seamless navigation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Ensured cross-device compatibility for optimal user experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Used Google's advanced tool like Stitch to enhance productivity.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ===================== AI AUTOMATION SECTION =====================
function AiAutomationSection() {
  const sectionRef = useReveal();

  return (
    <section id="ai" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.skills} opacity={0.06} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-3 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AI & Automation"
          icon={<Sparkles className="w-3.5 h-3.5" />}
          title="AI & Automation"
          subtitle="Leveraging AI and automation tools to streamline workflows and create intelligent solutions"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-scale">
          {[
            { title: 'Production Dashboards', desc: 'Built production-level dashboards.', icon: <Layout className="w-6 h-6 text-indigo-400" />, bg: 'from-indigo-500/15 to-purple-500/15' },
            { title: 'UGC Creator', desc: 'UGC creator for ParivartanX.', icon: <Globe className="w-6 h-6 text-emerald-400" />, bg: 'from-emerald-500/15 to-teal-500/15' },
            { title: 'Prompt Engineering', desc: 'Improved AI interactions through advanced prompt engineering.', icon: <Terminal className="w-6 h-6 text-amber-400" />, bg: 'from-amber-500/15 to-orange-500/15' },
            { title: 'AI Workshops', desc: 'Conducted AI workshops to educate and empower.', icon: <Users className="w-6 h-6 text-pink-400" />, bg: 'from-pink-500/15 to-rose-500/15' },
            { title: 'WhatsApp AI Chatbot', desc: 'Developed WhatsApp AI Chatbot for restaurants.', icon: <Smartphone className="w-6 h-6 text-cyan-400" />, bg: 'from-cyan-500/15 to-blue-500/15' },
            { title: 'Auto-Post Automation', desc: 'Created auto-post automation for Facebook, Instagram, and LinkedIn.', icon: <RefreshCw className="w-6 h-6 text-purple-400" />, bg: 'from-purple-500/15 to-indigo-500/15' },
          ].map((item, i) => (
            <Card key={i} className="glass-premium hover-card-lift border-border/50 group gradient-border">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== CERTIFICATIONS SECTION =====================
function CertificationsSection() {
  const sectionRef = useReveal();

  return (
    <section id="certifications" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.about} opacity={0.05} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-1 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Achievements"
          icon={<Award className="w-3.5 h-3.5" />}
          title="Certifications & Achievements"
          subtitle="Milestones and recognitions throughout my journey"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 reveal-left">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" /> Certifications
            </h3>
            <div className="space-y-4">
              {[
                'Idea Pitching (UIET MDU Rohtak)',
                'Frontend Development (Knowledge Gate)',
                'Prompt Engineering (Microsoft & SkillUp)',
                'Learning Python (Infosys)',
                'Data Science (IIT Madras)'
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass-premium border border-border/50 group hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 reveal-right">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-400" /> Achievements
            </h3>
            <div className="space-y-4">
              {[
                'Built multiple production-level dashboards',
                'UGC creator for ParivartanX',
                'SIH-2025 Team Leader',
                'Prompt Engineer'
              ].map((ach, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass-premium border border-border/50 group hover:border-amber-400/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="font-medium">{ach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== RESUME SECTION =====================
function ResumeSection() {
  const sectionRef = useReveal();

  return (
    <section id="resume" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.resume} opacity={0.07} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-1 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Resume"
          icon={<FileCode className="w-3.5 h-3.5" />}
          title="My Resume"
          subtitle="Download my resume to learn more about my education, skills, and experiences"
        />

        <Card className="max-w-lg mx-auto glass-premium border-border/50 overflow-hidden reveal-scale gradient-border group">
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:h-2 transition-all duration-300" />
          <CardContent className="p-8 sm:p-10 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <FileCode className="w-12 h-12 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Sanu Kumar</h3>
            <p className="text-muted-foreground text-sm mb-8">
              B.Tech CSE | Full Stack Developer | Freelancer
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Education', value: 'B.Tech CSE' },
                { label: 'University', value: 'MDU Rohtak' },
                { label: 'Batch', value: '2024-28' },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl glass text-center">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="group/btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl shadow-indigo-500/20 rounded-xl w-full sm:w-auto px-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
                <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" /> Download Resume (PDF)
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// ===================== CONTACT SECTION =====================
// EmailJS Configuration — update these with your credentials from emailjs.com
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useReveal();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: 'Sanu Kumar',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to the user if an auto-reply template is configured
      // Note: You can also configure auto-reply directly inside your primary template on the EmailJS dashboard
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        const autoReplyParams = {
          to_name: form.name,
          to_email: form.email,
          message: form.message,
          reply_message: "Thank you for reaching out! I have received your message and will get back to you as soon as possible."
        };
        
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            autoReplyParams,
            EMAILJS_PUBLIC_KEY
          );
        } catch (autoReplyErr) {
          console.warn('Auto-reply failed to send:', autoReplyErr);
          // We don't throw here because the main message was already sent successfully
        }
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" ref={sectionRef}>
      <SectionBg image={BG_IMAGES.contact} opacity={0.06} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-3 opacity-50" />

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
              <span className="gradient-text-aurora">together</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-3">
              {[
                { icon: <MapPin className="w-5 h-5 text-indigo-400" />, bg: 'from-indigo-500/15 to-purple-500/15 border-indigo-500/20', label: 'Location', value: 'Rohtak, Haryana, India' },
                { icon: <Github className="w-5 h-5 text-purple-400" />, bg: 'from-purple-500/15 to-pink-500/15 border-purple-500/20', label: 'GitHub', value: `github.com/${GITHUB_USERNAME}`, href: `https://github.com/${GITHUB_USERNAME}` },
                { icon: <Linkedin className="w-5 h-5 text-blue-400" />, bg: 'from-blue-500/15 to-indigo-500/15 border-blue-500/20', label: 'LinkedIn', value: 'Sanu Kumar', href: LINKEDIN_URL },
              ].map((item, i) => (
                <Card key={item.label} className="glass-premium hover-card-lift border-border/50 group gradient-border" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.bg} border flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group/link">
                          {item.value}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick connect buttons */}
            <div className="flex items-center gap-3 pt-4">
              <p className="text-sm text-muted-foreground">Quick connect:</p>
              {[
                { icon: <Github className="w-5 h-5" />, href: `https://github.com/${GITHUB_USERNAME}`, label: 'GitHub', color: 'hover:text-white hover:bg-gray-800' },
                { icon: <Linkedin className="w-5 h-5" />, href: LINKEDIN_URL, label: 'LinkedIn', color: 'hover:text-white hover:bg-blue-600' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl glass text-muted-foreground ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-premium border-border/50 overflow-hidden reveal-right gradient-border">
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', value: form.name, icon: <Users className="w-4 h-4" /> },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', value: form.email, icon: <Mail className="w-4 h-4" /> },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label className={`text-sm font-medium mb-2 flex items-center gap-2 transition-colors ${focusedField === field.id ? 'text-primary' : 'text-muted-foreground'}`}>
                      {field.icon}
                      {field.label}
                    </label>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-background/50 rounded-xl border-border/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30"
                    />
                  </div>
                ))}
                <div className="relative">
                  <label className={`text-sm font-medium mb-2 flex items-center gap-2 transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'}`}>
                    <Send className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-all duration-300 focus:border-primary/50 hover:border-primary/30"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2 animate-scale-in">
                    <Sparkles className="w-4 h-4" /> Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm animate-scale-in">
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  size="lg"
                  className="group w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl shadow-indigo-500/20 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {status === 'sending' ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
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
      <SectionBg image={BG_IMAGES.hero} opacity={0.05} overlay="from-background via-background/95 to-background" />
      <div className="absolute inset-0 mesh-gradient-1 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold gradient-text-aurora tracking-tight hover:scale-105 inline-block transition-transform">
              &lt;SK /&gt;
            </a>
            <p className="text-sm text-muted-foreground mt-1">Aspiring Software Developer</p>
          </div>

          {/* Footer nav */}
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover:-translate-y-0.5 inline-block"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
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
                className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={link.label}
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
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> using Next.js & Tailwind CSS
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
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-slide-up group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 noise-overlay">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AiAutomationSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
