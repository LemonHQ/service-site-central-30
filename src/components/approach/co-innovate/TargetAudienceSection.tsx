
import React from 'react';
import { Lightbulb, Layers, RefreshCw } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';

const audienceStages = [
  {
    icon: <Lightbulb className="h-8 w-8 text-brand-900" />,
    title: "Early Product Idea",
    description: "For teams with innovative concepts that need validation before committing significant resources. Rapid iteration helps transform promising ideas into validated product concepts with clear market fit."
  },
  {
    icon: <Layers className="h-8 w-8 text-brand-900" />,
    title: "Product Expansion Stage",
    description: "For established products looking to enter new markets or add significant features. Our approach minimizes expansion risks by testing assumptions quickly and cost-effectively."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-brand-900" />,
    title: "Product Evolution Stage",
    description: "For mature products needing to adapt to changing market conditions or customer needs. Rapid iteration allows for incremental improvements with immediate feedback loops."
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">Who Our Co-Innovate Approach Is For</H2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-brand-500"></div>
          </div>
          
          <Paragraph className="text-lg">
            Our rapid iteration methodology adapts to various stages of the product lifecycle,
            providing targeted benefits whether you're launching a new concept or evolving an
            established offering.
          </Paragraph>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {audienceStages.map((card, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-pink-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="mt-1">{card.icon}</div>
                  <div>
                    <H4 className="text-gray-800 mb-1">{card.title}</H4>
                    <Paragraph>{card.description}</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-brand-50 rounded-lg border border-brand-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-3xl font-bold text-brand-600 whitespace-nowrap">The right fit</div>
            <div className="w-full h-0.5 bg-brand-200"></div>
            <div className="text-xl font-semibold text-brand-600">95%</div>
          </div>
          <Paragraph className="mt-4 text-brand-800">
            According to our clients, 95% of teams that implement our rapid iteration methodology
            report faster time-to-market and higher confidence in product decisions.
            Our approach works across all product lifecycle stages, delivering value
            regardless of where you are in your product journey.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
