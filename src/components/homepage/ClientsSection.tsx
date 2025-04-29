
import React from 'react';
import SectionHeading from '../ui/SectionHeading';

interface Alliance {
  name: string;
  logoUrl: string;
}

const ClientsSection: React.FC = () => {
  // Technology expertise with updated logo URLs
  const technologyExpertise: Alliance[] = [
    // Fixed Adobe Experience Manager logo
    { name: "Adobe Experience", logoUrl: "https://stensul.com/wp-content/uploads/2021/07/AEM.png" },
    // Fixed Drupal logo
    { name: "Drupal", logoUrl: "https://www.drupal.org/files/Wordmark_blue_RGB.png" },
    { name: "WordPress", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
    { name: "Stripe", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "WooCommerce", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg" },
    // Fixed Pimcore logo
    { name: "Pimcore", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Pimcore-logo-5.svg" }
  ];

  return (
    <section className="section-padding bg-ivory-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Technology Expertise" 
          subtitle="We collaborate with industry-leading technology providers to deliver comprehensive solutions." 
          centered 
        />
        
        {/* Technology Expertise */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologyExpertise.map((tech, index) => (
            <div 
              key={`tech-${index}`} 
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm h-24 hover:shadow-md transition-shadow"
            >
              <img 
                src={tech.logoUrl} 
                alt={`${tech.name} logo`} 
                className="h-12 object-contain" 
                title={tech.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
