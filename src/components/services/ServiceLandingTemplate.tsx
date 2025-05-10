
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, ArrowRight, LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ServiceProcess {
  title: string;
  description: string;
  number: number;
}

export interface ServiceLandingProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  features: ServiceFeature[];
  processes: ServiceProcess[];
  benefits: string[];
  heroImage: string;
  isAiHeroImage?: boolean;
  relatedServices: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const ServiceLandingTemplate: React.FC<ServiceLandingProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  features,
  processes,
  benefits,
  heroImage,
  isAiHeroImage = false,
  relatedServices,
  faqs = []
}) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-600 mb-4">
                {title}
              </h1>
              <p className="text-xl text-brand-400 mb-8">{subtitle}</p>
              <div className="text-gray-600 text-lg mb-8 space-y-4">
                <p>{description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ctaLink}>
                  <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                    {ctaText}
                  </Button>
                </Link>
                {secondaryCtaText && secondaryCtaLink && (
                  <Link to={secondaryCtaLink}>
                    <Button size="lg" variant="outline" className="border-brand-300 text-brand-500">
                      {secondaryCtaText}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={heroImage}
                alt={`${title} - Hero Image`}
                className={`rounded-xl shadow-lg max-h-[500px] object-cover ${isAiHeroImage ? 'border-2 border-brand-300' : ''}`}
              />
              {isAiHeroImage && (
                <div className="absolute bottom-2 right-2 bg-brand-100 text-brand-600 text-xs px-2 py-1 rounded-md opacity-80">
                  AI Generated
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Features"
            subtitle="Explore how our solution creates value for your organization"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {feature.icon && <feature.icon className="h-10 w-10 text-brand-400 mb-4" />}
                  <h3 className="text-xl font-semibold mb-2 text-brand-600">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefits"
            subtitle="Why organizations choose our solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Approach"
            subtitle="A proven methodology to deliver exceptional results"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-6 text-brand-600 text-2xl font-bold">
                    {process.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-600">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full transform -translate-x-1/2 z-0">
                    <ArrowRight className="w-10 h-10 text-brand-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-beige-50">
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
                  <h3 className="text-xl font-semibold mb-2 text-brand-600">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="text-brand-500 inline-flex items-center hover:text-brand-600"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our services"
              centered
            />
            
            <div className="max-w-3xl mx-auto mt-8 space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold mb-2 text-brand-600">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-600 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ctaLink}>
              <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
                {ctaText}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-brand-300 text-brand-500">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServiceLandingTemplate;
