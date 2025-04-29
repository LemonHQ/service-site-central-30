
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { 
  Aws, Azure, Google, Netlify, Gatsby, Meta, Tiktok, 
  Back4app, Firebase, Twilio, AdobeExperience, Drupal, 
  Wordpress, Stripe, Woocommerce, Pimcore
} from 'lucide-react';

interface Alliance {
  name: string;
  icon: React.ReactNode;
}

const ClientsSection: React.FC = () => {
  // Platform alliances
  const platformAlliances: Alliance[] = [
    { name: "AWS", icon: <Aws className="w-8 h-8" /> },
    { name: "Azure", icon: <Azure className="w-8 h-8" /> },
    { name: "Google", icon: <Google className="w-8 h-8" /> },
    { name: "Netlify", icon: <Netlify className="w-8 h-8" /> },
    { name: "Gatsby", icon: <Gatsby className="w-8 h-8" /> },
    { name: "Meta", icon: <Meta className="w-8 h-8" /> },
    { name: "TikTok", icon: <Tiktok className="w-8 h-8" /> },
    { name: "Back4App", icon: <Back4app className="w-8 h-8" /> },
    { name: "Parse Server", icon: <Firebase className="w-8 h-8" /> },
    { name: "Firebase", icon: <Firebase className="w-8 h-8" /> },
    { name: "Twilio", icon: <Twilio className="w-8 h-8" /> }
  ];

  // Technology expertise
  const technologyExpertise: Alliance[] = [
    { name: "Adobe Experience", icon: <AdobeExperience className="w-8 h-8" /> },
    { name: "Drupal", icon: <Drupal className="w-8 h-8" /> },
    { name: "WordPress", icon: <Wordpress className="w-8 h-8" /> },
    { name: "Stripe", icon: <Stripe className="w-8 h-8" /> },
    { name: "WooCommerce", icon: <Woocommerce className="w-8 h-8" /> },
    { name: "Pimcore", icon: <Pimcore className="w-8 h-8" /> }
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
