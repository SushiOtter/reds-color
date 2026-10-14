/* VISTAS (páginas): cambiar entre home, categoría, producto y sobre nosotros; ordenar/filtrar; galería; animaciones al hacer scroll. */

let cur = 'home';

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
  const activeRoute = v == 'gama' ? 'coloracion' : v == 'xil' ? 'tratamientos' : v;
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

function coloracion() {
  $('#color-products').innerHTML = P.filter(p => p.area == 'Coloración').map(card).join('')
}
function tratamientos() {
  return
}
function xil() {
  $('#xil-shampoo-products').innerHTML = P.filter(p => [7, 8, 13].includes(p.id)).map(card).join('');
  $('#xil-ampoule-products').innerHTML = P.filter(p => p.id == 5).map(card).join('');
  $('#xil-phase-products').innerHTML = P.filter(p => [4, 11, 12].includes(p.id)).map(card).join('')
}
function gama(id) {
  const item = GAMAS.find(g => g.id == id);
  if (!item) return;
  const image = item.producto ? `<div class="gama-detail-art ${item.tipoImagen}">${im(item.imagen, item.nombre)}${im(item.producto, '')}</div>` : `<div class="gama-detail-art ${item.tipoImagen}">${im(item.imagen, item.nombre)}</div>`;
  const products = item.productos.length ? `<div class="grid">${item.productos.map(id => card(P.find(p => p.id == id))).join('')}</div>` : `<div class="gama-unlisted"><p>Estamos preparando la presentación de los productos de esta gama. Mientras tanto, puedes conocernos mejor o solicitar información.</p><a class="btn" data-go="about" data-to="contacto">Solicitar información</a></div>`;
  $('#gama-detail').innerHTML = `<div class="wrap"><div class="crumb"><a class="lnk" data-go="coloracion">Coloración</a> / ${item.nombre}</div><section class="gama-detail-hero">${image}<div><div class="eyebrow">${item.subtitulo}</div><h1>${item.nombre}</h1><p>${item.descripcion}</p></div></section><section class="sec"><div class="sh"><div><div class="eyebrow">${item.nombre}</div><h2 class="t">Descubre <b>la gama.</b></h2></div></div>${products}</section></div>`
}
let cp, ct, ci = 0;

function prod(id, selectedTone, selectedColor, selectedUrl) {
  cp = P.find(p => p.id == id);
  SH = Object.values(FAM).flat().filter((tone, index, tones) => tones.findIndex(item => item[0] == tone[0]) == index && TONE_URLS[cp.gama]?.[tone[0]]);
  const defaultTone = SH.find(tone => tone[0] == cp.tono?.split(' · ')[0]) || SH[0];
  ct = selectedTone ? [selectedTone, selectedColor] : defaultTone || ['', '#777'];
  ci = 0;
  $('#pl').textContent = cp.l;
  $('#pn').textContent = $('#pn2').textContent = cp.n;
  const areaLink = $('#pc-area');
  if (areaLink) {
    areaLink.textContent = cp.area;
    areaLink.dataset.go = cp.area == 'Tratamientos' ? 'tratamientos' : 'coloracion';
  }
  $('#pd').textContent = cp.d;
  const benList = $('#pben');
  if (benList) {
    benList.innerHTML = (cp.ben || []).map(b => `<li>${b}</li>`).join('');
    const benWrap = $('#pbw');
    if (benWrap) benWrap.style.display = cp.ben && cp.ben.length ? '' : 'none';
  }
  const more = $('#pc-more');
  if (more) {
    if (cp.gama && cp.area == 'Coloración') {
      more.dataset.go = 'gama';
      more.dataset.gama = cp.gama;
      more.textContent = 'Descubrir la gama';
    } else if (cp.gama == 'xil') {
      more.dataset.go = 'xil';
      delete more.dataset.gama;
      more.textContent = "Descubrir RED'S XIL";
    } else {
      more.dataset.go = 'coloracion';
      delete more.dataset.gama;
      more.textContent = 'Ver coloración';
    }
  }
  $('#sw').innerHTML = SH.map((s, i) => `<button style="background:${s[1]}" data-sw="${i}" class="${s[0] == ct[0] ? 'on' : ''}" aria-label="Tono ${s[0]}"></button>`).join('');
  $('#tn2').textContent = cp.tono && !selectedTone ? cp.tono : ct[0];
  $('#tb').style.display = cp.area == 'Coloración' && cp.gama ? '' : 'none';
  $('#official-buy').href = selectedUrl || cp.url || '#';
  $('#official-buy').style.display = cp.url ? '' : 'none';
  $('#th').innerHTML = cp.im.map((k, i) => `<button data-th="${i}" class="${i?'':'on'}">${im(k)}</button>`).join('');
  pcol();
  $('#rel').innerHTML = P.filter(p => p.id != id).sort((a, b) => (b.area == cp.area) - (a.area == cp.area)).slice(0, 4).map(card).join('')
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
