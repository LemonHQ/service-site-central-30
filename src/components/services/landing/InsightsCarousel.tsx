
import React from 'react';
import { CarouselItem } from "@/components/ui/carousel";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import CarouselSection from './CarouselSection';
import { blogPosts } from '@/data/blogPosts';
import { format } from 'date-fns';

interface InsightsCarouselProps {
  limit?: number;
  title?: string;
  subtitle?: string;
}

const InsightsCarousel: React.FC<InsightsCarouselProps> = ({
  limit = 6,
  title = "Latest Insights",
  subtitle = "Expert perspectives and analysis on digital transformation"
}) => {
  // Get limited number of blog posts
  const limitedPosts = blogPosts.slice(0, limit);
  
  return (
    <CarouselSection
      title={title}
      subtitle={subtitle}
    >
      {limitedPosts.map((post, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col">
            {post.imageUrl && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="flex flex-col flex-grow p-5 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-900">{post.title}</h3>
              
              <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              
              <Link to={`/blog/${post.id}`}>
                <Button variant="link" className="p-0 flex items-center gap-1 text-brand-600">
                  Read more <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselSection>
  );
};

export default InsightsCarousel;
