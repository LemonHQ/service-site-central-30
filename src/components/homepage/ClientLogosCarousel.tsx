
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface ClientLogosCarouselProps {
  title?: string;
}

const ClientLogosCarousel: React.FC<ClientLogosCarouselProps> = ({ title = "Trusted by leading enterprise brands" }) => {
  // In a real implementation, these would be actual client logos
  const clientLogos = [
    { name: "Tech Corp", logo: "/placeholder.svg" },
    { name: "Global Industries", logo: "/placeholder.svg" },
    { name: "Innovation Labs", logo: "/placeholder.svg" },
    { name: "Enterprise Solutions", logo: "/placeholder.svg" },
    { name: "Future Systems", logo: "/placeholder.svg" },
    { name: "Digital Ventures", logo: "/placeholder.svg" },
    { name: "Smart Tech", logo: "/placeholder.svg" },
    { name: "Cloud Partners", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">{title}</p>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clientLogos.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
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
