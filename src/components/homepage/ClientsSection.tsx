
import React from 'react';
import SectionHeading from '../ui/SectionHeading';

interface Alliance {
  name: string;
  logoUrl: string;
}

const ClientsSection: React.FC = () => {
  // Platform alliances with updated logo URLs
  const platformAlliances: Alliance[] = [
    { name: "AWS", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
    // Fixed Google logo
    { name: "Google", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Netlify", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" },
    // Fixed Gatsby logo
    { name: "Gatsby", logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png" },
    { name: "Meta", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "TikTok", logoUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
    // Fixed Back4App logo
    { name: "Back4App", logoUrl: "https://www.back4app.com/docs/assets/images/back4app-logo.svg" },
    { name: "Parse Server", logoUrl: "https://parseplatform.org/img/logo.svg" },
    { name: "Firebase", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { name: "Twilio", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" }
  ];

  // Technology expertise with updated logo URLs
  const technologyExpertise: Alliance[] = [
    // Fixed Adobe Experience Manager logo
    { name: "Adobe Experience", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Adobe_Experience_Cloud_logo.svg" },
    // Fixed Drupal logo
    { name: "Drupal", logoUrl: "https://www.drupal.org/files/Wordmark_blue_RGB.png" },
    { name: "WordPress", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
    { name: "Stripe", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "WooCommerce", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" },
    // Fixed Pimcore logo
    { name: "Pimcore", logoUrl: "https://pimcore.com/en/resources/images/logo/pimcore-logo.svg" }
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
                <img 
                  src={alliance.logoUrl} 
                  alt={`${alliance.name} logo`} 
                  className="h-12 mb-3 object-contain" 
                />
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
                <img 
                  src={tech.logoUrl} 
                  alt={`${tech.name} logo`} 
                  className="h-12 mb-3 object-contain" 
                />
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
