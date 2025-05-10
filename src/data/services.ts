
import { 
  PaintBucket, Palette, Rocket, 
  PenTool, Lightbulb, Globe, 
  Layout, Code, Server, 
  TrendingUp, Settings, Layers,
  Cpu, Network, BarChart2, 
  Users, FileCode, Library,
  Package, ArrowUpRight
} from 'lucide-react';

// Types for our service structure
export interface SubService {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: any;
  benefits: string[];
  process?: {
    title: string;
    description: string;
  }[];
  slug: string;
  parentId: string;
}

export interface MainService {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: any;
  coverImage: string;
  benefits: string[];
  slug: string;
  subServices: string[]; // References to SubService IDs
  relatedCaseStudies?: string[]; // IDs of related case studies
  relatedInsights?: string[]; // IDs of related blog posts/insights
}

// All sub-services
export const subServices: SubService[] = [
  // Unify Brand Experiences sub-services
  {
    id: "designing-brand-experiences",
    title: "Designing Brand Experiences",
    shortDescription: "Create cohesive and memorable brand experiences across all touchpoints",
    description: "Our brand experience design service helps enterprises create cohesive, memorable interactions across all customer touchpoints. We combine strategic insight with creative execution to develop brand systems that resonate with your audience and strengthen your market position.",
    icon: Palette,
    benefits: [
      "Consistent brand experience across all channels",
      "Increased brand recognition and recall",
      "Enhanced emotional connection with customers",
      "Differentiation in crowded marketplaces"
    ],
    process: [
      {
        title: "Brand Audit",
        description: "Comprehensive review of existing brand touchpoints and experiences"
      },
      {
        title: "Experience Mapping",
        description: "Identify key moments that define your customer's journey with your brand"
      },
      {
        title: "Design System Development",
        description: "Create unified visual and interaction language across all platforms"
      },
      {
        title: "Implementation & Governance",
        description: "Roll out new brand experiences and establish management frameworks"
      }
    ],
    slug: "designing-brand-experiences",
    parentId: "unify-brand-experiences"
  },
  {
    id: "managing-multi-market-experiences",
    title: "Managing Multi-Market Experiences",
    shortDescription: "Maintain brand consistency while adapting to local market needs",
    description: "For global enterprises, we develop strategies and systems to maintain brand consistency while adapting to local market preferences and cultural nuances. Our approach enables flexible, efficient management of multi-market brand experiences.",
    icon: Globe,
    benefits: [
      "Consistent global brand presence with local relevance",
      "Streamlined governance across markets",
      "Efficient adaptation to regional preferences",
      "Balanced standardization and customization"
    ],
    process: [
      {
        title: "Market Analysis",
        description: "Research into specific regional requirements and cultural factors"
      },
      {
        title: "Localization Framework",
        description: "Develop guidelines for appropriate regional adaptations"
      },
      {
        title: "Governance Model",
        description: "Create systems for maintaining consistency across diverse markets"
      },
      {
        title: "Implementation Support",
        description: "Provide tools and training for regional teams"
      }
    ],
    slug: "managing-multi-market-experiences",
    parentId: "unify-brand-experiences"
  },
  {
    id: "launching-new-brands",
    title: "Launching New Brands",
    shortDescription: "Strategic launch of new brands or sub-brands into the market",
    description: "We guide enterprises through the complex process of launching new brands or sub-brands. From positioning strategy to market entry planning, we ensure your new brand makes a strong initial impression and builds momentum quickly.",
    icon: Rocket,
    benefits: [
      "Strategic brand positioning from day one",
      "Cohesive launch across all channels",
      "Clear differentiation in the marketplace",
      "Strong foundation for brand growth"
    ],
    process: [
      {
        title: "Brand Strategy",
        description: "Define positioning, values, and personality of the new brand"
      },
      {
        title: "Identity Development",
        description: "Create distinctive visual and verbal identity systems"
      },
      {
        title: "Launch Planning",
        description: "Develop comprehensive rollout strategy across all touchpoints"
      },
      {
        title: "Post-Launch Support",
        description: "Monitor performance and refine approach based on market response"
      }
    ],
    slug: "launching-new-brands",
    parentId: "unify-brand-experiences"
  },
  
  // Digitalize Product Lines sub-services
  {
    id: "ideating-product-concepts",
    title: "Ideating Product Concepts",
    shortDescription: "Generate innovative digital product ideas aligned with business objectives",
    description: "Our structured ideation process helps enterprises generate innovative digital product concepts that align with strategic objectives. We combine creative thinking techniques with market insights to identify high-potential opportunities.",
    icon: PenTool,
    benefits: [
      "Pipeline of innovative digital product concepts",
      "Ideas aligned with business strategy and capabilities",
      "Cross-functional collaboration and buy-in",
      "Clear prioritization framework"
    ],
    process: [
      {
        title: "Opportunity Exploration",
        description: "Research to identify unmet needs and market gaps"
      },
      {
        title: "Ideation Workshops",
        description: "Facilitated sessions to generate diverse product concepts"
      },
      {
        title: "Concept Development",
        description: "Refinement of promising ideas into detailed concepts"
      },
      {
        title: "Evaluation & Prioritization",
        description: "Assessment of concepts against strategic criteria"
      }
    ],
    slug: "ideating-product-concepts",
    parentId: "digitalize-product-lines"
  },
  {
    id: "validating-product-ideas",
    title: "Validating Product Ideas",
    shortDescription: "Test and refine product concepts before significant investment",
    description: "We help enterprises validate digital product ideas efficiently, reducing risk and improving outcomes. Our approach focuses on testing critical assumptions with real users before committing significant resources to development.",
    icon: Lightbulb,
    benefits: [
      "Reduced risk of product failure",
      "Data-driven refinement of concepts",
      "Early user feedback integration",
      "Efficient resource allocation"
    ],
    process: [
      {
        title: "Assumption Mapping",
        description: "Identify the most critical hypotheses to test"
      },
      {
        title: "Prototype Development",
        description: "Create minimal artifacts to test key product aspects"
      },
      {
        title: "User Testing",
        description: "Validate assumptions with target audience members"
      },
      {
        title: "Insight Integration",
        description: "Refine product concept based on validation findings"
      }
    ],
    slug: "validating-product-ideas",
    parentId: "digitalize-product-lines"
  },
  {
    id: "launching-multi-market-products",
    title: "Launching Multi-Market Products",
    shortDescription: "Strategic rollout of digital products across multiple markets",
    description: "We guide enterprises through the complexities of launching digital products across multiple markets. Our approach ensures consistent quality while adapting to regional requirements for maximum adoption and success.",
    icon: Globe,
    benefits: [
      "Coordinated global product launches",
      "Balanced standardization and localization",
      "Efficient resource utilization across markets",
      "Accelerated time-to-value in new regions"
    ],
    process: [
      {
        title: "Market Prioritization",
        description: "Identify and sequence target markets based on potential"
      },
      {
        title: "Localization Planning",
        description: "Determine necessary adaptations for each market"
      },
      {
        title: "Rollout Strategy",
        description: "Develop staged approach to multi-market launch"
      },
      {
        title: "Cross-Market Learning",
        description: "Implement systems to share insights between regions"
      }
    ],
    slug: "launching-multi-market-products",
    parentId: "digitalize-product-lines"
  },
  {
    id: "product-design-digital",
    title: "Product Design",
    shortDescription: "Create intuitive, engaging user experiences for digital products",
    description: "Our product design service transforms business requirements into intuitive, engaging digital experiences. We focus on user-centered design approaches that improve satisfaction, adoption, and business outcomes.",
    icon: Layout,
    benefits: [
      "Intuitive, user-friendly digital experiences",
      "Increased product adoption and engagement",
      "Design systems that enable consistent experiences",
      "Reduced development rework through early validation"
    ],
    process: [
      {
        title: "User Research",
        description: "Understand user needs, behaviors, and preferences"
      },
      {
        title: "Experience Design",
        description: "Create user flows, wireframes, and interactive prototypes"
      },
      {
        title: "Visual Design",
        description: "Develop the aesthetic aspects of the product experience"
      },
      {
        title: "Design System Creation",
        description: "Build scalable systems for consistent implementation"
      }
    ],
    slug: "product-design-digital",
    parentId: "digitalize-product-lines"
  },
  {
    id: "product-development-digital",
    title: "Product Development",
    shortDescription: "Build robust, scalable digital products using modern technologies",
    description: "We help enterprises develop high-quality digital products using modern development practices and technologies. Our engineering approach emphasizes quality, scalability, and sustainable development velocity.",
    icon: Code,
    benefits: [
      "Robust, scalable technical implementations",
      "Balanced speed and quality of delivery",
      "Progressive enhancement of product capabilities",
      "Sustainable architectural foundations"
    ],
    process: [
      {
        title: "Technical Planning",
        description: "Define architecture, technology choices, and implementation approach"
      },
      {
        title: "Agile Development",
        description: "Iterative build process with continuous integration"
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing to ensure product quality"
      },
      {
        title: "Deployment & Support",
        description: "Launch preparation and initial operational support"
      }
    ],
    slug: "product-development-digital",
    parentId: "digitalize-product-lines"
  },
  
  // Expand Product Offerings sub-services
  {
    id: "product-design-expand",
    title: "Product Design",
    shortDescription: "Design new digital products to expand your portfolio",
    description: "Our product design service helps enterprises conceptualize and design new digital offerings that complement and expand existing portfolios. We focus on creating cohesive experiences across product lines while meeting unique market needs.",
    icon: Layout,
    benefits: [
      "Cohesive experience across expanded portfolio",
      "Design systems that scale across products",
      "Consistent brand expression in new offerings",
      "User-centered approach to portfolio expansion"
    ],
    process: [
      {
        title: "Portfolio Analysis",
        description: "Assess current offerings and identify expansion opportunities"
      },
      {
        title: "Experience Strategy",
        description: "Define how new products relate to existing offerings"
      },
      {
        title: "Design Execution",
        description: "Create user experiences for new product offerings"
      },
      {
        title: "Implementation Support",
        description: "Guide development teams in realizing the design vision"
      }
    ],
    slug: "product-design-expand",
    parentId: "expand-product-offerings"
  },
  {
    id: "product-development-expand",
    title: "Product Development",
    shortDescription: "Develop new product offerings efficiently using proven frameworks",
    description: "We help enterprises efficiently develop new digital product offerings that expand their portfolio. Our development approach leverages modern frameworks, reusable components, and established patterns to accelerate time-to-market.",
    icon: Code,
    benefits: [
      "Accelerated product development timelines",
      "Leveraging of existing technical assets",
      "Consistent quality across product portfolio",
      "Scalable technical foundations for future growth"
    ],
    process: [
      {
        title: "Technology Strategy",
        description: "Define technical approach for efficient portfolio expansion"
      },
      {
        title: "Platform Enhancement",
        description: "Extend existing systems to support new offerings"
      },
      {
        title: "Iterative Development",
        description: "Build new products through progressive enhancement"
      },
      {
        title: "Integration & Testing",
        description: "Ensure seamless operation within broader ecosystem"
      }
    ],
    slug: "product-development-expand",
    parentId: "expand-product-offerings"
  },
  
  // Scale Digital Experiences sub-services
  {
    id: "product-design-scale",
    title: "Product Design",
    shortDescription: "Redesign products for improved scalability and performance",
    description: "Our product design service helps enterprises redesign digital experiences to handle increased scale while maintaining or improving user satisfaction. We focus on optimizing experiences for performance, consistency, and global reach.",
    icon: Layout,
    benefits: [
      "User experiences that scale efficiently",
      "Performance optimization across touchpoints",
      "Consistent experience for growing user bases",
      "Design systems that enable rapid scaling"
    ],
    process: [
      {
        title: "Performance Analysis",
        description: "Identify experience bottlenecks and scaling challenges"
      },
      {
        title: "Optimization Planning",
        description: "Develop strategies to improve experience scalability"
      },
      {
        title: "Design Refinement",
        description: "Redesign key interactions for better performance"
      },
      {
        title: "System Evolution",
        description: "Enhance design systems to support scale"
      }
    ],
    slug: "product-design-scale",
    parentId: "scale-digital-experiences"
  },
  {
    id: "product-development-scale",
    title: "Product Development",
    shortDescription: "Enhance and optimize products for growing user bases",
    description: "We help enterprises evolve their digital product architecture and implementation to support growing user bases and transaction volumes. Our approach focuses on optimizing performance, enhancing reliability, and enabling efficient scaling.",
    icon: Code,
    benefits: [
      "Improved technical performance at scale",
      "Enhanced reliability under increased load",
      "Cost-effective scaling of digital infrastructure",
      "Reduced technical debt for long-term growth"
    ],
    process: [
      {
        title: "Scalability Assessment",
        description: "Evaluate current architecture and identify constraints"
      },
      {
        title: "Architecture Evolution",
        description: "Design improved technical foundations for scale"
      },
      {
        title: "Performance Optimization",
        description: "Enhance product implementation for efficiency"
      },
      {
        title: "Scaling Infrastructure",
        description: "Implement cloud and deployment improvements"
      }
    ],
    slug: "product-development-scale",
    parentId: "scale-digital-experiences"
  },
  
  // Pilot Emerging Tech sub-services
  {
    id: "product-labs",
    title: "Product Labs",
    shortDescription: "Explore and test emerging technologies in controlled environments",
    description: "Our product labs service provides enterprises with structured environments to explore emerging technologies before full-scale adoption. We design and run focused experiments to evaluate potential, identify use cases, and build internal capabilities.",
    icon: Cpu,
    benefits: [
      "De-risked technology adoption",
      "Accelerated organizational learning",
      "Identification of high-value use cases",
      "Early competitive advantages"
    ],
    process: [
      {
        title: "Technology Selection",
        description: "Identify promising technologies aligned with strategy"
      },
      {
        title: "Experiment Design",
        description: "Create focused tests to evaluate potential value"
      },
      {
        title: "Prototype Development",
        description: "Build minimal implementations to enable testing"
      },
      {
        title: "Insight Generation",
        description: "Analyze results and develop adoption recommendations"
      }
    ],
    slug: "product-labs",
    parentId: "pilot-emerging-tech"
  },
  {
    id: "ideating-product-concepts-tech",
    title: "Ideating Product Concepts",
    shortDescription: "Generate innovative product ideas leveraging emerging technologies",
    description: "We help enterprises identify and develop product concepts that leverage emerging technologies for competitive advantage. Our approach combines technical understanding with market insights to discover high-potential opportunities.",
    icon: PenTool,
    benefits: [
      "Forward-looking product concepts",
      "Early mover advantages in emerging spaces",
      "Differentiated offerings through technology",
      "New market opportunity identification"
    ],
    process: [
      {
        title: "Technology Impact Analysis",
        description: "Assess how emerging tech could transform your industry"
      },
      {
        title: "Opportunity Mapping",
        description: "Identify high-potential applications of new technologies"
      },
      {
        title: "Concept Generation",
        description: "Develop product ideas leveraging technology advantages"
      },
      {
        title: "Strategic Alignment",
        description: "Prioritize concepts based on business objectives"
      }
    ],
    slug: "ideating-product-concepts-tech",
    parentId: "pilot-emerging-tech"
  },
  {
    id: "validating-product-ideas-tech",
    title: "Validating Product Ideas",
    shortDescription: "Test and refine technology-enabled product concepts",
    description: "Our validation service helps enterprises test and refine product concepts that leverage emerging technologies. We focus on validating both technical feasibility and market potential before significant investment in development.",
    icon: Lightbulb,
    benefits: [
      "Reduced technical and market risk",
      "Validation of key assumptions",
      "Early user feedback on novel concepts",
      "Refined product-market fit"
    ],
    process: [
      {
        title: "Technical Feasibility Assessment",
        description: "Evaluate practical viability of technology application"
      },
      {
        title: "Rapid Prototyping",
        description: "Create limited implementations to test key hypotheses"
      },
      {
        title: "User Validation",
        description: "Test concepts with target users to gauge reaction"
      },
      {
        title: "Concept Refinement",
        description: "Iterate based on technical and user insights"
      }
    ],
    slug: "validating-product-ideas-tech",
    parentId: "pilot-emerging-tech"
  },
  
  // Standardize Digital Portfolio sub-services
  {
    id: "application-modernization",
    title: "Application Modernization",
    shortDescription: "Update legacy systems for improved performance and maintainability",
    description: "Our application modernization service helps enterprises transform legacy systems into modern, maintainable digital assets. We focus on incremental approaches that reduce risk while progressively enhancing capabilities and performance.",
    icon: Server,
    benefits: [
      "Reduced maintenance costs",
      "Improved system performance and reliability",
      "Enhanced security and compliance",
      "Better integration capabilities"
    ],
    process: [
      {
        title: "Portfolio Assessment",
        description: "Evaluate current systems for modernization priorities"
      },
      {
        title: "Modernization Strategy",
        description: "Develop approach for transforming priority applications"
      },
      {
        title: "Incremental Implementation",
        description: "Execute modernization in manageable phases"
      },
      {
        title: "Knowledge Transfer",
        description: "Enable teams to maintain modernized systems"
      }
    ],
    slug: "application-modernization",
    parentId: "standardize-digital-portfolio"
  },
  {
    id: "product-design-standardize",
    title: "Product Design",
    shortDescription: "Create unified design systems across digital product portfolio",
    description: "We help enterprises develop and implement consistent design systems across their digital product portfolio. Our approach focuses on improving user experience, accelerating development, and strengthening brand consistency.",
    icon: Layout,
    benefits: [
      "Consistent user experience across products",
      "Accelerated design and development cycles",
      "Reduced redundancy in design assets",
      "Improved cross-product usability"
    ],
    process: [
      {
        title: "Design Audit",
        description: "Assess current state of design across portfolio"
      },
      {
        title: "Design System Development",
        description: "Create unified components, patterns and guidelines"
      },
      {
        title: "Implementation Planning",
        description: "Develop strategy for system adoption across products"
      },
      {
        title: "Governance Establishment",
        description: "Create frameworks for maintaining system integrity"
      }
    ],
    slug: "product-design-standardize",
    parentId: "standardize-digital-portfolio"
  },
  {
    id: "product-development-standardize",
    title: "Product Development",
    shortDescription: "Build technical foundations for a unified product portfolio",
    description: "Our product development service helps enterprises create technical standards, shared components, and architectural patterns that enable a cohesive, manageable digital portfolio. We focus on balancing standardization with flexibility for innovation.",
    icon: Code,
    benefits: [
      "Reduced technical complexity and redundancy",
      "Accelerated development of new capabilities",
      "Improved cross-product integration",
      "More efficient resource utilization"
    ],
    process: [
      {
        title: "Technical Portfolio Assessment",
        description: "Analyze current state of development across products"
      },
      {
        title: "Standards Development",
        description: "Create technical guidelines and shared components"
      },
      {
        title: "Implementation Support",
        description: "Help teams adopt standards in their products"
      },
      {
        title: "Capability Evolution",
        description: "Continuously enhance shared technical assets"
      }
    ],
    slug: "product-development-standardize",
    parentId: "standardize-digital-portfolio"
  }
];

