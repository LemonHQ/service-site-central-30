
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ArrowRight } from 'lucide-react';
import SelectableBox from './SelectableBox';
import NumberOption from './NumberOption';
import { Step1Data, step1Schema } from './schema';
import { sectors, numberOptions } from './formConstants';

interface Step1FormProps {
  defaultValues: Step1Data;
  onSubmit: (data: Step1Data) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ defaultValues, onSubmit }) => {
  const form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues,
    mode: "onChange"
  });

  // Toggle a sector selection
  const toggleSector = (sectorId: string) => {
    const currentSectors = form.getValues("sectors") || [];
    if (currentSectors.includes(sectorId)) {
      const updatedSectors = currentSectors.filter(id => id !== sectorId);
      form.setValue("sectors", updatedSectors, { shouldValidate: true });
      form.trigger("sectors");
    } else {
      const updatedSectors = [...currentSectors, sectorId];
      form.setValue("sectors", updatedSectors, { shouldValidate: true });
      form.trigger("sectors");
    }
  };

  const selectedSectors = form.watch("sectors") || [];

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">A Little Bit About Your Business</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Business Sectors */}
        <div>
          <h3 className="text-lg font-medium mb-4">Which business sectors do you operate in?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectors.map(sector => (
              <SelectableBox
                key={sector.id}
                id={sector.id}
                label={sector.label}
                selected={selectedSectors.includes(sector.id)}
                onClick={() => toggleSector(sector.id)}
              />
            ))}
          </div>
          {form.formState.errors.sectors && (
            <p className="text-red-500 text-sm mt-2">{form.formState.errors.sectors.message}</p>
          )}
        </div>

        {/* Markets, Brands, Products */}
        <div className="space-y-6">
          <NumberOption
            label="How many markets do you operate in?"
            options={numberOptions}
            value={form.getValues("markets")}
            onChange={(value) => {
              form.setValue("markets", value, { shouldValidate: true });
              form.trigger("markets");
            }}
            error={form.formState.errors.markets?.message}
          />
          
          <NumberOption
            label="How many brands do you have?"
            options={numberOptions}
            value={form.getValues("brands")}
            onChange={(value) => {
              form.setValue("brands", value, { shouldValidate: true });
              form.trigger("brands");
            }}
            error={form.formState.errors.brands?.message}
          />
          
          <NumberOption
            label="How many products do you have?"
            options={numberOptions}
            value={form.getValues("products")}
            onChange={(value) => {
              form.setValue("products", value, { shouldValidate: true });
              form.trigger("products");
            }}
            error={form.formState.errors.products?.message}
          />
        </div>

        <div className="pt-4 flex justify-end">
          <Button type="submit" className="bg-brand-500 hover:bg-brand-600 w-full md:w-auto">
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1Form;
