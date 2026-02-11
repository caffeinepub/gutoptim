import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CtaButton from './CtaButton';

const StickyHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-foreground">GutOptim</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-accent-teal transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-accent-teal transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-accent-teal transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-accent-teal transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CtaButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-foreground hover:text-accent-teal transition-colors font-medium text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-foreground hover:text-accent-teal transition-colors font-medium text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-accent-teal transition-colors font-medium text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-accent-teal transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <CtaButton className="text-center" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;
