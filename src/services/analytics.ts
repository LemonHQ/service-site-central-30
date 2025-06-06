
/**
 * Google Analytics service for tracking page views and user interactions
 */

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-F9MRP3Y6SL';

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV;

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Check if Google Analytics is loaded
const isGoogleAnalyticsLoaded = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  try {
    // Always log in development for debugging
    if (isDevelopment) {
      console.log(`[Analytics] Page View: ${pageTitle} (${pagePath})`);
    }
    
    // Send to Google Analytics if loaded and not in development
    if (isGoogleAnalyticsLoaded() && !isDevelopment) {
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
    
    // Send to Google Analytics if loaded and not in development
    if (isGoogleAnalyticsLoaded() && !isDevelopment) {
      window.gtag('event', eventName, {
        event_category: eventCategory,
        ...eventData,
      });
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
