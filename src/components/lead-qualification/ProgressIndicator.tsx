
import React from 'react';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  return (
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
  );
};

export default ProgressIndicator;
