
import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from '@/components/forms/ContactForm';
import BookingDialog from './BookingDialog';

const ContactSection = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm onOpenBookingDialog={() => setBookingDialogOpen(true)} />
          </div>
        </div>
      </div>
      
      {/* Booking Dialog */}
      <BookingDialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen} />
    </section>
  );
};

export default ContactSection;
