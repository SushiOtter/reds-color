document.addEventListener('click', e => {
    if (!e.target.closest('.sbx') && !e.target.closest('#sbt'))
        closeSearch();
    const m = e.target.closest('[data-cq]');
    if (m) {
        const [i, d] = m.dataset.cq.split(':'), it = cart[i];
        if (it) {
            it.q = Math.max(1, it.q + +d);
            renderCart();
        }
        return;
    }
    const r = e.target.closest('[data-rm]');
    if (r) {
        rm(+r.dataset.rm);
        return;
    }
    const a = e.target.closest('[data-add]');
    if (a) {
        e.stopPropagation();
        add(a.dataset.add);
        return;
    }
    const c = e.target.closest('[data-chip]');
    if (c) {
        F = c.dataset.chip;
        cat();
        return;
    }
    const s = e.target.closest('[data-sw]');
    if (s) {
        ct = SH[s.dataset.sw];
        $$('#sw button').forEach(b => b.classList.toggle('on', b == s));
        $('#tn').textContent = ct[0];
        pcol();
        return;
    }
    const t = e.target.closest('[data-th]');
    if (t) {
        ci = +t.dataset.th;
        $$('#th button').forEach(b => b.classList.toggle('on', b == t));
        pcol();
        return;
    }
    const g = e.target.closest('[data-go]');
    if (g) {
        e.preventDefault();
        closeMenu();
        closeSearch();
        $('#q').value = '';
        const v = g.dataset.go;
        if (v == 'cat') {
            F = g.dataset.f || 'Todos';
            cat();
        }
        if (v == 'prod')
            prod(g.dataset.id);
        show(v);
        if (g.dataset.to)
            setTimeout(() => { const t = $('#' + g.dataset.to); t && t.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); }, 120);
    }
});
$('#so').onchange = e => { S = +e.target.value; cat(); };
$('#qm').onclick = () => $('#qv').textContent = cq = Math.max(1, cq - 1);
$('#qp').onclick = () => $('#qv').textContent = ++cq;
const addP = () => { const k = cp.l == 'Coloración'; add(cp.id, cq, k ? ct[0] : undefined, k ? ct[1] : undefined); setTimeout(() => drawer(true), 500); };
$('#add').onclick = $('#add2').onclick = addP;
$('#cb').onclick = () => drawer(true);
$('#cx').onclick = () => drawer(false);
$('#ov').onclick = closeAll;
function closeMenu() {
    if (mOpen)
        menu(false);
}
$('#bur').onclick = () => menu(true);
$('#mx').onclick = () => menu(false);
function menu(o) {
    const m = $('#mm'), v = $('#ov');
    mOpen = o;
    lock(o);
    if (o) {
        m.style.display = 'flex';
        v.style.display = 'block';
        gsap.fromTo(m, { x: '-100%' }, { x: 0, duration: .45, ease: 'power3.out' });
        gsap.fromTo(v, { opacity: 0 }, { opacity: 1, duration: .3 });
        gsap.from('#mm a', { opacity: 0, x: -20, stagger: .06, delay: .15, duration: .4 });
    }
    else {
        gsap.to(m, { x: '-100%', duration: .35, onComplete: () => m.style.display = 'none' });
        gsap.to(v, { opacity: 0, duration: .25, onComplete: () => v.style.display = 'none' });
    }
}
function closeAll() {
    if (dOpen)
        drawer(false);
    if (mOpen)
        menu(false);
}
