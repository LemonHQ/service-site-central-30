
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Users, Building2, TrendingUp, Lightbulb } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Step0Data, step0Schema } from './schema';
import { icpTypes } from './icpFormConstants';
import LeadFormButton from './LeadFormButton';

interface Step0FormProps {
  defaultValues: Step0Data;
  onSubmit: (data: Step0Data) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'users':
      return <Users className="h-8 w-8" />;
    case 'building':
      return <Building2 className="h-8 w-8" />;
    case 'trending-up':
      return <TrendingUp className="h-8 w-8" />;
    case 'lightbulb':
      return <Lightbulb className="h-8 w-8" />;
    default:
      return <Users className="h-8 w-8" />;
  }
};

const Step0Form: React.FC<Step0FormProps> = ({ defaultValues, onSubmit }) => {
  const form = useForm<Step0Data>({
    resolver: zodResolver(step0Schema),
    defaultValues,
    mode: "onChange"
  });

  const selectedICP = form.watch("icp_type");

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">What Best Describes Your Role?</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <p className="text-gray-600 mb-6">
            Help us personalize your experience by selecting the option that best describes your role in digital transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {icpTypes.map(icp => (
              <div
                key={icp.id}
                onClick={() => {
                  form.setValue("icp_type", icp.id, { shouldValidate: true });
                  form.trigger("icp_type");
                }}
                className={cn(
                  "border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md",
                  selectedICP === icp.id 
                    ? "border-brand-500 bg-brand-50 shadow-sm" 
                    : "border-gray-200 bg-white hover:border-gray-300"
                )}
              >
                <div className="flex flex-col items-start">
                  <div className={cn(icp.color, "rounded-full p-3 mb-4")}>
                    <div className={icp.iconColor}>
                      {getIcon(icp.icon)}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-600">{icp.title}</h3>
                  <p className="text-sm font-medium text-gray-700 mb-2">{icp.subtitle}</p>
                  <p className="text-sm text-gray-600">{icp.description}</p>
                </div>
              </div>
            ))}
          </div>
          {form.formState.errors.icp_type && (
            <p className="text-red-500 text-sm mt-2">{form.formState.errors.icp_type.message}</p>
          )}
        </div>

        <div className="pt-4 flex justify-end">
          <LeadFormButton 
            type="submit" 
            variant="primary" 
            icon="right-arrow"
            fullWidth={true} 
            className="md:w-auto"
          >
            Continue
          </LeadFormButton>
        </div>
      </form>
    </div>
  );
};

export default Step0Form;
