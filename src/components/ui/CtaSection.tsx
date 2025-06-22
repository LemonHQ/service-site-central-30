
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string; // Made optional since we'll use dialog
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  return (
    <section className="bg-beige-200 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-600">{title}</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-accent-400 hover:bg-accent-500 text-white py-6 px-8 text-lg"
              onClick={() => setBookingDialogOpen(true)}
            >
              {buttonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink}>
                <Button variant="outline" className="border-brand-400 text-brand-400 hover:bg-beige-100 py-6 px-8 text-lg">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-[975px]">
          <DialogHeader>
            <DialogTitle>Schedule a Meeting</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4" id="calendar-container">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0B2joTaaMkpn7ocWprDwd5JFjcDq8YF6qkJoym3LDGtbJSIULDeYEkUX3_OygWAmciwvXsjhs5?gv=true" 
              style={{ width: "100%", height: "600px", border: 0 }} 
              frameBorder="0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CtaSection;
