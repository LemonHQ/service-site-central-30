
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

interface RelatedServicesSectionProps {
  relatedServices: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ relatedServices }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Related Services"
          subtitle="Explore other ways we can help your business"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {relatedServices.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="flex items-center text-brand-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
