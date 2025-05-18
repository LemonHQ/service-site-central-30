
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

export interface ServiceProcess {
  title: string;
  description: string;
  number: number;
}

interface ProcessSectionProps {
  processes: ServiceProcess[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ processes }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Approach"
          subtitle="A proven methodology to deliver exceptional results"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {processes.map((process, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-6 text-brand-600 text-2xl font-bold">
                  {process.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-600">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full transform -translate-x-1/2 z-0">
                  <ArrowRight className="w-10 h-10 text-brand-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
