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
    hideBanner
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
  return <>
      {/* Less Intrusive Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="border-t border-gray-200 shadow-lg p-4 sm:p-6 rounded-none bg-white dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Content Section */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      We value your privacy
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      We use cookies to improve your experience and serve relevant content. 
                      You can accept all or manage your preferences.{' '}
                      <Link to="/privacy-policy" className="hover:underline font-medium text-blue-600 dark:text-blue-400">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
                <Button onClick={handleEssentialOnly} variant="outline" size="sm" className="whitespace-nowrap">
                  Essential only
                </Button>
                <Button onClick={handleShowPreferences} variant="outline" size="sm" className="whitespace-nowrap">
                  Manage preferences
                </Button>
                <Button onClick={handleAcceptAll} size="sm" className="whitespace-nowrap bg-brand-600 hover:bg-brand-700 text-white">
                  Accept all
                </Button>
              </div>

              {/* Close button */}
              <button onClick={hideBanner} className="absolute top-2 right-2 p-1 rounded-full border border-gray-300 transition-colors lg:static lg:p-2 hover:opacity-70 text-gray-500 dark:text-gray-400" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      <CookiePreferences isOpen={showPreferences} onClose={handleClosePreferences} preferences={preferences} onUpdatePreferences={handleUpdatePreferences} onAcceptAll={acceptAll} onAcceptEssential={acceptEssential} />
    </>;
};
export default CookieConsentBanner;