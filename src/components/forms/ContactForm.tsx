
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Calendar } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onOpenBookingDialog: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onOpenBookingDialog }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    }
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    
    try {
      // Store form data in Supabase - fixed to match expected schema
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone || null,
          service: data.service || null,
          message: data.message
        });
      
      if (error) {
        throw error;
      }
      
      // Success notification
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly."
      });

      // Reset the form
      form.reset();
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-6">Request a Consultation</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Email Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Company Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-medium text-gray-700">Service of Interest</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
                    >
                      <option value="">Select a service</option>
                      <option value="unify-brand-experiences">Unify Brand Experiences</option>
                      <option value="digitalize-product-lines">Digitalize Product Lines</option>
                      <option value="expand-product-offerings">Expand Product Offerings</option>
                      <option value="scale-digital-experiences">Scale Digital Experiences</option>
                      <option value="pilot-emerging-tech">Pilot Emerging Tech</option>
                      <option value="standardize-digital-portfolio">Standardize Digital Portfolio</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-medium text-gray-700">Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please tell us about your project or inquiry" 
                      className="min-h-[150px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <Button type="submit" className="md:w-auto bg-brand-400 hover:bg-brand-500" disabled={loading}>
              {loading ? 'Sending...' : 'Submit Request'}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              className="flex items-center gap-2 border-brand-400 text-brand-500 hover:bg-brand-100"
              onClick={onOpenBookingDialog}
            >
              <Calendar className="h-4 w-4" />
              Request Consultation
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
