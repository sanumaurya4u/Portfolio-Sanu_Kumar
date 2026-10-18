'use client';

import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[#E7DEC8] bg-[#F7F3EC]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-full bg-[#F2ECE2] border border-[#E0D5C3] flex items-center justify-center text-[#E45D25] group-hover:bg-[#EAE0D0] transition-colors">
                <Code2 className="w-4 h-4 stroke-[2.25]" />
              </span>
              <span className="text-lg font-bold text-[#1F1712]">Sanu Kumar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25]" />
            </Link>
            <p className="text-sm text-[#63574E] max-w-sm leading-relaxed">
              Full-Stack Developer & Computer Science undergraduate at UIET-MDU Rohtak.
              Building scalable web applications and thoughtful user interfaces.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://github.com/sanumaurya4u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E0D5C3] bg-[#FAF7F2] hover:bg-[#F2ECE2] text-[#1F1712] flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanu-kumar-91619b233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E0D5C3] bg-[#FAF7F2] hover:bg-[#F2ECE2] text-[#1F1712] flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sanu.stu24.eng@student.mdu.ac.in"
                className="w-9 h-9 rounded-full border border-[#E0D5C3] bg-[#FAF7F2] hover:bg-[#F2ECE2] text-[#1F1712] flex items-center justify-center transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#8C7667] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Featured Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#8C7667] mb-4">
              Credentials
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/experience" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Resume Overview
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#63574E] hover:text-[#E45D25] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E7DEC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7667]">
          <p>© {currentYear} Sanu Kumar. Thoughtfully crafted developer portfolio.</p>
          <p className="flex items-center gap-1.5">
            <span>UIET MDU Rohtak</span>
            <span>·</span>
            <span>B.Tech CSE (2024–2028)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
