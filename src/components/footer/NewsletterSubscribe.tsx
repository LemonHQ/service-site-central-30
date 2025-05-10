
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from '@/components/ui/sonner';

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Store email in Supabase
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);
      
      if (error) {
        // Handle unique constraint violation gracefully
        if (error.code === '23505') {
          toast.info('You are already subscribed to our newsletter!');
        } else {
          throw error;
        }
      } else {
        toast.success('Thanks for subscribing to our newsletter!');
      }
      
      // Reset form
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-brand-600">Subscribe to our newsletter</h4>
      <p className="text-gray-600 mb-4">
        Our bi-weekly newsletter delivers serverless, AI, tech trends, podcasts and blogs straight to your inbox.
      </p>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
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
