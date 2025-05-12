
import React from 'react';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do you balance building core product features versus ecosystem integrations?",
    answer: "Our Co-Create process uses a value-driven approach to prioritize both product features and ecosystem integrations. We identify which core features deliver immediate user value while designing integration points that enable future growth. This balanced approach ensures your product meets immediate market needs while building the foundation for broader ecosystem participation."
  },
  {
    question: "How do you involve our target users in the product development process?",
    answer: "We engage target users at multiple points throughout the 4-week process. In Week 1, we conduct user interviews and needs assessments to inform the product vision. During Week 3's prototype development, we incorporate user feedback on early designs. Week 4 is dedicated to structured user testing sessions with your specific user segments to validate and refine the product before launch."
  },
  {
    question: "What technical prerequisites are needed for product development?",
    answer: "While technical requirements vary by product, our process is adaptable to your current technical maturity. For early-stage products, we focus on validating the core concept and creating a technical roadmap. For more mature products, we can incorporate existing codebases and APIs. Our Co-Create process works regardless of where you are in your product journey."
  },
  {
    question: "How do we protect our product's intellectual property while enabling ecosystem connections?",
    answer: "This is a common concern we address during the Ecosystem Landscape Mapping phase. We help you design a product strategy with tiered API access, well-defined partnership agreements, and strategic capabilities that maintain your competitive advantage while enabling beneficial integrations. We can also assist with drafting appropriate legal frameworks for ecosystem partnerships."
  },
  {
    question: "Who from our organization needs to be involved in the Co-Create process?",
    answer: "For optimal results, we recommend a core team of 3-5 key stakeholders spanning product management, engineering, and business development. We'll also need access to your target users for research and testing sessions. Our collaborative approach is designed to create alignment across these different perspectives while minimizing the time commitment required from your team."
  },
  {
    question: "What happens after the 4-week Co-Create process ends?",
    answer: "After completing the Co-Create process, you'll have a validated product prototype, technical implementation roadmap, and go-to-market strategy. Many clients transition to our implementation services for development, while others use our specifications with their internal teams. We also offer ongoing product enhancement support and can assist with executing your ecosystem strategy after launch."
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
              Common questions about our product Co-Create process
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
                <h4 className="font-medium text-base text-gray-800 mb-2">Have specific product development questions?</h4>
                <Paragraph className="text-sm mb-0">
                  Contact our product strategy team at <a href="mailto:product@elevatedigital.com" className="text-brand-600 hover:underline">product@elevatedigital.com</a> 
                  or book a 15-minute consultation to discuss your specific product challenges.
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
