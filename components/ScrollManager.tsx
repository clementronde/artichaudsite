'use client';

import { useEffect } from 'react';

export default function ScrollManager() {
  useEffect(() => {
    const handleScroll = () => {
      const heroText = document.getElementById('hero-text');
      const scrolled = window.scrollY;
      
      // Calcul : opacité diminue, texte descend un peu
      const opacity = Math.max(0, 1 - scrolled / 300);
      const translateY = scrolled * 0.5;
      
      if (heroText) {
        heroText.style.opacity = opacity.toString();
        heroText.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage quand on quitte la page
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // Ce composant n'affiche rien visuellement, il gère juste la logique
}