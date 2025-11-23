'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface WorkItemProps {
  work: {
    id: number;
    title: string;
    number: string;
    deliverables: string[];
    image: string;
  };
  index: number;
}

export default function WorkItem({ work, index }: WorkItemProps) {
  // Déterminer le layout
  let layout;
  if (index === 0) layout = 'charitio';
  else if (index === 1) layout = 'multiface';
  else if (index === 2) layout = 'disobey';
  else if (index === 3) layout = 'comon';
  else if (index === 4) layout = 'keleti';

  // --- ANIMATIONS ---

  // 1. Image : Apparition fluide du bas vers le haut (inchangé)
  const imageAnim = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // 2. Titre : SLIDE GAUCHE -> DROITE (x: -50 vers x: 0)
  const titleAnim = {
    hidden: { x: -50, opacity: 0 }, // Part de la gauche
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
    }
  };

  // 3. Deliverables : SLIDE GAUCHE -> DROITE (x: -50 vers x: 0) + Délai
  const deliverablesAnim = {
    hidden: { x: -50, opacity: 0 }, // Part de la gauche
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } // Arrive après le titre
    }
  };

  return (
    <article className="relative w-full">
      
      {/* --- DESKTOP --- */}
      <div className="hidden lg:block w-full">
        
        {/* LAYOUT 1: CHARITIO */}
        {layout === 'charitio' && (
          <div className="relative grid grid-cols-4 gap-0 w-full">
            <div className="col-span-1"></div>
            <div className="col-span-1"></div>
            
            <div className="col-span-1 px-0">
              <motion.div 
                className="relative w-full aspect-[4/3] overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15%" }}
                variants={imageAnim}
              >
                <Image 
                  src={work.image} 
                  alt={work.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="col-span-1 pl-6 pr-6 flex flex-col justify-between">
               <ContentBlock work={work} titleAnim={titleAnim} deliverablesAnim={deliverablesAnim} />
            </div>
          </div>
        )}

        {/* LAYOUT 2: MULTIFACE */}
        {layout === 'multiface' && (
          <div className="relative grid grid-cols-4 gap-0 w-full">
            <div className="col-span-2 px-0">
               <motion.div 
                className="relative w-full aspect-[4/3] overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15%" }}
                variants={imageAnim}
              >
                <Image src={work.image} alt={work.title} fill className="object-cover" />
              </motion.div>
            </div>
            
            <div className="col-span-1 pl-6 pr-6 flex flex-col justify-between">
              <ContentBlock work={work} titleAnim={titleAnim} deliverablesAnim={deliverablesAnim} />
            </div>
            <div className="col-span-1"></div>
          </div>
        )}

        {/* LAYOUT 3: DISOBEY */}
        {layout === 'disobey' && (
          <div className="relative grid grid-cols-4 gap-0 w-full">
            <div className="col-span-1"></div>
             <div className="col-span-1 px-0 relative w-full aspect-[4/3]">
                <motion.div 
                  className="w-full h-full overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-15%" }}
                  variants={imageAnim}
                >
                  <Image src={work.image} alt={work.title} fill className="object-cover" />
                </motion.div>
             </div>
            <div className="col-span-1 pl-6 pr-6 flex flex-col justify-between">
              <ContentBlock work={work} titleAnim={titleAnim} deliverablesAnim={deliverablesAnim} />
            </div>
            <div className="col-span-1"></div>
          </div>
        )}

        {/* LAYOUT 4: COM'ON */}
        {layout === 'comon' && (
          <div className="relative grid grid-cols-4 gap-0 w-full">
             <div className="col-span-1 px-0 relative w-full aspect-[4/3]">
                <motion.div 
                  className="w-full h-full overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-15%" }}
                  variants={imageAnim}
                >
                  <Image src={work.image} alt={work.title} fill className="object-cover" />
                </motion.div>
             </div>
            <div className="col-span-1 pl-6 pr-6 flex flex-col justify-between">
              <ContentBlock work={work} titleAnim={titleAnim} deliverablesAnim={deliverablesAnim} />
            </div>
            <div className="col-span-2"></div>
          </div>
        )}

        {/* LAYOUT 5: KELETI */}
        {layout === 'keleti' && (
          <div className="relative grid grid-cols-4 gap-0 w-full">
            <div className="col-span-1"></div>
             <div className="col-span-1 px-0 relative w-full aspect-[4/3]">
                <motion.div 
                  className="w-full h-full overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-15%" }}
                  variants={imageAnim}
                >
                  <Image src={work.image} alt={work.title} fill className="object-cover" />
                </motion.div>
             </div>
            <div className="col-span-1 pl-6 pr-6 flex flex-col justify-between">
              <ContentBlock work={work} titleAnim={titleAnim} deliverablesAnim={deliverablesAnim} />
            </div>
            <div className="col-span-1"></div>
          </div>
        )}
      </div>

      {/* --- MOBILE --- */}
      <motion.div 
        className="lg:hidden bg-[#1a1a1a] rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pb-4 flex justify-between items-start">
           <h3 className="text-[#F2F2F2] font-bold uppercase text-sm font-inter">{work.title}</h3>
           <span className="text-[#F2F2F2] font-bold uppercase text-sm font-inter">( {work.number} )</span>
        </div>
        <div className="w-full relative aspect-[4/3]">
          <Image src={work.image} alt={work.title} fill className="object-cover" />
        </div>
        <div className="pt-4">
          <p className="text-white/70 text-xs mb-2 font-inter font-light">Deliverables</p>
          <ul className="space-y-1">
            {work.deliverables.map((d: string, i: number) => (
              <li key={i} className="text-[#F2F2F2] text-xs uppercase font-inter">{d}</li>
            ))}
          </ul>
        </div>
      </motion.div>

    </article>
  );
}

// Sous-composant avec animation de slide
function ContentBlock({ work, titleAnim, deliverablesAnim }: { work: any, titleAnim: any, deliverablesAnim: any }) {
  return (
    <>
      <motion.div 
        className="flex items-start justify-between mb-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleAnim} // Slide X
      >
        <h3 className="hover:text-[#E94601] transition-colors duration-300" style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase'}}>
          {work.title}
        </h3>
        <span style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(11.2px, 1.11vw, 16px)', fontWeight: 700, lineHeight: '140%', textTransform: 'uppercase', marginLeft: 'clamp(12px, 1.11vw, 16px)', flexShrink: 0}}>
          ( {work.number} )
        </span>
      </motion.div>

      <motion.div 
        className="mt-auto pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={deliverablesAnim} // Slide X
      >
        <p className="mb-3" style={{color: 'rgba(255, 255, 255, 0.70)', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 300, lineHeight: '140%'}}>
          Deliverables
        </p>
        <ul className="space-y-2">
          {work.deliverables.map((deliverable: string, i: number) => (
            <li key={i} style={{color: '#F2F2F2', fontFamily: 'var(--font-inter)', fontSize: 'clamp(8.4px, 0.83vw, 12px)', fontWeight: 400, lineHeight: '140%', textTransform: 'uppercase'}}>
              {deliverable}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}