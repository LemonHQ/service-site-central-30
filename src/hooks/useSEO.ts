import { useEffect } from 'react';
import { SEOMetadata, generateStructuredData } from '@/utils/seo';

/**
 * Hook to manage SEO metadata for the current page
 */
export const useSEO = (metadata: SEOMetadata, structuredDataType?: string, structuredDataProps?: any) => {
  useEffect(() => {
    // Update document title
    if (metadata.title) {
      document.title = metadata.title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content?: string, property?: string) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', property);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', metadata.description);
    updateMetaTag('author', metadata.author);

    // Open Graph tags
    updateMetaTag('', metadata.title, 'og:title');
    updateMetaTag('', metadata.description, 'og:description');
    updateMetaTag('', metadata.type || 'website', 'og:type');
    updateMetaTag('', metadata.image, 'og:image');
    updateMetaTag('', metadata.url, 'og:url');
    updateMetaTag('', metadata.siteName || 'LemonHQ', 'og:site_name');
    
    if (metadata.publishedTime) {
      updateMetaTag('', metadata.publishedTime, 'article:published_time');
    }
    
    if (metadata.modifiedTime) {
      updateMetaTag('', metadata.modifiedTime, 'article:modified_time');
    }

    if (metadata.section) {
      updateMetaTag('', metadata.section, 'article:section');
    }

    if (metadata.tags && metadata.tags.length > 0) {
      metadata.tags.forEach(tag => {
        const tagElement = document.createElement('meta');
        tagElement.setAttribute('property', 'article:tag');
        tagElement.setAttribute('content', tag);
        document.head.appendChild(tagElement);
      });
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@lemonhq');
    updateMetaTag('twitter:title', metadata.title);
    updateMetaTag('twitter:description', metadata.description);
    updateMetaTag('twitter:image', metadata.image);

    // Preview control meta tags for AI and search
    updateMetaTag('max-snippet', '320');
    updateMetaTag('max-image-preview', 'large');
    updateMetaTag('max-video-preview', '30');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (metadata.url) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', metadata.url);
    }

    // Structured Data
    if (structuredDataType && structuredDataProps) {
      const structuredData = generateStructuredData(structuredDataType, structuredDataProps);
      if (structuredData) {
        // Remove existing structured data script if any
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          existingScript.remove();
        }

        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // Cleanup function to remove article-specific tags when component unmounts
    return () => {
      // Remove article tags if they exist
      const articleTags = document.querySelectorAll('meta[property^="article:"]');
      articleTags.forEach(tag => tag.remove());
    };
  }, [metadata, structuredDataType, structuredDataProps]);
};

/**
 * Hook to add AI-specific meta tags for better AI crawlability
 */
export const useAISEO = (aiMetadata: {
  purpose?: string;
  contentSummary?: string;
  keywords?: string[];
  contentType?: 'article' | 'service' | 'case-study' | 'homepage' | 'contact';
}) => {
  useEffect(() => {
    const updateAIMetaTag = (name: string, content?: string) => {
      if (!content) return;
      
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // AI-specific meta tags
    updateAIMetaTag('ai-content-summary', aiMetadata.contentSummary);
    updateAIMetaTag('ai-purpose', aiMetadata.purpose);
    updateAIMetaTag('ai-content-type', aiMetadata.contentType);
    
    if (aiMetadata.keywords && aiMetadata.keywords.length > 0) {
      updateAIMetaTag('keywords', aiMetadata.keywords.join(', '));
    }

    // AI-friendly structured data
    const aiStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'aiContentSummary': aiMetadata.contentSummary,
      'aiPurpose': aiMetadata.purpose,
      'contentType': aiMetadata.contentType,
      'keywords': aiMetadata.keywords?.join(', '),
    };

    // Add AI structured data
    let aiScript = document.querySelector('script[data-ai-seo="true"]');
    if (!aiScript) {
      aiScript = document.createElement('script');
      aiScript.setAttribute('type', 'application/ld+json');
      aiScript.setAttribute('data-ai-seo', 'true');
      document.head.appendChild(aiScript);
    }
    
    aiScript.textContent = JSON.stringify(aiStructuredData);

    // Cleanup
    return () => {
      const aiTags = document.querySelectorAll('meta[name^="ai-"]');
      aiTags.forEach(tag => tag.remove());
      
      const aiStructuredScript = document.querySelector('script[data-ai-seo="true"]');
      if (aiStructuredScript) {
        aiStructuredScript.remove();
      }
    };
  }, [aiMetadata]);
};