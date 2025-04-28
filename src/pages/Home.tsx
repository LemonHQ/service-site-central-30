
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import CtaSection from '../components/ui/CtaSection';

// Import homepage components
import SpotlightCarousel from '../components/homepage/SpotlightCarousel';
import CompanyOverview from '../components/homepage/CompanyOverview';
import ClientLogosCarousel from '../components/homepage/ClientLogosCarousel';
import CaseStudiesCarousel from '../components/homepage/CaseStudiesCarousel';
import ClientsSection from '../components/homepage/ClientsSection';
import PartnersSection from '../components/homepage/PartnersSection';
import BlogCarousel from '../components/homepage/BlogCarousel';
import SectorChallenges from '../components/homepage/SectorChallenges';
import ProductJourney from '../components/homepage/ProductJourney';
import ProductExpansion from '../components/homepage/ProductExpansion';

const Home = () => {
  return (
    <MainLayout>
      {/* Full Page Spotlight Carousel */}
      <SpotlightCarousel />
      
      {/* Client Logos Carousel */}
      <ClientLogosCarousel />
      
      {/* Company Overview with Stats */}
      <CompanyOverview />
      
      {/* Product Journey Section */}
      <ProductJourney />
      
      {/* Product Expansion Section */}
      <ProductExpansion />
      
      {/* Sector-specific challenges */}
      <SectorChallenges />
      
      {/* Case Studies Carousel */}
      <CaseStudiesCarousel />
      
      {/* Clients Section with Logos */}
      <ClientsSection />
      
      {/* Partners Section with Logos */}
      <PartnersSection />
      
      {/* Blog Articles Carousel */}
      <BlogCarousel />

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Transform Your Product Strategy?"
        subtitle="Schedule a consultation with our product experts to discuss your challenges and opportunities."
        buttonText="Request Consultation"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </MainLayout>
  );
};

export default Home;
