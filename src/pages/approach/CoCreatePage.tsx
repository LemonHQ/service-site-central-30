
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">The benefits of Co-creation</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our Co-Create model brings your team and our experts together in collaborative environments designed to accelerate unbundling, build alignment, and deliver impactful business outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Faster product-market fit</h3>
              <p className="text-gray-600">Validate real customer needs early and shape solutions that resonate—before you commit full-scale resources.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Stronger differentiation</h3>
              <p className="text-gray-600">Stand out with offerings that are precise, relevant, and built with the end customer segment in mind.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Actionable innovation</h3>
              <p className="text-gray-600">Uncover fresh opportunities, niche use cases, and value models hidden in your customer or partner ecosystem.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Less risk, more alignment</h3>
              <p className="text-gray-600">Minimize missteps and internal friction by involving brand, product, market, channel teams from day one.</p>
            </div>


            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Execution-ready frameworks</h3>
              <p className="text-gray-600">Turn strategy into speed with assets, prototypes, and modular systems ready for market deployment.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Customer-centricity at scale</h3>
              <p className="text-gray-600">Design for flexibility—so your product can flex across regions, verticals, or partner channels without losing focus.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-beige-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-600">Measurable outcomes</h3>
              <p className="text-gray-600">Define clear KPIs and success metrics aligned with your business objectives.</p>
            </div>
          </div>
        </div> 
      </section>
      
      {/* Service Offerings Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Access these services through Co-Create</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our Co-Create model can be applied across a wide range of digital innovation needs, from product design to emerging technology exploration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Digital Product Design"
              description="Create user-centric digital products through collaborative ideation, prototyping, and testing." icon={FlaskConical}
            />
            
            <ServiceCard
              title="Rapid Prototyping"
              description="Transform concepts into functional prototypes within days, not weeks or months." icon={Zap}
            />
            
            <ServiceCard
              title="Technology Modernization"
              description="Reimagine legacy systems with modern architectures and technology stacks." icon={History}
            />
            
            <ServiceCard
              title="Innovation Workshops"
              description="Structured sessions to solve complex challenges and generate breakthrough ideas." icon={Lightbulb}
            />
          </div>
        </div>
      </section>
      
      {/* Exploration Section 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Take your business to the next level</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover how our Co-Create approach can help you address specific business challenges and create meaningful impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Innovation Workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-600">Innovation Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Facilitated sessions to generate breakthrough ideas and solve complex business challenges.
                </p>
                <Link to="/services/innovation-workshops" className="inline-flex items-center text-brand-500 hover:text-brand-600">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Digital Product Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-600">Digital Product Development</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end product development from concept to market launch with continuous validation.
                </p>
                <Link to="/services/digital-product-development" className="inline-flex items-center text-brand-500 hover:text-brand-600">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Technology Exploration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-600">Technology Exploration</h3>
                <p className="text-gray-600 mb-4">
                  Explore and validate emerging technologies to understand their impact on your business.
                </p>
                <Link to="/services/technology-exploration" className="inline-flex items-center text-brand-500 hover:text-brand-600">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* How It Works 
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
