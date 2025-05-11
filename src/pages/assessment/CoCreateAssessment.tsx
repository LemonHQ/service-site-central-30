
import React from 'react';
import { 
  AssessmentProvider, 
  useAssessment 
} from '@/components/assessment/co-create/AssessmentProvider';
import AssessmentLayout from '@/components/assessment/co-create/AssessmentLayout';
import Step1Form from '@/components/assessment/co-create/Step1Form';
import Step2Form from '@/components/assessment/co-create/Step2Form';
import Step3Form from '@/components/assessment/co-create/Step3Form';
import UserInfoForm from '@/components/assessment/co-create/UserInfoForm';
import ResultsDisplay from '@/components/assessment/co-create/ResultsDisplay';

const AssessmentContent: React.FC = () => {
  const {
    currentStep,
    setCurrentStep,
    step1Data,
    setStep1Data,
    step2Data,
    setStep2Data,
    step3Data,
    setStep3Data,
    finalStepData,
    isSubmitting,
    finalizeAssessment,
    calculateScores
  } = useAssessment();

  const handleStep1Submit = (data: typeof step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: typeof step2Data) => {
    setStep2Data(data);
    setCurrentStep(3);
  };

  const handleStep3Submit = (data: typeof step3Data) => {
    setStep3Data(data);
    setCurrentStep(4);
  };

  const handleUserInfoSubmit = async (data: typeof finalStepData) => {
    await finalizeAssessment(data);
  };

  const handleBackToStep1 = () => setCurrentStep(1);
  const handleBackToStep2 = () => setCurrentStep(2);
  const handleBackToStep3 = () => setCurrentStep(3);

  const { scores } = calculateScores();
  const assessmentData = {
    ...step1Data,
    ...step2Data,
    ...step3Data,
    ...finalStepData,
    scores
  };

  return (
    <AssessmentLayout currentStep={currentStep}>
      {currentStep === 1 && (
        <Step1Form 
          defaultValues={step1Data}
          onSubmit={handleStep1Submit}
        />
      )}
      
      {currentStep === 2 && (
        <Step2Form 
          defaultValues={step2Data}
          onSubmit={handleStep2Submit}
          onBack={handleBackToStep1}
        />
      )}
      
      {currentStep === 3 && (
        <Step3Form 
          defaultValues={step3Data}
          onSubmit={handleStep3Submit}
          onBack={handleBackToStep2}
        />
      )}
      
      {currentStep === 4 && (
        <UserInfoForm 
          defaultValues={finalStepData}
          onSubmit={handleUserInfoSubmit}
          onBack={handleBackToStep3}
          isSubmitting={isSubmitting}
        />
      )}
      
      {currentStep === 5 && (
        <ResultsDisplay assessmentData={assessmentData} />
      )}
    </AssessmentLayout>
  );
};

const CoCreateAssessment: React.FC = () => {
  return (
    <AssessmentProvider>
      <AssessmentContent />
    </AssessmentProvider>
  );
};

export default CoCreateAssessment;
