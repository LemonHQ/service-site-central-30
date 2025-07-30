import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CaseStudySummary from '@/components/case-studies/CaseStudySummary';
import ChallengeSection from '@/components/case-studies/ChallengeSection';
import ImageGallery from '@/components/case-studies/ImageGallery';
import TestimonialSection from '@/components/case-studies/TestimonialSection';
import RelatedCaseStudiesSection from '@/components/case-studies/RelatedCaseStudiesSection';
import Lightbox from '@/components/case-studies/Lightbox';
import { caseStudies } from '@/data/caseStudies';
import { useSEO, useAISEO } from '@/hooks/useSEO';
import { getSEOMetadata } from '@/utils/seo';

const StandardizingMotorInsurancePage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  
  const caseStudy = caseStudies.find(cs => cs.id === 'standardizing-motor-insurance-for-a-digital-future')!;
  const relatedCaseStudies = caseStudies.filter(cs => 
    cs.industry === caseStudy.industry && cs.id !== caseStudy.id
  );

  // SEO Configuration
  const seoMetadata = getSEOMetadata('case-study-detail', caseStudy);
  useSEO(seoMetadata, 'case-study', {
    name: caseStudy.title,
    description: caseStudy.summary,
    client: caseStudy.client,
    industry: caseStudy.industry,
    services: caseStudy.services,
    dateCompleted: caseStudy.date,
    image: caseStudy.featuredImage
  });

  useAISEO({
    purpose: 'Showcase successful case study implementation and demonstrate expertise in digital transformation',
    contentSummary: `Case study: ${caseStudy.title} for ${caseStudy.client} in ${caseStudy.industry} industry. ${caseStudy.summary}`,
    keywords: [caseStudy.industry, 'case study', 'digital transformation', ...caseStudy.services],
    contentType: 'case-study'
  });

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
    <MainLayout 
      seoPage="case-study-detail" 
      seoData={caseStudy}
      aiMetadata={{
        purpose: 'Showcase successful case study implementation and demonstrate expertise in digital transformation',
        contentSummary: `Case study: ${caseStudy.title} for ${caseStudy.client} in ${caseStudy.industry} industry. ${caseStudy.summary}`,
        keywords: [caseStudy.industry, 'case study', 'digital transformation', ...caseStudy.services],
        contentType: 'case-study'
      }}
    >
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

export default StandardizingMotorInsurancePage;