
import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import SearchInput from '@/components/ui/SearchInput';
import { Button } from '@/components/ui/button';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get all unique categories for filtering
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(post => post.category));
    return ['All Categories', ...Array.from(uniqueCategories)];
  }, []);
  
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // Filter blog posts based on search term and selected category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'All Categories' || 
        post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Insightws</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, analysis and perspectives on evolving digital trends and innovations.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10">
          <SearchInput 
            placeholder="Search articles by title, content, or tags..."
            onChange={setSearchTerm}
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No articles found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter</p>
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
