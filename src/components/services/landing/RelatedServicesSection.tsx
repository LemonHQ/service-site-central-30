
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface RelatedServicesSectionProps {
  relatedServices: RelatedService[];
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ relatedServices }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Related Services"
          subtitle="Explore other ways we can help your organization"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {relatedServices.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-light mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 font-light">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-gray-700 inline-flex items-center hover:text-gray-900 font-light"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
