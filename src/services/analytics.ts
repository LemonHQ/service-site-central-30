
/**
 * Simple analytics service for tracking page views and user interactions
 */

// Track page views
export const trackPageView = (pagePath: string, pageTitle: string) => {
  try {
    // Log the page view for debugging during development
    console.log(`[Analytics] Page View: ${pageTitle} (${pagePath})`);
    
    // In a production environment, you would send this data to your analytics service
    // Example: sendToAnalyticsService('pageView', { path: pagePath, title: pageTitle });
    
    // For now we're just logging to console, but this is where you would
    // integrate with services like Google Analytics, Mixpanel, etc.
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
    // Log the event for debugging during development
    console.log(`[Analytics] Event: ${eventName} (${eventCategory})`, eventData || {});
    
    // In a production environment, you would send this data to your analytics service
    // Example: sendToAnalyticsService('event', { name: eventName, category: eventCategory, data: eventData });
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
