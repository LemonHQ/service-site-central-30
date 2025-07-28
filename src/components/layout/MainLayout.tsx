
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import usePageTracking from '@/hooks/usePageTracking';
import CookieConsentBanner from '@/components/privacy/CookieConsentBanner';
import { useSEO, useAISEO } from '@/hooks/useSEO';
import { getSEOMetadata } from '@/utils/seo';

interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  seoPage?: string;
  seoData?: any;
  aiMetadata?: {
    purpose?: string;
    contentSummary?: string;
    keywords?: string[];
    contentType?: 'article' | 'service' | 'case-study' | 'homepage' | 'contact';
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  pageTitle, 
  seoPage = 'home', 
  seoData, 
  aiMetadata 
}) => {
  // Track page view when the layout is mounted
  usePageTracking(pageTitle);
  
  // Generate and apply SEO metadata
  const seoMetadata = getSEOMetadata(seoPage, seoData);
  useSEO(seoMetadata, seoPage === 'blog-detail' ? 'article' : seoPage === 'case-study-detail' ? 'case-study' : undefined, seoData);
  
  // Apply AI-specific SEO metadata if provided
  if (aiMetadata) {
    useAISEO(aiMetadata);
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

export default MainLayout;
