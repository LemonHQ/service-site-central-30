
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionHeading from '@/components/ui/SectionHeading';

interface CarouselSectionProps<T> {
  title: string;
  subtitle: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  bgColor?: string;
  limit?: number;
}

function CarouselSection<T>({
  title,
  subtitle,
  items,
  renderItem,
  bgColor = "bg-white",
  limit
}: CarouselSectionProps<T>) {
  // Apply limit if specified
  const displayItems = limit ? items.slice(0, limit) : items;
  
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <SectionHeading 
          title={title} 
          subtitle={subtitle} 
          centered
        />
        
        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {displayItems.map((item: any, index) => (
                <CarouselItem key={item.id || index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    {renderItem(item)}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
