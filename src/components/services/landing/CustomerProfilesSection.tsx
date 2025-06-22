
import React from 'react';
import { CustomerProfile } from '@/data/customerProfiles';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import { H3, H4, Paragraph } from '@/components/ui/Typography';

interface CustomerProfilesSectionProps {
  profiles: CustomerProfile[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const CustomerProfilesSection: React.FC<CustomerProfilesSectionProps> = ({
  profiles,
  title = "Customer Profiles",
  subtitle = "With you at different stages of your brand journey",
  className
}) => {
  if (!profiles || profiles.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            
            return (
              <Card key={index} className="overflow-hidden border-t-4 shadow-md hover:shadow-lg transition-shadow" style={{ borderTopColor: profile.colorClass.includes('green') ? '#4ADE80' : profile.colorClass.includes('amber') ? '#F59E0B' : '#3B82F6' }}>
                <CardHeader className={`${profile.bgColorClass} pb-4`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${profile.bgColorClass} border-2`} style={{ borderColor: profile.colorClass.includes('green') ? '#4ADE80' : profile.colorClass.includes('amber') ? '#F59E0B' : '#3B82F6' }}>
                      <Icon className={`h-5 w-5 ${profile.colorClass}`} />
                    </div>
                    <div>
                      <Paragraph className={`text-sm font-medium ${profile.colorClass} mb-0`}>
                        {profile.type === 'early-stage' ? 'EARLY-STAGE' : profile.type === 'growth' ? 'GROWTH' : 'MATURE'}
                      </Paragraph>
                      <H3 className="mt-1 mb-0">{profile.title}</H3>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Paragraph className="mb-4">{profile.description}</Paragraph>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <H4 className="text-sm font-semibold mb-2">Typical Challenges:</H4>
                      <ul className="list-disc pl-6 space-y-1">
                        {profile.challenges.map((challenge, i) => (
                          <li key={i} className="text-gray-700 text-sm">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <H4 className="text-sm font-semibold mb-2">How Our Services Help:</H4>
                      <Paragraph className="text-sm mb-0">{profile.serviceFit}</Paragraph>
                    </div>
                  </div>
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
