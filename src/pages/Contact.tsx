import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
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
        description: "Thank you for reaching out. We'll get back to you shortly."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };
  return <MainLayout>
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
                    <a href="mailto:create@lemonhq.co.uk" className="text-brand-400 hover:text-brand-500">
                      create@lemonhq.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">UK & Europe</h4>
                    <address className="not-italic text-gray-600">
                      Lemon Marketing & Consultancy Ltd, <br />
                      128, City Road, London,England, EC1V 2NX
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Middle East</h4>
                    <address className="not-italic text-gray-600">
                      Lemon Adv, & Pub. LLC<br />
                      Damas 14 Office Tower, Suite #1948<br />
                      Al Zahra Street, Sharjah, United Arab Emirates
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
                      <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@company.com" />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <Input id="company" name="company" required value={formData.company} onChange={handleChange} placeholder="Your company" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400">
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
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Please tell us about your project or inquiry" className="min-h-[150px]" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <Button type="submit" className="md:w-auto bg-brand-400 hover:bg-brand-500" disabled={loading}>
                      {loading ? 'Sending...' : 'Submit Request'}
                    </Button>
                    
                    <Button type="button" variant="outline" className="flex items-center gap-2 border-brand-400 text-brand-500 hover:bg-brand-100" onClick={() => setBookingDialogOpen(true)}>
                      <Calendar className="h-4 w-4" />
                      Request Consultation
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        
      </section>

      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>Schedule a Meeting</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4" id="calendar-container">
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0B2joTaaMkpn7ocWprDwd5JFjcDq8YF6qkJoym3LDGtbJSIULDeYEkUX3_OygWAmciwvXsjhs5?gv=true" style={{
            width: "100%",
            height: "600px",
            border: 0
          }} frameBorder="0"></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>;
};
export default Contact;