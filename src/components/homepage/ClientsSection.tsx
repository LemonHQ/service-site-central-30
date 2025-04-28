
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Client {
  name: string;
  logo: string;
  industry: string;
}

const ClientsSection: React.FC = () => {
  // Group clients by industry
  const industries = [
    "Financial Services",
    "Healthcare",
    "Retail",
    "Technology",
    "Manufacturing"
  ];
  
  // Mock client data - in a real app, this would come from a CMS or API
  const clients: Record<string, Client[]> = {
    "Financial Services": [
      { name: "Global Bank", logo: "/placeholder.svg", industry: "Financial Services" },
      { name: "Investment Partners", logo: "/placeholder.svg", industry: "Financial Services" },
      { name: "InsureTech", logo: "/placeholder.svg", industry: "Financial Services" },
    ],
    "Healthcare": [
      { name: "MediCare Systems", logo: "/placeholder.svg", industry: "Healthcare" },
      { name: "HealthGroup", logo: "/placeholder.svg", industry: "Healthcare" },
      { name: "Pharma Innovations", logo: "/placeholder.svg", industry: "Healthcare" },
    ],
    "Retail": [
      { name: "Retail Giant", logo: "/placeholder.svg", industry: "Retail" },
      { name: "Fashion Forward", logo: "/placeholder.svg", industry: "Retail" },
      { name: "Home Goods Co.", logo: "/placeholder.svg", industry: "Retail" },
    ],
    "Technology": [
      { name: "Tech Innovators", logo: "/placeholder.svg", industry: "Technology" },
      { name: "Software Solutions", logo: "/placeholder.svg", industry: "Technology" },
      { name: "Cloud Systems", logo: "/placeholder.svg", industry: "Technology" },
    ],
    "Manufacturing": [
      { name: "Industrial Solutions", logo: "/placeholder.svg", industry: "Manufacturing" },
      { name: "Product Makers", logo: "/placeholder.svg", industry: "Manufacturing" },
      { name: "Assembly Pro", logo: "/placeholder.svg", industry: "Manufacturing" },
    ],
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Clients" 
          subtitle="We partner with leading enterprises across industries to transform their product strategies"
          centered
        />

        <div className="mb-8">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 p-4">
              {industries.map((industry) => (
                <div key={industry} className="flex-none">
                  <Button variant="outline" className="rounded-full">
                    {industry}
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {industries.map((industry) => (
            clients[industry].map((client, index) => (
              <div 
                key={`${industry}-${index}`} 
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-12 w-24 object-contain mb-3 grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-sm text-center font-medium text-gray-700">{client.name}</p>
                <p className="text-xs text-center text-gray-500">{client.industry}</p>
              </div>
            ))
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/clients">
            <Button variant="outline">View All Clients</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
