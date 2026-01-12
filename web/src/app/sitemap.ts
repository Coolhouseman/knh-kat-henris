import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://knh.nz';

  const safeDate = (value: string) => {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? new Date() : d;
  };

  // Static pages
  const routes = [
    '',
    '/collections',
    '/journal',
    '/materials',
    '/philosophy',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic collections
  const collections = [
    'royal-gardens',
    'venetian-dreams',
    'imperial-silk',
  ].map((slug) => ({
    url: `${baseUrl}/collections/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Journal Posts
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...collections, ...blogEntries];
}
