
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import InsightsCarousel from '@/components/services/landing/InsightsCarousel';
import HeroSection from '@/components/approach/co-create/HeroSection';
import BenefitsSection from '@/components/approach/co-create/BenefitsSection';
import ServicesSection from '@/components/approach/co-create/ServicesSection';
import CaseStudySection from '@/components/approach/co-create/CaseStudySection';
import FaqSection from '@/components/approach/co-create/FaqSection';
import CtaSection from '@/components/approach/co-create/CtaSection';

const CoCreateLegacyPage = () => {
  return (
    <MainLayout pageTitle="Co-Create Legacy - Previous Version">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <CaseStudySection />
      <InsightsCarousel limit={3} />
      <FaqSection />
      <CtaSection />
    </MainLayout>
  );
};

export default CoCreateLegacyPage;
