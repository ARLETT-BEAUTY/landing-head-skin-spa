'use client';
import { useEffect } from 'react';

/** Reveal-on-scroll, the phone's sticky buy bar and the hero's soft parallax. No dependencies. */
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    // sticky bar: after the hero, hidden while the packs or the footer are on screen
    const bar = document.querySelector<HTMLElement>('.buybar');
    const hero = document.querySelector('.hero');
    const hide = Array.from(document.querySelectorAll('#packs, .close'));
    const state = { pastHero: false, covered: new Set<Element>() };
    const sync = () => bar?.classList.toggle('is-on', state.pastHero && state.covered.size === 0);
    const io2 = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.pastHero = !e.isIntersecting;
        else if (e.isIntersecting) state.covered.add(e.target);
        else state.covered.delete(e.target);
      }
      sync();
    }, { threshold: 0.05 });
    if (hero) io2.observe(hero);
    hide.forEach((el) => io2.observe(el));

    let raf = 0;
    const onScroll = () => {
      if (reduce || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        root.style.setProperty('--sy', String(Math.min(window.scrollY, 900)));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); io2.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  return null;
}
