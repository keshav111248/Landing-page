import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="frosted-glass border-t border-white/90 pt-16 pb-12 text-slate-600 text-xs mt-12 relative shadow-glass-lum bg-white/95 border-slate-200/60 z-10" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Summary */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center text-brand-lime shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect height="8" rx="2" width="8" x="3" y="3"></rect>
                  <path d="M13 5h8"></path>
                  <path d="M13 9h5"></path>
                  <rect height="6" rx="2" width="8" x="3" y="15"></rect>
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900">
                Omni<span className="text-indigo-600 font-semibold">HR</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-4 font-normal">
              The intelligent, zero-error all-in-one workforce operations platform. Built for forward-thinking organizations, managers, and growing teams.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-[11px] font-medium">
              <span>SOC-2 Type II Certified</span>
              <span>•</span>
              <span>ISO 27001:2022</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Product</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-indigo-600 transition-colors" href="#features">Core Features</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#modules">10 HR Modules</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#how-it-works">Biometric Sync</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#pricing">Payroll Engine</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#pricing">Pricing Matrix</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Resources</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-indigo-600 transition-colors" href="#faq">Documentation</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#faq">Statutory Compliance Guide</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#faq">API Reference</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#faq">Security Architecture</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#faq">Customer Stories</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-indigo-600 transition-colors" href="#contact-demo">About Us</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#contact-demo">Careers</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#contact-demo">Privacy Policy</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#contact-demo">Terms of Service</a></li>
              <li><a className="hover:text-indigo-600 transition-colors" href="#contact-demo">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-medium">
          <div>
            © 2025 OmniHR Technologies, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-800 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-slate-800 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-slate-800 transition-colors" href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
