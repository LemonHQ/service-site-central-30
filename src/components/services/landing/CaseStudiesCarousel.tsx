
import React from 'react';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import CarouselSection from './CarouselSection';

interface CaseStudiesCarouselProps {
  limit?: number;
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({ limit = 6 }) => {
  const featuredCaseStudies = caseStudies.slice(0, limit);
  
  return (
    <CarouselSection
      title="Case Studies"
      subtitle="See how we've helped organizations achieve their goals"
      items={featuredCaseStudies}
      renderItem={(caseStudy) => <CaseStudyCard caseStudy={caseStudy} />}
    />
  );
};

export default CaseStudiesCarousel;
