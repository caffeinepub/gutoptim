import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'gutoptim-landing';

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-custom">
        <div className="text-center space-y-4">
          <p className="text-sm">
            © {currentYear} GutOptim. All rights reserved.
          </p>
          <p className="text-sm flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 fill-cta-orange text-cta-orange" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cta-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
