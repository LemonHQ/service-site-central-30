
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step1Data, step1Schema } from './assessmentSchema';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import { 
  offeringPortfolioOptions, 
  explorationPlanningOptions, 
  customerSegmentsOptions 
} from './assessmentConstants';
import LeadFormButton from '@/components/lead-qualification/LeadFormButton';

interface Step1FormProps {
  defaultValues: Step1Data;
  onSubmit: (data: Step1Data) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ defaultValues, onSubmit }) => {
  const { handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues,
    mode: "onChange"
  });

  const offeringPortfolio = watch('offeringPortfolio');
  const explorationPlanning = watch('explorationPlanning') || [];
  const customerSegments = watch('customerSegments');

  const handleOfferingPortfolioChange = (optionId: string) => {
    setValue('offeringPortfolio', optionId);
    trigger('offeringPortfolio');
  };

  const handleExplorationPlanningChange = (optionId: string) => {
    const currentOptions = [...explorationPlanning];
    
    if (currentOptions.includes(optionId)) {
      setValue('explorationPlanning', currentOptions.filter(id => id !== optionId));
    } else {
      setValue('explorationPlanning', [...currentOptions, optionId]);
    }
    trigger('explorationPlanning');
  };

  const handleCustomerSegmentsChange = (optionId: string) => {
    setValue('customerSegments', optionId);
    trigger('customerSegments');
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">Portfolio & Planning</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <SingleChoiceQuestion
          question="1. How would you describe your current offering portfolio?"
          options={offeringPortfolioOptions}
          selectedOption={offeringPortfolio}
          onChange={handleOfferingPortfolioChange}
          error={errors.offeringPortfolio?.message}
        />

        <MultiChoiceQuestion
          question="2. Are you currently exploring or planning any of the following?"
          description="Select all that apply"
          options={explorationPlanningOptions}
          selectedOptions={explorationPlanning}
          onChange={handleExplorationPlanningChange}
          error={errors.explorationPlanning?.message}
        />

        <SingleChoiceQuestion
          question="3. How well are your customer segments defined across product lines?"
          options={customerSegmentsOptions}
          selectedOption={customerSegments}
          onChange={handleCustomerSegmentsChange}
          error={errors.customerSegments?.message}
        />

        <div className="flex justify-end mt-8">
          <LeadFormButton
            type="submit"
            variant="primary"
            icon="right-arrow"
          >
            Continue
          </LeadFormButton>
        </div>
      </form>
    </div>
  );
};

export default Step1Form;
