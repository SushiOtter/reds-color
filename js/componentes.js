/* COMPONENTES: tarjeta de producto, tarjetas de gama, productos destacados de la home y selector "Encuentra tu tono". */

const card = (p, action = 'add') => `<article class="pc" tabindex="0" role="link" data-go="prod" data-id="${p.id}"><div class="pi">${p.b?`<span class="bd ${p.o?'r':''}">${p.b}</span>`:''}${im(p.im[0],p.n)}<div class="qa">${action == 'view' ? `<a class="btn" data-go="prod" data-id="${p.id}">Ver producto</a>` : `<button class="btn" data-add="${p.id}">Añadir</button>`}</div></div><div class="pm"><small>${p.l}</small><h3>${p.n}</h3>${p.tono ? `<span class="pm-tone">${p.tono}</span>` : ''}<div class="pr">${eur(p.p)}${p.o?`<s>${eur(p.o)}</s>`:''}</div></div></article>`;
const gamaCard = (g, index) => `<article class="gama-card"><a class="gama-art ${g.tipoImagen}" data-go="gama" data-gama="${g.id}" aria-label="Descubrir la gama ${g.nombre}"><img class="gama-image" src="${IMG[g.imagen]}" alt="${g.tipoImagen == 'modelo' ? `Resultado de color de la gama ${g.nombre}` : `Productos de la gama ${g.nombre}`}" ${g.tipoImagen == 'producto' ? 'loading="lazy"' : ''}>${g.producto ? `<img class="gama-pack" src="${IMG[g.producto]}" alt="">` : ''}<span class="gama-index">0${index + 1}</span></a><div class="gama-copy"><p class="gama-sub">${g.subtitulo}</p><h3>${g.nombre}</h3><p class="gama-description">${g.descripcion}</p><a class="lnk" data-go="gama" data-gama="${g.id}">Descubrir gama <span aria-hidden="true">→</span></a></div></article>`;
const renderGamas = selector => {
  const container = $(selector);
  if (container) container.innerHTML = GAMAS.map(gamaCard).join('')
};
renderGamas('#home-gamas');
renderGamas('#color-gamas');
$('#feat').innerHTML = [1, 2, 4, 5].map(i => card(P.find(p => p.id == i), 'view')).join('');
/* carta de tonos */
let toneLine = 'color';

function lineTones(f) {
  return (FAM[f] || []).filter(([code]) => TONE_URLS[toneLine]?.[code]);
}

function renderToneFamilies(selected = 'Naturales') {
  const families = Object.keys(FAM).filter(f => lineTones(f).length);
  $('#fams').innerHTML = families.map(f => `<button class="fam" data-fam="${f}">${f}</button>`).join('');
  fam(families.includes(selected) ? selected : families[0])
}

function fam(f) {
  $$('.fam').forEach(b => b.classList.toggle('on', b.dataset.fam == f));
  $('#tones').innerHTML = lineTones(f).map((t, i) => `<button class="tone" data-tone="${f}:${i}" style="background:${t[1]}" aria-label="${f} ${t[0]}"></button>`).join('');
  tone(f, 0)
}

function tone(f, i) {
  const t = lineTones(f)[i];
  if (!t) return;
  const productId = toneLine == 'keratin' ? 2 : 1;
  const url = TONE_URLS[toneLine][t[0]];
  $$('.tone').forEach((b, k) => b.classList.toggle('on', k == i));
  $('#tp').style.background = t[1];
  $('#tl').textContent = 'Familia ' + f;
  $('#tt2').textContent = 'Tono ' + t[0];
  $('#tone-product').dataset.toneName = t[0];
  $('#tone-product').dataset.toneColor = t[1];
  $('#tone-product').dataset.toneUrl = url;
  $('#tone-product').dataset.gama = toneLine;
  $('#tone-product').dataset.id = productId;
  $('#tone-buy').href = url;
  $('#tone-buy').setAttribute('aria-label', `Comprar tono ${t[0]} en la tienda profesional`);
  gsap.fromTo('#tt2', {
    opacity: 0,
    y: 10
  }, {
    opacity: 1,
    y: 0,
    duration: .4
  })
}
$('#fams').innerHTML = Object.keys(FAM).map(f => `<button class="fam" data-fam="${f}">${f}</button>`).join('');
$$('.tone-line').forEach(button => button.addEventListener('click', () => {
  toneLine = button.dataset.toneLine;
  $$('.tone-line').forEach(line => line.classList.toggle('on', line == button));
  renderToneFamilies()
}));
renderToneFamilies();
