
import { Palette, Monitor, Layers, Maximize, Lightbulb, LayoutGrid, Code, BrainCircuit, Rocket } from "lucide-react";
import { MainService } from "./types";

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
