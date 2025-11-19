import type { Metadata } from 'next';
import './globals.css';
import { Inter, Instrument_Serif } from 'next/font/google';
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager';
// 1. On importe le composant Schema qu'on vient de créer
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  // 2. INDISPENSABLE : Définit la base pour les images et liens relatifs
  metadataBase: new URL('https://artichaud-studio.com'),

  title: {
    default: 'Artichaud Studio - Mettez le feu à vos projets',
    // 3. Template : Sur la page contact, le titre deviendra "Contact | Artichaud Studio"
    template: '%s | Artichaud Studio', 
  },
  description:
    'Agence de design et marketing spécialisée en branding, webdesign et stratégie digitale.',
  
  // 4. Canonical URL automatique (évite le contenu dupliqué aux yeux de Google)
  alternates: {
    canonical: './',
  },

  // 5. OpenGraph (Pour avoir une belle carte quand on partage le lien sur LinkedIn/WhatsApp)
  openGraph: {
    title: 'Artichaud Studio',
    description: 'Mettez le feu à vos projets avec notre agence de design et marketing.',
    url: 'https://artichaud-studio.com',
    siteName: 'Artichaud Studio',
    locale: 'fr_FR',
    type: 'website',
    // Next.js ira chercher automatiquement opengraph-image.jpg dans app/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-inter bg-noir text-blanc antialiased`}
      >
        <GoogleTagManagerNoScript />
        
        {/* 6. Injection des données structurées pour Google */}
        <JsonLd />
        
        {children}
      </body>
    </html>
  );
}
