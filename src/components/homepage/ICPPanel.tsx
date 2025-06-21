
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { 
  Users, 
  Building2, 
  TrendingUp, 
  Lightbulb 
} from 'lucide-react';

interface ICPProfileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const ICPProfile: React.FC<ICPProfileProps> = ({ icon, title, description, benefits, color }) => {
  return (
    <Card className="border-0 shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-start">
          <div className={`${color} rounded-full p-4 mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-600">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const ICPPanel: React.FC = () => {
  const icpProfiles = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Digital Transformation Leaders",
      description: "C-suite executives and senior leaders driving enterprise-wide digital transformation initiatives.",
      benefits: [
        "Accelerate transformation timelines",
        "Reduce implementation risks",
        "Achieve measurable business outcomes",
        "Build organizational digital capabilities"
      ],
      color: "bg-blue-100"
    },
    {
      icon: <Building2 className="h-8 w-8 text-purple-500" />,
      title: "Consultancy Firms",
      description: "Strategic consulting firms like Sia Partners, BCG, and others advancing digital transformation for enterprises.",
      benefits: [
        "Expand service capabilities",
        "Deliver faster client results",
        "Access specialized expertise",
        "Scale transformation delivery"
      ],
      color: "bg-purple-100"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Digital Transformation Consultants",
      description: "Independent consultants and specialized teams focused on enterprise digital transformation.",
      benefits: [
        "Enhance client offerings",
        "Access proven frameworks",
        "Leverage partnership opportunities",
        "Accelerate project delivery"
      ],
      color: "bg-green-100"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: "Innovation Consultants",
      description: "Strategic advisors helping enterprises innovate and transform their business models.",
      benefits: [
        "Apply cutting-edge methodologies",
        "Drive innovation at scale",
        "Access emerging technology insights",
        "Create competitive advantages"
      ],
      color: "bg-amber-100"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Who We Optimize For" 
          subtitle="We partner with leaders and organizations driving digital transformation across industries"
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {icpProfiles.map((profile, index) => (
            <ICPProfile
              key={index}
              icon={profile.icon}
              title={profile.title}
              description={profile.description}
              benefits={profile.benefits}
              color={profile.color}
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're leading transformation within your organization or helping others navigate their digital journey, we provide the expertise and partnership you need to succeed.
          </p>
          <Link to="/lead-qualification">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ICPPanel;
