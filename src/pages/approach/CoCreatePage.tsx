import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/shared/Hero';
import SectionHeader from '@/components/shared/SectionHeader';
import { Sparkles } from 'lucide-react';
import ApproachServices from '@/components/approach/ApproachServices';
import ServiceCard from '@/components/shared/ServiceCard';
import { RocketIcon, Lightbulb, GraduationCap, LucideIcon } from 'lucide-react';

const CoCreatePage: React.FC = () => {
  return (
    <MainLayout pageTitle="Co-Create Approach">
      <Hero
        title="Co-Create: Innovate Together"
        subtitle="Collaborate with our experts to develop groundbreaking products and services."
        image="/images/co-create-hero.jpg"
        imageAlt="Co-Create Hero Image"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Why Co-Create?"
            subtitle="Unlock new possibilities by combining your vision with our expertise."
          />
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Co-Creation Services"
            subtitle="Explore our tailored services designed to help you innovate and grow."
          />
          <ApproachServices approach="co-create" />
        </div>
      </section>

      <section className="py-16 bg-brand-50 border-t border-b border-brand-200">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ready to Co-Create?"
            subtitle="Take our readiness assessment to see if co-creation is right for you."
          />
          <div className="text-center mt-8">
            <a href="/assessment/co-create" className="inline-block bg-brand-500 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Take the Assessment
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CoCreatePage;
