'use client';

import { useEffect } from 'react';

export default function ScrollManager() {
  useEffect(() => {
    const handleScroll = () => {
      const heroText = document.getElementById('hero-text');
      const scrolled = window.scrollY;
      
      const opacity = Math.max(0, 1 - scrolled / 300);
      const translateY = scrolled * 0.5;
      
      if (heroText) {
        heroText.style.opacity = opacity.toString();
        
        // 👇 CORRECTION ICI : On ajoute "translate(-50%," pour garder le centrage horizontal
        // (Assure-toi que ton élément a bien 'left-1/2' en CSS, sinon retire le -50%)
        heroText.style.transform = `translate(-50%, ${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}