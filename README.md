# RED'S COLOR — Web de marca

Web estática hecha con HTML, CSS y JavaScript puro, más GSAP para las animaciones (se carga desde internet, no hay que instalar nada).

Es una web de **presentación corporativa de marca**: no incluye precios, cantidades, cesta, compra directa ni enlaces a fichas de compra. Presenta las cuatro gamas de coloración, las fichas informativas de producto, la carta de tonos y la línea de tratamientos RED'S XIL, diferenciada de la coloración. Las llamadas a la acción invitan a descubrir gamas y productos o solicitar asesoramiento profesional.

## Estructura de carpetas

```
reds-color-clean/
├── index.html              Estructura de la web (todas las páginas y secciones)
├── css/
│   ├── 01-foundation.css    Variables, estilos base y componentes generales
│   ├── 02-header.css        Barra superior, navegación y buscador
│   ├── 03-hero.css          Hero de la portada
│   ├── 04-home.css          Secciones de inicio, gamas, selector de tonos y banner de campaña
│   ├── 05-product-cards.css Tarjetas y rejillas de productos
│   ├── 06-company.css       Bloques de marca, resultados y sobre nosotros
│   ├── 07-category.css      Cabeceras de área (Coloración/Tratamientos) y RED'S XIL
│   ├── 08-product.css       Ficha informativa de producto
│   ├── 09-overlays.css      Menú móvil y avisos (toast)
│   ├── 10-footer-contact.css Footer y formulario de contacto
│   └── 11-responsive.css    Vistas, adaptación móvil y accesibilidad
├── js/
│   ├── imagenes.js         Mapa clave → ruta de cada imagen (+ claves de campaña)
│   ├── utils.js            Funciones pequeñas de ayuda (incl. respaldo de imágenes)
│   ├── datos.js            Productos (con beneficios), gamas, tonos y familias
│   ├── componentes.js      Tarjeta de producto, gamas, destacados y selector de tono
│   ├── paneles.js          Aviso (toast) y menú móvil
│   ├── vistas.js           Cambio de página, gama y ficha de producto
│   ├── eventos.js          Clics globales y botones de la ficha
│   ├── busqueda.js         Buscador con sugerencias en vivo
│   ├── contacto.js         Formulario de contacto y su validación
│   ├── accesibilidad.js    Uso con teclado (Tab, Enter, Espacio)
│   ├── animaciones.js      Animación de entrada del hero (GSAP)
│   └── main.js             Arranque final
├── herramientas/
│   └── componer_escena.py  Compone una imagen de campaña (escena IA + envase real)
└── redscolor-imagenes/     Tu carpeta de imágenes, al lado de index.html
```

**Importante:** los CSS y scripts se cargan en el orden indicado en `index.html`. Mantén ese orden para conservar la cascada de estilos y las dependencias entre scripts.

## Áreas y navegación

La navegación tiene solo dos grandes áreas: `Coloración` y `Tratamientos` (más `Sobre nosotros`). No hay catálogo/tienda. RED'S XIL tiene una landing propia dentro de Tratamientos. Las cuatro gamas se definen en `js/datos.js` y sus imágenes en `js/imagenes.js`.

La sección editorial de las cuatro gamas se genera con `gamaCard` en `js/componentes.js` y se pinta en la home (`#home-gamas`) y en Coloración (`#color-gamas`).

Los textos de las gamas son una propuesta inicial: valida los beneficios y claims con las fichas técnicas antes de publicar. ARGAN y NATURE todavía no tienen productos asociados, por eso sus CTAs llevan a consulta de información.

## Información profesional

La web no tiene flujos de compra ni enlaces directos a la tienda. El enlace a Negredo Pro se limita a información de distribución profesional y se mantiene como recurso externo. Las fichas incluyen características, beneficios, tonos y un acceso al formulario de asesoramiento.

## Imágenes de campaña (IA + envase real)

Las imágenes actuales de campaña están en `nuevas-imagenes-ia/` y se usan en las tarjetas de gama:

- RED'S COLOR: `01-reds-color.jpg`.
- RED'S ARGAN: `02-reds-argan.jpg`.
- RED'S KERATIN: `03-reds-keratin.jpg`.
- RED'S NATURE: `04-reds-nature.jpg`.
- El banner usa una imagen de cabello distinta a las tarjetas para evitar repetir la misma composición.
- La carpeta actual solo incluye dos retratos de cabello para la sección de resultados; hacen falta dos imágenes más para mostrar cuatro resultados distintos.
- Las claves y rutas se mantienen centralizadas en `js/imagenes.js`; las gamas se conectan desde `js/datos.js`.

Los prompts y las instrucciones para nuevas imágenes están en `redscolor-imagenes/imagenes/campana/PROMPTS.md`.

- `herramientas/componer_escena.py` compone una escena IA con el envase real por encima (recórtalo para dejar el hueco donde va el envase). Ajusta el prompt y las rutas dentro del archivo.

## Qué hace cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Textos, secciones, orden de la home | `index.html` (cada sección tiene un comentario con su nombre) |
| Colores de marca y estilos base | `css/01-foundation.css` |
| Cabecera y navegación | `css/02-header.css` |
| Hero y secciones de la portada | `css/03-hero.css` y `css/04-home.css` |
| Tarjetas y ficha de producto | `css/05-product-cards.css` a `css/08-product.css` |
| Sobre nosotros, menú móvil, footer y contacto | `css/06-company.css` y `css/09-overlays.css` a `css/10-footer-contact.css` |
| Adaptación a tablet, móvil y accesibilidad | `css/11-responsive.css` |
| Nombres, descripciones, beneficios, fotos de productos | `js/datos.js` (lista `P`) |
| Gamas y su imagen | `js/datos.js` (`GAMAS`) y `js/imagenes.js` |
| Tonos de la carta de color | `js/datos.js` (objetos `FAM` y `TONES`) |
| La ruta de una imagen | `js/imagenes.js` |
| Cómo funciona el buscador | `js/busqueda.js` |
| Validación del formulario | `js/contacto.js` |

## Imágenes

`js/imagenes.js` asocia un nombre corto con la ruta real del archivo, por ejemplo:

```js
"caviar2": "redscolor-imagenes/imagenes/coloracion/caviar2.jpg"
```

En `index.html` y en `datos.js` solo se usa el nombre corto (`"caviar2"`). Si una foto aparece cambiada, corrige la ruta en `imagenes.js` y se arregla en toda la web. Las rutas son relativas a `index.html`, así que `redscolor-imagenes/` debe estar en la misma carpeta.

Si falta una imagen, se oculta sola (clase `is-missing`) y, si tiene un `data-fallback`, se usa la imagen de respaldo.

## Cómo verlo

Abre `index.html` en el navegador (doble clic). Necesita internet para cargar GSAP y la tipografía Montserrat.

## Datos de ejemplo (sustituir por los reales)

Cifras de "Sobre nosotros", teléfono, email, horario y textos de ejemplo. El formulario de contacto solo simula el envío: para enviarlo de verdad hay que conectarlo a un servicio o a PHP.
