import React from 'react';
import SectionHeading from '../ui/SectionHeading';
interface Partner {
  name: string;
  logo: string;
  description: string;
}
const PartnersSection: React.FC = () => {
  // Mock partner data with placeholder images
  const partners: Partner[] = [{
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&q=80",
    description: "Strategic technology partner for cloud solutions and enterprise applications"
  }, {
    name: "Salesforce",
    logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&h=100&q=80",
    description: "CRM implementation and customer experience optimization partner"
  }, {
    name: "AWS",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=100&q=80",
    description: "Cloud infrastructure and serverless architecture partner"
  }, {
    name: "Adobe",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=80",
    description: "Creative and marketing technology solutions partner"
  }, {
    name: "Google Cloud",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=200&h=100&q=80",
    description: "AI, machine learning, and data analytics partner"
  }, {
    name: "SAP",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=200&h=100&q=80",
    description: "Enterprise resource planning and business operations partner"
  }, {
    name: "IBM",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=100&q=80",
    description: "Digital transformation and enterprise modernization partner"
  }, {
    name: "Oracle",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=100&q=80",
    description: "Database, middleware, and enterprise applications partner"
  }];
  return <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technology Partners" subtitle="We collaborate with industry-leading technology providers to deliver comprehensive solutions" centered />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => <div key={index} className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-ivory-100">
              <div className="flex items-center justify-center h-16 mb-4">
                <img src={partner.logo} alt={`${partner.name} logo`} className="h-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 text-center">{partner.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PartnersSection;