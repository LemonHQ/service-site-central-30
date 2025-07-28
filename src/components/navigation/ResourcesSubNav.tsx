
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ResourcesSubNav: React.FC = () => {
  const location = useLocation();

  const resourceItems = [
    { 
      name: "Insights", 
      path: "/insights", 
      description: "Expert perspectives and technical deep-dives",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Case Studies", 
      path: "/case-studies", 
      description: "Real-world transformation success stories",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    { 
      name: "Blog", 
      path: "/blog", 
      description: "Thought leadership and industry trends",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const caseStudyItems = [
    {
      name: "Standardizing Motor Insurance",
      path: "/case-study/standardizing-motor-insurance-for-a-digital-future",
      description: "Transforming fragmented insurance into scalable digital-first experience"
    },
    {
      name: "Reimagining Patient Experience",
      path: "/case-study/reimagining-patient-experience",
      description: "Abbott FSL's patient experience ecosystem transformation"
    },
    {
      name: "Multi-Market D2C Sales",
      path: "/case-study/driving-multi-market-d2c-sales",
      description: "DAMAC's traditional property selling to D2C sales engine"
    },
    {
      name: "Digital Policy & Claims AI",
      path: "/case-study/digital-policy-and-claims-using-ai",
      description: "AI-powered compliance and claims processing platform"
    },
    {
      name: "ALJ Market Leadership",
      path: "/case-study/how-abdul-latif-jameel-established-its-market-leadership",
      description: "Strategic brand communications and market positioning"
    },
    {
      name: "MERAAS Rewards Ecosystem",
      path: "/case-study/how-meraas-used-a-live-pilot-to-strategize-the-next-major-rewards-ecosystem",
      description: "Live pilot strategy for Dubai's rewards ecosystem"
    },
    {
      name: "IP Management Platform",
      path: "/case-study/standardizing-intellectual-property-management",
      description: "Standardizing intellectual property management processes"
    },
    {
      name: "Digital Brand Engine",
      path: "/case-study/building-a-composable-digital-brand-engine",
      description: "Building composable digital brand architecture"
    }
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={`${location.pathname.includes('/insights') || 
          location.pathname.includes('/case-studies') || 
          location.pathname.includes('/blog') ? 'text-brand-600 font-medium' : ''} h-10 px-4 py-2 text-sm font-medium`}
      >
        Resources
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[800px] p-4">
          <div className="grid grid-cols-2 gap-6">
            {/* Main Resources Section */}
            <div>
              <h3 className="text-sm font-medium text-brand-600 mb-3">Resources</h3>
              <div className="space-y-2">
                {resourceItems.map((item) => (
                  <Link 
                    to={item.path} 
                    key={item.name}
                    className="flex items-center group rounded-md p-3 hover:bg-accent"
                  >
                    <div className="overflow-hidden rounded-md mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-12 w-12 object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-brand-600">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Case Studies Section */}
            <div>
              <h3 className="text-sm font-medium text-brand-600 mb-3">Case Studies</h3>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {caseStudyItems.map((item) => (
                  <Link 
                    to={item.path} 
                    key={item.name}
                    className="block group rounded-md p-2 hover:bg-accent"
                  >
                    <h4 className="text-xs font-medium group-hover:text-brand-600">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesSubNav;
