'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { 
    y: 100, 
    opacity: 0,
    rotate: 0 
  },
  onscreen: (customRotate: number) => ({
    y: 0,
    opacity: 1,
    rotate: customRotate,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2
    }
  })
};

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-clip bg-[#191919] pb-32 text-white">
        
      {/* CONTENU */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-[clamp(1rem,3vw,3rem)]">

        {/* TITRE STICKY 
           - top-0 : colle au haut de l'écran
           - z-40 : reste au dessus des photos
           - bg-gradient : permet de fondre le haut de la section
        */}
        <div className="sticky top-10 z-40 mb-10 flex w-full justify-center pt-10 lg:pt-20">
          {/* Arrière-plan dégradé pour la lisibilité quand les photos passent dessous */}
          <div className="absolute inset-0 h-[200%] w-full bg-gradient-to-b from-[#191919] via-[#191919] to-transparent opacity-90 pointer-events-none" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative font-bold uppercase leading-[0.9]"
            style={{
              fontSize: 'clamp(40px, 9vw, 110px)',
              fontFamily: 'var(--font-inter)',
              color: '#F2F2F2',
            }}
          >
            About artichaud
          </motion.h2>
        </div>

        {/* CONTENEUR POLAROIDS */}
        <div className="mx-auto flex max-w-7xl flex-col gap-24 md:gap-12">
          
          {/* --- CHARLOTTE --- */}
          <div className="flex w-full flex-col items-center md:flex-row md:justify-start md:pl-40">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={-3}
              variants={cardVariants}
              className="group relative z-10 select-none"
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.1}
              whileHover={{ scale: 1.05, rotate: 0, cursor: 'grab', zIndex: 50 }}
              whileTap={{ cursor: 'grabbing', scale: 0.95 }}
            >
                {/* Ajout animation flottement css (animate-float-slow) */}
                <div className="relative h-[350px] w-[280px] md:h-[420px] md:w-[340px] filter drop-shadow-xl animate-float-slow">
                  <Image
                    src="/img/about/Charlotte.png"
                    alt="Charlotte"
                    fill
                    className="object-contain"
                    draggable={false}
                  />
                </div>
            </motion.div>

            {/* BLOC TEXTE CHARLOTTE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-col items-center md:items-start md:ml-8 md:mt-0 md:self-start md:pt-8"
            >
              <span className="text-2xl text-[#F2F2F2]" style={{ fontFamily: 'var(--font-instrument)', fontStyle: 'italic' }}>
                ( Charlotte )
              </span>
              <span className="mt-2 text-xs font-bold tracking-[0.2em] text-[#E94601] opacity-90 font-inter uppercase">
                Co-Founder & Art Director
              </span>
            </motion.div>
          </div>

          {/* --- CLÉMENT --- */}
          <div className="flex w-full flex-col-reverse items-center md:flex-row md:justify-end md:pr-10 md:-mt-10">
             {/* BLOC TEXTE CLÉMENT */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 }}
              className="mt-6 flex flex-col items-center md:items-end md:mr-8 md:mt-0 md:self-start md:pt-8"
            >
              <span className="text-2xl text-[#F2F2F2]" style={{ fontFamily: 'var(--font-instrument)', fontStyle: 'italic' }}>
                ( Clément )
              </span>
              <span className="mt-2 text-xs font-bold tracking-[0.2em] text-[#E94601] opacity-90 font-inter uppercase">
                Co-Founder & Lead Dev
              </span>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
              variants={cardVariants}
              className="group relative z-10 select-none"
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.1}
              whileHover={{ scale: 1.05, rotate: 0, cursor: 'grab', zIndex: 50 }}
              whileTap={{ cursor: 'grabbing', scale: 0.95 }}
            >
              {/* Ajout animation flottement css (animate-float-medium) */}
              <div className="relative h-[350px] w-[280px] md:h-[420px] md:w-[340px] filter drop-shadow-xl animate-float-medium">
                  <Image
                    src="/img/about/Clement.png"
                    alt="Clément"
                    fill
                    className="object-contain"
                    draggable={false}
                  />
                </div>
            </motion.div>
          </div>

          {/* --- ARTI --- */}
          <div className="flex w-full flex-col items-center md:flex-row md:justify-start md:pl-80 md:-mt-10">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={-6}
              variants={cardVariants}
              className="group relative z-10 select-none"
              drag
              dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
              dragElastic={0.1}
              whileHover={{ scale: 1.05, rotate: 0, cursor: 'grab', zIndex: 50 }}
              whileTap={{ cursor: 'grabbing', scale: 0.95 }}
            >
              {/* Ajout animation flottement css (animate-float-delayed) */}
              <div className="relative h-[350px] w-[280px] md:h-[420px] md:w-[340px] filter drop-shadow-xl animate-float-delayed">
                  <Image
                    src="/img/about/Polaarti.png"
                    alt="Arti"
                    fill
                    className="object-contain"
                    draggable={false}
                  />
              </div>
            </motion.div>
            
            {/* BLOC TEXTE ARTI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-col items-center md:items-start md:ml-8 md:mt-0 md:self-start md:pt-8"
            >
              <span className="text-2xl text-[#F2F2F2]" style={{ fontFamily: 'var(--font-instrument)', fontStyle: 'italic' }}>
                ( Arti )
              </span>
              <span className="mt-2 text-xs font-bold tracking-[0.2em] text-[#E94601] opacity-90 font-inter uppercase">
                Mascot & Chief Happiness
              </span>
            </motion.div>
          </div>

        </div>

        {/* MISSION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl md:pl-20"
        >
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/90" style={{ fontFamily: 'var(--font-inter)' }}>
            Notre Mission
          </h4>
          <p className="text-xl font-light leading-relaxed text-white/90 md:text-3xl" style={{ fontFamily: 'var(--font-inter)' }}>
            Agence créative spécialisée en branding, webdesign et stratégie digitale. 
            Nous concevons des identités visuelles fortes et des expériences numériques 
            mémorables pour <span className="text-[#E94601] font-normal">mettre le feu à vos projets</span>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}