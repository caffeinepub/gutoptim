import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How to take GutOptim daily?',
    answer: 'Take GutOptim as directed on the product label, typically with a meal and a full glass of water. Consistency is key for best results, so try to take it at the same time each day as part of your wellness routine.'
  },
  {
    question: 'When will I notice results?',
    answer: 'Many users report feeling more comfortable within the first few weeks of consistent use. However, individual results may vary. For optimal support, we recommend using GutOptim daily for at least 30 days as part of a healthy lifestyle.'
  },
  {
    question: 'Is checkout secure?',
    answer: 'Yes, absolutely! We use industry-standard encryption and secure payment processing to protect your personal and payment information. Your transaction is completely safe and confidential.'
  },
  {
    question: 'How do I order?',
    answer: 'Simply click any "Buy Now" button on this page to be directed to our secure checkout page. Select your preferred package, enter your shipping information, and complete your order. It is quick and easy!'
  },
  {
    question: 'Can I take GutOptim with other supplements?',
    answer: 'GutOptim is formulated to work well as part of a balanced wellness routine. However, if you are taking other supplements or medications, we recommend consulting with your healthcare provider to ensure compatibility.'
  },
  {
    question: 'What if I am not satisfied?',
    answer: 'Your satisfaction is important to us. Please refer to the return policy on the checkout page for details about our satisfaction guarantee and return process.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'We process orders quickly and ship via reliable carriers. Typical delivery times vary by location but most orders arrive within 5-7 business days. You will receive tracking information once your order ships.'
  },
  {
    question: 'Is GutOptim suitable for vegetarians?',
    answer: 'Please check the product label or contact customer support for specific dietary information. We are happy to answer any questions about ingredients and formulation.'
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GutOptim
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary transition-colors"
              >
                <span className="font-semibold text-foreground text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent-teal shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
