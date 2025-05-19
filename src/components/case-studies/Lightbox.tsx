
import React from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
} from '@/components/ui/dialog';

interface LightboxProps {
  images: string[];
  imageIndex: number | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
}

const Lightbox: React.FC<LightboxProps> = ({ 
  images, 
  imageIndex, 
  isOpen, 
  onOpenChange,
  onNext,
  onPrev,
  title
}) => {
  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-screen-lg max-h-[90vh] p-0 bg-transparent border-none shadow-none">
        <div className="relative w-full h-full">
          <div className="flex items-center justify-center h-full">
            {imageIndex !== null && images[imageIndex] && (
              <img 
                src={images[imageIndex]} 
                alt={`${title} - Full view`}
                className="max-h-[85vh] max-w-full object-contain"
              />
            )}
          </div>
          
          <div className="absolute top-0 right-0 p-4">
            <DialogClose asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-black/50 hover:bg-black/70 border-none text-white">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 p-4">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 border-none text-white"
              onClick={onPrev}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 p-4">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 border-none text-white"
              onClick={onNext}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {imageIndex !== null && (
              <span>{imageIndex + 1} of {images.length}</span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
