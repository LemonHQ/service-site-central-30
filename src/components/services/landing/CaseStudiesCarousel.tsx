
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/caseStudies';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CaseStudiesCarousel: React.FC = () => {
  // Get first 5 case studies for carousel
  const featuredCaseStudies = caseStudies.slice(0, 5);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <SectionHeading
            title="Case Studies"
            subtitle="See how we've helped organizations like yours"
            className="md:text-left"
          />
          
          <Link to="/case-studies" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              <span>View All Case Studies</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {featuredCaseStudies.map((caseStudy) => (
              <CarouselItem key={caseStudy.id} className="md:basis-1/2 lg:basis-1/3">
                <Link to={`/case-studies/${caseStudy.slug}`} className="block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={caseStudy.imageUrl} 
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-brand-600 font-medium">{caseStudy.industry}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{caseStudy.description}</p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
