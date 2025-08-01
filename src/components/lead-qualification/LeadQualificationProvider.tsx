
import React, { createContext, useContext, useState } from 'react';
import { Step0Data, Step1Data, Step2Data, Step3Data } from './schema';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface LeadQualificationContextValue {
  step0Data: Step0Data;
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
  setStep0Data: (data: Step0Data) => void;
  setStep1Data: (data: Step1Data) => void;
  setStep2Data: (data: Step2Data) => void;
  setStep3Data: (data: Step3Data) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isSubmitting: boolean;
  submitFormData: () => Promise<void>;
}

const defaultStep0Data: Step0Data = { icp_type: '' };
const defaultStep1Data: Step1Data = { sectors: [], markets: '', brands: '', products: '' };
const defaultStep2Data: Step2Data = { challenges: [] };
const defaultStep3Data: Step3Data = { timeframe: '', email: '', marketing_consent: false };

const LeadQualificationContext = createContext<LeadQualificationContextValue | null>(null);

export const useLeadQualification = () => {
  const context = useContext(LeadQualificationContext);
  if (!context) {
    throw new Error('useLeadQualification must be used within a LeadQualificationProvider');
  }
  return context;
};

interface LeadQualificationProviderProps {
  children: React.ReactNode;
}

export const LeadQualificationProvider: React.FC<LeadQualificationProviderProps> = ({ children }) => {
  const [step0Data, setStep0Data] = useState<Step0Data>(defaultStep0Data);
  const [step1Data, setStep1Data] = useState<Step1Data>(defaultStep1Data);
  const [step2Data, setStep2Data] = useState<Step2Data>(defaultStep2Data);
  const [step3Data, setStep3Data] = useState<Step3Data>(defaultStep3Data);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const submitFormData = async () => {
    try {
      setIsSubmitting(true);
      
      // Combine all form data with ICP type
      const formData = {
        icp_type: step0Data.icp_type,
        sectors: step1Data.sectors,
        markets: step1Data.markets || '',
        brands: step1Data.brands || '',
        products: step1Data.products || '',
        challenges: step2Data.challenges,
        timeframe: step3Data.timeframe,
        email: step3Data.email,
        marketing_consent: step3Data.marketing_consent || false
      };

      const { error } = await supabase
        .from('lead_qualifications')
        .insert(formData);

      if (error) {
        throw error;
      }

      toast({
        title: "Form submitted successfully",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = {
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
  };

  return (
    <LeadQualificationContext.Provider value={value}>
      {children}
    </LeadQualificationContext.Provider>
  );
};
