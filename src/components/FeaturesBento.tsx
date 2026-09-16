import React from 'react';

export const FeaturesBento: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative z-10" data-purpose="productivity-features-grid" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/90 px-4 py-1.5 rounded-full border border-white shadow-xs inline-block mb-3.5">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              Features to Boost Your Productivity
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Built to help People Leaders scale operational efficiency and deliver exceptional workforce support through intelligent HR automation, 24/7.
            </p>
          </div>
        </div>

        {/* 5-Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Feature Card 1: Smart Workflow Automation (lg:col-span-7) */}
          <div className="lg:col-span-7 frosted-glass rounded-[6px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div className="mb-6">
              {/* UI Mockup Window inside Card */}
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 shadow-sm mb-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Automated Leave Approval Pipeline
                  </span>
                  <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-[4px] font-semibold">
                    Trigger: Leave Request
                  </span>
                </div>
                {/* Step nodes */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between bg-slate-50/90 p-3 rounded-[6px] border border-slate-100">
                    <span className="text-slate-700 font-medium">1. Balance Check &amp; Conflict Scan</span>
                    <span className="text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-[4px]">
                      Auto Passed
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-50/90 p-3 rounded-[6px] border border-slate-100">
                    <span className="text-slate-700 font-medium">2. Manager Ping &amp; Calendar Block</span>
                    <span className="text-indigo-700 font-semibold text-[11px] bg-indigo-50 px-2.5 py-0.5 rounded-[4px]">
                      Dispatched (3s)
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-50/90 p-3 rounded-[6px] border border-slate-100">
                    <span className="text-slate-700 font-medium">3. Payroll Sync for Lop / Leaves</span>
                    <span className="text-slate-500 font-medium text-[11px] bg-slate-200/60 px-2.5 py-0.5 rounded-[4px]">
                      Synced to Salary
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Workflow Automation</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Automate repetitive employee onboarding, appraisal schedules, and recurring leave policies without writing code.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
              <span>Explore workflows</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          {/* Feature Card 2: Real-Time Analytics & Payroll (lg:col-span-5) */}
          <div className="lg:col-span-5 frosted-glass rounded-[6px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div className="mb-6">
              {/* Mini Analytic Card Mockup */}
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 shadow-sm mb-6">
                <div className="flex justify-between items-center text-xs text-slate-500 mb-1 font-medium">
                  <span>Monthly Payroll Disbursal</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded-[6px]">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    2.1%
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  ₹1,58,60,000
                </div>
                {/* Simulated Wave Chart with vibrant modern gradient */}
                <div className="h-16 w-full flex items-end gap-1.5 pt-2">
                  <div className="w-1/12 bg-indigo-100 h-[35%] rounded-t"></div>
                  <div className="w-1/12 bg-indigo-100 h-[50%] rounded-t"></div>
                  <div className="w-1/12 bg-indigo-200 h-[45%] rounded-t"></div>
                  <div className="w-1/12 bg-indigo-200 h-[65%] rounded-t"></div>
                  <div className="w-1/12 bg-indigo-300 h-[60%] rounded-t"></div>
                  <div className="w-1/12 bg-indigo-400 h-[75%] rounded-t"></div>
                  <div className="w-1/12 bg-cyan-400 h-[70%] rounded-t"></div>
                  <div className="w-1/12 bg-cyan-500 h-[85%] rounded-t"></div>
                  <div className="w-1/12 bg-brand-lime h-[95%] rounded-t"></div>
                  <div className="w-1/12 bg-indigo-600 h-[100%] rounded-t shadow-sm"></div>
                  <div className="w-1/12 bg-rose-500 h-[88%] rounded-t"></div>
                  <div className="w-1/12 bg-rose-400 h-[80%] rounded-t"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Payroll Analytics</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Track compensation, tax deductions (PF, PT, TDS), and attendance correlations with instant ledger export.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
              <span>View financial reporting</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          {/* Feature Card 3: Team Collaboration & Permission Tier (lg:col-span-4) */}
          <div className="lg:col-span-4 frosted-glass rounded-[6px] p-7 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div className="mb-6">
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 shadow-sm mb-6 flex flex-col items-center justify-center text-center">
                <div className="flex -space-x-2 mb-3">
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-indigo-900 text-white text-xs flex items-center justify-center font-bold">HR</span>
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">IT</span>
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-blue-600 text-white text-xs flex items-center justify-center font-bold">MGR</span>
                  <span className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-amber-500 text-white text-xs flex items-center justify-center font-bold">FIN</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-slate-950 text-white text-[11px] font-semibold rounded-[6px] shadow-sm">
                  <span>RBAC Access Control</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Team Collaboration</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Keep leadership, line managers, and team members aligned with fine-grained role privileges.
              </p>
            </div>
            <div className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
              Custom user roles →
            </div>
          </div>

          {/* Feature Card 4: Biometric & Shift Attendance (lg:col-span-4) */}
          <div className="lg:col-span-4 frosted-glass rounded-[6px] p-7 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div className="mb-6">
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 shadow-sm mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>General Shift A</span>
                  <span className="text-slate-400 font-mono text-[11px]">09:00 - 18:00</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-2 rounded-full w-[92%]"></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>Present: <strong className="text-slate-800">184</strong></span>
                  <span>On Leave: <strong className="text-slate-800">8</strong></span>
                  <span>WFH: <strong className="text-slate-800">12</strong></span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Shift &amp; Task Attendance</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Biometric punch syncing, overtime calculation, rotational shifts, and instant regularization requests.
              </p>
            </div>
            <div className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
              Biometric integration specs →
            </div>
          </div>

          {/* Feature Card 5: AI-Powered Insights & Compliance (lg:col-span-4) */}
          <div className="lg:col-span-4 frosted-glass rounded-[6px] p-7 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div className="mb-6">
              <div className="bg-white/95 rounded-[6px] p-5 border border-indigo-100 shadow-sm mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                  <span>Retention Risk Index</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-[6px] text-[11px]">
                    Optimal
                  </span>
                </div>
                <div className="flex items-end gap-2 h-12">
                  <div className="flex-1 bg-indigo-100 rounded-t h-[40%]"></div>
                  <div className="flex-1 bg-indigo-200 rounded-t h-[60%]"></div>
                  <div className="flex-1 bg-indigo-400 rounded-t h-[75%]"></div>
                  <div className="flex-1 bg-brand-lime rounded-t h-[95%]"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Predict attrition spikes, spot absenteeism patterns, and prevent statutory penalties before month-end.
              </p>
            </div>
            <div className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
              Predictive modeling →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
