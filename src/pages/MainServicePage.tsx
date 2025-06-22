
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { getMainServiceBySlug, getSubServicesByParentId } from '@/data/services';

const MainServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getMainServiceBySlug(serviceSlug || '');
  
  // If service not found, show 404
  if (!service) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Service not found</h1>
          <p className="text-gray-600 font-light mb-4">The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services">
            <Button className="font-light">View All Services</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  // Get sub-services
  const subServices = getSubServicesByParentId(service.id);
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">{service.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light">{service.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="font-light">
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/lead-qualification">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-light">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1">
              <img 
                src={service.coverImage} 
                alt={service.title}
                className="rounded-xl shadow-lg w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sub-services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Specialized Services"
            subtitle={`Explore our ${service.title} services tailored to meet your needs`}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {subServices.map((subService) => {
              const Icon = subService.icon;
              
              return (
                <Link 
                  key={subService.id}
                  to={`/services/${service.slug}/${subService.slug}`}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="bg-gray-50 p-3 rounded-lg w-fit mb-4">
                    {Icon && <Icon className="h-6 w-6 text-gray-600" />}
                  </div>
                  <h3 className="text-xl font-normal mb-2 group-hover:text-gray-700 transition-colors text-gray-800">{subService.title}</h3>
                  <p className="text-gray-600 mb-4 font-light">{subService.shortDescription}</p>
                  
                  <div className="flex items-center text-gray-700 font-light">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to transform your digital experience?</h2>
            <p className="text-xl mb-8 text-gray-200 font-light">
              Let's discuss how our {service.title} services can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-gray-800 hover:bg-gray-100 font-light">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/lead-qualification">
                <Button variant="outline" className="text-white border-white hover:bg-gray-700 font-light">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MainServicePage;
