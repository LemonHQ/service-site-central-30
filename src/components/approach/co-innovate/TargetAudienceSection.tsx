
import React from 'react';
import { Lightbulb, Layers, RefreshCw } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const audienceStages = [
  {
    icon: Lightbulb,
    title: "Early Product Idea",
    description: "For teams with innovative concepts that need validation before committing significant resources. Rapid iteration helps transform promising ideas into validated product concepts with clear market fit."
  },
  {
    icon: Layers,
    title: "Product Expansion Stage",
    description: "For established products looking to enter new markets or add significant features. Our approach minimizes expansion risks by testing assumptions quickly and cost-effectively."
  },
  {
    icon: RefreshCw,
    title: "Product Evolution Stage",
    description: "For mature products needing to adapt to changing market conditions or customer needs. Rapid iteration allows for incremental improvements with immediate feedback loops."
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 bg-beige-50">
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
          {audienceStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <Card key={index} className={cn(
                'block bg-ivory-100 border border-beige-300/30 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform transition-all duration-300',
                'h-full'
              )}>
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-brand-500" />
                  </div>
                  <H4 className="mb-3 text-brand-400">{stage.title}</H4>
                  <Paragraph>{stage.description}</Paragraph>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
