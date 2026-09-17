import React, { useState } from 'react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    teamSize: '1 - 25 employees',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

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
          name: formData.name.trim() || undefined,
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          companyName: formData.companyName.trim() || undefined,
          teamSize: formData.teamSize,
          message: formData.message.trim() || undefined,
          source: 'HERO_MODAL',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMessage(data.message || 'Failed to submit demo request. Please try again.');
      }
    } catch (err: any) {
      console.error('Error submitting demo request:', err);
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccess(false);
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      teamSize: '1 - 25 employees',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/60 dark:bg-black/60 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleResetAndClose();
        }
      }}
    >
      <div className="bg-white rounded-[6px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden cursor-default">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-[6px] bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[6px] flex items-center justify-center mx-auto text-3xl font-bold border border-emerald-100 shadow-xs">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Demo Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'there'}</strong>. We have received your walkthrough request for{' '}
              <span className="text-[#2C4FD6] font-semibold">OmniHR</span>. Our solution architects will contact you within 24 hours at{' '}
              <span className="text-slate-800 font-semibold">{formData.email}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3.5 px-6 rounded-[6px] bg-[#2C4FD6] hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-blue-50 text-[#2C4FD6] text-xs font-bold uppercase tracking-wider mb-2">
                Personalized Walkthrough
              </div>
              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                Book a 20-min Product Demo
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                See how OmniHR automates personnel records, attendance, payroll, and compliance.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-[6px] bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C4FD6] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C4FD6] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C4FD6] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C4FD6] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Team Size
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C4FD6] focus:border-transparent transition-all bg-white"
                >
                  <option value="1 - 25 employees">1 - 25 employees</option>
                  <option value="26 - 50 employees">26 - 50 employees</option>
                  <option value="51 - 100 employees">51 - 100 employees</option>
                  <option value="101 - 250 employees">101 - 250 employees</option>
                  <option value="250+ employees">250+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Requirements or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what HR challenges you want to solve..."
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C4FD6] focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-[6px] bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 hover:from-indigo-950 hover:to-slate-900 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.01] disabled:opacity-75 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Submitting Request...
                    </span>
                  ) : (
                    'Request Product Walkthrough'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
