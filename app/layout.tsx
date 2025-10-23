import type { Metadata } from 'next';
import './globals.css';
import { Inter, Instrument_Serif } from 'next/font/google';


const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument',
});
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
        className={`${inter.variable} ${instrumentSerif.variable} font-inter bg-noir text-blanc antialiased`}
      >  {children}
      </body>
    </html>
  );
}
