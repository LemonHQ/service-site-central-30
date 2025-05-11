
import React from 'react';
import { Check } from 'lucide-react';

interface ThankYouHeaderProps {
  userName: string;
  userEmail: string;
}

const ThankYouHeader: React.FC<ThankYouHeaderProps> = ({ userName, userEmail }) => {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <div className="bg-brand-50 p-4 rounded-full">
          <Check className="h-12 w-12 text-brand-500" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-brand-600 mb-2 text-center">Thank You, {userName}!</h1>
      <p className="text-gray-600 mb-8 text-center">
        Your co-create readiness assessment has been completed successfully. 
        A detailed report has been sent to <span className="font-semibold">{userEmail}</span>.
      </p>
    </>
  );
};

export default ThankYouHeader;
