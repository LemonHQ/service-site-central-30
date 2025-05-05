
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import CtaSection from '../components/ui/CtaSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import BlogCard from '@/components/blog/BlogCard';
import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';
import { 
  Lightbulb, PenTool, Palette, Rocket, TrendingUp, 
  LayersIcon, Settings, Cpu, Network, BarChart2, Users,
  CheckCircle, FileChartColumn, BookOpenText, Award
} from 'lucide-react';

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
  }
};

const serviceRelations = {
  'validating-product-ideas': {
    caseStudies: ['global-bank-digital-transformation', 'e-commerce-platform-redesign'],
    blogs: ['product-validation-methods', 'market-research-techniques'],
    whyChooseUs: [
      'Proven track record with 90% validation success rate',
      'Proprietary validation framework developed over 10+ years',
      'Team of specialized researchers and analysts',
      'Data-driven approach combining qualitative and quantitative methods'
    ],
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  'ideating-product-concepts': {
    caseStudies: ['healthcare-patient-portal', 'smart-city-infrastructure'],
    blogs: ['innovation-frameworks', 'design-thinking-process'],
    whyChooseUs: [
      'Cross-industry innovation expertise',
      'Award-winning creative ideation methodologies',
      'Collaborative workshop facilitation by certified experts',
      'Balanced approach to feasibility, viability, and desirability'
    ],
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  'designing-experiences': {
    caseStudies: ['e-commerce-platform-redesign', 'healthcare-patient-portal'],
    blogs: ['ux-best-practices', 'branding-strategies'],
    whyChooseUs: [
      'Holistic approach to brand and customer experiences',
      'Multi-disciplinary team of designers, researchers and strategists',
      'Focus on measurable business outcomes',
      'Expertise in accessibility and inclusive design'
    ],
    coverImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const serviceData = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;
  const relationData = serviceId ? serviceRelations[serviceId as keyof typeof serviceRelations] : null;
  
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

  const relatedCaseStudies = relationData?.caseStudies?.map(id => 
    caseStudies.find(study => study.id === id)
  ).filter(Boolean) || [];

  const relatedBlogs = relationData?.blogs?.map(id => 
    blogPosts?.find(post => post.id === id)
  ).filter(Boolean) || [];

  return (
    <MainLayout>
      <section className="relative">
        <AspectRatio ratio={3/1} className="w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/70 z-10"></div>
          <img 
            src={relationData?.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {Icon && <Icon size={56} className="mb-6 text-brand-200" />}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  {heroText}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-white text-brand-600 hover:bg-brand-100">
                      Request a Consultation
                    </Button>
                  </Link>
                  <Link to="#approach">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      Learn Our Approach
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <BookOpenText className="w-8 h-8 text-brand-500 mr-3" />
                <h2 className="text-3xl font-bold">Service Overview</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">{description}</p>
              
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
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={relationData?.coverImage || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-brand-500 mr-3" />
              <h2 className="text-3xl font-bold">Our Approach</h2>
            </div>
            <p className="text-lg text-gray-600">
              How we deliver exceptional results through our proven methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-brand-500 font-semibold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <FileChartColumn className="w-8 h-8 text-brand-500 mr-3" />
              <h2 className="text-3xl font-bold">Related Case Studies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCaseStudies.map((caseStudy) => (
                caseStudy && <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/case-studies">
                <Button variant="outline">View All Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {relatedBlogs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <BookOpenText className="w-8 h-8 text-brand-500 mr-3" />
              <h2 className="text-3xl font-bold">Related Insights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((post) => (
                post && <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/blog">
                <Button variant="outline">Read Our Blog</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {relationData?.whyChooseUs?.length > 0 && (
        <section className="py-20 bg-brand-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-brand-200 mr-3" />
                <h2 className="text-3xl font-bold">Why Choose Us</h2>
              </div>
              <p className="text-lg text-white/80">
                What makes our {title.toLowerCase()} service stand out from the rest
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relationData?.whyChooseUs?.map((reason, index) => (
                <div key={index} className="flex items-start bg-white/10 backdrop-blur p-6 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-brand-200 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Related Services" 
            subtitle="Enhance your product strategy with these complementary services"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

