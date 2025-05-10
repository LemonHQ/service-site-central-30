
import { supabase } from '@/integrations/supabase/client';
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
    console.log('Starting submission to Supabase...');
    
    const submissionData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone || null,
      service: formData.service || null,
      message: formData.message,
      created_at: new Date().toISOString(),
    };
    
    console.log('Prepared submission data:', submissionData);
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([submissionData])
      .select();

    console.log('Supabase response:', { data, error });

    if (error) {
      console.error('Error submitting contact form:', error);
      // Fallback to localStorage if there's an error with Supabase
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        id: `submission-${Date.now()}`,
        created_at: new Date().toISOString(),
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      console.log('Saved submission to localStorage as fallback');
      return newSubmission;
    }

    console.log('Successfully submitted to Supabase:', data);
    return data;
  } catch (error) {
    console.error('Unexpected error:', error);
    // Fallback to localStorage for any unexpected errors
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      id: `submission-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    console.log('Saved submission to localStorage due to unexpected error');
    return newSubmission;
  }
};
