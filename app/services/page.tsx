import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nos Services - Artichaud Studio | Branding, Webdesign & Stratégie',
  description: 'Agence experte en Brand Strategy, Identité Visuelle, Webdesign UI/UX et Marketing Digital à Paris. Nous transformons vos idées en expériences digitales performantes.',
  keywords: ['agence branding paris', 'création site web', 'stratégie digitale', 'identité visuelle', 'UX UI design', 'shooting photo produit'],
  openGraph: {
    title: 'Nos Services - Artichaud Studio',
    description: 'Expertise 360° : Stratégie de marque, Design, Développement Web et Contenu.',
    url: 'https://artichaud.studio/services',
    siteName: 'Artichaud Studio',
    locale: 'fr_FR',
    type: 'website',
  },
};

const services = [
  {
    number: '01',
    title: 'Brand strategy',
    description:
      'Définition de votre ADN, analyse de marché et positionnement. Nous construisons les fondations stratégiques (mission, vision, valeurs) pour donner à votre marque une voix unique et pertinente qui résonne auprès de votre audience cible.',
    image1: '/img/services/brandstrategy1.jpg',
    image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '02',
    title: 'Visual identity',
    description:
      'Création de logos, chartes graphiques et systèmes visuels complets. Nous traduisons votre stratégie en une identité visuelle forte, cohérente et mémorable, déclinable sur tous vos supports de communication (print & digital).',
    image1: '/img/services/brandstrategy1.jpg',
    image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '03',
    title: 'Webdesign',
    description:
      'Conception de sites web immersifs et performants (Vitrines, E-commerce). Nous allions une expérience utilisateur (UX) fluide à une interface (UI) soignée pour captiver vos visiteurs et maximiser vos conversions.',
    image1: '/img/services/brandstrategy1.jpg',
    image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '04',
    title: 'Webmarketing',
    description:
      'Stratégies d\'acquisition et de fidélisation sur-mesure (SEO, SEA, Social Media). Nous activons les bons leviers pour booster votre visibilité en ligne, générer du trafic qualifié et accélérer votre croissance.',
    image1: '/img/services/brandstrategy1.jpg',
    image2: '/img/services/brandstrategy2.jpg',
  },
  {
    number: '05',
    title: 'Shooting produit',
    description:
      'Direction artistique, photographie et production vidéo. Nous sublimons vos produits et services à travers des visuels professionnels et créatifs qui renforcent votre image de marque et votre crédibilité.',
    image1: '/img/services/brandstrategy1.jpg',
    image2: '/img/services/brandstrategy2.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative bg-noir text-blanc overflow-hidden">
        {/* Dégradé en haut à gauche - Eclipse ROUGE */}
        <div 
          className="absolute top-0 left-0 pointer-events-none z-0"
          style={{
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 0, 0, 0.6) 0%, rgba(255, 0, 0, 0.3) 40%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, -30%)',
          }}
        />

        {/* Dégradé en haut à gauche - Eclipse ORANGE */}
        <div 
          className="absolute top-0 left-0 pointer-events-none z-0"
          style={{
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 111, 0, 0.5) 0%, rgba(255, 157, 0, 0.3) 40%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'translate(-10%, 10%)',
          }}
        />

        {/* Carré dégradé rotaté 1 - ROUGE en haut à droite */}
        <div 
          className="absolute hidden lg:block pointer-events-none z-0"
          style={{
            top: '350px',
            right: '-25%',
            width: '611.144px',
            height: '611.144px',
            transform: 'rotate(-75.773deg)',
            flexShrink: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 0, 0, 0.7) 0%, rgba(255, 0, 0, 0.4) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Carré dégradé rotaté 2 - ORANGE plus bas à droite */}
        <div 
          className="absolute hidden lg:block pointer-events-none z-0"
          style={{
            top: '800px',
            right: '-20%',
            width: '499.052px',
            height: '499.052px',
            transform: 'rotate(-26.56deg)',
            flexShrink: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 111, 0, 0.6) 0%, rgba(255, 157, 0, 0.4) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20">
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <p 
                className="text-blanc/90 leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter)',
                  fontSize: 'clamp(20px, 2.5vw, 36px)',
                  lineHeight: '1.5',
                }}
              >
                Nous accompagnons les marques ambitieuses dans leur transformation digitale. De la stratégie de marque au développement web, nous créons des expériences qui marquent les esprits et accélèrent votre croissance.
              </p>
            </div>
          </div>
        </section>

        {/* WHEN SECTION */}
        <section className="relative section-padding border-t border-blanc/10">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Colonne gauche - Description */}
              <div>
                <h2 
                  className="text-blanc font-bold mb-8 uppercase"
                  style={{ 
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(16px, 1.8vw, 24px)',
                  }}
                >
                  POURQUOI NOUS ?
                </h2>
                <p 
                  className="text-blanc/70 leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                    lineHeight: '1.6',
                  }}
                >
                  À chaque étape clé de votre développement, Artichaud Studio se positionne comme le partenaire stratégique capable de transformer vos défis en opportunités. Que vous soyez en phase de lancement, de rebranding ou d'accélération, nous alignons créativité et performance pour garantir l'impact de votre marque sur son marché.
                </p>
              </div>

              {/* Colonne droite - 3 catégories */}
              <div className="space-y-12">
                {/* Sprint */}
                <div>
                  <h3 
                    className="text-blanc font-normal italic mb-4"
                    style={{ 
                      fontFamily: 'var(--font-instrument)',
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                    }}
                  >
                    ( Lancement )
                  </h3>
                  <p 
                    className="text-blanc/70 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.2vw, 16px)',
                      lineHeight: '1.6',
                    }}
                  >
                    Pour les start-ups et les nouveaux projets. Nous intervenons dès la genèse pour construire une identité solide et des outils digitaux performants, assurant une entrée sur le marché remarquée et crédible dès le premier jour.
                  </p>
                </div>

                {/* Branding */}
                <div>
                  <h3 
                    className="text-blanc font-normal italic mb-4"
                    style={{ 
                      fontFamily: 'var(--font-instrument)',
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                    }}
                  >
                    ( Transformation )
                  </h3>
                  <p 
                    className="text-blanc/70 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.2vw, 16px)',
                      lineHeight: '1.6',
                    }}
                  >
                    Pour les entreprises établies qui évoluent. Votre image ne reflète plus votre réalité ou vos ambitions ? Nous repensons votre branding et votre présence en ligne pour reconnecter avec votre audience et affirmer votre nouveau positionnement.
                  </p>
                </div>

                {/* Venture */}
                <div>
                  <h3 
                    className="text-blanc font-normal italic mb-4"
                    style={{ 
                      fontFamily: 'var(--font-instrument)',
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                    }}
                  >
                    ( Croissance )
                  </h3>
                  <p 
                    className="text-blanc/70 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-inter)',
                      fontSize: 'clamp(14px, 1.2vw, 16px)',
                      lineHeight: '1.6',
                    }}
                  >
                    Pour les marques qui veulent passer un cap. Nous déployons des stratégies webmarketing ciblées et optimisons vos interfaces pour convertir vos visiteurs en clients fidèles et maximiser votre retour sur investissement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* SERVICES */}
      <section className="relative section-padding overflow-hidden">
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
                          <Image 
                            src={service.image1} 
                            alt={`${service.title} 1`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 25vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>

                    {/* Image 2 - Zone 4 (75-100%) - Apparaît au hover */}
                    <div className="col-span-1 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.image2 && (
                          <Image 
                            src={service.image2} 
                            alt={`${service.title} 2`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 25vw"
                            className="object-cover"
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
      </section>
      
      </main>
      <Footer />
    </>
  );
}