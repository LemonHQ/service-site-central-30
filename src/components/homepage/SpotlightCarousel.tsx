
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface SpotlightSlide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor: string;
}

const SpotlightCarousel: React.FC = () => {
  const slides: SpotlightSlide[] = [
    {
      title: "Validate Your Product Ideas",
      description: "Turn innovative concepts into validated market opportunities with our data-driven methodologies.",
      buttonText: "Explore Validation Services",
      buttonLink: "/services/validating-product-ideas",
      secondaryButtonText: "Schedule Consultation",
      secondaryButtonLink: "/contact",
      bgColor: "from-brand-700 to-brand-600",
    },
    {
      title: "Launch Products with Confidence",
      description: "Accelerate time-to-market with expert launch strategies that captivate your audience.",
      buttonText: "Discover Launch Services",
      buttonLink: "/services/launching-products",
      secondaryButtonText: "View Case Studies",
      secondaryButtonLink: "/case-studies",
      bgColor: "from-brand-600 to-brand-500",
    },
    {
      title: "Scale Your Digital Portfolio",
      description: "Optimize and grow your product ecosystem with enterprise-grade scaling strategies.",
      buttonText: "Learn About Scaling",
      buttonLink: "/services/scaling-products",
      secondaryButtonText: "Talk to an Expert",
      secondaryButtonLink: "/contact",
      bgColor: "from-brand-500 to-brand-400",
    }
  ];

  return (
    <section className="relative h-screen">
      <Carousel className="h-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className={`flex flex-col justify-center h-full bg-gradient-to-br ${slide.bgColor} text-white px-4 sm:px-6 lg:px-8`}>
                <div className="container mx-auto">
                  <div className="max-w-3xl">
                    <h1 className="mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-brand-100 animate-slide-in">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <Link to={slide.buttonLink}>
                        <Button className="bg-white text-brand-600 hover:bg-brand-100 py-6 px-8 text-lg">
                          {slide.buttonText}
                        </Button>
                      </Link>
                      {slide.secondaryButtonText && (
                        <Link to={slide.secondaryButtonLink || '#'}>
                          <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                            {slide.secondaryButtonText}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className="w-3 h-3 rounded-full bg-white/50" 
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  );
};

export default SpotlightCarousel;
