import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { H1, Paragraph } from '../ui/Typography';

const SpotlightCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Scale Digital-First Experiences Across Global Markets",
      subtitle: "Enterprise brands trust us to expand their digital portfolios with confidence and precision",
      description: "We partner with ambitious enterprise organizations to create scalable digital ecosystems that drive sustainable growth across multiple markets and product offerings.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      cta: "Explore Our Approach",
      ctaLink: "/about#approach"
    },
    {
      title: "Transform Legacy Operations into Digital Powerhouses",
      subtitle: "From traditional processes to cutting-edge digital experiences",
      description: "Help established brands navigate digital transformation while maintaining operational excellence and customer trust built over decades.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      cta: "View Case Studies",
      ctaLink: "/case-studies"
    },
    {
      title: "Co-Create the Future of Your Industry",
      subtitle: "Innovation partnerships that redefine what's possible",
      description: "Collaborate with our experts to identify opportunities, prototype solutions, and scale innovations that position your brand as an industry leader.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      cta: "Start Your Journey",
      ctaLink: "/getting-started"
    }
  ];

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-brand-400/20 text-brand-200 rounded-full text-sm font-medium backdrop-blur-sm">
              {slides[currentSlide].subtitle}
            </span>
          </div>
          
          <H1 className="mb-8 text-white leading-tight">
            {slides[currentSlide].title}
          </H1>
          
          <Paragraph className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-400 hover:bg-brand-500">
              <a href={slides[currentSlide].ctaLink}>
                {slides[currentSlide].cta}
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={previousSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightCarousel;
