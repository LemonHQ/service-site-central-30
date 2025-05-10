
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ConsultingPanelProps {
  title?: string;
  subtitle?: string;
  description?: string;
  expertName?: string;
  expertTitle?: string;
  expertImage?: string;
  ctaText?: string;
}

const ConsultingPanel: React.FC<ConsultingPanelProps> = ({
  title = "Schedule a call with our",
  subtitle = "Product Design Expert",
  description = "Every product design challenge is different. That's why we offer you a free consulting session with one of our in-house experts.",
  expertName = "Husain Mohsin",
  expertTitle = "HEAD OF DESIGN",
  expertImage = "/assets/imgs/husain-mohsin-profile-pic.png",
  ctaText = "Book a Consultation"
}) => {
  const { toast } = useToast();
  
  return (
    <section className="bg-brand-400 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-8 md:mb-0">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light mb-2">
                {title}
              </h2>
              <div className="flex items-center">
                <ArrowRight className="mr-2 h-6 w-6" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-light">
                  {subtitle}
                </h3>
              </div>
            </div>
            
            <div className="my-12 border-t border-white/20" />
            
            <p className="text-xl md:text-2xl max-w-2xl font-light mb-8">
              {description}
            </p>
            
            <p className="text-lg mb-4">
              You'll have the chance to explore which solutions are the right fit for your project. And we'll help you get a feel for what it's like to partner with us.
            </p>
            
            <p className="text-lg mb-8">Sound good?</p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-transparent hover:bg-white hover:text-brand-400 text-white border border-white text-lg px-6 py-6 h-auto"
                  variant="outline"
                >
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[650px]">
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
          </div>
          
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src={expertImage} 
                alt={expertName} 
                className="rounded-lg w-full max-w-md mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-brand-600 bg-opacity-80">
                <p className="font-semibold text-xl">{expertName}</p>
                <p className="text-sm text-gray-200">{expertTitle}</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-brand-600 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingPanel;
