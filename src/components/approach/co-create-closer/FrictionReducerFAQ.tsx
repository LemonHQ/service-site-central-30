
import React from 'react';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I identify the right ecosystem opportunities for my products?",
    answer: "Our Co-Create process begins with ecosystem mapping to identify partnership opportunities. We analyze your existing capabilities, market trends, customer journey touchpoints, and potential ecosystem partners to determine where you can create maximum value through integration."
  },
  {
    question: "What technical prerequisites are needed for ecosystem participation?",
    answer: "While technical requirements vary by ecosystem, we typically recommend having API capabilities, scalable infrastructure, and identity management solutions. However, our Co-Create process works even if you don't have these prerequisites yet—we'll help you develop an implementation roadmap tailored to your current technical maturity."
  },
  {
    question: "How do we balance ecosystem openness with IP protection?",
    answer: "This is a common concern we address during the Platform Co-Creation phase. We help you design an ecosystem strategy with tiered API access, well-defined partnership agreements, and strategic capabilities that maintain your competitive advantage while enabling beneficial integrations."
  },
  {
    question: "Who from my organization needs to be involved in ecosystem planning?",
    answer: "For optimal results, we recommend a core team of 5-7 key stakeholders spanning product, technology, business development, and strategy. Additional subject matter experts join for specific sessions as needed. Our ecosystem mapping sessions are designed to create alignment across these different perspectives."
  },
  {
    question: "How long does it take to see results from ecosystem participation?",
    answer: "Early benefits like strategic clarity and internal alignment are immediate. Technical integration prototypes are typically ready within 3-4 weeks. Most organizations see initial ecosystem partnership deals within 3-6 months, with substantial market impact in 9-12 months as integrations mature and network effects increase."
  },
  {
    question: "What happens after the Co-Create strategic sessions end?",
    answer: "After completing the Co-Create process, you'll have an ecosystem strategy, platform architecture blueprint, API specifications, and partnership models. Many clients transition to our implementation services for technical development, while others use our specifications with their internal teams. We also offer ongoing ecosystem development support to help you grow your partner network."
  }
];

const FrictionReducerFAQ = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <H2 className="mb-4">Ecosystem Strategy FAQs</H2>
            <Paragraph>
              Common questions about building digital ecosystem platforms
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
                <h4 className="font-medium text-base text-gray-800 mb-2">Have ecosystem-specific questions?</h4>
                <Paragraph className="text-sm mb-0">
                  Contact our ecosystem strategy team at <a href="mailto:ecosystems@elevatedigital.com" className="text-brand-600 hover:underline">ecosystems@elevatedigital.com</a> 
                  or book a 15-minute consultation to discuss your specific ecosystem challenges.
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
