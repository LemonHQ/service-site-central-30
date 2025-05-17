
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoplayType from 'embla-carousel-autoplay';

interface ClientLogosCarouselProps {
  title?: string;
  subtitle?: string;
}

const ClientLogosCarousel: React.FC<ClientLogosCarouselProps> = ({
  title = "Trusted by leading enterprise brands",
  subtitle
}) => {
  // Top enterprise brand logos
  const clientLogos = [{
    name: "Abbott",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Abbott_Laboratories_logo.svg"
  }, 
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  },
  {
    name: "Bridgestone",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bridgestone_logo.svg"
  },
  {
    name: "RSA",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/RSA_Insurance_Group_%28emblem%29.svg"
  }, 
  {
    name: "DAMAC",
    logo: "/assets/imgs/Damac_logo.svg"
  }, 
  {
    name: "MERAAS",
    logo: "/assets/imgs/Meraas-logo.svg"
  }, 
  {
    name: "Liva",
    logo: "https://companieslogo.com/img/orig/LIVA.OM-38255c53.svg"
  }, 
  {
    name: "Abdul Latif Jameel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Logo-Abdul-Latif-Jameel-co.png"
  },                       
  {
    name: "Informa",
    logo: "https://www.wikicorporates.org/mediawiki/images/a/af/Informa-2018.svg"
  },  
  {
    name: "DWTC",
    logo: "public/assets/imgs/DWTC-Logo-850x560.png"
  },
 {
    name: "OQ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Logo_of_OQ_Chemicals.svg"
  }, {
    name: "RJC",
    logo: "https://portal.responsiblejewellery.com/images/default-source/default-album/logo-rjc2020-rgb-1bd66e1ff6e234a39b027614b28874303.png"
  },
  {
    name: "Dubai Police",
    logo: "https://vectorlogoseek.com/wp-content/uploads/2020/02/dubai-police-logo-vector.png"
  }                      
  ];

  // Create a plugin instance for autoplay
  const [plugin, setPlugin] = useState<any>(null);
  
  useEffect(() => {
    // Initialize the autoplay plugin
    const autoplayPlugin = AutoplayType({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    });
    setPlugin(autoplayPlugin);
    return () => {
      // Cleanup when component unmounts
      if (plugin) plugin.stop();
    };
  }, []);
  
  return (
    <section className="py-12 bg-beige-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-light text-brand-600 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: true
          }} 
          plugins={plugin ? [plugin] : []} 
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clientLogos.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="h-16 flex items-center justify-center p-2">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="h-8 w-32 object-contain grayscale hover:grayscale-0 transition-all" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;
