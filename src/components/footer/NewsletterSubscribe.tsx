
import React, { useState } from 'react';

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
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
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-accent-400 text-white rounded-md hover:bg-accent-500 transition-colors"
        >
          Subscribe
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
