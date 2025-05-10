
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

// Define the form schema for each step
const step1Schema = z.object({
  sectors: z.array(z.string()).min(1, { message: "Please select at least one sector" }),
  markets: z.string().min(1, { message: "Please specify number of markets" }),
  brands: z.string().min(1, { message: "Please specify number of brands" }),
  products: z.string().min(1, { message: "Please specify number of products" })
});

const step2Schema = z.object({
  challenges: z.array(z.string()).min(1, { message: "Please select at least one challenge" })
});

const step3Schema = z.object({
  timeframe: z.string().min(1, { message: "Please select a timeframe" }),
  email: z.string().email({ message: "Please enter a valid email address" })
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

// Selectable option component
interface SelectableBoxProps {
  id: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableBox: React.FC<SelectableBoxProps> = ({ id, label, selected, onClick }) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={cn(
        "border rounded-lg px-4 py-3 cursor-pointer transition-all",
        "hover:shadow-md flex items-center justify-between",
        selected ? 
          "border-brand-500 bg-brand-100 shadow-sm text-brand-700 font-medium" : 
          "border-gray-200 bg-white text-gray-700"
      )}
    >
      <span className="font-medium">{label}</span>
      {selected && <Check className="w-5 h-5 text-brand-500" />}
    </div>
  );
};

// Number option component
interface NumberOptionProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const NumberOption: React.FC<NumberOptionProps> = ({ label, options, value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-800">{label}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map(option => (
          <div
            key={option}
            onClick={() => onChange(option)}
            className={cn(
              "border rounded-lg px-4 py-3 text-center cursor-pointer transition-all",
              "hover:shadow-md",
              value === option ? 
                "border-brand-500 bg-brand-100 shadow-sm text-brand-700 font-medium" : 
                "border-gray-200 bg-white text-gray-700"
            )}
          >
            <span className="font-medium">{option}</span>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

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
  
  // Business sectors options
  const sectors = [
    { id: "retail", label: "Retail" },
    { id: "healthcare", label: "Healthcare" },
    { id: "financial", label: "Financial Services" },
    { id: "technology", label: "Technology" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "education", label: "Education" },
    { id: "government", label: "Government" },
    { id: "nonprofit", label: "Non-profit" },
    { id: "other", label: "Other" }
  ];
  
  // Business challenges options
  const challenges = [
    { id: "outdated-brand", label: "Outdated brand experiences" },
    { id: "inconsistent-experiences", label: "Difficulty delivering consistent digital experiences" },
    { id: "fragmented-journeys", label: "Fragmented customer journeys" },
    { id: "regulatory-pressure", label: "Regulatory pressure to modernize" },
    { id: "legacy-systems", label: "Legacy systems slowing down innovation" }
  ];
  
  // Timeframe options
  const timeframes = [
    { id: "4-weeks", label: "Within 4 weeks" },
    { id: "1-3-months", label: "1-3 months" },
    { id: "6-12-months", label: "6-12 months" }
  ];

  // Number options for markets, brands, and products
  const numberOptions = ["1-5", "6-20", "21-100", "100+"];

  // Set up form for Step 1
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      sectors: formData.step1?.sectors || [],
      markets: formData.step1?.markets || "",
      brands: formData.step1?.brands || "",
      products: formData.step1?.products || ""
    },
    mode: "onChange" // This allows the form to validate as changes are made
  });

  // Set up form for Step 2
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      challenges: formData.step2?.challenges || []
    },
    mode: "onChange"
  });

  // Set up form for Step 3
  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      timeframe: formData.step3?.timeframe || "",
      email: formData.step3?.email || ""
    },
    mode: "onChange"
  });

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

  // Toggle a sector selection
  const toggleSector = (sectorId: string) => {
    const currentSectors = step1Form.getValues("sectors") || [];
    if (currentSectors.includes(sectorId)) {
      const updatedSectors = currentSectors.filter(id => id !== sectorId);
      step1Form.setValue("sectors", updatedSectors, { shouldValidate: true });
      step1Form.trigger("sectors"); // Trigger validation
    } else {
      const updatedSectors = [...currentSectors, sectorId];
      step1Form.setValue("sectors", updatedSectors, { shouldValidate: true });
      step1Form.trigger("sectors"); // Trigger validation
    }
  };

  // Toggle a challenge selection
  const toggleChallenge = (challengeId: string) => {
    const currentChallenges = step2Form.getValues("challenges") || [];
    if (currentChallenges.includes(challengeId)) {
      const updatedChallenges = currentChallenges.filter(id => id !== challengeId);
      step2Form.setValue("challenges", updatedChallenges, { shouldValidate: true });
      step2Form.trigger("challenges"); // Trigger validation
    } else {
      const updatedChallenges = [...currentChallenges, challengeId];
      step2Form.setValue("challenges", updatedChallenges, { shouldValidate: true });
      step2Form.trigger("challenges"); // Trigger validation
    }
  };

  // Track selected sectors for UI rendering
  const selectedSectors = step1Form.watch("sectors") || [];
  const selectedChallenges = step2Form.watch("challenges") || [];
  const selectedTimeframe = step3Form.watch("timeframe");

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-brand-700">Get Started with LemonHQ</h1>
          <p className="text-lg text-gray-600">Help us understand your business needs so we can provide the best solutions.</p>
        </div>

        {/* Progress indicator */}
        <div className="mb-12">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}>
                {currentStep > 1 ? <Check className="w-5 h-5" /> : 1}
              </div>
              <span className="text-sm mt-2">About Your Business</span>
            </div>
            <div className="flex-1 mx-2 flex items-center">
              <div className={`h-1 w-full ${currentStep >= 2 ? 'bg-brand-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}>
                {currentStep > 2 ? <Check className="w-5 h-5" /> : 2}
              </div>
              <span className="text-sm mt-2">Your Challenges</span>
            </div>
            <div className="flex-1 mx-2 flex items-center">
              <div className={`h-1 w-full ${currentStep >= 3 ? 'bg-brand-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="text-sm mt-2">Your Priorities</span>
            </div>
          </div>
        </div>

        {/* Step 1: Business Information */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6">A Little Bit About Your Business</h2>
            <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-8">
              {/* Business Sectors */}
              <div>
                <h3 className="text-lg font-medium mb-4">Which business sectors do you operate in?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectors.map(sector => (
                    <SelectableBox
                      key={sector.id}
                      id={sector.id}
                      label={sector.label}
                      selected={selectedSectors.includes(sector.id)}
                      onClick={() => toggleSector(sector.id)}
                    />
                  ))}
                </div>
                {step1Form.formState.errors.sectors && (
                  <p className="text-red-500 text-sm mt-2">{step1Form.formState.errors.sectors.message}</p>
                )}
              </div>

              {/* Markets, Brands, Products */}
              <div className="space-y-6">
                <NumberOption
                  label="How many markets do you operate in?"
                  options={numberOptions}
                  value={step1Form.getValues("markets")}
                  onChange={(value) => {
                    step1Form.setValue("markets", value, { shouldValidate: true });
                    step1Form.trigger("markets");
                  }}
                  error={step1Form.formState.errors.markets?.message}
                />
                
                <NumberOption
                  label="How many brands do you have?"
                  options={numberOptions}
                  value={step1Form.getValues("brands")}
                  onChange={(value) => {
                    step1Form.setValue("brands", value, { shouldValidate: true });
                    step1Form.trigger("brands");
                  }}
                  error={step1Form.formState.errors.brands?.message}
                />
                
                <NumberOption
                  label="How many products do you have?"
                  options={numberOptions}
                  value={step1Form.getValues("products")}
                  onChange={(value) => {
                    step1Form.setValue("products", value, { shouldValidate: true });
                    step1Form.trigger("products");
                  }}
                  error={step1Form.formState.errors.products?.message}
                />
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="submit" className="bg-brand-500 hover:bg-brand-600 w-full md:w-auto">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Business Challenges */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6">What Challenges Are You Facing?</h2>
            <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Select all that apply:</h3>
                <div className="space-y-3">
                  {challenges.map(challenge => (
                    <SelectableBox
                      key={challenge.id}
                      id={challenge.id}
                      label={challenge.label}
                      selected={selectedChallenges.includes(challenge.id)}
                      onClick={() => toggleChallenge(challenge.id)}
                    />
                  ))}
                </div>
                {step2Form.formState.errors.challenges && (
                  <p className="text-red-500 text-sm mt-2">{step2Form.formState.errors.challenges.message}</p>
                )}
              </div>

              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setCurrentStep(1);
                    window.scrollTo(0, 0);
                  }}
                >
                  Back
                </Button>
                <Button type="submit" className="bg-brand-500 hover:bg-brand-600">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Business Priorities */}
        {currentStep === 3 && (
          <div className="bg-white rounded-xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-6">Your Priorities</h2>
            <form onSubmit={step3Form.handleSubmit(handleStep3Submit)} className="space-y-8">
              {/* Timeframe */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">How soon are you planning to make a decision?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {timeframes.map(timeframe => (
                    <div
                      key={timeframe.id}
                      onClick={() => {
                        step3Form.setValue("timeframe", timeframe.id, { shouldValidate: true });
                        step3Form.trigger("timeframe");
                      }}
                      className={cn(
                        "border rounded-lg p-4 text-center cursor-pointer transition-all",
                        "hover:shadow-md",
                        selectedTimeframe === timeframe.id 
                          ? "border-brand-500 bg-brand-100 shadow-sm text-brand-700 font-medium" 
                          : "border-gray-200 bg-white text-gray-700"
                      )}
                    >
                      <span className="font-medium">{timeframe.label}</span>
                    </div>
                  ))}
                </div>
                {step3Form.formState.errors.timeframe && (
                  <p className="text-red-500 text-sm mt-1">{step3Form.formState.errors.timeframe.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Business Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...step3Form.register("email")}
                  className="w-full"
                />
                {step3Form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{step3Form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="pt-4 flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setCurrentStep(2);
                    window.scrollTo(0, 0);
                  }}
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  className="bg-brand-500 hover:bg-brand-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LeadQualification;
