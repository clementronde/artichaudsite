import HeatEffect from '@/components/HeatEffect';
import Header from '@/components/header'; // ← AJOUTE CETTE LIGNE
import Link from 'next/link';

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
    image1: '/services/visual-identity-1.jpg',
    image2: '/services/visual-identity-2.jpg',
  },
  {
    number: '03',
    title: 'Webdesign',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image1: '/services/webdesign-1.jpg',
    image2: '/services/webdesign-2.jpg',
  },
  {
    number: '04',
    title: 'Webmarketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image1: '/services/webmarketing-1.jpg',
    image2: '/services/webmarketing-2.jpg',
  },
  {
    number: '05',
    title: 'Shooting produit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image1: '/services/shooting-1.jpg',
    image2: '/services/shooting-2.jpg',
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
{/* SELECTED WORKS */}
<section className="relative section-padding bg-noir overflow-hidden">
  
  {/* Traits verticaux */}
<div className="absolute inset-0 pointer-events-none z-0">
  <div className="relative h-full max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)]">
    <div 
      className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
      style={{ left: '25%' }}
    />
    <div 
      className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
      style={{ left: '50%' }}
    />
    <div 
      className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
      style={{ left: '75%' }}
    />
  </div>
</div>

  <div className="container-custom relative z-10">
    {/* Titre */}
    <div className="mb-20">
      <h2 className="inline">
        <span 
          className="text-blanc font-bold"
          style={{ fontSize: 'clamp(63px, 6.25vw, 90px)', fontFamily: 'var(--font-inter)' }}
        >
          Selected
        </span>
        <span 
          className="text-blanc font-semibold italic ml-4"
          style={{ fontSize: 'clamp(49px, 4.86vw, 70px)', fontFamily: 'var(--font-instrument)' }}
        >
          (Works)
        </span>
      </h2>
    </div>

    {/* Projets */}
    <div className="space-y-32">
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
              <div className="col-span-1">
                <img src={work.image} alt={work.title} className="w-full h-auto object-contain" />
              </div>
              <div className="col-span-1 pl-12 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                  <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
                    {work.title}
                  </h3>
                  <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0, textAlign: 'center'}}>
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
              <div className="col-span-2">
                <img src={work.image} alt={work.title} className="w-full h-auto object-contain" />
              </div>
              <div className="col-span-1 pl-12 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                  <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
                    {work.title}
                  </h3>
                  <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0, textAlign: 'center'}}>
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
              <div className="col-span-1">
                <img src={work.image} alt={work.title} className="w-full h-auto object-contain" />
              </div>
              <div className="col-span-1 pl-12 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                  <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
                    {work.title}
                  </h3>
                  <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0, textAlign: 'center'}}>
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
              <div className="col-span-1">
                <img src={work.image} alt={work.title} className="w-full h-auto object-contain" />
              </div>
              <div className="col-span-1 pl-12 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                  <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
                    {work.title}
                  </h3>
                  <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0, textAlign: 'center'}}>
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
              <div className="col-span-2">
                <img src={work.image} alt={work.title} className="w-full h-auto object-contain" />
              </div>
              <div className="col-span-1 pl-12 flex flex-col">
                <div className="flex items-start justify-between mb-auto">
                  <h3 style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
                    {work.title}
                  </h3>
                  <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0, textAlign: 'center'}}>
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
        <div className="lg:hidden">
          <img src={work.image} alt={work.title} className="w-full h-auto object-contain mb-6" />
          <div className="flex items-start gap-6">
            <span className="flex-shrink-0" style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
              ( {work.number} )
            </span>
            <div className="flex-1">
              <h3 className="mb-6" style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', textAlign: 'center'}}>
                {work.title}
              </h3>
              <div>
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
        </div>

      </article>
    );
  })}
</div>
  </div>
</section>
      {/* SERVICES */}
{/* SERVICES */}
<section className="relative section-padding bg-noir overflow-hidden">
  {/* Traits verticaux */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="relative h-full max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)]">
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
        style={{ left: '25%' }}
      />
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
        style={{ left: '50%' }}
      />
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-blanc/10"
        style={{ left: '75%' }}
      />
    </div>
  </div>

  <div className="container-custom relative z-10">
    {/* Titre */}
    <div className="mb-20">
      <h2 className="inline">
        <span 
          className="text-blanc font-bold"
          style={{ fontSize: 'clamp(63px, 6.25vw, 90px)', fontFamily: 'var(--font-inter)' }}
        >
          Services
        </span>
        <span 
          className="text-blanc font-semibold italic ml-4"
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
          className="group relative cursor-pointer transition-all duration-500 border-t border-orange/20 hover:border-transparent"
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
          <div className="relative grid grid-cols-4 gap-0 min-h-[200px]">
            {/* Numéro - Zone 1 (0-25%) */}
            <div className="col-span-1 flex items-center py-12">
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
            <div className="col-span-1 pr-8 flex flex-col justify-center py-12">
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
        </div>
      ))}
    </div>
  </div>
</section>
   {/* ABOUT ARTICHAUD */}
