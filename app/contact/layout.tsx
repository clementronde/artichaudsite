// app/contact/layout.tsx
import type { Metadata } from 'next';

// Les métadonnées sont exportées ici (dans un Server Component)
export const metadata: Metadata = {
  title: 'Contact - Artichaud Studio | Parlons de votre projet',
  description:
    'Contactez Artichaud Studio pour discuter de votre projet digital. Nous sommes à Paris et répondons sous 24h. Transformons vos idées ensemble.',
  keywords: ['contact', 'devis', 'projet digital', 'agence Paris', 'nous contacter'],
  openGraph: {
    title: 'Contact - Artichaud Studio',
    description: 'Contactez-nous pour discuter de votre projet digital.',
    url: 'https://artichaud-studio/contact',
    siteName: 'Artichaud Studio',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}