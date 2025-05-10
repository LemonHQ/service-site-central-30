
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2 text-brand-600">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
