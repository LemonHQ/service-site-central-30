
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
    quote: "Companies that have undergone digital transformation are 26% more profitable than their industry peers and enjoy a 12% higher market valuation.",
    author: "MIT Center for Digital Business",
    authorTitle: "Research Initiative on Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Digital Transformation: A Roadmap For Billion-Dollar Organizations",
    sourceUrl: "https://www.capgemini.com/wp-content/uploads/2017/07/Digital_Transformation__A_Road-Map_for_Billion-Dollar_Organizations.pdf"
  },
  "standardize-digital-portfolio": {
    quote: "Design systems save organizations an average of 20-30% in design and development time, 60-70% in maintenance resources, and provide 80-95% reuse rate of design components.",
    author: "Forrester Research",
    authorTitle: "Total Economic Impact Study",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The Total Economic Impact Of InVision Design System Manager",
    sourceUrl: "https://www.invisionapp.com/lp/forrester-design-system-manager"
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
    quote: "Retailers who effectively integrate digital and physical experiences see 40% higher conversion rates and a 30% increase in average order value.",
    author: "Harvard Business Review",
    authorTitle: "Retail Innovation Analysis",
    imageUrl: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The Future of Retail Isn't What You Think",
    sourceUrl: "https://hbr.org/2022/07/the-future-of-retail-isnt-what-you-think"
  },
  "finance": {
    quote: "80% of financial institutions believe that failing to digitally transform will lead to losing up to 15% of market share to more agile competitors and new entrants.",
    author: "Deloitte",
    authorTitle: "Financial Services Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "Bank of 2030: Transform boldly",
    sourceUrl: "https://www2.deloitte.com/us/en/insights/industry/financial-services/financial-services-industry-outlooks/banking-industry-outlook.html"
  },
  "insurance": {
    quote: "Personalization can reduce acquisition costs by as much as 50%, lift revenues by 5-15%, and increase the efficiency of marketing spend by 10-30%.",
    author: "Mckinsey",
    authorTitle: "Growth, Marketing & Sales",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "The future of personalization—and how to get ready for it",
    sourceUrl: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-future-of-personalization-and-how-to-get-ready-for-it"
  },
  "healthcare": {
    quote: "78% of healthcare providers say digital innovation is important to their organization's long-term strategy, and 84% believe it's essential for survival.",
    author: "HIMSS",
    authorTitle: "Healthcare Information and Management Systems Society",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    sourceText: "HIMSS Future of Healthcare Report",
    sourceUrl: "https://www.himss.org/resources/state-healthcare-report-2021-digital-health-transformation"
  }
};
