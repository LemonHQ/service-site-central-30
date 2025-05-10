import { 
  Users, Library, LayersIcon, TrendingUp, Cpu, BarChart2,
  Monitor, Smartphone, Network, Workflow, FileCode, LineChart,
  FileSearch, BookOpenText, Rocket, PenTool, Palette, Lightbulb
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  heroText: string;
  benefits: string[];
  process: ServiceProcess[];
}

export interface ServiceRelation {
  caseStudies: string[];
  blogs: string[];
  whyChooseUs: string[];
  coverImage: string;
}

export const servicesData: Record<string, ServiceData> = {
  'unify-brand-experiences': {
    id: 'unify-brand-experiences',
    title: 'Unify Brand Experiences',
    description: 'Create consistent, compelling brand experiences across all customer touchpoints and platforms.',
    icon: Users,
    heroText: 'Transform your brand presence with a cohesive experience strategy that resonates with customers across all touchpoints.',
    benefits: [
      'Create a unified brand identity across all digital products',
      'Increase brand recognition and customer trust',
      'Improve customer experience with consistent interfaces',
      'Drive higher engagement with cohesive messaging'
    ],
    process: [
      {
        title: 'Brand Experience Audit',
        description: 'Comprehensive assessment of current brand touchpoints, inconsistencies, and opportunities.'
      },
      {
        title: 'Experience Strategy',
        description: 'Development of a unified cross-channel experience blueprint aligned with brand values.'
      },
      {
        title: 'Design System Creation',
        description: 'Building scalable design systems that ensure consistency while allowing for channel-specific optimization.'
      },
      {
        title: 'Content Strategy',
        description: 'Creating voice, tone, and messaging frameworks that remain consistent yet adaptable.'
      },
      {
        title: 'Implementation & Governance',
        description: 'Execution across channels with clear guidelines and governance procedures.'
      }
    ]
  },
  'digitalize-product-lines': {
    id: 'digitalize-product-lines',
    title: 'Digitalize Product Lines',
    description: 'Transform traditional product offerings into digital experiences that drive customer engagement and open new revenue streams.',
    icon: Monitor,
    heroText: 'Convert physical products and services into innovative digital experiences that expand reach and create new value.',
    benefits: [
      'Unlock new revenue streams through digital product offerings',
      'Reach customers beyond geographic limitations',
      'Gather valuable user data to inform product improvements',
      'Reduce operational costs associated with physical distribution'
    ],
    process: [
      {
        title: 'Digital Transformation Assessment',
        description: 'Evaluating current product lines and identifying digitalization opportunities.'
      },
      {
        title: 'Digital Product Strategy',
        description: 'Developing strategic roadmaps for converting physical to digital offerings.'
      },
      {
        title: 'Experience Design',
        description: 'Creating intuitive, engaging digital experiences that deliver value.'
      },
      {
        title: 'Technology Integration',
        description: 'Building robust technical foundations for digital product delivery.'
      },
      {
        title: 'Measurement Framework',
        description: 'Establishing KPIs and analytics to track digital product performance.'
      }
    ]
  },
  'expand-product-offerings': {
    id: 'expand-product-offerings',
    title: 'Expand Product Offerings',
    description: 'Diversify and grow your product portfolio through strategic planning, market analysis, and opportunity mapping.',
    icon: LayersIcon,
    heroText: 'Strategically grow your product portfolio to reach new markets and customer segments while leveraging your core capabilities.',
    benefits: [
      'Diversify revenue streams through complementary offerings',
      'Enter new markets with strategic product expansions',
      'Increase customer lifetime value with expanded offerings',
      'Build resilience through a diversified product portfolio'
    ],
    process: [
      {
        title: 'Market Opportunity Analysis',
        description: 'Identifying gaps and opportunities in the market for new product offerings.'
      },
      {
        title: 'Product Concept Development',
        description: 'Creating innovative concepts for new product offerings that align with business goals.'
      },
      {
        title: 'Business Case Creation',
        description: 'Developing comprehensive business cases to validate expansion opportunities.'
      },
      {
        title: 'Product Roadmapping',
        description: 'Strategic planning for product development and market introduction.'
      },
      {
        title: 'Portfolio Integration',
        description: 'Ensuring new products integrate seamlessly with existing offerings.'
      }
    ]
  },
  'scale-digital-experiences': {
    id: 'scale-digital-experiences',
    title: 'Scale Digital Experiences',
    description: 'Maximize growth potential with scalable architectures, optimization frameworks, and performance tuning.',
    icon: TrendingUp,
    heroText: 'Scale your digital products and platforms to handle growing user demands while maintaining performance and reliability.',
    benefits: [
      'Handle increased user loads without performance degradation',
      'Reduce technical debt for more efficient scaling',
      'Optimize infrastructure costs as you grow',
      'Maintain consistent user experiences at scale'
    ],
    process: [
      {
        title: 'Scalability Assessment',
        description: 'Evaluating current architecture and identifying scaling bottlenecks.'
      },
      {
        title: 'Architecture Optimization',
        description: 'Redesigning system components for improved scalability and performance.'
      },
      {
        title: 'Infrastructure Planning',
        description: 'Developing cloud and infrastructure strategies that support growth.'
      },
      {
        title: 'Performance Optimization',
        description: 'Enhancing application performance through code and database optimization.'
      },
      {
        title: 'Monitoring & Continuous Improvement',
        description: 'Implementing robust monitoring and ongoing optimization processes.'
      }
    ]
  },
  'pilot-emerging-tech': {
    id: 'pilot-emerging-tech',
    title: 'Pilot Emerging Tech',
    description: 'Evaluate and integrate emerging technologies with low-risk pilot programs and proofs of concept.',
    icon: Cpu,
    heroText: 'Navigate the future of technology by testing and implementing innovative solutions that deliver competitive advantage.',
    benefits: [
      'Gain early adopter advantages in your industry',
      'Mitigate risks through controlled pilot programs',
      'Identify high-impact applications for emerging technologies',
      'Build internal capabilities in next-generation tech'
    ],
    process: [
      {
        title: 'Technology Landscape Analysis',
        description: 'Surveying emerging technologies and their potential business applications.'
      },
      {
        title: 'Opportunity Prioritization',
        description: 'Selecting the most promising technologies for your business context.'
      },
      {
        title: 'Pilot Program Design',
        description: 'Creating structured pilots with clear success criteria and learning objectives.'
      },
      {
        title: 'Implementation & Testing',
        description: 'Building and deploying minimum viable products to test technologies.'
      },
      {
        title: 'Scaling Strategy',
        description: 'Developing plans to scale successful pilots across the organization.'
      }
    ]
  },
  'standardize-digital-portfolio': {
    id: 'standardize-digital-portfolio',
    title: 'Standardize Digital Portfolio',
    description: 'Create efficiency and consistency across your organization with technology standardization and integration services.',
    icon: Library,
    heroText: 'Streamline your digital ecosystem with standardized platforms, tools, and processes that enhance collaboration and reduce costs.',
    benefits: [
      'Reduce maintenance costs through standardized technologies',
      'Improve cross-team collaboration with shared platforms',
      'Accelerate development with reusable components',
      'Simplify governance and compliance across digital assets'
    ],
    process: [
      {
        title: 'Portfolio Assessment',
        description: 'Mapping current digital assets, technologies, and their business value.'
      },
      {
        title: 'Standards Development',
        description: 'Creating technology standards and governance frameworks.'
      },
      {
        title: 'Platform Consolidation',
        description: 'Streamlining technology platforms and eliminating redundancies.'
      },
      {
        title: 'Integration Strategy',
        description: 'Developing plans for connecting systems and sharing data across platforms.'
      },
      {
        title: 'Transformation Roadmap',
        description: 'Building a phased approach to standardization across the organization.'
      }
    ]
  },
  
  // Keeping the existing services data
  'validating-product-ideas': {
    id: 'validating-product-ideas',
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
    id: 'ideating-product-concepts',
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
    id: 'designing-experiences',
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
  'launching-products': {
    id: 'launching-products',
    title: 'Launching New Products',
    description: 'Accelerate time-to-market and maximize impact with expert launch strategies, go-to-market planning, and execution.',
    icon: Rocket,
    heroText: 'Successfully bring new products to market with comprehensive launch strategies that drive adoption and growth.',
    benefits: [
      'Reduce time-to-market with proven launch frameworks',
      'Generate early market traction with targeted launch activities',
      'Minimize launch risks through systematic planning',
      'Optimize resources with prioritized go-to-market initiatives'
    ],
    process: [
      {
        title: 'Launch Strategy Development',
        description: 'Creating comprehensive strategies for successful market introduction.'
      },
      {
        title: 'Go-to-Market Planning',
        description: 'Developing detailed plans for marketing, sales, and distribution.'
      },
      {
        title: 'Launch Readiness',
        description: 'Ensuring all operational aspects are prepared for product launch.'
      },
      {
        title: 'Launch Execution',
        description: 'Coordinating and executing launch activities across all channels.'
      },
      {
        title: 'Post-Launch Analysis',
        description: 'Evaluating launch performance and making data-driven adjustments.'
      }
    ]
  },
  'scaling-products': {
    id: 'scaling-products',
    title: 'Scaling Products',
    description: 'Maximize growth potential with scalable architectures, optimization frameworks, and performance tuning.',
    icon: TrendingUp,
    heroText: 'Take successful products to the next level with strategies and solutions designed for sustainable growth.',
    benefits: [
      'Scale user acquisition while maintaining product quality',
      'Optimize operational processes for increased efficiency',
      'Develop infrastructure that grows with your business',
      'Implement data-driven improvement cycles'
    ],
    process: [
      {
        title: 'Growth Assessment',
        description: 'Identifying key growth levers and scaling bottlenecks.'
      },
      {
        title: 'Scalability Engineering',
        description: 'Enhancing product architecture and infrastructure for growth.'
      },
      {
        title: 'Growth Marketing',
        description: 'Implementing systematic approaches to user acquisition and retention.'
      },
      {
        title: 'Operational Optimization',
        description: 'Streamlining processes to support increased demand.'
      },
      {
        title: 'Continuous Improvement',
        description: 'Establishing frameworks for ongoing optimization and enhancement.'
      }
    ]
  }
};

export const serviceRelations: Record<string, ServiceRelation> = {
  'unify-brand-experiences': {
    caseStudies: ['e-commerce-platform-redesign', 'healthcare-patient-portal'],
    blogs: ['branding-strategies', 'ux-best-practices'],
    whyChooseUs: [
      'Expertise in cross-channel brand consistency',
      'Design system specialists who bridge brand and technology',
      'Experience working with global brands across industries',
      'Proprietary methodologies for brand alignment and governance'
    ],
    coverImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
  },
  'digitalize-product-lines': {
    caseStudies: ['fintech-mobile-banking', 'smart-city-infrastructure'],
    blogs: ['digital-transformation-guide', 'product-digitalization'],
    whyChooseUs: [
      'Deep expertise in digital product transformation',
      'Technical capability spanning web, mobile, and emerging platforms',
      'Proven methodologies for physical-to-digital conversion',
      'Experience with regulatory compliance in digital transitions'
    ],
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  'expand-product-offerings': {
    caseStudies: ['global-bank-digital-transformation', 'e-commerce-platform-redesign'],
    blogs: ['product-portfolio-strategy', 'market-expansion-techniques'],
    whyChooseUs: [
      'Cross-industry product innovation experience',
      'Market research capabilities to identify viable opportunities',
      'Balanced approach to innovation and commercial viability',
      'Expertise in product integration and ecosystem development'
    ],
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  'scale-digital-experiences': {
    caseStudies: ['fintech-mobile-banking', 'e-commerce-platform-redesign'],
    blogs: ['scaling-digital-platforms', 'performance-optimization'],
    whyChooseUs: [
      'Technical expertise in high-performance, scalable architectures',
      'Experience scaling platforms to millions of users',
      'Cloud infrastructure optimization specialists',
      'Data-driven approach to progressive scaling'
    ],
    coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  'pilot-emerging-tech': {
    caseStudies: ['smart-city-infrastructure', 'healthcare-patient-portal'],
    blogs: ['emerging-technology-trends', 'innovation-frameworks'],
    whyChooseUs: [
      'Deep expertise in emerging technologies including AI, IoT, and blockchain',
      'Proven pilot methodology that balances innovation and risk',
      'Cross-industry technology application experience',
      'Strong partnerships with technology innovators and research institutions'
    ],
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  'standardize-digital-portfolio': {
    caseStudies: ['global-bank-digital-transformation', 'smart-city-infrastructure'],
    blogs: ['technology-standardization', 'digital-governance'],
    whyChooseUs: [
      'Experience rationalizing complex digital ecosystems',
      'Technical expertise across multiple platforms and technologies',
      'Proven methodologies for technology standardization',
      'Balanced approach to standardization and innovation'
    ],
    coverImage: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334'
  },
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
  },
  'launching-products': {
    caseStudies: ['fintech-mobile-banking', 'e-commerce-platform-redesign'],
    blogs: ['go-to-market-strategy', 'product-launch-checklist'],
    whyChooseUs: [
      'Experience launching products across diverse industries',
      'Comprehensive approach covering marketing, sales, and operations',
      'Data-driven launch strategies based on market insights',
      'Agile methodologies for rapid iteration and adaptation'
    ],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  'scaling-products': {
    caseStudies: ['global-bank-digital-transformation', 'fintech-mobile-banking'],
    blogs: ['scaling-strategies', 'growth-hacking-techniques'],
    whyChooseUs: [
      'Deep experience scaling digital products from startup to enterprise',
      'Technical expertise in scalable architectures and infrastructure',
      'Data-driven optimization methodologies',
      'Cross-functional approach covering technology, operations, and marketing'
    ],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }
};
