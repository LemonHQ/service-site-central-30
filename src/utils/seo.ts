import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';
import { mainServices, subServices } from '@/data/services';

export interface SEOMetadata {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  siteName?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const defaultSEO: SEOMetadata = {
  title: 'LemonHQ - Digital Product Services for Enterprise Brands',
  description: 'Digital product services for enterprise brands - validate, design, launch and scale products that drive business growth.',
  image: '/assets/imgs/flying-paper-planes-hero-image.png',
  type: 'website',
  siteName: 'LemonHQ',
};

export const getSEOMetadata = (page: string, data?: any): SEOMetadata => {
  const baseURL = typeof window !== 'undefined' ? window.location.origin : 'https://lemonhq.co.uk';

  switch (page) {
    case 'home':
      return {
        ...defaultSEO,
        url: baseURL,
        title: 'LemonHQ - Digital Transformation & Innovation Consulting for Enterprise',
        description: 'Leading digital transformation consultancy helping enterprises build next-generation products, modernize architecture, and innovate with AI. Transform your business with proven methodologies.',
        tags: ['digital transformation', 'innovation consulting', 'enterprise solutions', 'AI consulting', 'product digitalization']
      };

    case 'services':
      return {
        ...defaultSEO,
        url: `${baseURL}/services`,
        title: 'Digital Transformation Services - Enterprise Solutions | LemonHQ',
        description: 'Comprehensive digital transformation services: product digitalization, AI innovation, architecture modernization, and experience design. Proven solutions for enterprise success.',
        type: 'website',
        tags: ['digital transformation services', 'enterprise consulting', 'AI solutions', 'product modernization', 'technology consulting']
      };

    case 'service-detail':
      if (data?.service) {
        return {
          ...defaultSEO,
          url: `${baseURL}/services/${data.service.slug}`,
          title: `${data.service.title} - LemonHQ`,
          description: data.service.shortDescription || data.service.description,
          image: data.service.coverImage || defaultSEO.image,
          type: 'website',
        };
      }
      break;

    case 'case-studies':
      return {
        ...defaultSEO,
        url: `${baseURL}/case-studies`,
        title: 'Case Studies - Digital Transformation Success Stories | LemonHQ',
        description: 'Explore our portfolio of successful digital transformation projects across finance, healthcare, real estate, and retail. Real client results and innovation outcomes.',
        type: 'website',
        tags: ['digital transformation case studies', 'client success stories', 'enterprise projects', 'innovation results', 'transformation outcomes']
      };

    case 'case-study-detail':
      if (data?.caseStudy) {
        return {
          ...defaultSEO,
          url: `${baseURL}/case-studies/${data.caseStudy.id}`,
          title: `${data.caseStudy.title} - ${data.caseStudy.client} Case Study`,
          description: data.caseStudy.summary,
          image: data.caseStudy.featuredImage || defaultSEO.image,
          type: 'article',
          publishedTime: data.caseStudy.date,
          section: 'Case Studies',
          tags: [data.caseStudy.industry, ...data.caseStudy.services],
        };
      }
      break;

    case 'insights':
      return {
        ...defaultSEO,
        url: `${baseURL}/insights`,
        title: 'Insights & Blog - Digital Innovation Thought Leadership | LemonHQ',
        description: 'Expert insights on AI search, digital transformation trends, innovation frameworks, and industry analysis. Stay ahead with actionable thought leadership content.',
        type: 'website',
        tags: ['digital transformation insights', 'AI trends', 'innovation thought leadership', 'technology analysis', 'industry trends']
      };

    case 'blog-detail':
      if (data?.post) {
        return {
          ...defaultSEO,
          url: `${baseURL}/insights/${data.post.id}`,
          title: `${data.post.title} - LemonHQ Insights`,
          description: data.post.excerpt,
          image: data.post.featuredImage || defaultSEO.image,
          type: 'article',
          publishedTime: data.post.publishDate,
          author: data.post.author.name,
          section: 'Insights',
          tags: [data.post.category],
        };
      }
      break;

    case 'about':
      return {
        ...defaultSEO,
        url: `${baseURL}/about`,
        title: 'About LemonHQ - Digital Transformation Experts & Innovation Leaders',
        description: 'Meet the team behind successful digital transformations for leading enterprises. Learn about our mission, expertise, and proven approach to innovation consulting.',
        type: 'website',
        tags: ['digital transformation experts', 'innovation consultants', 'enterprise technology leaders', 'consulting team']
      };

    case 'contact':
      return {
        ...defaultSEO,
        url: `${baseURL}/contact`,
        title: 'Contact LemonHQ - Start Your Digital Transformation Journey',
        description: 'Ready to transform your business? Contact LemonHQ for expert digital transformation consulting. Schedule a consultation with our innovation specialists today.',
        type: 'website',
        tags: ['contact digital transformation consultant', 'enterprise consulting services', 'innovation consultation']
      };

    // Industry pages
    case 'finance':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/finance`,
        title: 'Financial Services Digital Transformation - Banking & Fintech Solutions | LemonHQ',
        description: 'Specialized digital transformation services for banks, wealth management, and fintech companies. Modern solutions for financial services innovation and compliance.',
        type: 'website',
        tags: ['financial services digital transformation', 'banking technology', 'fintech solutions', 'regulatory compliance']
      };

    case 'healthcare':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/healthcare`,
        title: 'Healthcare Digital Transformation - Patient Experience & Medical Innovation | LemonHQ',
        description: 'Transform healthcare delivery with digital patient experiences, medical device integration, and innovative health technology solutions.',
        type: 'website',
        tags: ['healthcare digital transformation', 'patient experience', 'medical technology', 'health innovation']
      };

    case 'retail':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/retail`,
        title: 'Retail Digital Transformation - E-commerce & Customer Experience | LemonHQ',
        description: 'Modernize retail operations with omnichannel experiences, e-commerce platforms, and innovative customer engagement solutions.',
        type: 'website',
        tags: ['retail digital transformation', 'e-commerce solutions', 'omnichannel retail', 'customer experience']
      };

    case 'insurance':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/insurance`,
        title: 'Insurance Digital Transformation - Policy Management & Claims Processing | LemonHQ',
        description: 'Transform insurance operations with digital policy management, automated claims processing, and enhanced customer self-service capabilities.',
        type: 'website',
        tags: ['insurance digital transformation', 'policy management', 'claims automation', 'insurtech solutions']
      };

