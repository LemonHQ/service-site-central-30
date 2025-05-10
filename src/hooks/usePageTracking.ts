
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/services/analytics';

/**
 * Hook to track page views automatically
 * @param pageTitle Optional title override. If not provided, document.title will be used
 */
const usePageTracking = (pageTitle?: string) => {
  const location = useLocation();
  
  useEffect(() => {
    // Use the provided pageTitle or fallback to document.title
    const title = pageTitle || document.title;
    
    // Track the page view
    trackPageView(location.pathname, title);
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname, pageTitle]);
};

export default usePageTracking;
