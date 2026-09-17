import React from 'react';

export const DirectorySpotlight: React.FC = () => {
  return (
    <section className="py-20 relative z-10" data-purpose="directory-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/90 px-4 py-1.5 rounded-[6px] border border-indigo-100 shadow-sm inline-block">
            Interactive System Preview
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950 mt-3.5 mb-2">
            Clean, Transparent Employee Records
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Single source of truth for every team member across departments.
          </p>
        </div>

        {/* Real Application Showcase Frame */}
        <div className="frosted-glass rounded-[10px] border border-white/95 overflow-hidden max-w-5xl mx-auto shadow-glass-lum hover:shadow-glass-card-hover transition-all duration-300 group">
          {/* Top Browser/App Header */}
          <div className="px-4 py-3 bg-white/70 backdrop-blur-md border-b border-slate-200/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400/80 border border-rose-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30"></div>
              <span className="text-[11px] font-medium text-slate-500 ml-2 font-mono">omnihr.app / employee-directory</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-white/90 px-3 py-0.5 rounded-full border border-slate-200/70 font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live System Preview
            </div>
          </div>

          {/* Third Image - Live Employee Directory Dashboard */}
          <div className="relative overflow-hidden bg-slate-50">
            <img
              src="/assets/employee-directory-showcase.png"
              alt="OmniHR Employee Management System"
              className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Bottom Status Bar */}
          <div className="p-4 bg-white/60 backdrop-blur-md border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 font-medium px-6">
            <span className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Synchronized real-time workforce directory with biometric attendance tracking
            </span>
            <span className="text-slate-400 text-[11px]">
              Encrypted AES-256 Cloud Infrastructure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
