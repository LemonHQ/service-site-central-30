
import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';
import InsightCard from '@/components/blog/InsightCard';
import PageHero from '@/components/ui/PageHero';
import ContentSection from '@/components/ui/ContentSection';
import FilterButtons from '@/components/ui/FilterButtons';
import { SectionTitle } from '@/components/ui/Typography';

const Insights = () => {
  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(post => post.category));
    return ['All Categories', ...Array.from(uniqueCategories)];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All Categories') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <MainLayout 
      pageTitle="Insights"
      seoPage="insights"
      aiMetadata={{
        purpose: "Blog and insights section featuring expert perspectives on digital transformation",
        contentSummary: "Expert articles on digital transformation, product strategy, AI innovation, and technological trends for enterprise leaders",
        contentType: "article",
        keywords: ["digital transformation insights", "product strategy", "AI trends", "technology articles", "business innovation"]
      }}
    >
      <PageHero
        title="Insights"
        subtitle="Expert perspectives on digital transformation, product strategy, and technological innovation."
      />

      <ContentSection>
        <FilterButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <SectionTitle className="text-gray-700">No articles found</SectionTitle>
            <p className="text-gray-500 mt-2">Try selecting a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </ContentSection>
    </MainLayout>
  );
};

export default Insights;
