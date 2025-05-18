
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import RapidIterationHero from '@/components/approach/co-innovate/RapidIterationHero';
import TraditionalProblemSection from '@/components/approach/co-innovate/TraditionalProblemSection';
import RapidInnovationResponseSection from '@/components/approach/co-innovate/RapidInnovationResponseSection';
import RapidIterationProcessSection from '@/components/approach/co-innovate/RapidIterationProcessSection';
import RapidIterationProofSection from '@/components/approach/co-innovate/RapidIterationProofSection';
import TargetAudienceSection from '@/components/approach/co-innovate/TargetAudienceSection';
import WebinarCtaSection from '@/components/approach/co-innovate/WebinarCtaSection';
import RapidIterationFAQ from '@/components/approach/co-innovate/RapidIterationFAQ';
import CaseStudiesCarousel from '@/components/services/landing/CaseStudiesCarousel';
import InsightsCarousel from '@/components/services/landing/InsightsCarousel';

const CoInnovatePage: React.FC = () => {
  return (
    <MainLayout>
      <RapidIterationHero />
      <TraditionalProblemSection />
      <RapidInnovationResponseSection />
      <RapidIterationProcessSection />
      <RapidIterationProofSection />
      <TargetAudienceSection />
      <CaseStudiesCarousel title="Innovation Success Stories" subtitle="See how our rapid innovation approach has helped these organizations" />
      <InsightsCarousel title="Innovation Insights" subtitle="Expert perspectives on accelerated digital innovation" />
      <RapidIterationFAQ />
      <WebinarCtaSection />
    </MainLayout>
  );
};

export default CoInnovatePage;
