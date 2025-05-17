
import React from 'react';
import { Cloud, Rocket, ArrowRight } from 'lucide-react';
import { H2, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';

const audienceStages = [
  {
    icon: <Cloud className="h-10 w-10 text-brand-500" />,
    title: "Legacy Product Teams",
    description: "For teams with established product lines seeking to transform traditional offerings into modern digital experiences. Our approach helps decompose traditional products into stand-alone digital offerings customized around specific customer segments."
  },
  {
    icon: <Rocket className="h-10 w-10 text-brand-500" />,
    title: "Digital Transformation Leaders",
    description: "For organizations looking to monetize emerging business models by repackaging existing offerings into subscription-based digital services with tiered access and recurring revenue streams."
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-brand-500" />,
    title: "Product Innovation Teams",
    description: "For teams needing to expand product reach across multiple customer touchpoints and partners while extending core product capabilities to unlock adjacent value streams and accelerate ecosystem integration."
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Who is Digitalize Product Lines for"
          subtitle="Supporting organizations at different stages of digital product transformation"
          centered={true}
        />
        
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
