
import { Cloud, Network, Cog, BarChart, Search, Shield, Database } from "lucide-react";
import { SubService } from "./types";

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
    icon: Database,
    benefits: [
      "Improved security",
      "Increased efficiency",
      "Reduced costs",
    ],
  },
];
