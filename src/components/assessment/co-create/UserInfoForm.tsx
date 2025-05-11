
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FinalStepData, finalStepSchema } from './assessmentSchema';
import { Input } from '@/components/ui/input';
import LeadFormButton from '@/components/lead-qualification/LeadFormButton';

interface UserInfoFormProps {
  defaultValues: FinalStepData;
  onSubmit: (data: FinalStepData) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ 
  defaultValues, 
  onSubmit, 
  onBack, 
  isSubmitting 
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FinalStepData>({
    resolver: zodResolver(finalStepSchema),
    defaultValues,
    mode: "onChange"
  });

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">Almost Done!</h2>
      <p className="text-gray-600 mb-6">
        Please provide your contact information to receive your personalized co-creation readiness assessment results.
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Smith"
            {...register("name")}
            className="w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Work Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register("email")}
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex justify-between pt-4">
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
            Submit Assessment
          </LeadFormButton>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
