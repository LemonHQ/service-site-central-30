
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { 
  Step1Data, 
  Step2Data, 
  Step3Data, 
  FinalStepData, 
  AssessmentData 
} from './assessmentSchema';
import { 
  offeringPortfolioOptions,
  explorationPlanningOptions,
  customerSegmentsOptions,
  offeringsConfidenceOptions,
  validationApproachOptions,
  internalCapabilitiesOptions,
  teamAlignmentOptions,
  crossFunctionalExecutionOptions,
  externalCollaborationOptions,
  partnershipSupportOptions,
  getScoreCategory,
} from './assessmentConstants';

interface AssessmentContextValue {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  step1Data: Step1Data;
  setStep1Data: (data: Step1Data) => void;
  step2Data: Step2Data;
  setStep2Data: (data: Step2Data) => void;
  step3Data: Step3Data;
  setStep3Data: (data: Step3Data) => void;
  finalStepData: FinalStepData;
  setFinalStepData: (data: FinalStepData) => void;
  isSubmitting: boolean;
  calculateScores: () => {
    scores: AssessmentData['scores'];
    totalScore: number;
  };
  finalizeAssessment: (userData: FinalStepData) => Promise<void>;
}

const defaultStep1Data: Step1Data = {
  offeringPortfolio: '',
  explorationPlanning: [],
  customerSegments: '',
};

const defaultStep2Data: Step2Data = {
  offeringsConfidence: '',
  validationApproach: '',
  internalCapabilities: [],
  teamAlignment: '',
};

const defaultStep3Data: Step3Data = {
  crossFunctionalExecution: '',
  externalCollaboration: '',
  partnershipSupport: [],
};

const defaultFinalStepData: FinalStepData = {
  name: '',
  email: '',
};

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};

interface AssessmentProviderProps {
  children: React.ReactNode;
}

