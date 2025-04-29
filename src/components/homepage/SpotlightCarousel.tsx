
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SpotlightCarousel: React.FC = () => {
  const content = {
    title: "Expanding and scaling compliant digital offerings for regulated enterprise brands",
    description: "Convert bold ideas and emerging business models into viable, ecosystem-ready products that drive differentiation and growth.",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    bgImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80"
  };
  
  return (
    <section className="relative w-full h-[calc(100vh-5rem)]">
      <div 
        className="flex flex-col justify-center h-full w-full text-white px-4 sm:px-6 lg:px-8 relative" 
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${content.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100 animate-slide-in">
              {content.description}
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in" 
              style={{
                animationDelay: '0.2s'
              }}
            >
              <Link to={content.buttonLink}>
                <Button className="bg-white text-brand-600 hover:bg-brand-100 py-6 px-8 text-lg">
                  {content.buttonText}
                </Button>
              </Link>
              <Link to={content.secondaryButtonLink}>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                  {content.secondaryButtonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightCarousel;
