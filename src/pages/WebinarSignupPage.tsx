
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '@/components/layout/MainLayout';
import { H2, Lead, Paragraph } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';

const WebinarSignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    job_title: '',
    phone: '',
    industry: '',
    questions: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.company || !formData.job_title) {
      toast.error('Please fill out all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('webinar_registrations').insert([formData]);
      
      if (error) {
        if (error.code === '23505') {
          toast.error('You have already registered for this webinar with this email address');
        } else {
          console.error('Error submitting form:', error);
          toast.error('Error submitting form. Please try again.');
        }
        setIsSubmitting(false);
        return;
      }
      
      toast.success('Registration successful!');
      // Redirect to thank you page after successful submission
      navigate('/thank-you', { 
        state: { 
          message: 'Thank you for registering for the Ecosystem Strategy Session!',
          details: 'You will receive a confirmation email with the webinar details shortly.'
        } 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  return (
    <MainLayout pageTitle="90-Minute Ecosystem Strategy Session Registration">
      <div className="bg-brand-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <H2 className="mb-4">Register for our 90-Minute Ecosystem Strategy Session</H2>
              <Lead className="text-gray-600">
                Join our expert strategists for a focused session to map your ecosystem opportunities
              </Lead>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="job_title"
                      name="job_title"
                      value={formData.job_title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                      Industry
                    </label>
                    <Input
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="questions" className="block text-sm font-medium text-gray-700">
                    Questions or Topics
                  </label>
                  <Textarea
                    id="questions"
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                    placeholder="Share any specific topics or questions you'd like to discuss during the session"
                    className="h-32"
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-600 hover:bg-brand-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Register for the Strategy Session'}
                  </Button>
                </div>
                
                <Paragraph className="text-xs text-gray-500 text-center mt-4">
                  By registering, you agree to our <a href="/terms-and-conditions" className="text-brand-600 underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-brand-600 underline">Privacy Policy</a>.
                </Paragraph>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WebinarSignupPage;
