import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '@/components/layout/MainLayout';
import { H2, Lead, Paragraph, H3 } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle, Clock, Users, Calendar, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import EcosystemPartnersCarousel from '@/components/approach/co-create-closer/EcosystemPartnersCarousel';
import { Checkbox } from '@/components/ui/checkbox';

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
    questions: '',
    marketing_consent: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const isWorkEmail = (email: string): boolean => {
    // Simple check to exclude common personal email domains
    const personalDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 
      'outlook.com', 'aol.com', 'icloud.com', 
      'mail.com', 'protonmail.com', 'zoho.com',
      'yandex.com', 'gmx.com', 'live.com'
    ];
    
    const emailDomain = email.split('@')[1]?.toLowerCase();
    return !!emailDomain && !personalDomains.includes(emailDomain);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.company || !formData.job_title) {
      toast.error('Please fill out all required fields');
      return;
    }
    
    if (!isWorkEmail(formData.email)) {
      toast.error('Please use your work email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Use type assertion to work around TypeScript error with the new table
      const { error } = await (supabase as any).from('webinar_registrations').insert([formData]);
      
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

  // What you'll learn items
  const learningPoints = [
    'How to identify ecosystem opportunities within your current product lines',
    'Practical frameworks for unbundling traditional offerings into modular solutions',
    'Step-by-step process to map your ecosystem partners and integration points',
    'Methods to measure and optimize ecosystem performance',
    'Real-world case studies of successful ecosystem transformations'
  ];

  // Webinar details
  const webinarDetails = [
    { icon: Clock, text: '90 minutes of focused strategy and insights' },
    { icon: Calendar, text: 'Interactive session with Q&A opportunities' },
    { icon: Users, text: 'Limited to 25 participants for meaningful engagement' }
  ];
  
  return (
    <MainLayout pageTitle="90-Minute Ecosystem Strategy Session Registration">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-4">
                Limited Spots Available
              </span>
              <H2 className="text-brand-700">90-Minute Ecosystem Strategy Session</H2>
              <Lead className="mt-4 mb-6 text-gray-600">
                Transform your product strategy with our expert-led workshop on building thriving digital ecosystems
              </Lead>
              
              <div className="space-y-3 mt-6">
                {webinarDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-brand-100 p-2 rounded-full">
                      <detail.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <span className="text-gray-700">{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Ecosystem Strategy Session" 
                className="rounded-xl shadow-lg object-cover w-full h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn + Registration Form Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* What You'll Learn Section - Left Side */}
            <div>
              <H3 className="text-brand-600 mb-6">What You'll Learn</H3>
              <Paragraph className="mb-8">
                Join our ecosystem strategists for a focused 90-minute session designed to help you unlock new growth paths through ecosystem thinking
              </Paragraph>
              
              <div className="grid gap-4 md:gap-6">
                {learningPoints.map((point, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-lg",
                      index % 2 === 0 ? "bg-beige-50" : "bg-white border border-gray-100"
                    )}
                  >
                    <CheckCircle className="w-5 h-5 text-brand-500 mt-1 shrink-0" />
                    <Paragraph>{point}</Paragraph>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Registration Form - Right Side */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <H3 className="text-center mb-6">Register for the Session</H3>
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
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="text-xs text-gray-500">Please use your company email address</div>
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
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing_consent"
                      name="marketing_consent"
                      checked={formData.marketing_consent}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, marketing_consent: checked === true }))
                      }
                    />
                    <label
                      htmlFor="marketing_consent"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to receive marketing communications about relevant products and services
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-600 hover:bg-brand-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Sign up for the Strategy Session'}
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
      </div>

      {/* Who Should Attend */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <H3 className="text-center text-brand-600 mb-8">Who Should Attend</H3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="font-semibold text-lg mb-2 text-brand-700">Product Leaders</div>
                <Paragraph>Seeking to transform traditional offerings into ecosystem-ready platforms with multiple integration points</Paragraph>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="font-semibold text-lg mb-2 text-brand-700">Digital Strategists</div>
                <Paragraph>Looking to identify new channels and partnership models to extend their market reach</Paragraph>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="font-semibold text-lg mb-2 text-brand-700">Innovation Directors</div>
                <Paragraph>Responsible for creating new digital experiences that connect with partner ecosystems</Paragraph>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="font-semibold text-lg mb-2 text-brand-700">C-Suite Executives</div>
                <Paragraph>With responsibility for digital transformation and growth through partnerships</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ecosystem Partners Carousel (reused from Co-Create page) */}
      <EcosystemPartnersCarousel />
    </MainLayout>
  );
};

export default WebinarSignupPage;
