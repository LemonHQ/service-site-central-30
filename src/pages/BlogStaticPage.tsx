import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import StaticBlogList from '@/components/blog/StaticBlogList';

const BlogStaticPage = () => {
  return (
    <MainLayout seoPage="blog" pageTitle="Blog">
      <StaticBlogList />
    </MainLayout>
  );
};

export default BlogStaticPage;