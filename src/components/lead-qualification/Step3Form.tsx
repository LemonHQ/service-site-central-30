
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Step3Data, step3Schema } from './schema';
import { timeframes } from './formConstants';
import LeadFormButton from './LeadFormButton';

interface Step3FormProps {
  defaultValues: Step3Data;
  onSubmit: (data: Step3Data) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const Step3Form: React.FC<Step3FormProps> = ({ 
  defaultValues, 
  onSubmit, 
  onBack, 
  isSubmitting 
}) => {
  const form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues,
    mode: "onChange"
  });

  const selectedTimeframe = form.watch("timeframe");

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">Your Priorities</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Timeframe */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">How soon are you planning to make a decision?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {timeframes.map(timeframe => (
              <div
                key={timeframe.id}
                onClick={() => {
                  form.setValue("timeframe", timeframe.id, { shouldValidate: true });
                  form.trigger("timeframe");
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
          {form.formState.errors.timeframe && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.timeframe.message}</p>
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
            {...form.register("email")}
            className="w-full"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
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
            isSubmitting={isSubmitting}
          >
            Submit
          </LeadFormButton>
        </div>
      </form>
    </div>
  );
};

export default Step3Form;
