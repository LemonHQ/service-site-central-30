
import React from 'react';
import { LeadQualificationProvider, useLeadQualification } from '../components/lead-qualification/LeadQualificationProvider';
import LeadQualificationLayout from '../components/lead-qualification/LeadQualificationLayout';
import Step0Form from '../components/lead-qualification/Step0Form';
import Step1Form from '../components/lead-qualification/Step1Form';
import Step2Form from '../components/lead-qualification/Step2Form';
import Step3Form from '../components/lead-qualification/Step3Form';

const GettingStartedContent = () => {
  const {
    step0Data,
    step1Data,
    step2Data,
    step3Data,
    setStep0Data,
    setStep1Data,
    setStep2Data,
    setStep3Data,
    currentStep,
    setCurrentStep,
    isSubmitting,
    submitFormData
  } = useLeadQualification();

  const handleStep0Submit = (data: typeof step0Data) => {
    setStep0Data(data);
    setCurrentStep(1);
  };

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

  const handleBackToStep0 = () => setCurrentStep(0);
  const handleBackToStep1 = () => setCurrentStep(1);
  const handleBackToStep2 = () => setCurrentStep(2);

  return (
    <LeadQualificationLayout currentStep={currentStep} title="Getting Started">
      {currentStep === 0 && (
        <Step0Form 
          defaultValues={step0Data}
          onSubmit={handleStep0Submit}
        />
      )}

      {currentStep === 1 && (
        <Step1Form 
          defaultValues={step1Data}
          onSubmit={handleStep1Submit}
          icpType={step0Data.icp_type}
        />
      )}
      
      {currentStep === 2 && (
        <Step2Form 
          defaultValues={step2Data}
          onSubmit={handleStep2Submit}
          onBack={handleBackToStep1}
          icpType={step0Data.icp_type}
        />
      )}
      
      {currentStep === 3 && (
        <Step3Form 
          defaultValues={step3Data}
          onSubmit={handleStep3Submit}
          onBack={handleBackToStep2}
          isSubmitting={isSubmitting}
          icpType={step0Data.icp_type}
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
