import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Clock, Share2, Copy, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const DigitalLeadershipSkillsPage = () => {
  const post = {
    id: "digital-leadership-skills",
    title: "Essential Skills for Digital Transformation Leaders",
    excerpt: "The key competencies and skills that digital transformation leaders need to succeed in today's enterprise environment.",
    content: `
      <p>Digital transformation leadership requires a unique blend of technical understanding, strategic thinking, and people management skills.</p>
      
      <h3>Technical Acumen</h3>
      <p>Leaders need sufficient technical knowledge to make informed decisions about technology investments and capabilities.</p>
      
      <h3>Change Management</h3>
      <p>Successfully leading digital transformation requires expertise in organizational change management and culture transformation.</p>
      
      <h3>Strategic Vision</h3>
      <p>The ability to translate business strategy into digital initiatives is fundamental to transformation success.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "2024-01-08",
    publishDate: "2024-01-08",
    readTime: 5,
    category: "Leadership",
    tags: ["Leadership", "Skills", "Digital Transformation", "Management"],
    author: {
      name: "Robert Williams",
      avatar: "/assets/imgs/husain-profile.jpg",
      role: "Transformation Lead"
    }
  };

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  // SEO metadata
  const seoData = {
    post: post,
    title: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    publishedTime: post.publishDate,
    author: post.author.name,
    category: post.category,
    tags: post.tags
  };

  const aiMetadata = {
    purpose: 'Educate readers about essential digital leadership skills and competencies',
    contentSummary: `Guide to essential skills for digital transformation leaders including technical acumen, change management, and strategic vision. Covers key competencies needed in modern enterprise environments.`,
    keywords: ['digital leadership', 'leadership skills', 'digital transformation', 'change management', 'strategic vision'],
    contentType: 'article' as const
  };

  return (
    <MainLayout 
      pageTitle={post.title}
      seoPage="blog-detail"
      seoData={seoData}
      aiMetadata={aiMetadata}
    >
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              to="/blog"
              className="inline-flex items-center text-brand-400 hover:text-brand-500 mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>

            {/* Article header */}
            <div className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{post.title}</h1>
            </div>

            {/* Featured image */}
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Author and meta information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">{post.author.name}</div>
                  <div className="text-sm">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center text-sm">
                <span>{formattedDate}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Share buttons */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    <span className="font-medium">Share this article</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopyLink}>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Link
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
                      <Facebook className="h-4 w-4 mr-1" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                      <Twitter className="h-4 w-4 mr-1" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DigitalLeadershipSkillsPage;