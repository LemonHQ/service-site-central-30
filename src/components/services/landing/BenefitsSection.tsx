
import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle } from 'lucide-react';
import { trackEvent, EventCategory, EventName } from '@/services/analytics';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  // Track when this section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTracked.current) {
          trackEvent(EventName.VIEW, EventCategory.CONTENT, {
            section: 'benefits',
            benefitsCount: benefits.length
          });
          hasTracked.current = true;
        }
      },
      { threshold: 0.5 } // Track when at least 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [benefits.length]);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
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
              <span className="text-gray-700 font-light">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
