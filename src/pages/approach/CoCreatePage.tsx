
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Sparkles, RocketIcon, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoCreatePage: React.FC = () => {
  return (
    <MainLayout pageTitle="Co-Create Approach">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Co-Create: Innovate Together</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Collaborate with our experts to develop groundbreaking products and services.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-brand-900 to-gray-900 opacity-90"></div>
      </section>

      {/* Why Co-Create Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-brand-600">Why Co-Create?</h2>
            <p className="text-xl text-gray-600">
              Unlock new possibilities by combining your vision with our expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="flex items-start">
              <Sparkles className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Shared Vision</h3>
                <p className="text-gray-600">Align your goals with our capabilities for a unified approach to innovation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <RocketIcon className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Accelerated Innovation</h3>
                <p className="text-gray-600">Speed up your product development cycle with our proven methodologies and expert teams.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Lightbulb className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
                <p className="text-gray-600">Gain access to cutting-edge knowledge and industry best practices to drive better outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Creation Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-brand-600">Our Co-Creation Services</h2>
            <p className="text-xl text-gray-600">
              Explore our tailored services designed to help you innovate and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-ivory-100 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform border border-beige-300/30">
              <div className="mb-4">
                <Sparkles className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-400">Product Strategy</h3>
              <p className="text-gray-600">Define your product vision and roadmap with expert guidance.</p>
            </div>
            <div className="bg-ivory-100 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform border border-beige-300/30">
              <div className="mb-4">
                <RocketIcon className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-400">Rapid Prototyping</h3>
              <p className="text-gray-600">Test ideas quickly and validate concepts before investing heavily.</p>
            </div>
            <div className="bg-ivory-100 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform border border-beige-300/30">
              <div className="mb-4">
                <Lightbulb className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-400">Innovation Workshops</h3>
              <p className="text-gray-600">Structured sessions to unlock creativity and solve complex problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-brand-50 border-t border-b border-brand-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3 text-brand-600">Ready to Co-Create?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take our readiness assessment to see if co-creation is right for you.
            </p>
            <Link to="/assessment/co-create" className="inline-block bg-brand-500 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Take the Assessment
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CoCreatePage;
