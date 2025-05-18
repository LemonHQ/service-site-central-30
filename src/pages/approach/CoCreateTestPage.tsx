
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/approach/co-create/HeroSection';
import BenefitsSection from '@/components/approach/co-create/BenefitsSection';
import ServicesSection from '@/components/approach/co-create/ServicesSection';
import CaseStudySection from '@/components/approach/co-create/CaseStudySection';
import FaqSection from '@/components/approach/co-create/FaqSection';
import CtaSection from '@/components/approach/co-create/CtaSection';
import CaseStudiesCarousel from '@/components/services/landing/CaseStudiesCarousel';
import InsightsCarousel from '@/components/services/landing/InsightsCarousel';

const CoCreateTestPage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <CaseStudySection />
      <CaseStudiesCarousel title="Client Success Stories" subtitle="See how our co-creation approach has helped these organizations" />
      <InsightsCarousel title="Latest Co-Creation Insights" subtitle="Expert perspectives on collaborative digital innovation" />
      <FaqSection />
      <CtaSection />
    </MainLayout>
  );
};

export default CoCreateTestPage;
