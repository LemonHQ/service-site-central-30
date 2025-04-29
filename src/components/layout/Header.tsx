
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ServiceSubNav from '../navigation/ServiceSubNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links - Updated names
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/case-studies' },
    { name: 'Resources', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path ? 'active-nav-link' : 'nav-link';
    }
    return location.pathname.startsWith(path) ? 'active-nav-link' : 'nav-link';
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 z-50">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/')} font-medium`}
            >
              Home
            </Link>
            
            {/* Service SubNav - what we do */}
            <div className="relative flex items-center">
              <ServiceSubNav />
            </div>
            
            {navLinks.slice(1).map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${isActive(link.path)} font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Now links to lead qualification journey */}
          <div className="hidden md:block">
            <Link to="/lead-qualification">
              <Button className="bg-brand-400 hover:bg-brand-500">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-brand-400"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-6 px-8">
            <Link 
              to="/" 
              className={`${isActive('/')} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`${isActive('/services')} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </Link>
            {navLinks.slice(1).map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${isActive(link.path)} text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/lead-qualification" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full mt-2 bg-brand-400 hover:bg-brand-500">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
