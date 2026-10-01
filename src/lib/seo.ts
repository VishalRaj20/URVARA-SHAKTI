import { siteConfig } from '@/data/site';
import { Product } from '@/data/products';
import { FAQItem } from '@/data/faq';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/og-image.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['en', 'hi'],
    },
  };
}

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `${siteConfig.url}${product.image}`,
    description: product.overview,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    category: 'Soil Amendment & Organic Compost',
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
