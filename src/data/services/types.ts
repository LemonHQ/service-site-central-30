
import { LucideIcon } from "lucide-react";

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
