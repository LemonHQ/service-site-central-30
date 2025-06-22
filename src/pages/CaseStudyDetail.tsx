
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies } from '@/data/caseStudies';
import { ArrowLeft } from 'lucide-react';
import ResponseSection from '@/components/approach/co-create-closer/ResponseSection';

// Import our refactored components
import CaseStudySummary from '@/components/case-studies/CaseStudySummary';
import ChallengeSection from '@/components/case-studies/ChallengeSection';
import ImageGallery from '@/components/case-studies/ImageGallery';
import Lightbox from '@/components/case-studies/Lightbox';
import TestimonialSection from '@/components/case-studies/TestimonialSection';
import RelatedCaseStudiesSection from '@/components/case-studies/RelatedCaseStudiesSection';
import NotFoundSection from '@/components/case-studies/NotFoundSection';
import { H1, Paragraph } from '@/components/ui/Typography';

const CaseStudyDetail: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const navigate = useNavigate();
  
  // Find the case study based on the URL parameter with added safety check
  const caseStudy = useMemo(() => {
    if (!caseStudyId) return null;
    try {
      return caseStudies.find(cs => cs?.id === caseStudyId) || null;
    } catch (error) {
      console.error('Error finding case study:', error);
      return null;
    }
  }, [caseStudyId]);
  
  // If case study not found, redirect to case studies page after a short delay
  useEffect(() => {
    if (!caseStudy && caseStudyId) {
      console.error(`Case study with ID "${caseStudyId}" not found`);
      const timer = setTimeout(() => {
        navigate('/case-studies');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [caseStudy, caseStudyId, navigate]);

  // Find related case studies with the same industry
  const relatedCaseStudies = useMemo(() => {
    if (!caseStudy) return [];
    
    try {
      return caseStudies
        .filter(cs => cs && cs.industry === caseStudy.industry && cs.id !== caseStudyId)
        .slice(0, 3);
    } catch (error) {
      console.error('Error finding related case studies:', error);
      return [];
    }
  }, [caseStudy, caseStudyId]);

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setImageIndex(index);
    setLightboxOpen(true);
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    if (imageIndex === null || !caseStudy?.images || caseStudy.images.length === 0) return;
    setImageIndex((imageIndex + 1) % caseStudy.images.length);
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    if (imageIndex === null || !caseStudy?.images || caseStudy.images.length === 0) return;
    setImageIndex((imageIndex - 1 + caseStudy.images.length) % caseStudy.images.length);
  };
  
  // If case study is null, show not found section
  if (!caseStudy) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="mb-6">
            <Link to="/case-studies" className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>
          </div>
          <NotFoundSection />
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Case Study Summary Section */}
        <CaseStudySummary caseStudy={caseStudy} />
        
        {/* Challenge, Solution, Results Section */}
        <ChallengeSection caseStudy={caseStudy} />
        
        {/* Project Gallery - Carousel */}
        <ImageGallery 
          images={caseStudy.images} 
          title={caseStudy.title}
          onImageClick={openLightbox}
        />
        
        {/* Lightbox for fullscreen image view */}
        <Lightbox
          images={caseStudy.images}
          imageIndex={imageIndex}
          isOpen={lightboxOpen}
          onOpenChange={setLightboxOpen}
          onNext={nextImage}
          onPrev={prevImage}
          title={caseStudy.title}
        />
        
        {/* Testimonial Section */}
        <TestimonialSection testimonial={caseStudy.testimonial} />
        
        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <RelatedCaseStudiesSection 
            relatedCaseStudies={relatedCaseStudies}
          />
        )}

        <ResponseSection />
      </div>
    </MainLayout>
  );
};

export default CaseStudyDetail;
