
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Benefits"
          subtitle="Why organizations choose our solutions"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
