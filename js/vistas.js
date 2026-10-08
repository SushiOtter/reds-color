/* VISTAS (páginas): cambiar entre home, categoría, producto y sobre nosotros; ordenar/filtrar; galería; animaciones al hacer scroll. */

let F = 'Todos',
  S = 0,
  cur = 'home';

function show(v) {
  const el = $('#v-' + v);
  gsap.killTweensOf('.v');
  gsap.set('.v', {
    clearProps: 'opacity,transform'
  });
  $$('.v').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  scrollTo(0, 0);
  cur = v;
  const activeRoute = v == 'gama' ? 'coloracion' : v == 'xil' ? 'tratamientos' : v == 'cat' ? (F == 'Tratamientos' ? 'tratamientos' : 'coloracion') : v;
  $$('nav.d a').forEach(a => a.classList.toggle('on', a.dataset.go == activeRoute));
  gsap.fromTo(el, {
    opacity: 0,
    y: 16
  }, {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: 'power2.out',
    onComplete: () => ScrollTrigger.refresh(),
    clearProps: 'transform,opacity'
  });
  ScrollTrigger.getAll().forEach(t => t.kill());
  gsap.killTweensOf('[data-r]');
  gsap.set('[data-r]', {
    clearProps: 'opacity,transform,visibility'
  });
  reveal()
}

function cat() {
  $('#ct').innerHTML = F == 'Todos' ? 'Catálogo <b>profesional</b>' : '<b>' + F + '</b>';
  $('#cn').textContent = F == 'Todos' ? 'Catálogo' : F;
  $('#chips').innerHTML = ['Todos', 'Coloración', 'Tratamientos'].map(c => `<button class="chip ${c==F?'on':''}" data-chip="${c}">${c}</button>`).join('');
  $('#cg').innerHTML = sk(8);
  setTimeout(() => {
    let l = P.filter(p => F == 'Todos' || p.area == F);
    if (S == 1) l.sort((a, b) => a.p - b.p);
    if (S == 2) l.sort((a, b) => b.p - a.p);
    $('#cg').innerHTML = l.length ? l.map(card).join('') : '<p class="empty">No hay productos en esta categoría.</p>';
    if (!RM) gsap.from('#cg .pc', {
      opacity: 0,
      y: 24,
      stagger: .06,
      duration: .6,
      ease: 'power2.out'
    })
  }, RM ? 0 : 650)
}
function coloracion() {
  $('#color-products').innerHTML = P.filter(p => p.area == 'Coloración').map(card).join('')
}
function tratamientos() {
  $('#treatment-products').innerHTML = P.filter(p => p.area == 'Tratamientos' && p.gama != 'xil').map(card).join('')
}
function xil() {
  $('#xil-products').innerHTML = P.filter(p => p.gama == 'xil').map(card).join('')
}
function gama(id) {
  const item = GAMAS.find(g => g.id == id);
  if (!item) return;
  const image = item.producto ? `<div class="gama-detail-art ${item.tipoImagen}">${im(item.imagen, item.nombre)}${im(item.producto, '')}</div>` : `<div class="gama-detail-art ${item.tipoImagen}">${im(item.imagen, item.nombre)}</div>`;
  const products = item.productos.length ? `<div class="grid">${item.productos.map(id => card(P.find(p => p.id == id), 'view')).join('')}</div>` : `<div class="gama-unlisted"><p>Los productos de esta gama todavía no están cargados en el catálogo.</p><a class="btn" data-go="about" data-to="contacto">Consultar disponibilidad</a></div>`;
  $('#gama-detail').innerHTML = `<div class="wrap"><div class="crumb"><a class="lnk" data-go="coloracion">Coloración</a> / ${item.nombre}</div><section class="gama-detail-hero">${image}<div><div class="eyebrow">${item.subtitulo}</div><h1>${item.nombre}</h1><p>${item.descripcion}</p></div></section><section class="sec"><div class="sh"><div><div class="eyebrow">${item.nombre}</div><h2 class="t">Descubre <b>la gama.</b></h2></div></div>${products}</section></div>`
}
let cp, cq = 1,
  ct, ci = 0;

function prod(id, selectedTone, selectedColor) {
  cp = P.find(p => p.id == id);
  cq = 1;
  ct = selectedTone ? [selectedTone, selectedColor] : SH[5];
  ci = 0;
  $('#pl').textContent = cp.l;
  $('#pn').textContent = $('#pn2').textContent = cp.n;
  $('#pd').textContent = cp.d;
  $('#pp').innerHTML = eur(cp.p) + (cp.o ? `<s>${eur(cp.o)}</s>` : '');
  $('#sp').textContent = eur(cp.p);
  $('#qv').textContent = 1;
  $('#sw').innerHTML = SH.map((s, i) => `<button style="background:${s[1]}" data-sw="${i}" class="${s[1] == ct[1] ? 'on' : ''}" aria-label="${s[0]}"></button>`).join('');
  $('#tn2').textContent = ct[0];
  $('#tb').style.display = cp.area == 'Coloración' && cp.gama ? '' : 'none';
  $('#th').innerHTML = cp.im.map((k, i) => `<button data-th="${i}" class="${i?'':'on'}">${im(k)}</button>`).join('');
  pcol();
  $('#rel').innerHTML = P.filter(p => p.id != id).slice(0, 4).map(card).join('')
}

function pcol() {
  $('#big').innerHTML = im(cp.im[ci], cp.n);
  gsap.fromTo('#big img', {
    opacity: 0
  }, {
    opacity: 1,
    duration: .5,
    ease: 'power2.out'
  })
}

function reveal() {
  if (RM) return;
  $$('.v.on [data-n]').forEach(e => {
    const n = +e.dataset.n,
      o = {
        v: 0
      };
    e.textContent = 0;
    gsap.to(o, {
      v: n,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: e,
        start: 'top 92%'
      },
      onUpdate: () => e.textContent = Math.round(o.v)
    })
  });
  $$('.v.on [data-r]').forEach(e => gsap.from(e, {
    opacity: 0,
    y: 40,
    duration: .9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: e,
      start: 'top 88%'
    }
  }))
}
