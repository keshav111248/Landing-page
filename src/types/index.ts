export type BillingPeriod = 'monthly' | 'quarterly' | 'yearly';

export interface PricingPlan {
  name: string;
  desc: string;
  isPopular?: boolean;
  badge?: string;
  prices: Record<BillingPeriod, number>;
  featuresTitle: string;
  features: string[];
  ctaText: string;
}

export interface ShowcaseModule {
  id: string;
  badge: string;
  title: string;
  highlightTitle: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  ctaText: string;
  isAlt?: boolean;
  imageWrapperClass?: string;
  imageClass?: string;
}

export interface ModuleCardData {
  id: string;
  code: string;
  title: string;
  description: string;
  colorClass?: string;
  slideIndex: number;
}

export interface ComparisonRow {
  featureName: string;
  starter: string;
  growth: string;
  enterprise: string;
  starterType?: 'check' | 'dash' | 'text';
  growthType?: 'check' | 'dash' | 'text';
  enterpriseType?: 'check' | 'dash' | 'text';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CheckoutPlan {
  name: string;
  price: number;
  period: 'month' | 'quarter' | 'year';
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  teamSize: string;
}
