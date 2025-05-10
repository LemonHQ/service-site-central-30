
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ArrowRight } from 'lucide-react';
import SelectableBox from './SelectableBox';
import { Step2Data, step2Schema } from './schema';
import { challenges } from './formConstants';

interface Step2FormProps {
  defaultValues: Step2Data;
  onSubmit: (data: Step2Data) => void;
  onBack: () => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ defaultValues, onSubmit, onBack }) => {
  const form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues,
    mode: "onChange"
  });

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
      <h2 className="text-2xl font-semibold mb-6">What Challenges Are You Facing?</h2>
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
          <Button 
            type="button" 
            variant="outline" 
            onClick={onBack}
          >
            Back
          </Button>
          <Button type="submit" className="bg-brand-500 hover:bg-brand-600">
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step2Form;
