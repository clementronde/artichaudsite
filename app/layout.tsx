import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Artichaud Studio - Mettez le feu à vos projets',
  description:
    'Agence de design et marketing spécialisée en branding, webdesign et stratégie digitale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter bg-noir text-blanc antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
