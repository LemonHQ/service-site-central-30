
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import AccessibleLink from '@/components/ui/AccessibleLink';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Format date
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Get author initial safely
  const authorInitial = post.author && post.author.name ? post.author.name.charAt(0) : '?';

  return (
    <AccessibleLink 
      to={`/blog/${post.id}`} 
      className="block h-full"
      ariaLabel={`Read full article: ${post.title}`}
      description={`Published on ${formattedDate} - ${post.readTime} minute read`}
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform">
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={post.featuredImage}
            alt={`Featured image for article: ${post.title}`}
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-brand-400 text-white">{post.category}</Badge>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          
          <div className="flex items-center mt-auto pt-4">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src={post.author?.avatar} alt={post.author?.name || 'Author'} />
              <AvatarFallback>{authorInitial}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author?.name || 'Anonymous'}</span>
          </div>
          
          <div className="flex items-center text-brand-400 hover:text-brand-500 font-medium mt-4">
            Read Article <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </AccessibleLink>
  );
};

export default BlogCard;
