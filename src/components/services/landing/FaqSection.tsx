
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqSectionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  title?: string;
  subtitle?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services"
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-light text-center mb-3 text-brand-600">
            {title}
          </h2>
          <p className="text-xl text-center mb-12 text-brand-500">
            {subtitle}
          </p>
        
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left text-brand-600">
                  <span className="flex items-start">
                    <span className="text-brand-500 font-semibold mr-3">
                      {index + 1}.
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-brand-500 pl-8">
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
