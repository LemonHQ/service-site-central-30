
import React from 'react';
import { Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface Step {
  id: number;
  label: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  steps, 
  currentStep,
  className
}) => {
  // Calculate progress percentage
  const totalSteps = steps.length;
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  
  return (
    <div className={cn("mb-12", className)}>
      {/* Mobile view - simple progress bar */}
      <div className="md:hidden mb-6">
        <Progress value={progressPercentage} className="h-2" />
        <div className="mt-2 text-sm text-center text-gray-600">
          Step {currentStep} of {totalSteps}: <span className="font-medium">{steps.find(step => step.id === currentStep)?.label}</span>
        </div>
      </div>
      
      {/* Desktop view - steps with labels */}
      <div className="hidden md:block">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    ${currentStep >= step.id ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}
                >
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                </div>
                <span className="text-sm mt-2">{step.label}</span>
              </div>
              
              {/* Connect steps with lines except for the last step */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 flex items-center">
                  <div 
                    className={`h-1 w-full transition-colors
                      ${currentStep > step.id ? 'bg-brand-500' : 
                        currentStep === step.id ? 'bg-gradient-to-r from-brand-500 to-gray-200' : 
                        'bg-gray-200'}`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
