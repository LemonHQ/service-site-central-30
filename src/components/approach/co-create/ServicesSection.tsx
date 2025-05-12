
import React from 'react';
import { FlaskConical, Zap, History, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

// Non-clickable service card component
const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className={cn(
      'block bg-ivory-100 p-6 rounded-xl transition-all duration-300 hover:shadow-sm',
      'border border-beige-300/30'
    )}>
      <div className="mb-4">
        {Icon && <Icon className="w-10 h-10 text-teal-400" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-400">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Access these services through Co-Create"
          subtitle="Our Co-Create model can be applied across a wide range of digital innovation needs, from product design to emerging technology exploration."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Product Lab" 
            description="Structured sessions to uncover insights from end product users and stakeholders." 
            icon={FlaskConical}
          />
          
          <ServiceCard 
            title="Rapid Prototyping" 
            description="Transform concepts into functional prototypes within days, not weeks or months." 
            icon={Zap}
          />
          
          <ServiceCard 
            title="Technology assessments" 
            description="Reimagine customer experiences without legacy systems and technology constraints." 
            icon={History}
          />
          
          <ServiceCard 
            title="Design Studio" 
            description="Visualize your end products and experiences shaped by your brand and design playbooks." 
            icon={Lightbulb}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
