/* UTILIDADES: selectores cortos ($, $$), preferencia de movimiento reducido, rellenar imágenes y formateo de precios. */

const $ = s => document.querySelector(s),
  $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
gsap.registerPlugin(ScrollTrigger);
$$('[data-img]').forEach(e => {
  e.src = IMG[e.dataset.img] || ''
});
const im = (k, a = '') => `<img src="${IMG[k]||''}" alt="${a}" loading="lazy" decoding="async">`;
const eur = v => v.toFixed(2).replace('.', ',') + ' €';
const norm = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
