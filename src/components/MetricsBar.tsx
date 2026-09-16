import React from 'react';

export const MetricsBar: React.FC = () => {
  return (
    <section className="py-12 relative bg-white border-t border-b border-slate-200/60 z-10" data-purpose="metrics-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="frosted-glass rounded-[6px] p-8 sm:p-11 border border-white/95 shadow-glass-lum hover:shadow-glass-card-hover transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200/70">
            {/* Stat 1 */}
            <div className="pt-6 md:pt-0 md:px-8 first:pl-0">
              <div className="flex items-baseline gap-1">
                <span className="stat-number text-5xl sm:text-6xl font-black bg-gradient-to-r from-slate-950 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
                  20K
                </span>
                <span className="text-3xl font-light text-indigo-500">+</span>
              </div>
              <p className="text-sm sm:text-base font-normal text-slate-600 mt-2 max-w-xs leading-relaxed">
                In 38 countries, powering automated daily check-ins and personnel ops.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-6 md:pt-0 md:px-8">
              <div className="flex items-baseline gap-1">
                <span className="stat-number text-5xl sm:text-6xl font-black bg-gradient-to-r from-slate-950 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
                  98.7
                </span>
                <span className="text-3xl font-light text-cyan-500">%</span>
              </div>
              <p className="text-sm sm:text-base font-normal text-slate-600 mt-2 max-w-xs leading-relaxed">
                Data integrity and audit readiness score across verified enterprise audits.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-6 md:pt-0 md:px-8">
              <div className="flex items-baseline gap-1">
                <span className="stat-number text-5xl sm:text-6xl font-black bg-gradient-to-r from-slate-950 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
                  86
                </span>
                <span className="text-3xl font-light text-rose-500">%</span>
              </div>
              <p className="text-sm sm:text-base font-normal text-slate-600 mt-2 max-w-xs leading-relaxed">
                Reduction in repetitive administrative payroll &amp; leave processing effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
