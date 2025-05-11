
import React from 'react';

interface ResultsSummaryProps {
  readinessDescription: string;
  userEmail: string;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ readinessDescription, userEmail }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-2">What This Means</h3>
      <p className="text-gray-700 mb-4">{readinessDescription}</p>
      <div className="border-t border-gray-200 pt-4 mt-4">
        <p className="text-sm text-gray-600">
          A complete assessment report has been sent to your email with personalized recommendations based on your responses and readiness level.
        </p>
      </div>
    </div>
  );
};

export default ResultsSummary;
