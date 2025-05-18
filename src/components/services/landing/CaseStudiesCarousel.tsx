
import React from 'react';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import CarouselSection from './CarouselSection';

interface CaseStudiesCarouselProps {
  limit?: number;
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({ limit = 6 }) => {
  return (
    <CarouselSection
      title="Case Studies"
      subtitle="See how we've helped organizations achieve their goals"
      items={caseStudies}
      renderItem={(caseStudy) => <CaseStudyCard caseStudy={caseStudy} />}
      limit={limit}
    />
  );
};

export default CaseStudiesCarousel;
