
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { trackEvent, EventCategory, EventName } from '@/services/analytics';

interface CtaSectionProps {
  ctaText: string;
  ctaLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ ctaText, ctaLink }) => {
  // Track CTA button clicks
  const handleCtaClick = () => {
    trackEvent(
      EventName.CLICK,
      EventCategory.CTA,
      { buttonText: ctaText, destination: ctaLink }
    );
  };

  // Track contact button clicks
  const handleContactClick = () => {
    trackEvent(
      EventName.CLICK,
      EventCategory.CTA,
      { buttonText: 'Contact Us', destination: '/contact' }
    );
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
          Contact our team today to discuss how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ctaLink} onClick={handleCtaClick}>
            <Button size="lg" className="font-light">
              {ctaText}
            </Button>
          </Link>
          <Link to="/contact" onClick={handleContactClick}>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 font-light">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
