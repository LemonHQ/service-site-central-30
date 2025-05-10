
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from './landing/HeroSection';
import FeaturesSection, { ServiceFeature } from './landing/FeaturesSection';
import BenefitsSection from './landing/BenefitsSection';
import RelatedServicesSection from './landing/RelatedServicesSection';
import FaqSection from './landing/FaqSection';
import CtaSection from './landing/CtaSection';
import IndustryQuotePanel from './landing/IndustryQuotePanel';
import FeaturedCaseStudyPanel from './landing/FeaturedCaseStudyPanel';
import ConsultingPanel from './landing/ConsultingPanel';
import CaseStudiesCarousel from './landing/CaseStudiesCarousel';
import InsightsCarousel from './landing/InsightsCarousel';
import { caseStudies } from '@/data/caseStudies';
import { QuoteData } from '@/data/quotes';

export interface ServiceLandingProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  features: ServiceFeature[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  benefits: string[];
  heroImage: string;
  isAiHeroImage?: boolean;
  relatedServices: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  quotePanel?: QuoteData;
  featuredCaseStudy?: string; // ID of the featured case study
  showConsultingPanel?: boolean;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  children?: React.ReactNode;
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
  featuresTitle,
  featuresSubtitle,
  benefits,
  heroImage,
  isAiHeroImage = false,
  relatedServices,
  quotePanel,
  featuredCaseStudy,
  showConsultingPanel = false,
  faqs = [],
  children
}) => {
  // Find the selected case study if an ID is provided
  const selectedCaseStudy = featuredCaseStudy 
    ? caseStudies.find(cs => cs.id === featuredCaseStudy) 
    : null;

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
      
      <FeaturesSection 
        features={features} 
        title={featuresTitle}
        subtitle={featuresSubtitle}
      />
      
      {quotePanel && (
        <IndustryQuotePanel
          quote={quotePanel.quote}
          author={quotePanel.author}
          authorTitle={quotePanel.authorTitle}
          imageUrl={quotePanel.imageUrl}
          sourceText={quotePanel.sourceText}
          sourceUrl={quotePanel.sourceUrl}
        />
      )}

      {children}
      
      <BenefitsSection benefits={benefits} />
      
      {selectedCaseStudy && (
        <FeaturedCaseStudyPanel caseStudy={selectedCaseStudy} />
      )}
      
      <RelatedServicesSection relatedServices={relatedServices} />

      <CaseStudiesCarousel />
      
      <InsightsCarousel />
      
      {/* Show consulting panel above FAQs */}
      {showConsultingPanel && (
        <ConsultingPanel />
      )}
      
      {faqs && faqs.length > 0 && <FaqSection faqs={faqs} />}
      
      <CtaSection ctaText={ctaText} ctaLink={ctaLink} />
    </MainLayout>
  );
};

export default ServiceLandingTemplate;
