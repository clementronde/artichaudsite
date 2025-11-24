import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getLatestPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import Image from 'next/image';
import AboutSection from '@/components/AboutSection';
import WorkItem from '@/components/WorkItem';
import ServicesSection from '@/components/ServicesSection';
import ScrollManager from '@/components/ScrollManager';

// Composant client pour l'effet de scroll (optionnel si tu veux le séparer)


const HeatEffect = dynamic(() => import('@/components/HeatEffect'), {
  ssr: false, 
  loading: () => <div className="absolute inset-0 bg-black" />, 
});

export const metadata: Metadata = {
  title: 'Artichaud Studio | Agence de Design & Marketing Digital à Paris',
  description: 'Artichaud Studio : Agence créative spécialisée en branding, webdesign et stratégie digitale. Mettez le feu à vos projets avec notre expertise en identité visuelle, UX/UI design et marketing digital.',
  keywords: [
    'agence design Paris',
    'branding',
    'webdesign',
    'marketing digital',
    'stratégie digitale',
    'identité visuelle',
    'UX UI design',
    'brand strategy',
    'shooting produit',
    'agence créative',
  ],
  authors: [{ name: 'Artichaud Studio', url: 'https://artichaud-studio.com' }], // Ajout du .com
  creator: 'Artichaud Studio',
  publisher: 'Artichaud Studio',
  
  // URL de base CORRECTE (Crucial pour le SEO)
  metadataBase: new URL('https://artichaud-studio.com'),
  
  alternates: {
    canonical: 'https://artichaud-studio.com',
  },
  
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://artichaud-studio.com',
    siteName: 'Artichaud Studio',
    title: 'Artichaud Studio | Agence de Design & Marketing Digital',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale. Mettez le feu à vos projets.',
    images: [
      {
        url: '/opengraph-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Artichaud Studio - Mettez le feu à vos projets',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@artichaudstudio',
    creator: '@artichaudstudio',
    title: 'Artichaud Studio | Agence de Design & Marketing Digital',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale. Mettez le feu à vos projets.',
    images: ['/opengraph-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const latestPosts = getLatestPosts(2);
  
  // --- SCHEMA ORG OPTIMISÉ ---
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService', // Mieux que "Organization" pour le SEO Local
    name: 'Artichaud Studio',
    url: 'https://artichaud-studio.com',
    logo: 'https://artichaud-studio.com/img/Logo.avif',
    image: 'https://artichaud-studio.com/opengraph-image.jpg',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale.',
    email: 'artichaud.studio@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris', // Ajoutez l'adresse précise si vous l'avez sur GMB
      addressCountry: 'FR',
    },
    priceRange: "$$",
    // C'est ici qu'on fait le lien officiel avec les réseaux
    sameAs: [
      'https://www.linkedin.com/company/artichaud-studio',
      'https://www.instagram.com/artichaudstudio',
      'https://www.facebook.com/artichaudstudio',
      'https://www.pinterest.com/artichaudstudio', 
    ],
  };

  const selectedWorks = [
    {
      id: 1,
      title: 'Charit.IO',
      slug: 'charit.io',
      number: '01',
      deliverables: ['Webdesign', 'Social media', 'Brand identity'],
      image: '/img/selectedworks/charitio.jpg',
    },
    {
      id: 2,
      title: 'Multiface',
      slug: 'multiface',
      number: '02',
      deliverables: ['Webdesign', 'Brand strategy', 'Brand identity'],
      image: '/img/selectedworks/multiface.jpg',
    },
    {
      id: 3,
      title: 'Disobey',
      slug: 'disobey',
      number: '03',
      deliverables: ['Webdesign', 'Brand strategy', 'Social media'],
      image: '/img/selectedworks/disobey.jpg',
    },
    {
      id: 4,
      title: "Com'on",
      slug: 'comon',
      number: '04',
      deliverables: ['Webdesign', 'Brand strategy', 'Brand identity'],
      image: '/img/selectedworks/comon.jpg',
    },
    {
      id: 5,
      title: 'Keleti tautu',
      slug: 'keletitautu',
      number: '05',
      deliverables: ['Social media', 'Brand strategy', 'Brand identity'],
      image: '/img/selectedworks/keleti.jpg',
    },
  ];

  const services = [
    {
      number: '01',
      title: 'Brand strategy',
      description: 'Audit, positionnement et plateforme de marque. Nous définissons l’ADN unique de votre entreprise pour connecter durablement avec votre audience cible et vous démarquer.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
    },
    {
      number: '02',
      title: 'Visual identity',
      description: 'Création de logo, charte graphique et univers visuel complet. Une identité forte, cohérente et mémorable qui incarne vos valeurs au premier regard.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
    },
    {
      number: '03',
      title: 'Webdesign',
      description: 'Conception de sites web immersifs et performants. Nous allions esthétique et ergonomie (UX/UI) pour offrir une expérience utilisateur fluide qui convertit vos visiteurs.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
    },
    {
      number: '04',
      title: 'Webmarketing',
      description: 'Stratégies d’acquisition (SEO, SEA) et Social Media. Nous boostons votre visibilité en ligne pour générer du trafic qualifié et maximiser votre retour sur investissement.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
    },
    {
      number: '05',
      title: 'Shooting produit',
      description: 'Direction artistique et photographie professionnelle. Des visuels percutants et des packshots haute définition pour sublimer vos produits sur tous vos supports de communication.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
    },
  ];

  return (
    <>
      <ScrollManager />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* 1️⃣ Logo géant */}
        <div className="absolute inset-x-0 bottom-0 z-0 flex justify-center items-end h-full pb-[10vh]">
          <Image
            src="/img/Logo.avif"
            alt="Artichaud Studio Logo"
            width={1200}
            height={400}
            priority 
          />
        </div>

        {/* 2️⃣ Effet chaleur */}
        <div className="absolute inset-0 z-10 mix-blend-normal">
          <HeatEffect />
        </div>

        {/* 3️⃣ Vignette */}
        <div
          aria-hidden
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* 5️⃣ Baseline + flèche */}
        {/* J'ai ajouté l'ID 'hero-text' ici pour que l'animation de scroll fonctionne */}
        <div
          id="hero-text" 
          className="absolute z-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 top-[15vh] sm:top-[18vh] md:top-[25vh] transition-opacity duration-100 ease-out"
        >
          <div className="rounded-full border border-white/25 w-10 h-10 grid place-items-center opacity-80">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/90">
              <path d="M12 5v14m0 0L5 12m7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <p className="text-white/80 uppercase tracking-[0.35em] text-sm text-center">
            METTEZ LE FEU À VOS PROJETS
          </p>
        </div>
      </section>

      {/* ⭐ BARRE ORANGE 90px */}
      <div className="w-full h-[90px] bg-[#E94601]"></div>
      
      {/* SELECTED WORKS */}
      <section className="relative section-padding bg-noir overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <div className="relative h-full max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)]">
            <div className="absolute top-0 bottom-0 w-[1px] bg-blanc/10" style={{ left: '26.5%' }} />
            <div className="absolute top-0 bottom-0 w-[1px] bg-blanc/10" style={{ left: '50%' }} />
            <div className="absolute top-0 bottom-0 w-[1px] bg-blanc/10" style={{ left: '73.5%' }} />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mb-12 lg:mb-20">
            <h2 className="inline">
              <span className="text-blanc font-bold" style={{ fontSize: 'clamp(63px, 6.25vw, 90px)', fontFamily: 'var(--font-inter)' }}>
                Selected
              </span>
              <span className="text-blanc font-light italic ml-4" style={{ fontSize: 'clamp(49px, 4.86vw, 70px)', fontFamily: 'var(--font-instrument)' }}>
                (Works)
              </span>
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-32">
            {selectedWorks.map((work, index) => (
              <WorkItem key={work.id} work={work} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* SERVICES */}
      <ServicesSection services={services} />

      {/* ABOUT */}
      <AboutSection />

   
    </>
  );
}