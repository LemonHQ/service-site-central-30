
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CustomerProfile } from '@/data/customerProfiles';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SectionHeading from '@/components/ui/SectionHeading';
import { H3, Paragraph } from '@/components/ui/Typography';

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
  // Track expanded state for each profile
  const [expandedStates, setExpandedStates] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (profileTitle: string) => {
    setExpandedStates(prev => ({
      ...prev,
      [profileTitle]: !prev[profileTitle]
    }));
  };

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
            const isExpanded = !!expandedStates[profile.title];
            const Icon = profile.icon;
            
            return (
              <Card key={index} className="overflow-hidden border-t-4 shadow-md hover:shadow-lg transition-shadow" style={{ borderTopColor: profile.colorClass.includes('green') ? '#4ADE80' : profile.colorClass.includes('amber') ? '#F59E0B' : '#3B82F6' }}>
                <CardHeader className={`${profile.bgColorClass} pb-4`}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${profile.bgColorClass} border-2`} style={{ borderColor: profile.colorClass.includes('green') ? '#4ADE80' : profile.colorClass.includes('amber') ? '#F59E0B' : '#3B82F6' }}>
                      <Icon className={`h-5 w-5 ${profile.colorClass}`} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${profile.colorClass}`}>
                        {profile.type === 'early-stage' ? 'EARLY-STAGE' : profile.type === 'growth' ? 'GROWTH' : 'MATURE'}
                      </p>
                      <H3 className="mt-1 mb-0">{profile.title}</H3>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Paragraph className="mb-4">{profile.description}</Paragraph>
                  
                  <Collapsible 
                    open={isExpanded} 
                    onOpenChange={() => toggleExpanded(profile.title)}
                    className="space-y-2"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-brand-500 hover:text-brand-600">
                      <span>View details</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                      />
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="mt-4 space-y-4 animate-accordion-down">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Typical Challenges:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {profile.challenges.map((challenge, i) => (
                            <li key={i} className="text-gray-700 text-sm">{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">How Our Services Help:</h4>
                        <p className="text-gray-700 text-sm">{profile.serviceFit}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
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
