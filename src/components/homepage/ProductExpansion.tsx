
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Scale, 
  Target, 
  TrendingUp, 
  Award,
  Globe
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
      icon: <Rocket className="h-8 w-8 text-red-500" />,
      title: "Market Launch Excellence",
      description: "Transform your product launch from a one-time event into a strategic process with our proven go-to-market frameworks, audience segmentation, and comprehensive launch playbooks.",
      color: "bg-red-100"
    },
    {
      icon: <Scale className="h-8 w-8 text-purple-500" />,
      title: "Scalable Infrastructure",
      description: "Build resilient technical foundations that grow with your business, leveraging cloud-native architectures, microservices, and automated scaling solutions to handle increasing demand.",
      color: "bg-purple-100"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Market Expansion",
      description: "Identify and penetrate new market segments through strategic research, localization strategies, and tailored value propositions that resonate with diverse customer bases.",
      color: "bg-blue-100"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Product Portfolio Growth",
      description: "Expand your product offerings strategically with our product roadmap acceleration, feature prioritization frameworks, and innovation workshops that identify valuable extensions.",
      color: "bg-green-100"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Competitive Advantage",
      description: "Develop sustainable differentiators through continuous innovation programs, competitive intelligence dashboards, and strategic positioning strategies that keep you ahead.",
      color: "bg-amber-100"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: "Market Share Growth",
      description: "Capture and expand your market share with targeted acquisition strategies, customer retention programs, and data-driven expansion planning that maximize your industry presence.",
      color: "bg-indigo-100"
    }
  ];

  return (
    <section className="section-padding bg-beige-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What we do" 
          subtitle="From idea to market to scale — services designed to enable you at every stage of your digital journey."
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expansionStrategies.slice(0, 3).map((strategy, index) => (
            <ExpansionStrategy
              key={index}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              color={strategy.color}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expansionStrategies.slice(3).map((strategy, index) => (
            <ExpansionStrategy
              key={index + 3}
              icon={strategy.icon}
              title={strategy.title}
              description={strategy.description}
              color={strategy.color}
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to expand your market presence and grow your product portfolio? Our strategic consulting and growth acceleration programs help you unlock new markets and maximize business potential.
          </p>
          <Link to="/services">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Explore Growth Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductExpansion;
