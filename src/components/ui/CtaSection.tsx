import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';
import { H2, Lead } from '@/components/ui/Typography';
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
  secondaryButtonLink
}) => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  return <section className="bg-beige-200 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <H2 className="mb-6 text-gray-900">{title}</H2>
          <Lead className="mb-8 font-light text-gray-700">{subtitle}</Lead>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => setBookingDialogOpen(true)} className="py-6 px-8 text-lg font-normal rounded bg-brand-500 hover:bg-brand-400 text-white">
              {buttonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && <Link to={secondaryButtonLink}>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 py-6 px-8 text-lg font-normal">
                  {secondaryButtonText}
                </Button>
              </Link>}
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
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0B2joTaaMkpn7ocWprDwd5JFjcDq8YF6qkJoym3LDGtbJSIULDeYEkUX3_OygWAmciwvXsjhs5?gv=true" style={{
            width: "100%",
            height: "600px",
            border: 0
          }} frameBorder="0"></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
export default CtaSection;