
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step2Data, step2Schema } from './assessmentSchema';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import { 
  offeringsConfidenceOptions,
  validationApproachOptions,
  internalCapabilitiesOptions,
  teamAlignmentOptions
} from './assessmentConstants';
import LeadFormButton from '@/components/lead-qualification/LeadFormButton';

interface Step2FormProps {
  defaultValues: Step2Data;
  onSubmit: (data: Step2Data) => void;
  onBack: () => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ defaultValues, onSubmit, onBack }) => {
  const { handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues,
    mode: "onChange"
  });

  const offeringsConfidence = watch('offeringsConfidence');
  const validationApproach = watch('validationApproach');
  const internalCapabilities = watch('internalCapabilities') || [];
  const teamAlignment = watch('teamAlignment');

  const handleOfferingsConfidenceChange = (optionId: string) => {
    setValue('offeringsConfidence', optionId);
    trigger('offeringsConfidence');
  };

  const handleValidationApproachChange = (optionId: string) => {
    setValue('validationApproach', optionId);
    trigger('validationApproach');
  };

  const handleInternalCapabilitiesChange = (optionId: string) => {
    const currentOptions = [...internalCapabilities];
    
    if (currentOptions.includes(optionId)) {
      setValue('internalCapabilities', currentOptions.filter(id => id !== optionId));
    } else {
      setValue('internalCapabilities', [...currentOptions, optionId]);
    }
    trigger('internalCapabilities');
  };

  const handleTeamAlignmentChange = (optionId: string) => {
    setValue('teamAlignment', optionId);
    trigger('teamAlignment');
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">Capabilities & Alignment</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <SingleChoiceQuestion
          question="4. How confident are you that your current offerings meet the specific needs of different customer segments?"
          options={offeringsConfidenceOptions}
          selectedOption={offeringsConfidence}
          onChange={handleOfferingsConfidenceChange}
          error={errors.offeringsConfidence?.message}
        />

        <SingleChoiceQuestion
          question="5. How does your organization validate new ideas before launch?"
          options={validationApproachOptions}
          selectedOption={validationApproach}
          onChange={handleValidationApproachChange}
          error={errors.validationApproach?.message}
        />

        <MultiChoiceQuestion
          question="6. What internal capabilities do you have to support innovation?"
          description="Select all that apply"
          options={internalCapabilitiesOptions}
          selectedOptions={internalCapabilities}
          onChange={handleInternalCapabilitiesChange}
          error={errors.internalCapabilities?.message}
        />

        <SingleChoiceQuestion
          question="7. Are business, product, brand, and digital teams aligned on innovation goals and success metrics?"
          options={teamAlignmentOptions}
          selectedOption={teamAlignment}
          onChange={handleTeamAlignmentChange}
          error={errors.teamAlignment?.message}
        />

        <div className="flex justify-between mt-8">
          <LeadFormButton
            type="button"
            variant="back"
            icon="left-arrow"
            onClick={onBack}
          >
            Back
          </LeadFormButton>
          
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

export default Step2Form;
