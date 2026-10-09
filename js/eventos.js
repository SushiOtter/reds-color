/* EVENTOS: clics globales (delegación), cantidad en la ficha, botones del carrito y sombra de la cabecera al hacer scroll. */

document.addEventListener('click', e => {
  if (!e.target.closest('.sbx') && !e.target.closest('#sbt')) closeSearch();
  const m = e.target.closest('[data-cq]');
  if (m) {
    const [i, d] = m.dataset.cq.split(':'), it = cart[i];
    if (it) {
      it.q = Math.max(1, it.q + +d);
      renderCart()
    }
    return
  }
  const r = e.target.closest('[data-rm]');
  if (r) {
    rm(+r.dataset.rm);
    return
  }
  const a = e.target.closest('[data-add]');
  if (a) {
    e.stopPropagation();
    add(a.dataset.add);
    return
  }
  const fm = e.target.closest('[data-fam]');
  if (fm) {
    fam(fm.dataset.fam);
    return
  }
  const tn = e.target.closest('[data-tone]');
  if (tn) {
    const [f, i] = tn.dataset.tone.split(':');
    tone(f, +i);
    return
  }
  const s = e.target.closest('[data-sw]');
  if (s) {
    ct = SH[s.dataset.sw];
    $$('#sw button').forEach(b => b.classList.toggle('on', b == s));
    $('#tn2').textContent = ct[0];
    $('#official-buy').href = TONE_URLS[cp.gama]?.[ct[0]] || cp.url || '#';
    return
  }
  const t = e.target.closest('[data-th]');
  if (t) {
    ci = +t.dataset.th;
    $$('#th button').forEach(b => b.classList.toggle('on', b == t));
    pcol();
    return
  }
  const g = e.target.closest('[data-go]');
  if (g) {
    e.preventDefault();
    closeMenu();
    closeSearch();
    $('#q').value = '';
    const v = g.dataset.go;
    if (v == 'coloracion') coloracion();
    if (v == 'tratamientos') tratamientos();
    if (v == 'xil') xil();
    if (v == 'gama') gama(g.dataset.gama);
    if (v == 'prod') prod(g.dataset.id, g.dataset.toneName, g.dataset.toneColor, g.dataset.toneUrl);
    show(v);
    if (g.dataset.to) setTimeout(() => {
      const x = $('#' + g.dataset.to);
      x && x.scrollIntoView({
        behavior: RM ? 'auto' : 'smooth'
      })
    }, 120)
  }
});
$('#qm').onclick = () => $('#qv').textContent = cq = Math.max(1, cq - 1);
$('#qp').onclick = () => $('#qv').textContent = ++cq;
const addP = () => {
  add(cp.id, cq, cp.gama ? ct[0] : undefined);
  setTimeout(() => drawer(true), 500)
};
$('#add').onclick = $('#add2').onclick = addP;
$('#cb').onclick = () => drawer(true);
$('#cx').onclick = () => drawer(false);
$('#ov').onclick = closeAll;
$('#bur').onclick = () => menu(true);
$('#mx').onclick = () => menu(false);
addEventListener('scroll', () => {
  $('#hd').classList.toggle('s', scrollY > 20);
  const k = $('#stk');
  if (k && cur == 'prod') gsap.to(k, {
    yPercent: scrollY > 420 ? 0 : 110,
    duration: .3,
    overwrite: true
  })
}, {
  passive: true
});
