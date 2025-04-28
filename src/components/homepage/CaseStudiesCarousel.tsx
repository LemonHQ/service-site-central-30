
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

interface CaseStudy {
  title: string;
  client: string;
  description: string;
  image: string;
  link: string;
  industry: string;
  service: string;
}

const CaseStudiesCarousel: React.FC = () => {
  // Example case studies - in a real app these would come from a CMS or API
  const caseStudies: CaseStudy[] = [
    {
      title: "Digital Transformation for Financial Services",
      client: "Global Bank Inc.",
      description: "Redesigned core banking products resulting in 40% increase in user engagement and 25% reduction in customer support calls.",
      image: "/placeholder.svg",
      link: "/case-studies/global-bank",
      industry: "Financial Services",
      service: "Digital Transformation"
    },
    {
      title: "E-commerce Platform Optimization",
      client: "Retail Giant Co.",
      description: "Implemented personalization engine that increased conversion rate by 35% and average order value by 28% within three months.",
      image: "/placeholder.svg",
      link: "/case-studies/retail-giant",
      industry: "Retail",
      service: "Platform Optimization"
    },
    {
      title: "Healthcare Patient Portal",
      client: "MediCare Systems",
      description: "Built an intuitive patient portal that improved patient satisfaction scores by 45% and streamlined administrative processes.",
      image: "/placeholder.svg",
      link: "/case-studies/medicare-systems",
      industry: "Healthcare",
      service: "Digital Product Design"
    },
    {
      title: "Manufacturing IoT Integration",
      client: "Industrial Solutions Ltd.",
      description: "Developed IoT strategy and implementation plan that resulted in 18% operational efficiency improvements across 12 facilities.",
      image: "/placeholder.svg",
      link: "/case-studies/industrial-solutions",
      industry: "Manufacturing",
      service: "IoT Strategy"
    },
  ];

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
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden h-full">
                    <div className="h-48 bg-gray-100">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6 pb-2">
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs bg-brand-100 text-brand-600 px-2 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {study.service}
                        </span>
                      </div>
                      <CardTitle className="mb-2 text-xl">{study.title}</CardTitle>
                      <p className="text-sm text-gray-500 mb-2">Client: {study.client}</p>
                      <p className="text-gray-600">{study.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={study.link} className="text-brand-400 hover:text-brand-500 font-medium inline-flex items-center">
                        Read case study
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </CardFooter>
                  </Card>
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
