
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import ServiceSubNav from '../navigation/ServiceSubNav';
import ThemeToggle from '../ui/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpandedService, setMobileExpandedService] = useState<string | null>(null);
  const [mobileExpandedIndustry, setMobileExpandedIndustry] = useState<string | null>(null);
  const [mobileExpandedApproach, setMobileExpandedApproach] = useState<string | null>(null);
  const location = useLocation();

  // Navigation links - Removed 'Home' from the array
  const navLinks = [
    { name: 'Our Work', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Service items with direct URLs
  const serviceItems = [
    { name: "Unify Brand Experiences", path: "/unify-brand-experiences" },
    { name: "Digitalize Product Lines", path: "/digitalize-product-lines" },
    { name: "Expand Product Offerings", path: "/expand-product-offerings" },
    { name: "Scale Digital Experiences", path: "/scale-digital-experiences" },
    { name: "Pilot Emerging Tech", path: "/pilot-emerging-tech" },
    { name: "Standardize Digital Portfolio", path: "/standardize-digital-portfolio" }
  ];

  // Industry items
  const industryItems = [
    { name: "Insurance", path: "/industries/insurance", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Digital solutions for insurance providers" },
    { name: "Finance", path: "/industries/finance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Transformative tech for financial services" },
    { name: "Healthcare", path: "/industries/healthcare", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80", description: "Patient-centered digital solutions" },
    { name: "Retail", path: "/industries/retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Omnichannel retail experiences" }
  ];
  
  // Our Approach items - Updated to include Co-Innovate and remove Extend
  const approachItems = [
    { name: "Co-Create", path: "/approach/co-create", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Collaborative innovation approach" },
    { name: "Co-Innovate", path: "/approach/co-innovate", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Rapid product innovation framework" }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path ? 'active-nav-link' : 'nav-link';
    }
    return location.pathname.startsWith(path) ? 'active-nav-link' : 'nav-link';
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleMobileService = (serviceId: string) => {
    if (mobileExpandedService === serviceId) {
      setMobileExpandedService(null);
    } else {
      setMobileExpandedService(serviceId);
    }
  };

  const toggleMobileIndustry = (industryId: string) => {
    if (mobileExpandedIndustry === industryId) {
      setMobileExpandedIndustry(null);
    } else {
      setMobileExpandedIndustry(industryId);
    }
  };
  
  const toggleMobileApproach = (approachId: string) => {
    if (mobileExpandedApproach === approachId) {
      setMobileExpandedApproach(null);
    } else {
      setMobileExpandedApproach(approachId);
    }
  };

  
  return (
    <header className="sticky top-0 bg-background dark:bg-background border-b border-gray-100 dark:border-gray-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE0IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTE0IDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTE0LjQxNCAyMC43OTYxSDExMS4xNjlMMTA0LjI3MyA5LjM2OTc5SDEwNC4xOTFDMTA0LjIzMiA5Ljk4MTkxIDEwNC4yNyAxMC42Mzc4IDEwNC4zMDIgMTEuMzQwMkMxMDQuMzM3IDEyLjAzOTggMTA0LjM2IDEyLjc0NTIgMTA0LjM3NSAxMy40NTA2VjIwLjc5NjFIMTAyLjAyOFY2LjIyNzU0SDEwNS4yNTJMMTEyLjEyOCAxNy41NzIzSDExMi4xOUMxMTIuMTYzIDE3LjAyNzIgMTEyLjEzNCAxNi40MDM0IDExMi4xMDggMTUuNjk1MUMxMTIuMDgyIDE0Ljk4NjggMTEyLjA2MSAxNC4zMDE4IDExMi4wNDcgMTMuNjM0M1Y2LjIyNzU0SDExNC40MTRWMjAuNzk2MVoiIGZpbGw9IiMxQzIyMjgiLz4KPHBhdGggZD0iTTk3LjA5MDUgMTMuNDkxM0M5Ny4wOTA1IDE1LjAwMTIgOTYuODQyOCAxNi4zMTU4IDk2LjM0NzIgMTcuNDM4Qzk1Ljg1MTcgMTguNTYwMiA5NS4wOTA5IDE5LjQzNDcgOTQuMDcwNyAyMC4wNjE0QzkzLjA1MDUgMjAuNjg4MSA5MS43NzA5IDIxIDkwLjIzNDcgMjFDODguNjk4NiAyMSA4Ny40MDE0IDIwLjY4ODEgODYuMzkgMjAuMDYxNEM4NS4zNzU2IDE5LjQzNDcgODQuNjIwNiAxOC41NTczIDg0LjEyNTEgMTcuNDI5M0M4My42Mjk2IDE2LjMwMTIgODMuMzc4OSAxNC45ODA4IDgzLjM3ODkgMTMuNDcwOUM4My4zNzg5IDExLjk2MDkgODMuNjI2NyAxMC42NjY3IDg0LjEyNTEgOS41NDE1OUM4NC42MjA2IDguNDE5MzUgODUuMzc1NiA3LjU0NzggODYuMzkgNi45Mjk4NUM4Ny40MDQ0IDYuMzExODkgODguNjkyNyA2IDkwLjI1OCA2QzkxLjgyMzMgNiA5My4wNzA5IDYuMzA4OTggOTQuMDgyNCA2LjkyOTg1Qzk1LjA5NjcgNy41NDc4IDk1Ljg1MTcgOC40MTkzNSA5Ni4zNDcyIDkuNTQxNTlDOTYuODQyOCAxMC42NjM4IDk3LjA5MDUgMTEuOTc4NCA5Ny4wOTA1IDEzLjQ4ODNWMTMuNDkxM1pNODYuMTMzNSAxMy40OTEzQzg2LjEzMzUgMTUuMTM4MiA4Ni40NTk5IDE2LjQyOTUgODcuMTEyOSAxNy4zNjgxQzg3Ljc2NTggMTguMzA2NiA4OC44MDY0IDE4Ljc3NTkgOTAuMjM0NyAxOC43NzU5QzkxLjY2MyAxOC43NzU5IDkyLjcyMTEgMTguMzA2NiA5My4zNjgyIDE3LjM2ODFDOTQuMDE1MyAxNi40Mjk1IDk0LjMzODkgMTUuMTM4MiA5NC4zMzg5IDEzLjQ5MTNDOTQuMzM4OSAxMS44NDQzIDk0LjAxODIgMTAuNTUzMSA5My4zNzk5IDkuNjE0NDZDOTIuNzQxNSA4LjY3NTg2IDkxLjcwMDkgOC4yMDY1NyA5MC4yNTggOC4yMDY1N0M4OC44MTUyIDguMjA2NTcgODcuNzg2MiA4LjY3NTg2IDg3LjEyNDUgOS42MTQ0NkM4Ni40NjU4IDEwLjU1MzEgODYuMTMzNSAxMS44NDQzIDg2LjEzMzUgMTMuNDkxM1YxMy40OTEzWiIgZmlsbD0iIzFDMjIyOCIvPgo8cGF0aCBkPSJNNjkuNTQ0OCAyMC43OTYxTDY1LjU0NTYgOC44NTk2OEg2NS40NjRDNjUuNDc4NiA5LjEzMDc3IDY1LjQ5OSA5LjUxNTUzIDY1LjUyNTIgMTAuMDA0QzY1LjU1MTUgMTAuNTA5NSA2NS41NzQ4IDExLjA0ODggNjUuNTk4MSAxMS42MjU5QzY1LjYxODUgMTIuMjAzMSA2NS42MjcyIDEyLjc0NTIgNjUuNjI3MiAxMy4yNDY2VjIwLjc5NjFINjMuMjgwOFY2LjIyNzU0SDY2LjkxMjdMNzAuNzQ4NyAxNy42NzQzSDcwLjgzMDNMNzQuODI5NSA2LjIyNzU0SDc4LjQ2MTVWMjAuNzk2MUg3NS45NzIyVjEzLjEyNDJDNzUuOTcyMiAxMi42NjA3IDc1Ljk4MzggMTIuMTUzNSA3Ni4wMDEzIDExLjYwMjZDNzYuMDIxNyAxMS4wNTE3IDc2LjA0MjEgMTAuNTMyOCA3Ni4wNjI1IDEwLjA0MzFDNzYuMDgyOSA5LjU1MzQyIDc2LjEwMDQgOS4xNjU3NCA3Ni4xMTIxIDguODgwMDhINzYuMDMwNUw3MS44NjggMjAuNzk2MUg2OS41NDE5SDY5LjU0NDhaIiBmaWxsPSIjMUMyMjI4Ii8+CjxwYXRoIGQ9Ik01OC4zNDI3IDIwLjc5NjFINTAuMDU4NlY2LjIyNzU0SDU4LjM0MjdWOC40MTA3OUg1Mi42NzAzVjEyLjEyNDRINTcuOTc1NFYxNC4zMDc2SDUyLjY3MDNWMTguNTkyNUg1OC4zNDI3VjIwLjc5NjFaIiBmaWxsPSIjMUMyMjI4Ii8+CjxwYXRoIGQ9Ik0zNyAyMC43OTYxVjYuMjI3NTRIMzkuNjExN1YxOC41OTI1SDQ1LjY5MjJWMjAuNzk2MUgzN1oiIGZpbGw9IiMxQzIyMjgiLz4KPHBhdGggZD0iTTExLjI4MTkgMC4wMTM4ODU0QzAuOTEwMjU2IC0wLjMwMTIwMyAwLjA2MTI2NzIgNC43NTc3MiAwIDE0LjAxNzhDMC4wNTI1MTQ4IDIzLjI3NzkgMC45NDUyNjYgMjguMjkzMSAxMS4yODE5IDI3Ljk4NjdDMjEuNTM5OCAyOC4yOTMxIDIyLjUwMjYgMjMuMjM0MiAyMi41NjM4IDE0LjAxNzhDMjIuNDkzOCA0LjgxODk5IDIxLjUzOTggLTAuMzAxMjAzIDExLjI4MTkgMC4wMTM4ODU0Wk0xNS42ODQ0IDIyLjIxMDFINi45MzE5NVY2LjQ1NTdIMTUuNjg0NFYyMi4yMTAxWiIgZmlsbD0iIzFDMjIyOCIvPgo8L3N2Zz4K" 
              alt="LemonHQ Logo" 
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation - Fixed spacing and alignment */}
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

          {/* Theme toggle and placeholder div */}
          <div className="hidden md:flex items-center gap-4">
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button 
              className="text-gray-600 hover:text-brand-400 dark:text-gray-300 dark:hover:text-brand-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Updated to match desktop changes */}
      {isMenuOpen && (
        <div className="md:hidden bg-background dark:bg-background border-b border-gray-100 dark:border-gray-800 animate-fade-in">
          <nav className="flex flex-col space-y-2 py-6 px-8">
            <Link 
              to="/" 
              className={`${isActive('/')} text-lg py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* What We Do - with sub-menu */}
            <div className="flex flex-col">
              <button 
                className={`flex items-center justify-between text-lg py-2 ${location.pathname.includes('/unify-brand-experiences') || 
                  location.pathname.includes('/digitalize-product-lines') || 
                  location.pathname.includes('/expand-product-offerings') || 
                  location.pathname.includes('/scale-digital-experiences') || 
                  location.pathname.includes('/pilot-emerging-tech') || 
                  location.pathname.includes('/standardize-digital-portfolio') ? 'text-brand-600 font-medium' : ''}`}
                onClick={() => toggleMobileService('services')}
              >
                <span>What We Do</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedService === 'services' ? 'transform rotate-180' : ''}`} />
              </button>
              
              {mobileExpandedService === 'services' && (
                <div className="ml-4 pl-4 border-l border-gray-200 py-2 space-y-3">
                  {serviceItems.map((service) => (
                    <div key={service.name}>
                      <Link
                        to={service.path}
                        className="flex items-center py-2 text-gray-700 hover:text-brand-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ChevronRight className="h-3 w-3 mr-2" />
                        <span>{service.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Our Approach - with sub-menu - Updated items */}
            <div className="flex flex-col">
              <button 
                className={`flex items-center justify-between text-lg py-2 ${location.pathname.includes('/approach/') ? 'text-brand-600 font-medium' : ''}`}
                onClick={() => toggleMobileApproach('approach')}
              >
                <span>Our Approach</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedApproach === 'approach' ? 'transform rotate-180' : ''}`} />
              </button>
              
              {mobileExpandedApproach === 'approach' && (
                <div className="ml-4 pl-4 border-l border-gray-200 py-2 space-y-3">
                  {approachItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        className="flex items-center py-2 text-gray-700 hover:text-brand-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ChevronRight className="h-3 w-3 mr-2" />
                        <span>{item.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Industries - with sub-menu */}
            <div className="flex flex-col">
              <button 
                className={`flex items-center justify-between text-lg py-2 ${location.pathname.includes('/industries/') ? 'text-brand-600 font-medium' : ''}`}
                onClick={() => toggleMobileIndustry('industries')}
              >
                <span>Industries</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileExpandedIndustry === 'industries' ? 'transform rotate-180' : ''}`} />
              </button>
              
              {mobileExpandedIndustry === 'industries' && (
                <div className="ml-4 pl-4 border-l border-gray-200 py-2 space-y-3">
                  {industryItems.map((industry) => (
                    <div key={industry.name}>
                      <Link
                        to={industry.path}
                        className="flex items-center py-2 text-gray-700 hover:text-brand-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ChevronRight className="h-3 w-3 mr-2" />
                        <span>{industry.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Main nav links */}
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${isActive(link.path)} text-lg py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
