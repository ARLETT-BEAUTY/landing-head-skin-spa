'use client';

import { useEffect } from 'react';

/** Aparición al hacer scroll ([data-reveal]) y frase con desenfoque ([data-blur]). Una sola vez. */
export default function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-blur]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
