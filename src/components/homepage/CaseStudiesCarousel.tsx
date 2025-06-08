
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/caseStudies';
import { shuffleArray } from '@/lib/utils';

const CaseStudiesCarousel: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  // Shuffle case studies once when component mounts
  const shuffledCaseStudies = useMemo(() => shuffleArray(caseStudies), []);
  
  // Get the visible case studies based on current count
  const displayCaseStudies = shuffledCaseStudies.slice(0, Math.min(visibleCount, 6));

  // Auto-load remaining case studies after initial render
  useEffect(() => {
    if (visibleCount === 3 && shuffledCaseStudies.length > 3) {
      const timer = setTimeout(() => {
        setIsLoading(true);
        // Simulate loading delay for better UX
        setTimeout(() => {
          setVisibleCount(6);
          setIsLoading(false);
        }, 500);
      }, 2000); // Load after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [visibleCount, shuffledCaseStudies.length]);

  // Auto-scroll plugin configuration
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Success Stories" 
          subtitle="See how we've helped leading enterprises transform their product strategies"
          centered
        />
        
        <div className="relative">
          <Carousel
            plugins={[autoplayPlugin]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {displayCaseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={`/case-studies/${study.id}`} className="block h-full">
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform">
                      <div className="h-48 bg-gray-100">
                        <img 
                          src={study.featuredImage} 
                          alt={study.title} 
                          className="w-full h-full object-cover"
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                      </div>
                      <CardContent className="pt-6 pb-2">
                        <div className="flex gap-2 mb-2">
                          <span className="text-xs bg-brand-100 text-brand-600 px-2 py-1 rounded-full">
                            {study.industry}
                          </span>
                          {study.services[0] && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {study.services[0]}
                            </span>
                          )}
                        </div>
                        <CardTitle className="mb-2 text-xl">{study.title}</CardTitle>
                        <p className="text-sm text-gray-500 mb-2">Client: {study.client}</p>
                        <p className="text-gray-600 line-clamp-2">{study.summary}</p>
                      </CardContent>
                      <CardFooter>
                        <div className="text-brand-400 hover:text-brand-500 font-medium inline-flex items-center">
                          Read case study
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-400 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading more stories...</p>
                  </div>
                </CarouselItem>
              )}
              
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-brand-600">Ready to be our next success story?</h3>
                  <Link to="/case-studies">
                    <Button variant="outline" className="mb-2">View all case studies</Button>
                  </Link>
                  <br />
                  <Link to="/contact">
                    <Button>Start your project</Button>
                  </Link>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
