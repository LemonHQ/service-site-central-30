
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionTitle, Paragraph } from '@/components/ui/Typography';
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
    <section className="py-16 bg-brand-50">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle className="text-gray-900 mb-4">Ready to Get Started?</SectionTitle>
        <Paragraph className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact our team today to discuss how we can help you achieve your business goals.
        </Paragraph>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ctaLink} onClick={handleCtaClick}>
            <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
              {ctaText}
            </Button>
          </Link>
          <Link to="/contact" onClick={handleContactClick}>
            <Button size="lg" variant="outline" className="border-brand-300 text-brand-500">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
