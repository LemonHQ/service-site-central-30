
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import CtaSection from '../components/ui/CtaSection';
import QuotePanel from '../components/ui/QuotePanel';

// Import homepage components
import SpotlightCarousel from '../components/homepage/SpotlightCarousel';
import CompanyOverview from '../components/homepage/CompanyOverview';
import ClientLogosCarousel from '../components/homepage/ClientLogosCarousel';
import CaseStudiesCarousel from '../components/homepage/CaseStudiesCarousel';
import ClientsSection from '../components/homepage/ClientsSection';
import PartnersSection from '../components/homepage/PartnersSection';
import BlogCarousel from '../components/homepage/BlogCarousel';
import SectorChallenges from '../components/homepage/SectorChallenges';
import ProductExpansion from '../components/homepage/ProductExpansion';
import ICPPanel from '../components/homepage/ICPPanel';

const Home = () => {
  return (
    <MainLayout 
      seoPage="home"
      aiMetadata={{
        purpose: "Homepage showcasing LemonHQ's digital transformation services for enterprise brands",
        contentSummary: "Digital product services company offering product digitalization, AI innovation, architecture modernization, and experience design for enterprise clients",
        contentType: "homepage",
        keywords: ["digital transformation", "enterprise services", "product development", "AI innovation", "business growth"]
      }}
    >
      {/* Full Page Spotlight Carousel */}
      <SpotlightCarousel />
      
      {/* Client Logos Carousel */}
      <ClientLogosCarousel />
      
      {/* Company Overview with Stats */}
      <CompanyOverview />
      
      {/* Product Expansion Section */}
      <ProductExpansion />
      
      {/* Sector-specific challenges */}
      <SectorChallenges />

      {/* ICP Panel - Who We Optimize For */}
      <ICPPanel />
      
      {/* Case Studies Carousel */}
      <CaseStudiesCarousel />
      
      {/* Our Alliances Section */}
      <ClientsSection />
      
      {/* Partners Section with Logos */}
      {/*<PartnersSection />*/}
      
      {/* Blog Articles Carousel */}
      <BlogCarousel />
      
      {/* High Impact Quote Section */}
      <QuotePanel 
        quote="Staying relevant requires unlearning what's outdated, co-creating what's next, and scaling what works"
        author=""
        authorTitle=""
        className="my-16"
      />
      
    </MainLayout>
  );
};

export default Home;
