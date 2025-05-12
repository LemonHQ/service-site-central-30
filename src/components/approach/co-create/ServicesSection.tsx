
import React from 'react';
import { FlaskConical, Zap, History, Lightbulb } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

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
            link="/services/design-new-experiences" 
          />
          
          <ServiceCard 
            title="Rapid Prototyping" 
            description="Transform concepts into functional prototypes within days, not weeks or months." 
            icon={Zap} 
            link="/services/digitalize-product-lines" 
          />
          
          <ServiceCard 
            title="Technology assessments" 
            description="Reimagine customer experiences without legacy systems and technology constraints." 
            icon={History} 
            link="/services/modernize-architecture" 
          />
          
          <ServiceCard 
            title="Design Studio" 
            description="Visualize your end products and experiences shaped by your brand and design playbooks." 
            icon={Lightbulb} 
            link="/services/innovate-with-ai" 
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
