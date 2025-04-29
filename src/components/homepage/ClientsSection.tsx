
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { 
  Globe, Cloud, Monitor, Server, Code, Share2, 
  MessageCircle, Database, FileCode, Bell, Palette, 
  Layout, FileEdit, CreditCard, ShoppingCart, Package
} from 'lucide-react';

interface Alliance {
  name: string;
  icon: React.ReactNode;
}

const ClientsSection: React.FC = () => {
  // Platform alliances
  const platformAlliances: Alliance[] = [
    { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
    { name: "Azure", icon: <Server className="w-8 h-8" /> },
    { name: "Google", icon: <Globe className="w-8 h-8" /> },
    { name: "Netlify", icon: <Monitor className="w-8 h-8" /> },
    { name: "Gatsby", icon: <Code className="w-8 h-8" /> },
    { name: "Meta", icon: <Share2 className="w-8 h-8" /> },
    { name: "TikTok", icon: <MessageCircle className="w-8 h-8" /> },
    { name: "Back4App", icon: <Database className="w-8 h-8" /> },
    { name: "Parse Server", icon: <FileCode className="w-8 h-8" /> },
    { name: "Firebase", icon: <Database className="w-8 h-8" /> },
    { name: "Twilio", icon: <Bell className="w-8 h-8" /> }
  ];

  // Technology expertise
  const technologyExpertise: Alliance[] = [
    { name: "Adobe Experience", icon: <Palette className="w-8 h-8" /> },
    { name: "Drupal", icon: <Layout className="w-8 h-8" /> },
    { name: "WordPress", icon: <FileEdit className="w-8 h-8" /> },
    { name: "Stripe", icon: <CreditCard className="w-8 h-8" /> },
    { name: "WooCommerce", icon: <ShoppingCart className="w-8 h-8" /> },
    { name: "Pimcore", icon: <Package className="w-8 h-8" /> }
  ];

  return (
    <section className="section-padding bg-ivory-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Alliances" 
          subtitle="We're proud to collaborate with industry leaders to drive data and excellence, positioning ourselves as a leading innovation company." 
          centered 
        />

        {/* Platform Alliances */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-brand-600 mb-6 text-center">Platform Alliances</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platformAlliances.map((alliance, index) => (
              <div 
                key={`platform-${index}`} 
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32 hover:shadow-md transition-shadow"
              >
                <div className="text-brand-500 mb-3">
                  {alliance.icon}
                </div>
                <p className="text-sm text-center font-medium text-gray-700">{alliance.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technology Expertise */}
        <div>
          <h3 className="text-xl font-semibold text-brand-600 mb-6 text-center">Technology Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologyExpertise.map((tech, index) => (
              <div 
                key={`tech-${index}`} 
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm h-32 hover:shadow-md transition-shadow"
              >
                <div className="text-brand-500 mb-3">
                  {tech.icon}
                </div>
                <p className="text-sm text-center font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
