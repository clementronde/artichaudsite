'use client';

import { LazyMotion, domAnimation } from "framer-motion"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // domAnimation charge uniquement les animations de base (couleur, transfo, opacité)
    // et ignore les fonctions physiques lourdes (layout animations complexes) si non nécessaires.
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}