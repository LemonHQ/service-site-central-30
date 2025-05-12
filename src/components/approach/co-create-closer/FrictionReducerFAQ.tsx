
import React from 'react';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How long does a typical Co-Create engagement last?",
    answer: "Our standard Co-Create framework is a 4-week process, though we can accelerate to as little as 3 weeks for urgent needs. For more complex products or organizations with multiple stakeholders, we may extend to 7-8 weeks to ensure proper validation and alignment."
  },
  {
    question: "Who from my organization needs to be involved?",
    answer: "For optimal results, we recommend a core team of 3-5 key stakeholders (typically from product, marketing, technology, and customer experience) who participate throughout the engagement. Additional subject matter experts join for specific sessions or review sessions as needed. We work with your schedule constraints to maximize participation while minimizing disruption."
  },
  {
    question: "What if we already have a product idea—do we still need Co-Create?",
    answer: "Absolutely. In fact, having existing product concepts makes the Co-Create process even more valuable. We can help validate assumptions, identify potential user experience issues before development, and strengthen your product-market fit. Many clients find that Co-Create helps them prioritize the most valuable features and avoid costly detours."
  },
  {
    question: "Can Co-Create be conducted remotely or does it require in-person sessions?",
    answer: "We've developed highly effective virtual Co-Create experiences using digital collaboration tools that deliver comparable outcomes to in-person sessions. That said, for teams that can meet in person, we recommend at least the initial kickoff and final readout be conducted face-to-face for maximum engagement. We offer flexible hybrid approaches based on your team's location and preferences."
  },
  {
    question: "What happens after the Co-Create engagement ends?",
    answer: "By the end of Co-Create, you'll have validated prototypes, detailed implementation plans, and technical requirements. Many clients transition into our full development services to bring the solution to market, while others implement with their internal teams using our specifications. Either way, we provide a complete handoff package and offer optional ongoing support to ensure successful execution."
  },
  {
    question: "How is Co-Create different from other design thinking or collaborative approaches?",
    answer: "Unlike generic design thinking sessions that often yield theoretical concepts, Co-Create is intensely practical and results-driven. We focus on rapidly creating testable prototypes and validating them with real users from your target segments. Our framework is specifically tailored for enterprise products and incorporates both business viability and technical feasibility alongside user desirability."
  }
];

const FrictionReducerFAQ = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <H2 className="mb-4">Common Questions</H2>
            <Paragraph>
              Everything you need to know about our Co-Create approach
            </Paragraph>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left py-4">
                  <span className="text-base text-gray-800">
                    <span className="font-medium text-brand-600 mr-2">{index + 1}.</span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-6 pl-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 p-6 bg-brand-50 rounded-lg border border-brand-100">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-700 font-bold">?</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-base text-gray-800 mb-2">Still have questions?</h4>
                <Paragraph className="text-sm mb-0">
                  Contact our team directly at <a href="mailto:co-create@elevatedigital.com" className="text-brand-600 hover:underline">co-create@elevatedigital.com</a> 
                  or book a 15-minute consultation to discuss your specific needs.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrictionReducerFAQ;
