# RED'S COLOR — Web (rediseño)

Web estática hecha con HTML, CSS y JavaScript puro, más GSAP para las animaciones (se carga desde internet, no hay que instalar nada).

## Estructura de carpetas

```
reds-color-clean/
├── index.html              Estructura de la web (todas las páginas y secciones)
├── css/
│   ├── 01-foundation.css    Variables, estilos base y componentes generales
│   ├── 02-header.css        Barra superior, navegación y buscador
│   ├── 03-hero.css          Hero de la portada
│   ├── 04-home.css          Secciones de inicio y selector de tonos
│   ├── 05-product-cards.css Tarjetas y rejillas de productos
│   ├── 06-company.css       Bloques de marca, resultados y sobre nosotros
│   ├── 07-category.css      Listado y filtros de categorías
│   ├── 08-product.css       Ficha de producto
│   ├── 09-cart.css          Carrito, menú móvil y avisos
│   ├── 10-footer-contact.css Footer y formulario de contacto
│   └── 11-responsive.css    Vistas, adaptación móvil y accesibilidad
├── js/
│   ├── imagenes.js         Mapa clave → ruta de cada imagen
│   ├── utils.js            Funciones pequeñas de ayuda
│   ├── datos.js            Productos, tonos y familias de color
│   ├── componentes.js      Tarjeta de producto, destacados y selector de tono
│   ├── carrito.js          Cesta, aviso (toast), cajón del carrito y menú móvil
│   ├── vistas.js           Cambio de página, categoría, ficha de producto
│   ├── eventos.js          Clics globales y botones de la ficha y del carrito
│   ├── busqueda.js         Buscador con sugerencias en vivo
│   ├── contacto.js         Formulario de contacto y su validación
│   ├── accesibilidad.js    Uso con teclado (Tab, Enter, Espacio)
│   ├── animaciones.js      Animación de entrada del hero (GSAP)
│   └── main.js             Arranque final
└── redscolor-imagenes/     (tu carpeta de imágenes, al lado de index.html)
```

**Importante:** los CSS y scripts se cargan en el orden indicado en `index.html`. Mantén ese orden para conservar la cascada de estilos y las dependencias entre scripts.

## Qué hace cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Textos, secciones, orden de la home | `index.html` (cada sección tiene un comentario con su nombre) |
| Colores de marca y estilos base | `css/01-foundation.css` |
| Cabecera y navegación | `css/02-header.css` |
| Hero y secciones de la portada | `css/03-hero.css` y `css/04-home.css` |
| Tarjetas, categorías y ficha de producto | `css/05-product-cards.css` a `css/08-product.css` |
| Sobre nosotros, carrito, footer y contacto | `css/06-company.css` y `css/09-cart.css` a `css/10-footer-contact.css` |
| Adaptación a tablet, móvil y accesibilidad | `css/11-responsive.css` |
| Nombres, precios, descripciones, fotos de productos | `js/datos.js` (lista `P`) |
| Tonos de la carta de color | `js/datos.js` (objeto `FAM`) |
| La ruta de una imagen | `js/imagenes.js` |
| Cómo funciona el carrito | `js/carrito.js` |
| Cómo funciona el buscador | `js/busqueda.js` |
| Validación del formulario | `js/contacto.js` |

## Imágenes

`js/imagenes.js` asocia un nombre corto con la ruta real del archivo, por ejemplo:

```js
"caviar2": "redscolor-imagenes/imagenes/coloracion/caviar2.jpg"
```

En `index.html` y en `datos.js` solo se usa el nombre corto (`"caviar2"`). Si una foto aparece cambiada, corrige la ruta en `imagenes.js` y se arregla en toda la web.

Las rutas son relativas a `index.html`, así que `redscolor-imagenes/` debe estar en la misma carpeta.

## Cómo verlo

Abre `index.html` en el navegador (doble clic). Necesita internet para cargar GSAP y la tipografía Montserrat.

## Datos de ejemplo (sustituir por los reales)

Precios de los productos, opiniones, cifras de "Sobre nosotros", teléfono, email, horario y textos lorem ipsum. El formulario de contacto solo simula el envío: para enviarlo de verdad hay que conectarlo a un servicio o a PHP.
