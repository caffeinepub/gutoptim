import React from 'react';
import { Leaf, Droplet, Sparkles, Heart } from 'lucide-react';

const ingredients = [
  {
    icon: Leaf,
    name: 'Natural Botanicals',
    description: 'Carefully selected plant-based ingredients to support digestive wellness'
  },
  {
    icon: Droplet,
    name: 'Digestive Enzymes',
    description: 'Helps support the natural breakdown of nutrients'
  },
  {
    icon: Sparkles,
    name: 'Probiotic Support',
    description: 'Supports a healthy gut microbiome balance'
  },
  {
    icon: Heart,
    name: 'Soothing Herbs',
    description: 'Traditional botanicals known for digestive comfort'
  }
];

const FormulaSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Inside GutOptim?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully crafted formula designed to support your digestive wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Ingredients */}
          <div className="space-y-6">
            {ingredients.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-mint rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {ingredient.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {ingredient.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div>
            <img
              src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(1)%20(29).jpeg"
              alt="GutOptim Ingredients"
              className="section-image"
            />
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Quality you can trust:</span> Our formula is crafted with care to support your digestive wellness goals as part of a healthy lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormulaSection;
