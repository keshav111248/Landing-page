import React from 'react';

export const OnboardingSteps: React.FC = () => {
  return (
    <section className="py-20 relative bg-white border-t border-b border-slate-200/60 z-10" data-purpose="onboarding-steps" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/90 px-4 py-1.5 rounded-[6px] border border-white shadow-xs inline-block mb-3.5">
            Effortless Transition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            Get started in 3 simple steps
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Built to help People Ops scale efficiency and deliver exceptional employee experience with seamless onboarding.
          </p>
        </div>

        {/* 3-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 Card */}
          <div className="frosted-glass rounded-[6px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div>
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 mb-6 min-h-[140px] flex flex-col justify-center text-center shadow-sm">
                <div className="text-xs font-bold text-slate-800 mb-3">Quick Import &amp; Sync</div>
                <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-indigo-50/80 border border-indigo-100 rounded-[6px] text-xs text-indigo-900 font-semibold">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <span>Upload .CSV / Excel Roster</span>
                </div>
              </div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-[6px] mb-3">
                Step 1
              </span>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Sign Up &amp; Import</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Create your company workspace in under 2 minutes. Import existing employee profiles, bank details, and hierarchy seamlessly.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <span className="text-xs font-semibold text-indigo-950 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Zero data loss guarantee
              </span>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="frosted-glass rounded-[6px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div>
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 mb-6 min-h-[140px] flex flex-col justify-center text-center shadow-sm">
                <div className="text-xs font-bold text-slate-800 mb-3">Policy Engine Config</div>
                <div className="space-y-1.5 text-left text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="font-medium">Sick, Casual, Maternity Quotas</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="font-medium">Tax Slabs &amp; Salary Structure</span>
                  </div>
                </div>
              </div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-[6px] mb-3">
                Step 2
              </span>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Build &amp; Automate</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Configure your company attendance rules, leave buckets, and custom approval workflows with pre-built enterprise templates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <span className="text-xs font-semibold text-indigo-950 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Pre-loaded statutory policies
              </span>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="frosted-glass rounded-[6px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div>
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 mb-6 min-h-[140px] flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-10 h-10 rounded-[6px] bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-2 shadow-xs">
                  ★
                </div>
                <div className="text-xs font-bold text-slate-800">Speedster Milestone</div>
                <span className="text-[11px] text-emerald-600 font-semibold mt-1">100% Onboarding Complete</span>
              </div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-[6px] mb-3">
                Step 3
              </span>
              <h3 className="text-xl font-bold text-slate-950 mb-2">Track, Optimize &amp; Scale</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Monitor real-time logs, generate 1-click payslips, disburse automated salaries, and view instant audit compliance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <span className="text-xs font-semibold text-indigo-950 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Live operational dashboards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
