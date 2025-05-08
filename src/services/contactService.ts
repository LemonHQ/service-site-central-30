
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export const submitContactForm = async (formData: ContactFormValues) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          service: formData.service || null,
          message: formData.message,
          created_at: new Date().toISOString(),
        }
      ]);

    if (error) {
      console.error('Error submitting form to Supabase:', error);
      throw error;
    }

    console.log('Form submission successful:', data);
    return data;
  } catch (error) {
    console.error('Exception during form submission:', error);
    throw error;
  }
};
