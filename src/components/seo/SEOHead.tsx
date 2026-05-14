import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getSEOMetadata, generateStructuredData } from '@/utils/seo';

const PROD_ORIGIN = 'https://lemonhq.co.uk';

const toAbsolute = (url?: string): string | undefined => {
  if (!url) return url;
  if (url.startsWith('http')) return url;
  return `${PROD_ORIGIN}${url.startsWith('/') ? '' : '/'}${url}`;
};

interface SEOHeadProps {
  seoPage: string;
  seoData?: any;
  aiMetadata?: {
    purpose?: string;
    contentSummary?: string;
    keywords?: string[];
    contentType?: 'article' | 'service' | 'case-study' | 'homepage' | 'contact';
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({ seoPage, seoData, aiMetadata }) => {
  const m = getSEOMetadata(seoPage, seoData);

  // Force absolute URLs based on production origin so SSR output is correct
  const url = m.url ? (m.url.startsWith('http') ? m.url.replace(/^https?:\/\/[^/]+/, PROD_ORIGIN) : toAbsolute(m.url)) : PROD_ORIGIN;
  const image = toAbsolute(m.image);

  // Pick structured data type
  const sdType =
    seoPage === 'blog-detail'
      ? 'article'
      : seoPage === 'case-study-detail'
      ? 'case-study'
      : undefined;
  const structuredData = sdType ? generateStructuredData(sdType, seoData) : null;

  const aiStructured = aiMetadata
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        aiContentSummary: aiMetadata.contentSummary,
        aiPurpose: aiMetadata.purpose,
        contentType: aiMetadata.contentType,
        keywords: aiMetadata.keywords?.join(', '),
      }
    : null;

  return (
    <Helmet>
      {m.title && <title>{m.title}</title>}
      {m.description && <meta name="description" content={m.description} />}
      {m.author && <meta name="author" content={m.author} />}
      {m.tags && m.tags.length > 0 && (
        <meta name="keywords" content={m.tags.join(', ')} />
      )}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      {m.title && <meta property="og:title" content={m.title} />}
      {m.description && <meta property="og:description" content={m.description} />}
      <meta property="og:type" content={m.type || 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={m.siteName || 'LemonHQ'} />
      {image && <meta property="og:image" content={image} />}
      {m.imageAlt && <meta property="og:image:alt" content={m.imageAlt} />}
      {m.imageWidth && <meta property="og:image:width" content={String(m.imageWidth)} />}
      {m.imageHeight && <meta property="og:image:height" content={String(m.imageHeight)} />}

      {/* Article tags */}
      {m.publishedTime && <meta property="article:published_time" content={m.publishedTime} />}
      {m.modifiedTime && <meta property="article:modified_time" content={m.modifiedTime} />}
      {m.section && <meta property="article:section" content={m.section} />}
      {m.tags && m.tags.map((t) => <meta key={`atag-${t}`} property="article:tag" content={t} />)}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lemonhq" />
      {m.title && <meta name="twitter:title" content={m.title} />}
      {m.description && <meta name="twitter:description" content={m.description} />}
      {image && <meta name="twitter:image" content={image} />}
      {m.imageAlt && <meta name="twitter:image:alt" content={m.imageAlt} />}

      {/* Search/AI preview controls */}
      <meta name="max-snippet" content="320" />
      <meta name="max-image-preview" content="large" />
      <meta name="max-video-preview" content="30" />

      {/* AI metadata */}
      {aiMetadata?.contentSummary && (
        <meta name="ai-content-summary" content={aiMetadata.contentSummary} />
      )}
      {aiMetadata?.purpose && <meta name="ai-purpose" content={aiMetadata.purpose} />}
      {aiMetadata?.contentType && (
        <meta name="ai-content-type" content={aiMetadata.contentType} />
      )}

      {/* Page-specific JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
      {aiStructured && (
        <script type="application/ld+json" data-ai-seo="true">
          {JSON.stringify(aiStructured)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
