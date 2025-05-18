
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
          {profiles && profiles.map((profile, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className={`${profile.bgColorClass} p-3 inline-block rounded-full mb-4`}>
                <profile.icon className={`w-6 h-6 ${profile.colorClass}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{profile.title}</h3>
              <p className="text-gray-600 mb-6">{profile.description}</p>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Common Challenges:</h4>
                <ul className="space-y-2">
                  {profile.challenges && profile.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-brand-600 mt-0.5">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {profile.serviceFit && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-2">How We Help:</h4>
                  <p className="text-gray-600 text-sm">{profile.serviceFit}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerProfilesSection;
