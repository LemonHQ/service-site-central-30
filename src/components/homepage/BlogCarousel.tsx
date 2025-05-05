
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogCarousel: React.FC = () => {
  // Use the first 4 blog posts from our data source
  const displayPosts = blogPosts.slice(0, 4);

  return (
    <section className="section-padding bg-beige-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Insights" subtitle="Our latest thoughts on an evolving digital world" centered />
        
        <div className="relative">
          <Carousel opts={{
            align: "start"
          }} className="w-full">
            <CarouselContent className="-ml-4">
              {displayPosts.map((post, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={`/insights/${post.id}`} className="block h-full">
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15),0_6px_6px_rgba(0,0,0,0.12)] hover:-translate-y-1 transform">
                      <div className="h-48 bg-gray-100">
                        <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="pt-6">
                        <div className="mb-3 flex justify-between items-center">
                          <span className="text-xs bg-brand-100 text-brand-600 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{new Date(post.publishDate).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                        <p className="text-gray-600 text-sm">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <div className="text-brand-400 hover:text-brand-500 font-medium inline-flex items-center">
                          Read article
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/insights">
            <Button>View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
