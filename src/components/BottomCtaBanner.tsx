import React, { useState } from 'react';

interface BottomCtaBannerProps {
  onOpenCheckout?: () => void;
}

export const BottomCtaBanner: React.FC<BottomCtaBannerProps> = ({ onOpenCheckout: _onOpenCheckout }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const rawApiUrl = import.meta.env.VITE_API_URL || 'https://omnihr-backend-19fx.onrender.com/api';
      const apiUrl = rawApiUrl.replace(/\/$/, '').endsWith('/api')
        ? rawApiUrl.replace(/\/$/, '')
        : `${rawApiUrl.replace(/\/$/, '')}/api`;
      const apiKey = import.meta.env.VITE_LANDING_PAGE_API_KEY || 'encalm-landing-secret-2024';

      const response = await fetch(`${apiUrl}/public/demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          email: email.trim(),
          source: 'BOTTOM_BANNER',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.message || 'Failed to submit. Please try again.');
      }
    } catch (err: any) {
      console.error('Error submitting demo request:', err);
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 relative" data-purpose="bottom-cta-banner" id="contact-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="frosted-dark rounded-[6px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20 shadow-glass-dark">
          {/* Ambient Glow Orbs in CTA */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-gradient-to-tr from-brand-lime/20 via-cyan-400/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/4 -top-20 w-80 h-80 bg-gradient-to-br from-rose-500/20 to-indigo-600/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl text-center md:text-left relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              Need a custom automated HR solution?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Schedule a personalized 20-minute product walkthrough with our HR solution architects.
            </p>
          </div>

          {/* Quick Email Box & Button Pill */}
          <div className="w-full md:w-auto flex flex-col gap-2 relative z-10">
            <form className="flex flex-col sm:flex-row items-center gap-3" onSubmit={handleSubmit}>
              <input
                className="w-full sm:w-72 px-5 py-3.5 rounded-[6px] bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent transition-all font-medium disabled:opacity-50"
                placeholder="Enter your work email"
                required
                type="email"
                disabled={loading || submitted}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full sm:w-auto whitespace-nowrap bg-white hover:bg-slate-100 text-slate-950 text-sm font-bold px-7 py-3.5 rounded-[6px] transition-all duration-200 shadow-md hover:scale-105 disabled:opacity-75 disabled:hover:scale-100 cursor-pointer"
                type="submit"
                disabled={loading || submitted}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : submitted ? (
                  '✓ Received! We will reach out'
                ) : (
                  'Contact Us'
                )}
              </button>
            </form>
            {errorMessage && (
              <p className="text-xs text-rose-300 font-medium pl-3">{errorMessage}</p>
            )}
            {submitted && (
              <p className="text-xs text-emerald-300 font-medium pl-3">
                ✓ Thank you! Our solution architects will contact you within 24 hours.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
