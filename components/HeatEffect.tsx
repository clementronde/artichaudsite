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

    // --- "vent" (gust) contrôlé par la souris avec vélocité
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      prevX: window.innerWidth / 2,
      prevY: window.innerHeight / 2,
      vx: 0, // vélocité x
      vy: 0, // vélocité y
      speed: 0, // vitesse totale
      active: false,
    };
    let gust = 0; // intensité instantanée du vent (0..1+)
    let gustTarget = 0; // cible (on la augmente sur mouvement)
    const GUST_DECAY = 0.12; // vitesse de retour de gust → 0
    const LERP = (a: number, b: number, t: number) => a + (b - a) * t;

    // Système d'ondulations (ripples) pour effet de propagation
    type Ripple = {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      strength: number;
      dirX: number; // direction du mouvement de la souris
      dirY: number;
    };
    const ripples: Ripple[] = [];

    // écoute souris / toucher
    let lastMoveTime = Date.now();
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

      // Calculer la vélocité basée sur le mouvement
      const now = Date.now();
      const dt = Math.max(1, now - lastMoveTime);
      const dx = x - mouse.x;
      const dy = y - mouse.y;

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = x;
      mouse.y = y;

      // Vélocité lissée
      mouse.vx = LERP(mouse.vx, dx / dt * 10, 0.3);
      mouse.vy = LERP(mouse.vy, dy / dt * 10, 0.3);
      mouse.speed = Math.hypot(mouse.vx, mouse.vy);

      mouse.active = true;
      lastMoveTime = now;

      // Boost de la rafale basé sur la vitesse du mouvement
      const speedBoost = Math.min(1.5, mouse.speed * 0.15);
      gustTarget = Math.min(1.5, gustTarget + 0.3 + speedBoost);

      // Créer une ondulation si mouvement rapide
      if (mouse.speed > 2 && ripples.length < 8) {
        const dirLen = Math.max(0.1, Math.hypot(mouse.vx, mouse.vy));
        ripples.push({
          x: mouse.x,
          y: mouse.y,
          radius: 0,
          maxRadius: 250 + mouse.speed * 30,
          strength: Math.min(1.2, 0.6 + mouse.speed * 0.1),
          dirX: mouse.vx / dirLen,
          dirY: mouse.vy / dirLen,
        });
      }
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.vx = 0;
      mouse.vy = 0;
      mouse.speed = 0;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    // --- animation
    let raf = 0;
    function loop() {
      const w = canvas.width / dpr,
        h = canvas.height / dpr;

      // easing de l'intensité du vent
      gust = LERP(
        gust,
        mouse.active ? gustTarget : 0,
        mouse.active ? 0.25 : 0.18
      );
      // la cible redescend doucement
      gustTarget = Math.max(0, gustTarget - 0.12);

      // Vélocité de la souris décroit progressivement
      if (!mouse.active || mouse.speed < 0.1) {
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;
        mouse.speed *= 0.85;
      }

      // Mettre à jour les ondulations (ripples)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 8 + r.strength * 4; // vitesse d'expansion
        r.strength *= 0.94; // décroissance de l'intensité

        // Supprimer les ondulations terminées
        if (r.radius >= r.maxRadius || r.strength < 0.05) {
          ripples.splice(i, 1);
        }
      }

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

        // force de vent directionnel depuis la souris (effet de souffle)
        if (gust > 0.001) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const dist2 = dx * dx + dy * dy;
          const dist = Math.sqrt(dist2);

          // zone d'influence augmentée
          const influence = 180 + gust * 120;
          const sigma2 = influence * influence;
          const falloff = Math.exp(-dist2 / (2 * sigma2));

          // direction normalisée (repoussement radial)
          let nx = dx,
            ny = dy;
          const len = Math.hypot(nx, ny) || 1;
          nx /= len;
          ny /= len;

          // Composante directionnelle basée sur la vélocité de la souris
          const dirInfluence = Math.min(1, mouse.speed * 0.2);
          const dirX = LERP(nx, mouse.vx / (Math.abs(mouse.vx) + Math.abs(mouse.vy) + 0.1), dirInfluence);
          const dirY = LERP(ny, mouse.vy / (Math.abs(mouse.vx) + Math.abs(mouse.vy) + 0.1), dirInfluence);

          // impulse plus fort pour un effet plus satisfaisant
          const basePush = (1.5 + b.r / 800) * gust * falloff * 2.2;
          const speedMultiplier = 1 + mouse.speed * 0.15; // boost basé sur vitesse
          const push = basePush * speedMultiplier;

          b.vx += dirX * push * 0.8;
          b.vy += dirY * push * 0.8;

          // Ajout d'un effet de rotation/tourbillon quand mouvement latéral rapide
          if (mouse.speed > 3) {
            const perpX = -dirY; // perpendiculaire au mouvement
            const perpY = dirX;
            const swirl = falloff * mouse.speed * 0.08;
            b.vx += perpX * swirl;
            b.vy += perpY * swirl;
          }
        }

        // Force des ondulations (ripples) - effet de propagation du souffle
        for (const r of ripples) {
          const dx = b.x - r.x;
          const dy = b.y - r.y;
          const dist = Math.hypot(dx, dy);

          // L'ondulation affecte les blobs dans une zone annulaire
          const distFromRipple = Math.abs(dist - r.radius);
          if (distFromRipple < 80) {
            const rippleStrength = r.strength * (1 - distFromRipple / 80);

            // Direction radiale + direction du mouvement original
            let nx = dx / (dist || 1);
            let ny = dy / (dist || 1);

            // Mélanger avec la direction du mouvement de la souris
            const dirMix = 0.6;
            nx = LERP(nx, r.dirX, dirMix);
            ny = LERP(ny, r.dirY, dirMix);

            const rippleForce = rippleStrength * 0.8;
            b.vx += nx * rippleForce;
            b.vy += ny * rippleForce;
          }
        }

        // dynamique naturelle
        b.x += b.vx;
        b.y += b.vy;

        // friction légère adaptative (plus fluide quand souris active)
        const frictionFactor = mouse.active && mouse.speed > 1 ? 0.93 : 0.90;
        b.vx *= frictionFactor;
        b.vy *= frictionFactor;

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

        // Trou principal avec effet de traînée directionnelle
        const baseRadius = 110 + gust * 110;
        const speedStretch = Math.min(80, mouse.speed * 15); // étirement selon vitesse

        // Calculer l'offset directionnel basé sur le mouvement
        const dirMag = Math.hypot(mouse.vx, mouse.vy) || 1;
        const offsetX = (mouse.vx / dirMag) * speedStretch * 0.5;
        const offsetY = (mouse.vy / dirMag) * speedStretch * 0.5;

        // Trou principal (elliptique si mouvement rapide)
        const r0 = baseRadius;
        const r1 = r0 + 220 + gust * 160;

        // Gradient principal
        const mg = ctx.createRadialGradient(
          mouse.x - offsetX * 0.3,
          mouse.y - offsetY * 0.3,
          r0,
          mouse.x,
          mouse.y,
          r1
        );
        mg.addColorStop(0.0, 'rgba(0,0,0,1.0)'); // trou bien net
        mg.addColorStop(0.6, 'rgba(0,0,0,0.5)'); // transition plus douce
        mg.addColorStop(0.85, 'rgba(0,0,0,0.15)'); // halo léger
        mg.addColorStop(1.0, 'rgba(0,0,0,0)');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, r1, 0, Math.PI * 2);
        ctx.fill();

        // Effet de traînée additionnelle pour mouvement rapide
        if (mouse.speed > 3) {
          const trailAlpha = Math.min(0.8, mouse.speed * 0.08);
          const mg2 = ctx.createRadialGradient(
            mouse.x - offsetX,
            mouse.y - offsetY,
            r0 * 0.6,
            mouse.x - offsetX,
            mouse.y - offsetY,
            r0 * 1.4
          );
          mg2.addColorStop(0.0, `rgba(0,0,0,${trailAlpha})`);
          mg2.addColorStop(1.0, 'rgba(0,0,0,0)');
          ctx.fillStyle = mg2;
          ctx.beginPath();
          ctx.arc(mouse.x - offsetX, mouse.y - offsetY, r0 * 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2b) Visualiser les ondulations (ripples) - optionnel mais satisfaisant
      if (ripples.length > 0) {
        // @ts-ignore
        ctx.globalCompositeOperation = 'destination-out';
        for (const r of ripples) {
          const thickness = 25;
          const innerR = Math.max(0, r.radius - thickness);
          const outerR = r.radius;

          const rg = ctx.createRadialGradient(
            r.x,
            r.y,
            innerR,
            r.x,
            r.y,
            outerR
          );
          const alpha = r.strength * 0.25;
          rg.addColorStop(0.0, 'rgba(0,0,0,0)');
          rg.addColorStop(0.5, `rgba(0,0,0,${alpha})`);
          rg.addColorStop(1.0, 'rgba(0,0,0,0)');
          ctx.fillStyle = rg;
          ctx.beginPath();
          ctx.arc(r.x, r.y, outerR, 0, Math.PI * 2);
          ctx.fill();
        }
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
