/* búsqueda en vivo */
const norm = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function closeSearch() { $('#sr').style.display = 'none'; document.body.classList.remove('sopen'); }
function doSearch() {
    const v = $('#q').value.trim(), r = $('#sr');
    if (!v) {
        r.style.display = 'none';
        return;
    }
    const w = norm(v).split(/\s+/), l = P.filter(p => { const h = norm(p.n + ' ' + p.l); return w.every(x => h.includes(x)); }).slice(0, 5);
    r.innerHTML = l.length ? l.map(p => `<a class="sri" tabindex="0" data-go="prod" data-id="${p.id}" role="option"><span class="srt">${tube(p.c)}</span><span><b>${p.n}</b><small>${p.l}</small></span><span class="pr">${eur(p.p)}</span></a>`).join('') : `<div class="srn">Sin resultados para «${v.replace(/</g, '&lt;')}»</div>`;
    r.style.display = 'block';
    gsap.fromTo('#sr .sri', { opacity: 0, y: 6 }, { opacity: 1, y: 0, stagger: .04, duration: .25, overwrite: true });
}
$('#q').addEventListener('input', doSearch);
$('#q').addEventListener('focus', doSearch);
$('#q').addEventListener('keydown', e => {
    const f = $('#sr .sri');
    if (e.key == 'Enter' && f)
        f.click();
    if (e.key == 'ArrowDown' && f) {
        e.preventDefault();
        f.focus();
    }
});
$('#sr').addEventListener('keydown', e => {
    const a = document.activeElement;
    if (e.key == 'ArrowDown') {
        e.preventDefault();
        (a.nextElementSibling || a).focus();
    }
    if (e.key == 'ArrowUp') {
        e.preventDefault();
        (a.previousElementSibling || $('#q')).focus();
    }
    if (e.key == 'Enter')
        a.click();
});
$('#sbt').onclick = () => {
    document.body.classList.toggle('sopen');
    if (document.body.classList.contains('sopen'))
        $('#q').focus();
    phScroll();
};
let phT;
function phScroll() {
    const ph = $('#ph'), w = ph.parentElement;
    phT && phT.kill();
    gsap.set(ph, { x: 0 });
    const d = ph.scrollWidth - w.clientWidth;
    if (d > 4 && !RM)
        phT = gsap.to(ph, { x: -d - 4, duration: Math.max(d / 35, 2), ease: 'none', repeat: -1, yoyo: true, repeatDelay: 1.2 });
}
addEventListener('resize', phScroll);
document.fonts && document.fonts.ready.then(phScroll);
addEventListener('keydown', e => {
    if (e.key == 'Escape') {
        closeAll();
        closeSearch();
    }
});
addEventListener('scroll', () => {
    $('#hd').classList.toggle('s', scrollY > 20);
    const k = $('#stk');
    if (k && cur == 'prod')
        gsap.to(k, { yPercent: scrollY > 420 ? 0 : 110, duration: .3, overwrite: true });
}, { passive: true });
