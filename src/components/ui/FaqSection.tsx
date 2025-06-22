
import React from 'react';
import { H3, Paragraph } from '@/components/ui/Typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  backgroundColor?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  className = "",
  backgroundColor = "bg-gray-50"
}) => {
  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {title && (
            <div className="text-center mb-10">
              <H3 className="mb-3 text-gray-800 font-light">{title}</H3>
              {subtitle && <Paragraph className="text-center text-gray-600 font-light">{subtitle}</Paragraph>}
            </div>
          )}
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left py-4">
                  <span className="flex items-start text-base text-gray-800 font-light">
                    <span className="font-normal text-gray-700 mr-3">
                      {index + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-6 pl-8 font-light">
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
