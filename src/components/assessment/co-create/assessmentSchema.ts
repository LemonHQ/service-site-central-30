
import { z } from 'zod';

// Step 1 Schema
export const step1Schema = z.object({
  offeringPortfolio: z.string().min(1, { message: "Please select an option" }),
  explorationPlanning: z.array(z.string()).min(0),
  customerSegments: z.string().min(1, { message: "Please select an option" }),
});

// Step 2 Schema
export const step2Schema = z.object({
  offeringsConfidence: z.string().min(1, { message: "Please select an option" }),
  validationApproach: z.string().min(1, { message: "Please select an option" }),
  internalCapabilities: z.array(z.string()).min(0),
  teamAlignment: z.string().min(1, { message: "Please select an option" }),
});

// Step 3 Schema
export const step3Schema = z.object({
  crossFunctionalExecution: z.string().min(1, { message: "Please select an option" }),
  externalCollaboration: z.string().min(1, { message: "Please select an option" }),
  partnershipSupport: z.array(z.string()).min(0),
});

// Final Step Schema
export const finalStepSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type FinalStepData = z.infer<typeof finalStepSchema>;

export type AssessmentData = Step1Data & Step2Data & Step3Data & FinalStepData & {
  scores: {
    offeringPortfolioScore: number;
    explorationPlanningScore: number;
    customerSegmentsScore: number;
    offeringsConfidenceScore: number;
    validationApproachScore: number;
    internalCapabilitiesScore: number;
    teamAlignmentScore: number;
    crossFunctionalExecutionScore: number;
    externalCollaborationScore: number;
    partnershipSupportScore: number;
    totalScore: number;
    scoreCategory: string;
  };
};
