
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CtaSection from '../components/ui/CtaSection';
import { servicesData } from '@/data/servicesData';

const Services = () => {
  console.log("Rendering Services component");
  
  // Group services into main and secondary categories
  const mainServices = [
    'unify-brand-experiences',
    'digitalize-product-lines',
    'expand-product-offerings',
    'scale-digital-experiences',
    'pilot-emerging-tech',
    'standardize-digital-portfolio',
  ];

  const secondaryServices = [
    'validating-product-ideas',
    'ideating-product-concepts',
    'designing-experiences',
    'launching-products',
    'scaling-products',
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-brand-700">What We Do</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Comprehensive digital product services for enterprise brands seeking to innovate and transform.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Core Service Areas" 
            subtitle="Strategic services designed to help enterprises navigate their digital transformation journey."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((serviceId) => {
              const service = servicesData[serviceId];
              return (
                <ServiceCard
                  key={serviceId}
                  title={service.title}
                  description={service.description}
                  link={`/services/${serviceId}`}
                  icon={service.icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Additional Services" 
            subtitle="Specialized services that complement our core offerings and provide targeted solutions for specific needs."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryServices.map((serviceId) => {
              const service = servicesData[serviceId];
              return (
                <ServiceCard
                  key={serviceId}
                  title={service.title}
                  description={service.description}
                  link={`/services/${serviceId}`}
                  icon={service.icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-700">
                Our Product Development Methodology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We approach product development as a systematic yet creative process, combining proven methodologies with innovative thinking to drive results.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">1</span>
                    Discover & Define
                  </h3>
                  <p className="text-gray-600 ml-11">Research, stakeholder interviews, and problem definition to establish clear goals.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">2</span>
                    Ideate & Conceptualize
                  </h3>
                  <p className="text-gray-600 ml-11">Generate innovative solutions through collaborative workshops and design thinking.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">3</span>
                    Prototype & Validate
                  </h3>
                  <p className="text-gray-600 ml-11">Build and test rapid prototypes to validate concepts with real users.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">4</span>
                    Build & Launch
                  </h3>
                  <p className="text-gray-600 ml-11">Develop production-ready products with thorough quality assurance and strategic launch planning.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">5</span>
                    Measure & Optimize
                  </h3>
                  <p className="text-gray-600 ml-11">Continuous improvement through data analysis, user feedback, and performance optimization.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-brand-200 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-brand-300 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Transform Your Products?"
        subtitle="Let's discuss how our services can address your specific challenges and opportunities."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </MainLayout>
  );
};

export default Services;
