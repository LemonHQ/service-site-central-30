
import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';
import FilterButtons from '@/components/ui/FilterButtons';
import { SectionTitle } from '@/components/ui/Typography';
import JsonLd from '@/components/seo/JsonLd';

const baseURL = typeof window !== 'undefined' ? window.location.origin : 'https://lemonhq.co.uk';
const caseStudiesCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies — LemonHQ',
  description: 'Digital transformation case studies across finance, healthcare, real estate and retail.',
  url: `${baseURL}/case-studies`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: caseStudies.map((cs, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${baseURL}/case-studies/${cs.id}`,
      name: cs.title,
    })),
  },
};

const CaseStudies: React.FC = () => {
  // Get all unique industries for filtering
  const industries = useMemo(() => {
    const uniqueIndustries = new Set(caseStudies.map(cs => cs.industry));
    return ['All Industries', ...Array.from(uniqueIndustries)];
  }, []);
  
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  
  // Filter case studies based on selected industry
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(caseStudy => {
      const matchesIndustry = 
        selectedIndustry === 'All Industries' || 
        caseStudy.industry === selectedIndustry;
      
      return matchesIndustry;
    });
  }, [selectedIndustry]);
  
  return (
    <MainLayout
      seoPage="case-studies"
      aiMetadata={{
        purpose: "Case studies showcasing successful digital transformation projects",
        contentSummary: "Real-world examples of digital transformation success stories across industries including finance, healthcare, real estate, and enterprise",
        contentType: "case-study",
        keywords: ["case studies", "digital transformation", "client success", "enterprise solutions", "business results"]
      }}
    >
      <PageHero
        title="Case Studies"
        subtitle="Explore how we've helped organizations across industries transform their digital capabilities and achieve remarkable results."
      />
      
      <ContentSection>
        <FilterButtons
          categories={industries}
          selectedCategory={selectedIndustry}
          onCategoryChange={setSelectedIndustry}
        />
        
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-16">
            <SectionTitle className="text-gray-700">No case studies found</SectionTitle>
            <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        )}
      </ContentSection>
    </MainLayout>
  );
};

export default CaseStudies;
