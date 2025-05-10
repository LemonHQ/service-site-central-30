
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import BlogCard from '@/components/blog/BlogCard';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';
import { servicesData, serviceRelations, ServiceData } from '@/data/servicesData';
import { 
  CheckCircle, FileChartColumn, BookOpenText, Award, Settings
} from 'lucide-react';
import CtaSection from '@/components/ui/CtaSection';

interface ServicePageProps {
  serviceId: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const serviceData = servicesData[serviceId as keyof typeof servicesData];
  const relationData = serviceRelations[serviceId as keyof typeof serviceRelations];
  
  if (!serviceData) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const { title, description, heroText, benefits, process, icon: Icon } = serviceData;

  const relatedCaseStudies = relationData?.caseStudies?.map(id => 
    caseStudies.find(study => study.id === id)
  ).filter(Boolean) || [];

  const relatedBlogs = relationData?.blogs?.map(id => 
    blogPosts?.find(post => post.id === id)
  ).filter(Boolean) || [];

  // Get other services to recommend (excluding current one)
  const otherServices = Object.entries(servicesData)
    .filter(([id]) => id !== serviceId)
    .slice(0, 3)
    .map(([id, service]) => ({ id, ...service }));

  return (
    <MainLayout>
      <section className="relative">
        <AspectRatio ratio={3/1} className="w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/70 z-10"></div>
          <img 
            src={relationData?.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {Icon && <Icon size={56} className="mb-6 text-brand-200" />}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {heroText}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-white text-brand-600 hover:bg-brand-100">
                      Request a Consultation
                    </Button>
                  </Link>
                  <Link to="#approach">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      Learn Our Approach
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <BookOpenText className="w-8 h-8 text-brand-500 mr-3" />
                <h2 className="text-3xl font-bold">Service Overview</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">{description}</p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-brand-400 mr-3 flex-shrink-0 mt-1" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-brand-400 hover:bg-brand-500">
                  Discuss Your Needs
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={relationData?.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-brand-500 mr-3" />
              <h2 className="text-3xl font-bold">Our Approach</h2>
            </div>
            <p className="text-lg text-gray-600">
              How we deliver exceptional results through our proven methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-brand-500 font-semibold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <FileChartColumn className="w-8 h-8 text-brand-500 mr-3" />
              <h2 className="text-3xl font-bold">Related Case Studies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCaseStudies.map((caseStudy) => (
                caseStudy && <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/case-studies">
                <Button variant="outline">View All Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <BookOpenText className="w-8 h-8 text-brand-500 mr-3" />
              <h2 className="text-3xl font-bold">Related Insights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((post) => (
                post && <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/blog">
                <Button variant="outline">Read Our Blog</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {relationData?.whyChooseUs?.length > 0 && (
        <section className="py-20 bg-brand-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-brand-200 mr-3" />
                <h2 className="text-3xl font-bold">Why Choose Us</h2>
              </div>
              <p className="text-lg text-white/80">
                What makes our {title.toLowerCase()} service stand out from the rest
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relationData?.whyChooseUs?.map((reason, index) => (
                <div key={index} className="flex items-start bg-white/10 backdrop-blur p-6 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-brand-200 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Related Services" 
            subtitle="Enhance your product strategy with these complementary services"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="block bg-ivory-100 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform border border-beige-300/30"
              >
                <div className="mb-4">
                  {service.icon && <service.icon className="w-10 h-10 text-teal-400" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-400">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection 
        title={`Ready to Start ${title}?`}
        subtitle="Schedule a consultation with our product experts to discuss your specific needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </MainLayout>
  );
};

export default ServicePage;
