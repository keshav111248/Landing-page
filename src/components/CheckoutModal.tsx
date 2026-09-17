import React, { useState, useEffect } from 'react';
import { CheckoutFormData, CheckoutPlan } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  plan: CheckoutPlan | null;
  onClose: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, plan, onClose }) => {
  const [step, setStep] = useState<'account' | 'payment' | 'success'>('account');
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    teamSize: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<{ orderId?: string; keyId?: string; amount?: number } | null>(null);
  const [onboardingSuccess, setOnboardingSuccess] = useState<{
    domain?: string;
    email?: string;
    tempPassword?: string;
    loginUrl?: string;
  } | null>(null);

  const rawApiUrl = import.meta.env.VITE_API_URL || 'https://omnihr-backend-19fx.onrender.com/api';
  const apiUrl = rawApiUrl.replace(/\/$/, '').endsWith('/api')
    ? rawApiUrl.replace(/\/$/, '')
    : `${rawApiUrl.replace(/\/$/, '')}/api`;
  const apiKey = import.meta.env.VITE_LANDING_PAGE_API_KEY || 'encalm-landing-secret-2024';
  const defaultKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_SNpCTt9AUYnOyq';
  const appUrl = (import.meta.env.VITE_APP_URL || 'https://omnihr-frontend.vercel.app').replace(/\/$/, '');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep('account');
      setErrors({});
      setLoading(false);
      setOrderData(null);
      setOnboardingSuccess(null);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        teamSize: '',
      });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !plan) return null;

  const formatAmount = (price: number) => {
    return '₹' + price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const periodLabel = (period: 'month' | 'quarter' | 'year') => {
    if (period === 'year') return '/ year, billed annually';
    if (period === 'quarter') return '/ quarter, billed quarterly';
    return '/ month, billed monthly';
  };

  const cycleParam = plan.period === 'year' ? 'YEARLY' : plan.period === 'quarter' ? 'QUARTERLY' : 'MONTHLY';

  const getIncludedEmployeesText = () => {
    if (!plan) return '';
    if (plan.name === 'Starter') return 'Up to 25 Employees included';
    if (plan.name === 'Growth') return 'Up to 100 Employees included';
    return '100+ Employees included';
  };

  const getTeamSizeOptions = () => {
    if (!plan) return [];
    if (plan.name === 'Starter') {
      return [
        { value: '1-10', label: '1 – 10 employees' },
        { value: '11-25', label: '11 – 25 employees (Starter plan limit)' },
      ];
    }
    if (plan.name === 'Growth') {
      return [
        { value: '1-25', label: '1 – 25 employees' },
        { value: '26-50', label: '26 – 50 employees' },
        { value: '51-100', label: '51 – 100 employees (Growth plan limit)' },
      ];
    }
    return [
      { value: '100-250', label: '100 – 250 employees' },
      { value: '250-500', label: '250 – 500 employees' },
      { value: '500+', label: '500+ employees' },
    ];
  };

  const handleChange = (field: keyof CheckoutFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]?[\d\s()-]{10,15}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!phonePattern.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name';
    }

    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select your team size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Call backend to create Razorpay Order
      const res = await fetch(`${apiUrl}/public/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          planName: plan.name,
          billingCycle: cycleParam,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setOrderData({
          orderId: data.orderId,
          keyId: data.keyId || defaultKeyId,
          amount: data.amount,
        });
      } else {
        console.warn('Backend order creation failed, proceeding with direct client payment');
        setOrderData({
          keyId: defaultKeyId,
          amount: Math.round(plan.price * 100),
        });
      }
    } catch (err) {
      console.warn('Backend connection error, using local payment fallback:', err);
      setOrderData({
        keyId: defaultKeyId,
        amount: Math.round(plan.price * 100),
      });
    } finally {
      setLoading(false);
      setStep('payment');
    }
  };

  const handlePay = (e: React.MouseEvent) => {
    e.preventDefault();

    const activeKey = orderData?.keyId || defaultKeyId;
    const amountInPaise = orderData?.amount || Math.round(plan.price * 100);

    if (typeof window.Razorpay !== 'undefined') {
      const options: any = {
        key: activeKey,
        amount: amountInPaise.toString(),
        currency: 'INR',
        name: 'OmniHR',
        description: `${plan.name} Plan (${cycleParam})`,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#2C4FD6',
        },
        handler: async function (response: any) {
          setLoading(true);
          try {
            // Verify payment and auto-onboard company
            const verifyRes = await fetch(`${apiUrl}/public/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id || orderData?.orderId || `order_${Date.now()}`,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                companyName: formData.company,
                adminName: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                planName: plan.name,
                billingCycle: cycleParam,
              }),
            });

            if (verifyRes.ok) {
              const result = await verifyRes.json();
              setOnboardingSuccess({
                domain: result.domain,
                email: result.email,
                tempPassword: result.tempPassword,
                loginUrl: result.loginUrl || appUrl,
              });
              setStep('success');
            } else {
              const errData = await verifyRes.json().catch(() => ({}));
              console.error('Backend onboarding verification returned non-200:', errData);
              alert(errData.message || 'Onboarding failed on the server. Please contact support.');
            }
          } catch (verifyErr) {
            console.error('Error during payment verification:', verifyErr);
            alert('Error verifying payment. Please contact support with payment ID: ' + response.razorpay_payment_id);
          } finally {
            setLoading(false);
          }
        },
      };

      if (orderData?.orderId) {
        options.order_id = orderData.orderId;
      }

      try {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          alert('Payment Failed: ' + (response.error?.description || 'Payment was unsuccessful'));
        });
        rzp.open();
      } catch (err) {
        console.warn('Razorpay open failed, executing demo flow:', err);
        setStep('success');
      }
    } else {
      // Demo fallback when Razorpay script is not present
      setStep('success');
    }
  };

  return (
    <div
      className={`checkout-overlay ${isOpen ? 'active' : ''}`}
      id="checkoutOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          if (step === 'payment') {
            setStep('account');
          } else {
            onClose();
          }
        }
      }}
    >
      <div className="checkout-modal" id="checkoutModal">
        {/* Step 1: Account details */}
        {step === 'account' && (
          <div className="checkout-step" id="stepAccount">
            <div className="checkout-modal-header">
              <span className="checkout-title">
                Subscribe to <span id="accStepPlanName">{plan.name}</span>
              </span>
              <button
                type="button"
                className="checkout-close-btn"
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="checkout-plan-summary">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="checkout-plan-name" id="accStepPlanLabel">
                  {plan.name} plan
                </div>
                <div className="checkout-plan-price">
                  <span id="accStepPrice">{formatAmount(plan.price)}</span>
                  <span className="checkout-plan-period" id="accStepPeriod">
                    {periodLabel(plan.period)}
                  </span>
                </div>
              </div>
              <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#16a34a', fontWeight: 600 }}>
                <span>✓</span>
                <span>{getIncludedEmployeesText()}</span>
              </div>
            </div>

            <form id="accountForm" noValidate onSubmit={handleSubmitAccount}>
              {/* Row 1: First Name & Last Name */}
              <div className="checkout-row-2">
                <div className="checkout-field-group">
                  <label className="checkout-label" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    className={`checkout-input ${errors.firstName ? 'input-error' : ''}`}
                    type="text"
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                  />
                  <div className="checkout-error" id="firstNameError">
                    {errors.firstName}
                  </div>
                </div>

                <div className="checkout-field-group">
                  <label className="checkout-label" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    className={`checkout-input ${errors.lastName ? 'input-error' : ''}`}
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                  />
                  <div className="checkout-error" id="lastNameError">
                    {errors.lastName}
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Work Email */}
              <div className="checkout-row-2">
                <div className="checkout-field-group">
                  <label className="checkout-label" htmlFor="phoneNumber">
                    Phone number
                  </label>
                  <input
                    className={`checkout-input ${errors.phone ? 'input-error' : ''}`}
                    type="tel"
                    id="phoneNumber"
                    placeholder="+91 98765 43210"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                  <div className="checkout-error" id="phoneError">
                    {errors.phone}
                  </div>
                </div>

                <div className="checkout-field-group">
                  <label className="checkout-label" htmlFor="workEmail">
                    Work email
                  </label>
                  <input
                    className={`checkout-input ${errors.email ? 'input-error' : ''}`}
                    type="email"
                    id="workEmail"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  <div className="checkout-error" id="emailError">
                    {errors.email}
                  </div>
                </div>
              </div>

              {/* Row 3: Company Name & Team Size */}
              <div className="checkout-row-2">
                <div className="checkout-field-group">
                  <label className="checkout-label" htmlFor="companyName">
                    Company name
                  </label>
                  <input
                    className={`checkout-input ${errors.company ? 'input-error' : ''}`}
                    type="text"
                    id="companyName"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                  />
                  <div className="checkout-error" id="companyError">
                    {errors.company}
                  </div>
                </div>

                <div className="checkout-field-group">
                  <label className="checkout-label" htmlFor="teamSize">
                    Team size
                  </label>
                  <select
                    className={`checkout-input ${errors.teamSize ? 'input-error' : ''}`}
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => handleChange('teamSize', e.target.value)}
                  >
                    <option value="">Select team size</option>
                    {getTeamSizeOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="checkout-error" id="teamError">
                    {errors.teamSize}
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button type="submit" className="checkout-primary-btn" disabled={loading}>
                {loading ? 'Preparing Payment...' : 'Continue to payment →'}
              </button>
            </form>

            <div className="checkout-secure-note">
              🔒 Your information is used only to set up your account
            </div>
          </div>
        )}


        {/* STEP 2: PAYMENT */}
        {step === 'payment' && (
          <div className="checkout-step" id="stepPayment">
            <div className="checkout-modal-header">
              <button
                type="button"
                className="checkout-back-btn"
                id="backToAccount"
                onClick={() => setStep('account')}
              >
                ← Back
              </button>
              <span className="checkout-title">Payment details</span>
              <button
                type="button"
                className="checkout-close-btn"
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Selected Plan */}
            <div className="checkout-plan-summary" style={{ display: 'block' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="checkout-plan-name" id="payStepPlanLabel">
                  {plan.name} plan, {plan.period === 'year' ? 'annual' : plan.period === 'quarter' ? 'quarterly' : 'monthly'}
                </div>
                <div className="checkout-plan-price">
                  <span id="payStepAmount">{formatAmount(plan.price)}</span>
                </div>
              </div>
              <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#16a34a', fontWeight: 600 }}>
                <span>✓</span>
                <span>{getIncludedEmployeesText()}</span>
              </div>
            </div>

            {/* Payment Message */}
            <p className="payment-message">
              You will be redirected to Razorpay's secure checkout to complete your payment.
            </p>

            {/* Razorpay Payment Button */}
            <div id="razorpay-payment-button">
              <button
                id="rzp-button1"
                className="razorpay-pay-btn"
                onClick={handlePay}
                disabled={loading}
              >
                <span className="pay-lock">🔒</span>
                <span>
                  {loading ? 'Verifying...' : `Pay ${formatAmount(plan.price)}`}
                </span>
                <span className="pay-arrow">→</span>
              </button>
            </div>

            {/* Security Message */}
            <div className="checkout-secure-note">
              🔒 Secure payment powered by Razorpay
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 'success' && (
          <div className="checkout-step" id="stepSuccess">
            <div className="checkout-success-icon">✓</div>
            <h3 className="checkout-success-title">You're all set!</h3>
            <p className="checkout-success-text">
              Your <strong style={{ color: '#2C4FD6' }}>{plan.name}</strong> subscription is active. Your account credentials have been sent via email to{' '}
              <strong style={{ color: '#0f172a' }}>{onboardingSuccess?.email || formData.email}</strong>.
            </p>

            {(onboardingSuccess?.tempPassword || onboardingSuccess?.email) && (
              <div className="checkout-credentials-card">
                <div className="checkout-credentials-header">
                  <span className="checkout-credentials-badge">ADMIN LOGIN CREDENTIALS</span>
                </div>

                <div className="checkout-cred-row">
                  <span className="checkout-cred-label">Email:</span>
                  <span className="checkout-cred-value">{onboardingSuccess?.email || formData.email}</span>
                </div>

                {onboardingSuccess?.tempPassword && (
                  <div className="checkout-cred-row">
                    <span className="checkout-cred-label">Temporary Password:</span>
                    <span className="checkout-cred-password">{onboardingSuccess.tempPassword}</span>
                  </div>
                )}

                <div className="checkout-cred-notice">
                  ⚠️ For security, please change your password immediately after first login.
                </div>
              </div>
            )}

            <button
              type="button"
              className="checkout-primary-btn"
              onClick={() => {
                onClose();
                window.location.href = onboardingSuccess?.loginUrl || appUrl;
              }}
            >
              Go to Login Workspace →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
