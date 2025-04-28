
import React from 'react';
import SectionHeading from '../ui/SectionHeading';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

const PartnersSection: React.FC = () => {
  // Mock partner data - in a real app, this would come from a CMS or API
  const partners: Partner[] = [
    {
      name: "Microsoft",
      logo: "/placeholder.svg",
      description: "Strategic technology partner for cloud solutions and enterprise applications"
    },
    {
      name: "Salesforce",
      logo: "/placeholder.svg",
      description: "CRM implementation and customer experience optimization partner"
    },
    {
      name: "AWS",
      logo: "/placeholder.svg",
      description: "Cloud infrastructure and serverless architecture partner"
    },
    {
      name: "Adobe",
      logo: "/placeholder.svg",
      description: "Creative and marketing technology solutions partner"
    },
    {
      name: "Google Cloud",
      logo: "/placeholder.svg",
      description: "AI, machine learning, and data analytics partner"
    },
    {
      name: "SAP",
      logo: "/placeholder.svg",
      description: "Enterprise resource planning and business operations partner"
    },
    {
      name: "IBM",
      logo: "/placeholder.svg",
      description: "Digital transformation and enterprise modernization partner"
    },
    {
      name: "Oracle",
      logo: "/placeholder.svg",
      description: "Database, middleware, and enterprise applications partner"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technology Partners" 
          subtitle="We collaborate with industry-leading technology providers to deliver comprehensive solutions"
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
