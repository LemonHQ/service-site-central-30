import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { Users, Building2, TrendingUp, Lightbulb } from 'lucide-react';
interface ICPProfileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}
const ICPProfile: React.FC<ICPProfileProps> = ({
  icon,
  title,
  description,
  benefits,
  color
}) => {
  return <Card className="border-0 shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-start">
          <div className={`${color} rounded-full p-4 mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-normal mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4 font-light">{description}</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-gray-700 font-light">{benefit}</span>
              </li>)}
          </ul>
        </div>
      </CardContent>
    </Card>;
};
const ICPPanel: React.FC = () => {
  const icpProfiles = [{
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Digital Transformation Leaders",
    description: "Internal executives and senior leaders spearheading enterprise-wide digital transformation initiatives within their organizations.",
    benefits: ["Accelerate transformation timelines with proven frameworks", "Reduce implementation risks through expert guidance", "Achieve measurable ROI on digital investments", "Build internal capabilities for sustained transformation"],
    color: "bg-blue-100"
  }, {
    icon: <Building2 className="h-8 w-8 text-purple-500" />,
    title: "Strategic Management Consultancies",
    description: "External consulting firms like McKinsey, BCG, and Bain delivering digital transformation services to enterprise clients.",
    benefits: ["Expand digital transformation service capabilities", "Access specialized frameworks and methodologies", "Deliver faster, more predictable client outcomes", "Scale transformation delivery across multiple clients"],
    color: "bg-purple-100"
  }, {
    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    title: "Digital Roadmap Owners",
    description: "Internal strategists and product leaders responsible for defining and executing digital transformation roadmaps within their organizations.",
    benefits: ["Create comprehensive, actionable digital roadmaps", "Align stakeholders around transformation priorities", "Track progress with clear metrics and milestones", "Optimize resource allocation for maximum impact"],
    color: "bg-green-100"
  }, {
    icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
    title: "Independent Consultants",
    description: "External individual consultants and boutique firms specializing in digital transformation and innovation advisory services.",
    benefits: ["Enhance service offerings with proven methodologies", "Access cutting-edge transformation frameworks", "Deliver higher-value client engagements", "Build reputation with successful transformation outcomes"],
    color: "bg-amber-100"
  }];
  return <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Who We Optimize For" subtitle="We partner with leaders and organizations driving digital transformation across industries - both internal champions and external advisors" centered className="mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {icpProfiles.map((profile, index) => <ICPProfile key={index} icon={profile.icon} title={profile.title} description={profile.description} benefits={profile.benefits} color={profile.color} />)}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Whether you're leading transformation from within your organization or advising clients as an external partner, we provide the expertise and frameworks you need to drive successful digital transformation outcomes.
          </p>
          <Link to="/lead-qualification">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white">
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default ICPPanel;