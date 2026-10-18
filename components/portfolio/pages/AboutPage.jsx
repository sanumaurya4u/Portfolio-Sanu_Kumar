'use client';

import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Trophy,
  Target,
  ArrowRight,
  Code2,
  Terminal,
  Compass,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

const PROFILE_IMAGE = 'https://customer-assets.emergentagent.com/job_cse-portfolio-39/artifacts/609ekhyr_IMG_20260130_222658.jpg';

export default function AboutPage() {
  const coursework = [
    { name: 'Data Structures & Algorithms', desc: 'Arrays, Trees, Graphs, Sorting & Searching, Dynamic Programming' },
    { name: 'Object-Oriented Programming', desc: 'Encapsulation, Inheritance, Polymorphism, Abstraction, Design Patterns' },
    { name: 'Operating Systems', desc: 'Process Management, Scheduling, Memory Virtualization, File Systems' },
    { name: 'Domestic IT Assistant', desc: 'Hardware fundamentals, system setup, network basics, troubleshooting' },
  ];

  const highlights = [
    'B.Tech CSE student at UIET MDU Rohtak with a solid 8.3 CGPA.',
    'Over 500+ algorithmic coding problems solved across competitive platforms.',
    'Led a multi-disciplinary hackathon team for Smart India Hackathon (SIH 2025).',
    'Delivered responsive web interfaces and frontend modules as a freelancer at ParivartanX.',
    'Proficient in building modern single-page and server-driven web applications with React, Next.js, and Node.js.',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="chai-kicker">Biography & Academic Foundation</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight">
          About <span className="text-[#E45D25]">Sanu Kumar</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C4E43] max-w-2xl leading-relaxed">
          Full-Stack Web Developer, computer science undergraduate, and proactive learner dedicated to building scalable digital products.
        </p>
      </div>

      {/* Main Bio Grid */}
      <div className="grid md:grid-cols-12 gap-10 items-start">
        {/* Left Column: Story */}
        <div className="md:col-span-7 space-y-6 text-[#5C4E43] leading-relaxed">
          <h2 className="text-xl font-bold text-[#1F1712] tracking-tight flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#E45D25]" />
            Background & Technical Focus
          </h2>
          <p>
            I am a Computer Science undergraduate at the <strong>University Institute of Engineering and Technology (UIET)</strong>, Maharshi Dayanand University, Rohtak (Batch 2024–2028).
          </p>
          <p>
            With hands-on experience in full-stack web engineering using <strong>JavaScript, React, Node.js, Express.js, MongoDB, HTML, and CSS</strong>, I enjoy turning complex problem statements into elegant, human-centric software.
          </p>
          <p>
            Beyond standard CRUD interfaces, I am deeply interested in <strong>Data Structures and Algorithms</strong> to sharpen computational thinking, and I actively explore modern <strong>AI automation workflows</strong> to create high-leverage digital experiences.
          </p>

          <div className="p-5 rounded-2xl bg-[#F7F3EC] border border-[#E5DCD0] space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667]">
              Career Objective
            </h3>
            <p className="text-sm text-[#1F1712] font-medium leading-relaxed">
              Seeking entry-level Software Engineer or Full-Stack Web Developer opportunities where I can apply strong computer science fundamentals, contribute to high-impact web systems, and continue growing alongside experienced engineering mentors.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Card */}
        <div className="md:col-span-5 space-y-6">
          <div className="chai-card p-6 bg-white space-y-5">
            <div className="relative mx-auto w-36 h-36">
              <img
                src={PROFILE_IMAGE}
                alt="Sanu Kumar"
                className="w-full h-full rounded-full object-cover object-top border-4 border-[#F2ECE2] shadow-sm"
                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
              />
              <span className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E45D25] text-white">
                CGPA 8.3
              </span>
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-[#1F1712]">Sanu Kumar</h3>
              <p className="text-xs text-[#8C7667]">B.Tech in Computer Science & Engineering</p>
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#63574E]">
                <MapPin className="w-3.5 h-3.5 text-[#E45D25]" />
                <span>Rohtak, Haryana, India</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFE8DD] grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
                <div className="text-xs text-[#8C7667]">Current Year</div>
                <div className="text-sm font-bold text-[#1F1712] mt-0.5">2024 – 2028</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
                <div className="text-xs text-[#8C7667]">University</div>
                <div className="text-sm font-bold text-[#1F1712] mt-0.5">UIET MDU</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#E45D25]" />
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Formal Education
          </h2>
        </div>

        <div className="chai-card p-6 sm:p-8 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#EFE8DD]">
            <div>
              <h3 className="text-xl font-bold text-[#1F1712]">
                University Institute of Engineering and Technology (UIET)
              </h3>
              <p className="text-sm font-medium text-[#E45D25]">
                Maharshi Dayanand University (MDU) · Rohtak, Haryana
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="chai-tag-orange text-xs">2024 – 2028</span>
              <span className="chai-tag text-xs font-bold text-[#1F1712]">CGPA 8.3</span>
            </div>
          </div>
          <p className="text-sm text-[#5C4E43] leading-relaxed">
            Pursuing a Bachelor of Technology in Computer Science and Engineering with a focus on core software architecture, data structures, algorithm optimization, and software development lifecycles.
          </p>
        </div>
      </div>

      {/* Coursework Cards */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#E45D25]" />
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Academic Coursework
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {coursework.map((course) => (
            <div key={course.name} className="chai-card p-5 bg-white space-y-2">
              <h3 className="text-base font-bold text-[#1F1712]">{course.name}</h3>
              <p className="text-xs text-[#63574E] leading-relaxed">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#E45D25]" />
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Key Achievements & Milestones
          </h2>
        </div>

        <div className="chai-card p-6 sm:p-8 bg-white space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FDF2EC] border border-[#E45D25]/30 flex items-center justify-center text-[#E45D25] flex-shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-[#5C4E43] leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next steps CTA */}
      <div className="pt-8 border-t border-[#E7DEC8] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#1F1712]">Interested in my technical capabilities?</h3>
          <p className="text-xs text-[#63574E]">Explore the languages, frameworks, and developer tools I utilize.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/skills"
            className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
          >
            Explore Skills <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/projects"
            className="bg-[#FAF7F2] border border-[#DDD3C5] hover:bg-[#F2ECE2] text-[#1F1712] text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
