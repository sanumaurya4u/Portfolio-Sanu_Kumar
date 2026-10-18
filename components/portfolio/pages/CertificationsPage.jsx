'use client';

import { Link } from 'react-router-dom';
import {
  Award,
  Trophy,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookmarkCheck,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'Prompt Engineering with GitHub Copilot',
      issuer: 'Microsoft & SkillUp',
      period: 'Credentialed',
      category: 'AI & Engineering',
      description:
        'Mastered generative AI prompting, Copilot workflows, context conditioning, and structured test generation for software developers.',
      highlight: true,
    },
    {
      title: 'Data Science Course (Ongoing)',
      issuer: 'IIT Madras',
      period: 'In Progress',
      category: 'Computer Science',
      description:
        'Advanced curriculum covering statistical data analytics, mathematical foundations, Python data modeling, and predictive systems.',
      highlight: true,
    },
    {
      title: 'Frontend Development Certification',
      issuer: 'Knowledge Gate Academy',
      period: 'Completed',
      category: 'Web Development',
      description:
        'Comprehensive training in HTML5, modern CSS3, responsive layouts, JavaScript ES6+, DOM manipulation, and frontend architecture.',
    },
    {
      title: 'Learning Python',
      issuer: 'Infosys Springboard',
      period: 'Completed',
      category: 'Programming',
      description:
        'Core Python programming covering object-oriented models, functions, exception handling, data structures, and script automation.',
    },
    {
      title: 'Idea Pitching — Engineers Day',
      issuer: 'UIET MDU Rohtak',
      period: 'Recognized',
      category: 'Innovation & Pitch',
      description:
        'Presented innovative technology solutions and system architecture pitch to university faculty and engineering evaluators.',
    },
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon (SIH 2025) Team Leader',
      description:
        'Led a dedicated team of engineers developing Jalgram, a smart water distribution and IoT management system addressing rural water scarcity.',
      badge: 'LEADERSHIP',
    },
    {
      title: 'Production-Level Dashboard Systems',
      description:
        'Architected and delivered multiple production-grade web dashboards with live Supabase authentication, analytics, and admin panels.',
      badge: 'DELIVERY',
    },
    {
      title: 'UGC Creator for ParivartanX',
      description:
        'Produced engaging user-generated content and product walkthroughs for the start-up ParivartanX, bridging tech and end-users.',
      badge: 'CREATIVE',
    },
    {
      title: 'Applied AI Workflow Automation',
      description:
        'Engineered operational WhatsApp chatbot systems for local businesses and social media auto-posting pipelines across 3 major networks.',
      badge: 'AUTOMATION',
    },
    {
      title: 'Real-World AI Workshops',
      description:
        'Successfully completed hands-on AI workshops with production implementations, automating repetitive tasks and system evaluations.',
      badge: 'LEARNING',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="chai-kicker">Verified Credentials & Milestones</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight">
          Certifications & <span className="text-[#E45D25]">Achievements</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C4E43] max-w-2xl leading-relaxed">
          Coursework credentials, professional qualifications, and hackathon leadership milestones verified from my resume.
        </p>
      </div>

      {/* Certifications Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2">
          <Award className="w-5 h-5 text-[#E45D25]" />
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Official Certifications & Courses
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`chai-card p-6 bg-white space-y-3 flex flex-col justify-between ${
                cert.highlight ? 'border-[#E5DCD0] hover:border-[#1F1712]' : ''
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C7667]">
                    {cert.category}
                  </span>
                  <span
                    className={
                      cert.highlight ? 'chai-tag-orange text-[10px]' : 'chai-tag text-[10px]'
                    }
                  >
                    {cert.period}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1F1712] tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#E45D25]">{cert.issuer}</p>
                <p className="text-xs text-[#5C4E43] leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE8DD] flex items-center gap-2 text-xs text-[#8C7667]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified resume credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="space-y-6 pt-6 border-t border-[#E7DEC8]">
        <div className="flex items-center gap-2 pb-2">
          <Trophy className="w-5 h-5 text-[#E45D25]" />
          <h2 className="text-2xl font-bold text-[#1F1712] tracking-tight">
            Key Achievements & Recognition
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="chai-card p-6 bg-white space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="chai-tag text-[10px] py-0.5 px-2">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold text-[#1F1712] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5C4E43] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE8DD] flex items-center gap-2 text-[11px] text-[#8C7667]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E45D25]" />
                <span>Verified accomplishment</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation CTA */}
      <div className="pt-8 border-t border-[#E7DEC8] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#1F1712]">Looking for the complete resume summary?</h3>
          <p className="text-xs text-[#63574E]">Review the comprehensive, structured HTML resume overview.</p>
        </div>
        <Link
          to="/resume"
          className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          View Resume Page <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
