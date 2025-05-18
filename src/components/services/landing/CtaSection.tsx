
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  ctaText: string;
  ctaLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ ctaText, ctaLink }) => {
  return (
    <section className="py-16 md:py-24 bg-brand-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital experience?</h2>
          <p className="text-xl mb-8 text-brand-100">
            Let's discuss how our services can help your organization achieve its goals.
          </p>
          <Link to={ctaLink}>
            <Button className="bg-white text-brand-600 hover:bg-brand-100">
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
