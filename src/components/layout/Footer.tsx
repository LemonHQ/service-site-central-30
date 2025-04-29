
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Github, Youtube, CheckCircle, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Footer = () => {
  // Service links
  const serviceLinks = [
    { name: 'Design', path: '/services/design' },
    { name: 'UI Engineering', path: '/services/ui-engineering' },
    { name: 'Application Development', path: '/services/application-development' },
    { name: 'Application Modernization', path: '/services/application-modernization' },
    { name: 'Data Engineering & Modernization', path: '/services/data-engineering' },
    { name: 'AI Engineering', path: '/services/ai-engineering' },
  ];

  // Industry links
  const industryLinks = [
    { name: 'Small and mid level enterprises', path: '/industries/sme' },
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Fintech', path: '/industries/fintech' },
    { name: 'Construction', path: '/industries/construction' },
    { name: 'Logistics', path: '/industries/logistics' },
    { name: 'Social & NGO', path: '/industries/social-ngo' },
    { name: 'Insurtech', path: '/industries/insurtech' },
  ];

  // Quick links
  const quickLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Guides', path: '/guides' },
    { name: 'Talks', path: '/talks' },
    { name: 'Serverless', path: '/serverless' },
    { name: 'Serverless Tools', path: '/serverless-tools' },
    { name: 'Serverless Architecture', path: '/serverless-architecture' },
  ];

  // Company links
  const companyLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Your Next Tech Leader', path: '/about#tech-leader' },
    { name: 'AntVerse', path: '/antverse' },
    { name: 'Careers', path: '/careers' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Brand Guidelines', path: '/brand-guidelines' },
    { name: 'Trust Center', path: '/trust-center' },
  ];

  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // Reset form
    setEmail('');
  };

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Industries</h4>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  {link.name === 'Trust Center' && <CheckCircle className="w-4 h-4 mr-2 text-brand-500" />}
                  <Link to={link.path} className="text-gray-600 hover:text-brand-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-brand-600">UK & Europe</h4>
              <p className="text-gray-600">Lemon Marketing & Consultancy Ltd,</p>
              <p className="text-gray-600">128, City Road, London,England, EC1V 2NX</p>
              <div className="text-gray-600 flex items-center mt-2">
                <Phone size={16} className="mr-2 text-brand-500" />
                <a href="tel:+44-7570-631159" className="hover:text-brand-500 transition-colors">
                  +44-7570-631159
                </a>
              </div>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 border-brand-400 text-brand-500 hover:bg-brand-100"
                  onClick={() => window.open("https://maps.google.com/?q=128, City Road, London, England, EC1V 2NX", "_blank")}
                >
                  <MapPin size={16} />
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-brand-600">Middle East</h4>
              <p className="text-gray-600">Lemon Adv, & Pub. LLC</p>
              <p className="text-gray-600">Damas 14 Office Tower, Suite #1948</p>
              <p className="text-gray-600">Al Zahra Street, Sharjah, United Arab Emirates</p>
              <div className="text-gray-600 flex items-center mt-2">
                <Phone size={16} className="mr-2 text-brand-500" />
                <a href="tel:+971-6-5629519" className="hover:text-brand-500 transition-colors">
                  +971-6-5629519
                </a>
              </div>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 border-brand-400 text-brand-500 hover:bg-brand-100"
                  onClick={() => window.open("https://maps.google.com/?q=Damas 14 Office Tower, Al Zahra Street, Sharjah, UAE", "_blank")}
                >
                  <MapPin size={16} />
                  Get Directions
                </Button>
              </div>
            </div>
            
            {/* Get in touch section */}
            <div className="mt-6 space-y-3">
              <h4 className="text-lg font-semibold text-brand-600">Get in Touch</h4>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-brand-500" />
                <a href="mailto:create@lemonhq.io" className="text-brand-500 hover:underline">
                  create@lemonhq.io
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Link to="/contact">
                  <Button className="bg-brand-400 hover:bg-brand-500">
                    Contact Us
                  </Button>
                </Link>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="border-brand-400 text-brand-500 hover:bg-brand-100">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Meeting
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    {/* Google Calendar embed */}
                    <div className="p-4" id="calendar-container">
                      {/* The script will attach the button here */}
                      <div className="w-full" id="calendar-button-container"></div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-600">Follow</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Certifications/Icons */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-xs">ISO 27001</div>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-600">Subscribe to our newsletter</h4>
            <p className="text-gray-600 mb-4">
              Our bi-weekly newsletter delivers serverless, AI, tech trends, podcasts and blogs straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 flex-grow"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-accent-400 text-white rounded-md hover:bg-accent-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-6">
              <img 
                src="/lovable-uploads/50fa6423-029f-4a1e-87c3-051a066b6c9b.png" 
                alt="Newsletter Logo" 
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <Separator className="my-8" />
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-3">
            © 2025 LemonHQ. All rights reserved.
          </p>
          <p className="mb-2">
            UAE registered company number 567068, at Damas 14 Office tower Suite 1948, Sharjah, UAE
          </p>
          <p>
            England & Wales registered company number 14313332 at 128, City Road, London, England, EC1V 2NX
          </p>
        </div>
      </div>
      
      {/* Google Calendar Script */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Add Google Calendar Scripts
        const calendarCss = document.createElement('link');
        calendarCss.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
        calendarCss.rel = 'stylesheet';
        document.head.appendChild(calendarCss);

        const calendarScript = document.createElement('script');
        calendarScript.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        calendarScript.async = true;
        document.head.appendChild(calendarScript);

        // Initialize Calendar Button
        calendarScript.onload = function() {
          window.calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0B2joTaaMkpn7ocWprDwd5JFjcDq8YF6qkJoym3LDGtbJSIULDeYEkUX3_OygWAmciwvXsjhs5?gv=true',
            color: '#039BE5',
            label: 'Book an appointment',
            target: document.getElementById('calendar-button-container'),
          });
        };
      ` }} />
    </footer>
  );
};

export default Footer;
