
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { H2, Paragraph } from '@/components/ui/Typography';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Rocket, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const RapidIterationResponseSection = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <H2 className="mb-6">Ready to accelerate your innovation?</H2>
            
            <Paragraph className="text-lg mb-8">
              Transform how your organization approaches product development with our 
              Co-Innovate rapid iteration methodology. Start small, learn fast, and build products
              your customers actually want.
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/getting-started">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 w-full sm:w-auto">
                  Start your rapid iteration journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-300 text-brand-700 hover:bg-brand-100 w-full sm:w-auto"
                onClick={() => setBookingDialogOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Talk to an innovation expert
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-brand-500" />
                <h4 className="font-semibold text-lg">Fast Results</h4>
              </div>
              <Paragraph>
                Go from concept to validated prototype in as little as 2-4 weeks, dramatically 
                reducing time-to-market and innovation cycles.
              </Paragraph>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-brand-500" />
                <h4 className="font-semibold text-lg">Minimal Risk</h4>
              </div>
              <Paragraph>
                Test ideas with limited financial exposure and brand risk, allowing you to 
                explore innovative concepts safely.
              </Paragraph>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-brand-500" />
                <h4 className="font-semibold text-lg">Sustainable Innovation</h4>
              </div>
              <Paragraph>
                Build a culture of continuous improvement and innovation that keeps your 
                team energized and your products competitive.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-[975px]">
          <DialogHeader>
            <DialogTitle>Schedule a Meeting with an Innovation Expert</DialogTitle>
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

export default RapidIterationResponseSection;
