
import { useState, useEffect } from 'react';
import { 
  getCookieConsent, 
  saveCookieConsent, 
  acceptAllCookies, 
  acceptEssentialOnly,
  CookiePreferences,
  CookieConsentState
} from '@/services/cookieConsent';

export const useCookieConsent = () => {
  const [consentState, setConsentState] = useState<CookieConsentState>(() => {
    // Initialize with safe defaults during SSR
    if (typeof window === 'undefined') {
      return {
        hasConsented: false,
        preferences: {
          essential: true,
          analytics: false,
          functional: false,
          marketing: false,
          timestamp: Date.now(),
        },
        showBanner: false, // Don't show banner during SSR
      };
    }
    // On client side, immediately get the actual consent state to prevent flash
    return getCookieConsent();
  });

  const [isClient, setIsClient] = useState(false);

  // Listen for consent changes and handle client-side hydration
  useEffect(() => {
    // Mark as client-side
    setIsClient(true);
    
    // Only update if we don't already have valid consent state
    const currentState = getCookieConsent();
    setConsentState(currentState);

    const handleConsentChange = (event: CustomEvent) => {
      setConsentState(getCookieConsent());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
      
      return () => {
        window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
      };
    }
  }, []);

  const updatePreferences = (preferences: Omit<CookiePreferences, 'timestamp'>) => {
    saveCookieConsent(preferences);
    setConsentState(getCookieConsent());
  };

  const acceptAll = () => {
    acceptAllCookies();
    setConsentState(getCookieConsent());
  };

  const acceptEssential = () => {
    acceptEssentialOnly();
    setConsentState(getCookieConsent());
  };

  const hideBanner = () => {
    setConsentState(prev => ({ ...prev, showBanner: false }));
  };

  return {
    ...consentState,
    // Only show banner on client-side and when consent is needed
    showBanner: isClient && consentState.showBanner,
    updatePreferences,
    acceptAll,
    acceptEssential,
    hideBanner,
  };
};
