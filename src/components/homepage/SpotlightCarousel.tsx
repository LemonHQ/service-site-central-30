
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const SpotlightCarousel: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const content = {
    title: "Advancing digital plays for multi-line product businesses",
    description: "Your partner for executing digital business transformation roadmaps at scale",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact",
    bgImage: "/assets/imgs/flying-paper-planes-hero-image.png"
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Show content even if image fails
  };

  return (
    <section className="relative w-full h-[calc(100vh-5rem)]">
      {/* Background Image with Progressive Loading */}
      <div className="absolute inset-0 overflow-hidden">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-600" />
        )}
        {!imageError && (
          <img
            src={content.bgImage}
            alt="Flying paper planes representing digital transformation"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="eager"
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center h-full w-full text-white px-4 sm:px-6 lg:px-8 relative z-10">
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
    </section>
  );
};

export default SpotlightCarousel;
