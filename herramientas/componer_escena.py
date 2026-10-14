#!/usr/bin/env python3
"""
Compone una imagen de campaña: ESCENA (generada con IA, sin producto) + ENVASE REAL.

El envase se pega tal cual (sin redibujarlo ni retocarlo): solo se recorta el fondo,
se escala y se le añade sombra de contacto. Así logos y diseño quedan intactos.

Uso:
  python3 herramientas/componer_escena.py escena.jpg envase.png salida.jpg
  python3 herramientas/componer_escena.py escena.jpg envase.jpg salida.jpg --altura 0.62 --x 0.5

  --altura  alto del envase respecto al alto de la escena (0-1, por defecto 0.6)
  --x       posición horizontal del centro del envase (0-1, por defecto 0.5)
  --base    posición vertical de la base del envase (0-1, por defecto 0.9)
  --ratio   recorte final, por defecto 4:3 (el que usan las tarjetas de gama)

Requisitos: pip install pillow
Si el envase es un JPG con fondo claro (blanco o gris muy claro), se recorta solo.
Si es un PNG con transparencia, se usa directamente.
"""
import argparse
from collections import deque
from PIL import Image, ImageFilter, ImageChops


def quitar_fondo_claro(im, tolerancia=28):
    """Recorta un fondo claro y uniforme conectado a los bordes (flood fill)."""
    rgb = im.convert("RGB")
    w, h = rgb.size
    px = rgb.load()
    ref = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    ref = tuple(sum(c[i] for c in ref) // 4 for i in range(3))
    cerca = lambda p: all(abs(p[i] - ref[i]) <= tolerancia for i in range(3))
    visto = bytearray(w * h)
    q = deque()
    for x in range(w):
        q.append((x, 0)); q.append((x, h - 1))
    for y in range(h):
        q.append((0, y)); q.append((w - 1, y))
    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or visto[y * w + x]:
            continue
        if not cerca(px[x, y]):
            continue
        visto[y * w + x] = 1
        q.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))
    mask = Image.frombytes("L", (w, h), bytes(0 if v else 255 for v in visto))
    mask = mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))  # borde limpio
    out = rgb.convert("RGBA")
    out.putalpha(mask)
    return out


def cargar_envase(ruta):
    im = Image.open(ruta)
    if im.mode == "RGBA" and im.getchannel("A").getextrema()[0] < 255:
        env = im
    else:
        env = quitar_fondo_claro(im)
    return env.crop(env.getchannel("A").getbbox())


def recortar_ratio(im, rw, rh):
    w, h = im.size
    objetivo = rw / rh
    if w / h > objetivo:
        nw = int(h * objetivo); x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = int(w / objetivo); y = (h - nh) // 2
    return im.crop((0, y, w, y + nh))


def componer(escena, envase, altura, x, base):
    esc = escena.convert("RGBA")
    W, H = esc.size
    eh = int(H * altura)
    ew = int(envase.width * eh / envase.height)
    env = envase.resize((ew, eh), Image.LANCZOS)
    px = int(W * x - ew / 2)
    py = int(H * base - eh)

    # sombra de contacto: elipse difuminada bajo la base
    sombra = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ell = Image.new("L", (W, H), 0)
    from PIL import ImageDraw
    d = ImageDraw.Draw(ell)
    cx, cy = px + ew // 2, py + eh
    d.ellipse((cx - ew * 0.75, cy - eh * 0.035, cx + ew * 0.75, cy + eh * 0.045), fill=170)
    ell = ell.filter(ImageFilter.GaussianBlur(max(6, eh // 40)))
    sombra.putalpha(ell)
    esc = Image.alpha_composite(esc, sombra)

    # sombra proyectada suave del propio envase
    silueta = Image.new("L", (W, H), 0)
    silueta.paste(env.getchannel("A"), (px + int(ew * 0.06), py + int(eh * 0.02)))
    silueta = silueta.filter(ImageFilter.GaussianBlur(max(8, eh // 30))).point(lambda v: int(v * 0.35))
    capa = Image.new("RGBA", (W, H), (0, 0, 0, 0)); capa.putalpha(silueta)
    esc = Image.alpha_composite(esc, capa)

    # envase real, sin modificar
    capa = Image.new("RGBA", (W, H), (0, 0, 0, 0)); capa.paste(env, (px, py), env)
    return Image.alpha_composite(esc, capa).convert("RGB")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("escena"); ap.add_argument("envase"); ap.add_argument("salida")
    ap.add_argument("--altura", type=float, default=0.6)
    ap.add_argument("--x", type=float, default=0.5)
    ap.add_argument("--base", type=float, default=0.9)
    ap.add_argument("--ratio", default="4:3")
    a = ap.parse_args()
    rw, rh = (float(n) for n in a.ratio.split(":"))
    esc = recortar_ratio(Image.open(a.escena), rw, rh)
    out = componer(esc, cargar_envase(a.envase), a.altura, a.x, a.base)
    out.save(a.salida, quality=90)
    print("OK ->", a.salida, out.size)
