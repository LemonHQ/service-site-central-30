
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoplayType from 'embla-carousel-autoplay';
import { H2, Paragraph } from '@/components/ui/Typography';

const EcosystemPartnersCarousel: React.FC = () => {
  // Ecosystem partners logos
  const partnerLogos = [
    {
      name: "UAE Pass",
      logo: "https://www.digitaldubai.ae/images/logo/DubaiNow_digital_dubai_uaepass.jpg" 
    },
    {
      name: "Royal Oman Police",
      logo: "https://rop.gov.om/images/logo.png"
    },
    {
      name: "Omantel",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Omantel_logo.svg/1200px-Omantel_logo.svg.png"
    },
    {
      name: "Twilio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/1200px-Twilio-logo-red.svg.png"
    },
    {
      name: "TuneProtect",
      logo: "https://www.tuneprotect.com/storage/app/media/images/Tune-Protect-Logo-400x400.png"
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
    },
    {
      name: "RTA UAE",
      logo: "https://www.rta.ae/wps/wcm/connect/rta/8fad11e8-9a55-4ed0-bbc2-801a05d8fddf/RTA-LOGO.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_N004G041LOBR60AUHP2NT32000-8fad11e8-9a55-4ed0-bbc2-801a05d8fddf-nQEBgJe"
    }
  ];

  // Create a plugin instance for autoplay
  const [plugin, setPlugin] = React.useState<any>(null);
  
  React.useEffect(() => {
    // Initialize the autoplay plugin
    const autoplayPlugin = AutoplayType({
      delay: 3000,
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <H2 className="mb-3">Our Ecosystem Partners</H2>
          <Paragraph className="text-gray-600 max-w-2xl mx-auto">
            We've collaborated with leading organizations to build integrated digital ecosystems
          </Paragraph>
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
            {partnerLogos.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="h-12 object-contain" 
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

export default EcosystemPartnersCarousel;
