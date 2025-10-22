'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ← Ça détecte sur quelle page tu es !

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour savoir si on est sur la page
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-noir/95 backdrop-blur-lg py-6' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* LOGO avec point indicateur si on est sur la home */}
          <Link href="/" className="group relative">
            <img
              src="/img/logonavbar.png"
              alt="Artichaud Studio"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            {/* Point blanc sous le logo si on est sur la home */}
            {isActive('/') && pathname === '/' && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="w-1.5 h-1.5 bg-blanc rounded-full"></div>
              </div>
            )}
          </Link>

          {/* NAVIGATION avec points indicateurs */}
          <nav className="hidden lg:flex items-center gap-10">
            {/* WORKS */}
            <Link
              href="/works"
              className={`relative text-[15px] transition-colors duration-300 ${
                isActive('/works')
                  ? 'text-orange'
                  : 'text-blanc hover:text-orange'
              }`}
            >
              Works
              {/* Point blanc sous Works si on est sur la page */}
              {isActive('/works') && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-blanc rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>

            {/* SERVICES */}
            <Link
              href="/services"
              className={`relative text-[15px] transition-colors duration-300 ${
                isActive('/services')
                  ? 'text-orange'
                  : 'text-blanc hover:text-orange'
              }`}
            >
              Services
              {isActive('/services') && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-blanc rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className={`relative text-[15px] transition-colors duration-300 ${
                isActive('/about')
                  ? 'text-orange'
                  : 'text-blanc hover:text-orange'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-blanc rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>

            {/* BLOG */}
            <Link
              href="/blog"
              className={`relative text-[15px] transition-colors duration-300 ${
                isActive('/blog')
                  ? 'text-orange'
                  : 'text-blanc hover:text-orange'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-blanc rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`relative text-[15px] transition-colors duration-300 ${
                isActive('/contact')
                  ? 'text-orange'
                  : 'text-blanc hover:text-orange'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-1.5 h-1.5 bg-blanc rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>
          </nav>

          {/* BOUTON "LET'S TALK" */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 text-blanc hover:text-orange transition-colors duration-300 text-[15px] group"
          >
            <span>Let's talk</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M1 15L15 1M15 1H8M15 1V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* MENU MOBILE */}
          <button className="lg:hidden text-blanc">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
