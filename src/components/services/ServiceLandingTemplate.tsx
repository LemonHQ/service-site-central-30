
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from './landing/HeroSection';
import FeaturesSection, { ServiceFeature } from './landing/FeaturesSection';
import BenefitsSection from './landing/BenefitsSection';
import ProcessSection, { ServiceProcess } from './landing/ProcessSection';
import RelatedServicesSection from './landing/RelatedServicesSection';
import FaqSection from './landing/FaqSection';
import CtaSection from './landing/CtaSection';
import { LucideIcon } from 'lucide-react';

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
      
      <BenefitsSection benefits={benefits} />
      
      <ProcessSection processes={processes} />
      
      <RelatedServicesSection relatedServices={relatedServices} />
      
      {faqs && faqs.length > 0 && <FaqSection faqs={faqs} />}
      
      <CtaSection ctaText={ctaText} ctaLink={ctaLink} />
    </MainLayout>
  );
};

export default ServiceLandingTemplate;
