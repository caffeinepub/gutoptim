import React from 'react';
import { AlertCircle } from 'lucide-react';
import CtaButton from '../CtaButton';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(1)%20(31).jpeg"
              alt="Digestive Health"
              className="section-image"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
              <AlertCircle className="w-5 h-5 text-accent-teal" />
              <span className="text-sm font-semibold text-foreground">Common Gut Concerns</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Struggling with Digestive Discomfort?
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Many people experience occasional bloating, gas, and digestive discomfort that can affect their daily comfort and confidence.
              </p>
              <p>
                Irregular digestion patterns can leave you feeling sluggish and uncomfortable, making it harder to enjoy your favorite foods and activities.
              </p>
              <p className="font-semibold text-foreground">
                GutOptim is designed to support your digestive wellness journey with a gentle, daily approach to gut health.
              </p>
            </div>

            <div className="pt-4">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
