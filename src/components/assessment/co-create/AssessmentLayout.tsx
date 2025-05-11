
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProgressIndicator, { Step } from '@/components/lead-qualification/ProgressIndicator';

interface AssessmentLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  title?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  { id: 1, label: "Portfolio & Planning" },
  { id: 2, label: "Capabilities & Alignment" },
  { id: 3, label: "Execution & Collaboration" },
  { id: 4, label: "Your Information" }
];

const AssessmentLayout: React.FC<AssessmentLayoutProps> = ({ 
  children, 
  currentStep,
  title = "Co-Create Readiness Assessment",
  steps = defaultSteps
}) => {
  return (
    <MainLayout pageTitle="Co-Create Assessment">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-brand-600 text-center">{title}</h1>
          {currentStep < 5 && (
            <ProgressIndicator steps={steps} currentStep={currentStep} />
          )}
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default AssessmentLayout;
