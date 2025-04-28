
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CtaSection from '../components/ui/CtaSection';
import { 
  Lightbulb, PenTool, Palette, Rocket, TrendingUp, 
  LayersIcon, Settings, Cpu, Network, BarChart2, Users 
} from 'lucide-react';

const Services = () => {
  // All services data
  const allServices = [
    {
      title: 'Validating Product Ideas',
      description: 'Transform innovative concepts into validated opportunities with market research, user testing, prototyping, and data analytics.',
      link: '/services/validating-product-ideas',
      icon: Lightbulb
    },
    {
      title: 'Ideating Product Concepts',
      description: 'Generate breakthrough product concepts through collaborative workshops, design thinking, and strategic innovation frameworks.',
      link: '/services/ideating-product-concepts',
      icon: PenTool
    },
    {
      title: 'Designing Brand & Customer Experiences',
      description: 'Create cohesive, engaging brand and customer experiences that build emotional connections and drive loyalty.',
      link: '/services/designing-experiences',
      icon: Palette
    },
    {
      title: 'Launching New Brands & Products',
      description: 'Accelerate time-to-market and maximize impact with expert launch strategies, go-to-market planning, and execution.',
      link: '/services/launching-products',
      icon: Rocket
    },
    {
      title: 'Scaling Products',
      description: 'Maximize growth potential with scalable architectures, optimization frameworks, and performance tuning.',
      link: '/services/scaling-products',
      icon: TrendingUp
    },
    {
      title: 'Expand Product Offerings',
      description: 'Diversify and grow your product portfolio through strategic planning, market analysis, and opportunity mapping.',
      link: '/services/expand-product-offerings',
      icon: LayersIcon
    },
    {
      title: 'Standardize Technology',
      description: 'Create efficiency and consistency across your organization with technology standardization and integration services.',
      link: '/services/standardize-technology',
      icon: Settings
    },
    {
      title: 'Pilot Emerging Tech',
      description: 'Evaluate and integrate emerging technologies with low-risk pilot programs and proofs of concept.',
      link: '/services/pilot-emerging-tech',
      icon: Cpu
    },
    {
      title: 'Connect to Digital Ecosystems',
      description: 'Integrate your products and services into broader digital ecosystems to increase reach and add customer value.',
      link: '/services/connect-ecosystems',
      icon: Network
    },
    {
      title: 'Optimize Digital Portfolios',
      description: 'Harmonize your digital assets into coherent, high-performing portfolios that maximize business value.',
      link: '/services/optimize-portfolios',
      icon: BarChart2
    },
    {
      title: 'Unify Brand Experiences',
      description: 'Create consistent, compelling brand experiences across all customer touchpoints and platforms.',
      link: '/services/unify-brand-experiences',
      icon: Users
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-brand-700">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Comprehensive digital product services for enterprise brands seeking to innovate and transform.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Full Service Offerings" 
            subtitle="From validating initial concepts to scaling mature products, our comprehensive services support the entire product lifecycle."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-700">
                Our Product Development Methodology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We approach product development as a systematic yet creative process, combining proven methodologies with innovative thinking to drive results.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">1</span>
                    Discover & Define
                  </h3>
                  <p className="text-gray-600 ml-11">Research, stakeholder interviews, and problem definition to establish clear goals.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">2</span>
                    Ideate & Conceptualize
                  </h3>
                  <p className="text-gray-600 ml-11">Generate innovative solutions through collaborative workshops and design thinking.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">3</span>
                    Prototype & Validate
                  </h3>
                  <p className="text-gray-600 ml-11">Build and test rapid prototypes to validate concepts with real users.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">4</span>
                    Build & Launch
                  </h3>
                  <p className="text-gray-600 ml-11">Develop production-ready products with thorough quality assurance and strategic launch planning.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center mr-3">5</span>
                    Measure & Optimize
                  </h3>
                  <p className="text-gray-600 ml-11">Continuous improvement through data analysis, user feedback, and performance optimization.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-brand-200 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-brand-300 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Transform Your Products?"
        subtitle="Let's discuss how our services can address your specific challenges and opportunities."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </MainLayout>
  );
};

export default Services;
