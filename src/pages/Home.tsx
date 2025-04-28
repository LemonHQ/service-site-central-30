
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CtaSection from '../components/ui/CtaSection';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, Rocket, Palette, TrendingUp, LayersIcon, 
  BarChart2, Network, Globe, Database, Users 
} from 'lucide-react';

const Home = () => {
  // Featured services data
  const featuredServices = [
    {
      title: 'Validating Product Ideas',
      description: 'Turn innovative concepts into validated opportunities with data-driven methodologies.',
      link: '/services/validating-product-ideas',
      icon: Lightbulb
    },
    {
      title: 'Launching New Products',
      description: 'Accelerate time-to-market with expert launch strategies that captivate your audience.',
      link: '/services/launching-products',
      icon: Rocket
    },
    {
      title: 'Designing Experiences',
      description: 'Create seamless, engaging brand and customer experiences that drive loyalty.',
      link: '/services/designing-experiences',
      icon: Palette
    },
    {
      title: 'Scaling Products',
      description: 'Maximize growth potential with scalable architectures and optimization frameworks.',
      link: '/services/scaling-products',
      icon: TrendingUp
    },
    {
      title: 'Expand Product Offerings',
      description: 'Diversify your portfolio with strategic product expansion services.',
      link: '/services/expand-product-offerings',
      icon: LayersIcon
    },
    {
      title: 'Optimize Digital Portfolios',
      description: 'Harmonize your digital assets into coherent, high-performing ecosystems.',
      link: '/services/optimize-portfolios',
      icon: BarChart2
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">
              Transform Your Enterprise Product Strategy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100 animate-slide-in">
              Partner with experts to validate, design, launch and scale products that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/services">
                <Button className="bg-white text-brand-600 hover:bg-brand-100 py-6 px-8 text-lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Enterprise Product Services" 
            subtitle="Comprehensive solutions tailored for product teams seeking to innovate and scale effectively."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-brand-300 text-brand-600 hover:bg-brand-100">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-700">
                Expert Product Innovation for Enterprise Brands
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep industry expertise, cutting-edge technology, and human-centered design to help enterprise brands succeed in today's rapidly evolving digital landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-4">
                    <Users className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cross-Functional Teams</h4>
                    <p className="text-gray-600">Strategists, designers, and engineers working together to deliver holistic solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-4">
                    <Database className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data-Driven Approach</h4>
                    <p className="text-gray-600">Insights and analytics that inform every decision and strategy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Perspective</h4>
                    <p className="text-gray-600">Experience working with multinational enterprise brands across industries.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="outline" className="border-brand-300 text-brand-600 hover:bg-brand-100">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-brand-100 rounded-lg p-8 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <h3 className="text-4xl font-bold text-brand-500 mb-2">15+</h3>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <h3 className="text-4xl font-bold text-brand-500 mb-2">200+</h3>
                    <p className="text-gray-600">Enterprise Clients</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <h3 className="text-4xl font-bold text-brand-500 mb-2">92%</h3>
                    <p className="text-gray-600">Client Retention</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <h3 className="text-4xl font-bold text-brand-500 mb-2">500+</h3>
                    <p className="text-gray-600">Successful Projects</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Banner */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by leading enterprise brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {/* Replace with actual client logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 w-32 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Transform Your Product Strategy?"
        subtitle="Schedule a consultation with our product experts to discuss your challenges and opportunities."
        buttonText="Request Consultation"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </MainLayout>
  );
};

export default Home;
