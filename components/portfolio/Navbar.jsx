'use client';

import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Code2 } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7DEC8] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform duration-150 hover:scale-[1.02]"
          >
            <span className="w-8 h-8 rounded-full bg-[#F2ECE2] border border-[#E0D5C3] flex items-center justify-center text-[#E45D25] group-hover:bg-[#EAE0D0] transition-colors">
              <Code2 className="w-4 h-4 stroke-[2.25]" />
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold tracking-tight text-[#1F1712]">
                Sanu Kumar
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E45D25]" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F2ECE2]/60 p-1 rounded-full border border-[#E5DCD0]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#1F1712] text-white shadow-sm'
                      : 'text-[#63574E] hover:text-[#1F1712] hover:bg-[#FAF7F2]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-[#1F1712] hover:bg-[#382D25] text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 shadow-sm transition-all duration-150 hover:gap-2"
            >
              Get In Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full border border-[#E5DCD0] bg-[#FAF7F2] hover:bg-[#F2ECE2] text-[#1F1712] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-[#E7DEC8] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5 p-2 bg-[#F7F3EC] rounded-2xl border border-[#E5DCD0]">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1F1712] text-white font-semibold'
                        : 'text-[#63574E] hover:text-[#1F1712] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25]" />}
                  </Link>
                );
              })}
              <div className="pt-2 mt-1 border-t border-[#E5DCD0]/70">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-[#E45D25] hover:bg-[#C94E1B] text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
