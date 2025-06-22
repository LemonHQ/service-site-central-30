
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';
import FeatureCard from '@/components/ui/FeatureCard';
import { Button } from '@/components/ui/button';

const Index = () => { 
  return (
    <MainLayout>
      <PageHero
        title="Welcome to LemonHQ Professional Services"
        subtitle="We specialize in delivering exceptional solutions that drive business growth and innovation."
        backgroundVariant="brand"
      />
      
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard
            title="Strategic Consulting"
            description="Expert guidance to navigate complex business challenges and opportunities"
            variant="elevated"
          />
          <FeatureCard
            title="Digital Transformation"
            description="Comprehensive solutions to modernize your business operations and customer experiences."
            variant="elevated"
          />
        </div>
        
        <div className="text-center mt-8">
          <Link to="/services">
            <Button className="bg-accent-400 hover:bg-accent-500 text-white">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default Index;
