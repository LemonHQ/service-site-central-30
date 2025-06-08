
import React, { useMemo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import CarouselSection from './CarouselSection';
import { shuffleArray } from '@/lib/utils';

interface CaseStudiesCarouselProps {
  limit?: number;
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({ limit = 6 }) => {
  // Shuffle case studies once when component mounts
  const shuffledCaseStudies = useMemo(() => shuffleArray(caseStudies), []);
  
  return (
    <CarouselSection
      title="Case Studies"
      subtitle="See how we've helped organizations achieve their goals"
      items={shuffledCaseStudies}
      renderItem={(caseStudy) => <CaseStudyCard caseStudy={caseStudy} />}
      limit={limit}
      autoplay={true}
    />
  );
};

export default CaseStudiesCarousel;
