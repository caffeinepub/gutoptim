import React from 'react';
import { Star } from 'lucide-react';
import CtaButton from '../CtaButton';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'I feel so much lighter and more comfortable after adding GutOptim to my daily routine. It has been a game-changer for my digestive wellness!',
    rating: 5
  },
  {
    name: 'Michael T.',
    text: 'Finally found something that supports my gut health without any harsh effects. I take it every morning and feel great throughout the day.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    text: 'The bloating I used to experience has really improved. GutOptim has become an essential part of my wellness routine.',
    rating: 5
  },
  {
    name: 'David R.',
    text: 'Easy to take and I have noticed a real difference in my digestive comfort. Highly recommend for anyone looking for gentle daily support.',
    rating: 5
  },
  {
    name: 'Lisa K.',
    text: 'Love how this fits seamlessly into my healthy lifestyle. My digestion feels more balanced and I have more energy throughout the day.',
    rating: 5
  },
  {
    name: 'Robert P.',
    text: 'After just a few weeks, I feel more comfortable and confident. GutOptim has exceeded my expectations for digestive support.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who have made GutOptim part of their daily routine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-border">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cta-orange text-cta-orange" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <p className="font-semibold text-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <img
            src="https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/gutoptim/images%20(33).jpeg"
            alt="Happy Customers"
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

export default TestimonialsSection;
