/* COMPONENTES: tarjeta de producto, skeleton, productos destacados de la home y selector "Encuentra tu tono". */

const card = p => `<article class="pc" tabindex="0" role="link" data-go="prod" data-id="${p.id}"><div class="pi">${p.b?`<span class="bd ${p.o?'r':''}">${p.b}</span>`:''}${im(p.im[0],p.n)}<div class="qa"><button class="btn" data-add="${p.id}">Añadir</button></div></div><div class="pm"><small>${p.l}</small><h3>${p.n}</h3><div class="pr">${eur(p.p)}${p.o?`<s>${eur(p.o)}</s>`:''}</div></div></article>`;
const sk = n => Array(n).fill('<div><div class="pi sk"></div><div class="sk" style="height:14px;margin-top:14px;width:70%"></div><div class="sk" style="height:14px;margin-top:8px;width:40%"></div></div>').join('');
$('#feat').innerHTML = [1, 2, 4, 5].map(i => card(P.find(p => p.id == i))).join('');
/* tono */
function fam(f) {
  $$('.fam').forEach(b => b.classList.toggle('on', b.dataset.fam == f));
  $('#tones').innerHTML = FAM[f].map((t, i) => `<button class="tone" data-tone="${f}:${i}" style="background:${t[1]}" aria-label="${f} ${t[0]}"></button>`).join('');
  tone(f, 0)
}

function tone(f, i) {
  const t = FAM[f][i];
  $$('.tone').forEach((b, k) => b.classList.toggle('on', k == i));
  $('#tp').style.background = t[1];
  $('#tl').textContent = 'Familia ' + f;
  $('#tt2').textContent = 'Tono ' + t[0];
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
fam('Rojos');
