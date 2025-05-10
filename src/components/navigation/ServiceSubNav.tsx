
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { mainServices } from '@/data/services';
import { ChevronRight } from 'lucide-react';

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
const RouterListItem = ({ title, to, className, icon: Icon, description }: { 
  title: string; 
  to: string; 
  className?: string;
  icon?: React.ElementType;
  description?: string;
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
          <div className="flex items-center">
            {Icon && <Icon className="h-4 w-4 mr-2 text-brand-400" />}
            <span className="text-sm font-medium">{title}</span>
          </div>
          {description && (
            <p className="line-clamp-2 mt-1 text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const ServiceSubNav = () => {
  console.log("Rendering ServiceSubNav component");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">What We Do</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-[600px] lg:w-[760px]">
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
              
              <div className="overflow-y-auto max-h-[500px]">
                <div className="space-y-1">
                  {mainServices.map((service) => (
                    <div key={service.id} className="mb-3">
                      <RouterListItem
                        title={service.title}
                        to={`/services/${service.slug}`}
                        icon={service.icon}
                        description={service.shortDescription}
                        className="font-semibold pb-1"
                      />
                    </div>
                  ))}
                  
                  <div className="pt-2 mt-2 border-t">
                    <Link 
                      to="/services"
                      className="block w-full text-center py-2 bg-brand-100 hover:bg-brand-200 text-brand-700 rounded transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
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

// We need to manually re-export NavigationMenuLink from the UI components
// since we're using it in this file
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
export { NavigationMenuLink };
