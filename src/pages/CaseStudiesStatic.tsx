import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';

const CaseStudiesStatic: React.FC = () => {
  return (
    <MainLayout>
      <PageHero
        title="Case Studies"
        subtitle="Explore how we've helped organizations across industries transform their digital capabilities and achieve remarkable results."
      />
      
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default CaseStudiesStatic;