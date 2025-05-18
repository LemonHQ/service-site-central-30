
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          centered
        />
        
        <div className="mt-12">
          <Carousel className="w-full">
            <CarouselContent>
              {children}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