// Main service areas
export const mainServices: MainService[] = [
  {
    id: "unify-brand-experiences",
    title: "Unify Brand Experiences",
    shortDescription: "Create cohesive brand experiences across all customer touchpoints",
    description: "We help enterprises build and maintain unified brand experiences across all customer touchpoints. Our services ensure consistency, quality, and emotional resonance throughout the customer journey, strengthening brand equity and customer loyalty.",
    icon: Palette,
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    benefits: [
      "Consistent customer experiences across all touchpoints",
      "Stronger brand perception and recall",
      "More efficient brand management",
      "Enhanced customer loyalty and advocacy"
    ],
    slug: "unify-brand-experiences",
    subServices: ["designing-brand-experiences", "managing-multi-market-experiences", "launching-new-brands"],
    relatedCaseStudies: ["case-study-1", "case-study-3"],
    relatedInsights: ["blog-post-2", "blog-post-5"]
  },
  {
    id: "digitalize-product-lines",
    title: "Digitalize Product Lines",
    shortDescription: "Transform physical products and services into digital offerings",
    description: "We guide enterprises through the process of creating digital versions of traditional offerings. From ideation to launch, our approach helps businesses expand into digital markets while maintaining brand integrity and quality standards.",
    icon: PenTool,
    coverImage: "https://images.unsplash.com/photo-1605609476031-41a5755d00c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    benefits: [
      "New revenue streams through digital channels",
      "Extended market reach beyond physical limitations",
      "Enhanced customer data and insights",
      "Improved adaptability to changing customer preferences"
    ],
    slug: "digitalize-product-lines",
    subServices: ["ideating-product-concepts", "validating-product-ideas", "launching-multi-market-products", "product-design-digital", "product-development-digital"],
    relatedCaseStudies: ["case-study-2", "case-study-4"],
    relatedInsights: ["blog-post-1", "blog-post-3"]
  },
  {
    id: "expand-product-offerings",
    title: "Expand Product Offerings",
    shortDescription: "Develop new digital products to complement existing portfolios",
    description: "We help enterprises conceive, design, and build new digital products that strategically expand their existing portfolios. Our approach ensures new offerings align with business objectives while leveraging established brand strengths.",
    icon: Layers,
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    benefits: [
      "Strategic diversification of product portfolio",
      "New customer acquisition through expanded offerings",
      "Greater market share and competitive position",
      "Enhanced cross-selling opportunities"
    ],
    slug: "expand-product-offerings",
    subServices: ["product-design-expand", "product-development-expand"],
    relatedCaseStudies: ["case-study-5", "case-study-1"],
    relatedInsights: ["blog-post-4", "blog-post-6"]
  },
  {
    id: "scale-digital-experiences",
    title: "Scale Digital Experiences",
    shortDescription: "Optimize digital products for growth and increased usage",
    description: "We help enterprises scale their digital products to accommodate growth in users, transactions, and geographic reach. Our approach ensures performance, reliability, and quality are maintained as digital experiences expand in scope and impact.",
    icon: TrendingUp,
    coverImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    benefits: [
      "Increased capacity to handle user growth",
      "Improved performance under heavy load",
      "Enhanced ability to enter new markets",
      "More efficient resource utilization at scale"
    ],
    slug: "scale-digital-experiences",
    subServices: ["product-design-scale", "product-development-scale"],
    relatedCaseStudies: ["case-study-3", "case-study-6"],
    relatedInsights: ["blog-post-2", "blog-post-5"]
  },
  {
    id: "pilot-emerging-tech",
    title: "Pilot Emerging Tech",
    shortDescription: "Experiment with and validate emerging technologies",
    description: "We help enterprises explore and validate emerging technologies through structured pilots and experiments. Our approach reduces risk while accelerating learning and identifying high-value applications for innovative technologies.",
    icon: Cpu,
    coverImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    benefits: [
      "De-risked adoption of emerging technologies",
      "Early competitive advantages through innovation",
      "Development of future-focused capabilities",
      "Identification of high-value use cases"
    ],
    slug: "pilot-emerging-tech",
    subServices: ["product-labs", "ideating-product-concepts-tech", "validating-product-ideas-tech"],
    relatedCaseStudies: ["case-study-4", "case-study-2"],
    relatedInsights: ["blog-post-3", "blog-post-1"]
  },
  {
    id: "standardize-digital-portfolio",
    title: "Standardize Digital Portfolio",
    shortDescription: "Create consistency and efficiency across digital assets",
    description: "We help enterprises develop and implement standards across their digital product portfolio. Our approach improves consistency, reduces costs, and enhances quality through unified design systems, technical patterns, and governance frameworks.",
    icon: Settings,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    benefits: [
      "Reduced complexity and redundancy",
      "Improved development efficiency",
      "Enhanced product quality and consistency",
      "More effective resource allocation"
    ],
    slug: "standardize-digital-portfolio",
    subServices: ["application-modernization", "product-design-standardize", "product-development-standardize"],
    relatedCaseStudies: ["case-study-6", "case-study-5"],
    relatedInsights: ["blog-post-6", "blog-post-4"]
  }
];

