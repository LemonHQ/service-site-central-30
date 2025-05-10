
export interface QuoteData {
  quote: string;
  author?: string;
  authorTitle?: string;
  imageUrl?: string;
  sourceText?: string;
  sourceUrl?: string;
}

export const serviceQuotes: Record<string, QuoteData> = {
  "unify-brand-experiences": {
    quote: "Brands that deliver consistent experiences across all touchpoints see 33% higher customer loyalty and 23% more revenue growth than those who don't.",
    author: "Blake Morgan",
    authorTitle: "Customer Experience Futurist",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    sourceText: "Forbes: 100 Of The Most Customer-Centric Companies",
    sourceUrl: "https://www.forbes.com/sites/blakemorgan/2019/06/30/100-of-the-most-customer-centric-companies/?sh=2b97596663c3"
  },
  "scale-digital-experiences": {
    quote: "Organizations with scalable digital platforms achieve 3x faster time-to-market and 60% lower technology costs compared to those with rigid legacy systems.",
    author: "Gartner Research",
    authorTitle: "Technology Research and Advisory",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Future of Applications: Delivering the Composable Enterprise",
    sourceUrl: "https://www.gartner.com/en/information-technology/insights/applications-strategy"
  },
  "digitalize-product-lines": {
    quote: "Companies that effectively digitalize their product lines see up to 36% higher revenue growth compared to industry averages.",
    author: "McKinsey Digital",
    authorTitle: "Global Business Consultancy",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Digital Strategy in a Time of Crisis",
    sourceUrl: "https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/digital-strategy-in-a-time-of-crisis"
  },
  "expand-product-offerings": {
    quote: "Leaders in digital product innovation achieve 2.7x higher revenue growth compared to their industry peers through systematic expansion of their digital offerings.",
    author: "BCG Digital Ventures",
    authorTitle: "Corporate Innovation and Digital Product Development",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Digital Product Innovation: The New Growth Engine",
    sourceUrl: "https://www.bcg.com/digital-bcg/digital-ventures"
  },
  "standardize-digital-portfolio": {
    quote: "Organizations with standardized digital portfolios reduce development costs by up to 40% and accelerate time-to-market by up to 50% for new digital initiatives.",
    author: "Forrester Research",
    authorTitle: "Digital Experience Research",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The Total Economic Impact of Design Systems",
    sourceUrl: "https://www.forrester.com/report/design-systems-drive-digital-transformation"
  },
  "pilot-emerging-tech": {
    quote: "Companies that effectively pilot emerging technologies before full implementation are 2.5x more likely to achieve successful digital transformation outcomes.",
    author: "Deloitte Digital",
    authorTitle: "Digital Transformation Practice",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Technology Pilot Programs: De-risking Digital Transformation",
    sourceUrl: "https://www2.deloitte.com/us/en/insights/topics/digital-transformation.html"
  },
  "retail": {
    quote: "Retailers who effectively combine digital and physical channels see 40% higher conversion rates and 30% higher customer lifetime value.",
    author: "Harvard Business Review",
    authorTitle: "Retail Innovation Analysis",
    imageUrl: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Reinventing the Customer Experience in Retail",
    sourceUrl: "https://hbr.org/topic/customer-experience"
  }
};
