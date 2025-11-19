import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Charit.IO - Artichaud Studio',
  description: 'Projet Charit.io - Plateforme dédiée aux dons pour les musées en France',
};

export default function CharitIOProject() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-noir pt-32 pb-20 px-[clamp(1rem,3vw,3rem)]">
        <div className="container-custom">
          {/* Titre principal */}
          <h1
            className="text-blanc font-bold mb-8"
            style={{
              fontSize: 'clamp(50px, 6.25vw, 90px)',
              fontFamily: 'var(--font-inter)',
              lineHeight: '1.1'
            }}
          >
            charit.IO
          </h1>

          {/* Grid layout pour overview et détails */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Colonne gauche - Projet Overview */}
            <div>
              <h2
                className="text-blanc uppercase mb-6"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(11.2px, 1.11vw, 16px)',
                  fontWeight: 700,
                  lineHeight: '140%',
                  letterSpacing: '0.05em'
                }}
              >
                projet overview
              </h2>
              <p
                className="text-blanc/80"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(16px, 1.39vw, 20px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                Pour le projet Charit.io, une plateforme dédiée aux dons pour les musées en France.
                L'objectif principal était de concevoir une expérience visuelle moderne et engageante, en
                harmonie avec la mission de Charit.io : soutenir la préservation des œuvres d'art. Une
                nouvelle charte graphique a été développée, et l'interface du site a été repensée pour offrir
                une navigation fluide et intuitive, facilitant ainsi l'acte de donation. Ce projet a permis de
                combiner créativité et impact social, tout en mettant en lumière l'importance de la culture et
                de la préservation du patrimoine.
              </p>
            </div>

            {/* Colonne droite - Détails du projet */}
            <div className="space-y-8">
              {/* Projet type */}
              <div>
                <h3
                  className="text-blanc/60 uppercase mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(10px, 0.97vw, 14px)',
                    fontWeight: 400,
                    lineHeight: '140%',
                    letterSpacing: '0.05em'
                  }}
                >
                  projet type
                </h3>
                <p
                  className="text-blanc"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.39vw, 20px)',
                    fontWeight: 400,
                  }}
                >
                  Website
                </p>
              </div>

              {/* Services */}
              <div>
                <h3
                  className="text-blanc/60 uppercase mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(10px, 0.97vw, 14px)',
                    fontWeight: 400,
                    lineHeight: '140%',
                    letterSpacing: '0.05em'
                  }}
                >
                  services
                </h3>
                <p
                  className="text-blanc"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.39vw, 20px)',
                    fontWeight: 400,
                  }}
                >
                  Analyse UX, UI design, Direction artistique
                </p>
              </div>

              {/* Secteur */}
              <div>
                <h3
                  className="text-blanc/60 uppercase mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(10px, 0.97vw, 14px)',
                    fontWeight: 400,
                    lineHeight: '140%',
                    letterSpacing: '0.05em'
                  }}
                >
                  secteur
                </h3>
                <p
                  className="text-blanc"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.39vw, 20px)',
                    fontWeight: 400,
                  }}
                >
                  Mécénat
                </p>
              </div>

              {/* Localisation */}
              <div>
                <p
                  className="text-blanc font-bold mb-1"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(16px, 1.53vw, 22px)',
                  }}
                >
                  charit.io
                </p>
                <p
                  className="text-blanc/60"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(12px, 1.11vw, 16px)',
                  }}
                >
                  Paris, France
                </p>
              </div>
            </div>
          </div>

          {/* Images du projet - Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            <div className="aspect-[4/3] bg-blanc/5 overflow-hidden">
              <img
                src="/img/works/charitio/charitio-insta.avif"
                alt="Charit.io interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-blanc/5 overflow-hidden">
              <img
                src="/img/works/charitio/charitio-logo-responsive.avif"
                alt="Charit.io branding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STEP 1 - DIRECTION ARTISTIQUE */}
      <section className="relative bg-noir py-20 px-[clamp(1rem,3vw,3rem)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Titre de la step */}
            <div className="lg:col-span-3">
              <p
                className="text-blanc/40 uppercase mb-2"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(10px, 0.97vw, 14px)',
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}
              >
                step n°1
              </p>
              <h2
                className="text-blanc font-bold uppercase"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(24px, 2.36vw, 34px)',
                  lineHeight: '1.2'
                }}
              >
                direction<br />artistique
              </h2>
            </div>

            {/* Contenu */}
            <div className="lg:col-span-9 space-y-6">
              <p
                className="text-blanc/80"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(14px, 1.39vw, 20px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                Pour Charit.io, Artichaud a élaboré une direction artistique audacieuse et distincte, se
                démarquant de la tendance généralement sobre et minimaliste de la concurrence.
                L'identité graphique développée mise sur des couleurs vives et dynamiques, offrant une
                approche moderne et énergique qui vise à attirer une audience plus jeune et engagée.
                Cette palette colorée rompt avec les codes traditionnels des plateformes de don, tout en
                apportant une touche de fraîcheur et d'originalité.
              </p>
              <p
                className="text-blanc/80"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(14px, 1.39vw, 20px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                Le logo a été conçu avec une typographie à la fois minimaliste et percutante, renforçant
                l'impact visuel de la marque. Un symbole unique a été intégré, combinant la lettre "I" et le
                point du ".io". Cette fusion représente un point de fuite, une référence graphique souvent
                utilisée par les artistes pour symboliser la perspective et la profondeur. Ce choix visuel
                illustre parfaitement la mission de Charit.io : offrir une nouvelle perspective sur le soutien
                à la culture et à la préservation du patrimoine.
              </p>
            </div>
          </div>

          {/* Images direction artistique */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="aspect-[4/3] bg-blanc/5 rounded-lg overflow-hidden">
              <img
                src="/img/projects/charitio/direction-1.jpg"
                alt="Direction artistique Charit.io"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-[#E94601] rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-blanc text-center">
                <p
                  className="font-bold mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(80px, 8vw, 120px)',
                  }}
                >
                  I • I
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2 - REFONTE DU SITE */}
      <section className="relative bg-noir py-20 px-[clamp(1rem,3vw,3rem)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Titre de la step */}
            <div className="lg:col-span-3">
              <p
                className="text-blanc/40 uppercase mb-2"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(10px, 0.97vw, 14px)',
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}
              >
                step n°2
              </p>
              <h2
                className="text-blanc font-bold uppercase"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(24px, 2.36vw, 34px)',
                  lineHeight: '1.2'
                }}
              >
                refonte<br />du site
              </h2>
            </div>

            {/* Contenu */}
            <div className="lg:col-span-9 space-y-6">
              <p
                className="text-blanc/80"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(14px, 1.39vw, 20px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                Une attention particulière a été portée à l'optimisation de l'UX. L'objectif était de
                simplifier et de rendre plus intuitif le parcours de don, en réduisant le nombre d'étapes
                nécessaires pour finaliser une transaction. Cela a permis d'offrir aux utilisateurs une
                navigation plus fluide et un accès rapide à la fonctionnalité principale. La nouvelle
                direction artistique a été appliquée au design du site, insufflant une nouvelle dynamique
                visuelle. L'utilisation de couleurs vives et lumineuses a apporté de la fraîcheur et de la
                modernité à l'ensemble, rendant l'interface à la fois agréable et stimulante. Le choix de
                ces couleurs, associé à une mise en page épurée, a permis d'améliorer l'accessibilité et
                de renforcer l'engagement des utilisateurs.
              </p>
            </div>
          </div>

          {/* Images refonte */}
          <div className="mt-12 space-y-4">
            <div className="aspect-[16/9] bg-blanc/5 rounded-lg overflow-hidden">
              <img
                src="/img/projects/charitio/website-1.jpg"
                alt="Refonte site Charit.io"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] bg-blanc/5 rounded-lg overflow-hidden">
                <img
                  src="/img/projects/charitio/website-2.jpg"
                  alt="Interface Charit.io"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-blanc/5 rounded-lg overflow-hidden">
                <img
                  src="/img/projects/charitio/website-3.jpg"
                  alt="Mobile Charit.io"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS SECTION */}
      <section className="relative bg-noir py-20 px-[clamp(1rem,3vw,3rem)]">
        <div className="container-custom">
          <h2
            className="text-blanc font-bold uppercase mb-16"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(40px, 4vw, 60px)',
              lineHeight: '1.2'
            }}
          >
            objectifs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Objectif 1 */}
            <div>
              <p
                className="text-[#E94601] font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(14px, 1.39vw, 20px)',
                }}
              >
                (01)
              </p>
              <h3
                className="text-blanc font-bold uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                }}
              >
                brand identity
              </h3>
              <p
                className="text-blanc/70"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 1.25vw, 18px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                L'identité de Charit.io se caractérise par une approche audacieuse et
                moderne, alliant une palette de couleurs vives et un design minimaliste. Le
                logo, combinant la lettre "I" et le point du ".io", évoque la perspective
                artistique, soulignant l'engagement de la marque pour la culture.
              </p>
            </div>

            {/* Objectif 2 */}
            <div>
              <p
                className="text-[#E94601] font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(14px, 1.39vw, 20px)',
                }}
              >
                (02)
              </p>
              <h3
                className="text-blanc font-bold uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                }}
              >
                brand strategy
              </h3>
              <p
                className="text-blanc/70"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 1.25vw, 18px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                Charit.io se positionne ainsi comme une plateforme dynamique, innovante et
                accessible, visant à sensibiliser et à engager un public jeune et connecté
                dans la préservation du patrimoine culturel.
              </p>
            </div>

            {/* Objectif 3 */}
            <div>
              <p
                className="text-[#E94601] font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(14px, 1.39vw, 20px)',
                }}
              >
                (03)
              </p>
              <h3
                className="text-blanc font-bold uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(16px, 1.53vw, 22px)',
                }}
              >
                webdesign
              </h3>
              <p
                className="text-blanc/70"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(13px, 1.25vw, 18px)',
                  fontWeight: 300,
                  lineHeight: '160%',
                }}
              >
                L'objectif était de simplifier et de rendre plus intuitif le parcours de don, en
                réduisant le nombre d'étapes nécessaires pour finaliser une transaction. Cela
                a permis d'offrir aux utilisateurs une navigation plus fluide et un accès rapide
                à la fonctionnalité principale : faire un don pour soutenir les musées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE WORK SECTION */}
      <section className="relative bg-noir py-20 px-[clamp(1rem,3vw,3rem)] border-t border-blanc/10">
        <div className="container-custom">
          <h2
            className="text-blanc font-bold mb-12"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(40px, 4vw, 60px)',
              lineHeight: '1.2'
            }}
          >
            explore <span className="font-light italic" style={{ fontFamily: 'var(--font-instrument)' }}>Work</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <article className="group cursor-pointer">
              <Link href="/blog">
                <div className="aspect-[3/2] bg-gradient-to-br from-orange/30 to-rouge/30 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    📝
                  </div>
                </div>
                <p
                  className="text-orange font-light italic mb-3"
                  style={{
                    fontFamily: 'var(--font-instrument)',
                    fontSize: 'clamp(12px, 1.11vw, 16px)',
                  }}
                >
                  ( design )
                </p>
                <h3
                  className="text-blanc group-hover:text-orange transition-colors"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(24px, 2.08vw, 30px)',
                    fontWeight: 700,
                  }}
                >
                  Guide to rebranding
                </h3>
              </Link>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer">
              <Link href="/blog">
                <div className="aspect-[3/2] bg-gradient-to-br from-orange/30 to-rouge/30 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    📝
                  </div>
                </div>
                <p
                  className="text-orange font-light italic mb-3"
                  style={{
                    fontFamily: 'var(--font-instrument)',
                    fontSize: 'clamp(12px, 1.11vw, 16px)',
                  }}
                >
                  ( marketing )
                </p>
                <h3
                  className="text-blanc group-hover:text-orange transition-colors"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(24px, 2.08vw, 30px)',
                    fontWeight: 700,
                  }}
                >
                  Win to the salsifi
                </h3>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
