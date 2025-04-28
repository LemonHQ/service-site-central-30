
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
    "Technology",
    "E-commerce & Retail",
    "Financial Services",
    "Manufacturing",
    "Healthcare"
  ];
  
  // Enterprise client data with actual logos organized by industry
  const clients: Record<string, Client[]> = {
    "Technology": [
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", industry: "Technology" },
      { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", industry: "Technology" },
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", industry: "Technology" },
    ],
    "E-commerce & Retail": [
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", industry: "E-commerce & Retail" },
      { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg", industry: "E-commerce & Retail" },
      { name: "Target", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg", industry: "E-commerce & Retail" },
    ],
    "Financial Services": [
      { name: "JP Morgan", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/J.P._Morgan_Logo_2008_1.svg", industry: "Financial Services" },
      { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", industry: "Financial Services" },
      { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", industry: "Financial Services" },
    ],
    "Manufacturing": [
      { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg", industry: "Manufacturing" },
      { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", industry: "Manufacturing" },
      { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg", industry: "Manufacturing" },
    ],
    "Healthcare": [
      { name: "Johnson & Johnson", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Johnson_and_Johnson_Logo.svg", industry: "Healthcare" },
      { name: "UnitedHealth Group", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/UnitedHealth_Group_logo.svg", industry: "Healthcare" },
      { name: "Pfizer", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Pfizer_logo.svg", industry: "Healthcare" },
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
