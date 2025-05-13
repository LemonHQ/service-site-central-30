
import React from 'react';
import FaqSection, { FaqItem } from '@/components/ui/FaqSection';

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

const ServiceFaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services"
}) => {
  return (
    <FaqSection 
      faqs={faqs}
      title={title}
      subtitle={subtitle}
      backgroundColor="bg-slate-50"
    />
  );
};

export default ServiceFaqSection;
