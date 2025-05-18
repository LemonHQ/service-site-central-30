
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import { format } from 'date-fns';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InsightsCarousel: React.FC = () => {
  // Get first 5 blog posts for carousel
  const featuredPosts = blogPosts.slice(0, 5);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <SectionHeading
            title="Latest Insights"
            subtitle="Expert perspectives on digital transformation"
            className="md:text-left"
          />
          
          <Link to="/blog" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              <span>View All Insights</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {featuredPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default InsightsCarousel;
