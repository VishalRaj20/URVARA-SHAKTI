import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { blogPosts } from '@/data/blog';
import { productsData } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    '',
    '/about',
    '/products',
    '/quality',
    '/dealer',
    '/bulk-orders',
    '/blog',
    '/gallery',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes, ...blogRoutes];
}
