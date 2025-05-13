
import React from 'react';
import FaqSection from '@/components/ui/FaqSection';

const faqItems = [
  {
    question: "How long does a typical Co-Create engagement last?",
    answer: "Co-Create engagements typically run between 1-4 weeks, depending on the complexity of the challenge. We often start with a 2-day kickoff workshop followed by sprint cycles of 1-2 weeks each."
  },
  {
    question: "How many people from my organization need to be involved?",
    answer: "A core team of 3-5 stakeholders from your organization typically participates throughout the engagement, with additional subject matter experts joining for specific workshops or review sessions as needed."
  },
  {
    question: "Can Co-Create be conducted remotely?",
    answer: "Yes, we've developed highly effective virtual Co-Create experiences using digital collaboration tools. While we recommend in-person sessions when possible, our remote approach delivers comparable outcomes with added flexibility and global participation."
  },
  {
    question: "What happens after the Co-Create engagement ends?",
    answer: "After Co-Create, you'll have validated prototypes, detailed implementation plans, and technical requirements. Many clients transition into our full development services to bring the solution to market, while others implement with their internal teams using our specifications."
  }
];

const FaqSectionComponent = () => {
  return (
    <FaqSection 
      faqs={faqItems}
      backgroundColor="bg-white"
    />
  );
};

export default FaqSectionComponent;
