
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
    { name: "Tech Corp", logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Global Industries", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Innovation Labs", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Enterprise Solutions", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Future Systems", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Digital Ventures", logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Smart Tech", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=100&q=80" },
    { name: "Cloud Partners", logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=200&h=100&q=80" },
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
