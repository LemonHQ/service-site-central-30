
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
      customerPersona: 'Financial Product Directors who need to quickly adapt to changing market conditions and regulatory requirements',
      challenges: [
        'Legacy systems slowing down innovation',
        'Difficulty delivering consistent omnichannel experiences',
        'Balancing personalization with privacy concerns',
        'Increasing competitive pressure from fintech startups'
      ],
      solution: 'Our product strategy accelerates digital transformation, helping financial institutions deliver seamless experiences while maintaining security and compliance.'
    },
    {
      id: 'insurance',
      title: 'Insurance Sector',
      icon: <Shield className="h-8 w-8 text-accent-400" />,
      customerPersona: 'Insurance Innovation Managers struggling with digital adoption and customer engagement',
      challenges: [
        'Complex customer journeys with multiple touchpoints',
        'Outdated claims processing experiences',
        'Low digital engagement with policy holders',
        'Difficulty differentiating product offerings'
      ],
      solution: 'We transform insurance products by streamlining customer journeys and creating digital experiences that increase engagement and retention.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Sector',
      icon: <Hospital className="h-8 w-8 text-accent-400" />,
      customerPersona: 'Healthcare Product Leaders navigating intricate patient needs and compliance requirements',
      challenges: [
        'Fragmented patient experiences across services',
        'Strict regulatory and compliance considerations',
        'Balancing digital innovation with data security',
        'Need for accessible yet sophisticated interfaces'
      ],
      solution: 'Our strategies help healthcare providers deliver integrated patient experiences while maintaining compliance and securing sensitive information.'
    }
  ];
  
  const activeSectorData = sectors.find(sector => sector.id === activeSector) || sectors[0];
  
  return (
    <section className="section-padding bg-ivory-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Industry-Specific Solutions" 
          subtitle="We address complex product and brand challenges across key regulated industries"
          centered
        />
        
        <div className="grid grid-cols-3 gap-4 mb-10">
          {sectors.map((sector) => (
            <Button
              key={sector.id}
              variant={activeSector === sector.id ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeSector === sector.id 
                  ? 'bg-accent-400 hover:bg-accent-500 text-white border-accent-400' 
                  : 'border border-brand-300 text-brand-600 hover:bg-brand-100'
              }`}
              onClick={() => setActiveSector(sector.id)}
            >
              {sector.icon}
              {sector.title}
            </Button>
          ))}
        </div>
        
        <Card className="border-0 shadow-lg bg-white overflow-hidden transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            <CardContent className="p-8">
              <div className="bg-beige-100 p-4 inline-block rounded-lg mb-6">
                {activeSectorData.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-brand-600">{activeSectorData.title}</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 text-brand-500">Customer Persona</h4>
                <p className="text-gray-700">{activeSectorData.customerPersona}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2 text-brand-500">Our Solution</h4>
                <p className="text-gray-700">{activeSectorData.solution}</p>
              </div>
            </CardContent>
            
            <CardContent className="bg-brand-100 p-8">
              <h4 className="font-semibold text-lg mb-4 text-brand-500">
                Key Challenges
              </h4>
              <ul className="space-y-4">
                {activeSectorData.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-accent-400 rounded-full w-6 h-6 flex items-center justify-center text-white mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SectorChallenges;
