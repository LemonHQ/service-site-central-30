
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';
import { H2, Lead } from '@/components/ui/Typography';

const WebinarCtaSection = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  return (
    <section className="bg-brand-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-brand-600">Ready for Rapid Innovation?</H2>
          <Lead className="mb-8 text-gray-700">
            Join our 90-minute Rapid Innovation Strategy Session and learn how to accelerate your product development cycle
          </Lead>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/co-innovate-webinar">
              <Button 
                className="bg-accent-400 hover:bg-accent-500 text-white py-6 px-8 text-lg"
              >
                Register for the Strategy Session
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" className="border-brand-400 text-brand-400 hover:bg-beige-100 py-6 px-8 text-lg">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCtaSection;
