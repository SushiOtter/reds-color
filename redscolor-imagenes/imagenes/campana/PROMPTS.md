# IMÁGENES DE CAMPAÑA (IA) — RED'S COLOR

Esta carpeta guarda las imágenes de campaña que sustituyen a los huecos de la web.
La web ya está preparada: mientras un archivo no exista, se muestra un hueco con texto
y las tarjetas de gama usan su imagen de respaldo. En cuanto pongas el archivo con el
nombre correcto, aparece automáticamente.

---

## Cómo conseguir un resultado real (envase original, escena IA)

La idea es **no redibujar los envases**: se genera solo la ESCENA con IA y luego se pega
el envase real (PNG/JPG) encima con el script `herramientas/componer_escena.py`.
Así los logos y el diseño del producto quedan intactos.

Requisitos: `pip install pillow`

Uso básico:

```
python herramientas/componer_escena.py escena.jpg envase.png salida.jpg
```

Opciones: `--altura 0.6` (alto del envase respecto a la escena), `--x 0.5` (posición
horizontal), `--base 0.9` (posición de la base), `--ratio 4:3`.

Para poner **varios envases** en la misma escena, encadena el script usando la salida
como nueva escena:

```
python herramientas/componer_escena.py escena.jpg envaseA.png paso1.jpg --x 0.35
python herramientas/componer_escena.py paso1.jpg  envaseB.png paso2.jpg --x 0.65
```

---

## Clave de los prompts

- **Nada de texto, logotipos, etiquetas ni envases** en la imagen generada. Solo escena,
  luz, fondo y atrezo. El producto real se añade después.
- Paleta de marca: **negro, rojo (#e30613) y blanco**, con acentos metálicos.
- Estilo editorial/profesional de peluquería, luz cinematográfica, fondo limpio con
  espacio libre donde irá el envase.

---

## 1. `campana-gamas.jpg` — Banner de las 4 gamas (proporción 16:7)

> Professional hair-colour brand campaign background. Dark editorial studio, matte black
> surface with a subtle crimson gradient, soft smoky haze and elegant rim lighting.
> A wide reflective plinth across the lower third, generous empty space in the centre,
> shallow depth of field, cinematic colour grading, high-end cosmetic advertising look.
> No text, no logos, no products, no packaging, no people.

Luego compón los cuatro envases encima (uno a uno o encadenando el script).

---

## 2. `campana-color.jpg` — Gama RED'S COLOR (proporción 4:3)

> Dark red and black cosmetic studio scene, glossy black surface with red glow and soft
> haze, dramatic side light, empty central space for a product, editorial beauty campaign
> photography. No text, no logos, no products, no people.

## 3. `campana-argan.jpg` — Gama RED'S ARGAN (proporción 4:3)

> Warm luxurious studio scene, black background with golden amber light, drops of argan
> oil and a soft silk texture, elegant side lighting, empty space for a product, premium
> hair-care campaign. No text, no logos, no products, no people.

## 4. `campana-keratin.jpg` — Gama RED'S KERATIN (proporción 4:3)

> Sleek professional studio scene, black and silver tones with a soft red accent, subtle
> protein/keratin texture, clean reflective surface, elegant light, empty space for a
> product, high-end salon campaign look. No text, no logos, no products, no people.

## 5. `campana-nature.jpg` — Gama RED'S NATURE (proporción 4:3)

> Natural-inspired premium scene, deep green and warm neutral tones with soft daylight,
> fresh botanical leaves slightly out of focus, stone surface, calm and clean, empty space
> for a product, natural cosmetics campaign. No text, no logos, no products, no people.

---

## Envases reales disponibles para componer

| Gama | Archivo del envase | Notas |
|---|---|---|
| RED'S COLOR | `redscolor-imagenes/imagenes/sobre-nosotros/caviar-sobrenosotros.png` | PNG con transparencia |
| RED'S ARGAN | `redscolor-imagenes/imagenes/Tubo Reds Argan Mockup.png` | PNG |
| RED'S KERATIN | — | pendiente: consigue un PNG del tubo |
| RED'S NATURE | — | pendiente: consigue un PNG del envase |

Si el envase es un JPG con fondo claro, el script recorta el fondo automáticamente.

---

## Usar las imágenes de gama (opcional)

Las tarjetas de gama usan por defecto las fotos actuales. Si quieres que usen las de
campaña, edita `js/datos.js` (lista `GAMAS`) y cambia la clave y el respaldo, por ejemplo:

```js
{ id: "color", nombre: "RED'S COLOR", imagen: "campana-color", fallback: "chica-rizada", tipoImagen: "modelo", ... }
```

Con `fallback` indicas la imagen que se usa si el archivo de campaña todavía no existe,
así nunca se rompe la vista.
