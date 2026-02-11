import React from 'react';
import { Clock } from 'lucide-react';
import CtaButton from '../CtaButton';

const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Take Control of Your Gut Health Today
            </h2>
            <div className="flex items-center space-x-3 bg-cta-orange/10 px-4 py-3 rounded-lg">
              <Clock className="w-6 h-6 text-cta-orange shrink-0" />
              <p className="text-lg font-semibold text-foreground">
                Limited availability — order now before stock runs out.
              </p>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of satisfied customers who have made GutOptim part of their daily wellness routine. Experience the difference of premium digestive support.
            </p>
            <div className="pt-4">
              <CtaButton size="large" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(35).jpeg"
              alt="GutOptim Final"
              className="section-image max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
