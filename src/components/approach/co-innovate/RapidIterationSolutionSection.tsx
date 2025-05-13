
import React from 'react';
import { Zap, Shield, Clock, Rocket, Globe } from 'lucide-react';
import { H2, H3, H4, Paragraph } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-green-500" />,
    title: "Limited Financial Exposure",
    description: "Small-scale experimentation requires minimal investment, protecting your budget from high-risk failures."
  },
  {
    icon: <Clock className="h-10 w-10 text-green-500" />,
    title: "Short-term Commitments",
    description: "Quick iteration cycles mean resources aren't tied up for extended periods, maintaining organizational agility."
  },
  {
    icon: <Rocket className="h-10 w-10 text-green-500" />,
    title: "Accelerated Learning",
    description: "Rapid feedback loops create more learning opportunities in less time, building organizational knowledge faster."
  },
  {
    icon: <Globe className="h-10 w-10 text-green-500" />,
    title: "Confined Operational Effects",
    description: "Experiments stay contained, ensuring that innovation activities don't disrupt core business operations."
  }
];

const RapidIterationSolutionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <Zap className="h-6 w-6 text-green-600" />
          </div>
          
          <H2 className="mb-6">The Rapid Iteration Advantage</H2>
          
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-green-500"></div>
          </div>
          
          <Paragraph className="text-lg">
            Co-Innovate creates safe spaces for experimentation through rapid iteration cycles.
            This approach delivers quick wins and continuous learning while minimizing the risk 
            typically associated with innovation initiatives.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-green-100 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-50 p-3 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <H4 className="text-gray-800 mb-3">{feature.title}</H4>
                  <Paragraph>{feature.description}</Paragraph>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 p-8 rounded-lg border border-green-100">
          <H3 className="text-center mb-8">Benefits of Rapid Iteration</H3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
              <Paragraph className="text-green-700 font-medium">Teams stay engaged and energized</Paragraph>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">5x</div>
              <Paragraph className="text-green-700 font-medium">Learning cycles accelerate</Paragraph>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
              <Paragraph className="text-green-700 font-medium">Market feedback arrives faster</Paragraph>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
              <Paragraph className="text-green-700 font-medium">Decision fatigue diminishes</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidIterationSolutionSection;
