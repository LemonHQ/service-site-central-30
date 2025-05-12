
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { H2, Lead } from '@/components/ui/Typography';

const CtaSection = () => {
  return (
    <section className="bg-brand-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <H2 className="mb-6 text-slate-50 font-normal">Ready to explore?</H2>
        <Lead className="mb-8 max-w-2xl mx-auto font-light text-white">
          Assess your readiness for a co-creation journey
        </Lead>
        <Link to="/approach/co-create-assessment">
          <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
            Take the assessment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
