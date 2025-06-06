
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
  const [consentState, setConsentState] = useState<CookieConsentState>(() => getCookieConsent());

  // Listen for consent changes
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      setConsentState(getCookieConsent());
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
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
