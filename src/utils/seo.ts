import { caseStudies } from '@/data/caseStudies';
import { blogPosts } from '@/data/blogPosts';
import { mainServices, subServices } from '@/data/services';

export interface SEOMetadata {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  siteName?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Helper function to generate absolute URLs for social sharing
const getAbsoluteImageUrl = (relativePath: string): string => {
  const baseURL = typeof window !== 'undefined' ? window.location.origin : 'https://lemonhq.co.uk';
  if (relativePath.startsWith('http')) return relativePath;
  return `${baseURL}${relativePath}`;
};

const defaultSEO: SEOMetadata = {
  title: 'LemonHQ — Digital products for enterprise brands',
  description: 'Validate, design, launch and scale digital products for multi-market enterprise brands.',
  image: '/assets/imgs/flying-paper-planes-hero-image.png',
  imageAlt: 'LemonHQ Digital Innovation Services',
  imageWidth: 1200,
  imageHeight: 630,
  type: 'website',
  siteName: 'LemonHQ',
};

// Truncate strings to keep titles ≤60 and descriptions ≤160 chars (cleanly at the previous space).
const truncate = (input: string | undefined, max: number): string | undefined => {
  if (!input) return input;
  if (input.length <= max) return input;
  const sliced = input.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${(lastSpace > max * 0.6 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
};

const buildTitle = (raw: string): string => truncate(raw, 60)!;
const buildDescription = (raw: string): string => truncate(raw, 160)!;

export const getSEOMetadata = (page: string, data?: any): SEOMetadata => {
  const baseURL = typeof window !== 'undefined' ? window.location.origin : 'https://lemonhq.co.uk';

  switch (page) {
    case 'home':
      return {
        ...defaultSEO,
        url: baseURL,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('LemonHQ — Digital products for enterprise brands'),
        description: buildDescription('Digital transformation consultancy helping enterprises build, modernize and scale next-generation products with proven methodologies.'),
        tags: ['digital transformation', 'innovation consulting', 'enterprise solutions', 'AI consulting']
      };

    case 'services':
      return {
        ...defaultSEO,
        url: `${baseURL}/services`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Digital Transformation Services | LemonHQ'),
        description: buildDescription('Product digitalization, AI innovation, architecture modernization and experience design for enterprise success.'),
        tags: ['digital transformation services', 'enterprise consulting', 'AI solutions']
      };

    case 'service-detail':
      if (data?.service) {
        return {
          ...defaultSEO,
          url: `${baseURL}/services/${data.service.slug}`,
          title: buildTitle(`${data.service.title} | LemonHQ`),
          description: buildDescription(data.service.shortDescription || data.service.description),
          image: getAbsoluteImageUrl(data.service.coverImage || defaultSEO.image!),
          imageAlt: `${data.service.title} - Digital Transformation Service`,
          type: 'website',
          tags: data.service.tags || ['digital transformation', 'enterprise services'],
        };
      }
      break;

    case 'case-studies':
      return {
        ...defaultSEO,
        url: `${baseURL}/case-studies`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Case Studies — Digital Transformation Stories | LemonHQ'),
        description: buildDescription('Successful digital transformation projects across finance, healthcare, real estate and retail. Real client outcomes.'),
        type: 'website',
        tags: ['case studies', 'client success stories', 'enterprise projects']
      };

    case 'case-study-detail':
      if (data?.caseStudy) {
        return {
          ...defaultSEO,
          url: `${baseURL}/case-studies/${data.caseStudy.id}`,
          title: buildTitle(`${data.caseStudy.title} — ${data.caseStudy.client}`),
          description: buildDescription(data.caseStudy.summary),
          image: getAbsoluteImageUrl(data.caseStudy.featuredImage || defaultSEO.image!),
          imageAlt: `${data.caseStudy.title} - ${data.caseStudy.client} Case Study`,
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
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Insights & Blog | LemonHQ'),
        description: buildDescription('Expert insights on AI, digital transformation, innovation frameworks and industry analysis from LemonHQ.'),
        type: 'website',
        tags: ['digital transformation insights', 'AI trends', 'thought leadership']
      };

    case 'blog':
      return {
        ...defaultSEO,
        url: `${baseURL}/blog`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Blog | LemonHQ'),
        description: buildDescription('Short reads on digital strategy, AI, product development and enterprise innovation.'),
        type: 'website',
        tags: ['blog', 'digital strategy', 'innovation']
      };

    case 'blog-detail':
      if (data?.post) {
        return {
          ...defaultSEO,
          url: `${baseURL}/insights/${data.post.id}`,
          title: buildTitle(data.post.title),
          description: buildDescription(data.post.excerpt),
          image: getAbsoluteImageUrl(data.post.featuredImage || defaultSEO.image!),
          imageAlt: `${data.post.title} - Digital Innovation Insights`,
          type: 'article',
          publishedTime: data.post.publishDate,
          modifiedTime: data.post.modifiedDate || data.post.publishDate,
          author: data.post.author.name,
          section: 'Insights',
          tags: data.post.tags || [data.post.category],
        };
      }
      break;

    case 'about':
      return {
        ...defaultSEO,
        url: `${baseURL}/about`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('About LemonHQ — Digital Transformation Experts'),
        description: buildDescription('Meet the team behind successful enterprise digital transformations. Our mission, expertise and approach to innovation.'),
        type: 'website',
        tags: ['about lemonhq', 'innovation consultants', 'digital experts']
      };

    case 'contact':
      return {
        ...defaultSEO,
        url: `${baseURL}/contact`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Contact LemonHQ — Start Your Transformation'),
        description: buildDescription('Talk to LemonHQ about your digital transformation. Schedule a consultation with our innovation specialists.'),
        type: 'website',
        tags: ['contact lemonhq', 'innovation consultation']
      };

    // Industry pages
    case 'finance':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/finance`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Financial Services Digital Transformation | LemonHQ'),
        description: buildDescription('Digital transformation for banks, wealth management and fintech — innovation, customer experience and compliance.'),
        type: 'website',
        tags: ['financial services', 'banking technology', 'fintech']
      };

    case 'healthcare':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/healthcare`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Healthcare Digital Transformation | LemonHQ'),
        description: buildDescription('Patient experience, medical device integration and innovative health tech solutions for life sciences brands.'),
        type: 'website',
        tags: ['healthcare', 'patient experience', 'medical technology']
      };

    case 'retail':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/retail`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Retail Digital Transformation | LemonHQ'),
        description: buildDescription('Omnichannel experience, e-commerce platforms and customer engagement for modern retail brands.'),
        type: 'website',
        tags: ['retail', 'e-commerce', 'omnichannel']
      };

    case 'insurance':
      return {
        ...defaultSEO,
        url: `${baseURL}/industries/insurance`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Insurance Digital Transformation | LemonHQ'),
        description: buildDescription('Digital policy management, automated claims and customer self-service for modern insurers.'),
        type: 'website',
        tags: ['insurance', 'insurtech', 'policy management']
      };

    // Approach pages
    case 'co-create':
      return {
        ...defaultSEO,
        url: `${baseURL}/approach/co-create`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Co-Create — Digital Ecosystem Strategy | LemonHQ'),
        description: buildDescription('Our collaborative co-creation methodology for building digital products that meet enterprise needs.'),
        type: 'website',
        tags: ['co-creation', 'collaborative development']
      };

    case 'co-innovate':
      return {
        ...defaultSEO,
        url: `${baseURL}/approach/co-innovate`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Co-Innovate — Rapid Innovation | LemonHQ'),
        description: buildDescription('Rapid prototyping, emerging tech pilots and agile delivery for enterprise innovation.'),
        type: 'website',
        tags: ['rapid innovation', 'prototyping', 'agile']
      };

    case 'extend':
      return {
        ...defaultSEO,
        url: `${baseURL}/approach/extend`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Extend — Embedded Delivery Teams | LemonHQ'),
        description: buildDescription('Embedded product, design and engineering teams that scale with your enterprise roadmap.'),
        type: 'website',
        tags: ['embedded teams', 'staff augmentation']
      };

    case 'co-create-assessment':
      return {
        ...defaultSEO,
        url: `${baseURL}/approach/co-create-assessment`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Digital Readiness Assessment | LemonHQ'),
        description: buildDescription('Benchmark your digital readiness in minutes and get a tailored roadmap from LemonHQ.'),
        type: 'website',
        tags: ['assessment', 'digital readiness']
      };

    // Service landing pages (top-level routes)
    case 'unify-brand-experiences':
      return {
        ...defaultSEO,
        url: `${baseURL}/unify-brand-experiences`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Unify Brand Experiences | LemonHQ'),
        description: buildDescription('Connect fragmented brand touchpoints into a coherent, multi-market digital experience.'),
        type: 'website',
        tags: ['brand experience', 'omnichannel']
      };

    case 'digitalize-product-lines':
      return {
        ...defaultSEO,
        url: `${baseURL}/digitalize-product-lines`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Digitalize Product Lines | LemonHQ'),
        description: buildDescription('Turn traditional products into digital-first experiences that grow revenue and customer engagement.'),
        type: 'website',
        tags: ['product digitalization', 'd2c']
      };

    case 'expand-product-offerings':
      return {
        ...defaultSEO,
        url: `${baseURL}/expand-product-offerings`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Expand Product Offerings | LemonHQ'),
        description: buildDescription('Launch adjacent digital products that extend your portfolio into new revenue streams.'),
        type: 'website',
        tags: ['product expansion', 'innovation']
      };

    case 'scale-digital-experiences':
      return {
        ...defaultSEO,
        url: `${baseURL}/scale-digital-experiences`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Scale Digital Experiences | LemonHQ'),
        description: buildDescription('Grow proven digital products across markets with the architecture, ops and design to support scale.'),
        type: 'website',
        tags: ['scale', 'multi-market']
      };

    case 'pilot-emerging-tech':
      return {
        ...defaultSEO,
        url: `${baseURL}/pilot-emerging-tech`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Pilot Emerging Tech | LemonHQ'),
        description: buildDescription('De-risk AI and emerging technology with rapid, measurable live pilots before full rollout.'),
        type: 'website',
        tags: ['emerging tech', 'AI pilots']
      };

    case 'standardize-digital-portfolio':
      return {
        ...defaultSEO,
        url: `${baseURL}/standardize-digital-portfolio`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Standardize Digital Portfolio | LemonHQ'),
        description: buildDescription('Bring order to a portfolio of digital products with shared platforms, design systems and governance.'),
        type: 'website',
        tags: ['portfolio', 'platform']
      };

    // Webinars / events
    case 'webinar-signup':
      return {
        ...defaultSEO,
        url: `${baseURL}/webinar-signup`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Ecosystem Strategy Session — Sign Up | LemonHQ'),
        description: buildDescription('Reserve your seat for our 90-minute ecosystem strategy session with LemonHQ experts.'),
        type: 'website'
      };

    case 'co-innovate-webinar':
      return {
        ...defaultSEO,
        url: `${baseURL}/co-innovate-webinar`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Rapid Innovation Strategy Session | LemonHQ'),
        description: buildDescription('Reserve your seat for our 90-minute rapid innovation strategy session with LemonHQ.'),
        type: 'website'
      };

    case 'getting-started':
      return {
        ...defaultSEO,
        url: `${baseURL}/getting-started`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Get Started with LemonHQ'),
        description: buildDescription('Tell us about your project and we\u2019ll suggest the right path forward.'),
        type: 'website'
      };

    case 'thank-you':
      return {
        ...defaultSEO,
        url: `${baseURL}/thank-you`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Thank You | LemonHQ'),
        description: buildDescription('Thanks for getting in touch. A member of our team will be in contact shortly.'),
        type: 'website'
      };

    case 'cv-submission':
      return {
        ...defaultSEO,
        url: `${baseURL}/cv-submission`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Submit Your CV | LemonHQ Careers'),
        description: buildDescription('Join LemonHQ. Submit your CV and tell us about the role you are looking for.'),
        type: 'website'
      };

    case 'lead-qualification':
      return {
        ...defaultSEO,
        url: `${baseURL}/lead-qualification`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Tell Us About Your Project | LemonHQ'),
        description: buildDescription('Share a few details so we can route your project to the right LemonHQ team.'),
        type: 'website'
      };

    // Legal
    case 'privacy-policy':
      return {
        ...defaultSEO,
        url: `${baseURL}/privacy-policy`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Privacy Policy | LemonHQ'),
        description: buildDescription('How LemonHQ collects, uses and protects your personal information.'),
        type: 'website'
      };

    case 'terms-and-conditions':
      return {
        ...defaultSEO,
        url: `${baseURL}/terms-and-conditions`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Terms and Conditions | LemonHQ'),
        description: buildDescription('Terms governing the use of LemonHQ\u2019s website and services.'),
        type: 'website'
      };

    case 'cookie-policy':
      return {
        ...defaultSEO,
        url: `${baseURL}/cookie-policy`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Cookie Policy | LemonHQ'),
        description: buildDescription('How LemonHQ uses cookies and similar technologies on our website.'),
        type: 'website'
      };

    case 'disclaimer':
      return {
        ...defaultSEO,
        url: `${baseURL}/disclaimer`,
        image: getAbsoluteImageUrl(defaultSEO.image!),
        title: buildTitle('Disclaimer | LemonHQ'),
        description: buildDescription('Legal disclaimer for the LemonHQ website and the content we publish.'),
        type: 'website'
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
            url: getAbsoluteImageUrl(data.post.featuredImage || defaultSEO.image!),
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
          image: {
            '@type': 'ImageObject',
            url: getAbsoluteImageUrl(data.caseStudy.featuredImage || defaultSEO.image!),
            width: 1200,
            height: 630
          },
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