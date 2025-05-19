
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFoundSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-semibold mb-4">Case Study Not Found</h2>
      <p className="text-gray-600 mb-6">We couldn't find the case study you're looking for.</p>
      <Button variant="default" onClick={() => navigate('/case-studies')}>
        View All Case Studies
      </Button>
    </div>
  );
};

export default NotFoundSection;
