import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { H4 } from '@/components/ui/Typography';
const ContactSection: React.FC = () => {
  return <div className="mt-6 space-y-3">
      <H4 className="text-brand-600">Get in Touch</H4>
      <div className="flex items-center">
        <Mail size={16} className="mr-2 text-brand-500" />
        <a href="mailto:create@lemonhq.co.uk" className="text-brand-500 hover:underline">
          create@lemonhq.co.uk
        </a>
      </div>
      
      <div className="flex items-center space-x-3">
        <Link to="/contact">
          <Button className="bg-brand-400 hover:bg-brand-500 text-slate-50">
            Contact Us
          </Button>
        </Link>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-brand-400 text-brand-500 hover:bg-brand-100">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Meeting
            </Button>
          </DialogTrigger>
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
      </div>
    </div>;
};
export default ContactSection;