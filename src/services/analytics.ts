
/**
 * Google Analytics service for tracking page views and user interactions
 */

import { isCookieCategoryAllowed } from './cookieConsent';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-F9MRP3Y6SL';

// Vector Tracking ID
const VECTOR_TRACKING_ID = '79882b66-a905-4394-9c3d-f7bfe8730314';

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    vector: {
      load: (id: string) => void;
      identify: (data: any) => void;
      on: (event: string, callback: Function) => void;
    };
  }
}

// Check if Google Analytics is loaded
const isGoogleAnalyticsLoaded = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Check if Vector is loaded
const isVectorLoaded = () => {
  return typeof window !== 'undefined' && typeof window.vector === 'object' && window.vector.load;
};

// Check if analytics tracking is allowed
const isAnalyticsAllowed = () => {
  return isCookieCategoryAllowed('analytics');
};

// Load Google Analytics script dynamically
const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined' || window.gtag) {
    return; // Already loaded or not in browser
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Load the script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Configure GA
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href
  });
};

// Initialize Vector tracking
const initializeVector = () => {
  if (typeof window !== 'undefined' && window.vector && isAnalyticsAllowed() && !isDevelopment) {
    try {
      window.vector.load(VECTOR_TRACKING_ID);
    } catch (error) {
      console.error('[Analytics] Error initializing Vector:', error);
    }
  }
};

// Initialize analytics if consent is given
const initializeAnalytics = () => {
  if (isAnalyticsAllowed() && !isDevelopment) {
    loadGoogleAnalytics();
    initializeVector();
  }
};

// Listen for consent changes
if (typeof window !== 'undefined') {
  window.addEventListener('cookieConsentChanged', (event: CustomEvent) => {
    const preferences = event.detail;
    if (preferences.analytics && !isDevelopment) {
      loadGoogleAnalytics();
      initializeVector();
    }
  });

  // Initialize on page load
  initializeAnalytics();
}

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  try {
    // Always log in development for debugging
    if (isDevelopment) {
      console.log(`[Analytics] Page View: ${pageTitle} (${pagePath})`);
    }
    
    // Send to Google Analytics if consent is given and not in development
    if (isAnalyticsAllowed() && isGoogleAnalyticsLoaded() && !isDevelopment) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath,
        page_title: pageTitle,
      });
      
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.origin + pagePath,
        page_path: pagePath
      });
    }

    // Send to Vector if consent is given and not in development
    if (isAnalyticsAllowed() && isVectorLoaded() && !isDevelopment) {
      // Vector automatically tracks page views, but you can add custom tracking here if needed
    }
  } catch (error) {
    console.error('[Analytics] Error tracking page view:', error);
  }
};

// Track user interactions (clicks, form submissions, etc.)
export const trackEvent = (
  eventName: string, 
  eventCategory: string,
  eventData?: Record<string, any>
) => {
  try {
    // Always log in development for debugging
    if (isDevelopment) {
      console.log(`[Analytics] Event: ${eventName} (${eventCategory})`, eventData || {});
    }
    
    // Send to Google Analytics if consent is given and not in development
    if (isAnalyticsAllowed() && isGoogleAnalyticsLoaded() && !isDevelopment) {
      window.gtag('event', eventName, {
        event_category: eventCategory,
        ...eventData,
      });
    }

    // Send to Vector if consent is given and not in development
    if (isAnalyticsAllowed() && isVectorLoaded() && !isDevelopment) {
      // Vector custom event tracking can be added here if needed
    }
  } catch (error) {
    console.error('[Analytics] Error tracking event:', error);
  }
};

// Define event categories for consistent tracking
export const EventCategory = {
  NAVIGATION: 'navigation',
  FORM: 'form',
  CTA: 'call-to-action',
  CONTENT: 'content-interaction',
  SEARCH: 'search',
  FILTER: 'filter',
} as const;

// Define common event names for consistent tracking
export const EventName = {
  CLICK: 'click',
  SUBMIT: 'submit',
  VIEW: 'view',
  DOWNLOAD: 'download',
  SHARE: 'share',
} as const;
