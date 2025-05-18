
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import SubServiceHero from '@/components/subservice/SubServiceHero';
import ProcessSection from '@/components/subservice/ProcessSection';
import RelatedServicesSection from '@/components/subservice/RelatedServicesSection';
import CtaSection from '@/components/subservice/CtaSection';
import NotFoundSection from '@/components/subservice/NotFoundSection';
import { 
  getSubServiceBySlug, 
  getMainServiceBySlug,
  getRelatedServices
} from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';

const SubServicePage: React.FC = () => {
  const { serviceSlug, subServiceSlug } = useParams<{ 
    serviceSlug: string, 
    subServiceSlug: string 
  }>();
  
  const subService = getSubServiceBySlug(subServiceSlug || '');
  const parentService = subService ? getMainServiceBySlug(serviceSlug || '') : null;
  
  if (!subService || !parentService) {
    return (
      <MainLayout>
        <NotFoundSection />
      </MainLayout>
    );
  }
  
  // Get related case studies from parent service
  const relatedCaseStudies = parentService.relatedCaseStudies 
    ? caseStudies.filter(cs => parentService.relatedCaseStudies?.includes(cs.id)).slice(0, 3)
    : caseStudies.slice(0, 3);
  
  // Get related insights from parent service
  const relatedInsights = parentService.relatedInsights
    ? blogPosts.filter(post => parentService.relatedInsights?.includes(post.id)).slice(0, 3)
    : blogPosts.slice(0, 3);
    
  // Get related services
  const relatedServices = getRelatedServices(subService.slug, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <SubServiceHero 
        parentService={parentService} 
        subService={subService} 
      />

      {/* Process Section */}
      {subService.process && (
        <ProcessSection process={subService.process} />
      )}

      {/* Related Services Section */}
      <RelatedServicesSection relatedServices={relatedServices} />

      {/* CTA Section */}
      <CtaSection title={subService.title} />
    </MainLayout>
  );
};

export default SubServicePage;
