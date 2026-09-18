import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onLoginClick?: () => void;
  onBookDemoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onBookDemoClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled((prev) => {
            // Hysteresis buffer to completely eliminate oscillation and boundary flickering
            if (!prev && currentScrollY > 30) {
              return true;
            } else if (prev && currentScrollY < 12) {
              return false;
            }
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Layout spacer to preserve document flow & completely prevent layout shifts */}
      <div className="h-20 sm:h-24 w-full shrink-0 pointer-events-none" aria-hidden="true" />

      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'pt-0 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-900/5'
            : 'pt-3 sm:pt-4 bg-transparent border-b-transparent'
        }`}
        data-purpose="site-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled
                ? 'h-16 px-2 sm:px-4 bg-transparent shadow-none border-none'
                : 'frosted-glass rounded-[8px] h-16 sm:h-20 px-6 shadow-glass-lum hover:shadow-glass-card-hover border border-white/60'
            }`}
          >
        {/* Brand Logo */}
        <a className="flex items-center gap-3 group" href="#">
          <img
            src="/assets/logo.png"
            alt="OmniHR Logo"
            className="w-10 h-10 object-contain rounded-[6px] shadow-sm group-hover:scale-105 transition-all duration-200"
          />
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
        <div className="md:hidden mt-2 p-4 frosted-glass rounded-[8px] shadow-glass-card space-y-3 border border-white/40 mb-3">
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
    </div>
  </header>
</>
  );
};

