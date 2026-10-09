/* FORMULARIO DE CONTACTO: validación de campos obligatorios y mensaje de confirmación. */

$('#cf').addEventListener('submit', e => {
  e.preventDefault();
  let ok = true;
  const chk = (id, t, em, iv) => {
    const el = $('#' + id),
      f = el.closest('.fd'),
      v = el.value.trim(),
      bad = !t(v);
    f.querySelector('.er').textContent = v ? iv : em;
    f.classList.toggle('bad', bad);
    el.setAttribute('aria-invalid', bad);
    if (bad) ok = false
  };
  chk('cn2', v => v.length > 1, 'El nombre es obligatorio.', 'Introduce un nombre válido.');
  chk('ce', v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), 'El email es obligatorio.', 'Introduce un email válido.');
  chk('ct2', v => !!v, 'Elige una opción.', 'Elige una opción.');
  chk('cm', v => v.length > 9, 'El mensaje es obligatorio.', 'Cuéntanos un poco más (mínimo 10 caracteres).');
  const pv = $('#cp').checked;
  $('#cpe').style.display = pv ? 'none' : 'block';
  $('#cp').closest('.ck').classList.toggle('bad', !pv);
  if (!pv) ok = false;
  if (!ok) {
    gsap.fromTo('.fd.bad,.ck.bad', {
      x: -6
    }, {
      x: 0,
      duration: .5,
      ease: 'elastic.out(1,.4)'
    });
    const fi = document.querySelector('.fd.bad input,.fd.bad select,.fd.bad textarea') || (!pv && $('#cp'));
    fi && fi.focus();
    return
  }
  const subject = encodeURIComponent('Solicitud de asesoramiento RED\'S COLOR');
  const message = encodeURIComponent([
    `Nombre: ${$('#cn2').value.trim()}`,
    `Email: ${$('#ce').value.trim()}`,
    `Perfil: ${$('#ct2').value}`,
    '',
    $('#cm').value.trim()
  ].join('\n'));
  const mailto = `mailto:hola@negredopro.com?subject=${subject}&body=${message}`;
  const f = $('#cf');
  f.innerHTML = '<div class="ok"><h3>Solicitud preparada</h3><p>Se abrirá un borrador en tu aplicación de correo. El mensaje no se envía hasta que lo confirmes.</p><a class="btn" id="email-draft">Abrir correo</a></div>';
  $('#email-draft').href = mailto;
  gsap.from('.ok', {
    opacity: 0,
    y: 16,
    duration: .6,
    ease: 'power2.out'
  });
});
$('#cf').addEventListener('input', e => {
  const f = e.target.closest('.fd');
  f && f.classList.remove('bad')
});
$('#cp').addEventListener('change', e => {
  if (e.target.checked) {
    $('#cpe').style.display = 'none';
    e.target.closest('.ck').classList.remove('bad')
  }
});
