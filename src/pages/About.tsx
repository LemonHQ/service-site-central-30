
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">About LemonHQ</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light leading-relaxed">
              We partner with enterprise organizations to transform digital experiences through strategic innovation and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              To help enterprise organizations stay relevant in rapidly evolving markets by co-creating digital solutions that drive sustainable growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-900">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We push boundaries and explore new possibilities to create breakthrough solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work closely with our clients as partners, not just service providers.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We deliver exceptional quality in every project, exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-900">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team member cards would go here */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <p className="text-sm text-gray-500 mt-2">
                  20+ years in digital transformation and enterprise consulting.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">CTO</p>
                <p className="text-sm text-gray-500 mt-2">
                  Expert in emerging technologies and scalable architecture design.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">Mike Johnson</h3>
                <p className="text-gray-600">Head of Strategy</p>
                <p className="text-sm text-gray-500 mt-2">
                  Strategic planning and business transformation specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-16 md:py-24 bg-brand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-900">Our Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Co-Create</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We work alongside your team to understand challenges and develop solutions collaboratively.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Co-Innovate</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We explore cutting-edge technologies and methodologies to drive innovation.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Scale</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We help you scale successful solutions across your organization.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-4 text-gray-800">Optimize</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We continuously improve and optimize solutions for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Transform Your Digital Experience?</h2>
            <p className="text-xl mb-8 text-brand-100 font-light">
              Let's discuss how we can help your organization achieve its digital transformation goals.
            </p>
            <a href="/contact" className="bg-white text-brand-600 px-8 py-3 rounded-md font-medium hover:bg-brand-100 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
