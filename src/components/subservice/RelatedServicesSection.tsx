
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/SectionHeading';
import { MainService, SubService } from '@/data/services';

interface RelatedServicesSectionProps {
  relatedServices: (MainService | SubService)[];
}

const RelatedServicesSection: React.FC<RelatedServicesSectionProps> = ({ relatedServices }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Related Services"
          subtitle="Explore other services that might be relevant to your needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {relatedServices.map((relService: MainService | SubService) => {
            const RelIcon = relService.icon;
            const isMainService = 'subServices' in relService;
            const linkPath = isMainService 
              ? `/services/${relService.slug}`
              : `/services/${(relService as SubService).parentId}/${relService.slug}`;
            
            return (
              <Link 
                to={linkPath}
                key={relService.id}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition-all"
              >
                <div className="bg-brand-50 p-3 rounded-lg w-fit mb-4">
                  {RelIcon && <RelIcon className="h-6 w-6 text-brand-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{relService.title}</h3>
                <p className="text-gray-600 mb-4">{relService.shortDescription}</p>
                
                <div className="flex items-center text-brand-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-brand-600 text-brand-600">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
