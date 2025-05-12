
import React from 'react';
import { LeadQualificationProvider, useLeadQualification } from '../components/lead-qualification/LeadQualificationProvider';
import LeadQualificationLayout from '../components/lead-qualification/LeadQualificationLayout';
import Step1Form from '../components/lead-qualification/Step1Form';
import Step2Form from '../components/lead-qualification/Step2Form';
import Step3Form from '../components/lead-qualification/Step3Form';

const GettingStartedContent = () => {
  const {
    step1Data,
    step2Data,
    step3Data,
    setStep1Data,
    setStep2Data,
    setStep3Data,
    currentStep,
    setCurrentStep,
    isSubmitting,
    submitFormData
  } = useLeadQualification();

  const handleStep1Submit = (data: typeof step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: typeof step2Data) => {
    setStep2Data(data);
    setCurrentStep(3);
  };

  const handleStep3Submit = async (data: typeof step3Data) => {
    setStep3Data(data);
    await submitFormData();
  };

  const handleBackToStep1 = () => setCurrentStep(1);
  const handleBackToStep2 = () => setCurrentStep(2);

  return (
    <LeadQualificationLayout currentStep={currentStep} title="Getting Started">
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
          isSubmitting={isSubmitting}
        />
      )}
    </LeadQualificationLayout>
  );
};

const GettingStarted = () => {
  return (
    <LeadQualificationProvider>
      <GettingStartedContent />
    </LeadQualificationProvider>
  );
};

export default GettingStarted;
