
import React from 'react';
import { LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  features: ServiceFeature[];
  title?: string;
  subtitle?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  features,
  title = "Our Services",
  subtitle = "Comprehensive solutions tailored to your needs"
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="bg-brand-50 p-3 rounded-lg w-fit mb-4">
                  {Icon && <Icon className="h-6 w-6 text-brand-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
