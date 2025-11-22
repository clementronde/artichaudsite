'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { className?: string };

export default function HeatEffect({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    
    // --- CONFIGURATION ---
    const PARTICLE_COUNT = 100; 
    const MOUSE_RADIUS = 250; // Rayon du trou
    const DRIFT_SPEED = 0.5; 
    
    // PALETTES "FLAMME" (Correspondant à votre image : Jaune en bas, Rouge en haut)
    const COLORS_TOP = [
      'rgba(200, 0, 0, 0.5)',
      'rgba(180, 20, 20, 0.6)',
      'rgba(220, 50, 50, 0.5)'
    ];
    const COLORS_MID = [
      'rgba(255, 60, 0, 0.6)',
      'rgba(255, 100, 0, 0.6)',
      'rgba(255, 80, 20, 0.5)'
    ];
    const COLORS_BOT = [
      'rgba(255, 200, 0, 0.6)',
      'rgba(255, 220, 50, 0.6)',
      'rgba(255, 180, 0, 0.7)'
    ];

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let time = 0;

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      baseY: number; 
      vx: number; 
      vy: number;
      size: number;
      color: string;
      friction: number;
      spring: number;
      angleOffset: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        
        // Zone d'apparition : Bas de l'écran
        const startYRatio = 0.50;
        this.baseY = h * startYRatio + Math.random() * (h * 0.7); 
        this.y = this.baseY;
        
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 250 + 150; 
        
        // Attribution de la couleur selon la hauteur
        const relativeY = (this.baseY - h * startYRatio) / (h * 0.6);
        if (relativeY < 0.3) {
           this.color = COLORS_TOP[Math.floor(Math.random() * COLORS_TOP.length)];
        } else if (relativeY < 0.6) {
           this.color = COLORS_MID[Math.floor(Math.random() * COLORS_MID.length)];
        } else {
           this.color = COLORS_BOT[Math.floor(Math.random() * COLORS_BOT.length)];
        }

        // --- PHYSIQUE MODIFIÉE POUR RETOUR RAPIDE ---
        this.friction = 0.85; // Était 0.94. Freine plus vite le mouvement de la souris.
        this.spring = 0.1;    // Était 0.02. Force de retour 5x plus puissante.
        this.angleOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // 1. Flux continu
        this.x += DRIFT_SPEED;
        this.y = this.baseY + Math.sin(time * 0.0015 + this.angleOffset) * 30;

        // 2. Interaction Souris
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < MOUSE_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const power = 15 * force; 
          
          this.vx -= Math.cos(angle) * power;
          this.vy -= Math.sin(angle) * power;
        }

        // 3. Physique
        this.vx *= this.friction;
        this.vy *= this.friction;
        
        const targetY = this.baseY + Math.sin(time * 0.0015 + this.angleOffset) * 30;
        
        this.y += this.vy; 
        this.x += this.vx; 
        
        // Retour élastique (c'est ici que le 'spring' agit)
        this.y += (targetY - this.y) * this.spring;

        // 4. Boucle infinie
        if (this.x > width + this.size) {
          this.x = -this.size;
        }
        if (this.x < -this.size * 2) {
           this.x = width + this.size;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = 'screen'; 

      particles = [];
      const numParticles = Math.max(PARTICLE_COUNT, Math.floor(width / 20)); 
      
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time++;
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResize = () => init();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
      style={{ 
        filter: 'blur(60px)',
        opacity: isVisible ? 0.8 : 0,
        transition: 'opacity 2.0s ease-in-out'
      }}
    />
  );
}