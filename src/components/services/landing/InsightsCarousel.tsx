
import React, { useMemo } from 'react';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import CarouselSection from './CarouselSection';
import { shuffleArray } from '@/lib/utils';

interface InsightsCarouselProps {
  limit?: number;
}

const InsightsCarousel: React.FC<InsightsCarouselProps> = ({ limit = 6 }) => {
  // Shuffle blog posts once when component mounts
  const shuffledBlogPosts = useMemo(() => shuffleArray(blogPosts), []);

  return (
    <CarouselSection
      title="Insights"
      subtitle="Latest thinking on digital transformation"
      items={shuffledBlogPosts}
      renderItem={(post) => <BlogCard post={post} />}
      bgColor="bg-gray-50"
      limit={limit}
      autoplay={true}
    />
  );
};

export default InsightsCarousel;
