
import React from 'react';
import FaqSection from '@/components/ui/FaqSection';

const faqItems = [
  {
    question: "How do you identify the right target customers for our product?",
    answer: "We use a systematic approach to identify and validate target customers by analyzing your market segments, conducting user interviews, and evaluating customer pain points. This approach combines your internal business knowledge with external market research to pinpoint the most promising customer segments where your product can solve meaningful problems and create value."
  },
  {
    question: "How do you measure product-market fit during the Co-Create process?",
    answer: "We establish clear metrics aligned with Dan Olsen's product-market fit pyramid to measure how well your product meets customer needs. These typically include engagement metrics (usage frequency, session duration), retention metrics (return rate, churn), and satisfaction metrics (NPS, user feedback). We define these metrics early in the process and use them to validate the product concept with real users."
  },
  {
    question: "How do you handle the tension between MVP features and future ecosystem connectivity?",
    answer: "We focus on creating a minimal viable product that delivers core value while architecting for future flexibility. The process involves prioritizing features based on your target customers' most urgent needs while designing the underlying architecture to support future ecosystem integrations. This balanced approach ensures you can deliver immediate value while positioning your product for long-term ecosystem success."
  },
  {
    question: "What if we discover our initial product hypothesis is wrong during the process?",
    answer: "This is actually a valuable outcome of the Co-Create process. Dan Olsen's methodology embraces the principle of validated learning - better to discover issues early before significant resources are invested. If we find that the initial hypothesis needs adjustment, we'll pivot based on the insights gathered and refine the target customer, problem statement, or solution approach accordingly."
  },
  {
    question: "How do we involve our existing customers in the process if we're enhancing a current product?",
    answer: "For existing products, we incorporate your current customers into the process through targeted research sessions and prototype testing. We analyze usage data of your existing product, conduct interviews with different customer segments, and involve them in validation of new features. This approach helps ensure that enhancements address actual customer needs while maintaining compatibility with existing workflows."
  },
  {
    question: "What happens after the 4-week Co-Create process ends?",
    answer: "After completing the Co-Create process, you'll have a validated product concept, prioritized feature set, and product-market fit metrics to guide development. Many clients transition to our implementation services for development, while others use our specifications with their internal teams. We also offer ongoing support for iterative product enhancement and can assist with executing your product roadmap after launch."
  }
];

const FrictionReducerFAQ = () => {
  return (
    <FaqSection 
      faqs={faqItems} 
      title="FAQs"
      subtitle="Common questions about our product-market fit Co-Create process"
      backgroundColor="bg-slate-50"
    />
  );
};

export default FrictionReducerFAQ;
