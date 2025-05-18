
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Service not found</h1>
      <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
      <Link to="/services">
        <Button className="mt-4">View All Services</Button>
      </Link>
    </div>
  );
};

export default NotFoundSection;
