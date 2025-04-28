
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  // Service links
  const serviceLinks = [
    { name: 'Validating Product Ideas', path: '/services/validating-product-ideas' },
    { name: 'Ideating Product Concepts', path: '/services/ideating-product-concepts' },
    { name: 'Designing Experiences', path: '/services/designing-experiences' },
    { name: 'Launching New Products', path: '/services/launching-products' },
    { name: 'Scaling Products', path: '/services/scaling-products' },
  ];

  // More service links
  const moreServiceLinks = [
    { name: 'Expand Product Offerings', path: '/services/expand-product-offerings' },
    { name: 'Standardize Technology', path: '/services/standardize-technology' },
    { name: 'Pilot Emerging Tech', path: '/services/pilot-emerging-tech' },
    { name: 'Connect Digital Ecosystems', path: '/services/connect-ecosystems' },
    { name: 'Optimize Digital Portfolios', path: '/services/optimize-portfolios' },
    { name: 'Unify Brand Experiences', path: '/services/unify-brand-experiences' },
  ];

  // Company links
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Approach', path: '/about#approach' },
    { name: 'Team', path: '/about#team' },
    { name: 'Careers', path: '/about#careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-brand-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">ElevateDigital</h4>
            <p className="text-gray-300 mb-4">
              Empowering enterprise product teams to innovate, scale, and transform digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-brand-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-brand-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">More Services</h4>
            <ul className="space-y-3">
              {moreServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ElevateDigital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
