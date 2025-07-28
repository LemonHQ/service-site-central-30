
import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar, Share, Tag, Copy, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { useToast } from "@/hooks/use-toast";
import { H1, H3, H4, Paragraph } from '@/components/ui/Typography';

const BlogDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { toast } = useToast();
  
  // Find the blog post based on the URL parameter
  const post = useMemo(() => {
    return blogPosts.find(p => p.id === postId);
  }, [postId]);
  
  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog-1" replace />;
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

  // Handle copy to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "The article URL has been copied to your clipboard.",
    });
  };

  // Social sharing handlers
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6">
          <Link to="/blog-1" className="inline-flex items-center text-brand-400 hover:text-brand-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to insights
          </Link>
        </div>
        
        <article className="max-w-4xl mx-auto">
          <Badge className="mb-4">{post.category}</Badge>
          <H1 className="mb-6">{post.title}</H1>
          
          <div className="flex items-center mb-8">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <Paragraph className="font-medium mb-0">{post.author.name}</Paragraph>
              <Paragraph className="text-gray-600 text-sm mb-0">{post.author.role}</Paragraph>
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
            className="prose prose-lg max-w-none mb-12 [&_img]:py-6 [&_img]:rounded-lg [&_h3:contains('Google\'s_Gemini_AI_integrated_into_search')_+_*_img]:mx-auto [&_h3:contains('Google\'s_Gemini_AI_integrated_into_search')_+_*_img]:block"
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
                <HoverCard openDelay={100} closeDelay={200}>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                      <Share className="h-4 w-4 mr-2" />
                      <span>Share</span>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-2" align="end">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-white hover:bg-blue-50" 
                        onClick={() => handleShare('facebook')}
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-white hover:bg-blue-50" 
                        onClick={() => handleShare('twitter')}
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4 text-blue-400" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-white hover:bg-blue-50" 
                        onClick={() => handleShare('linkedin')}
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 text-blue-700" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-white hover:bg-gray-50" 
                        onClick={handleCopyLink}
                        aria-label="Copy link"
                      >
                        <Copy className="h-4 w-4 text-gray-600" />
                      </Button>
                    </div>
                  </HoverCardContent>
                </HoverCard>
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
                  <H4 className="mb-1">About {post.author.name}</H4>
                  <Paragraph className="text-gray-600 mb-2">{post.author.role}</Paragraph>
                  <Paragraph className="text-sm mb-0">
                    Expert in digital transformation with over a decade of experience helping organizations 
                    navigate technological changes and implement innovative solutions.
                  </Paragraph>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <H3 className="mb-8">Related Articles</H3>
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
                      <Paragraph className="text-sm text-gray-500 mb-2">{relatedPost.category}</Paragraph>
                      <H4 className="mb-2 group-hover:text-brand-400 transition-colors">
                        {relatedPost.title}
                      </H4>
                      <Paragraph className="text-sm line-clamp-2 mb-0">{relatedPost.excerpt}</Paragraph>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="text-center bg-brand-50 rounded-lg p-8 md:p-12 max-w-5xl mx-auto">
          <H3 className="mb-4">Ready to start your digital journey?</H3>
          <Paragraph className="text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your business goals through innovative digital solutions.
          </Paragraph>
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
