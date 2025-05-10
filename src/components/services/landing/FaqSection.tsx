
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FaqSectionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
          centered
        />
        
        <div className="mt-8 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg text-brand-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
