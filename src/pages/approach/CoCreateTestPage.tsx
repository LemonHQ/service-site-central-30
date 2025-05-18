
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CaptureAttentionHero from '@/components/approach/co-create-closer/CaptureAttentionHero';
import ProblemSection from '@/components/approach/co-create-closer/ProblemSection';
import SolutionSection from '@/components/approach/co-create-closer/SolutionSection';
import ProofSection from '@/components/approach/co-create-closer/ProofSection';
import ResponseSection from '@/components/approach/co-create-closer/ResponseSection';
import FrictionReducerFAQ from '@/components/approach/co-create-closer/FrictionReducerFAQ';
import ProcessSection from '@/components/approach/co-create-closer/ProcessSection';
import InsightsCarousel from '@/components/services/landing/InsightsCarousel';

const CoCreateTestPage = () => {
  return (
    <MainLayout pageTitle="Co-Create [Test] - Hormozi Framework">
      <CaptureAttentionHero />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ProofSection />
      <FrictionReducerFAQ />
      <ResponseSection />
      <InsightsCarousel limit={3} />
    </MainLayout>
  );
};

export default CoCreateTestPage;
