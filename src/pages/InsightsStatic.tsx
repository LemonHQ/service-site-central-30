import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';
import InsightCard from '@/components/blog/InsightCard';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';

const InsightsStatic = () => {
  const aiMetadata = {
    purpose: 'Share expert insights and thought leadership on digital transformation and innovation',
    contentSummary: 'Expert insights on AI search, digital transformation trends, innovation frameworks, and industry analysis from digital transformation specialists.',
    keywords: ['digital transformation insights', 'AI trends', 'innovation thought leadership', 'technology analysis'],
    contentType: 'article' as const
  };

  return (
    <MainLayout 
      pageTitle="Insights - Digital Innovation Thought Leadership"
      seoPage="insights"
      aiMetadata={aiMetadata}
    >
      <PageHero
        title="Insights"
        subtitle="Expert perspectives on digital transformation, product strategy, and technological innovation."
      />

      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <InsightCard key={post.id} post={post} />
          ))}
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default InsightsStatic;