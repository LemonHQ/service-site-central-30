
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProgressIndicator from './ProgressIndicator';

interface LeadQualificationLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  title?: string;
}

const LeadQualificationLayout: React.FC<LeadQualificationLayoutProps> = ({ 
  children, 
  currentStep,
  title = "Lead Qualification"
}) => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">{title}</h1>
          <ProgressIndicator currentStep={currentStep} />
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default LeadQualificationLayout;
