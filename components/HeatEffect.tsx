'use client';

import { useEffect, useRef } from 'react';

type Props = { className?: string };

export default function HeatEffect({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    // --- sizing
    function resize() {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // --- blobs
    type Blob = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      o: number;
      phase: number; // pour l'effet de vague
      waveSpeed: number; // vitesse de l'ondulation
      color: number; // 0=rouge profond, 1=orange, 2=jaune-orange
    };
    const blobs: Blob[] = [];
    const COUNT = 12; // augmenté de 6 à 12 pour plus de présence
    const init = () => {
      blobs.length = 0;
      const w = canvas.width / dpr,
        h = canvas.height / dpr;
      for (let i = 0; i < COUNT; i++) {
        blobs.push({
          x: Math.random() * w,
          y: h * (0.5 + Math.random() * 0.6), // réparti plus bas
          r: 350 + Math.random() * 400, // blobs plus grands
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.6) * 0.3, // tendance à monter
          o: 0.5 + Math.random() * 0.35, // opacité augmentée
          phase: Math.random() * Math.PI * 2, // phase aléatoire pour les vagues
          waveSpeed: 0.8 + Math.random() * 0.6,
          color: Math.floor(Math.random() * 3), // variation de couleur
        });
      }
    };
    init();

    // --- "vent" (gust) contrôlé par la souris
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };
    let gust = 0; // intensité instantanée du vent (0..1+)
    let gustTarget = 0; // cible (on la augmente sur mouvement)
    const GUST_DECAY = 0.12; // vitesse de retour de gust → 0
    const LERP = (a: number, b: number, t: number) => a + (b - a) * t;

    // écoute souris / toucher
    const onMove = (e: MouseEvent | TouchEvent) => {
      let x: number, y: number;
      if (e instanceof TouchEvent) {
        const t = e.touches[0];
        if (!t) return;
        x = t.clientX;
        y = t.clientY;
      } else {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      }
      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
      // booster la cible de rafale, plafonnée
      gustTarget = Math.min(1.0, gustTarget + 0.25);
    };
    const onLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    // --- animation
    let raf = 0;
    function loop() {
      const w = canvas.width / dpr,
        h = canvas.height / dpr;

      // easing de l’intensité du vent
      gust = LERP(
        gust,
        mouse.active ? gustTarget : 0,
        mouse.active ? 0.25 : 0.18
      );
      // la cible redescend doucement
      gustTarget = Math.max(0, gustTarget - 0.08);

      // update blobs
      const time = Date.now() * 0.001;
      for (const b of blobs) {
        // Effet de vague de chaleur montante - mouvement ondulatoire
        b.phase += 0.015 * b.waveSpeed;
        const waveX = Math.sin(b.phase + b.y * 0.005) * 1.2; // ondulation horizontale
        const waveY = Math.sin(b.phase * 0.7) * 0.8; // pulsation verticale
        const heatRise = -0.15; // force de montée constante (chaleur monte)

        // Turbulence améliorée pour effet vague de chaud
        const turbulenceX = Math.sin(time * 0.8 + b.x * 0.008 + b.phase) * 0.15;
        const turbulenceY = Math.cos(time * 0.6 + b.y * 0.006 + b.phase) * 0.12;

        b.vx += turbulenceX + waveX * 0.08;
        b.vy += turbulenceY + waveY * 0.06 + heatRise; // ajoute la montée

        // force de vent radiale depuis la souris
        if (gust > 0.001) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          // zone d'influence augmentée
          const influence = 180 + gust * 100;
          const sigma2 = influence * influence;
          const falloff = Math.exp(-dist2 / (2 * sigma2));

          // direction normalisée
          let nx = dx,
            ny = dy;
          const len = Math.hypot(nx, ny) || 1;
          nx /= len;
          ny /= len;

          // impulse plus fort pour un effet plus satisfaisant
          const push = (1.2 + b.r / 1000) * gust * falloff * 2.0;
          b.vx += nx * push * 0.7;
          b.vy += ny * push * 0.7;
        }

        // dynamique naturelle
        b.x += b.vx;
        b.y += b.vy;

        // friction légère
        b.vx *= 0.90;
        b.vy *= 0.90;

        // Rebonds avec recyclage des blobs qui montent trop haut
        if (b.x < -b.r || b.x > w + b.r) b.vx *= -1;
        if (b.y < -b.r) {
          // Réapparaît en bas quand monte trop haut (effet continu de chaleur)
          b.y = h + b.r * 0.5;
          b.x = Math.random() * w;
        }
        if (b.y > h + b.r * 0.5) b.vy *= -1;
      }

      // DRAW
      ctx.clearRect(0, 0, w, h);

      // 1) dessiner les blobs en "lighter"
      // @ts-ignore
      ctx.globalCompositeOperation = 'lighter';
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);

        // Variation de couleurs selon le type de blob (rouge profond, orange, jaune-orange)
        let centerColor, midColor, edgeColor;
        if (b.color === 0) {
          // Rouge profond intense
          centerColor = `rgba(255,80,20,${b.o * 1.5})`;
          midColor = `rgba(255,60,10,${b.o * 0.9})`;
          edgeColor = 'rgba(200,40,0,0)';
        } else if (b.color === 1) {
          // Orange vif
          centerColor = `rgba(255,140,30,${b.o * 1.4})`;
          midColor = `rgba(255,100,20,${b.o * 0.85})`;
          edgeColor = 'rgba(255,80,0,0)';
        } else {
          // Jaune-orange (zones les plus chaudes)
          centerColor = `rgba(255,180,60,${b.o * 1.3})`;
          midColor = `rgba(255,130,40,${b.o * 0.8})`;
          edgeColor = 'rgba(255,100,0,0)';
        }

        g.addColorStop(0, centerColor);
        g.addColorStop(0.4, midColor);
        g.addColorStop(1, edgeColor);
        ctx.fillStyle = g;
        ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      }

      // 2) "souffle" local : on perce un trou (destination-out) centré sur la souris
      if (gust > 0.01) {
        // @ts-ignore
        ctx.globalCompositeOperation = 'destination-out';
        const r0 = 100 + gust * 100; // trou plus grand au centre
        const r1 = r0 + 200 + gust * 150; // dégradé plus étendu
        const mg = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          r0,
          mouse.x,
          mouse.y,
          r1
        );
        mg.addColorStop(0.0, 'rgba(0,0,0,1.0)'); // trou bien net
        mg.addColorStop(0.7, 'rgba(0,0,0,0.3)'); // transition progressive
        mg.addColorStop(1.0, 'rgba(0,0,0,0)');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, r1, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3) reset pour prochaine frame
      // @ts-ignore
      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // ⚠️ laissons le canvas recevoir les events souris (donc PAS pointer-events-none)
      className={`absolute inset-0 w-full h-full filter blur-[60px] saturate-150 ${
        className ?? ''
      }`}
      style={{
        WebkitFilter: 'blur(60px) saturate(1.5)',
      }}
    />
  );
}
