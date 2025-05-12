
import React from 'react';
import { Link } from 'react-router-dom';
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

const CaseStudiesCarousel: React.FC = () => {
  // Get a subset of case studies to display (first 6)
  const displayCaseStudies = caseStudies.slice(0, 6);

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
            opts={{
              align: "start",
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
