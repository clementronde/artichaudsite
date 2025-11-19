import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://artichaud.studio';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // On bloque les API et les fichiers internes de Next.js
      disallow: ['/api/', '/_next/', '/admin/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
