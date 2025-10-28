import HeatEffect from '@/components/HeatEffect';
import Header from '@/components/header'; // ← AJOUTE CETTE LIGNE
import Link from 'next/link';

import Footer from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artichaud Studio - Agence de Design et Marketing Digital',
  description: 'Artichaud Studio : Agence créative spécialisée en branding, webdesign et stratégie digitale. Mettez le feu à vos projets avec notre expertise.',
  keywords: ['agence design', 'branding', 'webdesign', 'marketing digital', 'stratégie digitale', 'Paris'],
  authors: [{ name: 'Artichaud Studio' }],
  openGraph: {
    title: 'Artichaud Studio - Agence de Design et Marketing Digital',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale.',
    url: 'https://artichaud.studio',
    siteName: 'Artichaud Studio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artichaud Studio',
    description: 'Agence créative spécialisée en branding, webdesign et stratégie digitale.',
  },
};


export default function Home() {
  // ... tout le reste du code
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
      {/* HEADER / NAVIGATION */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* 1️⃣ Logo géant — fond total en largeur */}
        <div className="absolute inset-x-0 bottom-[10vh] z-0 flex justify-center">
          <img
            src="/img/Logo.svg"
            alt="Artichaud logo"
            className="w-screen h-auto object-contain opacity-60"
          />
        </div>

        {/* 2️⃣ Effet chaleur devant le logo */}
        <div className="absolute inset-0 z-10">
          <HeatEffect className="mix-blend-screen opacity-90 blur-3xl" />
        </div>

        {/* 3️⃣ Vignette sombre sur les bords */}
        <div
          aria-hidden
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.8) 100%)',
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
    <div className="relative h-full max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)]">
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
        <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
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
        <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
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
      <div className="col-span-1 px-0">
        <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
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
      <div className="col-span-1 px-0">
        <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
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
      <div className="col-span-2 px-0">
        <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
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
    <img src={work.image} alt={work.title} className="w-full h-auto object-cover" />
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
<div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
    <div className="relative h-full max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)]">
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
          style={{
            borderBottom: index === services.length - 1 ? '1px solid rgba(233, 70, 1, 0.2)' : 'none'
          }}
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
            {/* Layout Desktop - Grid 4 colonnes */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-0 min-h-[200px]">
              {/* Numéro - Zone 1 (0-25%) */}
              <div className="col-span-1 flex items-start py-12 pl-8">
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
              <div className="col-span-1 pr-8 flex flex-col justify-start py-12">
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

              {/* Image 1 - Zone 3 (50-75%) - Apparaît au hover */}
              <div className="col-span-1 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.image1 && (
                    <img 
                      src={service.image1} 
                      alt={`${service.title} 1`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Image 2 - Zone 4 (75-100%) - Apparaît au hover */}
              <div className="col-span-1 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.image2 && (
                    <img 
                      src={service.image2} 
                      alt={`${service.title} 2`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Layout Mobile - Empilement vertical */}
            <div className="lg:hidden py-8 px-4">
              {/* Numéro et Titre sur la même ligne */}
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

              {/* Description */}
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
</section>{/* ABOUT ARTICHAUD */}
<section className="relative bg-noir" id="about">
  {/* Dégradé de fond rouge-orange en bas */}
  <div
    className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
    style={{
      background:
        'linear-gradient(180deg, rgba(255,0,0,0) 0%, #FF0000 40%, #FF6F00 70%, #FF9D00 100%)',
    }}
  />

  {/* 🧱 TITRE STICKY — effet liquid glass (iPhone-like) */}
  <div
    className="sticky z-40 w-full top-[80px] flex items-center justify-center
               bg-transparent
               backdrop-saturate-150
               backdrop-blur-[14px]"
    style={{
      WebkitBackdropFilter: 'blur(14px) saturate(150%)',
    }}
  >
    <h2
      className="w-full text-center font-bold uppercase
                 py-6
                 leading-none"
      style={{
        fontSize: 'clamp(91px, 9.03vw, 130px)',
        fontFamily: 'var(--font-inter)',
        color: '#F2F2F2',
        letterSpacing: '-0.02em',
      }}
    >
      About artichaud
    </h2>
  </div>

  {/* 🧭 CONTENU DÉFILANT */}
  <div className="relative z-10 overflow-hidden">
    {/* Polaroids positionnés en cascade */}
    <div className="relative min-h-[800px] lg:min-h-[1400px] px-[clamp(1rem,3vw,3rem)] mb-20">

      {/* Charlotte */}
      <div
        className="absolute z-30 left-1/2 -translate-x-1/2 lg:left-[25%] lg:translate-x-0"
        style={{
          top: 'clamp(40px, 5vw, 80px)',
          transform: 'translateX(-50%) rotate(3deg)',
        }}
      >
        <div className="relative bg-white p-4 pb-16 shadow-2xl">
          <img
            src="/img/about/charlotte.jpg"
            alt="Charlotte"
            className="w-[clamp(180px, 20vw, 210px)] h-[clamp(220px, 25vw, 250px)] object-cover"
          />
          <p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center italic"
            style={{
              fontFamily: 'var(--font-instrument)',
              fontSize: 'clamp(14px, 1.18vw, 17px)',
              color: '#000',
            }}
          >
            ( Charlotte )
          </p>
        </div>
      </div>

      {/* Clément */}
      <div
        className="absolute z-20 left-1/2 -translate-x-1/2 lg:left-[52%] lg:translate-x-0"
        style={{
          top: 'clamp(300px, 35vw, 400px)',
          transform: 'translateX(-50%) rotate(8deg)',
        }}
      >
        <div className="relative bg-white p-4 pb-16 shadow-2xl">
          <img
            src="/img/about/Clement.jpg"
            alt="Clément"
            className="w-[clamp(180px, 20vw, 210px)] h-[clamp(220px, 25vw, 250px)] object-cover"
          />
          <p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center italic"
            style={{
              fontFamily: 'var(--font-instrument)',
              fontSize: 'clamp(14px, 1.18vw, 17px)',
              color: '#000',
            }}
          >
            ( Clément )
          </p>
        </div>
      </div>

      {/* Arti */}
      <div
        className="absolute z-10 left-1/2 -translate-x-1/2 lg:left-[18%] lg:translate-x-0"
        style={{
          top: 'clamp(560px, 65vw, 750px)',
          transform: 'translateX(-50%) rotate(-12deg)',
        }}
      >
        <div className="relative bg-white p-4 pb-16 shadow-2xl">
          <img
            src="/img/about/Polaarti.jpg"
            alt="Arti"
            className="w-[clamp(180px, 20vw, 210px)] h-[clamp(220px, 25vw, 250px)] object-cover"
          />
          <p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center italic"
            style={{
              fontFamily: 'var(--font-instrument)',
              fontSize: 'clamp(14px, 1.18vw, 17px)',
              color: '#000',
            }}
          >
            ( Arti )
          </p>
        </div>
      </div>
    </div>

    {/* Bloc Mission */}
    <div className="relative z-10 pb-32 px-[clamp(1rem,3vw,3rem)]">
      <h4
        className="mb-6"
        style={{
          color: '#F2F2F2',
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(13px, 1.25vw, 18px)',
          fontWeight: 700,
          lineHeight: '140%',
          textTransform: 'uppercase',
        }}
      >
        NOTRE MISSION
      </h4>
      <p
        className="max-w-2xl"
        style={{
          color: '#F2F2F2',
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(16px, 1.53vw, 22px)',
          fontWeight: 300,
          lineHeight: '140%',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </div>
  </div>
</section>


      {/* ACTUALITY (BLOG) */}
      <section className="section-padding bg-gradient-to-b from-noir to-orange/10">
        <div className="container-custom">
          <h2 className="mb-20">
            Actuality{' '}
            <span className="font-light italic opacity-60">( crousti )</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Article 1 */}
            <article className="group cursor-pointer">
              <Link href="/blog">
                <div className="aspect-[3/2] bg-gradient-to-br from-orange/30 to-rouge/30 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                    📝
                  </div>
                </div>
                <p className="text-orange font-light italic mb-3">( design )</p>
                <h3 className="text-3xl font-bold group-hover:text-orange transition-colors">
                  Guide to rebranding
                </h3>
              </Link>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer">
              <Link href="/blog">
                <div className="aspect-[3/2] bg-gradient-to-br from-orange/30 to-rouge/30 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                    📝
                  </div>
                </div>
                <p className="text-orange font-light italic mb-3">
                  ( marketing )
                </p>
                <h3 className="text-3xl font-bold group-hover:text-orange transition-colors">
                  Win to the salsifi
                </h3>
              </Link>
            </article>
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