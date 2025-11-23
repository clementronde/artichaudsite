'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Variants pour l'animation cascade du menu
  const menuContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const linkItemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#191919] backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            
            {/* 1️⃣ BURGER MENU (VISIBLE SEULEMENT SI MENU FERMÉ) */}
            <button
              className={`lg:hidden text-blanc z-50 relative order-1 w-10 h-10 flex flex-col justify-center items-center gap-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span className="w-8 h-0.5 bg-white block" />
              <span className="w-8 h-0.5 bg-white block" />
              <span className="w-8 h-0.5 bg-white block" />
            </button>

            {/* LOGO */}
            <Link href="/" className="group relative z-50 lg:order-1 order-2">
              <img
                src="/img/logonavbar.png"
                alt="Artichaud Studio"
                className="h-10 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              {isActive('/') && pathname === '/' && !isMenuOpen && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                >
                  <div className="w-1.5 h-1.5 bg-blanc rounded-full"></div>
                </motion.div>
              )}
            </Link>

            {/* NAVIGATION DESKTOP */}
            <nav className="hidden lg:flex items-center gap-10 order-2">
              {['Works', 'Services', 'About', 'Blog'].map((item) => {
                const path = `/${item.toLowerCase()}`;
                const active = isActive(path);
                return (
                  <Link
                    key={item}
                    href={path}
                    className={`relative text-[15px] py-1 group ${active ? 'text-orange' : 'text-blanc hover:text-orange/80 transition-colors'}`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange transition-all duration-300 group-hover:w-full opacity-50"></span>
                    {active && (
                      <motion.div 
                        layoutId="nav-dot"
                        className="absolute -bottom-4 left-1/2 w-1.5 h-1.5 bg-blanc rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* BOUTON "LET'S TALK" DESKTOP */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 text-blanc hover:text-orange transition-colors duration-300 text-[15px] group order-3"
            >
              <span>Let's talk</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                whileHover={{ x: 3, y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path d="M1 15L15 1M15 1H8M15 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </Link>
          </div>
        </div>
      </header>

      {/* 3️⃣ MENU MOBILE FULLSCREEN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[100] bg-black"
          >
            {/* Fond dégradé */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: 'linear-gradient(180deg, #000000 0%, #1a0000 40%, #FF0000 80%, #FF9D00 100%)',
                opacity: 0.95
              }}
            />

            {/* HEADER DU MENU MOBILE (Croix + CTA) */}
            <div className="relative z-[110] px-6 py-6 flex justify-between items-center container-custom">
              
              {/* ❌ CROIX DE FERMETURE */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange transition-colors"
                aria-label="Fermer"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* 💬 LET'S TALK MIS EN AVANT (BOUTON BLANC) */}
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="
                  bg-white text-black 
                  px-5 py-2.5 rounded-full 
                  flex items-center gap-2 
                  font-bold uppercase text-xs tracking-wide
                  shadow-lg shadow-orange/20
                  active:scale-95 transition-all duration-200
                "
              >
                <span>Let's talk</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M1 15L15 1M15 1H8M15 1V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* LIENS DE NAVIGATION */}
            <motion.div 
              className="relative z-10 h-full flex flex-col items-center justify-center -mt-20 gap-6"
              variants={menuContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {['WORKS', 'SERVICES', 'ABOUT', 'BLOG', 'CONTACT'].map((item) => (
                <motion.div key={item} variants={linkItemVariants}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="text-blanc text-[clamp(32px,8vw,50px)] font-light hover:text-black hover:italic transition-all duration-300"
                    style={{ fontFamily: 'var(--font-instrument)' }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}