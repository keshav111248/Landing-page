import React, { useState } from 'react';

interface NavbarProps {
  onLoginClick?: () => void;
  onBookDemoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onBookDemoClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const appUrl = (import.meta.env.VITE_APP_URL || 'https://omnihr-frontend.vercel.app').replace(/\/$/, '');
  const loginUrl = `${appUrl}/signin`;

  const handleLogin = (e: React.MouseEvent) => {
    if (onLoginClick) {
      e.preventDefault();
      onLoginClick();
    }
  };

  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all" data-purpose="site-navigation">
      <div className="frosted-glass rounded-[6px] h-16 sm:h-20 px-6 flex items-center justify-between transition-all duration-300 shadow-glass-lum hover:shadow-glass-card-hover">
        {/* Brand Logo */}
        <a className="flex items-center gap-3.5 group" href="#">
          <div className="w-10 h-10 rounded-[6px] bg-gradient-to-tr from-brand-midnight via-slate-900 to-indigo-900 flex items-center justify-center text-brand-lime shadow-lg shadow-indigo-950/25 group-hover:scale-105 group-hover:rotate-1 transition-all duration-200 border border-white/30">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
              <rect height="8" rx="2" width="8" x="3" y="3"></rect>
              <path d="M13 5h8"></path>
              <path d="M13 9h5"></path>
              <rect height="6" rx="2" width="8" x="3" y="15"></rect>
              <path d="M13 17h8"></path>
              <path d="M13 21h4"></path>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Omni<span className="text-indigo-600 font-bold">HR</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a className="hover:text-indigo-600 transition-colors py-1 hover:-translate-y-0.5" href="#features">Features</a>
          <a className="hover:text-indigo-600 transition-colors py-1 hover:-translate-y-0.5" href="#how-it-works">How it works</a>
          <a className="hover:text-indigo-600 transition-colors py-1 hover:-translate-y-0.5" href="#modules">Modules</a>
          <a className="hover:text-indigo-600 transition-colors py-1 hover:-translate-y-0.5" href="#pricing">Pricing</a>
          <a className="hover:text-indigo-600 transition-colors py-1 hover:-translate-y-0.5" href="#faq">FAQ</a>
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-indigo-600 px-3.5 py-2 rounded-[6px] hover:bg-white/50 transition-all cursor-pointer"
            href={loginUrl}
            onClick={handleLogin}
          >
            Sign in
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 hover:from-indigo-950 hover:to-slate-900 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-[6px] transition-all duration-300 shadow-md shadow-indigo-950/25 border border-white/20 hover:scale-105 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (onBookDemoClick) {
                onBookDemoClick();
              }
            }}
          >
            <span>Book a Demo</span>
            <svg className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-[6px] text-slate-700 hover:bg-white/60 focus:outline-none cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 frosted-glass rounded-[6px] shadow-glass-card space-y-3">
          <a className="block py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600" href="#features" onClick={closeMobileMenu}>Features</a>
          <a className="block py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600" href="#how-it-works" onClick={closeMobileMenu}>How it works</a>
          <a className="block py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600" href="#modules" onClick={closeMobileMenu}>Modules</a>
          <a className="block py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600" href="#pricing" onClick={closeMobileMenu}>Pricing</a>
          <a className="block py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600" href="#faq" onClick={closeMobileMenu}>FAQ</a>
          <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
            <a className="text-sm font-semibold text-slate-700 hover:text-indigo-600" href={loginUrl} onClick={closeMobileMenu}>Sign in</a>
            <button
              type="button"
              className="text-xs font-semibold px-4 py-2 rounded-[6px] bg-slate-950 text-white cursor-pointer"
              onClick={() => {
                closeMobileMenu();
                if (onBookDemoClick) onBookDemoClick();
              }}
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

