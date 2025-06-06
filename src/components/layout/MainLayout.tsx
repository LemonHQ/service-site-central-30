
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import usePageTracking from '@/hooks/usePageTracking';
import CookieConsentBanner from '@/components/privacy/CookieConsentBanner';

interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, pageTitle }) => {
  // Track page view when the layout is mounted
  usePageTracking(pageTitle);
  
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
