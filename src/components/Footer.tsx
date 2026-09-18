import React, { useState, useEffect, useRef } from 'react';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;

      // Show footer only when user scrolls down to the bottom of the page
      const distanceToBottom = docHeight - (scrollY + windowHeight);
      
      if (distanceToBottom <= 250) {
        setIsVisible(true);
      } else if (distanceToBottom > 450) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`frosted-glass border-t border-white/90 pt-16 pb-12 text-slate-600 text-xs mt-12 relative shadow-glass-lum bg-white/95 border-slate-200/60 z-10 transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
      data-purpose="site-footer"
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Summary & BlockCoders Attribution */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/logo.png"
                alt="OmniHR Logo"
                className="w-8 h-8 object-contain rounded-[6px]"
              />
              <span className="text-lg font-bold text-slate-900">
                Omni<span className="text-indigo-600 font-semibold">HR</span>
              </span>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-4 font-normal">
              The intelligent, zero-error all-in-one workforce operations platform. Built for forward-thinking organizations, managers, and growing teams.
            </p>

            {/* BlockCoders Company Reference */}
            <a
              href="https://theblockcoders.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200 text-slate-700 font-medium mb-4 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span>Developed &amp; Operated by <strong className="text-slate-950 font-bold hover:text-indigo-600">BlockCoders</strong></span>
            </a>

            {/* <div className="flex items-center gap-2 text-slate-400 text-[11px] font-medium">
              <span>SOC-2 Type II Certified</span>
              <span>•</span>
              <span>ISO 27001:2022</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div> */}
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Product</h4>
            <ul className="space-y-2 font-medium">
              <li><a className="hover:text-indigo-600 transition-colors" href="#features">Core Features</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#modules">10 HR Modules</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#how-it-works">Biometric Sync</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#pricing">Pricing Matrix</a></li>
            </ul>
          </div>

          {/* ONLY ICONS (Instagram, Facebook, LinkedIn with exact reference styling) */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Follow Us</h4>
            <p className="text-slate-500 text-[11px] mb-3">
              Official BlockCoders channels:
            </p>

            {/* ONLY ICONS in row matching the reference image styling */}
            <div className="flex items-center gap-3">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/block_coderspro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#FDE8EE] text-[#E1306C] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs group"
                title="Instagram (@block_coderspro)"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/profile.php?id=100083278302137"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#EAF2FE] text-[#1877F2] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs group"
                title="Facebook (BlockCoders Official)"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/143631111/admin/dashboard/?editPageActiveTab=info"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#EFEAFE] text-[#6366F1] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all shadow-xs group"
                title="LinkedIn (BlockCoders Company)"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6c0-.89-.72-1.6-1.6-1.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} OmniHR • Developed &amp; Operated by{' '}
            <a
              href="https://theblockcoders.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 font-bold hover:text-indigo-600 underline underline-offset-2 transition-colors"
            >
              BlockCoders
            </a>
            . All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-800 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-slate-800 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
