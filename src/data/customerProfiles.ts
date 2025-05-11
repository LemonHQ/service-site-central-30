
import { Check, AlertTriangle, Info } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type ProfileType = 'early-stage' | 'growth' | 'mature';

export interface CustomerProfile {
  type: ProfileType;
  title: string;
  description: string;
  challenges: string[];
  serviceFit: string;
  icon: LucideIcon;
  colorClass: string;
  bgColorClass: string;
}

// Map of customer profiles indexed by service slug
export interface ServiceCustomerProfiles {
  [serviceSlug: string]: CustomerProfile[];
}

// Customer profiles data organized by service slug
export const customerProfiles: ServiceCustomerProfiles = {
  'unify-brand-experiences': [
    {
      type: 'early-stage',
      title: 'Growing Brand',
      description: 'Companies establishing their brand identity and expanding to new markets or channels',
      challenges: [
        'Inconsistent brand presentation across channels',
        'Manual processes for managing brand assets',
        'Limited brand governance structure',
        'Difficulty scaling brand operations'
      ],
      serviceFit: 'Our brand unification services help establish consistent foundations through centralized asset management, customizable templates, and governance frameworks that grow with you.',
      icon: Check,
      colorClass: 'text-green-600',
      bgColorClass: 'bg-[#F2FCE2]'
    },
    {
      type: 'growth',
      title: 'Multi-Market Brand',
      description: 'Organizations operating across multiple markets with increasing complexity in brand management',
      challenges: [
        'Balancing global consistency with local relevance',
        'Managing brand across distributed teams',
        'Integration challenges with existing systems',
        'Scaling brand operations efficiently'
      ],
      serviceFit: 'We enable your brand to function at scale with modular design systems, integration frameworks, and operational models that bridge central and local teams.',
      icon: AlertTriangle,
      colorClass: 'text-amber-600',
      bgColorClass: 'bg-[#FEF7CD]'
    },
    {
      type: 'mature',
      title: 'Enterprise Brand',
      description: 'Established organizations with complex portfolio of sub-brands and products across global markets',
      challenges: [
        'Managing master brand and sub-brand relationships',
        'Complex approval workflows across business units',
        'Legacy systems integration requirements',
        'Data-driven brand performance measurement'
      ],
      serviceFit: 'Our enterprise solutions provide sophisticated governance frameworks, API-enabled brand platforms, and analytics integrations to optimize your brand ecosystem.',
      icon: Info,
      colorClass: 'text-blue-600',
      bgColorClass: 'bg-[#D3E4FD]'
    }
  ],
  'digitalize-product-lines': [
    {
      type: 'early-stage',
      title: 'Digital Transformers',
      description: 'Companies taking their first steps in digitalizing existing product lines',
      challenges: [
        'Limited digital expertise in-house',
        'Uncertainty about digital product strategy',
        'Legacy systems and processes',
        'Resistance to change'
      ],
      serviceFit: 'Our product digitalization approach provides clear roadmaps, capability building, and change management to ensure successful transformation of your product lines.',
      icon: Check,
      colorClass: 'text-green-600',
      bgColorClass: 'bg-[#F2FCE2]'
    },
    {
      type: 'growth',
      title: 'Digital Accelerators',
      description: 'Organizations with some digital products looking to expand their digital portfolio',
      challenges: [
        'Scaling digital infrastructure',
        'Unifying customer experience across products',
        'Building product development velocity',
        'Measuring digital product performance'
      ],
      serviceFit: 'We help accelerate your digital product expansion with scalable platforms, shared components, and metrics frameworks that drive continuous improvement.',
      icon: AlertTriangle,
      colorClass: 'text-amber-600',
      bgColorClass: 'bg-[#FEF7CD]'
    },
    {
      type: 'mature',
      title: 'Digital Innovators',
      description: 'Established digital companies seeking to innovate and optimize their product portfolio',
      challenges: [
        'Finding new growth opportunities',
        'Optimizing product development processes',
        'Integrating emerging technologies',
        'Maintaining competitive advantage'
      ],
      serviceFit: 'Our innovation services help mature digital businesses evolve through emerging technology integration, optimization strategies, and next-generation product concepts.',
      icon: Info,
      colorClass: 'text-blue-600',
      bgColorClass: 'bg-[#D3E4FD]'
    }
  ]
};

/**
 * Gets customer profiles for a specific service
 * @param serviceSlug - The slug of the service
 * @returns An array of customer profiles or an empty array if none found
 */
export function getCustomerProfilesByServiceSlug(serviceSlug: string): CustomerProfile[] {
  return customerProfiles[serviceSlug] || [];
}
