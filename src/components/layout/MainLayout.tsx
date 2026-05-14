
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import usePageTracking from '@/hooks/usePageTracking';
import CookieConsentBanner from '@/components/privacy/CookieConsentBanner';
import SEOHead from '@/components/seo/SEOHead';

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

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead seoPage={seoPage} seoData={seoData} aiMetadata={aiMetadata} />
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
