import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CaseStudySummary from '@/components/case-studies/CaseStudySummary';
import ChallengeSection from '@/components/case-studies/ChallengeSection';
import ImageGallery from '@/components/case-studies/ImageGallery';
import TestimonialSection from '@/components/case-studies/TestimonialSection';
import RelatedCaseStudiesSection from '@/components/case-studies/RelatedCaseStudiesSection';
import Lightbox from '@/components/case-studies/Lightbox';
import { caseStudies } from '@/data/caseStudies';

const BuildingComposableDigitalBrandEnginePage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  
  const caseStudy = caseStudies.find(cs => cs.id === 'building-a-composable-digital-brand-engine')!;
  const relatedCaseStudies = caseStudies.filter(cs => 
    cs.industry === caseStudy.industry && cs.id !== caseStudy.id
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % caseStudy.images.length);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex - 1 + caseStudy.images.length) % caseStudy.images.length);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CaseStudySummary caseStudy={caseStudy} />
          <ChallengeSection caseStudy={caseStudy} />
          <ImageGallery images={caseStudy.images} title={caseStudy.title} onImageClick={openLightbox} />
          {caseStudy.testimonial && <TestimonialSection testimonial={caseStudy.testimonial} />}
          <RelatedCaseStudiesSection relatedCaseStudies={relatedCaseStudies} />
        </div>
      </div>
      
      <Lightbox
        images={caseStudy.images}
        imageIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onOpenChange={setLightboxOpen}
        onNext={nextImage}
        onPrev={prevImage}
        title={caseStudy.title}
      />
    </MainLayout>
  );
};

export default BuildingComposableDigitalBrandEnginePage;