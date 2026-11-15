'use client';

import { useEffect } from 'react';

/**
 * Animaciones al hacer scroll: [data-reveal] (aparición), [data-blur] (frase con desenfoque)
 * y [data-replay] (entrada del hero). Se repiten cada vez que el bloque vuelve a entrar en
 * pantalla: se activan al verse un 15 % y se reinician cuando sale del todo.
 */
export default function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-blur], [data-replay]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.15) e.target.classList.add('is-in');
          else if (!e.isIntersecting) e.target.classList.remove('is-in');
        });
      },
      { threshold: [0, 0.15] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
