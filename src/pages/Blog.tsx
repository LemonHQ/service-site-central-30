
import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';

const Blog = () => {
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
    <MainLayout pageTitle="Insights" metaDescription="Latest insights on digital transformation, product strategy, and technological innovation.">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert perspectives on digital transformation, product strategy, and technological innovation.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-brand-400 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No articles found</h3>
            <p className="text-gray-500 mt-2">Try selecting a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Blog;
