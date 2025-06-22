
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from '@/components/ui/sonner';
import { Checkbox } from '@/components/ui/checkbox';
import { H4, Paragraph } from '@/components/ui/Typography';
import PrivacyNotice from '@/components/privacy/PrivacyNotice';

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!marketingConsent) {
      toast.error('Please consent to receiving marketing communications');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Attempting to subscribe email:', email);
      
      // Store email in Supabase - fixed to match expected schema
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: email,
          marketing_consent: marketingConsent
        });
      
      console.log('Subscription response:', { error });
      
      if (error) {
        // Handle unique constraint violation gracefully
        if (error.code === '23505') {
          toast.info('You are already subscribed to our newsletter!');
        } else {
          console.error('Subscription error:', error);
          throw error;
        }
      } else {
        toast.success('Thanks for subscribing to our newsletter!');
      }
      
      // Reset form
      setEmail('');
      setMarketingConsent(false);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <H4 className="mb-4 text-brand-600">Subscribe to our newsletter</H4>
      <Paragraph className="mb-4">
        Our bi-weekly newsletter delivers serverless, AI, tech trends, podcasts and blogs straight to your inbox.
      </Paragraph>
      
      <form onSubmit={handleSubscribe} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 flex-grow"
            required
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-accent-400 text-white rounded-md hover:bg-accent-500 transition-colors"
            disabled={isSubmitting || !marketingConsent}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="newsletter-marketing-consent"
            checked={marketingConsent}
            onCheckedChange={(checked) => setMarketingConsent(checked === true)} 
          />
          <label 
            htmlFor="newsletter-marketing-consent" 
            className="text-sm text-gray-600"
          >
            I consent to receiving marketing communications and newsletters. You can unsubscribe at any time. *
          </label>
        </div>

        {/* Compact Privacy Notice for Newsletter */}
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs text-gray-600">
          <Paragraph className="mb-0 text-xs">
            We process your email to send newsletters and marketing communications. 
            Data retained for 3 years or until unsubscribed. 
            Contact <a href="mailto:privacy@lemonhq.co.uk" className="text-brand-600 hover:underline">privacy@lemonhq.co.uk</a> for data queries.
          </Paragraph>
        </div>
      </form>
      
      <div className="mt-6">
        <img 
          src="/lovable-uploads/50fa6423-029f-4a1e-87c3-051a066b6c9b.png" 
          alt="Newsletter Logo" 
          className="h-8 object-contain"
        />
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
