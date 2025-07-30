
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import OptimizedImage from '@/components/ui/OptimizedImage';

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
    <div className="py-16 bg-brand-100 rounded-lg mb-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">Project Gallery</h3>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                <div 
                  className="rounded-lg overflow-hidden h-64 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => onImageClick(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onImageClick(index);
                    }
                  }}
                  aria-label={`View ${title} image ${index + 1} in lightbox`}
                >
                  <OptimizedImage 
                    src={image} 
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full"
                    objectFit="cover"
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
