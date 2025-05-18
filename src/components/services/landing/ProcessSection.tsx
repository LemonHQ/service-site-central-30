
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  steps,
  title = "Our Process",
  subtitle = "How we deliver exceptional results"
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-8">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600 font-bold text-xl">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-20 bg-gray-200 mx-auto mt-2"></div>
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
