
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CircleCheck, ArrowRight, Download, Sparkles } from 'lucide-react';
import { AssessmentData } from './assessmentSchema';
import { MAX_SCORE } from './assessmentConstants';

interface ResultsDisplayProps {
  assessmentData: AssessmentData;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ assessmentData }) => {
  const { scores, name } = assessmentData;
  
  // Function to get background color based on score
  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 75) return "bg-green-500";
    if (percentage >= 50) return "bg-yellow-500";
    if (percentage >= 25) return "bg-orange-400";
    return "bg-red-500";
  };
  
  // Function to get category description
  const getCategoryDescription = (category: string) => {
    switch(category) {
      case "Ready for co-creation":
        return "Your organization shows strong capability for collaborative product innovation. You're positioned well for effective co-creation partnerships.";
      case "Strong foundation":
        return "You have good fundamentals in place but could benefit from more structured co-creation approaches to accelerate innovation.";
      case "Building momentum":
        return "You're making progress in key areas but have some gaps to address before realizing the full benefits of co-creation.";
      case "Early stage":
        return "Your organization is at the beginning of its co-creation journey, with significant opportunity to build cross-functional innovation capabilities.";
      default:
        return "Your organization shows potential for growth in collaborative innovation capabilities.";
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <div className="flex items-center justify-center mb-8">
        <CircleCheck className="h-16 w-16 text-green-500 mr-4" />
        <div>
          <h2 className="text-2xl font-semibold">Assessment Complete</h2>
          <p className="text-gray-600">Thank you for taking the assessment, {name}!</p>
        </div>
      </div>

      <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-brand-600">Your Co-Create Readiness Score</h3>
            <p className="text-brand-500">
              Score Category: <span className="font-semibold">{scores.scoreCategory}</span>
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-700">
                {scores.totalScore}
                <span className="text-xl text-brand-400">/{MAX_SCORE}</span>
              </div>
              <div className="text-sm text-brand-500">Total Score</div>
            </div>
          </div>
        </div>
        
        <p className="mb-6">
          {getCategoryDescription(scores.scoreCategory)}
        </p>
        
        <h4 className="font-semibold mb-3">Score Breakdown</h4>
        <div className="space-y-3">
          <ScoreBar label="Offering Portfolio" score={scores.offeringPortfolioScore} maxScore={3} />
          <ScoreBar label="Exploration Planning" score={scores.explorationPlanningScore} maxScore={4} />
          <ScoreBar label="Customer Segments" score={scores.customerSegmentsScore} maxScore={3} />
          <ScoreBar label="Offerings Confidence" score={scores.offeringsConfidenceScore} maxScore={3} />
          <ScoreBar label="Validation Approach" score={scores.validationApproachScore} maxScore={3} />
          <ScoreBar label="Internal Capabilities" score={scores.internalCapabilitiesScore} maxScore={4} />
          <ScoreBar label="Team Alignment" score={scores.teamAlignmentScore} maxScore={3} />
          <ScoreBar label="Cross-Functional Execution" score={scores.crossFunctionalExecutionScore} maxScore={3} />
          <ScoreBar label="External Collaboration" score={scores.externalCollaborationScore} maxScore={3} />
          <ScoreBar label="Partnership Support" score={scores.partnershipSupportScore} maxScore={3} />
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-8">
        <div className="flex items-start mb-4">
          <Sparkles className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">What's Next?</h3>
            <p className="text-gray-600">
              A copy of your assessment results has been sent to your email. Our team will reach out to discuss how we can help you improve your co-creation capabilities.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Download className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">Want to Learn More?</h3>
            <p className="text-gray-600">
              Explore our resources on co-creation methodologies and success stories.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link to="/approach/co-create">
          <Button className="bg-brand-400 hover:bg-brand-500">
            Learn More About Co-Create
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        
        <Link to="/contact">
          <Button variant="outline" className="border-brand-400 text-brand-500 hover:bg-brand-50">
            Contact Our Team
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Helper component for score visualization
const ScoreBar: React.FC<{ label: string; score: number; maxScore: number }> = ({ 
  label, 
  score, 
  maxScore 
}) => {
  const percentage = (score / maxScore) * 100;
  
  // Get color based on score percentage
  const getColor = () => {
    if (percentage >= 75) return "bg-green-500";
    if (percentage >= 50) return "bg-yellow-500";
    if (percentage >= 25) return "bg-orange-400";
    return "bg-red-500";
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{score}/{maxScore}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${getColor()} h-2 rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
