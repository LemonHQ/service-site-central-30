
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

// ICP-specific challenges
export const internalChallenges = [
  { id: "stakeholder-alignment", label: "Difficulty aligning stakeholders around transformation priorities" },
  { id: "legacy-systems", label: "Legacy systems slowing down innovation" },
  { id: "budget-approval", label: "Challenges getting budget approved for digital initiatives" },
  { id: "internal-resistance", label: "Internal resistance to change" },
  { id: "skill-gaps", label: "Skills gaps in digital capabilities" },
  { id: "inconsistent-experiences", label: "Difficulty delivering consistent digital experiences" }
];

export const externalChallenges = [
  { id: "client-expectations", label: "Managing client expectations for transformation outcomes" },
  { id: "competitive-differentiation", label: "Differentiating services in a competitive market" },
  { id: "scalable-delivery", label: "Scaling transformation delivery across multiple clients" },
  { id: "methodology-gaps", label: "Gaps in specialized frameworks and methodologies" },
  { id: "client-readiness", label: "Clients not ready for transformation initiatives" },
  { id: "engagement-scoping", label: "Difficulty scoping transformation engagements effectively" }
];

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

export const getChallengesByICP = (icpType: string) => {
  const isInternal = icpType === 'digital-transformation-leaders' || icpType === 'digital-roadmap-owners';
  return isInternal ? internalChallenges : externalChallenges;
};

export const getTimeframesByICP = (icpType: string) => {
  const isInternal = icpType === 'digital-transformation-leaders' || icpType === 'digital-roadmap-owners';
  return isInternal ? internalTimeframes : externalTimeframes;
};
