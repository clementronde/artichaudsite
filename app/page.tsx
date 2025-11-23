import HeatEffect from '@/components/HeatEffect';
import Header from '@/components/header'; 
import Link from 'next/link';
import { getLatestPosts } from '@/lib/blog';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import Image from 'next/image';
import AboutSection from '@/components/AboutSection';


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
  
  // Auteur et créateur
  authors: [{ name: 'Artichaud Studio', url: 'https://artichaud-studio' }],
  creator: 'Artichaud Studio',
  publisher: 'Artichaud Studio',
  
  // URL de base (important pour les chemins relatifs)
  metadataBase: new URL('https://artichaud-studio'),
  
  // URL canonique (évite le duplicate content)
  alternates: {
    canonical: 'https://artichaud-studio',
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://artichaud-studio',
    siteName: 'Artichaud Studio',
    title: 'Artichaud Studio | Agence de Design & Marketing Digital',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale. Mettez le feu à vos projets avec notre expertise.',
    images: [
      {
        url: '/opengraph-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Artichaud Studio - Mettez le feu à vos projets',
      },
    ],
  },
  
  // Twitter Cards
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
  
  verification: {
    // google: 'ton-code-ici', // Décommente quand tu auras le code
  },
};


export default function Home() {
  // ... tout le reste du code
    const latestPosts = getLatestPosts(2);
  // Schema.org pour l'organisation
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Artichaud Studio',
    url: 'https://artichaud-studio',
    logo: 'https://artichaud-studio/img/Logo.svg',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    email: 'artichaud.studio@gmail.com',
    sameAs: [
      'https://www.instagram.com/artichaudstudio',
      'https://www.linkedin.com/company/artichaud-studio',
      'https://www.tiktok.com/@artichaudstudio',
      'https://www.pinterest.com/artichaudstudio',
    ],
  };

  const selectedWorks = [
    {
      id: 1,
      title: 'Charit.IO',
      number: '01',
      deliverables: ['Webdesign', 'Social media', 'Brand identity'],
      image: '/img/selectedworks/charitio.jpg',
    },
    {
      id: 2,
      title: 'Multiface',
      number: '02',
      deliverables: ['Webdesign', 'Brand strategy', 'Brand identity'],
      image: '/img/selectedworks/multiface.jpg',
    },
    {
      id: 3,
      title: 'Disobey',
      number: '03',
      deliverables: ['Webdesign', 'Brand strategy', 'Social media'],
      image: '/img/selectedworks/disobey.jpg',
    },
    {
      id: 4,
      title: "Com'on",
      number: '04',
      deliverables: ['Webdesign', 'Brand strategy', 'Brand identity'],
      image: '/img/selectedworks/comon.jpg',
    },
    {
      id: 5,
      title: 'Keleti tautu',
      number: '05',
      deliverables: ['Social media', 'Brand strategy', 'Brand identity'],
      image: '/img/selectedworks/keleti.jpg',
    },
  ];

  // Dans app/page.tsx, mettre à jour le tableau services :

