
export const icpTypes = [
  {
    id: "digital-transformation-leaders",
    title: "Digital Transformation Leaders",
    subtitle: "Internal executives and senior leaders",
    description: "You're spearheading enterprise-wide digital transformation initiatives within your organization",
    icon: "users",
    color: "bg-blue-100",
    iconColor: "text-blue-500"
  },
  {
    id: "strategic-management-consultancies",
    title: "Strategic Management Consultancies",
    subtitle: "External consulting firms",
    description: "You're delivering digital transformation services to enterprise clients (McKinsey, BCG, Bain, etc.)",
    icon: "building",
    color: "bg-purple-100",
    iconColor: "text-purple-500"
  },
  {
    id: "digital-roadmap-owners",
    title: "Digital Roadmap Owners",
    subtitle: "Internal strategists and product leaders",
    description: "You're responsible for defining and executing digital transformation roadmaps within your organization",
    icon: "trending-up",
    color: "bg-green-100",
    iconColor: "text-green-500"
  },
  {
    id: "independent-consultants",
    title: "Independent Consultants",
    subtitle: "Individual consultants and boutique firms",
    description: "You're specializing in digital transformation and innovation advisory services",
    icon: "lightbulb",
    color: "bg-amber-100",
    iconColor: "text-amber-500"
  }
];

// Common sectors for all ICPs
export const sectors = [
  { id: "retail", label: "Retail" },
  { id: "healthcare", label: "Healthcare" },
  { id: "financial", label: "Financial Services" },
  { id: "technology", label: "Technology" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "education", label: "Education" },
  { id: "government", label: "Government" },
  { id: "nonprofit", label: "Non-profit" },
  { id: "other", label: "Other" }
];

// ICP-specific business context questions
export const getBusinessContextByICP = (icpType: string) => {
  const isInternal = icpType === 'digital-transformation-leaders' || icpType === 'digital-roadmap-owners';
  
  if (isInternal) {
    return {
      sectorLabel: "Which sectors does your organization operate in?",
      marketsLabel: "How many markets does your organization operate in?",
      brandsLabel: "How many brands does your organization manage?",
      productsLabel: "How many products/services does your organization offer?"
    };
  } else {
    return {
      sectorLabel: "Which sectors do your clients primarily operate in?",
      marketsLabel: "How many client markets do you typically serve?",
      brandsLabel: "How many client brands do you typically work with simultaneously?",
      productsLabel: "How many transformation services do you offer?"
    };
  }
};

// Enhanced ICP-specific challenges
export const digitalTransformationLeadersChallenges = [
  { id: "c-suite-alignment", label: "Difficulty getting C-suite alignment on transformation priorities" },
  { id: "enterprise-legacy", label: "Complex legacy systems hindering enterprise-wide innovation" },
  { id: "budget-justification", label: "Challenges justifying large-scale transformation budgets" },
  { id: "organizational-resistance", label: "Overcoming organizational resistance to change at scale" },
  { id: "digital-talent-gaps", label: "Critical gaps in digital leadership and technical capabilities" },
  { id: "cross-department-coordination", label: "Coordinating transformation efforts across multiple departments" }
];

export const strategicManagementConsultanciesChallenges = [
  { id: "client-outcome-expectations", label: "Managing complex client expectations for transformation outcomes" },
  { id: "competitive-positioning", label: "Differentiating services in a highly competitive consulting market" },
  { id: "scalable-methodology", label: "Scaling proven transformation methodologies across diverse clients" },
  { id: "specialized-frameworks", label: "Developing proprietary frameworks for competitive advantage" },
  { id: "client-transformation-readiness", label: "Assessing and improving client readiness for transformation" },
  { id: "engagement-profitability", label: "Balancing transformation depth with engagement profitability" }
];

export const digitalRoadmapOwnersChallenges = [
  { id: "roadmap-stakeholder-buy-in", label: "Getting stakeholder buy-in for comprehensive digital roadmaps" },
  { id: "technology-debt-management", label: "Balancing innovation with technical debt management" },
  { id: "roadmap-execution-gaps", label: "Bridging the gap between strategy and execution" },
  { id: "agile-roadmap-adaptation", label: "Maintaining roadmap flexibility while ensuring strategic direction" },
  { id: "cross-functional-coordination", label: "Coordinating roadmap execution across technical and business teams" },
  { id: "roi-measurement", label: "Measuring and communicating ROI of roadmap initiatives" }
];

export const independentConsultantsChallenges = [
  { id: "practice-differentiation", label: "Differentiating your practice in a crowded consulting market" },
  { id: "client-acquisition-scale", label: "Scaling client acquisition without compromising service quality" },
  { id: "service-delivery-efficiency", label: "Delivering high-impact results with limited resources" },
  { id: "expertise-positioning", label: "Positioning specialized expertise for premium pricing" },
  { id: "client-engagement-scoping", label: "Effectively scoping engagements for mutual success" },
  { id: "thought-leadership", label: "Building thought leadership to attract ideal clients" }
];

export const getChallengesByICP = (icpType: string) => {
  switch (icpType) {
    case 'digital-transformation-leaders':
      return digitalTransformationLeadersChallenges;
    case 'strategic-management-consultancies':
      return strategicManagementConsultanciesChallenges;
    case 'digital-roadmap-owners':
      return digitalRoadmapOwnersChallenges;
    case 'independent-consultants':
      return independentConsultantsChallenges;
    default:
      return digitalTransformationLeadersChallenges;
  }
};

// ICP-specific timeframes
export const internalTimeframes = [
  { id: "immediate", label: "Immediate (within 4 weeks)" },
  { id: "quarterly", label: "This quarter (1-3 months)" },
  { id: "annual", label: "This fiscal year (6-12 months)" }
];

export const externalTimeframes = [
  { id: "proposal-stage", label: "Proposal stage (within 4 weeks)" },
  { id: "active-pipeline", label: "Active pipeline (1-3 months)" },
  { id: "future-opportunities", label: "Future opportunities (6-12 months)" }
];

export const numberOptions = ["1-5", "6-20", "21-100", "100+"];

export const getTimeframesByICP = (icpType: string) => {
  const isInternal = icpType === 'digital-transformation-leaders' || icpType === 'digital-roadmap-owners';
  return isInternal ? internalTimeframes : externalTimeframes;
};

// ICP-specific titles and descriptions
export const getICPTitles = (icpType: string) => {
  switch (icpType) {
    case 'digital-transformation-leaders':
      return {
        businessTitle: "About Your Organization",
        challengesTitle: "What Enterprise Transformation Challenges Are You Facing?"
      };
    case 'strategic-management-consultancies':
      return {
        businessTitle: "About Your Consulting Practice",
        challengesTitle: "What Client Delivery & Growth Challenges Are You Facing?"
      };
    case 'digital-roadmap-owners':
      return {
        businessTitle: "About Your Organization",
        challengesTitle: "What Roadmap Execution Challenges Are You Facing?"
      };
    case 'independent-consultants':
      return {
        businessTitle: "About Your Consulting Practice",
        challengesTitle: "What Practice Growth Challenges Are You Facing?"
      };
    default:
      return {
        businessTitle: "About Your Business",
        challengesTitle: "What Challenges Are You Facing?"
      };
  }
};
