import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { FeaturesBento } from './components/FeaturesBento';
import { OnboardingSteps } from './components/OnboardingSteps';
import { ModulesGrid } from './components/ModulesGrid';
import { Pricing } from './components/Pricing';
import { DirectorySpotlight } from './components/DirectorySpotlight';
import { FAQ } from './components/FAQ';
import { BottomCtaBanner } from './components/BottomCtaBanner';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { BookDemoModal } from './components/BookDemoModal';
import { CheckoutPlan } from './types';

export const App: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<CheckoutPlan | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleOpenCheckout = (plan: CheckoutPlan) => {
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleStartTrial = () => {
    handleOpenCheckout({
      name: 'Starter',
      price: 2499,
      period: 'month',
    });
  };

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Subtle background grid lining */}
      <div className="fixed inset-0 hero-grid-pattern pointer-events-none -z-10 opacity-70"></div>

      {/* Cinematic Studio Ambient Lighting Orbs with Fluid Keyframe Animation */}
      <div className="fixed top-[-160px] left-[-120px] w-[680px] h-[680px] bg-gradient-to-tr from-sky-400/35 via-indigo-500/25 to-amber-300/30 rounded-full blur-[140px] pointer-events-none -z-10 animate-wave-drift animate-glow-shimmer"></div>
      <div className="fixed top-[18%] right-[-140px] w-[640px] h-[640px] bg-gradient-to-bl from-rose-400/28 via-pink-300/25 to-sky-300/30 rounded-full blur-[150px] pointer-events-none -z-10 animate-float-rev"></div>
      <div className="fixed top-[52%] left-[-120px] w-[580px] h-[580px] bg-gradient-to-br from-indigo-500/24 via-emerald-300/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-float-slow"></div>
      <div className="fixed bottom-[-160px] right-[8%] w-[740px] h-[740px] bg-gradient-to-t from-pink-400/22 via-indigo-500/24 to-cyan-400/28 rounded-full blur-[160px] pointer-events-none -z-10 animate-wave-drift"></div>

      {/* Floating SVG decorative motion trails */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute top-[12%] left-[4%] w-[600px] h-[400px] opacity-25" fill="none" viewBox="0 0 600 400">
          <path d="M10 200 C 150 80, 300 320, 590 150" stroke="url(#lineGrad1)" strokeDasharray="8 8" strokeWidth="2.5"></path>
          <defs>
            <linearGradient id="lineGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8"></stop>
              <stop offset="50%" stopColor="#818cf8"></stop>
              <stop offset="100%" stopColor="#f472b6"></stop>
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute top-[58%] right-[2%] w-[650px] h-[450px] opacity-20" fill="none" viewBox="0 0 650 450">
          <path d="M20 300 C 200 100, 420 400, 630 180" stroke="url(#lineGrad2)" strokeLinecap="round" strokeWidth="2"></path>
          <defs>
            <linearGradient id="lineGrad2" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#a7f3d0"></stop>
              <stop offset="50%" stopColor="#60a5fa"></stop>
              <stop offset="100%" stopColor="#c084fc"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Navbar onBookDemoClick={handleBookDemo} />

      <main>
        <Hero onStartTrial={handleStartTrial} onBookDemo={handleBookDemo} />
        <MetricsBar />
        <FeaturesBento />
        <OnboardingSteps />
        <ModulesGrid />
        <Pricing onSelectPlan={handleOpenCheckout} />
        <DirectorySpotlight />
        <FAQ />
        <BottomCtaBanner onOpenCheckout={() => handleOpenCheckout({ name: 'Growth', price: 6999, period: 'month' })} />
      </main>

      <Footer />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        plan={selectedPlan}
        onClose={handleCloseCheckout}
      />

      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};

export default App;
