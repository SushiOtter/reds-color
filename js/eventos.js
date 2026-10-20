/* EVENTOS: clics globales (delegación), selector de tono en la ficha y sombra de la cabecera al hacer scroll. */

document.addEventListener('click', e => {
  if (!e.target.closest('.sbx') && !e.target.closest('#sbt')) closeSearch();
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
    if (v == 'prod') prod(g.dataset.id, g.dataset.toneName, g.dataset.toneColor);
    show(v);
    if (g.dataset.to) setTimeout(() => {
      const x = $('#' + g.dataset.to);
      x && x.scrollIntoView({
        behavior: RM ? 'auto' : 'smooth'
      })
    }, 120)
  }
});
$('#ov').onclick = closeAll;
$('#bur').onclick = () => menu(true);
$('#mx').onclick = () => menu(false);
addEventListener('scroll', () => {
  $('#hd').classList.toggle('s', scrollY > 20)
}, {
  passive: true
});
