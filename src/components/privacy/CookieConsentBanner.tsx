
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import CookiePreferences from './CookiePreferences';
import { Link } from 'react-router-dom';

const CookieConsentBanner: React.FC = () => {
  const {
    showBanner,
    preferences,
    acceptAll,
    acceptEssential,
    updatePreferences,
    hideBanner,
  } = useCookieConsent();
  
  const [showPreferences, setShowPreferences] = useState(false);

  if (!showBanner) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAll();
    hideBanner();
  };

  const handleEssentialOnly = () => {
    acceptEssential();
    hideBanner();
  };

  const handleShowPreferences = () => {
    setShowPreferences(true);
  };

  const handleClosePreferences = () => {
    setShowPreferences(false);
  };

  const handleUpdatePreferences = (newPreferences: any) => {
    updatePreferences(newPreferences);
    hideBanner();
  };

  return (
    <>
      {/* Banner Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
          {/* Close button */}
          <button
            onClick={hideBanner}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 pt-12">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="font-semibold text-lg">LemonHQ</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                We value your privacy
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We use cookies and similar technologies to provide, protect and improve our products and services. 
                We also use them to serve you relevant ads. By choosing "Accept all", you consent to our use of 
                cookies and similar technologies for these purposes.
              </p>
            </div>

            {/* Expandable sections */}
            <div className="mb-6 space-y-3">
              <details className="group border border-gray-200 rounded-lg">
                <summary className="p-4 cursor-pointer hover:bg-gray-50 rounded-lg list-none flex items-center justify-between">
                  <span className="font-medium">What are cookies and how do we use them?</span>
                  <div className="transform group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600">
                  <p>
                    Cookies are small text files that websites place on your device to store information about your preferences 
                    and improve your browsing experience. We use cookies for essential site functionality, analytics to understand 
                    how our site is used, and to provide personalized content and advertising.
                  </p>
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg">
                <summary className="p-4 cursor-pointer hover:bg-gray-50 rounded-lg list-none flex items-center justify-between">
                  <span className="font-medium">What types of cookies do we use?</span>
                  <div className="transform group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600 space-y-2">
                  <p><strong>Essential:</strong> Required for the site to function properly</p>
                  <p><strong>Analytics:</strong> Help us understand how visitors use our site</p>
                  <p><strong>Functional:</strong> Enable enhanced features and personalization</p>
                  <p><strong>Marketing:</strong> Used to show relevant advertisements</p>
                </div>
              </details>
            </div>

            {/* Legal links */}
            <div className="mb-6 text-sm text-gray-600">
              <p>
                You can learn more in our{' '}
                <Link to="/cookie-policy" className="text-brand-600 hover:underline font-medium">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-brand-600 hover:underline font-medium">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleEssentialOnly}
                variant="outline"
                className="flex-1 border-gray-300"
              >
                Essential only
              </Button>
              <Button
                onClick={handleShowPreferences}
                variant="outline"
                className="flex-1 border-gray-300"
              >
                Manage preferences
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="flex-1 bg-brand-600 hover:bg-brand-700 text-white"
              >
                Accept all
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      <CookiePreferences
        isOpen={showPreferences}
        onClose={handleClosePreferences}
        preferences={preferences}
        onUpdatePreferences={handleUpdatePreferences}
        onAcceptAll={acceptAll}
        onAcceptEssential={acceptEssential}
      />
    </>
  );
};

export default CookieConsentBanner;
