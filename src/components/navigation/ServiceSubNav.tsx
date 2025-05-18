
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { 
  Palette, 
  Monitor, 
  Layers, 
  Maximize, 
  Lightbulb, 
  LayoutGrid 
} from "lucide-react";

// Navigation menu item component for consistent styling
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({
  className,
  title,
  children,
  ...props
}, ref) => {
  return <li className="list-none">
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>;
});
ListItem.displayName = "ListItem";

// Custom ListItem that works with React Router Link
const RouterListItem = ({
  title,
  to,
  className,
  icon: Icon,
  description
}: {
  title: string;
  to: string;
  className?: string;
  icon?: React.ElementType;
  description?: string;
}) => {
  return <li className="list-none">
      <NavigationMenuLink asChild>
        <Link to={to} className={cn("block select-none rounded-md p-3.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}>
          <div className="flex items-center">
            {Icon && <Icon className="h-5 w-5 mr-2.5 text-brand-400" />}
            <span className="font-medium text-[15px]">{title}</span>
          </div>
          {/* {description && (
            <p className="line-clamp-2 mt-1 text-xs text-muted-foreground">
              {description}
            </p>
           )} */}
        </Link>
      </NavigationMenuLink>
    </li>;
};
const ServiceSubNav = () => {
  console.log("Rendering ServiceSubNav component");

  // Updated service items with direct URLs and icons
  const serviceItems = [{
    title: "Unify Brand Experiences",
    url: "/unify-brand-experiences",
    description: "Create consistent, compliant brand and product experiences across all touchpoints, regions, and business units.",
    icon: Palette
  }, {
    title: "Digitalize Product Lines",
    url: "/digitalize-product-lines",
    description: "Transform legacy offerings into modern, scalable digital products built for today's markets and tomorrow's expectations.",
    icon: Monitor
  }, {
    title: "Expand Product Offerings",
    url: "/expand-product-offerings",
    description: "Identify, validate, and launch new services, bundles, and adjacent solutions that deepen customer value and drive growth.",
    icon: Layers
  }, {
    title: "Scale Digital Experiences",
    url: "/scale-digital-experiences",
    description: "Build the systems, standards, and operating models that power sustainable, enterprise-grade digital expansion.",
    icon: Maximize
  }, {
    title: "Pilot Emerging Tech",
    url: "/pilot-emerging-tech",
    description: "Rapidly prototype and validate AI, automation, and other emerging technologies to drive future-ready innovation.",
    icon: Lightbulb
  }, {
    title: "Standardize Digital Portfolio",
    url: "/standardize-digital-portfolio",
    description: "Establish consistent patterns and templates across your digital product catalog to improve efficiency and user experience.",
    icon: LayoutGrid
  }];
  return <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">What We Do</NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-[450px] overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-3 w-[500px] lg:w-[650px]">
              <div className="relative overflow-hidden rounded-lg h-full">
                <AspectRatio ratio={12 / 16} className="h-full">
                  <img src="/assets/imgs/how-innovation-works.png" alt="How innovation works" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                    <p className="font-medium text-sm">Innovating for enterprise brands</p>
                    <p className="text-xs opacity-90">Solving for tomorrows problems today</p>
                  </div>
                </AspectRatio>
              </div>
              
              <div className="overflow-y-auto max-h-[350px] py-2">
                <div className="space-y-4">
                  {serviceItems.map(service => <div key={service.title} className="mb-3">
                      <RouterListItem 
                        title={service.title} 
                        to={service.url} 
                        description={service.description} 
                        icon={service.icon} 
                        className="font-semibold py-3" 
                      />
                    </div>)}
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>;
};
export default ServiceSubNav;

// We need to manually re-export NavigationMenuLink from the UI components
// since we're using it in this file
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
export { NavigationMenuLink };
