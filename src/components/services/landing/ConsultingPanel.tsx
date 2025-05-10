
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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
  
  const handleBookConsultation = () => {
    toast({
      title: "Booking Request Received",
      description: "We'll contact you shortly to schedule your consultation.",
    });
    // Here you would typically trigger a booking modal or redirect to a booking page
  };

  return (
    <section className="bg-black text-white py-16">
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
            
            <div className="my-12 border-t border-gray-800" />
            
            <p className="text-xl md:text-2xl max-w-2xl font-light mb-8">
              {description}
            </p>
            
            <p className="text-lg mb-4">
              You'll have the chance to explore which solutions are the right fit for your project. And we'll help you get a feel for what it's like to partner with us.
            </p>
            
            <p className="text-lg mb-8">Sound good?</p>
            
            <Button 
              onClick={handleBookConsultation}
              className="bg-transparent hover:bg-white hover:text-black text-white border border-white text-lg px-6 py-6 h-auto"
              variant="outline"
            >
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src={expertImage} 
                alt={expertName} 
                className="rounded-lg w-full max-w-md mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <p className="font-semibold text-xl">{expertName}</p>
                <p className="text-sm text-gray-300">{expertTitle}</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-black p-2 rounded">
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
