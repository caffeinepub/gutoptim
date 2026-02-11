import React from 'react';

interface CtaButtonProps {
  className?: string;
  size?: 'default' | 'large';
}

const AFFILIATE_URL = 'https://gutoptim24.com/text.php#aff=Nexora_8248';

const CtaButton: React.FC<CtaButtonProps> = ({ className = '', size = 'default' }) => {
  const sizeClasses = size === 'large' 
    ? 'px-10 py-5 text-lg font-bold' 
    : 'px-8 py-4 text-base font-semibold';

  return (
    <a
      href={AFFILIATE_URL}
      className={`inline-block bg-cta-orange hover:bg-cta-orange-hover text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${sizeClasses} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Buy Now
    </a>
  );
};

export default CtaButton;
