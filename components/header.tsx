'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  // 1. DÉFINITION DES PAGES "BLANCHES"
  const isLightPage = pathname === '/contact' || pathname.startsWith('/blog/');

  // 2. SURVEILLANCE DU DARK MODE
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark-mode'));
    };
    checkDarkMode();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // 3. LOGIQUE DE COULEUR INTELLIGENTE
  const shouldBeBlack = !isScrolled && isLightPage && !isDarkMode;

  const textColorClass = shouldBeBlack ? 'text-black' : 'text-white';
  const dotColorClass = shouldBeBlack ? 'bg-black' : 'bg-white';
  const logoFilterClass = shouldBeBlack ? 'invert brightness-0' : '';

  // 4. GESTION DU SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 5. GESTION MENU MOBILE
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

  const menuContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  // Icône flèche réutilisable pour la nouvelle animation
  const ArrowIcon = ({ className }: { className?: string }) => (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M1 15L15 1M15 1H8M15 1V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#191919]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            
            {/* BURGER MENU (MOBILE) */}
            <button
              className={`lg:hidden z-50 relative order-1 w-10 h-10 flex flex-col justify-center items-center gap-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${textColorClass}`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span className="w-8 h-0.5 bg-current block" />
              <span className="w-8 h-0.5 bg-current block" />
              <span className="w-8 h-0.5 bg-current block" />
            </button>

            {/* LOGO */}
            <Link href="/" className="group relative z-50 lg:order-1 order-2">
              <img
                src="/img/logonavbar.png"
                alt="Artichaud Studio"
                className={`h-10 lg:h-14 w-auto transition-all duration-300 group-hover:scale-105 ${logoFilterClass}`}
              />
              
              {isActive('/') && pathname === '/' && !isMenuOpen && (
                <motion.div 
                  layoutId="nav-dot"
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${dotColorClass}`}
                />
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
                    className={`relative text-[15px] py-1 group transition-colors ${
                      active ? 'text-orange' : `${textColorClass} hover:text-orange`
                    }`}
                  >
                    {item}
                    {active && (
                      <motion.div 
                        layoutId="nav-dot"
                        className={`absolute -bottom-4 left-1/2 w-1.5 h-1.5 rounded-full ${dotColorClass}`}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* BOUTON "LET'S TALK" DESKTOP (ANIMÉ LIQUID FILL + LOOP ARROW + MAGNETIC) */}
          {/* BOUTON "LET'S TALK" DESKTOP */}
            <div className="hidden lg:block relative group order-3">
              <Magnetic>
                <Link
                  href="/contact"
                  className={`
                    relative flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden border
                    
                    /* 👇 1. REMPLACE transition-all PAR transition-colors (pour ne pas lisser la vibration) */
                    transition-colors duration-300
                    
                    /* 👇 2. AJOUTE la classe CSS personnalisée */
                    tremble-effect
                    
                    ${
                      isActive('/contact') 
                      ? 'border-orange bg-orange text-white' 
                      : `border-current ${textColorClass} hover:border-transparent`
                    }
                  `}
                >
                  {/* 1. FOND DÉGRADÉ LIQUIDE (Monte en 500ms) */}
                  {!isActive('/contact') && (
                    <div 
                      className="absolute inset-0 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
                      style={{ background: 'linear-gradient(90deg, #FF0000 0%, #FF6F00 100%)' }}
                    />
                  )}

                  {/* 2. TEXTE */}
                  <span className={`relative z-10 font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${!isActive('/contact') ? 'group-hover:text-white' : ''}`}>
                    Let's talk
                  </span>

                  {/* 3. ICÔNE FLÈCHE "LOOP" */}
                  <div className="relative z-10 w-3 h-3 overflow-hidden">
                    <span className={`block relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:translate-x-full ${!isActive('/contact') ? 'group-hover:text-white' : ''}`}>
                      <ArrowIcon />
                    </span>
                    <span className={`block absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 ${!isActive('/contact') ? 'group-hover:text-white' : ''}`}>
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Magnetic>

              {/* Point de navigation */}
              {isActive('/contact') && (
                <motion.div 
                  layoutId="nav-dot"
                  className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${dotColorClass}`}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </div>

          </div>
        </div>
      </header>

      {/* MENU MOBILE FULLSCREEN */}
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
            <div
              className="absolute inset-0 z-0"
              style={{
                background: 'linear-gradient(180deg, #000000 0%, #1a0000 40%, #FF0000 80%, #FF9D00 100%)',
                opacity: 0.95
              }}
            />

            <div className="relative z-[110] px-6 py-6 flex justify-between items-center container-custom">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange transition-colors"
                aria-label="Fermer"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2 font-bold uppercase text-xs tracking-wide shadow-lg shadow-orange/20 active:scale-95 transition-all duration-200"
              >
                <span>Let's talk</span>
                <ArrowIcon className="w-3 h-3" />
              </Link>
            </div>

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

// 👉 Nouveau composant pour l'effet magnétique
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configuration du ressort pour un effet fluide et élastique
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // On divise par une valeur pour réduire l'intensité du mouvement (plus la valeur est grande, moins ça bouge)
    x.set(middleX / 3);
    y.set(middleY / 3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      // On ajoute une transition CSS pour que le "hover" CSS natif des enfants ne soit pas cassé par le mouvement JS
      className="transition-transform duration-100 ease-linear"
    >
      {children}
    </motion.div>
  );
}