// Helper functions to work with services data
export function getMainServiceBySlug(slug: string): MainService | undefined {
  return mainServices.find(service => service.slug === slug);
}

export function getSubServiceBySlug(slug: string): SubService | undefined {
  return subServices.find(service => service.slug === slug);
}

export function getSubServicesByParentId(parentId: string): SubService[] {
  return subServices.filter(service => service.parentId === parentId);
}

export function getParentService(subServiceId: string): MainService | undefined {
  const subService = subServices.find(s => s.id === subServiceId);
  if (subService) {
    return mainServices.find(s => s.id === subService.parentId);
  }
  return undefined;
}

export function getRelatedServices(serviceId: string, count: number = 3): (MainService | SubService)[] {
  // For now, we're just returning random services that aren't the current one
  const service = getMainServiceBySlug(serviceId) || getSubServiceBySlug(serviceId);
  
  if (service) {
    const isMain = mainServices.some(s => s.id === service.id);
    
    if (isMain) {
      // If it's a main service, return other main services
      return mainServices
        .filter(s => s.id !== service.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    } else {
      // If it's a sub-service, return related sub-services from same parent
      const parentId = (service as SubService).parentId;
      const related = subServices
        .filter(s => s.parentId === parentId && s.id !== service.id);
      
      if (related.length < count) {
        // If not enough related services, add some main services
        const additionalServices = mainServices
          .filter(s => s.id !== parentId)
          .sort(() => 0.5 - Math.random())
          .slice(0, count - related.length);
        
        return [...related, ...additionalServices];
      }
      
      return related.sort(() => 0.5 - Math.random()).slice(0, count);
    }
  }
  
  // Fallback to random services
  return [...mainServices, ...subServices]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}
