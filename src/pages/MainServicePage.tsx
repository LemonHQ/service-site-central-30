
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { 
  getMainServiceBySlug, 
  getSubServicesByParentId,
  getRelatedServices,
  MainService,
  SubService
} from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import BlogCard from '@/components/blog/BlogCard';

const MainServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getMainServiceBySlug(serviceSlug || '');
  
  if (!service) {
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
  
  const subServices = getSubServicesByParentId(service.id);
  
  // Get related case studies
  const relatedCaseStudies = service.relatedCaseStudies 
    ? caseStudies.filter(cs => service.relatedCaseStudies?.includes(cs.id)).slice(0, 3)
    : caseStudies.slice(0, 3);
  
  // Get related insights
  const relatedInsights = service.relatedInsights
    ? blogPosts.filter(post => service.relatedInsights?.includes(post.id)).slice(0, 3)
    : blogPosts.slice(0, 3);
    
  // Get related services
  const relatedServices = getRelatedServices(service.slug, 3);

  const Icon = service.icon;

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
                <span className="text-sm text-gray-700">{service.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{service.title}</h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700">{service.description}</p>
              
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
                  src={service.coverImage} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-100 p-2 rounded mr-3">
                      {Icon && <Icon className="h-5 w-5 text-brand-600" />}
                    </div>
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
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

      {/* Sub-Services Section */}
      {subServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={`${service.title} Services`}
              subtitle="Our comprehensive suite of services to address your specific needs"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {subServices.map((subService) => {
                const SubIcon = subService.icon;
                return (
                  <Link 
                    to={`/services/${service.slug}/${subService.slug}`} 
                    key={subService.id}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-brand-200 transition-all"
                  >
                    <div className="bg-brand-50 p-3 rounded-lg w-fit mb-4">
                      {SubIcon && <SubIcon className="h-6 w-6 text-brand-600" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{subService.title}</h3>
                    <p className="text-gray-600 mb-4">{subService.shortDescription}</p>
                    
                    <div className="flex items-center text-brand-600 font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Related Case Studies"
              subtitle="See how we've helped organizations achieve their goals"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/case-studies">
                <Button variant="outline" className="border-brand-600 text-brand-600">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Insights Section */}
      {relatedInsights.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Related Insights"
              subtitle="Explore the latest trends, strategies, and best practices"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedInsights.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/insights">
                <Button variant="outline" className="border-brand-600 text-brand-600">
                  View All Insights
                </Button>
              </Link>
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
              Let's discuss how our {service.title} services can help your organization achieve its goals.
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

export default MainServicePage;
