'use client';

import { useEffect } from 'react';

const clamp = (v: number) => Math.min(1, Math.max(0, v));

/**
 * - [data-blur]: la frase se enfoca palabra a palabra ligada al scroll. Al bajar se completa
 *   entera; al subir se desenfoca en orden inverso.
 * - [data-reveal] y [data-replay]: aparecen cada vez que vuelven a verse. Si el bloque salió
 *   por arriba, al volver baja desde arriba (animación inversa) en vez de subir desde abajo.
 */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Frase ligada al scroll ----
    const phrases = Array.from(document.querySelectorAll<HTMLElement>('[data-blur]')).map((el) => ({
      el,
      words: Array.from(el.querySelectorAll<HTMLElement>('span')),
    }));
    let raf = 0;
    const paint = () => {
      raf = 0;
      const vh = window.innerHeight;
      phrases.forEach(({ el, words }) => {
        const r = el.getBoundingClientRect();
        // 0 cuando la frase asoma por abajo (top al 92 %), 1 cuando su centro llega al 50 %
        const start = vh * 0.92;
        const end = vh * 0.5 - r.height / 2;
        const p = reduce ? 1 : clamp((start - r.top) / (start - end));
        const n = words.length;
        const span = 0.25; // fracción del recorrido que tarda cada palabra
        words.forEach((w, i) => {
          const from = (i / Math.max(1, n - 1)) * (1 - span);
          w.style.setProperty('--p', clamp((p - from) / span).toFixed(3));
        });
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // ---- Apariciones ----
    const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-replay]');
    let io: IntersectionObserver | undefined;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const el = e.target as HTMLElement;
            if (e.isIntersecting && e.intersectionRatio >= 0.15) {
              el.classList.add('is-in');
            } else if (!e.isIntersecting) {
              el.classList.remove('is-in');
              // Salió por arriba: al volver entrará desde arriba
              el.classList.toggle('from-top', e.boundingClientRect.top < 0);
            }
          });
        },
        { threshold: [0, 0.15] },
      );
      els.forEach((el) => io!.observe(el));
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);
  return null;
}
