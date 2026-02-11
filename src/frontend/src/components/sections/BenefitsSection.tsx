import React from 'react';
import { Smile, Wind, Scale, Calendar, Sparkles, TrendingUp } from 'lucide-react';
import CtaButton from '../CtaButton';

const benefits = [
  {
    icon: Smile,
    title: 'Supports digestive comfort',
    description: 'Helps promote a comfortable feeling throughout your day'
  },
  {
    icon: Wind,
    title: 'Helps reduce bloating & gas',
    description: 'Supports a lighter, more comfortable digestive experience'
  },
  {
    icon: Scale,
    title: 'Supports gut balance',
    description: 'Helps maintain a healthy digestive environment'
  },
  {
    icon: Calendar,
    title: 'Supports healthy routine',
    description: 'Easy to incorporate into your daily wellness habits'
  },
  {
    icon: Sparkles,
    title: 'Gentle daily support',
    description: 'Formulated for comfortable, everyday use'
  },
  {
    icon: TrendingUp,
    title: 'Works with healthy lifestyle',
    description: 'Complements your balanced diet and wellness goals'
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose GutOptim?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the benefits of daily digestive support designed for your comfort and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="w-12 h-12 bg-accent-mint rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits Image */}
        <div className="mb-12">
          <img
            src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(32).jpeg"
            alt="Daily Comfort"
            className="section-image max-w-3xl mx-auto"
          />
        </div>

        <div className="text-center">
          <CtaButton size="large" />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
