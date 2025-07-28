
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Mail, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ContactForm from '@/components/forms/ContactForm';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';
import { SectionTitle, CardTitle } from '@/components/ui/Typography';

const Contact = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <MainLayout 
      pageTitle="Contact"
      seoPage="contact"
      aiMetadata={{
        purpose: "Contact page for business inquiries and consultation requests",
        contentSummary: "Contact information and form for potential clients to reach LemonHQ for digital transformation services",
        contentType: "contact",
        keywords: ["contact LemonHQ", "digital transformation consultation", "business inquiry", "enterprise services"]
      }}
    >
      <PageHero
        title="Contact Us"
        subtitle="Let's discuss how we can help transform your digital product strategy."
        backgroundVariant="brand"
      />

      <ContentSection paddingVariant="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-4">
            <SectionTitle className="mb-6">Get in Touch</SectionTitle>
            <p className="text-gray-600 mb-8">
              Have a question about our services or want to discuss a potential project? Reach out to us using the contact information below or fill out the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-100 p-3 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <CardTitle>Email</CardTitle>
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
                  <CardTitle>UK & Europe</CardTitle>
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
                  <CardTitle>Middle East</CardTitle>
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
            <ContactForm onOpenBookingDialog={() => setBookingDialogOpen(true)} />
          </div>
        </div>
      </ContentSection>

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
    </MainLayout>
  );
};

export default Contact;
