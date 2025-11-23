'use client';

import { useRef, useState } from 'react'; // Ajout de useState
import { useScroll } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesSection({ services }: { services: any[] }) {
  const container = useRef(null);
  
  // Nouvel état : stocke l'index de la carte actuellement ouverte (-1 = aucune)
  const [openCardIndex, setOpenCardIndex] = useState<number>(-1);

  // Fonction pour basculer l'état
  const handleToggle = (index: number) => {
    setOpenCardIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative bg-[#191919] w-full pb-40">
         
      {/* HEADER DE SECTION (Inchangé) */}
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)] pt-20 pb-12">
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

      {/* CONTENEUR DES CARTES */}
      <div className="w-full">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            service={service}
            index={index}
            // 👇 On passe l'état et la fonction de contrôle
            isOpen={openCardIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

    </section>
  );
}