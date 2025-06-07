
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ServiceSubNav from '../navigation/ServiceSubNav';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavigationProps {
  navLinks: Array<{ name: string; path: string }>;
  industryItems: Array<{ name: string; path: string; image: string; description: string }>;
  approachItems: Array<{ name: string; path: string; image: string; description: string }>;
  isActive: (path: string) => string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navLinks,
  industryItems,
  approachItems,
  isActive
}) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex flex-1 justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-1">
          {/* Service SubNav - what we do */}
          <NavigationMenuItem>
            <ServiceSubNav />
          </NavigationMenuItem>

          {/* Our Approach dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`${location.pathname.includes('/approach/') ? 'text-brand-600 font-medium' : ''} h-10 px-4 py-2 text-base font-medium`}
            >
              Our Approach
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 gap-4 p-4 w-[700px]">
                {approachItems.map((item) => (
                  <Link 
                    to={item.path} 
                    key={item.name}
                    className="flex flex-col group rounded-md p-3 hover:bg-accent"
                  >
                    <div className="overflow-hidden rounded-md mb-2">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-32 w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-brand-600">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Industries dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`${location.pathname.includes('/industries/') ? 'text-brand-600 font-medium' : ''} h-10 px-4 py-2 text-base font-medium`}
            >
              Industries
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 gap-4 p-4 w-[700px]">
                {industryItems.map((industry) => (
                  <Link 
                    to={industry.path} 
                    key={industry.name}
                    className="flex flex-col group rounded-md p-3 hover:bg-accent"
                  >
                    <div className="overflow-hidden rounded-md mb-2">
                      <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="h-32 w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-sm font-medium group-hover:text-brand-600">{industry.name}</h3>
                    <p className="text-xs text-muted-foreground">{industry.description}</p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          {/* Main nav links - Updated to match trigger height and styling */}
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <Link 
                to={link.path} 
                className={`${isActive(link.path)} inline-flex items-center justify-center h-10 px-4 py-2 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground`}
              >
                {link.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
