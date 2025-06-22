
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { CaseStudy } from '@/data/caseStudies';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface RelatedCaseStudiesSectionProps {
  relatedCaseStudies: CaseStudy[];
}

const RelatedCaseStudiesSection: React.FC<RelatedCaseStudiesSectionProps> = ({ relatedCaseStudies }) => {
  if (relatedCaseStudies.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Related Case Studies"
          subtitle="Explore other success stories in this industry"
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
              {relatedCaseStudies.map((caseStudy) => (
                <CarouselItem key={caseStudy.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <CaseStudyCard caseStudy={caseStudy} />
                </CarouselItem>
              ))}
              
              {/* CTA Card */}
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

export default RelatedCaseStudiesSection;
