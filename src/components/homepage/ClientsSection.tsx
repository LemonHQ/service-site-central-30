
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
  
  // Mock client data with placeholder images
  const clients: Record<string, Client[]> = {
    "Financial Services": [
      { name: "Global Bank", logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&h=100&q=80", industry: "Financial Services" },
      { name: "Investment Partners", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&h=100&q=80", industry: "Financial Services" },
      { name: "InsureTech", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100&q=80", industry: "Financial Services" },
    ],
    "Healthcare": [
      { name: "MediCare Systems", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&q=80", industry: "Healthcare" },
      { name: "HealthGroup", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=80", industry: "Healthcare" },
      { name: "Pharma Innovations", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=100&q=80", industry: "Healthcare" },
    ],
    "Retail": [
      { name: "Retail Giant", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&h=100&q=80", industry: "Retail" },
      { name: "Fashion Forward", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=100&q=80", industry: "Retail" },
      { name: "Home Goods Co.", logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=200&h=100&q=80", industry: "Retail" },
    ],
    "Technology": [
      { name: "Tech Innovators", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100&q=80", industry: "Technology" },
      { name: "Software Solutions", logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&h=100&q=80", industry: "Technology" },
      { name: "Cloud Systems", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&q=80", industry: "Technology" },
    ],
    "Manufacturing": [
      { name: "Industrial Solutions", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=100&q=80", industry: "Manufacturing" },
      { name: "Product Makers", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=80", industry: "Manufacturing" },
      { name: "Assembly Pro", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=100&q=80", industry: "Manufacturing" },
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
