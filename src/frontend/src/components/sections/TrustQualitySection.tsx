import React from 'react';
import { Shield, Lock, Building2, Truck } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Quality tested',
    description: 'Manufactured following quality standards'
  },
  {
    icon: Lock,
    title: 'Secure checkout',
    description: 'Safe and encrypted payment processing'
  },
  {
    icon: Building2,
    title: 'Made in controlled facility',
    description: 'Produced in a quality-controlled environment'
  },
  {
    icon: Truck,
    title: 'Fast shipping',
    description: 'Quick delivery to your door'
  }
];

const TrustQualitySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality & Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your wellness and satisfaction are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="trust-badge">
                <div className="w-16 h-16 bg-accent-mint rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

        <div>
          <img
            src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(34).jpeg"
            alt="Quality Assurance"
            className="section-image max-w-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustQualitySection;
