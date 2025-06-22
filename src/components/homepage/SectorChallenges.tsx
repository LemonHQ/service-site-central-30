
import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Shield, Banknote, Hospital } from 'lucide-react';

interface Sector {
  id: string;
  title: string;
  icon: React.ReactNode;
  customerPersona: string;
  challenges: string[];
  solution: string;
}

const SectorChallenges: React.FC = () => {
  const [activeSector, setActiveSector] = useState<string>('financial');
  
  const sectors: Sector[] = [
    {
      id: 'financial',
      title: 'Financial Sector',
      icon: <Banknote className="h-8 w-8 text-accent-400" />,
      customerPersona: 'Financial Product owners who need to quickly adapt to changing market conditions and regulatory requirements',
      challenges: [
        'Legacy systems slowing down innovation',
        'Difficulty delivering consistent omnichannel experiences',
        'Balancing personalization with privacy concerns',
        'Increasing competitive pressure from fintech startups',
        'Pressure to modernize while maintaining legacy infrastructure for critical operations'
      ],
      solution: 'Our product strategy accelerates digital transformation, helping financial institutions deliver seamless experiences while maintaining security and compliance.'
    },
    {
      id: 'insurance',
      title: 'Insurance Sector',
      icon: <Shield className="h-8 w-8 text-accent-400" />,
      customerPersona: 'Insurance innovation stakeholders struggling with digital adoption and customer retention',
      challenges: [
        'Complex customer journeys with multiple touchpoints',
        'Outdated claims processing experiences',
        'Low digital engagement with policy holders',
        'Difficulty differentiating product offerings',
        'Lack of real-time data visibility for both customers and internal teams',
        'Challenges in integrating new technologies with traditional agent/broker models'
      ],
      solution: 'We transform insurance products by streamlining customer journeys and creating digital experiences that increase engagement and retention.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Sector',
      icon: <Hospital className="h-8 w-8 text-accent-400" />,
      customerPersona: 'Healthcare product leaders navigating personalized intricate patient needs and local regulatory requirements',
      challenges: [
        'Fragmented patient experiences across services and providers',
        'Strict regulatory and data compliance considerations',
        'Balancing digital innovation with privacy and security',
        'Need for accessible yet sophisticated interfaces',
        'Regulatory hurdles in launching new healthcare products or bundles across markets'
      ],
      solution: 'Our strategies help healthcare providers deliver integrated patient experiences while maintaining compliance and securing sensitive information.'
    }
  ];
  
  const activeSectorData = sectors.find(sector => sector.id === activeSector) || sectors[0];
  
  return (
    <section className="section-padding bg-ivory-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Who we optimize for" 
          subtitle="We solve the complex challenges brand and product face when transitioning to digital-first."
          centered
        />
        
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {/* Sector Buttons Column - Left Side */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="flex flex-col gap-3">
              {sectors.map((sector) => (
                <Button
                  key={sector.id}
                  variant={activeSector === sector.id ? "default" : "outline"}
                  className={`flex items-center justify-start gap-3 px-4 py-6 w-full text-left font-normal ${
                    activeSector === sector.id 
                      ? 'bg-accent-400 hover:bg-accent-500 text-white border-accent-400' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSector(sector.id)}
                >
                  {sector.icon}
                  <span className="font-normal">{sector.title}</span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Challenges Card - Right Side */}
          <div className="md:w-2/3 lg:w-3/4">
            <Card className="border-0 shadow-lg bg-white h-full">
              <div className="flex items-center space-x-4 p-6 border-b border-beige-200">
                <div className="bg-beige-100 p-3 rounded-lg">
                  {activeSectorData.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-gray-800">{activeSectorData.title}</h3>
                  <p className="text-gray-600 mt-1 font-light">{activeSectorData.solution}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="font-normal text-lg mb-4 text-gray-800">
                  Key Challenges
                </h4>
                <ul className="space-y-4">
                  {activeSectorData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-accent-400 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 font-light">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorChallenges;
