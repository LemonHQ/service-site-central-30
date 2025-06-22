
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { CustomerProfile } from '@/data/customerProfiles';

interface CustomerProfilesSectionProps {
  profiles: CustomerProfile[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const CustomerProfilesSection: React.FC<CustomerProfilesSectionProps> = ({
  profiles,
  title = "Who is this for?",
  subtitle = "Different organizations at various stages of their journey",
  className = ""
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="text-gray-600 text-xl font-light h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3 text-center">{profile.title}</h3>
                  <p className="text-gray-600 text-center font-light leading-relaxed">{profile.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerProfilesSection;
