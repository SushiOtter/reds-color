/* views */
let F = 'Todos', S = 0, cur = null;
function show(v) {
    const el = $('#v-' + v);
    $$('.v').forEach(x => x.classList.remove('on'));
    el.classList.add('on');
    scrollTo(0, 0);
    cur = v;
    $$('nav.d a').forEach(a => a.classList.toggle('on', a.dataset.go == v && (v != 'cat' || a.dataset.f == F)));
    gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .6, ease: 'power2.out', clearProps: 'transform,opacity' });
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.killTweensOf('[data-r]');
    gsap.set('[data-r]', { clearProps: 'opacity,transform,visibility' });
    reveal();
}
function cat() {
    $('#ct').textContent = $('#cn').textContent = F == 'Todos' ? 'Toda la tienda' : F;
    $('#chips').innerHTML = ['Todos', 'Coloración', 'Tratamientos', 'Oxidantes'].map(c => `<button class="chip ${c == F ? 'on' : ''}" data-chip="${c}">${c}</button>`).join('');
    $('#cg').innerHTML = sk(8);
    setTimeout(() => {
        let l = P.filter(p => F == 'Todos' || p.l == F);
        if (S == 1)
            l.sort((a, b) => a.p - b.p);
        if (S == 2)
            l.sort((a, b) => b.p - a.p);
        $('#cg').innerHTML = l.length ? l.map(card).join('') : '<p class="empty">No hay productos en esta categoría.</p>';
        if (!RM)
            gsap.from('#cg .pc', { opacity: 0, y: 24, stagger: .06, duration: .6, ease: 'power2.out' });
    }, RM ? 0 : 650);
}
