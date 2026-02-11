import React from 'react';
import StickyHeader from './components/StickyHeader';
import HeroSection from './components/sections/HeroSection';
import ProblemSolutionSection from './components/sections/ProblemSolutionSection';
import BenefitsSection from './components/sections/BenefitsSection';
import FormulaSection from './components/sections/FormulaSection';
import TrustQualitySection from './components/sections/TrustQualitySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FaqSection from './components/sections/FaqSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import Footer from './components/Footer';
import MobileStickyCtaBar from './components/MobileStickyCtaBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <ProblemSolutionSection />
        <BenefitsSection />
        <FormulaSection />
        <TrustQualitySection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </main>
      <MobileStickyCtaBar />
    </div>
  );
}

export default App;
