import React from 'react';
import { CheckCircle2, Heart, Leaf } from 'lucide-react';
import CtaButton from '../CtaButton';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              GutOptim — Daily Support for a Healthier, Happier Gut
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advanced digestive support designed to help you feel lighter, balanced, and comfortable every day.
            </p>

            {/* Trust Bullets */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-accent-teal shrink-0" />
                <span className="text-lg text-foreground">Supports gut balance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-accent-teal shrink-0" />
                <span className="text-lg text-foreground">Helps digestive comfort</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-accent-teal shrink-0" />
                <span className="text-lg text-foreground">Easy daily routine</span>
              </div>
            </div>

            <div className="pt-4">
              <CtaButton size="large" />
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="flex justify-center">
            <img
              src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(1)%20(30).jpeg"
              alt="GutOptim Product"
              className="section-image max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
