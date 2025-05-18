
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { CustomerProfile } from '@/data/customerProfiles';
import { cn } from '@/lib/utils';

interface CustomerProfilesSectionProps {
  profiles: CustomerProfile[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const CustomerProfilesSection: React.FC<CustomerProfilesSectionProps> = ({ 
  profiles,
  title = "Who We Serve",
  subtitle = "Tailored solutions for various customer profiles",
  className
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4">{profile.title}</h3>
              <div className="space-y-4">
                {profile.characteristics.map((char, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-brand-600">{char.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{char.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerProfilesSection;
