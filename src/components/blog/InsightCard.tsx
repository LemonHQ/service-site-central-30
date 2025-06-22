
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface InsightCardProps {
  post: BlogPost;
}

const InsightCard: React.FC<InsightCardProps> = ({ post }) => {
  return (
    <Link to={`/insights/${post.id}`} className="block h-full">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform">
        <div className="h-48 bg-gray-100">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="pt-6 pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-gray-100 text-gray-700 font-light">
              {post.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-xs font-light">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(post.publishDate).toLocaleDateString()}
            </div>
          </div>
          <h3 className="text-xl font-light text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-2 font-light">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="text-gray-700 hover:text-gray-900 font-light inline-flex items-center">
            Read more
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default InsightCard;
