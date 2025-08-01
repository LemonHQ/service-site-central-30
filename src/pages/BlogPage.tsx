
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BlogList from '@/components/blog/BlogList';

const BlogPage = () => {
  return (
    <MainLayout pageTitle="Blog">
      <BlogList />
    </MainLayout>
  );
};

export default BlogPage;
