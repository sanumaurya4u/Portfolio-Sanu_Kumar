'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageSquare
} from 'lucide-react';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_abcervm';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_w957o1c';
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_wetx4xd';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '3RfcHW12bDOPOYreb';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

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

      // Auto reply trigger if configured
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            {
              to_name: form.name,
              to_email: form.email,
              message: form.message,
              reply_message: 'Thank you for getting in touch! I have received your message and will respond shortly.',
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch (autoErr) {
          console.warn('Auto reply warning:', autoErr);
        }
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Failed to send your message. Please reach out directly at sanu.stu24.eng@student.mdu.ac.in');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b border-[#E7DEC8]">
        <div className="chai-kicker">Get In Touch · Collaboration</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F1712] tracking-tight">
          Contact & <span className="text-[#E45D25]">Inquiries</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5C4E43] max-w-2xl leading-relaxed">
          Open to software engineering internships, entry-level developer roles, and freelance web projects.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="md:col-span-5 space-y-4">
          <div className="chai-card p-6 bg-white space-y-6">
            <h2 className="text-lg font-bold text-[#1F1712] tracking-tight">
              Direct Contact Channels
            </h2>

            <div className="space-y-4 text-sm text-[#5C4E43]">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E7DEC8] flex items-center justify-center text-[#E45D25] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-[#8C7667] font-medium">Email</div>
                  <a
                    href="mailto:sanu.stu24.eng@student.mdu.ac.in"
                    className="text-xs font-semibold text-[#1F1712] hover:text-[#E45D25] break-all transition-colors"
                  >
                    sanu.stu24.eng@student.mdu.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E7DEC8] flex items-center justify-center text-[#E45D25] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-[#8C7667] font-medium">Location</div>
                  <p className="text-xs font-semibold text-[#1F1712]">
                    Rohtak, Haryana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E7DEC8] flex items-center justify-center text-[#E45D25] flex-shrink-0">
                  <Linkedin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-[#8C7667] font-medium">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/sanu-kumar-91619b233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#1F1712] hover:text-[#E45D25] transition-colors"
                  >
                    linkedin.com/in/sanu-kumar-91619b233
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E7DEC8] flex items-center justify-center text-[#E45D25] flex-shrink-0">
                  <Github className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs text-[#8C7667] font-medium">GitHub</div>
                  <a
                    href="https://github.com/sanumaurya4u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#1F1712] hover:text-[#E45D25] transition-colors"
                  >
                    github.com/sanumaurya4u
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F7F3EC] border border-[#E5DCD0] space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[#1F1712]">Currently Available</span>
            </div>
            <p className="text-xs text-[#5C4E43] leading-relaxed">
              Accepting inquiries for Summer 2026 internships, full-time junior developer roles, and freelance web contracts.
            </p>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="md:col-span-7">
          <div className="chai-card p-6 sm:p-8 bg-white space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#1F1712] tracking-tight">
                Send a Message
              </h2>
              <p className="text-xs text-[#63574E] mt-1">
                Fill out the form below and I will respond to your inquiry promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1F1712] mb-1.5">
                  Your Name <span className="text-[#E45D25]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#DDD3C5] rounded-xl px-4 py-2.5 text-xs text-[#1F1712] placeholder-[#8C7667] focus:outline-none focus:border-[#E45D25] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1712] mb-1.5">
                  Email Address <span className="text-[#E45D25]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#DDD3C5] rounded-xl px-4 py-2.5 text-xs text-[#1F1712] placeholder-[#8C7667] focus:outline-none focus:border-[#E45D25] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F1712] mb-1.5">
                  Message <span className="text-[#E45D25]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#DDD3C5] rounded-xl px-4 py-2.5 text-xs text-[#1F1712] placeholder-[#8C7667] focus:outline-none focus:border-[#E45D25] transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Your message has been sent successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-150 disabled:opacity-50 shadow-sm"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
