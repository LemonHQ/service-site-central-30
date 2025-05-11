
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Step3Data, step3Schema } from './assessmentSchema';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import { 
  crossFunctionalExecutionOptions,
  externalCollaborationOptions,
  partnershipSupportOptions
} from './assessmentConstants';
import LeadFormButton from '@/components/lead-qualification/LeadFormButton';

interface Step3FormProps {
  defaultValues: Step3Data;
  onSubmit: (data: Step3Data) => void;
  onBack: () => void;
}

const Step3Form: React.FC<Step3FormProps> = ({ defaultValues, onSubmit, onBack }) => {
  const { handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues,
    mode: "onChange"
  });

  const crossFunctionalExecution = watch('crossFunctionalExecution');
  const externalCollaboration = watch('externalCollaboration');
  const partnershipSupport = watch('partnershipSupport') || [];

  const handleCrossFunctionalExecutionChange = (optionId: string) => {
    setValue('crossFunctionalExecution', optionId);
    trigger('crossFunctionalExecution');
  };

  const handleExternalCollaborationChange = (optionId: string) => {
    setValue('externalCollaboration', optionId);
    trigger('externalCollaboration');
  };

  const handlePartnershipSupportChange = (optionId: string) => {
    const currentOptions = [...partnershipSupport];
    
    if (currentOptions.includes(optionId)) {
      setValue('partnershipSupport', currentOptions.filter(id => id !== optionId));
    } else {
      setValue('partnershipSupport', [...currentOptions, optionId]);
    }
    trigger('partnershipSupport');
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">Execution & Collaboration</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <SingleChoiceQuestion
          question="8. How easy is it for cross-functional teams to move from idea to execution?"
          options={crossFunctionalExecutionOptions}
          selectedOption={crossFunctionalExecution}
          onChange={handleCrossFunctionalExecutionChange}
          error={errors.crossFunctionalExecution?.message}
        />

        <SingleChoiceQuestion
          question="9. How open is your organization to external collaboration for experience and product innovation?"
          options={externalCollaborationOptions}
          selectedOption={externalCollaboration}
          onChange={handleExternalCollaborationChange}
          error={errors.externalCollaboration?.message}
        />

        <MultiChoiceQuestion
          question="10. What support would you most value from a co-creation partner?"
          description="Select all that apply (first 3 selections count toward your score)"
          options={partnershipSupportOptions}
          selectedOptions={partnershipSupport}
          onChange={handlePartnershipSupportChange}
          error={errors.partnershipSupport?.message}
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

export default Step3Form;
