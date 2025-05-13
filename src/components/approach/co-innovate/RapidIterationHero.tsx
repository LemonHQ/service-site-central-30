
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Calendar } from 'lucide-react';
import { H1, Lead, Paragraph } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const RapidIterationHero = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b from-beige-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-lg w-fit">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Rapid product Innovation</span>
            </div>
            
            <H1>Co-<span className="text-brand-600">Innovate</span></H1>
            
            <div className="flex items-center gap-3 bg-brand-50 p-3 rounded-md border border-brand-100">
              <span className="text-3xl font-bold text-brand-600">5x</span>
              <Paragraph className="text-brand-700">faster time-to-market through rapid iteration methodology</Paragraph>
            </div>
            
            <Lead className="text-brand-700 font-semibold">
              Safe spaces for high-velocity experimentation with minimal risk
            </Lead>
            
            <Paragraph className="mb-8">
              Co-Innovate transforms how brands approach product innovation through rapid 
              iteration cycles that limit financial exposure, minimize brand risk, and generate 
              momentum through quick action and accelerated learning.
            </Paragraph>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/getting-started">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 w-full sm:w-auto">
                  Get started with rapid iteration <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-400 text-brand-500 hover:bg-brand-100 w-full sm:w-auto"
                onClick={() => setBookingDialogOpen(true)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Talk to an innovation expert
              </Button>
            </div> */}
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg z-10 max-w-[180px]">
              <p className="text-xs font-medium text-brand-500">Traditional Approach</p>
              <p className="text-sm">High financial exposure</p>
              <p className="text-sm">Significant brand risk</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-brand-500 p-3 rounded-lg shadow-lg z-10 max-w-[180px]">
              <p className="text-xs font-medium text-white">Rapid Iteration</p>
              <p className="text-sm text-white">Limited exposure</p>
              <p className="text-sm text-white">Accelerated learning</p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Rapid Iteration Innovation" 
              className={cn(
                "rounded-xl shadow-lg w-full h-[400px] object-cover object-center",
                "border-4 border-white"
              )} 
            />
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

export default RapidIterationHero;
