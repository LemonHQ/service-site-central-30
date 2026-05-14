
import React from 'react';
import FaqSection, { FaqItem } from '@/components/ui/FaqSection';
import JsonLd from '@/components/seo/JsonLd';

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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof f.answer === 'string' ? f.answer : String(f.answer),
      },
    })),
  };

  return (
    <>
      {faqs.length > 0 && <JsonLd id="faq" data={faqSchema} />}
      <FaqSection
        faqs={faqs}
        title={title}
        subtitle={subtitle}
        backgroundColor="bg-slate-50"
      />
    </>
  );
};

export default ServiceFaqSection;
