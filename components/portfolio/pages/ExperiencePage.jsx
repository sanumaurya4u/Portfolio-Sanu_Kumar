'use client';

import { Link } from 'react-router-dom';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function ExperiencePage() {
  const experiences = [
    {
      role: 'Freelancer — Frontend Developer',
      company: 'ParivartanX',
      location: 'Remote',
      period: 'March 2026',
      badge: 'CLIENT PROJECT',
      tagType: 'orange',
      summary:
        'Engaged as a Frontend Developer to build and deploy high-performance user interfaces and responsive workflows.',
      deliverables: [
        'Developed a responsive, modern web application utilizing React and Tailwind CSS.',
        'Architected and integrated React Router for multi-page client navigation with clean URLs.',
        'Conducted rigorous cross-device testing to guarantee fluid responsiveness across mobile, tablet, and desktop viewports.',
        "Leveraged Google's advanced AI design and generation tool Stitch to accelerate interface delivery.",
      ],
      technologies: ['React', 'Tailwind CSS', 'React Router', 'Google Stitch', 'Vercel'],
    },
  ];

  const engagements = [
    {
      title: 'WhatsApp AI Chatbot System',
      category: 'AI AUTOMATION',
      description:
        'Engineered an intelligent WhatsApp chatbot for a restaurant client to handle food orders, display menu options, and track reservations in real-time.',
      tools: ['Node.js', 'WhatsApp Business API', 'Prompt Engineering'],
    },
    {
      title: 'Social Media Auto-Post Automation',
      category: 'WORKFLOW AUTOMATION',
      description:
        'Built an automated distribution pipeline dispatching scheduled content across LinkedIn, Facebook, and Instagram using webhooks and n8n.',
      tools: ['n8n', 'Meta Graph API', 'Webhooks'],
    },
    {
      title: 'Production Dashboard Engineering',
      category: 'FULL-STACK DELIVERY',
      description:
        'Developed custom analytics and administrative dashboards featuring role-based authentication, real-time data tables, and state management.',
      tools: ['React', 'Supabase', 'Tailwind CSS', 'Chart.js'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="chai-kicker">Professional Track Record & Freelance Delivery</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight">
          Work <span className="text-[#E45D25]">Experience</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C4E43] max-w-2xl leading-relaxed">
          Real-world client work, frontend development contracts, and autonomous AI automation projects.
        </p>
      </div>

      {/* Main Experience Timeline / Cards */}
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="chai-card p-6 sm:p-8 bg-white space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#EFE8DD]">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1F1712] tracking-tight">
                    {exp.role}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                  <span className="font-semibold text-[#E45D25]">{exp.company}</span>
                  <span className="text-[#DDD3C5]">·</span>
                  <span className="text-[#63574E] inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  <span className="text-[#DDD3C5]">·</span>
                  <span className="text-[#63574E] inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <span className="chai-tag-orange text-xs self-start">
                {exp.badge}
              </span>
            </div>

            <p className="text-sm text-[#5C4E43] leading-relaxed">
              {exp.summary}
            </p>

            {/* Deliverables list */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#8C7667]">
                Key Deliverables & Responsibilities:
              </h3>
              <ul className="space-y-2">
                {exp.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#5C4E43]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack pills */}
            <div className="pt-4 border-t border-[#EFE8DD] flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#8C7667] font-mono mr-2">Technologies:</span>
              {exp.technologies.map((tech) => (
                <span key={tech} className="chai-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Autonomous & AI Freelance Engagements */}
      <div className="space-y-6 pt-6 border-t border-[#E7DEC8]">
        <div className="space-y-1">
          <div className="chai-kicker">Automation & Solutions</div>
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Applied Engineering & Autonomous Systems
          </h2>
          <p className="text-sm text-[#5C4E43]">
            Practical software projects deployed for real-world automation and workflow optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="chai-card p-6 bg-white space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="chai-tag text-[10px] py-0.5 px-2">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-[#1F1712] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5C4E43] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE8DD] flex flex-wrap gap-1.5">
                {item.tools.map((tool) => (
                  <span key={tool} className="text-[10px] px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E7DEC8] text-[#63574E] font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next step CTA */}
      <div className="pt-8 border-t border-[#E7DEC8] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#1F1712]">Want to discuss a project or freelance role?</h3>
          <p className="text-xs text-[#63574E]">I am currently available for new opportunities.</p>
        </div>
        <Link
          to="/contact"
          className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          Get In Touch <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