<section className="relative bg-noir" id="about">
  {/* Dégradé de fond rouge-orange en bas */}
  <div
    className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none"
    style={{
      background:
        'linear-gradient(180deg, rgba(255,0,0,0) 0%, #FF0000 40%, #FF6F00 70%, #FF9D00 100%)',
    }}
  />

 {/* 🧱 TITRE STICKY — liquid glass (iPhone-like) */}
<div
  className="sticky z-40 w-full top-[80px] flex items-center justify-center
             bg-transparent
             backdrop-saturate-150
             backdrop-blur-[14px]"  /* flou derrière seulement */
  style={{
    WebkitBackdropFilter: 'blur(14px) saturate(150%)', // Safari/iOS
  }}
>
  <h2
    className="w-full text-center font-bold uppercase
               py-6  /* léger pour que le flou suive la hauteur du titre */
               leading-none"
    style={{
      fontSize: 'clamp(91px, 9.03vw, 130px)', // plus grand si tu veux
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
    {/* Polaroids */}
    {/* Images équipe (sans cadre polaroid) */}
<div className="relative min-h-[900px] mb-32">
  {/* Charlotte — centrée en haut, nom à droite de l'image */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
    <div className="flex items-center gap-6">
      <img
        src="/img/about/charlotte.jpg"
        alt="Charlotte"
        className="w-[clamp(175px, 17.36vw, 250px)] h-[clamp(210px, 20.83vw, 300px)] object-cover rounded-md"
      />
      <p
        className="text-blanc italic"
        style={{ fontFamily: 'var(--font-instrument)', fontSize: 'clamp(14.0px, 1.39vw, 20px)' }}
      >
        ( Charlotte )
      </p>
    </div>
  </div>

  {/* Clément — en dessous à droite, nom à droite de l'image */}
  <div className="absolute top-[clamp(196px, 19.44vw, 280px)] left-[60%] z-20">
    <div className="flex items-center gap-6">
      <img
        src="/img/about/Clement.jpg"
        alt="Clément"
        className="w-[clamp(175px, 17.36vw, 250px)] h-[clamp(210px, 20.83vw, 300px)] object-cover rounded-md"
      />
      <p
        className="text-blanc italic"
        style={{ fontFamily: 'var(--font-instrument)', fontSize: 'clamp(14.0px, 1.39vw, 20px)' }}
      >
        ( Clément )
      </p>
    </div>
  </div>

  {/* Arti — encore plus bas à gauche, nom à droite de l'image */}
  <div className="absolute top-[clamp(392px, 38.89vw, 560px)] left-[25%] z-10">
    <div className="flex items-center gap-6">
      <img
        src="/img/about/Polaarti.jpg"
        alt="Arti"
        className="w-[clamp(175px, 17.36vw, 250px)] h-[clamp(210px, 20.83vw, 300px)] object-cover rounded-md"
      />
      <p
        className="text-blanc italic"
        style={{ fontFamily: 'var(--font-instrument)', fontSize: 'clamp(14.0px, 1.39vw, 20px)' }}
      >
        ( Arti )
      </p>
    </div>
  </div>
</div>


    {/* Mission */}
    <div className="relative z-10 pb-32">
      <h4
        className="mb-8"
        style={{
          color: '#F2F2F2',
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(15.4px, 1.53vw, 22px)',
          fontWeight: 700,
          lineHeight: '140%',
          textTransform: 'uppercase',
        }}
      >
        NOTRE MISSION
      </h4>
      <p
        className="max-w-4xl"
        style={{
          color: '#F2F2F2',
          fontFamily: 'var(--font-inter)',
          fontSize: 'clamp(31.5px, 3.12vw, 45px)',
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

      {/* FOOTER */}
      <footer className="bg-orange text-blanc section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Explore */}
            <div>
              <h5 className="text-sm uppercase tracking-wider mb-6 font-bold">
                EXPLORE
              </h5>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/works"
                  className="hover:translate-x-2 transition-transform"
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className="hover:translate-x-2 transition-transform"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:translate-x-2 transition-transform"
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="hover:translate-x-2 transition-transform"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="hover:translate-x-2 transition-transform"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Stalk us */}
            <div>
              <h5 className="text-sm uppercase tracking-wider mb-6 font-bold">
                STALK US
              </h5>
              <nav className="flex flex-col gap-3">
                <a
                  href="#"
                  className="hover:translate-x-2 transition-transform"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:translate-x-2 transition-transform"
                >
                  Tiktok
                </a>
                <a
                  href="#"
                  className="hover:translate-x-2 transition-transform"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:translate-x-2 transition-transform"
                >
                  Pinterest
                </a>
              </nav>
            </div>

            {/* Say hello */}
            <div className="md:col-span-2">
              <h5 className="text-sm uppercase tracking-wider mb-6 font-bold">
                SAY HELLO
              </h5>
              <a
                href="mailto:artichaud.studio@gmail.com"
                className="hover:underline text-lg break-all"
              >
                artichaud.studio@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-blanc/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4 text-sm">
              <button className="font-bold hover:underline">FR</button>
              <span>/</span>
              <button className="opacity-70 hover:underline">EN</button>
            </div>

            <div className="text-center">
              <p className="text-2xl font-light italic">
                Mettez le feu à vos projets 🔥
              </p>
            </div>

            <div className="w-12 h-12 bg-blanc rounded-full flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
          </div>
        </div>
      </footer>
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