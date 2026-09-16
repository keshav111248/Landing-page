import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'How quickly can our team migrate existing employee data to OmniHR?',
    a: 'Most companies transition in less than 48 hours. You can upload standard Excel/CSV spreadsheets or connect existing payroll software. Our team provides dedicated migration assistance for teams over 50 employees at no extra charge.',
  },
  {
    q: 'Does OmniHR connect directly with physical biometric fingerprint and face scanners?',
    a: 'Yes. OmniHR features pre-built sync connectors with major biometric and RFID machine brands (e.g. eSSL, Realtime, ZKTeco, Matrix). Punches sync to the cloud in real-time without manual pen-drive transfers.',
  },
  {
    q: 'Is statutory tax compliance (PF, ESI, Professional Tax, TDS) handled automatically?',
    a: 'Yes. OmniHR calculates state-specific PT slabs, PF caps, ESIC contribution splits, and monthly TDS under both Old and New Indian tax regimes. Form 16 ready summaries and ECR file formats are generated in 1-click.',
  },
  {
    q: 'Where is our company data hosted and how secure is it?',
    a: 'OmniHR is SOC-2 Type II and ISO 27001 certified. All customer records and confidential salary slips are encrypted at rest using AES-256 and transmitted via TLS 1.3. Automated off-site encrypted backups are performed every 6 hours.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-20 relative bg-white border-t border-b border-slate-200/60 z-10" data-purpose="faq-accordion" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/90 px-4 py-1.5 rounded-[6px] border border-white shadow-xs inline-block mb-3.5">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Everything you need to know about implementing OmniHR for your team.
          </p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="frosted-glass rounded-[6px] p-6 border border-white/95 hover:border-indigo-200 transition-all hover:shadow-glass-card-hover cursor-pointer"
                onClick={() => toggleIndex(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-bold text-slate-900">
                    {item.q}
                  </h3>
                  <span className="text-indigo-600 font-bold text-lg shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mt-3 pt-3 border-t border-slate-100">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
