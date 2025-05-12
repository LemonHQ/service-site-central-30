
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { CaseStudy } from '@/data/caseStudies';

interface RelatedCaseStudiesSectionProps {
  relatedCaseStudies: CaseStudy[];
}

const RelatedCaseStudiesSection: React.FC<RelatedCaseStudiesSectionProps> = ({ relatedCaseStudies }) => {
  if (relatedCaseStudies.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Related Case Studies"
          subtitle="Explore other success stories in this industry"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {relatedCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudiesSection;
