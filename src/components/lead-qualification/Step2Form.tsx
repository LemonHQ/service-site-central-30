
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import SelectableBox from './SelectableBox';
import { Step2Data, step2Schema } from './schema';
import { getChallengesByICP, getICPTitles } from './icpFormConstants';
import LeadFormButton from './LeadFormButton';

interface Step2FormProps {
  defaultValues: Step2Data;
  onSubmit: (data: Step2Data) => void;
  onBack: () => void;
  icpType: string;
}

const Step2Form: React.FC<Step2FormProps> = ({ defaultValues, onSubmit, onBack, icpType }) => {
  const form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues,
    mode: "onChange"
  });

  const challenges = getChallengesByICP(icpType);
  const titles = getICPTitles(icpType);

  // Toggle a challenge selection
  const toggleChallenge = (challengeId: string) => {
    const currentChallenges = form.getValues("challenges") || [];
    if (currentChallenges.includes(challengeId)) {
      const updatedChallenges = currentChallenges.filter(id => id !== challengeId);
      form.setValue("challenges", updatedChallenges, { shouldValidate: true });
      form.trigger("challenges");
    } else {
      const updatedChallenges = [...currentChallenges, challengeId];
      form.setValue("challenges", updatedChallenges, { shouldValidate: true });
      form.trigger("challenges");
    }
  };

  const selectedChallenges = form.watch("challenges") || [];

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">{titles.challengesTitle}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          {form.formState.errors.challenges && (
            <p className="text-red-500 text-sm mt-2">{form.formState.errors.challenges.message}</p>
          )}
        </div>

        <div className="pt-4 flex justify-between">
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
