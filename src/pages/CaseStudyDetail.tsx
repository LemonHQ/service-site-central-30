import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Building, Award, Quote, ArrowRight, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
} from '@/components/ui/dialog';
import RelatedCaseStudiesSection from '@/components/case-studies/RelatedCaseStudiesSection';

const CaseStudyDetail: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Find the case study based on the URL parameter
  const caseStudy = useMemo(() => {
    return caseStudies.find(cs => cs.id === caseStudyId);
  }, [caseStudyId]);
  
  // If case study not found, redirect to case studies page
  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }
  
  // Format date
  const formattedDate = new Date(caseStudy.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Find related case studies with the same industry
  const relatedCaseStudies = caseStudies
    .filter(cs => cs.industry === caseStudy.industry && cs.id !== caseStudyId)
    .slice(0, 3);

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setImageIndex(index);
    setLightboxOpen(true);
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    if (imageIndex === null) return;
    setImageIndex((imageIndex + 1) % caseStudy.images.length);
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    if (imageIndex === null) return;
    setImageIndex((imageIndex - 1 + caseStudy.images.length) % caseStudy.images.length);
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6">
          <Link to="/case-studies" className="inline-flex items-center text-brand-400 hover:text-brand-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-8 mb-10">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <Badge className="mb-4">{caseStudy.industry}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{caseStudy.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.services.map((service, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Building className="h-5 w-5 text-brand-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-500">Client</h4>
                    <p className="font-medium">{caseStudy.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-brand-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-500">Completed</h4>
                    <p className="font-medium">{formattedDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <img 
            src={caseStudy.featuredImage}
            alt={caseStudy.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Challenge */}
          <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
            <div 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
            ></div>
          </div>
          
          {/* Solution */}
          <div className="bg-brand-50 rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
            <div 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
            ></div>
          </div>
          
          {/* Results */}
          <div className="bg-green-50 rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-green-600" /> Results
            </h3>
            <div 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: caseStudy.results }}
            ></div>
          </div>
        </div>
        
        {/* Project Gallery - Carousel with contrasting background */}
        <div className="py-16 bg-brand-100 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-6">Project Gallery</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {caseStudy.images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                    <div 
                      className="rounded-lg overflow-hidden h-64 cursor-pointer transition-transform hover:scale-[1.02]"
                      onClick={() => openLightbox(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${caseStudy.title} - Image ${index+1}`}
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
        
        {/* Lightbox for fullscreen image view */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="max-w-screen-lg max-h-[90vh] p-0 bg-transparent border-none shadow-none">
            <div className="relative w-full h-full">
              <div className="flex items-center justify-center h-full">
                {imageIndex !== null && caseStudy.images[imageIndex] && (
                  <img 
                    src={caseStudy.images[imageIndex]} 
                    alt={`${caseStudy.title} - Full view`}
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
                  onClick={prevImage}
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
                  onClick={nextImage}
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                {imageIndex !== null && (
                  <span>{imageIndex + 1} of {caseStudy.images.length}</span>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="mb-16 bg-gray-50 rounded-lg p-8 relative">
            <Quote className="absolute text-gray-200 h-16 w-16 top-4 left-4 opacity-50" />
            <div className="relative z-10 pl-4">
              <p className="text-xl italic mb-6">{caseStudy.testimonial.quote}</p>
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-gray-600">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-brand-50 rounded-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to explore?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Assess your readiness for a co-creation journey today,
          </p>
          <Link to="/approach/co-create-assessment">
            <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <RelatedCaseStudiesSection 
            relatedCaseStudies={relatedCaseStudies}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default CaseStudyDetail;