export const AssessmentProvider: React.FC<AssessmentProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data>(defaultStep1Data);
  const [step2Data, setStep2Data] = useState<Step2Data>(defaultStep2Data);
  const [step3Data, setStep3Data] = useState<Step3Data>(defaultStep3Data);
  const [finalStepData, setFinalStepData] = useState<FinalStepData>(defaultFinalStepData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const navigate = useNavigate();

  // Calculate scores based on selections
  const calculateScores = () => {
    // Get score for offering portfolio
    const offeringPortfolioScore = offeringPortfolioOptions.find(
      option => option.id === step1Data.offeringPortfolio
    )?.score || 0;

    // Calculate score for exploration planning (sum of selected options)
    const explorationPlanningScore = step1Data.explorationPlanning.reduce((total, selected) => {
      const option = explorationPlanningOptions.find(opt => opt.id === selected);
      return total + (option?.score || 0);
    }, 0);

    // Get score for customer segments
    const customerSegmentsScore = customerSegmentsOptions.find(
      option => option.id === step1Data.customerSegments
    )?.score || 0;

    // Get score for offerings confidence
    const offeringsConfidenceScore = offeringsConfidenceOptions.find(
      option => option.id === step2Data.offeringsConfidence
    )?.score || 0;

    // Get score for validation approach
    const validationApproachScore = validationApproachOptions.find(
      option => option.id === step2Data.validationApproach
    )?.score || 0;

    // Calculate score for internal capabilities
    const internalCapabilitiesScore = step2Data.internalCapabilities.reduce((total, selected) => {
      const option = internalCapabilitiesOptions.find(opt => opt.id === selected);
      return total + (option?.score || 0);
    }, 0);

    // Get score for team alignment
    const teamAlignmentScore = teamAlignmentOptions.find(
      option => option.id === step2Data.teamAlignment
    )?.score || 0;

    // Get score for cross functional execution
    const crossFunctionalExecutionScore = crossFunctionalExecutionOptions.find(
      option => option.id === step3Data.crossFunctionalExecution
    )?.score || 0;

    // Get score for external collaboration
    const externalCollaborationScore = externalCollaborationOptions.find(
      option => option.id === step3Data.externalCollaboration
    )?.score || 0;

    // Calculate score for partnership support (cap at 3)
    let partnershipSupportScore = step3Data.partnershipSupport.reduce((total, selected) => {
      const option = partnershipSupportOptions.find(opt => opt.id === selected);
      return total + (option?.score || 0);
    }, 0);
    partnershipSupportScore = Math.min(partnershipSupportScore, 3);

    // Calculate total score
    const totalScore = 
      offeringPortfolioScore +
      explorationPlanningScore +
      customerSegmentsScore +
      offeringsConfidenceScore +
      validationApproachScore +
      internalCapabilitiesScore +
      teamAlignmentScore +
      crossFunctionalExecutionScore +
      externalCollaborationScore +
      partnershipSupportScore;

    // Get score category
    const scoreCategory = getScoreCategory(totalScore);

    return {
      scores: {
        offeringPortfolioScore,
        explorationPlanningScore,
        customerSegmentsScore,
        offeringsConfidenceScore,
        validationApproachScore,
        internalCapabilitiesScore,
        teamAlignmentScore,
        crossFunctionalExecutionScore,
        externalCollaborationScore,
        partnershipSupportScore,
        totalScore,
        scoreCategory
      },
      totalScore
    };
  };

  const finalizeAssessment = async (userData: FinalStepData) => {
    try {
      setIsSubmitting(true);
      setFinalStepData(userData);
      
      const { scores } = calculateScores();
      
      // Get option text values based on IDs
      const offeringPortfolioText = offeringPortfolioOptions.find(
        option => option.id === step1Data.offeringPortfolio
      )?.label || '';
      
      const customerSegmentsText = customerSegmentsOptions.find(
        option => option.id === step1Data.customerSegments
      )?.label || '';
      
      const offeringsConfidenceText = offeringsConfidenceOptions.find(
        option => option.id === step2Data.offeringsConfidence
      )?.label || '';
      
      const validationApproachText = validationApproachOptions.find(
        option => option.id === step2Data.validationApproach
      )?.label || '';
      
      const teamAlignmentText = teamAlignmentOptions.find(
        option => option.id === step2Data.teamAlignment
      )?.label || '';
      
      const crossFunctionalExecutionText = crossFunctionalExecutionOptions.find(
        option => option.id === step3Data.crossFunctionalExecution
      )?.label || '';
      
      const externalCollaborationText = externalCollaborationOptions.find(
        option => option.id === step3Data.externalCollaboration
      )?.label || '';

      // Insert assessment data into Supabase
      const { error } = await supabase
        .from('co_create_assessments')
        .insert({
          name: userData.name,
          email: userData.email,
          
          offering_portfolio: offeringPortfolioText,
          offering_portfolio_score: scores.offeringPortfolioScore,
          
          exploration_planning: step1Data.explorationPlanning,
          exploration_planning_score: scores.explorationPlanningScore,
          
          customer_segments: customerSegmentsText,
          customer_segments_score: scores.customerSegmentsScore,
          
          offerings_confidence: offeringsConfidenceText,
          offerings_confidence_score: scores.offeringsConfidenceScore,
          
          validation_approach: validationApproachText,
          validation_approach_score: scores.validationApproachScore,
          
          internal_capabilities: step2Data.internalCapabilities,
          internal_capabilities_score: scores.internalCapabilitiesScore,
          
          team_alignment: teamAlignmentText,
          team_alignment_score: scores.teamAlignmentScore,
          
          cross_functional_execution: crossFunctionalExecutionText,
          cross_functional_execution_score: scores.crossFunctionalExecutionScore,
          
          external_collaboration: externalCollaborationText,
          external_collaboration_score: scores.externalCollaborationScore,
          
          partnership_support: step3Data.partnershipSupport,
          partnership_support_score: scores.partnershipSupportScore,
          
          total_score: scores.totalScore,
          score_category: scores.scoreCategory
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Assessment submitted successfully",
        description: "Thank you for completing the assessment.",
      });

      // Go to results step
      setCurrentStep(5);
    } catch (error) {
      console.error('Error submitting assessment:', error);
      toast({
        title: "Error submitting assessment",
        description: "There was a problem submitting your assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AssessmentContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        step1Data,
        setStep1Data,
        step2Data,
        setStep2Data,
        step3Data,
        setStep3Data,
        finalStepData,
        setFinalStepData,
        isSubmitting,
        calculateScores,
        finalizeAssessment,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};
