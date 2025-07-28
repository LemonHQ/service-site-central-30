
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
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      subItems: [
        {
          name: "AI Search Revolution",
          path: "/blog/traditional-vs-ai-search",
          description: "How brands are perceived by AI content consumers"
        },
        {
          name: "Consulting Evolution",
          path: "/blog/consulting-industry-evolution", 
          description: "Digital transformation in consulting firms"
        },
        {
          name: "Innovation Frameworks",
          path: "/blog/innovation-frameworks-2024",
          description: "Enterprise scale innovation methodologies"
        },
        {
          name: "Digital Leadership",
          path: "/blog/digital-leadership-skills",
          description: "Essential skills for transformation leaders"
        }
      ]
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
        <div className="grid grid-cols-1 gap-4 p-4 w-[600px]">
          {resourceItems.map((item) => (
            <div key={item.name}>
              <Link 
                to={item.path} 
                className="flex items-center group rounded-md p-3 hover:bg-accent"
              >
                <div className="overflow-hidden rounded-md mr-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-16 w-16 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium group-hover:text-brand-600">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </Link>
              
              {/* Show sub-items for Blog */}
              {item.subItems && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block p-2 rounded-md hover:bg-accent/50 group"
                    >
                      <h4 className="text-xs font-medium text-foreground group-hover:text-brand-600">
                        {subItem.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {subItem.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesSubNav;
