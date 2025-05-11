
// Question options and scoring constants for the Co-Create Assessment

export const offeringPortfolioOptions = [
  { id: "single_unified", label: "Single unified product", score: 0 },
  { id: "multiple_segments", label: "Multiple products for different segments", score: 2 },
  { id: "overlapping_value", label: "Multiple offerings with overlapping value", score: 1 },
  { id: "legacy_suite", label: "Legacy-heavy suite in need of rework", score: 3 },
];

export const explorationPlanningOptions = [
  { id: "new_product", label: "Launching a new product or sub-brand", score: 1 },
  { id: "repositioning", label: "Repositioning an existing offering", score: 1 },
  { id: "new_segment", label: "Entering a new customer segment or market", score: 1 },
  { id: "rationalizing", label: "Rationalizing or unbundling product lines", score: 1 },
  { id: "none", label: "None of the above", score: 0 },
];

export const customerSegmentsOptions = [
  { id: "not_defined", label: "Not defined", score: 0 },
  { id: "partially_defined", label: "Partially defined (basic personas or market groups)", score: 1 },
  { id: "well_defined", label: "Well defined with behavioral or industry insights", score: 2 },
  { id: "continuously_validated", label: "Continuously validated and data-backed", score: 3 },
];

export const offeringsConfidenceOptions = [
  { id: "low", label: "Low", score: 0 },
  { id: "moderate", label: "Moderate", score: 1 },
  { id: "high", label: "High", score: 2 },
  { id: "proven", label: "Proven with usage, feedback, or conversion data", score: 3 },
];

export const validationApproachOptions = [
  { id: "intuition", label: "We rely on intuition or internal input", score: 0 },
  { id: "occasional_pilots", label: "We run occasional pilots or internal testing", score: 1 },
  { id: "structured_discovery", label: "We run structured discovery and testing cycles", score: 2 },
  { id: "co_create", label: "We co-create with customers and business teams", score: 3 },
];

export const internalCapabilitiesOptions = [
  { id: "research_insight", label: "Research & insight", score: 1 },
  { id: "experience_design", label: "Experience or service design", score: 1 },
  { id: "prototyping_testing", label: "Prototyping & testing", score: 1 },
  { id: "go_to_market", label: "Go-to-market readiness", score: 1 },
  { id: "none", label: "None", score: 0 },
];

export const teamAlignmentOptions = [
  { id: "rarely", label: "Rarely", score: 0 },
  { id: "somewhat", label: "Somewhat", score: 1 },
  { id: "mostly", label: "Mostly aligned", score: 2 },
  { id: "fully", label: "Fully aligned with shared frameworks", score: 3 },
];

export const crossFunctionalExecutionOptions = [
  { id: "difficult", label: "Difficult—lots of handoffs and friction", score: 0 },
  { id: "slow", label: "Slow, but manageable", score: 1 },
  { id: "efficient", label: "Efficient in defined tracks", score: 2 },
  { id: "agile", label: "Agile and collaborative", score: 3 },
];

export const externalCollaborationOptions = [
  { id: "in_house", label: "We prefer to keep it in-house", score: 0 },
  { id: "short_term", label: "Open to short-term partners", score: 1 },
  { id: "strategic_partners", label: "Actively seek strategic co-creation partners", score: 2 },
  { id: "already_working", label: "Already work this way across teams", score: 3 },
];

export const partnershipSupportOptions = [
  { id: "strategy_discovery", label: "Strategy & discovery", score: 1 },
  { id: "experience_design", label: "Experience design", score: 1 },
  { id: "prototyping_validation", label: "Prototyping & validation", score: 1 },
  { id: "market_testing", label: "Market testing", score: 1 },
  { id: "launch_planning", label: "Launch planning", score: 1 },
  { id: "stakeholder_alignment", label: "Stakeholder alignment", score: 1 },
];

// Determines the score category based on total score
export const getScoreCategory = (score: number): string => {
  if (score >= 25) {
    return "Ready for co-creation";
  } else if (score >= 18) {
    return "Strong foundation";
  } else if (score >= 12) {
    return "Building momentum";
  } else {
    return "Early stage";
  }
};

// Calculate maximum possible score
export const MAX_SCORE = 
  3 + // offering portfolio (max 3)
  4 + // exploration planning (max 4)
  3 + // customer segments (max 3)
  3 + // offerings confidence (max 3)
  3 + // validation approach (max 3)
  4 + // internal capabilities (max 4)
  3 + // team alignment (max 3)
  3 + // cross-functional execution (max 3)
  3 + // external collaboration (max 3)
  3;  // partnership support (max 3 - capped)
