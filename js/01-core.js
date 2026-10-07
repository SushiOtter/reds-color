const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
gsap.registerPlugin(ScrollTrigger);
const P = [
    { id: 1, n: "Tinte RED'S COLOR Caviar 100 ml", l: "Coloración", p: 6.9, o: null, c: "#6b2a1a", b: "Nuevo", d: "Coloración con colorantes de última generación desarrollados por laboratorios americanos." },
    { id: 2, n: "Tinte con queratina RED'S KERATIN 60 ml", l: "Coloración", p: 5.5, o: 6.5, c: "#c58b4e", b: "−15%", d: "Coloración permanente con proteínas de keratina y aceite de algodón." },
    { id: 3, n: "Decoloración RED'S COLOR 500 g", l: "Oxidantes", p: 14.9, o: null, c: "#e8dfd0", b: "", d: "Decolorante de nueva tecnología, inodoro y con bajo contenido amoniacal." },
    { id: 4, n: "Pack Anticaída Red's Xil", l: "Tratamientos", p: 29.9, o: 35.2, c: "#2b6b6b", b: "Pack −15%", d: "Tratamiento caída 2ª fase + shampoo caída." },
    { id: 5, n: "Ampollas anticaída 1ª fase RED'S XIL", l: "Tratamientos", p: 19.5, o: null, c: "#7aa7b5", b: "Top ventas", d: "Tratamiento preventivo y de mantenimiento para todos los tipos de caída." },
    { id: 6, n: "Oxidante en crema RED'S COLOR 20 vol 1000 ml", l: "Oxidantes", p: 7.9, o: null, c: "#f2ece3", b: "", d: "Base cosmética con emolientes y polímero filmógeno que protegen el cuero cabelludo." },
    { id: 7, n: "Shampoo anticaspa RED'S", l: "Tratamientos", p: 11.5, o: null, c: "#3d7a5a", b: "", d: "Combate la irritación y controla la aparición de escamas." },
    { id: 8, n: "Shampoo anticaída RED'S", l: "Tratamientos", p: 11.5, o: 13.5, c: "#8a4f9e", b: "−15%", d: "Fortalece el cabello desde la raíz." }
];
const SH = [["Negro 1.0", "#1c1412"], ["Castaño 4.0", "#4b2e22"], ["Rubio 7.0", "#b98a5a"], ["Rubio claro 9.0", "#dcc093"], ["Cobrizo 7.4", "#b0562e"], ["Rojo 6.66", "#9c1428"], ["Chocolate 5.7", "#5a3a2a"], ["Ceniza 8.1", "#a79c92"]];
const eur = v => v.toFixed(2).replace('.', ',') + ' €';
const tube = c => `<svg viewBox="0 0 100 220" aria-hidden="true"><path d="M30 14h40l6 20H24z" fill="#17110f"/><path d="M24 34h52l-4 168a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4z" fill="#fffdfa"/><path d="M24 34h52l-1.5 40h-49z" fill="${c}"/><rect x="36" y="100" width="28" height="3" fill="#b0122a"/><rect x="34" y="112" width="32" height="2" fill="#17110f" opacity=".5"/><rect x="38" y="120" width="24" height="2" fill="#17110f" opacity=".3"/><path d="M30 34l-2 168" stroke="#fff" stroke-opacity=".6" stroke-width="3"/></svg>`;
const card = p => `<article class="pc" tabindex="0" role="link" data-go="prod" data-id="${p.id}"><div class="pi">${p.b ? `<span class="bd ${p.o ? 'r' : ''}">${p.b}</span>` : ''}${tube(p.c)}<div class="qa"><button class="btn" data-add="${p.id}">Añadir</button></div></div><div class="pm"><small>${p.l}</small><h3>${p.n}</h3><div class="pr">${eur(p.p)}${p.o ? `<s>${eur(p.o)}</s>` : ''}</div></div></article>`;
const sk = n => Array(n).fill('<div><div class="pi sk"></div><div class="sk" style="height:14px;margin-top:14px;width:70%"></div><div class="sk" style="height:14px;margin-top:8px;width:40%"></div></div>').join('');
$('#hv').innerHTML = tube('#b0122a') + tube('#c58b4e') + tube('#17110f');
$('.pv').innerHTML = tube('#b0122a');
$('.ab-v').innerHTML = tube('#b0122a') + tube('#c58b4e') + tube('#17110f');
$('#feat').innerHTML = [1, 2, 4, 5].map(i => card(P[i - 1])).join('');
