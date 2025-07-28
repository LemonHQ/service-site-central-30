import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';

const PersonalizationA2TrillionOpportunityPage = () => {
  const post = blogPosts.find(p => p.id === 'personalization-a-usd-2-trillion-opportunity');
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <MainLayout pageTitle={post.title}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              {post.featuredImage && (
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
              )}
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.readTime} min read</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-foreground leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:mb-6 [&>li]:mb-2"
              />
            </div>
          </article>
        </div>
      </div>
    </MainLayout>
  );
};

export default PersonalizationA2TrillionOpportunityPage;