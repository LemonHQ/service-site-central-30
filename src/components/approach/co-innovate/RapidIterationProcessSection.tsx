
import React from 'react';
import { Search, FileText, Layers, CheckCircle } from 'lucide-react';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

const processSteps = [
  {
    number: 1,
    icon: <Search className="h-10 w-10 text-brand-600" />,
    title: "Identify",
    description: "Define innovation opportunities and challenges. Focus on specific customer pain points or market gaps that can be addressed with limited resource commitment."
  },
  {
    number: 2,
    icon: <FileText className="h-10 w-10 text-brand-600" />,
    title: "Define",
    description: "Create a clear hypothesis and success criteria. Establish what you're testing, what you expect to learn, and how you'll measure success in a short timeframe."
  },
  {
    number: 3,
    icon: <Layers className="h-10 w-10 text-brand-600" />,
    title: "Prototype",
    description: "Build the simplest possible version. Focus on core functionality that tests your hypothesis—nothing more. Speed is essential at this stage."
  },
  {
    number: 4,
    icon: <CheckCircle className="h-10 w-10 text-brand-600" />,
    title: "Validate",
    description: "Test with real users and gather data. Learn what works, what doesn't, and why. Use these insights to make quick decisions about next steps."
  }
];

const RapidIterationProcessSection = () => {
  return (
    <section className="py-16 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <H2 className="mb-6">The 4-Step Rapid Iteration Process</H2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-brand-500"></div>
          </div>
          <Paragraph className="text-lg">
            Our structured approach helps teams move quickly from idea to validated concept,
            maximizing learning while minimizing risk.
          </Paragraph>
        </div>
        
        <div className="relative mt-20">
          {/* Process Circle Visual */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-4 border-dashed border-brand-200 rounded-full"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center mb-6 z-10">
                  <div className="bg-brand-100 rounded-full p-3">
                    {step.icon}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md z-10">
                  <div className="inline-block bg-brand-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                    {step.number}
                  </div>
                  <H3 className="text-brand-700 mb-3">{step.title}</H3>
                  <Paragraph>{step.description}</Paragraph>
                </div>
                
                {/* Connector Lines - Only visible on larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full transform -translate-x-1/2 z-0">
                    <div className="border-t-2 border-brand-300 w-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <H3 className="text-brand-700 mb-6">Rapid Iteration is Cyclical</H3>
          <div className="max-w-2xl mx-auto">
            <Paragraph>
              Each cycle of the process feeds into the next, creating a continuous loop of 
              innovation and improvement. Teams can run multiple parallel experiments or 
              iterative cycles to accelerate learning and product evolution.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidIterationProcessSection;
