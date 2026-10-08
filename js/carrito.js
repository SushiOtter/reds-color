/* CARRITO, AVISOS Y PANELES: cesta (añadir, quitar, cantidades), toast, cajón del carrito y menú móvil. */

let cart = [],
  dOpen = 0,
  mOpen = 0;
const FREE = 60,
  lock = b => document.body.style.overflow = b ? 'hidden' : '';

function renderCart() {
  const n = cart.reduce((a, i) => a + i.q, 0),
    t = cart.reduce((a, i) => a + i.q * i.p.p, 0);
  $('#cc').textContent = n;
  $('#sub').textContent = eur(t);
  const r = Math.max(FREE - t, 0);
  $('#fpt').textContent = r ? `Te faltan ${eur(r)} para el envío gratis` : '¡Envío gratis conseguido!';
  gsap.to('#fpb', {
    width: Math.min(t / FREE * 100, 100) + '%',
    duration: .6,
    ease: 'power2.out'
  });
  $('#cl').innerHTML = cart.length ? cart.map((i, k) => `<div class="li"><div class="th2">${im(i.p.im[0])}</div><div><b style="font-size:13px;font-weight:600;line-height:1.3;display:block">${i.p.n}</b>${i.t?`<small style="color:var(--mut)">Tono: ${i.t}</small><br>`:''}<div class="mq"><button data-cq="${k}:-1" ${i.q<2?'disabled':''} aria-label="Menos">−</button><span>${i.q}</span><button data-cq="${k}:1" aria-label="Más">+</button></div><button class="rm" data-rm="${k}">Quitar</button></div><b>${eur(i.p.p*i.q)}</b></div>`).join('') : '<div class="empty"><h3 style="font-size:24px;margin-bottom:8px">Tu cesta está vacía</h3><p>Descubre nuestros tintes y tratamientos profesionales.</p></div>'
}
let tl2;

function toast(m) {
  $('#tt').textContent = m;
  tl2 && tl2.kill();
  tl2 = gsap.timeline();
  tl2.fromTo('#toast', {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: .4,
    ease: 'power3.out'
  }).to('#toast', {
    y: 30,
    opacity: 0,
    duration: .4
  }, '+=2.2')
}

function rm(i) {
  const row = $$('#cl .li')[i],
    done = () => {
      cart.splice(i, 1);
      renderCart();
      toast('Producto eliminado de la cesta')
    };
  row && !RM ? gsap.to(row, {
    opacity: 0,
    x: 40,
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    duration: .35,
    ease: 'power2.in',
    onComplete: done
  }) : done()
}

function add(id, q = 1, t) {
  const p = P.find(x => x.id == id),
    e = cart.find(i => i.p.id == id && i.t == t);
  e ? e.q += q : cart.push({
    p,
    q,
    t
  });
  renderCart();
  toast(p.n.split(' ').slice(0, 4).join(' ') + ' añadido a la cesta');
  gsap.fromTo('#cc', {
    scale: 1.8
  }, {
    scale: 1,
    duration: .5,
    ease: 'back.out(3)'
  })
}

function drawer(o) {
  const d = $('#dr'),
    v = $('#ov');
  dOpen = o;
  lock(o);
  if (o) {
    d.style.display = 'flex';
    v.style.display = 'block';
    gsap.fromTo(d, {
      x: '100%'
    }, {
      x: 0,
      duration: .5,
      ease: 'power3.out'
    });
    gsap.fromTo(v, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .4
    })
  } else {
    gsap.to(d, {
      x: '100%',
      duration: .4,
      onComplete: () => d.style.display = 'none'
    });
    gsap.to(v, {
      opacity: 0,
      duration: .3,
      onComplete: () => v.style.display = 'none'
    })
  }
}

function menu(o) {
  const m = $('#mm'),
    v = $('#ov');
  mOpen = o;
  lock(o);
  if (o) {
    m.style.display = 'flex';
    v.style.display = 'block';
    gsap.fromTo(m, {
      x: '-100%'
    }, {
      x: 0,
      duration: .45,
      ease: 'power3.out'
    });
    gsap.fromTo(v, {
      opacity: 0
    }, {
      opacity: 1,
      duration: .3
    });
    gsap.from('#mm a', {
      opacity: 0,
      x: -20,
      stagger: .06,
      delay: .15,
      duration: .4
    })
  } else {
    gsap.to(m, {
      x: '-100%',
      duration: .35,
      onComplete: () => m.style.display = 'none'
    });
    gsap.to(v, {
      opacity: 0,
      duration: .25,
      onComplete: () => v.style.display = 'none'
    })
  }
}

function closeAll() {
  if (dOpen) drawer(false);
  if (mOpen) menu(false)
}

function closeMenu() {
  if (mOpen) menu(false)
}
