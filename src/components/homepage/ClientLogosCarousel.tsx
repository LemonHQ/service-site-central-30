
import React, { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface ClientLogosCarouselProps {
  title?: string;
}

const ClientLogosCarousel: React.FC<ClientLogosCarouselProps> = ({ title = "Trusted by leading enterprise brands" }) => {
  // Top enterprise brand logos
  const clientLogos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  ];

  // Create a plugin instance for autoplay
  const [plugin, setPlugin] = useState<Autoplay | null>(null);

  useEffect(() => {
    // Initialize the autoplay plugin
    const autoplayPlugin = Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
    
    setPlugin(autoplayPlugin);
    
    return () => {
      // Cleanup when component unmounts
      if (plugin) plugin.stop();
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">{title}</p>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
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
