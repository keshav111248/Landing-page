import React from 'react';

const MODULES = [
  {
    num: '01',
    title: 'Employee Management',
    desc: 'Complete digital repository for personal, job, salary, and document histories.',
  },
  {
    num: '02',
    title: 'Attendance Tracking',
    desc: 'Biometric sync, geo-fenced mobile punches, shift scheduling, and overtime.',
  },
  {
    num: '03',
    title: 'Leave Management',
    desc: 'Custom leave types, encashment, multi-level hierarchy approvals, and calendars.',
  },
  {
    num: '04',
    title: 'Payroll & Compliance',
    desc: 'Automated salary computation with statutory PF, ESI, PT, and TDS deductions.',
  },
  {
    num: '05',
    title: 'Employee Self-Service',
    desc: 'Self-service profile updates, tax declaration submission, and requests.',
  },
  {
    num: '06',
    title: 'Document Vault',
    desc: 'Secure digital lockers for offer letters, Aadhaar/PAN, degrees, and NDAs.',
  },
  {
    num: '07',
    title: 'Salary & Payslips',
    desc: '1-click batch PDF payslip generation with direct employee portal delivery.',
  },
  {
    num: '08',
    title: 'Digital ID Cards',
    desc: 'Instant printable and mobile QR-code enabled staff verification identity badges.',
  },
  {
    num: '09',
    title: 'Reports & Analytics',
    desc: 'Customizable headcount, turnover, compensation, and statutory summary reports.',
  },
  {
    num: '10',
    title: 'Immutable Audit Log',
    desc: 'Complete timeline of every change, salary modification, and user login activity.',
  },
];

interface ModulesGridProps {
  onSelectModule?: (index: number) => void;
}

export const ModulesGrid: React.FC<ModulesGridProps> = ({ onSelectModule }) => {
  return (
    <section className="py-20 lg:py-28 relative z-10" data-purpose="modules-catalog" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[6px] frosted-glass border border-white/90 text-xs font-bold text-indigo-700 mb-4 shadow-sm">
            <span>Complete Unified Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            10 Unified Modules Built for Modern HR
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Replace 6+ disconnected HR tools with a single integrated system of record and execution.
          </p>
        </div>

        {/* 10 Modular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {MODULES.map((m, index) => (
            <div
              key={m.num}
              className="frosted-glass rounded-[6px] p-5 hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300 group cursor-pointer"
              onClick={() => onSelectModule && onSelectModule(index)}
            >
              <div className="w-10 h-10 rounded-[6px] bg-indigo-50/90 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200 flex items-center justify-center text-indigo-900 font-bold mb-3.5 text-xs shadow-xs group-hover:scale-105">
                {m.num}
              </div>
              <h3 className="text-sm font-bold text-slate-950 mb-1.5">{m.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

