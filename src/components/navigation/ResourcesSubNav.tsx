
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
      path: "/insights-1", 
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

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={`${location.pathname.includes('/insights-1') || 
          location.pathname.includes('/case-studies') || 
          location.pathname.includes('/blog') ? 'text-brand-600 font-medium' : ''} h-10 px-4 py-2 text-sm font-medium`}
      >
        Resources
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid grid-cols-1 gap-4 p-4 w-[500px]">
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
                  className="h-16 w-16 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium group-hover:text-brand-600">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesSubNav;
