
import React from 'react';
import { Award, Check, Star } from 'lucide-react';

export interface AssessmentAnswers {
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
}

export interface DetailedResult {
  question: string;
  score: number;
  maxScore: number;
  feedback: string;
}

export interface ReadinessLevel {
  level: string;
  description: string;
  color: string;
  icon: "award" | "star" | "check";
  iconColor: string;
  stage: string;
  stageDesc: string;
}

export const getReadinessLevel = (score: number): ReadinessLevel => {
  const maxScore = 30; // Maximum possible score
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 75) {
    return {
      level: "High Readiness",
      description: "Your organization shows strong indicators for co-creation success. Your processes, culture, and capabilities align well with collaborative innovation approaches.",
      color: "text-green-600",
      icon: "award",
      iconColor: "text-green-600",
      stage: "Scaling & Optimizing",
      stageDesc: "You're ready to scale collaborative innovation and optimize for maximum impact across your organization."
    };
  } else if (percentage >= 50) {
    return {
      level: "Moderate Readiness",
      description: "Your organization has many of the key elements for successful co-creation, but some areas could be strengthened to maximize impact.",
      color: "text-yellow-600",
      icon: "star",
      iconColor: "text-yellow-600",
      stage: "Expanding & Growing",
      stageDesc: "You're well-positioned to grow your co-creation capabilities and expand their application across your organization."
    };
  } else if (percentage >= 25) {
    return {
      level: "Developing Readiness",
      description: "Your organization shows promising potential, but may need to strengthen key capabilities before embarking on extensive co-creation initiatives.",
      color: "text-orange-500",
      icon: "check",
      iconColor: "text-orange-500",
      stage: "Building & Developing",
      stageDesc: "You're in the process of building the foundational elements needed for successful co-creation partnerships."
    };
  } else {
    return {
      level: "Early Stage",
      description: "Your organization may benefit from foundational capability building before investing significantly in co-creation approaches.",
      color: "text-red-500",
      icon: "check",
      iconColor: "text-red-500",
      stage: "Exploring & Learning",
      stageDesc: "You're at the beginning of your co-creation journey, with opportunities to learn and establish core capabilities."
    };
  }
};

export const getDetailedResults = (answers: AssessmentAnswers): DetailedResult[] => {
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
