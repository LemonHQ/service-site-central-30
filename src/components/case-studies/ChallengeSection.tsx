
import React from 'react';
import { Award } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';
import { H3 } from '@/components/ui/Typography';

interface ChallengeSectionProps {
  caseStudy: CaseStudy;
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ caseStudy }) => {
  return (
    <section className="mb-16" aria-label="Project overview">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Challenge */}
        <article className="bg-gray-50 rounded-lg p-6 lg:p-8">
          <h3 className="mb-4 text-2xl font-semibold text-foreground" id="challenge-section">The Challenge</h3>
          <div 
            className="text-gray-700 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
            aria-labelledby="challenge-section"
          ></div>
        </article>
        
        {/* Solution */}
        <article className="bg-brand-50 rounded-lg p-6 lg:p-8">
          <h3 className="mb-4 text-2xl font-semibold text-foreground" id="solution-section">Our Solution</h3>
          <div 
            className="text-gray-700 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
            aria-labelledby="solution-section"
          ></div>
        </article>
        
        {/* Results */}
        <article className="bg-green-50 rounded-lg p-6 lg:p-8">
          <h3 className="mb-4 text-2xl font-semibold text-foreground flex items-center" id="results-section">
            <Award className="mr-2 h-5 w-5 text-green-600" aria-hidden="true" /> 
            Results
          </h3>
          <div 
            className="text-gray-700 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.results }}
            aria-labelledby="results-section"
          ></div>
        </article>
      </div>
    </section>
  );
};

export default ChallengeSection;
