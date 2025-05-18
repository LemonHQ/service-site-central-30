
import React from 'react';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Benefits"
          subtitle="How our services create value for your business"
          centered
        />
        
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-1 mr-4 bg-brand-100 rounded-full p-1">
                <Check className="h-5 w-5 text-brand-600" />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
