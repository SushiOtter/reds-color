/* PANELES Y AVISOS: menú móvil, capa oscura y aviso (toast). */

let mOpen = 0;
const lock = b => document.body.style.overflow = b ? 'hidden' : '';

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
  if (mOpen) menu(false)
}

function closeMenu() {
  if (mOpen) menu(false)
}
