
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CtaSection from '../components/ui/CtaSection';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, PenTool, Palette, Rocket, TrendingUp, 
  LayersIcon, Settings, Cpu, Network, BarChart2, Users,
  CheckCircle
} from 'lucide-react';

// Define service data
const servicesData = {
  'validating-product-ideas': {
    title: 'Validating Product Ideas',
    description: 'Transform innovative concepts into validated opportunities with market research, user testing, prototyping, and data analytics.',
    icon: Lightbulb,
    heroText: 'Reduce risk and increase confidence in your product decisions with our comprehensive validation approach.',
    benefits: [
      'Identify viable product opportunities with higher success rates',
      'Save time and resources by validating before full development',
      'Gain deep customer insights to refine your value proposition',
      'Build stakeholder confidence with data-backed decisions'
    ],
    process: [
      {
        title: 'Market & Competitive Analysis',
        description: 'Comprehensive assessment of market landscape, competitive positioning, and opportunity sizing.'
      },
      {
        title: 'User Research',
        description: 'In-depth interviews, ethnographic research, and user behavior analysis.'
      },
      {
        title: 'Concept Testing',
        description: 'Structured evaluation of product concepts with target users through interviews and surveys.'
      },
      {
        title: 'Rapid Prototyping',
        description: 'Quick development of interactive prototypes to test user experience and validate assumptions.'
      },
      {
        title: 'Data Analysis',
        description: 'Statistical analysis of test results to inform go/no-go decisions and product refinements.'
      }
    ]
  },
  'ideating-product-concepts': {
    title: 'Ideating Product Concepts',
    description: 'Generate breakthrough product concepts through collaborative workshops, design thinking, and strategic innovation frameworks.',
    icon: PenTool,
    heroText: 'Unlock creative thinking and generate innovative product concepts that solve real customer problems.',
    benefits: [
      'Break through conventional thinking with structured ideation methods',
      'Align cross-functional teams around shared product vision',
      'Generate diverse solution concepts to complex problems',
      'Create differentiated products with genuine market appeal'
    ],
    process: [
      {
        title: 'Problem Framing',
        description: 'Clear articulation of customer problems and business opportunities to focus ideation efforts.'
      },
      {
        title: 'Ideation Workshops',
        description: 'Facilitated collaborative sessions leveraging design thinking and other creative methodologies.'
      },
      {
        title: 'Concept Development',
        description: 'Refinement of raw ideas into structured product concepts with defined value propositions.'
      },
      {
        title: 'Concept Prioritization',
        description: 'Evaluation framework to select the most promising concepts for further development.'
      },
      {
        title: 'Vision Articulation',
        description: 'Creation of compelling product vision documents and preliminary roadmaps.'
      }
    ]
  },
  // Add similar objects for other services
  'designing-experiences': {
    title: 'Designing Brand & Customer Experiences',
    description: 'Create cohesive, engaging brand and customer experiences that build emotional connections and drive loyalty.',
    icon: Palette,
    heroText: 'Craft meaningful experiences that resonate with customers and strengthen your brand position.',
    benefits: [
      'Build emotional connections with users through thoughtful experience design',
      'Create consistent experiences across all customer touchpoints',
      'Differentiate your products in crowded markets',
      'Drive customer loyalty and retention through superior experiences'
    ],
    process: [
      {
        title: 'Experience Mapping',
        description: 'Comprehensive mapping of current and desired customer journeys across touchpoints.'
      },
      {
        title: 'Brand Strategy',
        description: 'Development of cohesive brand positioning, voice, and visual identity.'
      },
      {
        title: 'Experience Design',
        description: 'Creation of user-centered design systems and interaction patterns.'
      },
      {
        title: 'Prototyping & Testing',
        description: 'Iterative testing of experience designs with target users.'
      },
      {
        title: 'Implementation Guidelines',
        description: 'Detailed documentation to ensure consistent execution across channels.'
      }
    ]
  },
  // Add the rest of service details with similar structure
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const serviceData = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;
  
  if (!serviceData) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const { title, description, heroText, benefits, process, icon: Icon } = serviceData;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {Icon && <Icon size={48} className="mx-auto mb-6 text-brand-200" />}
            <h1 className="mb-6">{title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100">
              {heroText}
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand-600 hover:bg-brand-100">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Service Overview" 
                subtitle={description}
              />
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-brand-400 mr-3 flex-shrink-0 mt-1" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-brand-400 hover:bg-brand-500">
                  Discuss Your Needs
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Approach" 
            subtitle="How we deliver exceptional results through our proven methodology"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-500 font-semibold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Related Services" 
            subtitle="Enhance your product strategy with these complementary services"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Show 3 related services - for simplicity, just showing the first 3 other than current */}
            {Object.entries(servicesData)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, service]) => (
                <ServiceCard
                  key={id}
                  title={service.title}
                  description={service.description}
                  link={`/services/${id}`}
                  icon={service.icon}
                />
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title={`Ready to Start ${title}?`}
        subtitle="Schedule a consultation with our product experts to discuss your specific needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </MainLayout>
  );
};

export default ServiceDetail;
