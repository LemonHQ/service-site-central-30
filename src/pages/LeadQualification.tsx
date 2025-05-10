
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Import components
import ProgressIndicator from '@/components/lead-qualification/ProgressIndicator';
import Step1Form from '@/components/lead-qualification/Step1Form';
import Step2Form from '@/components/lead-qualification/Step2Form';
import Step3Form from '@/components/lead-qualification/Step3Form';

// Import types and schemas
import { 
  Step1Data, 
  Step2Data, 
  Step3Data 
} from '@/components/lead-qualification/schema';

const LeadQualification = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    step1?: Step1Data;
    step2?: Step2Data;
    step3?: Step3Data;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleStep1Submit = (data: Step1Data) => {
    setFormData(prev => ({ ...prev, step1: data }));
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };

  const handleStep2Submit = (data: Step2Data) => {
    setFormData(prev => ({ ...prev, step2: data }));
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };

  const handleStep3Submit = async (data: Step3Data) => {
    setFormData(prev => ({ ...prev, step3: data }));
    
    // Compile all data from all steps
    const allData = {
      ...formData.step1,
      ...formData.step2,
      ...data
    };
    
    try {
      setIsSubmitting(true);
      
      // Save to Supabase
      const { error } = await supabase
        .from('lead_qualifications')
        .insert({
          email: data.email,
          timeframe: data.timeframe,
          sectors: formData.step1?.sectors || [],
          markets: formData.step1?.markets || "",
          brands: formData.step1?.brands || "",
          products: formData.step1?.products || "",
          challenges: formData.step2?.challenges || []
        });
      
      if (error) {
        throw error;
      }
      
      // Show success message
      toast({
        title: "Submission Successful",
        description: "Thank you for your interest! Our team will contact you shortly.",
      });
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error("Error submitting lead qualification form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-brand-700">Get Started with LemonHQ</h1>
          <p className="text-lg text-gray-600">Help us understand your business needs so we can provide the best solutions.</p>
        </div>

        {/* Progress indicator */}
        <ProgressIndicator currentStep={currentStep} />

        {/* Step 1: Business Information */}
        {currentStep === 1 && (
          <Step1Form
            defaultValues={formData.step1 || { sectors: [], markets: '', brands: '', products: '' }}
            onSubmit={handleStep1Submit}
          />
        )}

        {/* Step 2: Business Challenges */}
        {currentStep === 2 && (
          <Step2Form
            defaultValues={formData.step2 || { challenges: [] }}
            onSubmit={handleStep2Submit}
            onBack={() => {
              setCurrentStep(1);
              window.scrollTo(0, 0);
            }}
          />
        )}

        {/* Step 3: Business Priorities */}
        {currentStep === 3 && (
          <Step3Form
            defaultValues={formData.step3 || { timeframe: '', email: '' }}
            onSubmit={handleStep3Submit}
            onBack={() => {
              setCurrentStep(2);
              window.scrollTo(0, 0);
            }}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default LeadQualification;
