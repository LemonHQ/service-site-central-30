import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { 
  getSubServiceBySlug, 
  getMainServiceBySlug,
  getRelatedServices,
  SubService,
  MainService
} from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';

const SubServicePage: React.FC = () => {
  const { serviceSlug, subServiceSlug } = useParams<{ 
    serviceSlug: string, 
    subServiceSlug: string 
  }>();
  
  const subService = getSubServiceBySlug(subServiceSlug || '');
  const parentService = subService ? getMainServiceBySlug(serviceSlug || '') : null;
  
  if (!subService || !parentService) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <h1>Service not found</h1>
          <p>The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services">
            <Button className="mt-4">View All Services</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  // Get related case studies from parent service
  const relatedCaseStudies = parentService.relatedCaseStudies 
    ? caseStudies.filter(cs => parentService.relatedCaseStudies?.includes(cs.id)).slice(0, 3)
    : caseStudies.slice(0, 3);
  
  // Get related insights from parent service
  const relatedInsights = parentService.relatedInsights
    ? blogPosts.filter(post => parentService.relatedInsights?.includes(post.id)).slice(0, 3)
    : blogPosts.slice(0, 3);
    
  // Get related services
  const relatedServices = getRelatedServices(subService.slug, 3);

  const Icon = subService.icon;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Link to="/services" className="text-sm text-gray-500 hover:text-brand-600">Services</Link>
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                <Link to={`/services/${parentService.slug}`} className="text-sm text-gray-500 hover:text-brand-600">{parentService.title}</Link>
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
                <span className="text-sm text-gray-700">{subService.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{subService.title}</h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700">{subService.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-brand-600 hover:bg-brand-700 text-white">
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/lead-qualification">
                  <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={parentService.coverImage} 
                  alt={subService.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-100 p-2 rounded mr-3">
                      {Icon && <Icon className="h-5 w-5 text-brand-600" />}
                    </div>
                    <h3 className="font-semibold text-gray-900">{subService.title}</h3>
                  </div>
                  
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {subService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-2 w-2 bg-brand-500 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {subService.process && subService.process.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Process"
              subtitle="How we deliver exceptional results for our clients"
              centered
            />
            
            <div className="mt-12 max-w-4xl mx-auto">
              {subService.process.map((step, index) => (
                <div key={index} className="flex mb-8">
                  <div className="mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600 font-bold text-xl">
                      {index + 1}
                    </div>
                    {index < subService.process!.length - 1 && (
                      <div className="w-0.5 h-20 bg-gray-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital experience?</h2>
            <p className="text-xl mb-8 text-brand-100">
              Let's discuss how our {subService.title} services can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-brand-600 hover:bg-brand-100">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/lead-qualification">
                <Button variant="outline" className="text-white border-white hover:bg-brand-700">
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

export default SubServicePage;
