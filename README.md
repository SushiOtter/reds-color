# RED'S COLOR — estructura reorganizada

Se ha reorganizado el proyecto original manteniendo su funcionamiento SPA y sus estilos/animaciones.

## Estructura

- `index.html` — estructura HTML y vistas de Inicio, Tienda, Producto y Sobre nosotros.
- `css/` — estilos separados por responsabilidad.
- `js/` — lógica separada por responsabilidad.
- `images/` — preparada para las imágenes del proyecto.

## Orden de carga JS

1. `01-core.js`
2. `02-cart.js`
3. `03-views.js`
4. `04-product.js`
5. `05-interactions.js`
6. `06-search.js`
7. `07-animations-form.js`

Los archivos de GSAP y ScrollTrigger siguen cargándose desde CDN.
