import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { CookiePreferences as CookiePrefs } from '@/services/cookieConsent';
import { Link } from 'react-router-dom';
interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: CookiePrefs;
  onUpdatePreferences: (preferences: Omit<CookiePrefs, 'timestamp'>) => void;
  onAcceptAll: () => void;
  onAcceptEssential: () => void;
}
const CookiePreferences: React.FC<CookiePreferencesProps> = ({
  isOpen,
  onClose,
  preferences,
  onUpdatePreferences,
  onAcceptAll,
  onAcceptEssential
}) => {
  const [localPreferences, setLocalPreferences] = React.useState({
    essential: preferences.essential,
    analytics: preferences.analytics,
    functional: preferences.functional,
    marketing: preferences.marketing
  });

  // Update local state when preferences change
  React.useEffect(() => {
    setLocalPreferences({
      essential: preferences.essential,
      analytics: preferences.analytics,
      functional: preferences.functional,
      marketing: preferences.marketing
    });
  }, [preferences]);
  const handlePreferenceChange = (category: keyof typeof localPreferences, value: boolean) => {
    setLocalPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };
  const handleSavePreferences = () => {
    onUpdatePreferences(localPreferences);
    onClose();
  };
  const handleAcceptAll = () => {
    onAcceptAll();
    onClose();
  };
  const handleAcceptEssential = () => {
    onAcceptEssential();
    onClose();
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Privacy Preferences
          </DialogTitle>
          <DialogDescription>
            We use cookies and similar technologies to provide, protect and improve our products and services. 
            Choose which cookies you're happy for us to use.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="essential">
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="font-medium">Essential Cookies</span>
                  <Checkbox checked={true} disabled={true} className="pointer-events-none" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually only set in response to actions made by you which amount to a request 
                    for services, such as setting your privacy preferences or filling in forms.
                  </p>
                  <p className="font-medium">Always Active</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="analytics">
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="font-medium">Analytics Cookies</span>
                  <Checkbox checked={localPreferences.analytics} onCheckedChange={checked => handlePreferenceChange('analytics', checked as boolean)} />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website and services.
                  </p>
                  <p><strong>Google Analytics:</strong> Used to measure website performance and user behavior.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="functional">
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="font-medium">Functional Cookies</span>
                  <Checkbox checked={localPreferences.functional} onCheckedChange={checked => handlePreferenceChange('functional', checked as boolean)} />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    These cookies enable enhanced functionality and personalization, such as videos and live chat. 
                    They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="marketing">
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full pr-4">
                  <span className="font-medium">Marketing Cookies</span>
                  <Checkbox checked={localPreferences.marketing} onCheckedChange={checked => handlePreferenceChange('marketing', checked as boolean)} />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    These cookies are used to track visitors across websites to display relevant advertisements 
                    and measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-sm text-gray-600">
            <p>
              For more information about how we use cookies, please see our{' '}
              <Link to="/cookie-policy" className="text-brand-600 hover:underline">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="text-brand-600 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleAcceptEssential} variant="outline" className="flex-1">
              Essential Only
            </Button>
            <Button onClick={handleSavePreferences} variant="outline" className="flex-1">
              Save Preferences
            </Button>
            <Button onClick={handleAcceptAll} className="flex-1 bg-brand-600 hover:bg-brand-700 text-neutral-50">
              Accept All
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default CookiePreferences;