
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from 'react-router-dom';
import { Award, Check, Star } from 'lucide-react';

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

const CoCreateAssessmentResults: React.FC<AssessmentResult> = ({ score, answers, resetAssessment, userData }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const getReadinessLevel = () => {
    const maxScore = 30; // Maximum possible score
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 75) {
      return {
        level: "High Readiness",
        description: "Your organization shows strong indicators for co-creation success. Your processes, culture, and capabilities align well with collaborative innovation approaches.",
        color: "text-green-600",
        icon: <Award className="h-10 w-10 text-green-600" />,
        stage: "Scaling & Optimizing",
        stageDesc: "You're ready to scale collaborative innovation and optimize for maximum impact across your organization."
      };
    } else if (percentage >= 50) {
      return {
        level: "Moderate Readiness",
        description: "Your organization has many of the key elements for successful co-creation, but some areas could be strengthened to maximize impact.",
        color: "text-yellow-600",
        icon: <Star className="h-10 w-10 text-yellow-600" />,
        stage: "Expanding & Growing",
        stageDesc: "You're well-positioned to grow your co-creation capabilities and expand their application across your organization."
      };
    } else if (percentage >= 25) {
      return {
        level: "Developing Readiness",
        description: "Your organization shows promising potential, but may need to strengthen key capabilities before embarking on extensive co-creation initiatives.",
        color: "text-orange-500",
        icon: <Check className="h-10 w-10 text-orange-500" />,
        stage: "Building & Developing",
        stageDesc: "You're in the process of building the foundational elements needed for successful co-creation partnerships."
      };
    } else {
      return {
        level: "Early Stage",
        description: "Your organization may benefit from foundational capability building before investing significantly in co-creation approaches.",
        color: "text-red-500",
        icon: <Check className="h-10 w-10 text-red-500" />,
        stage: "Exploring & Learning",
        stageDesc: "You're at the beginning of your co-creation journey, with opportunities to learn and establish core capabilities."
      };
    }
  };
  
  const readiness = getReadinessLevel();
  
  const getDetailedResults = () => {
    return [
      {
        question: "Portfolio Structure",
        score: answers.question1,
        maxScore: 3,
        feedback: answers.question1 > 1 ? 
          "Your diverse portfolio structure provides good opportunities for co-creation approaches." : 
          "A more diversified portfolio approach may help maximize co-creation benefits."
      },
      {
        question: "Strategic Initiatives",
        score: Math.min(answers.question2.reduce((acc, val) => acc + val, 0), 4),
        maxScore: 4,
        feedback: answers.question2.length > 0 ? 
          "Your planned initiatives align well with co-creation methodologies." : 
          "Consider how co-creation could accelerate your strategic initiatives."
      },
      {
        question: "Customer Segmentation",
        score: answers.question3,
        maxScore: 3,
        feedback: answers.question3 > 1 ? 
          "Your customer segmentation provides a strong foundation for targeted co-creation." : 
          "Enhancing your customer segmentation would improve co-creation outcomes."
      },
      {
        question: "Customer Needs Alignment",
        score: answers.question4,
        maxScore: 3,
        feedback: answers.question4 > 1 ? 
          "Your understanding of customer needs will support effective co-creation." : 
          "Deeper customer insights would strengthen your co-creation foundation."
      },
      {
        question: "Validation Approach",
        score: answers.question5,
        maxScore: 3,
        feedback: answers.question5 > 1 ? 
          "Your validation methods align well with co-creation principles." : 
          "More structured validation methods would enhance co-creation outcomes."
      },
      {
        question: "Innovation Capabilities",
        score: Math.min(answers.question6.reduce((acc, val) => acc + val, 0), 4),
        maxScore: 4,
        feedback: answers.question6.length > 1 ? 
          "Your innovation capabilities provide a strong foundation for co-creation." : 
          "Developing additional innovation capabilities would strengthen co-creation outcomes."
      },
      {
        question: "Team Alignment",
        score: answers.question7,
        maxScore: 3,
        feedback: answers.question7 > 1 ? 
          "Your team alignment will support effective co-creation processes." : 
          "Improving cross-functional alignment would enhance co-creation effectiveness."
      },
      {
        question: "Execution Flexibility",
        score: answers.question8,
        maxScore: 3,
        feedback: answers.question8 > 1 ? 
          "Your execution processes support agile co-creation methods." : 
          "Streamlining your execution processes would improve co-creation outcomes."
      },
      {
        question: "Partnership Openness",
        score: answers.question9,
        maxScore: 3,
        feedback: answers.question9 > 1 ? 
          "Your openness to partnership is well-aligned with co-creation approaches." : 
          "Greater openness to external collaboration would enhance co-creation potential."
      },
      {
        question: "Desired Support",
        score: Math.min(answers.question10.reduce((acc, val) => acc + val, 0), 3),
        maxScore: 3,
        feedback: answers.question10.length > 0 ? 
          "Your support needs align with typical co-creation engagement models." : 
          "Clarifying support needs would help structure effective co-creation engagements."
      }
    ];
  };

  const detailedResults = getDetailedResults();
  const maxTotalScore = 30;
  const scorePercentage = Math.round((score / maxTotalScore) * 100);

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-brand-50 p-4 rounded-full">
          <Check className="h-12 w-12 text-brand-500" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-brand-600 mb-2 text-center">Thank You, {userData.name}!</h1>
      <p className="text-gray-600 mb-8 text-center">Your co-create readiness assessment has been completed successfully.</p>
      
      <div className="bg-beige-50 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Your Readiness Score</h2>
          <div className="flex items-center space-x-2">
            {readiness.icon}
            <span className={`text-lg font-bold ${readiness.color}`}>{readiness.level}</span>
          </div>
        </div>
        
        <div className="flex items-end mb-4">
          <span className={`text-5xl font-bold ${readiness.color}`}>{score}</span>
          <span className="text-gray-500 ml-2 mb-1">/ {maxTotalScore}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className={`h-4 rounded-full transition-all duration-1000 ${
              scorePercentage >= 75 ? "bg-green-500" : 
              scorePercentage >= 50 ? "bg-yellow-500" : 
              scorePercentage >= 25 ? "bg-orange-500" : "bg-red-500"
            }`}
            style={{ width: `${scorePercentage}%` }}
          ></div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Your Co-Creation Journey Stage:</h3>
        <div className={`p-4 rounded-lg border ${
          scorePercentage >= 75 ? "border-green-200 bg-green-50" : 
          scorePercentage >= 50 ? "border-yellow-200 bg-yellow-50" : 
          scorePercentage >= 25 ? "border-orange-200 bg-orange-50" : "border-red-200 bg-red-50"
        }`}>
          <h4 className={`font-semibold text-lg mb-1 ${readiness.color}`}>{readiness.stage}</h4>
          <p className="text-gray-700">{readiness.stageDesc}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">What This Means</h3>
        <p className="text-gray-700 mb-4">{readiness.description}</p>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="text-brand-600 font-medium">We've sent your detailed assessment report to: <span className="font-semibold">{userData.email}</span></p>
          <p className="text-sm text-gray-600 mt-2">Your report includes personalized recommendations based on your responses and readiness level.</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1">
              View Detailed Results
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-brand-600">Detailed Assessment Results</DialogTitle>
              <DialogDescription>
                Your score breakdown by section
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {detailedResults.map((result, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg">{result.question}</h3>
                    <div>
                      <span className={`font-semibold ${
                        result.score/result.maxScore >= 0.7 ? "text-green-600" : 
                        result.score/result.maxScore >= 0.4 ? "text-yellow-600" : 
                        "text-orange-500"
                      }`}>{result.score}</span>
                      <span className="text-gray-500">/{result.maxScore}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${
                        result.score/result.maxScore >= 0.7 ? "bg-green-500" : 
                        result.score/result.maxScore >= 0.4 ? "bg-yellow-500" : 
                        "bg-orange-500"
                      }`}
                      style={{ width: `${(result.score / result.maxScore) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600">{result.feedback}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        
        <Button className="flex-1" onClick={resetAssessment}>
          Take Assessment Again
        </Button>
      </div>
      
      <div className="bg-brand-50 border border-brand-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-brand-600 mb-3">Next Steps</h3>
        <p className="text-gray-700 mb-4">
          Based on your results, you may be ready to explore co-creation approaches to accelerate your innovation goals. Our team can help you identify the best starting points based on your specific needs and readiness.
        </p>
        <Link to="/contact">
          <Button className="w-full sm:w-auto">
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CoCreateAssessmentResults;
