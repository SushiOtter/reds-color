/* UTILIDADES: selectores cortos ($, $$), preferencia de movimiento reducido, rellenar imágenes,
   fallback a una imagen secundaria y texturizado de búsqueda. */

const $ = s => document.querySelector(s),
  $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
gsap.registerPlugin(ScrollTrigger);
$$('[data-img]').forEach(e => {
  e.src = IMG[e.dataset.img] || ''
});
const im = (k, a = '') => `<img src="${IMG[k]||''}" alt="${a}" loading="lazy" decoding="async">`;
const norm = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
addEventListener('error', e => {
  const t = e.target;
  if (!t || t.tagName !== 'IMG') return;
  if (t.dataset.fbStep !== '1' && t.dataset.fallback && IMG[t.dataset.fallback]) {
    t.dataset.fbStep = '1';
    t.src = IMG[t.dataset.fallback];
  } else {
    t.classList.add('is-missing');
  }
}, true);
