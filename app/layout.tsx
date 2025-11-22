import type { Metadata } from 'next';
import './globals.css';
import { Inter, Instrument_Serif } from 'next/font/google';
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager';
import JsonLd from '@/components/JsonLd';
// 1. AJOUT : Import du composant SpeedInsights
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL('https://artichaud-studio.com'),
  title: {
    default: 'Artichaud Studio - Mettez le feu à vos projets',
    template: '%s | Artichaud Studio', 
  },
  description:
    'Agence de design et marketing spécialisée en branding, webdesign et stratégie digitale.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Artichaud Studio',
    description: 'Mettez le feu à vos projets avec notre agence de design et marketing.',
    url: 'https://artichaud-studio.com',
    siteName: 'Artichaud Studio',
    locale: 'fr_FR',
    type: 'website',
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
        
        <JsonLd />
        
        {children}

        {/* 2. AJOUT : Le composant SpeedInsights ici */}
        <SpeedInsights />
      </body>
    </html>
  );
}
