'use client';

import { useEffect, useRef } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const polaroids = parallaxRef.current.querySelectorAll('.polaroid');
        
        polaroids.forEach((polaroid, index) => {
          const speed = 0.1 + (index * 0.05);
          const yPos = -(scrolled * speed);
          (polaroid as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${(polaroid as HTMLElement).dataset.rotate}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      
      <main className="bg-noir text-blanc">
        {/* HERO SECTION AVEC ELLIPSES */}
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
          {/* Ellipses de fond */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Ellipse Orange Clair - Top Left */}
            <div 
              className="absolute"
              style={{
                width: '611.144px',
                height: '611.144px',
                borderRadius: '611.144px',
                background: '#FF6F00',
                filter: 'blur(200px)',
                top: '-200px',
                left: '-100px',
              }}
            />
            
            {/* Ellipse Rouge - Top Right */}
            <div 
              className="absolute"
              style={{
                width: '611.144px',
                height: '611.144px',
                borderRadius: '611.144px',
                background: '#FF0000',
                filter: 'blur(200px)',
                top: '0px',
                right: '-150px',
              }}
            />
            
            {/* Ellipse Orange - Middle Left */}
            <div 
              className="absolute"
              style={{
                width: '611.144px',
                height: '611.144px',
                borderRadius: '611.144px',
                background: '#FF9D00',
                filter: 'blur(200px)',
                top: '400px',
                left: '100px',
              }}
            />
          </div>

          {/* Contenu Hero */}
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(48px, 8vw, 120px)',
                  fontWeight: 700,
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                }}
              >
                About
              </h1>
              
              <p 
                className="max-w-2xl mx-auto"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontWeight: 300,
                  lineHeight: '140%',
                  color: 'rgba(242, 242, 242, 0.8)',
                }}
              >
                Découvrez l'équipe passionnée derrière Artichaud Studio et notre mission : 
                transformer vos idées en projets digitaux exceptionnels.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION POLAROIDS - NOTRE HISTOIRE */}
        <section className="relative py-20 overflow-hidden" ref={parallaxRef}>
          <div className="container-custom">
            {/* Titre Section */}
            <div className="mb-16">
              <h4 
                className="uppercase mb-6"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '22px',
                  fontWeight: 700,
                  lineHeight: '140%',
                  color: '#F2F2F2',
                  textTransform: 'uppercase',
                }}
              >
                NOTRE HISTOIRE
              </h4>
              <p 
                style={{
                  fontFamily: 'Inter',
                  fontSize: '45px',
                  fontWeight: 300,
                  lineHeight: '140%',
                  color: '#F2F2F2',
                  maxWidth: '1200px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>

            {/* Container Polaroids avec positionnement responsive */}
            <div className="relative min-h-[1000px] lg:min-h-[1200px]">
              
              {/* Charlotte - Position responsive */}
              <div
                className="polaroid absolute left-1/2 -translate-x-1/2 lg:left-[20%] lg:translate-x-0"
                data-rotate="3"
                style={{
                  top: 'clamp(80px, 10vw, 150px)',
                  zIndex: 30,
                }}
              >
                <div className="relative bg-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
                  <div style={{ padding: 'clamp(12px, 1.5vw, 20px)' }}>
                    {/* CORRECTION Charlotte : ajout de width/height */}
                    <Image
                      src="/img/about/charlotte.jpg"
                      alt="Charlotte"
                      width={400} // Ajouté
                      height={600} // Ajouté
                      className="w-full h-auto object-cover"
                      style={{
                        width: 'clamp(200px, 25vw, 280px)',
                        height: 'clamp(240px, 30vw, 340px)',
                      }}
                    />
                    <p
                      className="text-center mt-4"
                      style={{
                        fontFamily: 'var(--font-instrument)',
                        fontSize: 'clamp(16px, 1.4vw, 20px)',
                        color: '#000',
                        fontStyle: 'italic',
                      }}
                    >
                      ( Charlotte )
                    </p>
                  </div>
                </div>
              </div>

              {/* Clément */}
              <div
                className="polaroid absolute left-1/2 -translate-x-1/2 lg:left-[55%] lg:translate-x-0"
                data-rotate="8"
                style={{
                  top: 'clamp(350px, 40vw, 550px)',
                  zIndex: 20,
                }}
              >
                <div className="relative bg-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
                  <div style={{ padding: 'clamp(12px, 1.5vw, 20px)' }}>
                    {/* CORRECTION Clément : ajout de width/height */}
                    <Image
                      src="/img/about/Clement.jpg"
                      alt="Clément"
                      width={400} // Ajouté
                      height={600} // Ajouté
                      className="w-full h-auto object-cover"
                      style={{
                        width: 'clamp(200px, 25vw, 280px)',
                        height: 'clamp(240px, 30vw, 340px)',
                      }}
                    />
                    <p
                      className="text-center mt-4"
                      style={{
                        fontFamily: 'var(--font-instrument)',
                        fontSize: 'clamp(16px, 1.4vw, 20px)',
                        color: '#000',
                        fontStyle: 'italic',
                      }}
                    >
                      ( Clément )
                    </p>
                  </div>
                </div>
              </div>

              {/* Arti */}
              <div
                className="polaroid absolute left-1/2 -translate-x-1/2 lg:left-[15%] lg:translate-x-0"
                data-rotate="-12"
                style={{
                  top: 'clamp(620px, 70vw, 900px)',
                  zIndex: 10,
                }}
              >
                <div className="relative bg-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
                  <div style={{ padding: 'clamp(12px, 1.5vw, 20px)' }}>
                    {/* CORRECTION Arti : ajout de width/height */}
                    <Image
                      src="/img/about/Polaarti.jpg"
                      alt="Arti"
                      width={400} // Ajouté
                      height={600} // Ajouté
                      className="w-full h-auto object-cover"
                      style={{
                        width: 'clamp(200px, 25vw, 280px)',
                        height: 'clamp(240px, 30vw, 340px)',
                      }}
                    />
                    <p
                      className="text-center mt-4"
                      style={{
                        fontFamily: 'var(--font-instrument)',
                        fontSize: 'clamp(16px, 1.4vw, 20px)',
                        color: '#000',
                        fontStyle: 'italic',
                      }}
                    >
                      ( Arti )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION POURQUOI TRAVAILLER AVEC NOUS */}
        <section className="relative py-20 overflow-hidden">
          {/* Fond Rouge Foncé avec dégradé */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #1A1A1A 0%, #C30000 50%, #1A1A1A 100%)',
            }}
          />

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Titre */}
              <h4 
                className="uppercase mb-8"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(12px, 1.11vw, 16px)',
                  fontWeight: 700,
                  lineHeight: '140%',
                  color: '#FF9D00',
                  letterSpacing: '0.1em',
                }}
              >
                POURQUOI TRAVAILLER AVEC NOUS
              </h4>

              {/* Texte */}
              <p 
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(18px, 2vw, 28px)',
                  fontWeight: 300,
                  lineHeight: '140%',
                  color: '#F2F2F2',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Grille de valeurs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-blanc/5 backdrop-blur-sm rounded-lg border border-blanc/10">
                  <h5 
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      fontWeight: 700,
                      color: '#FF6F00',
                    }}
                  >
                    Créativité
                  </h5>
                  <p 
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.11vw, 16px)',
                      fontWeight: 300,
                      lineHeight: '140%',
                      color: 'rgba(242, 242, 242, 0.8)',
                    }}
                  >
                    Des idées innovantes pour faire briller votre marque
                  </p>
                </div>

                <div className="p-6 bg-blanc/5 backdrop-blur-sm rounded-lg border border-blanc/10">
                  <h5 
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      fontWeight: 700,
                      color: '#FF6F00',
                    }}
                  >
                    Expertise
                  </h5>
                  <p 
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.11vw, 16px)',
                      fontWeight: 300,
                      lineHeight: '140%',
                      color: 'rgba(242, 242, 242, 0.8)',
                    }}
                  >
                    Une équipe polyvalente au service de vos projets
                  </p>
                </div>

                <div className="p-6 bg-blanc/5 backdrop-blur-sm rounded-lg border border-blanc/10">
                  <h5 
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      fontWeight: 700,
                      color: '#FF6F00',
                    }}
                  >
                    Passion
                  </h5>
                  <p 
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.11vw, 16px)',
                      fontWeight: 300,
                      lineHeight: '140%',
                      color: 'rgba(242, 242, 242, 0.8)',
                    }}
                  >
                    L'enthousiasme comme moteur de création
                  </p>
                </div>

                <div className="p-6 bg-blanc/5 backdrop-blur-sm rounded-lg border border-blanc/10">
                  <h5 
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(16px, 1.53vw, 22px)',
                      fontWeight: 700,
                      color: '#FF6F00',
                    }}
                  >
                    Proximité
                  </h5>
                  <p 
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.11vw, 16px)',
                      fontWeight: 300,
                      lineHeight: '140%',
                      color: 'rgba(242, 242, 242, 0.8)',
                    }}
                  >
                    Un accompagnement personnalisé à chaque étape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CTA */}
        <section className="py-32 bg-gradient-to-b from-noir to-orange/10">
          <div className="container-custom text-center">
            <h2 
              className="mb-8"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 700,
                lineHeight: '110%',
              }}
            >
              Prêt à mettre le feu <br />
              <span 
                style={{
                  fontFamily: 'var(--font-instrument)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                ( à vos projets ? )
              </span>
            </h2>
            
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-blanc rounded-full font-semibold hover:bg-orange-fonce transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(14px, 1.25vw, 18px)',
              }}
            >
              Let's talk
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1 15L15 1M15 1H8M15 1V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}