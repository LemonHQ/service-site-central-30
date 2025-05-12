
import React from 'react';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do you identify the right target customers for our product?",
    answer: "We use a systematic approach to identify and validate target customers by analyzing your market segments, conducting user interviews, and evaluating customer pain points. This approach combines your internal business knowledge with external market research to pinpoint the most promising customer segments where your product can solve meaningful problems and create value."
  },
  {
    question: "How do you measure product-market fit during the Co-Create process?",
    answer: "We establish clear metrics aligned with Dan Olsen's product-market fit pyramid to measure how well your product meets customer needs. These typically include engagement metrics (usage frequency, session duration), retention metrics (return rate, churn), and satisfaction metrics (NPS, user feedback). We define these metrics early in the process and use them to validate the product concept with real users."
  },
  {
    question: "How do you handle the tension between MVP features and future ecosystem connectivity?",
    answer: "We focus on creating a minimal viable product that delivers core value while architecting for future flexibility. The process involves prioritizing features based on your target customers' most urgent needs while designing the underlying architecture to support future ecosystem integrations. This balanced approach ensures you can deliver immediate value while positioning your product for long-term ecosystem success."
  },
  {
    question: "What if we discover our initial product hypothesis is wrong during the process?",
    answer: "This is actually a valuable outcome of the Co-Create process. Dan Olsen's methodology embraces the principle of validated learning - better to discover issues early before significant resources are invested. If we find that the initial hypothesis needs adjustment, we'll pivot based on the insights gathered and refine the target customer, problem statement, or solution approach accordingly."
  },
  {
    question: "How do we involve our existing customers in the process if we're enhancing a current product?",
    answer: "For existing products, we incorporate your current customers into the process through targeted research sessions and prototype testing. We analyze usage data of your existing product, conduct interviews with different customer segments, and involve them in validation of new features. This approach helps ensure that enhancements address actual customer needs while maintaining compatibility with existing workflows."
  },
  {
    question: "What happens after the 4-week Co-Create process ends?",
    answer: "After completing the Co-Create process, you'll have a validated product concept, prioritized feature set, and product-market fit metrics to guide development. Many clients transition to our implementation services for development, while others use our specifications with their internal teams. We also offer ongoing support for iterative product enhancement and can assist with executing your product roadmap after launch."
  }
];

const FrictionReducerFAQ = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <H2 className="mb-4">FAQs</H2>
            <Paragraph>
              Common questions about our product-market fit Co-Create process
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
                <h4 className="font-medium text-base text-gray-800 mb-2">Have specific product-market fit questions?</h4>
                <Paragraph className="text-sm mb-0">
                  Contact our product strategy team at <a href="mailto:product@elevatedigital.com" className="text-brand-600 hover:underline">product@elevatedigital.com</a> 
                  or book a 15-minute consultation to discuss your product-market fit challenges.
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
