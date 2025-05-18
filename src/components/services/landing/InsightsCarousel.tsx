
import React from 'react';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import CarouselSection from './CarouselSection';

interface InsightsCarouselProps {
  limit?: number;
}

const InsightsCarousel: React.FC<InsightsCarouselProps> = ({ limit = 6 }) => {
  return (
    <CarouselSection
      title="Insights"
      subtitle="Latest thinking on digital transformation"
      items={blogPosts}
      renderItem={(post) => <BlogCard post={post} />}
      bgColor="bg-gray-50"
      limit={limit}
    />
  );
};

export default InsightsCarousel;
