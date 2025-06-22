
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Database, 
  Expand,
  ArrowUp,
  FlaskConical,
  Library
} from 'lucide-react';

interface ExpansionStrategyProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ExpansionStrategy: React.FC<ExpansionStrategyProps> = ({ icon, title, description, color }) => {
  return (
    <Card className="border-0 shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className={`${color} rounded-full p-4 inline-flex flex-shrink-0`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-normal mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 font-light">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductExpansion: React.FC = () => {
  const expansionStrategies = [
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Unify Brand Experiences",
      description: "Create consistent, compliant brand and product experiences across all customer touchpoints, regions, and business units.",
      color: "bg-purple-100"
    },
    {
      icon: <Database className="h-8 w-8 text-red-500" />,
      title: "Digitalize Product Lines",
      description: "Transform legacy offerings into modern, scalable digital products built for today's markets and tomorrow's expectations.",
      color: "bg-red-100"
    },
    {
      icon: <Expand className="h-8 w-8 text-blue-500" />,
      title: "Expand Product Offerings",
      description: "Identify, validate, and launch new services, bundles, and adjacent solutions that deepen customer value and drive growth.",
      color: "bg-blue-100"
    },
    {
      icon: <ArrowUp className="h-8 w-8 text-green-500" />,
      title: "Scale Digital Experiences",
      description: "Build the systems, standards, and operating models that power sustainable, enterprise-grade digital expansion.",
      color: "bg-green-100"
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-amber-500" />,
      title: "Pilot Emerging Tech",
      description: "Rapidly prototype and validate AI, automation, and other emerging technologies to drive future-ready innovation in regulated environments.",
      color: "bg-amber-100"
    },
    {
      icon: <Library className="h-8 w-8 text-indigo-500" />,
      title: "Standardize Digital Portfolio",
      description: "Establish consistent patterns and templates across your digital product catalog to improve efficiency, governance, and user experience.",
      color: "bg-indigo-100"
    }
  ];

  return (
    <section className="section-padding bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What we do" 
          subtitle="We enable enterprises with diverse brand portfolios and complex product lines move from idea to market to scale — faster, safer, and with full regulatory alignment."
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expansionStrategies.map((strategy, index) => (
            <ExpansionStrategy
              key={index}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              color={strategy.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductExpansion;
