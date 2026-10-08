/* ACCESIBILIDAD: hace enfocables con teclado los elementos clicables y los activa con Enter o Espacio. */

$$('[data-go]').forEach(e => {
  if (e.tagName != 'BUTTON' && !e.hasAttribute('tabindex')) e.tabIndex = 0;
  if (e.tagName != 'BUTTON' && !e.getAttribute('role')) e.setAttribute('role', 'link')
});
document.addEventListener('keydown', e => {
  const t = e.target;
  if ((e.key == 'Enter' || e.key == ' ') && t.matches && t.matches('[data-go]:not(button):not(input):not(.sri)')) {
    e.preventDefault();
    t.click()
  }
});
