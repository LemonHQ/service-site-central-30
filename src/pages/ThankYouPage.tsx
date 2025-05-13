
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <div className="bg-white rounded-xl p-8 shadow">
          <div className="mb-6 flex justify-center">
            <div className="bg-brand-100 p-4 rounded-full">
              <Check className="h-16 w-16 text-brand-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-brand-700">Thank You!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We've received your submission and our team will be in touch shortly.
            We're excited to learn more about your business needs and how we can help.
          </p>
          
          <p className="text-md text-gray-500 mb-8">
            A confirmation email has been sent to the email address you provided.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="px-6"
            >
              Return to Home
            </Button>
            {/* <Button
              onClick={() => navigate('/services')}
              className="bg-brand-500 hover:bg-brand-600 px-6"
            >
              Explore Our Services
            </Button> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ThankYouPage;
