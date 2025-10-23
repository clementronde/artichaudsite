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
      image: '/works/charitio.jpg',
    },
    {
      id: 2,
      title: 'Multiface',
      number: '02',
      deliverables: ['Webdesign', 'Brand strategy', 'Brand identity'],
      image: '/works/multiface.jpg',
    },
    {
      id: 3,
      title: 'Disobey',
      number: '03',
      deliverables: ['Webdesign', 'Brand strategy', 'Social media'],
      image: '/works/disobey.jpg',
    },
    {
      id: 4,
      title: "Com'on",
      number: '04',
      deliverables: ['Webdesign', 'Brand strategy', 'Brand identity'],
      image: '/works/comon.jpg',
    },
    {
      id: 5,
      title: 'Keleti tautu',
      number: '05',
      deliverables: ['Social media', 'Brand strategy', 'Brand identity'],
      image: '/works/keleti.jpg',
    },
  ];

  const services = [
    {
      number: '01',
      title: 'Brand strategy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      number: '02',
      title: 'Visual identity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      number: '03',
      title: 'Webdesign',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      number: '04',
      title: 'Webmarketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      number: '05',
      title: 'Shooting produit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
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
<section className="relative section-padding bg-[#191919] overflow-hidden">
  
  {/* Traits verticaux - 3 lignes pour diviser en 4 parties */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="relative h-full max-w-[1400px] mx-auto">
      {/* Trait 1 - à 25% */}
      <div 
        className="absolute top-0 bottom-0 w-[0.6px] bg-blanc/16"
        style={{ left: '25%' }}
      />
      {/* Trait 2 - à 50% */}
      <div 
        className="absolute top-0 bottom-0 w-[0.6px] bg-blanc/16"
        style={{ left: '50%' }}
      />
      {/* Trait 3 - à 75% */}
      <div 
        className="absolute top-0 bottom-0 w-[0.6px] bg-blanc/16"
        style={{ left: '75%' }}
      />
    </div>
  </div>

  <div className="container-custom relative z-10">
    {/* Titre stylisé */}
    <div className="mb-20">
      <h2 className="inline">
        <span 
          className="text-blanc font-bold leading-[126px]"
          style={{ fontSize: '90px', fontFamily: 'Inter' }}
        >
          Selected
        </span>
        <span 
          className="text-blanc font-semibold italic leading-[98px] ml-4"
          style={{ fontSize: '70px', fontFamily: 'Instrument Serif, serif' }}
        >
          (Works)
        </span>
      </h2>
    </div>

    {/* Liste des projets */}
    <div className="space-y-32">
      {selectedWorks.map((work, index) => (
        <article
          key={work.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image du projet */}
          <div
            className={`relative aspect-[4/3] bg-gradient-to-br from-orange/20 to-rouge/20 rounded-2xl overflow-hidden group ${
              index % 2 === 1 ? 'lg:order-2' : ''
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center text-8xl">
              🔥
            </div>
            {/* Ajoute tes images ici plus tard */}
          </div>

          {/* Infos du projet */}
          <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
            <div className="flex items-start gap-8 mb-6">
              <span className="text-6xl font-bold text-orange">
                ( {work.number} )
              </span>
              <div>
                <h3 className="text-5xl font-bold mb-8">{work.title}</h3>

                <div>
                  <p className="text-sm uppercase tracking-wider text-orange mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {work.deliverables.map((deliverable, i) => (
                      <li key={i} className="text-lg opacity-80">
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section className="section-padding bg-gradient-to-b from-noir via-orange/5 to-noir">
        <div className="container-custom">
          <h2 className="mb-20">
            Services{' '}
            <span className="font-light italic opacity-60">( yeah )</span>
          </h2>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12 bg-noir/50 border border-orange/20 rounded-2xl hover:border-orange hover:-translate-y-1 transition-all duration-300"
              >
                {/* Numéro */}
                <div className="lg:col-span-2">
                  <span className="text-5xl font-bold text-orange">
                    ( {service.number} )
                  </span>
                </div>

                {/* Titre */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl uppercase font-bold">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="text-blanc/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ARTICHAUD */}
      <section className="section-padding bg-noir">
        <div className="container-custom">
          <h2 className="mb-20 text-center">About artichaud</h2>

          {/* Polaroids de l'équipe */}
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            {/* Arti */}
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-blanc p-6 pb-16 rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="w-[250px] h-[300px] bg-gradient-to-br from-orange/30 to-rouge/30 rounded flex items-center justify-center text-7xl">
                  🔥
                </div>
                <p className="text-noir text-center mt-6 font-light italic text-xl">
                  ( Arti )
                </p>
              </div>
            </div>

            {/* Charlotte */}
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-blanc p-6 pb-16 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300">
                <div className="w-[250px] h-[300px] bg-gradient-to-br from-orange/30 to-rouge/30 rounded flex items-center justify-center text-7xl">
                  👤
                </div>
                <p className="text-noir text-center mt-6 font-light italic text-xl">
                  ( Charlotte )
                </p>
              </div>
            </div>

            {/* Clément */}
            <div className="animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-blanc p-6 pb-16 rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <div className="w-[250px] h-[300px] bg-gradient-to-br from-orange/30 to-rouge/30 rounded flex items-center justify-center text-7xl">
                  👤
                </div>
                <p className="text-noir text-center mt-6 font-light italic text-xl">
                  ( Clément )
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-orange uppercase tracking-wider mb-6 text-sm">
              NOTRE MISSION
            </h4>
            <p className="text-xl leading-relaxed text-blanc/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
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
