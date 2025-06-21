
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import SelectableBox from './SelectableBox';
import NumberOption from './NumberOption';
import { Step1Data, step1Schema } from './schema';
import { sectors, numberOptions, getBusinessContextByICP, getICPTitles } from './icpFormConstants';
import LeadFormButton from './LeadFormButton';

interface Step1FormProps {
  defaultValues: Step1Data;
  onSubmit: (data: Step1Data) => void;
  icpType: string;
}

const Step1Form: React.FC<Step1FormProps> = ({ defaultValues, onSubmit, icpType }) => {
  const form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues,
    mode: "onChange"
  });

  const businessContext = getBusinessContextByICP(icpType);
  const titles = getICPTitles(icpType);

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
      <h2 className="text-2xl font-semibold mb-6">{titles.businessTitle}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Business Sectors */}
        <div>
          <h3 className="text-lg font-medium mb-4">{businessContext.sectorLabel}</h3>
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
            label={businessContext.marketsLabel}
            options={numberOptions}
            value={form.getValues("markets")}
            onChange={(value) => {
              form.setValue("markets", value, { shouldValidate: true });
              form.trigger("markets");
            }}
            error={form.formState.errors.markets?.message}
          />
          
          <NumberOption
            label={businessContext.brandsLabel}
            options={numberOptions}
            value={form.getValues("brands")}
            onChange={(value) => {
              form.setValue("brands", value, { shouldValidate: true });
              form.trigger("brands");
            }}
            error={form.formState.errors.brands?.message}
          />
          
          <NumberOption
            label={businessContext.productsLabel}
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

export default Step1Form;
