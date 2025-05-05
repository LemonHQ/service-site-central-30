
import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar, Share, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const BlogDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Find the blog post based on the URL parameter
  const post = useMemo(() => {
    return blogPosts.find(p => p.id === postId);
  }, [postId]);
  
  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  // Format date
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = useMemo(() => {
    return blogPosts
      .filter(p => p.category === post.category && p.id !== post.id)
      .slice(0, 3);
  }, [post]);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6">
          <Link to="/blog" className="inline-flex items-center text-brand-400 hover:text-brand-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to insights
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center mb-8">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-gray-600 text-sm">{post.author.role}</p>
            </div>
            <div className="ml-auto flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{formattedDate}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none mb-12 [&_img]:py-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t border-b py-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 flex items-center">
                <Tag className="h-4 w-4 mr-2" /> Tags:
              </span>
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-gray-100">
                  {tag}
                </Badge>
              ))}
              
              <div className="ml-auto flex items-center">
                <Share className="h-4 w-4 mr-2" />
                <span>Share this article</span>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <Card className="bg-gray-50">
              <CardContent className="p-6 flex items-center">
                <Avatar className="h-20 w-20 mr-6">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xl font-semibold mb-1">About {post.author.name}</h4>
                  <p className="text-gray-600 mb-2">{post.author.role}</p>
                  <p className="text-sm">
                    Expert in digital transformation with over a decade of experience helping organizations 
                    navigate technological changes and implement innovative solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                  <Card className="h-full overflow-hidden hover:shadow-md transition-all">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{relatedPost.category}</p>
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-brand-400 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="text-center bg-brand-50 rounded-lg p-8 md:p-12 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to start your digital journey?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your business goals through innovative digital solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-400 hover:bg-brand-500">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetail;
