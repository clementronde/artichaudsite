import type { Metadata } from 'next';
import Image from 'next/image';
import ServicesSection from '@/components/ServicesSection';

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
      
      {/* 🚨 SUPPRESSION de overflow-hidden ici pour que le sticky fonctionne */}
      <main className="bg-noir text-blanc"> 
        
        {/* 📦 NOUVEAU WRAPPER : Contient tout le haut de page + les blobs */}
        {/* C'est LUI qui a l'overflow-hidden pour couper les cercles qui dépassent */}
        <div className="relative w-full overflow-hidden">
            
            {/* --- DÉBUT DES BLOBS --- */}
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
            {/* --- FIN DES BLOBS --- */}

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
                  {/* Colonne gauche */}
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

                  {/* Colonne droite */}
                  <div className="space-y-12">
                    {/* Sprint */}
                    <div>
                      <h3 className="text-blanc font-normal italic mb-4" style={{ fontFamily: 'var(--font-instrument)', fontSize: 'clamp(20px, 2.2vw, 32px)' }}>( Lancement )</h3>
                      <p className="text-blanc/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(14px, 1.2vw, 16px)', lineHeight: '1.6' }}>
                        Pour les start-ups et les nouveaux projets. Nous intervenons dès la genèse pour construire une identité solide et des outils digitaux performants, assurant une entrée sur le marché remarquée et crédible dès le premier jour.
                      </p>
                    </div>
                    {/* Branding */}
                    <div>
                      <h3 className="text-blanc font-normal italic mb-4" style={{ fontFamily: 'var(--font-instrument)', fontSize: 'clamp(20px, 2.2vw, 32px)' }}>( Transformation )</h3>
                      <p className="text-blanc/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(14px, 1.2vw, 16px)', lineHeight: '1.6' }}>
                        Pour les entreprises établies qui évoluent. Votre image ne reflète plus votre réalité ou vos ambitions ? Nous repensons votre branding et votre présence en ligne pour reconnecter avec votre audience et affirmer votre nouveau positionnement.
                      </p>
                    </div>
                    {/* Venture */}
                    <div>
                      <h3 className="text-blanc font-normal italic mb-4" style={{ fontFamily: 'var(--font-instrument)', fontSize: 'clamp(20px, 2.2vw, 32px)' }}>( Croissance )</h3>
                      <p className="text-blanc/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(14px, 1.2vw, 16px)', lineHeight: '1.6' }}>
                        Pour les marques qui veulent passer un cap. Nous déployons des stratégies webmarketing ciblées et optimisons vos interfaces pour convertir vos visiteurs en clients fidèles et maximiser votre retour sur investissement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
        </div> {/* FIN DU WRAPPER OVERFLOW HIDDEN */}

        {/* SERVICES - MAINTENANT LIBRE DE "STICK" */}
        {/* Cette section est en dehors du div overflow-hidden, donc le sticky va marcher */}
        <ServicesSection services={services} />
      
      </main>
    </>
  );
}