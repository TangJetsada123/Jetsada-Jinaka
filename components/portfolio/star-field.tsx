"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Three layers: distant (tiny), mid (medium), close (larger)
    const layers: Star[][] = [[], [], []];
    const configs = [
      { count: 300, sizeRange: [0.2, 0.8], opacityRange: [0.3, 0.7], colors: ["255,255,255"] },
      { count: 120, sizeRange: [0.8, 1.4], opacityRange: [0.5, 0.9], colors: ["255,255,255", "180,220,255", "220,200,255"] },
      { count: 40,  sizeRange: [1.4, 2.2], opacityRange: [0.7, 1.0], colors: ["0,230,255", "180,220,255", "255,255,255"] },
    ];

    configs.forEach((cfg, li) => {
      for (let i = 0; i < cfg.count; i++) {
        layers[li].push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: cfg.sizeRange[0] + Math.random() * (cfg.sizeRange[1] - cfg.sizeRange[0]),
          opacity: cfg.opacityRange[0] + Math.random() * (cfg.opacityRange[1] - cfg.opacityRange[0]),
          twinkleSpeed: 0.003 + Math.random() * 0.012,
          twinklePhase: Math.random() * Math.PI * 2,
          color: cfg.colors[Math.floor(Math.random() * cfg.colors.length)],
        });
      }
    });

    let frame = 0;

    const drawNebula = () => {
      // Cyan nebula bottom-left
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.12, canvas.height * 0.82, 0,
        canvas.width * 0.12, canvas.height * 0.82, canvas.width * 0.38
      );
      g1.addColorStop(0, "rgba(0,200,255,0.055)");
      g1.addColorStop(0.5, "rgba(0,150,200,0.025)");
      g1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Purple nebula top-right
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.88, canvas.height * 0.15, 0,
        canvas.width * 0.88, canvas.height * 0.15, canvas.width * 0.32
      );
      g2.addColorStop(0, "rgba(120,60,220,0.06)");
      g2.addColorStop(0.5, "rgba(80,30,160,0.025)");
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle deep-blue centre core
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.55
      );
      g3.addColorStop(0, "rgba(10,20,60,0.18)");
      g3.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawNebula();

      frame++;
      layers.forEach((layer) => {
        layer.forEach((star) => {
          star.twinklePhase += star.twinkleSpeed;
          const twinkle = 0.5 + 0.5 * Math.sin(star.twinklePhase);
          const alpha = star.opacity * (0.6 + 0.4 * twinkle);

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color},${alpha})`;
          ctx.fill();

          // Glow for bright cyan stars
          if (star.size > 1.6) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${star.color},${alpha * 0.12})`;
            ctx.fill();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
