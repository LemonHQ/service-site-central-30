
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  title: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title }) => {
  return (
    <section className="py-16 md:py-24 bg-brand-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital experience?</h2>
          <p className="text-xl mb-8 text-brand-100">
            Let's discuss how our {title} services can help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-brand-600 hover:bg-brand-100">
                Get in Touch
              </Button>
            </Link>
            <Link to="/lead-qualification">
              <Button variant="outline" className="text-white border-white hover:bg-brand-700">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
