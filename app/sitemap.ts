import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.artichaud-studio';
  
  // Liste de vos pages statiques
  const routes = [
    { path: '', frequency: 'weekly', priority: 1.0 },
    { path: '/works', frequency: 'weekly', priority: 0.9 },
    { path: '/services', frequency: 'monthly', priority: 0.8 },
    { path: '/about', frequency: 'monthly', priority: 0.7 },
    { path: '/blog', frequency: 'weekly', priority: 0.8 },
    { path: '/contact', frequency: 'yearly', priority: 0.6 },
    { path: '/works/charitio', frequency: 'monthly', priority: 0.7 },
  ] as const;

  // Génération du tableau compatible Next.js
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.frequency as 'weekly' | 'monthly' | 'yearly',
    priority: route.priority,
  }));
}
