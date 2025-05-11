
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThankYouHeader from './results/ThankYouHeader';
import DetailedResultsAccordion from './results/DetailedResultsAccordion';
import ReadinessLevelDisplay from './results/ReadinessLevelDisplay';
import ResultsSummary from './results/ResultsSummary';
import NextStepsSection from './results/NextStepsSection';
import { getReadinessLevel, getDetailedResults } from './results/utils';

interface AssessmentResult {
  score: number;
  answers: {
    question1: number;
    question2: number[];
    question3: number;
    question4: number;
    question5: number;
    question6: number[];
    question7: number;
    question8: number;
    question9: number;
    question10: number[];
  };
  resetAssessment: () => void;
  userData: {
    name: string;
    email: string;
  };
}

const CoCreateAssessmentResults: React.FC<AssessmentResult> = ({ 
  score, 
  answers, 
  resetAssessment, 
  userData 
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
  const readiness = getReadinessLevel(score);
  const detailedResults = getDetailedResults(answers);
  const maxTotalScore = 30;
  const scorePercentage = Math.round((score / maxTotalScore) * 100);

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <ThankYouHeader userName={userData.name} userEmail={userData.email} />
      
      <div className="bg-beige-50 rounded-lg p-6 mb-6">
        <ReadinessLevelDisplay 
          readiness={readiness} 
          scorePercentage={scorePercentage} 
        />
        
        <DetailedResultsAccordion 
          score={score} 
          maxTotalScore={maxTotalScore}
          detailedResults={detailedResults}
          isAccordionOpen={isAccordionOpen}
          setIsAccordionOpen={setIsAccordionOpen}
        />
      </div>
      
      <ResultsSummary 
        readinessDescription={readiness.description}
        userEmail={userData.email}
      />
      
      <NextStepsSection />
    </div>
  );
};

export default CoCreateAssessmentResults;
