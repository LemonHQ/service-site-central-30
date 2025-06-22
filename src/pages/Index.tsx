
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';

const Index = () => { 
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-ivory-100">
        <div className="text-center p-8 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-brand-600">Welcome to LemonHQ Professional Services</h1>
          <p className="text-xl text-gray-700 mb-8">
            We specialize in delivering exceptional solutions that drive business growth and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-beige-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-brand-500">Strategic Consulting</h3>
              <p className="text-gray-600">Expert guidance to navigate complex business challenges and opportunities</p>
            </div>
            <div className="bg-beige-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-brand-500">Digital Transformation</h3>
              <p className="text-gray-600">Comprehensive solutions to modernize your business operations and customer experiences.</p>
            </div>
          </div>
          <Link 
            to="/services" 
            className="mt-8 inline-block bg-accent-400 hover:bg-accent-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
