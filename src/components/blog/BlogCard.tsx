
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

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

  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
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
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="h-8 w-8 rounded-full mr-3"
          />
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
        
        <Link 
          to={`/blog/${post.id}`}
          className="flex items-center text-brand-400 hover:text-brand-500 font-medium mt-4"
        >
          Read Article <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
