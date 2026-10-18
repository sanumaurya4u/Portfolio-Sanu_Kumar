'use client';

import { Link } from 'react-router-dom';
import {
  FileText,
  Mail,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Phone,
  Globe,
  FolderGit2,
  ExternalLink
} from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="chai-kicker">Curriculum Vitae · Official Source of Truth</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight mt-1">
              Resume <span className="text-[#E45D25]">Overview</span>
            </h1>
          </div>
          <span className="self-start sm:self-auto chai-tag-orange text-xs py-1 px-3">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Verified Resume
          </span>
        </div>
        <p className="text-base text-[#5C4E43] max-w-2xl leading-relaxed">
          Digital resume formatted according to official credentials, technical qualifications, and engineering records.
        </p>
      </div>

      {/* Editorial Resume Document Card */}
      <div className="chai-card p-6 sm:p-12 bg-white shadow-sm space-y-10 border-[#E5DCD0]">
        {/* Document Header */}
        <div className="border-b border-[#EFE8DD] pb-8 text-center sm:text-left sm:flex sm:items-start sm:justify-between sm:gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1712] tracking-tight">
              SANU KUMAR
            </h2>
            <p className="text-sm font-semibold text-[#E45D25]">
              Full-Stack Developer · Computer Science Undergraduate
            </p>
            <p className="text-xs text-[#8C7667]">
              Technical Head of E-Cell · UIET Maharshi Dayanand University (2024–2028)
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-end gap-1.5 text-xs text-[#63574E]">
            <a
              href="tel:+917295948480"
              className="inline-flex items-center gap-1.5 hover:text-[#E45D25] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E45D25]" />
              +91-7295948480
            </a>
            <a
              href="mailto:sanu.stu24.eng@student.mdu.ac.in"
              className="inline-flex items-center gap-1.5 hover:text-[#E45D25] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E45D25]" />
              sanu.stu24.eng@student.mdu.ac.in
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E45D25]" />
              Rohtak, Haryana, India
            </span>
            <div className="flex items-center gap-2.5 pt-1.5 text-[#1F1712] font-medium">
              <a
                href="https://www.linkedin.com/in/sanu-kumar-91619b233"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E45D25] inline-flex items-center gap-1 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-[#DDD3C5]">·</span>
              <a
                href="https://github.com/sanumaurya4u"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E45D25] inline-flex items-center gap-1 transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span className="text-[#DDD3C5]">·</span>
              <Link
                to="/"
                className="hover:text-[#E45D25] inline-flex items-center gap-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" /> Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* 1. PROFESSIONAL SUMMARY */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667] pb-1 border-b border-[#EFE8DD]">
            Professional Summary
          </h3>
          <p className="text-sm text-[#5C4E43] leading-relaxed">
            Computer Science and Engineering undergraduate with hands-on experience building responsive full-stack web applications using React, Node.js, Express.js, PostgreSQL, Supabase and Railway. Experienced in REST API integration, authentication, responsive UI development, and deployment. Seeking a Software Development, Full-Stack Development internship to contribute to real-world products and strengthen engineering skills. Actively learning Data Structures and Algorithms (DSA) to enhance coding and analytical skills. Working as a Technical head of E-Cell in my college.
          </p>
        </div>

        {/* 2. EDUCATION */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667] pb-1 border-b border-[#EFE8DD]">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h4 className="text-sm font-bold text-[#1F1712]">
                University Institute of Engineering and Technology (UIET)
              </h4>
              <p className="text-xs text-[#5C4E43]">
                Maharshi Dayanand University · B.Tech - Computer Science and Engineering
              </p>
              <div className="mt-1">
                <span className="chai-tag-orange text-[11px] py-0.5 px-2">
                  CGPA: 8.3
                </span>
              </div>
            </div>
            <div className="text-xs text-[#8C7667] sm:text-right mt-2 sm:mt-0">
              <div className="font-semibold text-[#1F1712]">2024 – 2028</div>
              <div>Rohtak, Haryana</div>
            </div>
          </div>
        </div>

        {/* 3. TECHNICAL SKILLS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667] pb-1 border-b border-[#EFE8DD]">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#5C4E43]">
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
              <strong className="text-[#1F1712] block mb-1">Languages:</strong>
              <span>JavaScript, C++, C, Python Basics, SQL</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
              <strong className="text-[#1F1712] block mb-1">Frontend:</strong>
              <span>HTML5, CSS3, JavaScript, React.js, Tailwind CSS, React Router</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
              <strong className="text-[#1F1712] block mb-1">Backend:</strong>
              <span>Node.js, Express.js, REST APIs</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
              <strong className="text-[#1F1712] block mb-1">Database:</strong>
              <span>PostgreSQL, Supabase</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
              <strong className="text-[#1F1712] block mb-1">Tools & Deployment:</strong>
              <span>Git, GitHub, VS Code, Cursor, Antigravity, Vercel, Railway, Hostinger</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E7DEC8]">
              <strong className="text-[#1F1712] block mb-1">Other:</strong>
              <span>Authentication, API Integration, Responsive Design, Debugging, Codex, Claude Code</span>
            </div>
          </div>
        </div>

        {/* 4. EXPERIENCE */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667] pb-1 border-b border-[#EFE8DD]">
            Experience
          </h3>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h4 className="text-sm font-bold text-[#1F1712]">
                  ParivartanX
                </h4>
                <p className="text-xs font-semibold text-[#E45D25]">
                  Freelancer - Frontend Developer
                </p>
              </div>
              <div className="text-xs text-[#8C7667] sm:text-right">
                <div className="font-semibold text-[#1F1712]">March 2026</div>
                <div>Remote</div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#5C4E43] leading-relaxed pt-1">
              <li>Developed a responsive web application using React and Tailwind CSS.</li>
              <li>Integrated React Router for seamless navigation between pages.</li>
              <li>Optimized UI layouts for desktop, tablet, and mobile devices to improve cross-device usability.</li>
              <li>Used modern AI-assisted development tools, like Google Stitch and Antigravity for development workflows.</li>
            </ul>
          </div>
        </div>

        {/* 5. PROJECTS */}
        <div className="space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667] pb-1 border-b border-[#EFE8DD]">
            Projects
          </h3>

          <div className="space-y-5">
            {/* Project 1 */}
            <div className="space-y-1.5 pb-4 border-b border-[#EFE8DD]/70">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#1F1712]">
                  E-CELL UIET-MDU <span className="text-xs font-normal text-[#8C7667]">| Next.js, TypeScript, Tailwind CSS, Supabase, GSAP</span>
                </h4>
                <span className="text-xs font-semibold text-[#1F1712]">2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#5C4E43] leading-relaxed">
                <li>Official website of the Entrepreneurship Cell that showcases events, team, and startup resources.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 pb-4 border-b border-[#EFE8DD]/70">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#1F1712]">
                  Kisan Direct <span className="text-xs font-normal text-[#8C7667]">| React, Node.js, Express.js, PostgreSQL</span>
                </h4>
                <span className="text-xs font-semibold text-[#1F1712]">2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#5C4E43] leading-relaxed">
                <li>Platform connecting farmers directly with consumers with product listing, orders, and secure authentication.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5 pb-4 border-b border-[#EFE8DD]/70">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#1F1712]">
                  Magnus AI <span className="text-xs font-normal text-[#8C7667]">| React, Gemini API, Tailwind CSS</span>
                </h4>
                <span className="text-xs font-semibold text-[#1F1712]">2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#5C4E43] leading-relaxed">
                <li>AI-powered web app using the Google Gemini API for intelligent content generation with a responsive UI.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="space-y-1.5 pb-4 border-b border-[#EFE8DD]/70">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#1F1712]">
                  Campus Connect <span className="text-xs font-normal text-[#8C7667]">| React, Supabase, Tailwind CSS</span>
                </h4>
                <span className="text-xs font-semibold text-[#1F1712]">2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#5C4E43] leading-relaxed">
                <li>Campus networking app to share resources, events, and announcements with real-time features.</li>
              </ul>
            </div>

            {/* Project 5 */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#1F1712]">
                  Alpha Home Tuition <span className="text-xs font-normal text-[#8C7667]">| React, Supabase, Tailwind CSS, NVIDIA AI Chatbot</span>
                </h4>
                <span className="text-xs font-semibold text-[#1F1712]">2025-26</span>
              </div>
              <ul className="list-disc list-inside text-xs text-[#5C4E43] leading-relaxed">
                <li>Built a tuition platform with NVIDIA AI chatbot, user authentication, student portal, admin dashboard, and real-time database.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6. ACHIEVEMENTS */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667] pb-1 border-b border-[#EFE8DD]">
            Achievements
          </h3>
          <ul className="space-y-2 text-xs text-[#5C4E43] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] mt-1.5 flex-shrink-0" />
              <span>
                <strong className="text-[#1F1712]">Technical Head, E-Cell UIET-MDU:</strong> Leading technical initiatives and contributing to the E-Cell’s official web platform.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] mt-1.5 flex-shrink-0" />
              <span>
                <strong className="text-[#1F1712]">Idea Pitching:</strong> Actively participated in idea-pitching competitions and presented innovative ideas with problem descriptions, proposed solutions, and working prototypes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] mt-1.5 flex-shrink-0" />
              <span>
                <strong className="text-[#1F1712]">Eureka! 2026 – IIT Bombay:</strong> Presented an entrepreneurial idea with a detailed problem description, proposed solution, and prototype.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] mt-1.5 flex-shrink-0" />
              <span>
                <strong className="text-[#1F1712]">Smart India Hackathon:</strong> Participated in SIH-2025 and SIH-2026 as a Team Leader.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] mt-1.5 flex-shrink-0" />
              <span>
                <strong className="text-[#1F1712]">AI, Automation & Technical Activities:</strong> Developed AI-powered applications and automation workflows while actively participating in college hackathons, workshops, and technical activities.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Next step CTA */}
      <div className="pt-8 border-t border-[#E7DEC8] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#1F1712]">Ready to discuss opportunities?</h3>
          <p className="text-xs text-[#63574E]">Feel free to reach out directly via the contact form or email.</p>
        </div>
        <Link
          to="/contact"
          className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          Send Message <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
