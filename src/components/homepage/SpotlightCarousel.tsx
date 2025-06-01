import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const SpotlightCarousel: React.FC = () => {
  const content = {
    title: "Advancing digital plays for multi-line enterprise brands",
    description: "Launching and expanding digital portfolios at scale to unlock new revenue streams, expand products distribution, and capitalize on emerging opportunities.",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    bgImage: "/assets/imgs/flying-paper-planes-hero-image.png"
  };
  return <section className="relative w-full h-[calc(100vh-5rem)]">
      <div className="flex flex-col justify-center h-full w-full text-white px-4 sm:px-6 lg:px-8 relative" style={{
      backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${content.bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in font-light text-gray-50">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100 animate-slide-in">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {/**
              <Link to={content.buttonLink}>
                <Button className="bg-white text-brand-600 hover:bg-brand-100 py-6 px-8 text-lg">
                  {content.buttonText}
                </Button>
              </Link>
               */}
              <Link to={content.secondaryButtonLink}>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SpotlightCarousel;