const services = [
  {
    number: '01',
    title: 'Brand strategy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image1: '/img/services/brandstrategy1.jpg',
    image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '02',
    title: 'Visual identity',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '03',
    title: 'Webdesign',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '04',
    title: 'Webmarketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '05',
    title: 'Shooting produit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image1: '/img/services/brandstrategy1.jpg',
      image2: '/img/services/brandstrategy2.jpg',
  },
];

  return (
    <>
       {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* HEADER / NAVIGATION */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* 1️⃣ Logo géant — fond total en largeur */}
       {/* 1️⃣ Logo géant — EN ARRIÈRE PLAN (z-0) */}
  <div className="absolute inset-x-0 bottom-0 z-0 flex justify-center items-end h-full pb-[10vh]">
    <Image
      src="/img/Logo.svg"
      alt="Artichaud logo"
      width={1200} 
      height={400}
      // Opacité à 100% car c'est la chaleur qui le cache par défaut
      className="w-[90vw] max-w-[1600px] h-auto object-contain opacity-100" 
    />
  </div>

  {/* 2️⃣ Effet chaleur — AU PREMIER PLAN (z-10) */}
  {/* C'est ce calque qui sera "troué" par la souris */}
  <div className="absolute inset-0 z-10 mix-blend-normal">
    <HeatEffect />
  </div>

  {/* 3️⃣ Vignette et Texte — ENCORE PLUS DEVANT (z-20) */}
  <div
    aria-hidden
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      // Léger dégradé pour assombrir les bords
      background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
    }}
  />

        {/* 5️⃣ Baseline + flèche — plus bas maintenant */}
        <div
          className="absolute z-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4
                  top-[15vh] sm:top-[18vh] md:top-[25vh]"
        >
          <div className="rounded-full border border-white/25 w-10 h-10 grid place-items-center opacity-80">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-white/90"
            >
              <path
                d="M12 5v14m0 0L5 12m7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
  
  {/* Traits verticaux - Cachés sur mobile */}
  <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
    <div className="relative h-full max-w-[1600px] mx-auto px-[clamp(1rem,3vw,3rem)]">
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
        style={{ left: '26.5%' }}
      />
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
        style={{ left: '50%' }}
      />
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
        style={{ left: '73.5%' }}
      />
    </div>
  </div>

  <div className="container-custom relative z-10">
    {/* Titre */}
    <div className="mb-12 lg:mb-20">
      <h2 className="inline">
        <span 
          className="text-blanc font-bold"
          style={{ fontSize: 'clamp(63px, 6.25vw, 90px)', fontFamily: 'var(--font-inter)' }}
        >
          Selected
        </span>
        <span 
          className="text-blanc font-light italic ml-4"
          style={{ fontSize: 'clamp(49px, 4.86vw, 70px)', fontFamily: 'var(--font-instrument)' }}
        >
          (Works)
        </span>
      </h2>
    </div>

    {/* Projets */}
    <div className="space-y-16 lg:space-y-32">
      {selectedWorks.map((work, index) => {
        // Définir le layout selon l'index
        let layout;
        if (index === 0) layout = 'charitio';      // Image 50-75%, Texte 75-100%
        else if (index === 1) layout = 'multiface'; // Image 0-50%, Texte 50-75%
        else if (index === 2) layout = 'disobey';   // Image 25-50%, Texte 50-75%
        else if (index === 3) layout = 'comon';     // Image 0-25%, Texte 25-50%
        else if (index === 4) layout = 'keleti';    // Image 25-75%, Texte 75-100%
        
        return (
          <article key={work.id} className="relative">
            
            {/* DESKTOP */}
<div className="hidden lg:block">
  {layout === 'charitio' && (
    <div className="relative grid grid-cols-4 gap-0">
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-1 px-0">
  <div className="relative w-full aspect-[4/3]">
    <Image 
      src={work.image} 
      alt={work.title} 
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
</div>
      <div className="col-span-1 pl-6 pr-6 flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase'}}>
            {work.title}
          </h3>
          <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0}}>
            ( {work.number} )
          </span>
        </div>
        <div className="mt-auto">
          <p className="mb-3" style={{color: 'rgba(255, 255, 255, 0.70)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 300, lineHeight: '140%'}}>
            Deliverables
          </p>
          <ul className="space-y-2">
            {work.deliverables.map((deliverable, i) => (
              <li key={i} style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 400, lineHeight: '140%', textTransform: 'uppercase'}}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )}

  {layout === 'multiface' && (
    <div className="relative grid grid-cols-4 gap-0">
      <div className="col-span-2 px-0">
  <div className="relative w-full aspect-[4/3]">
    <Image 
      src={work.image} 
      alt={work.title} 
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
</div>
      <div className="col-span-1 pl-6 pr-6 flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase'}}>
            {work.title}
          </h3>
          <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0}}>
            ( {work.number} )
          </span>
        </div>
        <div className="mt-auto">
          <p className="mb-3" style={{color: 'rgba(255, 255, 255, 0.70)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 300, lineHeight: '140%'}}>
            Deliverables
          </p>
          <ul className="space-y-2">
            {work.deliverables.map((deliverable, i) => (
              <li key={i} style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 400, lineHeight: '140%', textTransform: 'uppercase'}}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  )}

  {layout === 'disobey' && (
    <div className="relative grid grid-cols-4 gap-0">
      <div className="col-span-1"></div>
       <div className="relative w-full aspect-[4/3]">
    <Image 
      src={work.image} 
      alt={work.title} 
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
      <div className="col-span-1 pl-6 pr-6 flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase'}}>
            {work.title}
          </h3>
          <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0}}>
            ( {work.number} )
          </span>
        </div>
        <div className="mt-auto">
          <p className="mb-3" style={{color: 'rgba(255, 255, 255, 0.70)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 300, lineHeight: '140%'}}>
            Deliverables
          </p>
          <ul className="space-y-2">
            {work.deliverables.map((deliverable, i) => (
              <li key={i} style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 400, lineHeight: '140%', textTransform: 'uppercase'}}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  )}

  {layout === 'comon' && (
    <div className="relative grid grid-cols-4 gap-0">
       <div className="relative w-full aspect-[4/3]">
    <Image 
      src={work.image} 
      alt={work.title} 
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
      <div className="col-span-1 pl-6 pr-6 flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase'}}>
            {work.title}
          </h3>
          <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0}}>
            ( {work.number} )
          </span>
        </div>
        <div className="mt-auto">
          <p className="mb-3" style={{color: 'rgba(255, 255, 255, 0.70)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 300, lineHeight: '140%'}}>
            Deliverables
          </p>
          <ul className="space-y-2">
            {work.deliverables.map((deliverable, i) => (
              <li key={i} style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 400, lineHeight: '140%', textTransform: 'uppercase'}}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  )}

  {layout === 'keleti' && (
    <div className="relative grid grid-cols-4 gap-0">
      <div className="col-span-1"></div>
       <div className="relative w-full aspect-[4/3]">
    <Image 
      src={work.image} 
      alt={work.title} 
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
      <div className="col-span-1 pl-6 pr-6 flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase'}}>
            {work.title}
          </h3>
          <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0}}>
            ( {work.number} )
          </span>
        </div>
        <div className="mt-auto">
          <p className="mb-3" style={{color: 'rgba(255, 255, 255, 0.70)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 300, lineHeight: '140%'}}>
            Deliverables
          </p>
          <ul className="space-y-2">
            {work.deliverables.map((deliverable, i) => (
              <li key={i} style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 400, lineHeight: '140%', textTransform: 'uppercase'}}>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )}
</div>

            {/* MOBILE */}
<div className="lg:hidden bg-[#1a1a1a] rounded-lg overflow-hidden">
  {/* Titre et Numéro au-dessus */}
  <div className=" pb-4">
    <div className="flex items-start justify-between">
      <h3 style={{
        color: '#F2F2F2', 
        fontFamily: 'var(--font-inter)', 
        fontSize: '14px', 
        fontWeight: 700, 
        lineHeight: '140%', 
        textTransform: 'uppercase'
      }}>
        {work.title}
      </h3>
      <span style={{
        color: '#F2F2F2', 
        fontFamily: 'var(--font-inter)', 
        fontSize: '14px', 
        fontWeight: 700, 
        lineHeight: '140%', 
        textTransform: 'uppercase',
        marginLeft: '16px',
        flexShrink: 0
      }}>
        ( {work.number} )
      </span>
    </div>
  </div>

  {/* Image pleine largeur */}
 <div className="w-full">
  <div className="relative w-full aspect-[4/3]">
    <Image 
      src={work.image} 
      alt={work.title} 
      fill
      sizes="100vw"
      className="object-cover"
    />
  </div>
</div>
  
  {/* Deliverables en dessous */}
  <div className=" pt-4">
    <p className="mb-3" style={{
      color: 'rgba(255, 255, 255, 0.70)', 
      fontFamily: 'var(--font-inter)', 
      fontSize: '11px', 
      fontWeight: 300, 
      lineHeight: '140%'
    }}>
      Deliverables
    </p>
    <ul className="space-y-2">
      {work.deliverables.map((deliverable, i) => (
        <li key={i} style={{
          color: '#F2F2F2', 
          fontFamily: 'var(--font-inter)', 
          fontSize: '11px', 
          fontWeight: 400, 
          lineHeight: '140%', 
          textTransform: 'uppercase'
        }}>
          {deliverable}
        </li>
      ))}
    </ul>
  </div>
</div>

          </article>
        );
      })}
    </div>
  </div>
</section>
{/* SERVICES */}
<section className="relative section-padding bg-noir overflow-hidden">
  
  {/* 1. BACKGROUND LIGNES (Pleine largeur) */}
  

  {/* 2. CONTENU (Pleine largeur) */}
  {/* Remplacement de container-custom par w-full + padding */}
  <div className="w-full px-6 lg:px-10 relative z-10">
    
    {/* Titre */}
    <div className="mb-12 lg:mb-20">
      <h2 className="inline">
        <span 
          className="text-blanc font-bold"
          style={{ fontSize: 'clamp(63px, 6.25vw, 90px)', fontFamily: 'var(--font-inter)' }}
        >
          Services
        </span>
        <span 
          className="text-blanc font-light italic ml-4"
          style={{ fontSize: 'clamp(49px, 4.86vw, 70px)', fontFamily: 'var(--font-instrument)' }}
        >
          (yeah)
        </span>
      </h2>
    </div>

    {/* Liste des services */}
    <div className="space-y-0">
      {services.map((service, index) => (
        <div
          key={service.number}
          className="group relative cursor-pointer transition-all duration-500 border-t border-blanc/20 hover:border-transparent"
          // J'ai nettoyé le style borderBottom inutile ici
        >
          {/* Fond hover avec dégradé */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(90deg, #FF0000 0%, #FF6F00 50%, #FF9D00 100%)'
            }}
          />

          {/* Contenu */}
          <div className="relative">
            {/* Layout Desktop - Grid 4 colonnes PLEINE LARGEUR */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-0 min-h-[200px]">
              
              {/* Numéro - Zone 1 (0-25%) */}
              <div className="col-span-1 flex items-start py-12 pl-4">
                <span 
                  style={{
                    color: '#F2F2F2',
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(11.2px, 1.11vw, 16px)',
                    fontWeight: 700,
                    lineHeight: '140%',
                    textTransform: 'uppercase'
                  }}
                >
                  ( {service.number} )
                </span>
              </div>

              {/* Titre et description - Zone 2 (25-50%) */}
              {/* Ajout border-l pour marquer la colonne */}
              <div className="col-span-1 pr-8 flex flex-col justify-start py-12 pl-6 border-l border-blanc/10 group-hover:border-transparent transition-colors">
                <h3 
                  className="mb-4"
                  style={{
                    color: '#F2F2F2',
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(15.4px, 1.53vw, 22px)',
                    fontWeight: 700,
                    lineHeight: '140%',
                    textTransform: 'uppercase'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  style={{
                    color: 'rgba(255, 255, 255, 0.70)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: '140%'
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Image 1 - Zone 3 (50-75%) */}
              <div className="col-span-1 relative overflow-hidden min-h-[200px] border-l border-blanc/10 group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.image1 && (
                    <div className="relative w-full h-full">
                      <Image 
                        src={service.image1} 
                        alt={`${service.title} 1`}
                        fill
                        sizes="25vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Image 2 - Zone 4 (75-100%) */}
              <div className="col-span-1 relative overflow-hidden min-h-[200px] border-l border-blanc/10 group-hover:border-transparent transition-colors">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Correction ici: check image2 et non image1 */}
                  {service.image2 && (
                    <div className="relative w-full h-full">
                      <Image 
                        src={service.image2} 
                        alt={`${service.title} 2`}
                        fill
                        sizes="25vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Layout Mobile - Empilement vertical (Inchangé) */}
            <div className="lg:hidden py-8 px-4">
              <div className="flex items-start gap-4 mb-4">
                <span 
                  style={{
                    color: '#F2F2F2',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    fontWeight: 700,
                    lineHeight: '140%',
                    textTransform: 'uppercase',
                    flexShrink: 0
                  }}
                >
                  ( {service.number} )
                </span>
                <h3 
                  style={{
                    color: '#F2F2F2',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '140%',
                    textTransform: 'uppercase'
                  }}
                >
                  {service.title}
                </h3>
              </div>
              <p 
                className="pl-0"
                style={{
                  color: 'rgba(255, 255, 255, 0.70)',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: '140%'
                }}
              >
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ABOUT ARTICHAUD */}
<AboutSection />
      {/* ACTUALITY (BLOG) */}
      <section className="relative section-padding bg-noir overflow-hidden">
        <div className="container-custom">
          {/* Titre */}
          <div className="mb-12 lg:mb-20">
            <h2 className="inline">
              <span 
                className="text-blanc font-bold"
                style={{ 
                  fontSize: 'clamp(63px, 6.25vw, 90px)', 
                  fontFamily: 'var(--font-inter)' 
                }}
              >
                Actuality
              </span>
              <span 
                className="text-blanc font-light italic ml-4"
                style={{ 
                  fontSize: 'clamp(49px, 4.86vw, 70px)', 
                  fontFamily: 'var(--font-instrument)' 
                }}
              >
                ( crousti )
              </span>
            </h2>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {latestPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`}>
                  <p 
                    className="mb-3"
                    style={{
                      color: '#F2F2F2',
                      fontFamily: 'var(--font-instrument)',
                      fontSize: 'clamp(14px, 1.18vw, 17px)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                    }}
                  >
                    ( {post.category.toUpperCase()} )
                  </p>
                  <h3 
                    className="mb-6 uppercase group-hover:text-orange transition-colors"
                    style={{
                      color: '#F2F2F2',
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(20px, 2.08vw, 30px)',
                      fontWeight: 700,
                      lineHeight: '120%',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {post.title}
                  </h3>
                
<div className="aspect-[4/3] overflow-hidden rounded-lg">
  {/* Ajout du conteneur relative et utilisation de fill */}
  <div className="relative w-full h-full"> 
    <Image 
      src={post.image} 
      alt={post.title}
      fill 
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {/* Script pour faire disparaître le texte au scroll */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.addEventListener('scroll', function() {
    const heroText = document.getElementById('hero-text');
    const scrolled = window.scrollY;
    const opacity = Math.max(0, 1 - scrolled / 300);
    const translateY = scrolled * 0.5;
    
    if (heroText) {
      heroText.style.opacity = opacity;
      heroText.style.transform = 'translateY(' + translateY + 'px)';
    }
  });
`,
        }}
      />
    </>
  );
}
