import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Database, Globe } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  // State for animated stats
  const [years, setYears] = useState(0);
  const [products, setProducts] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [portfolios, setPortfolios] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Target values for stats
  const targetYears = 17;
  const targetProducts = 50;
  const targetTransactions = 10; // For $10M+
  const targetPortfolios = 10;

  // Set up Intersection Observer to detect when stats are in viewport
  useEffect(() => { 
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When stats enter viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, no need to keep observing
          if (statsRef.current) {
            observer.unobserve(statsRef.current);
          }
        }
      },
      {
        // Start animation when element is 10% visible
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animation effect - only starts when isVisible becomes true
  useEffect(() => {
    if (!isVisible) return;

    // Duration for the animation in milliseconds
    const animationDuration = 1500;
    // Number of steps in the animation
    const steps = 50;
    // Time for each step
    const stepTime = animationDuration / steps;

    // Increment values for each step
    const yearIncrement = targetYears / steps;
    const productIncrement = targetProducts / steps;
    const transactionIncrement = targetTransactions / steps;
    const portfolioIncrement = targetPortfolios / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setYears(Math.min(Math.round(yearIncrement * currentStep), targetYears));
      setProducts(Math.min(Math.round(productIncrement * currentStep), targetProducts));
      setTransactions(Math.min(Math.round(transactionIncrement * currentStep), targetTransactions));
      setPortfolios(Math.min(Math.round(portfolioIncrement * currentStep), targetPortfolios));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-700">
              Why Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Brands today are under increasing pressure to deliver digital-first experiences. 
              We specialize in the complex realities enterprise brands face in today's modern digital ecosystems: regulatory scrutiny, brand consistency, uniformity, standards and reusability. We're not just digital enablers — we're strategic partners who understand how to move multi-market, multi-product enterprises from idea to market to scale, reliably and efficiently.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Portfolio perspective</h4>
                  <p className="text-gray-600">Experience working with enterprise brands with diverse business and product lines.</p>
                </div>
              </div>
            
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Users className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ecosystem approach</h4>
                  <p className="text-gray-600">Harnessing collaborative partnerships, platforms, and technologies to deliver integrated value across the digital landscape.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Globe className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Compliant by design</h4>
                  <p className="text-gray-600">Architecting products and platforms with built-in compliance controls to support evolving regulations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4">
                  <Database className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Standardization</h4>
                  <p className="text-gray-600">Creating a foundation for scaling products to new markets, customers, and targeted segments.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link to="/about">
                <Button variant="outline" className="border-brand-300 text-brand-600 hover:bg-brand-100">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div ref={statsRef} className="bg-brand-100 rounded-lg p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2 animate-fade-in">{years}+</h3>
                  <p className="text-gray-600">Years of experience</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2 animate-fade-in">{products}+</h3>
                  <p className="text-gray-600">Products launched</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2 animate-fade-in">${transactions}M+</h3>
                  <p className="text-gray-600">Transactions enabled</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-4xl font-bold text-brand-500 mb-2 animate-fade-in">{portfolios}+</h3>
                  <p className="text-gray-600">Portfolios under management</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
