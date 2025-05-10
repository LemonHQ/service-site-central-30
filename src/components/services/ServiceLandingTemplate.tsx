
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from './landing/HeroSection';
import FeaturesSection, { ServiceFeature } from './landing/FeaturesSection';
import BenefitsSection from './landing/BenefitsSection';
import RelatedServicesSection from './landing/RelatedServicesSection';
import FaqSection from './landing/FaqSection';
import CtaSection from './landing/CtaSection';
import QuotePanel from './landing/QuotePanel';
import { LucideIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BlogCard from '@/components/blog/BlogCard';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { blogPosts } from '@/data/blogPosts';
import { caseStudies } from '@/data/caseStudies';
import SectionHeading from '@/components/ui/SectionHeading';

export interface ServiceLandingProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  features: ServiceFeature[];
  benefits: string[];
  heroImage: string;
  isAiHeroImage?: boolean;
  relatedServices: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  quotePanel?: {
    quote: string;
    author?: string;
    authorTitle?: string;
    imageUrl?: string;
    sourceText?: string;
    sourceUrl?: string;
  };
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
  benefits,
  heroImage,
  isAiHeroImage = false,
  relatedServices,
  quotePanel,
  faqs = []
}) => {
  // Get a selection of case studies and blog posts
  const featuredCaseStudies = caseStudies.slice(0, 6);
  const featuredBlogPosts = blogPosts.slice(0, 6);

  return (
    <MainLayout>
      <HeroSection
        title={title}
        subtitle={subtitle}
        description={description}
        ctaText={ctaText}
        ctaLink={ctaLink}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaLink={secondaryCtaLink}
        heroImage={heroImage}
        isAiHeroImage={isAiHeroImage}
      />
      
      <FeaturesSection features={features} />
      
      {quotePanel && (
        <QuotePanel
          quote={quotePanel.quote}
          author={quotePanel.author}
          authorTitle={quotePanel.authorTitle}
          imageUrl={quotePanel.imageUrl}
          sourceText={quotePanel.sourceText}
          sourceUrl={quotePanel.sourceUrl}
        />
      )}
      
      <BenefitsSection benefits={benefits} />
      
      <RelatedServicesSection relatedServices={relatedServices} />

      {/* Case Studies Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Case Studies" 
            subtitle="See how we've helped organizations achieve their goals" 
            centered
          />
          
          <div className="mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredCaseStudies.map((caseStudy) => (
                  <CarouselItem key={caseStudy.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <CaseStudyCard caseStudy={caseStudy} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* Insights Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Insights" 
            subtitle="Latest thinking on digital transformation" 
            centered
          />
          
          <div className="mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredBlogPosts.map((post) => (
                  <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <BlogCard post={post} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {faqs && faqs.length > 0 && <FaqSection faqs={faqs} />}
      
      <CtaSection ctaText={ctaText} ctaLink={ctaLink} />
    </MainLayout>
  );
};

export default ServiceLandingTemplate;
