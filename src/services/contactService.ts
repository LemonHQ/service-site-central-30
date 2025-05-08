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
  // If supabase client is not available (missing environment variables), store in localStorage instead
  if (!supabase) {
    console.log('Supabase not available, storing submission in localStorage');
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      ...formData,
      id: `submission-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    return newSubmission;
  }
  
  // Otherwise use Supabase
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
    throw error;
  }

  return data;
};
