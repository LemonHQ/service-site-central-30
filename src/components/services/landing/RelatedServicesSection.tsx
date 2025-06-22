
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { H4, Paragraph } from '@/components/ui/Typography';

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
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Related Services"
          subtitle="Explore other ways we can help your organization"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {relatedServices.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardContent className="p-8">
                <H4 className="mb-4 text-gray-900">{service.title}</H4>
                <Paragraph className="mb-6 text-gray-600">{service.description}</Paragraph>
                <Link 
                  to={service.link} 
                  className="text-brand-600 inline-flex items-center hover:text-brand-700 font-medium transition-colors"
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
