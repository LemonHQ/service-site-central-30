
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import { mainServices, subServices } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';
import { SectionTitle } from '@/components/ui/Typography';

const Services = () => {
  return (
    <MainLayout>
      <PageHero
        title="Our Services"
        subtitle="We offer a comprehensive suite of digital product services to help enterprises validate, design, launch, and scale products that drive business growth."
        backgroundVariant="brand"
      />

      <ContentSection paddingVariant="normal">
        <SectionHeading
          title="What We Do"
          subtitle="Our main service areas helping enterprises with their digital transformation journey"
          centered
        />
        
        <div className="mt-12 space-y-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const relatedSubServices = subServices.filter(s => s.parentId === service.id);
            
            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <img 
                    src={service.coverImage} 
                    alt={service.title}
                    className="rounded-xl shadow-md w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="bg-brand-50 p-3 rounded-lg w-fit mb-4">
                    {Icon && <Icon className="h-6 w-6 text-brand-600" />}
                  </div>
                  
                  <SectionTitle className="mb-4">{service.title}</SectionTitle>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {relatedSubServices.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Specialized Services:</h4>
                      <ul className="space-y-2">
                        {relatedSubServices.map((subService) => (
                          <li key={subService.id}>
                            <Link 
                              to={`/services/${service.slug}/${subService.slug}`}
                              className="flex items-center text-brand-600 hover:text-brand-700"
                            >
                              <div className="h-1.5 w-1.5 bg-brand-500 rounded-full mr-2"></div>
                              <span>{subService.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Link 
                    to={`/services/${service.slug}`}
                    className="flex items-center text-brand-600 font-medium hover:text-brand-700"
                  >
                    <span>Learn more about {service.title}</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      <ContentSection backgroundVariant="brand" paddingVariant="large">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle className="mb-6 text-white">Ready to transform your digital experience?</SectionTitle>
          <p className="text-xl mb-8 text-brand-100">
            Let's discuss how our services can help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="px-8 py-3 bg-white text-brand-600 rounded-md font-medium hover:bg-brand-100 transition-colors">
                Get in Touch
              </button>
            </Link>
            <Link to="/lead-qualification">
              <button className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-brand-700 transition-colors">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default Services;
