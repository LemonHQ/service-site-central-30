
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface FeaturesSectionProps {
  features: ServiceFeature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Key Features"
          subtitle="Explore how our solution creates value for your organization"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {feature.icon && <feature.icon className="h-10 w-10 text-brand-400 mb-4" />}
                <h3 className="text-xl font-semibold mb-2 text-brand-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
