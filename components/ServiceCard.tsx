'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ServiceProps {
  number: string;
  title: string;
  description: string;
  image1: string;
  image2?: string;
}

interface CardProps {
  service: ServiceProps;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceCard({ service, index, isOpen, onToggle }: CardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // CONFIGURATION
  const cardHeightDesktop = 200; 
  const visibleOffset = isMobile ? 80 : 60; 
  const baseTop = isMobile ? 100 : 120;
  const topDist = baseTop + (index * visibleOffset); 

  // Padding top interne (un peu réduit pour laisser de la place au texte)
  const paddingTop = "pt-6"; 

  return (
    <div 
      onClick={onToggle}
      className={`
        sticky w-full border-t border-white/20 bg-[#191919] overflow-hidden group 
        cursor-pointer lg:cursor-default transition-all duration-300
      `}
      style={{ 
        top: `${topDist}px`,
        height: isMobile ? 'auto' : `${cardHeightDesktop}px`,
        minHeight: isMobile ? '220px' : 'auto', 
        zIndex: index + 1 
      }}
    >
      {/* --- DÉGRADÉ DE FOND --- */}
      <div 
          className={`absolute inset-0 transition-opacity duration-500 z-0 pointer-events-none
            ${isOpen ? 'opacity-100 lg:opacity-0' : 'opacity-0'}
            lg:group-hover:opacity-100
          `}
          style={{ background: 'linear-gradient(90deg, #FF0000 0%, #FF6F00 50%, #FF9D00 100%)' }}
      />

      {/* === DESKTOP LAYOUT === */}
      <div className="hidden lg:grid grid-cols-4 h-full w-full relative z-10">
        
        {/* COLONNE 1 : NUMÉRO */}
        <div className={`col-span-1 flex items-start pl-8 border-r border-white/10 h-full ${paddingTop}`}>
           <span 
             style={{ fontFamily: 'var(--font-inter)' }} 
             className="text-[#F2F2F2] font-bold text-sm tracking-widest uppercase"
           >
             ( {service.number} )
           </span>
        </div>

        {/* COLONNE 2 : TITRE & DESCRIPTION */}
        <div className={`col-span-1 lg:col-span-1 flex flex-col justify-start px-8 border-r border-white/10 h-full ${paddingTop}`}>
           <h3 
             className="text-xl lg:text-2xl font-bold uppercase text-[#F2F2F2] mb-2 leading-none"
             style={{ fontFamily: 'var(--font-inter)' }}
           >
             {service.title}
           </h3>
           
           {/* CORRECTION ICI : Suppression de line-clamp-2 et max-w-sm pour laisser le texte s'étendre */}
           <p 
             className="text-white/60 text-xs leading-relaxed font-light pr-4"
             style={{ fontFamily: 'var(--font-inter)' }}
           >
             {service.description}
           </p>
        </div>

        {/* COLONNE 3 : IMAGE 1 */}
        <div className="col-span-1 hidden lg:block relative border-r border-white/10 overflow-hidden h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           {service.image1 && (
             <div className="relative w-full h-full">
               <Image 
                 src={service.image1} 
                 alt={`${service.title} 1`}
                 fill
                 sizes="25vw"
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
             </div>
           )}
        </div>

        {/* COLONNE 4 : IMAGE 2 */}
        <div className="col-span-1 hidden lg:block relative overflow-hidden h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           {service.image2 && (
             <div className="relative w-full h-full">
               <Image 
                 src={service.image2} 
                 alt={`${service.title} 2`}
                 fill
                 sizes="25vw"
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
             </div>
           )}
        </div>
      </div>

      {/* === MOBILE LAYOUT (Inchangé) === */}
      <div className="lg:hidden relative h-full w-full p-6 z-10 flex flex-col justify-start">
        <div className="mb-4">
          <span className="text-white/50 text-xs font-bold block mb-1 font-inter">( {service.number} )</span>
          <h3 className="text-white font-bold uppercase text-xl font-inter leading-tight pr-4">{service.title}</h3>
        </div>
        <div className="relative w-full">
            <p 
                className={`text-white/70 font-light text-sm font-inter transition-all duration-300
                  ${isOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}
                `}
            >
                {service.description}
            </p>
            <div 
                className={`
                  flex gap-2 transition-all duration-500 w-full
                  ${isOpen ? 'opacity-100 translate-y-0 h-[140px] mt-2' : 'opacity-0 translate-y-4 h-0 overflow-hidden mt-0 pointer-events-none'}
                `}
            >
                {service.image1 && (
                    <div className="relative flex-1 h-full rounded-lg overflow-hidden border border-white/20 bg-black/20">
                        <Image src={service.image1} alt="" fill className="object-cover" />
                    </div>
                )}
                {service.image2 && (
                    <div className="relative flex-1 h-full rounded-lg overflow-hidden border border-white/20 bg-black/20">
                        <Image src={service.image2} alt="" fill className="object-cover" />
                    </div>
                )}
            </div>
        </div>
      </div>

    </div>
  );
}