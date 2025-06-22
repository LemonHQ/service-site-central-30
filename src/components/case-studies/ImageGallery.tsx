
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H3 } from '@/components/ui/Typography';

interface ImageGalleryProps {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, onImageClick }) => {
  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <div className="py-16 bg-gray-50 rounded-lg mb-16">
      <div className="container mx-auto px-4">
        <H3 className="mb-6">Project Gallery</H3>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                <div 
                  className="rounded-lg overflow-hidden h-64 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => onImageClick(index)}
                >
                  <img 
                    src={image} 
                    alt={`${title} - Image ${index+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageGallery;
