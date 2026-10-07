/* hero intro */
if (!RM) {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.from('.hero h1 span>*', { yPercent: 110, duration: 1.1, stagger: .15 }).from('.hero .eyebrow', { opacity: 0, y: 12, duration: .6 }, .1).from('.hero p,.hero .btn', { opacity: 0, y: 20, duration: .8, stagger: .1 }, .5).from('.hv svg', { opacity: 0, y: 60, duration: 1.1, stagger: .15 }, .3);
    gsap.to('.hbg', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: true, start: 'top top', end: 'bottom top' } });
    gsap.to('.hv svg', { y: -14, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: .4 });
}
$('#cf').addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const chk = (id, t, em, iv) => {
        const el = $('#' + id), f = el.closest('.fd'), v = el.value.trim(), bad = !t(v);
        f.querySelector('.er').textContent = v ? iv : em;
        f.classList.toggle('bad', bad);
        el.setAttribute('aria-invalid', bad);
        if (bad)
            ok = false;
    };
    chk('contactName', v => v.length > 1, 'El nombre es obligatorio.', 'Introduce un nombre válido.');
    chk('ce', v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), 'El email es obligatorio.', 'Introduce un email válido.');
    chk('contactType', v => !!v, 'Elige una opción.', 'Elige una opción.');
    chk('cm', v => v.length > 9, 'El mensaje es obligatorio.', 'Cuéntanos un poco más (mínimo 10 caracteres).');
    const pv = $('#cp').checked;
    $('#cpe').style.display = pv ? 'none' : 'block';
    $('#cp').closest('.ck').classList.toggle('bad', !pv);
    if (!pv)
        ok = false;
    if (!ok) {
        gsap.fromTo('.fd.bad,.ck.bad', { x: -6 }, { x: 0, duration: .5, ease: 'elastic.out(1,.4)' });
        const fi = document.querySelector('.fd.bad input,.fd.bad select,.fd.bad textarea') || (!pv && $('#cp'));
        fi && fi.focus();
        return;
    }
    const f = $('#cf');
    gsap.to(f.children, { opacity: 0, duration: .25, onComplete: () => { f.innerHTML = '<div class="ok"><span class="serif">¡Gracias! Mensaje enviado</span><p>Te responderemos lo antes posible en horario de atención.</p></div>'; gsap.from('.ok', { opacity: 0, y: 16, duration: .6, ease: 'power2.out' }); } });
});
$('#cf').addEventListener('input', e => { const f = e.target.closest('.fd'); f && f.classList.remove('bad'); });
$('#cp').addEventListener('change', e => {
    if (e.target.checked) {
        $('#cpe').style.display = 'none';
        e.target.closest('.ck').classList.remove('bad');
    }
});
$$('[data-go]').forEach(e => {
    if (e.tagName != 'BUTTON' && !e.hasAttribute('tabindex'))
        e.tabIndex = 0;
    if (e.tagName != 'BUTTON' && !e.getAttribute('role'))
        e.setAttribute('role', 'link');
});
document.addEventListener('keydown', e => {
    const t = e.target;
    if ((e.key == 'Enter' || e.key == ' ') && t.matches && t.matches('[data-go]:not(button):not(input):not(.sri)')) {
        e.preventDefault();
        t.click();
    }
});
reveal();
renderCart();
phScroll();
