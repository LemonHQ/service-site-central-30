
import { Palette, Monitor, Layers, Maximize, Lightbulb, LayoutGrid, Cog, BarChart, Code, Brush, BrainCircuit, Rocket, LucideIcon, Search, Network, Cloud, Database as DatabaseIcon, Shield } from "lucide-react";

export type MainService = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  icon: LucideIcon;
  relatedCaseStudies?: string[];
  relatedInsights?: string[];
  subServices: SubService[];
};

export type SubService = {
  id: string;
  parentId: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  benefits: string[];
  process?: { title: string; description: string; }[];
};

export const mainServices: MainService[] = [
  {
    id: "digitalize-product-lines",
    title: "Digitalize Product Lines",
    slug: "digitalize-product-lines",
    description:
      "We help enterprises digitalize their product lines by building innovative digital products and platforms that drive revenue, improve customer engagement, and create new business models.",
    shortDescription: "Build innovative digital products and platforms.",
    coverImage: "/lovable-uploads/4e0c995b-6840-483f-a492-5554d854dd8a.png",
    icon: Monitor,
    relatedCaseStudies: ['case-study-1', 'case-study-2'],
    relatedInsights: ['blog-post-1', 'blog-post-2'],
    subServices: [],
  },
  {
    id: "modernize-architecture",
    title: "Modernize Architecture",
    slug: "modernize-architecture",
    description:
      "We help enterprises modernize their architecture by migrating to the cloud, adopting microservices, and implementing DevOps practices.",
    shortDescription: "Migrate to the cloud and adopt microservices.",
    coverImage: "/lovable-uploads/69885951-cf05-4592-940f-353489488991.png",
    icon: Code,
    subServices: [],
  },
  {
    id: "innovate-with-ai",
    title: "Innovate with AI",
    slug: "innovate-with-ai",
    description:
      "We help enterprises innovate with AI by building machine learning models, natural language processing applications, and computer vision systems.",
    shortDescription: "Build machine learning models and NLP applications.",
    coverImage: "/lovable-uploads/9975994b-6701-4999-9195-c3789a401592.png",
    icon: BrainCircuit,
    subServices: [],
  },
  {
    id: "design-new-experiences",
    title: "Design New Experiences",
    slug: "design-new-experiences",
    description:
      "We help enterprises design new experiences by conducting user research, creating wireframes, and building prototypes.",
    shortDescription: "Conduct user research and create wireframes.",
    coverImage: "/lovable-uploads/9975994b-6701-4999-9195-c3789a401592.png",
    icon: Palette,
    subServices: [],
  },
  {
    id: "launch-new-ventures",
    title: "Launch New Ventures",
    slug: "launch-new-ventures",
    description:
      "We help enterprises launch new ventures by providing product strategy, product development, and product marketing services.",
    shortDescription: "Provide product strategy and product development.",
    coverImage: "/lovable-uploads/9975994b-6701-4999-9195-c3789a401592.png",
    icon: Rocket,
    subServices: [],
  },
];

export const subServices: SubService[] = [
  {
    id: "cloud-migration",
    parentId: "modernize-architecture",
    title: "Cloud Migration",
    slug: "cloud-migration",
    description:
      "Migrate your applications and data to the cloud with our expert cloud migration services.",
    shortDescription: "Expert cloud migration services.",
    icon: Cloud,
    benefits: [
      "Reduced IT costs",
      "Increased scalability",
      "Improved security",
    ],
    process: [
      { title: "Assessment", description: "We assess your current infrastructure and identify the best cloud migration strategy for your needs." },
      { title: "Planning", description: "We create a detailed cloud migration plan that outlines the steps involved in migrating your applications and data to the cloud." },
      { title: "Migration", description: "We migrate your applications and data to the cloud using our proven cloud migration methodology." },
      { title: "Optimization", description: "We optimize your cloud infrastructure to ensure that it is running efficiently and cost-effectively." },
    ],
  },
  {
    id: "microservices-architecture",
    parentId: "modernize-architecture",
    title: "Microservices Architecture",
    slug: "microservices-architecture",
    description:
      "Build a microservices architecture with our expert microservices architecture services.",
    shortDescription: "Expert microservices architecture services.",
    icon: Network,
    benefits: [
      "Increased agility",
      "Improved scalability",
      "Reduced complexity",
    ],
  },
  {
    id: "devops-implementation",
    parentId: "modernize-architecture",
    title: "DevOps Implementation",
    slug: "devops-implementation",
    description:
      "Implement DevOps practices with our expert DevOps implementation services.",
    shortDescription: "Expert DevOps implementation services.",
    icon: Cog,
    benefits: [
      "Faster time to market",
      "Improved quality",
      "Reduced costs",
    ],
  },
  {
    id: "machine-learning-models",
    parentId: "innovate-with-ai",
    title: "Machine Learning Models",
    slug: "machine-learning-models",
    description:
      "Build machine learning models with our expert machine learning model building services.",
    shortDescription: "Expert machine learning model building services.",
    icon: BarChart,
    benefits: [
      "Improved decision making",
      "Increased efficiency",
      "Reduced costs",
    ],
  },
  {
    id: "natural-language-processing",
    parentId: "innovate-with-ai",
    title: "Natural Language Processing",
    slug: "natural-language-processing",
    description:
      "Build natural language processing applications with our expert natural language processing services.",
    shortDescription: "Expert natural language processing services.",
    icon: Search,
    benefits: [
      "Improved customer service",
      "Increased efficiency",
      "Reduced costs",
    ],
  },
  {
    id: "computer-vision-systems",
    parentId: "innovate-with-ai",
    title: "Computer Vision Systems",
    slug: "computer-vision-systems",
    description:
      "Build computer vision systems with our expert computer vision system building services.",
    shortDescription: "Expert computer vision system building services.",
    icon: DatabaseIcon,
    benefits: [
      "Improved security",
      "Increased efficiency",
      "Reduced costs",
    ],
  },
];

// Export helper functions
export function getMainServiceBySlug(slug: string): MainService | undefined {
  return mainServices.find(service => service.slug === slug);
}

export function getSubServiceBySlug(slug: string): SubService | undefined {
  return subServices.find(service => service.slug === slug);
}

export function getSubServicesByParentId(parentId: string): SubService[] {
  return subServices.filter(service => service.parentId === parentId);
}

export function getRelatedServices(currentSlug: string, count: number = 3): (MainService | SubService)[] {
  // First try to find related services from the same parent
  const currentService = getSubServiceBySlug(currentSlug);
  
  if (currentService) {
    // Get other subservices with the same parent
    const siblingServices = subServices
      .filter(s => s.parentId === currentService.parentId && s.slug !== currentSlug)
      .slice(0, count);
    
    // If we don't have enough, add some main services
    if (siblingServices.length < count) {
      const mainServicesToAdd = mainServices
        .filter(s => s.id !== currentService.parentId)
        .slice(0, count - siblingServices.length);
      
      return [...siblingServices, ...mainServicesToAdd];
    }
    
    return siblingServices;
  }
  
  // If not a subservice, return random main services
  return mainServices.slice(0, count);
}
