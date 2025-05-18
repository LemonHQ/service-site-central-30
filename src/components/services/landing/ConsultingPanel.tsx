
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ConsultingPanel: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Our consultants can help you navigate complex challenges and develop tailored digital strategies for your organization.
          </p>
          
          <Link to="/contact">
            <Button className="bg-brand-600 hover:bg-brand-700 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span>Schedule a Consultation</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultingPanel;
