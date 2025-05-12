
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const NextStepsSection: React.FC = () => {
  return (
    <div className="bg-brand-50 border border-brand-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-brand-600 mb-3">Next Steps</h3>
      <p className="text-gray-700 mb-4">
        Based on your results, you may be ready to explore co-creation approaches to accelerate your innovation goals. Our team can help you identify the best starting points based on your specific needs and readiness.
      </p>
      <Link to="/getting-started">
        <Button className="w-full sm:w-auto">
          Schedule a Consultation
        </Button>
      </Link>
    </div>
  );
};

export default NextStepsSection;
