import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'], // Bloque les URLs techniques
      },
    ],
    sitemap: 'https://artichaud.studio/sitemap.xml',
  };
}
