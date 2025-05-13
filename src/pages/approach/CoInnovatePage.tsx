
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import RapidIterationHero from '@/components/approach/co-innovate/RapidIterationHero';
import TraditionalProblemSection from '@/components/approach/co-innovate/TraditionalProblemSection';
import RapidIterationSolutionSection from '@/components/approach/co-innovate/RapidIterationSolutionSection';
import TargetAudienceSection from '@/components/approach/co-innovate/TargetAudienceSection';
import RapidIterationProcessSection from '@/components/approach/co-innovate/RapidIterationProcessSection';
import RapidIterationFAQ from '@/components/approach/co-innovate/RapidIterationFAQ';
import RapidIterationResponseSection from '@/components/approach/co-innovate/RapidIterationResponseSection';
import InsightsCarousel from '@/components/services/landing/InsightsCarousel';
import WebinarCtaSection from '@/components/approach/co-innovate/WebinarCtaSection';

const CoInnovatePage = () => {
  return (
    <MainLayout pageTitle="Co-Innovate - Rapid Product Innovation Framework">
      <RapidIterationHero />
      <TraditionalProblemSection />
      <RapidIterationSolutionSection />
      <TargetAudienceSection />
      <RapidIterationProcessSection />
      <RapidIterationFAQ />
      <RapidIterationResponseSection />
      <WebinarCtaSection />
      <InsightsCarousel limit={3} />
    </MainLayout>
  );
};

export default CoInnovatePage;
