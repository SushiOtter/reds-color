let cp, cq = 1, ct, ci = 0;
function prod(id) {
    cp = P.find(p => p.id == id);
    cq = 1;
    ct = SH[5];
    ci = 0;
    $('#pl').textContent = cp.l;
    $('#pn').textContent = $('#pn2').textContent = cp.n;
    $('#pd').textContent = cp.d;
    $('#pp').innerHTML = eur(cp.p) + (cp.o ? `<s>${eur(cp.o)}</s>` : '');
    $('#sp').textContent = eur(cp.p);
    $('#qv').textContent = 1;
    $('#sw').innerHTML = SH.map((s, i) => `<button style="background:${s[1]}" data-sw="${i}" class="${i == 5 ? 'on' : ''}" aria-label="${s[0]}"></button>`).join('');
    $('#tn').textContent = ct[0];
    $('#tb').style.display = cp.l == 'Coloración' ? '' : 'none';
    $('#th').innerHTML = ['#efe8df', '#e3d3c4', '#d9d2cc'].map((b, i) => `<button data-th="${i}" style="background:${b}" class="${i ? '' : 'on'}">${tube(cp.c)}</button>`).join('');
    pcol();
    $('#rel').innerHTML = P.filter(p => p.id != id).slice(0, 4).map(card).join('');
}
function pcol() { const c = cp.l == 'Coloración' ? ct[1] : cp.c; $('#big').innerHTML = tube(c); $('#big').style.background = ['#efe8df', '#e3d3c4', '#d9d2cc'][ci]; gsap.fromTo('#big svg', { opacity: 0, scale: .94 }, { opacity: 1, scale: 1, duration: .5, ease: 'power2.out' }); }
function reveal() {
    if (RM)
        return;
    $$('.v.on [data-n]').forEach(e => { const n = +e.dataset.n, o = { v: 0 }; e.textContent = 0; gsap.to(o, { v: n, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: e, start: 'top 92%' }, onUpdate: () => e.textContent = Math.round(o.v) }); });
    $$('.v.on [data-r]').forEach(e => gsap.from(e, { opacity: 0, y: 40, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: e, start: 'top 88%' } }));
}
