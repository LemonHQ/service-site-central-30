
import React from 'react';
import { Award } from 'lucide-react';
import { CaseStudy } from '@/data/caseStudies';

interface ChallengeSectionProps {
  caseStudy: CaseStudy;
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ caseStudy }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {/* Challenge */}
      <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
        <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
        <div 
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
        ></div>
      </div>
      
      {/* Solution */}
      <div className="bg-brand-50 rounded-lg p-6 lg:p-8">
        <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
        <div 
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
        ></div>
      </div>
      
      {/* Results */}
      <div className="bg-green-50 rounded-lg p-6 lg:p-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-green-600" /> Results
        </h3>
        <div 
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: caseStudy.results }}
        ></div>
      </div>
    </div>
  );
};

export default ChallengeSection;
