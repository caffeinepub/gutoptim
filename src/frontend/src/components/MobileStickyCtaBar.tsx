import React from 'react';
import CtaButton from './CtaButton';

const MobileStickyCtaBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg p-4 safe-area-bottom">
      <CtaButton className="w-full text-center" size="large" />
    </div>
  );
};

export default MobileStickyCtaBar;
