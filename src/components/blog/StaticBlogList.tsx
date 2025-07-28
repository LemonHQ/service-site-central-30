import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const StaticBlogList = () => {
  const blogPosts = [
    {
      id: "traditional-vs-ai-search",
      title: "An analysis of how brands and products are being percieved by the new content consumer - AI",
      excerpt: "Exploring emerging trends and technologies shaping the next decade of enterprise digital transformation.",
      featuredImage: "/assets/imgs/ordering-food.jpg",
      publishDate: "2024-01-15",
      readTime: 5,
      category: "AI",
      author: {
        name: "Mohammed Naheemuddin",
        avatar: "/assets/imgs/abdul-profile.jpg",
        role: "Digital Media Lead"
      },
      path: "/blog/traditional-vs-ai-search"
    },
    {
      id: "consulting-industry-evolution",
      title: "How Consulting Firms Are Evolving in the Digital Age",
      excerpt: "An analysis of how traditional consulting firms are adapting their methodologies for digital-first enterprises.",
      featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      publishDate: "2024-01-12",
      readTime: 6,
      category: "Industry Analysis",
      author: {
        name: "Mark Thompson",
        avatar: "/assets/imgs/husain-profile.jpg",
        role: "Industry Analyst"
      },
      path: "/blog/consulting-industry-evolution"
    },
    {
      id: "innovation-frameworks-2024",
      title: "Innovation Frameworks for Enterprise Scale",
      excerpt: "Proven frameworks and methodologies for driving innovation at enterprise scale in 2024 and beyond.",
      featuredImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      publishDate: "2024-01-10",
      readTime: 7,
      category: "Innovation",
      author: {
        name: "Dr. Emily Chen",
        avatar: "/assets/imgs/abdul-profile.jpg",
        role: "Innovation Consultant"
      },
      path: "/blog/innovation-frameworks-2024"
    },
    {
      id: "digital-leadership-skills",
      title: "Essential Skills for Digital Transformation Leaders",
      excerpt: "The key competencies and skills that digital transformation leaders need to succeed in today's enterprise environment.",
      featuredImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      publishDate: "2024-01-08",
      readTime: 5,
      category: "Leadership",
      author: {
        name: "Robert Williams",
        avatar: "/assets/imgs/husain-profile.jpg",
        role: "Transformation Lead"
      },
      path: "/blog/digital-leadership-skills"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thought leadership, industry trends, and strategic perspectives on digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} to={post.path} className="block h-full">
            <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gray-700 text-white font-light">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3 font-light">
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-light mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2 font-light">{post.excerpt}</p>
                
                <div className="flex items-center mt-auto pt-4">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback className="font-light">{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-light text-gray-700">{post.author.name}</span>
                </div>
                
                <div className="flex items-center text-gray-700 hover:text-gray-900 font-light mt-4">
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StaticBlogList;