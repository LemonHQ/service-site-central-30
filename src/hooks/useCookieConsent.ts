
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
        showBanner: true,
      };
    }
    return getCookieConsent();
  });

  // Listen for consent changes
  useEffect(() => {
    // Update state with actual consent data once we're on the client
    setConsentState(getCookieConsent());

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
    updatePreferences,
    acceptAll,
    acceptEssential,
    hideBanner,
  };
};
