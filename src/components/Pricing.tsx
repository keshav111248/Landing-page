import React, { useState } from 'react';
import { CheckoutPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: CheckoutPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isYearly, setIsYearly] = useState(false);

  const starterPrice = isYearly ? 20000 : 2499;
  const growthPrice = isYearly ? 35000 : 6999;

  const handleSubscribe = (planName: string, price: number) => {
    onSelectPlan({
      name: planName,
      price: price,
      period: isYearly ? 'year' : 'month',
    });
  };

  return (
    <section className="py-20 lg:py-28 relative bg-white border-t border-b border-slate-200/60 z-10" data-purpose="pricing-plans" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/90 px-4 py-1.5 rounded-full border border-white shadow-xs inline-block mb-3.5">
            Scalable Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-3">
            Simple transparent pricing
          </h2>
          <p className="text-base text-slate-600 mb-8 font-normal">
            Choose a plan that fits your team and start automating your workforce with ease.
          </p>

          {/* Toggle switch */}
          <div className="inline-flex items-center gap-3 frosted-glass p-1.5 rounded-[6px] border border-white/90 shadow-glass-card" data-purpose="billing-toggle">
            <span
              className={`text-xs font-semibold pl-3 cursor-pointer transition-colors ${!isYearly ? 'text-slate-950 font-bold' : 'text-slate-500'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </span>
            <button
              aria-label="Toggle Billing Frequency"
              className="w-11 h-6 bg-slate-950 rounded-[6px] relative p-0.5 transition-colors focus:outline-none cursor-pointer"
              type="button"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`w-5 h-5 bg-white rounded-[4px] transition-transform shadow-sm ${isYearly ? 'translate-x-5' : 'translate-x-0'}`}
              ></div>
            </button>
            <span
              className={`text-xs font-bold pr-2 flex items-center gap-1.5 cursor-pointer transition-colors ${isYearly ? 'text-slate-950' : 'text-slate-600'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
              <span className="bg-brand-lime text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-[6px] shadow-xs">
                ( GET 20% OFF )
              </span>
            </span>
          </div>
        </div>

        {/* 2-Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Plan 1: Starter Plan */}
          <div className="frosted-glass rounded-[6px] p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-glass-card-hover transition-all duration-300">
            <div>
              <div className="mb-5">
                <h3 className="text-lg font-bold text-slate-950">Starter Plan</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">For Startups &amp; Small Teams</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-950 tracking-tight">
                  ₹{isYearly ? '20,000' : '2,499'}
                </span>
                <span className="text-xs text-slate-500 ml-1.5 font-medium">
                  {isYearly ? '/ year' : '/ month'}
                </span>
              </div>
              <button
                className="block w-full text-center py-3.5 px-4 rounded-[6px] bg-slate-950 hover:bg-indigo-900 text-white text-xs font-bold transition-all mb-8 shadow-sm hover:shadow-md cursor-pointer"
                onClick={() => handleSubscribe('Starter', starterPrice)}
              >
                Get Started
              </button>
              {/* Feature Checklist */}
              <div className="space-y-3.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Up to 25 Employees included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Core Employee Records &amp; Directory</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Attendance &amp; Leave Request portal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Basic salary slip generator</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Standard email support</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 text-[11px] text-slate-400 font-medium">
              ₹99/month per extra employee
            </div>
          </div>

          {/* Plan 2: Professional Plan (Featured Dark Glass Centerpiece) */}
          <div className="frosted-dark text-white rounded-[6px] p-8 relative flex flex-col justify-between transform lg:-translate-y-3 shadow-glass-dark hover:shadow-indigo-500/25 transition-all duration-300 border border-white/20">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-lime via-cyan-300 to-emerald-300 text-slate-950 text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-[6px] shadow-md">
              Most Popular
            </div>
            <div>
              <div className="mb-5">
                <h3 className="text-lg font-bold text-white">Professional Plan</h3>
                <p className="text-xs text-indigo-200 mt-1 font-medium">For Growing Businesses</p>
              </div>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  ₹{isYearly ? '35,000' : '6,999'}
                </span>
                <span className="text-xs text-indigo-200 ml-1.5 font-medium">
                  {isYearly ? '/ year' : '/ month'}
                </span>
              </div>
              {/* High Contrast Button */}
              <button
                className="block w-full text-center py-3.5 px-4 rounded-[6px] bg-brand-lime hover:bg-brand-limeHover text-slate-950 text-xs font-black transition-all mb-8 shadow-lg shadow-brand-lime/25 hover:scale-105 cursor-pointer"
                onClick={() => handleSubscribe('Growth', growthPrice)}
              >
                Get Started
              </button>
              {/* Feature Checklist */}
              <div className="space-y-3.5 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Everything in Starter included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Up to 100 Employees included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Full Automated Payroll with Tax Slabs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Biometric Device Integration API</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Encrypted Document Locker for all staff</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Role-Based Access (Multi-manager approval)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-brand-lime font-bold">✓</span>
                  <span>Priority 24/7 chat support</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-slate-300 font-medium">
              ₹79/month per extra employee • 99.9% uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
