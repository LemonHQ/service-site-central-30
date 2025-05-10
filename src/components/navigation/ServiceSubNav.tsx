
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/servicesData";
import { 
  Lightbulb, PenTool, Palette, Rocket, TrendingUp, 
  LayersIcon, Settings, Cpu, Network, BarChart2, Users, Library, Monitor
} from 'lucide-react';

// Navigation menu item component for consistent styling
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Custom ListItem that works with React Router Link
const RouterListItem = ({ title, to, className, icon: Icon }: { 
  title: string; 
  to: string; 
  className?: string;
  icon?: React.ElementType;
}) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            {Icon && <Icon className="h-4 w-4 mr-2 text-brand-400" />}
            <span>{title}</span>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const ServiceSubNav = () => {
  console.log("Rendering ServiceSubNav component");
  
  // Get main service categories
  const mainServices = [
    {
      title: 'Unify Brand Experiences',
      link: '/services/unify-brand-experiences',
      icon: Users
    },
    {
      title: 'Digitalize Product Lines',
      link: '/services/digitalize-product-lines',
      icon: Monitor
    },
    {
      title: 'Expand Product Offerings',
      link: '/services/expand-product-offerings',
      icon: LayersIcon
    },
    {
      title: 'Scale Digital Experiences',
      link: '/services/scale-digital-experiences',
      icon: TrendingUp
    },
    {
      title: 'Pilot Emerging Tech',
      link: '/services/pilot-emerging-tech',
      icon: Cpu
    },
    {
      title: 'Standardize Digital Portfolio',
      link: '/services/standardize-digital-portfolio',
      icon: Library
    },
  ];

  // Additional service sub-categories
  const additionalServices = [
    {
      title: 'Validating Product Ideas',
      link: '/services/validating-product-ideas',
      icon: Lightbulb
    },
    {
      title: 'Ideating Product Concepts',
      link: '/services/ideating-product-concepts',
      icon: PenTool
    },
    {
      title: 'Designing Brand & Experiences',
      link: '/services/designing-experiences',
      icon: Palette
    },
    {
      title: 'Launching New Products',
      link: '/services/launching-products',
      icon: Rocket
    },
    {
      title: 'Scaling Products',
      link: '/services/scaling-products',
      icon: TrendingUp
    },
    {
      title: 'Standardize Technology',
      link: '/services/standardize-technology',
      icon: Settings
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">What We Do</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-[600px] lg:w-[700px]">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                  alt="Digital transformation team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="font-medium">Enterprise Digital Transformation</p>
                  <p className="text-sm opacity-90">Full-service digital product strategy and development</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[500px]">
                <h3 className="font-semibold px-3 pt-2">Main Service Areas</h3>
                <ul className="list-none p-0 m-0 grid grid-cols-1 gap-2">
                  {mainServices.map((service, index) => (
                    <RouterListItem
                      key={index}
                      title={service.title}
                      to={service.link}
                      icon={service.icon}
                    />
                  ))}
                </ul>
                
                <h3 className="font-semibold px-3 pt-4 mt-2">Additional Services</h3>
                <ul className="list-none p-0 m-0 grid grid-cols-1 gap-2">
                  {additionalServices.map((service, index) => (
                    <RouterListItem
                      key={index}
                      title={service.title}
                      to={service.link}
                      icon={service.icon}
                    />
                  ))}
                </ul>
                
                <div className="mt-2">
                  <Link 
                    to="/services"
                    className="block w-full text-center py-2 bg-brand-100 hover:bg-brand-200 text-brand-700 rounded transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceSubNav;
