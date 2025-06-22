
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { LucideIcon } from 'lucide-react';

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
  title = "Features",
  subtitle 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={title} 
          subtitle={subtitle} 
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
