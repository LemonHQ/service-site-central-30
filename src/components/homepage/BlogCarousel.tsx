
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import SectionHeading from '../ui/SectionHeading';
import { Button } from '@/components/ui/button';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category: string;
}

const BlogCarousel: React.FC = () => {
  // Example blog posts with placeholder images
  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Enterprise Product Development",
      excerpt: "Discover how AI, machine learning, and predictive analytics are reshaping product development strategies for enterprise organizations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=400&q=80",
      date: "April 15, 2023",
      slug: "future-enterprise-product-development",
      category: "Innovation"
    },
    {
      title: "Building Products that Scale: Architecture Considerations",
      excerpt: "Learn the key architectural patterns and principles that enable products to scale effectively from thousands to millions of users.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400&q=80",
      date: "March 22, 2023",
      slug: "building-products-that-scale",
      category: "Technology"
    },
    {
      title: "Validating Product Ideas: A Data-Driven Approach",
      excerpt: "Move beyond gut feelings with a structured framework for validating product concepts using quantitative and qualitative methods.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=400&q=80",
      date: "February 8, 2023",
      slug: "validating-product-ideas",
      category: "Strategy"
    },
    {
      title: "Enterprise UX: Balancing Complexity and Usability",
      excerpt: "Strategies for designing intuitive user experiences while accommodating the complex requirements of enterprise applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400&q=80",
      date: "January 17, 2023",
      slug: "enterprise-ux-complexity-usability",
      category: "Design"
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Product Insights" 
          subtitle="Expert perspectives on enterprise product strategy, design, and development"
          centered
        />
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden h-full">
                    <div className="h-48 bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <div className="mb-3 flex justify-between items-center">
                        <span className="text-xs bg-brand-100 text-brand-600 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/blog/${post.slug}`} className="text-brand-400 hover:text-brand-500 font-medium inline-flex items-center">
                        Read article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/blog">
            <Button>View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
