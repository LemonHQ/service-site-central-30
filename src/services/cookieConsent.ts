
/**
 * Cookie Consent Service for managing user privacy preferences
 */

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: number;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  showBanner: boolean;
}

const STORAGE_KEY = 'lemonhq-cookie-consent';
const CONSENT_EXPIRY_MONTHS = 12;

// Default preferences - essential is always true
const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  functional: false,
  marketing: false,
  timestamp: Date.now(),
};

// Check if consent has expired
const isConsentExpired = (timestamp: number): boolean => {
  const expiryDate = new Date(timestamp);
  expiryDate.setMonth(expiryDate.getMonth() + CONSENT_EXPIRY_MONTHS);
  return new Date() > expiryDate;
};

// Get current consent state
export const getCookieConsent = (): CookieConsentState => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return {
      hasConsented: false,
      preferences: defaultPreferences,
      showBanner: true,
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return {
        hasConsented: false,
        preferences: defaultPreferences,
        showBanner: true,
      };
    }

    const parsed = JSON.parse(stored);
    
    // Check if consent has expired
    if (isConsentExpired(parsed.timestamp)) {
      // Clear expired consent
      localStorage.removeItem(STORAGE_KEY);
      return {
        hasConsented: false,
        preferences: defaultPreferences,
        showBanner: true,
      };
    }

    return {
      hasConsented: true,
      preferences: parsed,
      showBanner: false,
    };
  } catch (error) {
    console.error('[Cookie Consent] Error reading consent:', error);
    return {
      hasConsented: false,
      preferences: defaultPreferences,
      showBanner: true,
    };
  }
};

// Save consent preferences
export const saveCookieConsent = (preferences: Omit<CookiePreferences, 'timestamp'>): void => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  try {
    const consentData: CookiePreferences = {
      ...preferences,
      essential: true, // Essential cookies are always required
      timestamp: Date.now(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    
    // Trigger custom event for other parts of the app to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
      detail: consentData 
    }));
  } catch (error) {
    console.error('[Cookie Consent] Error saving consent:', error);
  }
};

// Accept all cookies
export const acceptAllCookies = (): void => {
  saveCookieConsent({
    essential: true,
    analytics: true,
    functional: true,
    marketing: true,
  });
};

// Accept only essential cookies
export const acceptEssentialOnly = (): void => {
  saveCookieConsent({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false,
  });
};

// Clear all consent data (for testing or reset)
export const clearCookieConsent = (): void => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
    detail: defaultPreferences 
  }));
};

// Check if a specific cookie category is allowed
export const isCookieCategoryAllowed = (category: keyof Omit<CookiePreferences, 'timestamp'>): boolean => {
  const consent = getCookieConsent();
  return consent.hasConsented ? consent.preferences[category] : false;
};
