
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ArrowRight } from 'lucide-react';

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

const LeadQualification = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    step1?: Step1Data;
    step2?: Step2Data;
    step3?: Step3Data;
  }>({});
  
  const { toast } = useToast();
  
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

  // Set up form for Step 1
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      sectors: formData.step1?.sectors || [],
      markets: formData.step1?.markets || "",
      brands: formData.step1?.brands || "",
      products: formData.step1?.products || ""
    }
  });

  // Set up form for Step 2
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      challenges: formData.step2?.challenges || []
    }
  });

  // Set up form for Step 3
  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      timeframe: formData.step3?.timeframe || "",
      email: formData.step3?.email || ""
    }
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

  const handleStep3Submit = (data: Step3Data) => {
    setFormData(prev => ({ ...prev, step3: data }));
    
    // Submit all data
    const allData = {
      ...formData.step1,
      ...formData.step2,
      ...data
    };
    
    console.log("Form submitted with data:", allData);
    
    // Show success message
    toast({
      title: "Submission Successful",
      description: "Thank you for your interest! Our team will contact you shortly.",
    });
    
    // Redirect to home page after 2 seconds
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

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
                    <div key={sector.id} className="flex items-start space-x-3">
                      <Checkbox 
                        id={sector.id} 
                        {...step1Form.register("sectors")}
                        value={sector.id}
                        onCheckedChange={(checked) => {
                          const currentSectors = step1Form.getValues("sectors") || [];
                          if (checked) {
                            step1Form.setValue("sectors", [...currentSectors, sector.id]);
                          } else {
                            step1Form.setValue("sectors", currentSectors.filter(s => s !== sector.id));
                          }
                        }}
                      />
                      <label htmlFor={sector.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {sector.label}
                      </label>
                    </div>
                  ))}
                </div>
                {step1Form.formState.errors.sectors && (
                  <p className="text-red-500 text-sm mt-2">{step1Form.formState.errors.sectors.message}</p>
                )}
              </div>

              {/* Markets, Brands, Products */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="markets" className="block text-sm font-medium mb-2">
                    How many markets do you operate in?
                  </label>
                  <Input 
                    id="markets" 
                    type="number" 
                    placeholder="Enter number of markets" 
                    {...step1Form.register("markets")}
                  />
                  {step1Form.formState.errors.markets && (
                    <p className="text-red-500 text-sm mt-1">{step1Form.formState.errors.markets.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="brands" className="block text-sm font-medium mb-2">
                    How many brands do you have?
                  </label>
                  <Input 
                    id="brands" 
                    type="number" 
                    placeholder="Enter number of brands" 
                    {...step1Form.register("brands")}
                  />
                  {step1Form.formState.errors.brands && (
                    <p className="text-red-500 text-sm mt-1">{step1Form.formState.errors.brands.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="products" className="block text-sm font-medium mb-2">
                    How many products do you have?
                  </label>
                  <Input 
                    id="products" 
                    type="number" 
                    placeholder="Enter number of products" 
                    {...step1Form.register("products")}
                  />
                  {step1Form.formState.errors.products && (
                    <p className="text-red-500 text-sm mt-1">{step1Form.formState.errors.products.message}</p>
                  )}
                </div>
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
                <div className="space-y-4">
                  {challenges.map(challenge => (
                    <div key={challenge.id} className="flex items-start space-x-3">
                      <Checkbox 
                        id={challenge.id} 
                        value={challenge.id}
                        {...step2Form.register("challenges")}
                        onCheckedChange={(checked) => {
                          const currentChallenges = step2Form.getValues("challenges") || [];
                          if (checked) {
                            step2Form.setValue("challenges", [...currentChallenges, challenge.id]);
                          } else {
                            step2Form.setValue("challenges", currentChallenges.filter(c => c !== challenge.id));
                          }
                        }}
                      />
                      <label htmlFor={challenge.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {challenge.label}
                      </label>
                    </div>
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
                <RadioGroup 
                  defaultValue={formData.step3?.timeframe} 
                  onValueChange={(value) => step3Form.setValue("timeframe", value)}
                  className="space-y-3"
                >
                  {timeframes.map(timeframe => (
                    <div key={timeframe.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={timeframe.id} id={timeframe.id} />
                      <label htmlFor={timeframe.id} className="text-sm font-medium">
                        {timeframe.label}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
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
                <Button type="submit" className="bg-brand-500 hover:bg-brand-600">
                  Submit
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
