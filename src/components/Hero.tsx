import React from 'react';

interface HeroProps {
  onStartTrial?: () => void;
  onBookDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTrial: _onStartTrial, onBookDemo }) => {
  return (
    <>
      <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-32 overflow-hidden" data-purpose="hero-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Copy Centered */}
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            {/* Top pill indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full frosted-glass border border-white/95 shadow-glass-card text-xs font-semibold text-slate-700 mb-8 hover:scale-105 transition-all cursor-pointer">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-5"></span>
              <span className="font-bold text-slate-900">Next-Gen Enterprise Workforce Intelligence</span>
              <span className="text-slate-300">|</span>
              <span className="text-indigo-600 font-semibold flex items-center gap-1">
                v4.2 Released
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-extrabold tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
              Automate Workforce in Hours with <br className="hidden sm:inline" />
              <span className="aurora-accent-text">Intelligent HR Agents</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              OmniHR turns complex personnel records into autonomous, zero-error HR workflows instantly with smart automation, seamless integrations, and 24/7 compliance support.
            </p>

            {/* Primary Hero Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                className="w-full sm:w-auto sm:min-w-[190px] h-[50px] inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 hover:from-indigo-950 hover:to-slate-950 text-white text-sm font-semibold px-8 py-3.5 rounded-[6px] shadow-xl shadow-indigo-950/30 hover:shadow-indigo-950/40 hover:scale-105 transition-all duration-300 group border border-white/20 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBookDemo) {
                    onBookDemo();
                  }
                }}
              >
                <span>Book a Demo</span>
                <svg className="w-4 h-4 text-cyan-300 group-hover:translate-x-1.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                </svg>
              </button>

              <a
                className="w-full sm:w-auto sm:min-w-[190px] h-[50px] inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-slate-900 border border-slate-300/90 hover:border-indigo-400 text-sm font-semibold px-8 py-3.5 rounded-[6px] shadow-md hover:shadow-lg shadow-slate-900/5 hover:scale-105 transition-all duration-300 group backdrop-blur-md cursor-pointer"
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  const pricingEl = document.getElementById('pricing');
                  if (pricingEl) {
                    pricingEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>View Pricing</span>
                <svg className="w-4 h-4 text-indigo-600 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                </svg>
              </a>
            </div>


            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
                SOC-2 Type II &amp; ISO 27001 Certified
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-xs">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
                Ready to deploy in &lt; 48 hours
              </span>
            </div>
          </div>

          {/* Hero Showcase Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto" data-purpose="hero-bento-cluster">
            {/* Column 1: Left Stack */}
            <div className="md:col-span-3 flex flex-col gap-6">
              {/* Card 1A: Integrations Card */}
              <div className="frosted-glass rounded-[6px] p-6 flex-1 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300 group">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-9 h-9 rounded-[6px] bg-white/95 flex items-center justify-center border border-indigo-100 shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-xs font-bold text-blue-600">G</span>
                    </div>
                    <div className="w-9 h-9 rounded-[6px] bg-white/95 flex items-center justify-center border border-emerald-100 shadow-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: '50ms' }}>
                      <span className="text-xs font-bold text-emerald-600">S</span>
                    </div>
                    <div className="w-9 h-9 rounded-[6px] bg-white/95 flex items-center justify-center border border-amber-100 shadow-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: '100ms' }}>
                      <span className="text-xs font-bold text-amber-600">O</span>
                    </div>
                    <div className="w-9 h-9 rounded-[6px] bg-indigo-50/90 flex items-center justify-center border border-indigo-200 group-hover:scale-110 transition-transform">
                      <span className="text-xs font-bold text-indigo-700">+8</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">Integrations</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Achieve sync results faster than ever with continuous biometric and ERP automation.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="tracking-wider">API SYNC</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    99.99% Up
                  </span>
                </div>
              </div>

              {/* Card 1B: 25K+ Stat Card */}
              <div className="frosted-glass rounded-[6px] p-6 flex-1 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
                <div>
                  <div className="text-3xl font-extrabold text-slate-950 tracking-tight mb-1.5 bg-gradient-to-r from-slate-950 via-indigo-950 to-indigo-800 bg-clip-text text-transparent">
                    25K+
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Active global employees managed across India, SEA, and North America.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <span>+38% year-over-year efficiency</span>
                </div>
              </div>
            </div>

            {/* Column 2: Center Tall Visual Card (AI Agent / Workforce Identity Core) */}
            <div className="md:col-span-5 frosted-dark rounded-[6px] p-7 text-white relative overflow-hidden flex flex-col justify-between min-h-[420px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-glass-dark">
              {/* Ambient glows inside dark glass */}
              <div className="absolute -right-16 -top-16 w-60 h-60 bg-gradient-to-bl from-brand-lime/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-gradient-to-tr from-rose-500/25 to-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-[6px] bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200">
                  AI Autonomous Core
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-lime"></span>
                </span>
              </div>

              {/* Central graphic visualization */}
              <div className="relative z-10 my-auto py-8 text-center">
                <div className="w-36 h-36 mx-auto rounded-[6px] bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-800 p-0.5 shadow-2xl border border-white/20 flex items-center justify-center animate-float-slow">
                  <div className="w-full h-full rounded-[4px] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-lime/10 to-transparent"></div>
                    {/* Biometric grid node */}
                    <svg className="w-12 h-12 text-brand-lime drop-shadow-[0_0_15px_rgba(217,249,157,0.5)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="8" r="4"></circle>
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M12 3v2" strokeDasharray="2 2"></path>
                      <path d="M12 19v2" strokeDasharray="2 2"></path>
                      <path d="M3 12h2" strokeDasharray="2 2"></path>
                      <path d="M19 12h2" strokeDasharray="2 2"></path>
                    </svg>
                    <span className="text-[10px] font-mono text-cyan-200 font-semibold mt-2.5 tracking-wider">ID_MATCH: 100%</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-5 max-w-xs mx-auto leading-relaxed font-normal">
                  Real-time geo-fenced biometric facial recognition &amp; audit confirmation.
                </p>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-[6px] p-4 border border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Daily Auto-Attendance</div>
                  <div className="text-[11px] text-slate-300">Zero duplicate or ghost records</div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-950 bg-brand-lime px-3 py-1 rounded-[6px] shadow-sm">99.8% Sync</span>
              </div>
            </div>

            {/* Column 3: Right Stack */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Card 3A: Soft Lime Accent Glass Card */}
              <div className="bg-gradient-to-br from-[#ecfccb]/95 via-[#d9f99d]/90 to-[#bef264]/95 rounded-[6px] p-6 text-slate-950 border border-white/90 shadow-glass-card hover:shadow-glass-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl font-extrabold tracking-tight mb-1">85%</div>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">
                      Of routine leave approvals &amp; query resolution handled autonomously.
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-[6px] bg-slate-950 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-5 h-5 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-950/10 flex items-center justify-between text-[11px] font-bold text-slate-800">
                  <span>PAYROLL BOT</span>
                  <span className="bg-slate-950/10 px-2.5 py-0.5 rounded-[6px] font-bold">Active 24/7</span>
                </div>
              </div>

              {/* Card 3B: Soft Gradient Card with Floating People Nodes */}
              <div className="frosted-glass rounded-[6px] p-6 flex-1 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Automation Driven Workforce Excellence</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Connect employees, managers, and HR ops in one automated approval loop.
                  </p>
                </div>
                {/* Connected avatar network */}
                <div className="py-4 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-semibold text-xs flex items-center justify-center ring-4 ring-white shadow-md">
                    JD
                  </div>
                  <div className="w-7 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-400"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-lime to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-lg animate-float-slow">
                    HR
                  </div>
                  <div className="w-7 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center ring-4 ring-white shadow-md">
                    AK
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                  <span>Multi-tier approvals</span>
                  <span className="font-semibold text-indigo-700">1-click signoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluid Wave Transition Divider */}
      <div className="w-full overflow-hidden leading-none -mt-10 mb-6 opacity-60">
        <svg className="w-full h-12 text-white/50 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </>
  );
};

