
import React from 'react';
import { Lightbulb, ArrowRightLeft, RefreshCw } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const audienceStages = [
  {
    icon: <Lightbulb className="h-10 w-10 text-brand-500" />,
    title: "Early Product Idea",
    description: "For teams with innovative concepts that need validation before committing significant resources. Rapid iteration helps transform promising ideas into validated product concepts with clear market fit."
  },
  {
    icon: <ArrowRightLeft className="h-10 w-10 text-brand-500" />,
    title: "Product Expansion Stage",
    description: "For established products looking to enter new markets or add significant features. Our approach minimizes expansion risks by testing assumptions quickly and cost-effectively."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-brand-500" />,
    title: "Product Evolution Stage",
    description: "For mature products needing to adapt to changing market conditions or customer needs. Rapid iteration allows for incremental improvements with immediate feedback loops."
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 bg-white">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {audienceStages.map((stage, index) => (
            <Card key={index} className="border-brand-100 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-brand-50 p-3 rounded-full mb-4">
                    {stage.icon}
                  </div>
                  <H4 className="text-gray-800 mb-3">{stage.title}</H4>
                  <Paragraph>{stage.description}</Paragraph>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
