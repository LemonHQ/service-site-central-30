
import React from 'react';
import { CarouselItem } from "@/components/ui/carousel";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CarouselSection from './CarouselSection';
import { caseStudies } from '@/data/caseStudies';

interface CaseStudiesCarouselProps {
  limit?: number;
  title?: string;
  subtitle?: string;
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({
  limit = 6,
  title = "Case Studies",
  subtitle = "See how we've helped leading organizations solve complex challenges"
}) => {
  // Get limited number of case studies
  const limitedCaseStudies = caseStudies.slice(0, limit);
  
  return (
    <CarouselSection
      title={title}
      subtitle={subtitle}
    >
      {limitedCaseStudies.map((study, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="relative group h-full">
            <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col">
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                {study.imageUrl && (
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium text-brand-300">{study.industry}</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow p-5 space-y-4">
                <h3 className="font-bold text-lg text-gray-900">{study.title}</h3>
                {study.description && (
                  <p className="text-gray-600 text-sm flex-grow">{study.description.length > 100 
                    ? `${study.description.substring(0, 100)}...` 
                    : study.description}
                  </p>
                )}
                <Link to={`/case-studies/${study.id}`}>
                  <Button variant="link" className="p-0 flex items-center gap-1 text-brand-600">
                    View case study <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselSection>
  );
};

export default CaseStudiesCarousel;
