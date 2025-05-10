
import React, { useState } from 'react';
import { subscribeToNewsletter } from '@/services/newsletterService';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const NewsletterSubscribe: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const success = await subscribeToNewsletter(values.email);
      
      if (success) {
        form.reset();
      }
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
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-1" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="px-4 py-2 bg-accent-400 text-white rounded-md hover:bg-accent-500 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </Form>
      
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
