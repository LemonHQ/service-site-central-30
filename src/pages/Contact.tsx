
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, Phone, MapPin 
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-brand-700">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Let's discuss how we can help transform your digital product strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-semibold mb-6 text-brand-700">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our services or want to discuss a potential project? Reach out to us using the contact information below or fill out the form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@elevatedigital.com" className="text-brand-400 hover:text-brand-500">
                      contact@elevatedigital.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+1-800-123-4567" className="text-brand-400 hover:text-brand-500">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <address className="not-italic text-gray-600">
                      123 Innovation Way<br />
                      Suite 400<br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-semibold mb-6">Request a Consultation</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
                      >
                        <option value="">Select a service</option>
                        <option value="validating-product-ideas">Validating Product Ideas</option>
                        <option value="ideating-product-concepts">Ideating Product Concepts</option>
                        <option value="designing-experiences">Designing Brand & Customer Experiences</option>
                        <option value="launching-products">Launching New Products</option>
                        <option value="scaling-products">Scaling Products</option>
                        <option value="expand-product-offerings">Expand Product Offerings</option>
                        <option value="standardize-technology">Standardize Technology</option>
                        <option value="pilot-emerging-tech">Pilot Emerging Tech</option>
                        <option value="connect-ecosystems">Connect to Digital Ecosystems</option>
                        <option value="optimize-portfolios">Optimize Digital Portfolios</option>
                        <option value="unify-brand-experiences">Unify Brand Experiences</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please tell us about your project or inquiry"
                        className="min-h-[150px]"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-brand-400 hover:bg-brand-500"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Submit Request'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        <div className="h-96 bg-gray-200">
          {/* Replace with an actual map integration */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600">Interactive Map Goes Here</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
