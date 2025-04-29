
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { 
  Bulb, 
  Rocket, 
  Scale,
  Expand
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
            <h3 className="text-xl font-semibold mb-3 text-brand-600">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductExpansion: React.FC = () => {
  const expansionStrategies = [
    {
      icon: <Bulb className="h-8 w-8 text-purple-500" />,
      title: "Ideate",
      description: "Transform market insights and business challenges into innovative product concepts through strategic workshops, user research, and collaborative design thinking sessions.",
      color: "bg-purple-100"
    },
    {
      icon: <Rocket className="h-8 w-8 text-red-500" />,
      title: "Launch",
      description: "Accelerate time-to-market with comprehensive launch strategies, technical implementation, and go-to-market frameworks that ensure successful product introduction.",
      color: "bg-red-100"
    },
    {
      icon: <Expand className="h-8 w-8 text-blue-500" />,
      title: "Expand",
      description: "Grow your market presence through targeted expansion strategies, new customer segment identification, and portfolio diversification that drives business growth.",
      color: "bg-blue-100"
    },
    {
      icon: <Scale className="h-8 w-8 text-green-500" />,
      title: "Scale",
      description: "Build resilient infrastructure and operational frameworks that enable your products to handle increasing demand while maintaining performance and compliance.",
      color: "bg-green-100"
    }
  ];

  return (
    <section className="section-padding bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What we do" 
          subtitle="From idea to market to scale — services designed to enable you at every stage of your digital maturity journey."
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
        
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your product strategy and accelerate your market growth? Our end-to-end approach helps you navigate every stage of your product journey.
          </p>
          <Link to="/services">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductExpansion;
