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
    quote: "Companies with strong omnichannel customer engagement retain on average 89% of their customers compared to 33% for companies with weak engagement.",
    author: "Aberdeen Group",
    authorTitle: "Customer Experience Research",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop",
    sourceText: "Customer Experience Research: The Omnichannel Customer Engagement Report",
    sourceUrl: "https://www.aberdeen.com/research/customer-experience/"
  },
  "scale-digital-experiences": {
    quote: "By 2025, organizations that develop digital immunity will increase customer satisfaction by decreasing downtime by 80%.",
    author: "Gartner",
    authorTitle: "Technology Research",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Gartner Top Strategic Technology Trends for 2023",
    sourceUrl: "https://www.gartner.com/en/articles/gartner-top-10-strategic-technology-trends-for-2023"
  },
  "digitalize-product-lines": {
    quote: "52% of companies accelerated their AI adoption plans because of the Covid crisis, and 86% say that AI is becoming a 'mainstream technology' at their company.",
    author: "PwC",
    authorTitle: "Global AI Study",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "PwC's 2021 AI Predictions: 5 Actions to Take in 2021",
    sourceUrl: "https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-predictions.html"
  },
  "expand-product-offerings": {
    quote: "According to our research, digitally transformed organizations achieved 16% higher revenue and 26% greater profitability compared to their industry competitors.",
    author: "Harvard Business Review",
    authorTitle: "Digital Transformation Research",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Rethinking Digital Transformation: A Leader's Guide",
    sourceUrl: "https://hbr.org/2019/03/digital-transformation-is-not-about-technology"
  },
  "standardize-digital-portfolio": {
    quote: "Organizations with design systems report a 46% increase in design consistency, 37% reduction in design debt, and 34% boost in production speed of digital products.",
    author: "Forrester Research",
    authorTitle: "Design Systems Impact Study",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The Total Economic Impact™ Of Design Systems",
    sourceUrl: "https://www.forrester.com/report/the-total-economic-impact-of-adobe-spectrum-design-system/RES177565"
  },
  "pilot-emerging-tech": {
    quote: "75% of business leaders believe that if they don't move beyond experimentation with artificial intelligence in the next five years, they risk going out of business.",
    author: "Accenture",
    authorTitle: "Technology Vision Research",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Accenture Technology Vision 2023",
    sourceUrl: "https://www.accenture.com/us-en/insights/technology/technology-trends-2023"
  },
  "retail": {
    quote: "Retailers who successfully implement omnichannel customer experiences achieve 91% greater year-over-year customer retention rates compared to retailers who don't.",
    author: "Aberdeen Group",
    authorTitle: "Retail Industry Research",
    imageUrl: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Omnichannel Customer Care: Best-in-Class Strategies for 2023",
    sourceUrl: "https://www.aberdeen.com/cmo-essentials/stats-omnichannel-customer-care/"
  },
  "finance": {
    quote: "63% of financial services firms say their outdated technology infrastructure is the biggest obstacle in their digital transformation journey.",
    author: "Deloitte",
    authorTitle: "Digital Banking Maturity Study",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Digital Banking Maturity 2022",
    sourceUrl: "https://www2.deloitte.com/global/en/pages/financial-services/articles/digital-banking-maturity.html"
  },
  "insurance": {
    quote: "Insurance carriers who excel at customer experience generate 2-4X more growth and 30% higher profitability than their competitors.",
    author: "McKinsey & Company",
    authorTitle: "Insurance Practice",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The growth engine: Superior customer experience in insurance",
    sourceUrl: "https://www.mckinsey.com/industries/financial-services/our-insights/the-growth-engine-superior-customer-experience-in-insurance"
  },
  "healthcare": {
    quote: "Healthcare organizations that have digitally transformed report 81% improved patient satisfaction and a 74% reduction in care costs through streamlined workflows and remote monitoring capabilities.",
    author: "McKinsey & Company",
    authorTitle: "Healthcare Systems & Services",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The era of exponential improvement in healthcare?",
    sourceUrl: "https://www.mckinsey.com/industries/healthcare/our-insights/the-era-of-exponential-improvement-in-healthcare"
  }
};