    // Approach pages
    case 'co-create':
      return {
        ...defaultSEO,
        url: `${baseURL}/approach/co-create`,
        title: 'Co-Create Approach - Collaborative Digital Transformation | LemonHQ',
        description: 'Our collaborative co-creation methodology for building digital products and services that truly meet enterprise needs and deliver measurable results.',
        type: 'website',
        tags: ['co-creation methodology', 'collaborative development', 'digital product development', 'enterprise innovation']
      };

    case 'co-innovate':
      return {
        ...defaultSEO,
        url: `${baseURL}/approach/co-innovate`,
        title: 'Co-Innovate Approach - Rapid Innovation & Prototyping | LemonHQ',
        description: 'Fast-track innovation with our co-innovation approach. Rapid prototyping, emerging technology pilots, and agile development for enterprise transformation.',
        type: 'website',
        tags: ['rapid innovation', 'technology prototyping', 'agile development', 'emerging technology', 'innovation methodology']
      };

    default:
      return defaultSEO;
  }

  return defaultSEO;
};

export const generateStructuredData = (type: string, data?: any) => {
  const baseURL = typeof window !== 'undefined' ? window.location.origin : 'https://lemonhq.co.uk';

  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LemonHQ',
        url: baseURL,
        logo: `${baseURL}/assets/imgs/android-chrome-512x512.png`,
        description: 'Digital product services for enterprise brands - validate, design, launch and scale products that drive business growth.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '167-169 Great Portland Street',
          addressLocality: 'London',
          postalCode: 'W1W 5PF',
          addressCountry: 'GB',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+44-020-7907-5090',
          contactType: 'Business',
          email: 'hello@lemonhq.co.uk',
        },
        sameAs: [
          'https://linkedin.com/company/lemonhq',
          'https://twitter.com/lemonhq',
        ],
      };

    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LemonHQ',
        url: baseURL,
        description: 'Digital product services for enterprise brands',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseURL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    case 'article':
    case 'BlogPosting':
      if (data?.post) {
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.post.title,
          description: data.post.excerpt,
          image: {
            '@type': 'ImageObject',
            url: data.post.featuredImage,
            width: 1200,
            height: 630
          },
          datePublished: data.post.publishDate,
          dateModified: data.post.modifiedDate || data.post.publishDate,
          author: {
            '@type': 'Person',
            name: data.post.author.name,
            image: data.post.author.avatar,
            url: data.post.author.profileUrl || `${baseURL}/about`,
            jobTitle: data.post.author.role
          },
          publisher: {
            '@type': 'Organization',
            name: 'LemonHQ',
            logo: {
              '@type': 'ImageObject',
              url: `${baseURL}/assets/imgs/android-chrome-512x512.png`,
              width: 512,
              height: 512
            },
            url: baseURL,
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Business',
              email: 'hello@lemonhq.co.uk'
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseURL}/insights/${data.post.id}`,
          },
          keywords: data.post.tags?.join(', '),
          articleSection: data.post.category,
          wordCount: data.post.content ? data.post.content.replace(/<[^>]*>/g, '').split(' ').length : undefined
        };
      }
      break;

    case 'case-study':
      if (data?.caseStudy) {
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.caseStudy.title,
          description: data.caseStudy.summary,
          image: data.caseStudy.featuredImage,
          datePublished: data.caseStudy.date,
          dateModified: data.caseStudy.date,
          author: {
            '@type': 'Organization',
            name: 'LemonHQ',
          },
          publisher: {
            '@type': 'Organization',
            name: 'LemonHQ',
            logo: {
              '@type': 'ImageObject',
              url: `${baseURL}/assets/imgs/android-chrome-512x512.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseURL}/case-studies/${data.caseStudy.id}`,
          },
          about: {
            '@type': 'Thing',
            name: data.caseStudy.client,
          },
          keywords: [data.caseStudy.industry, ...data.caseStudy.services].join(','),
        };
      }
      break;

    case 'service':
      if (data?.service) {
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.service.title,
          description: data.service.description,
          provider: {
            '@type': 'Organization',
            name: 'LemonHQ',
          },
          serviceType: 'Digital Transformation',
          areaServed: {
            '@type': 'Place',
            name: 'Global',
          },
        };
      }
      break;

    default:
      return null;
  }

  return null;
};

export const generateSitemap = () => {
  const baseURL = 'https://lemonhq.co.uk';
  const currentDate = new Date().toISOString();
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.9', changefreq: 'weekly' },
    { url: '/insights', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  ];

  // Service pages with direct URLs from navigation
  const servicePages = [
    { url: '/unify-brand-experiences', priority: '0.8', changefreq: 'monthly' },
    { url: '/digitalize-product-lines', priority: '0.8', changefreq: 'monthly' },
    { url: '/expand-product-offerings', priority: '0.8', changefreq: 'monthly' },
    { url: '/scale-digital-experiences', priority: '0.8', changefreq: 'monthly' },
    { url: '/pilot-emerging-tech', priority: '0.8', changefreq: 'monthly' },
    { url: '/standardize-digital-portfolio', priority: '0.8', changefreq: 'monthly' },
  ];

  // Industry pages
  const industryPages = [
    { url: '/industries/insurance', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/finance', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/healthcare', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/retail', priority: '0.8', changefreq: 'monthly' },
  ];

  // Approach pages
  const approachPages = [
    { url: '/approach/co-create', priority: '0.8', changefreq: 'monthly' },
    { url: '/approach/co-innovate', priority: '0.8', changefreq: 'monthly' },
  ];

  // Legal pages
  const legalPages = [
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookie-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
  ];

  // Keep original service pages from data (if they exist and are different)
  const additionalServicePages = mainServices.map(service => ({
    url: `/services/${service.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const subServicePages = subServices.map(service => ({
    url: `/services/${service.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const caseStudyPages = caseStudies.map(caseStudy => ({
    url: `/case-studies/${caseStudy.id}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: caseStudy.date,
  }));

  const blogPages = blogPosts.map(post => ({
    url: `/insights/${post.id}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.publishDate,
  }));

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...additionalServicePages,
    ...subServicePages,
    ...industryPages,
    ...approachPages,
    ...legalPages,
    ...caseStudyPages,
    ...blogPages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseURL}${page.url}</loc>
    <lastmod>${'lastmod' in page ? page.lastmod : currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};