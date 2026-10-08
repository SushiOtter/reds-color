/* ANIMACIONES DE ENTRADA (GSAP): aparición del hero y parallax del fondo. */

if (!RM) {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.out'
    }
  });
  tl.from('.hero h1 span>*', {
    yPercent: 100,
    duration: 1.1,
    stagger: .12
  }, 0).from('.hero .eyebrow', {
    opacity: 0,
    y: 12,
    duration: .6
  }, .1).from('.hero .lead,.hero .btn', {
    opacity: 0,
    y: 20,
    duration: .8,
    stagger: .1
  }, .5);
  gsap.to('.hbg', {
    yPercent: 10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      scrub: true,
      start: 'top top',
      end: 'bottom top'
    }
  })
}
