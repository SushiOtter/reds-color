/* DATOS: productos (P), tonos de la ficha (SH) y familias de la carta de color (FAM). Edita aquí nombres, precios e imágenes. */

const P = [{
    id: 1,
    n: "Tinte RED'S COLOR Caviar 100 ml",
    l: "Coloración",
    area: "Coloración",
    gama: "color",
    tono: "6.0 · Rubio oscuro natural",
    p: 10.95,
    url: "https://negredopro.com/tinte-reds-color-caviar-100ml-6",
    im: ["caviar2", "caviar1", "caviar2-sm"],
    d: "Coloración con colorantes de última generación desarrollados por laboratorios americanos."
  },
  {
    id: 2,
    n: "Tinte con queratina RED'S KERATIN 60 ml",
    l: "Coloración",
    area: "Coloración",
    gama: "keratin",
    tono: "6.0",
    p: 12.5,
    url: "https://negredopro.com/tinte-con-queratina-reds-keratin-60-60ml",
    im: ["keratin2", "keratin1", "keratin2-sm"],
    d: "Coloración permanente con proteínas de keratina y aceite de algodón."
  },
  {
    id: 3,
    n: "Decoloración RED'S COLOR 500 g",
    l: "Oxidantes",
    area: "Coloración",
    p: 36.9,
    url: "https://negredopro.com/decoloracion-reds-color-500g",
    im: ["bleach4", "bleach3", "bleach1"],
    d: "Decolorante de nueva tecnología, inodoro y con bajo contenido amoniacal."
  },
  {
    id: 4,
    n: "Pack Anticaída Red's Xil",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 34.5,
    url: "https://negredopro.com/pack-anticaida-reds-xil",
    im: ["pack-anticaida2-sm", "pack-anticaida1", "pack-anticaida3-xl"],
    d: "Tratamiento caída 2ª fase + shampoo caída."
  },
  {
    id: 5,
    n: "Ampollas anticaída 1ª fase RED'S XIL",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 34.5,
    url: "https://negredopro.com/ampollas-anticaida-1-fase-reds-xil",
    im: ["xil-ampollas-fase1", "ampolla-fase1-sm", "ampolla-fase2"],
    d: "Tratamiento preventivo y de mantenimiento para todos los tipos de caída."
  },
  {
    id: 6,
    n: "Oxidante en crema RED'S COLOR 20 vol 1000 ml",
    l: "Oxidantes",
    area: "Coloración",
    p: 9.95,
    url: "https://negredopro.com/oxidante-en-crema-reds-color-20-vol-1000ml",
    im: ["oxidante1000", "oxidante20", "oxidante20-1-sm"],
    d: "Base cosmética con emolientes y polímero filmógeno que protegen el cabello y el cuero cabelludo."
  },
  {
    id: 7,
    n: "Champú nutriente anticaspa RED'S XIL 300 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 9.9,
    url: "https://negredopro.com/champu-nutriente-reds-xil-300ml",
    im: ["xil-nutriente-300", "caspa", "caspa1"],
    d: "Champú de uso frecuente para caspa seca y grasa. Regula el cuero cabelludo, calma el picor y nutre con extracto de caviar."
  },
  {
    id: 8,
    n: "Champú anticaída RED'S XIL 300 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 9.9,
    url: "https://negredopro.com/champu-anticaida-reds-xil-300ml",
    im: ["xil-shampoo-300"],
    d: "Champú con extracto de caviar y aceites esenciales para cabello débil."
  },
  {
    id: 9,
    n: "Oxidante en crema RED'S COLOR 10 vol 150 ml",
    l: "Oxidantes",
    area: "Coloración",
    p: 3.99,
    url: "https://negredopro.com/oxidante-en-crema-reds-color-10-vol-150ml",
    im: ["oxidante10", "oxidante10-1-sm"],
    d: "Oxidante en crema de uso profesional."
  },
  {
    id: 10,
    n: "Oxidante en crema RED'S COLOR 40 vol 150 ml",
    l: "Oxidantes",
    area: "Coloración",
    p: 3.99,
    url: "https://negredopro.com/oxidante-en-crema-reds-color-40-vol-150ml",
    im: ["oxidante40", "oxidante40-1-sm"],
    d: "Oxidante en crema de uso profesional."
  },
  {
    id: 11,
    n: "RED'S XIL Shock Fase 1 60 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 34.5,
    url: "https://negredopro.com/tratamiento-estimulador-capilar-1-fase-shock-reds-xil-60ml",
    im: ["xil-shock-fase1", "gotero-fase1-sm", "gotero1"],
    d: "Tratamiento preventivo y de mantenimiento para todo tipo de caída."
  },
  {
    id: 12,
    n: "RED'S XIL FTI Fase 2 60 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 34.5,
    url: "https://negredopro.com/tratamiento-estimulador-capilar-2-fase-fti-reds-xil-60ml",
    im: ["xil-fti-fase2", "gotero-fase2-sm", "ampolla-fase2-sm"],
    d: "Tratamiento estimulador capilar para la segunda fase."
  },
  {
    id: 13,
    n: "Champú anticaída RED'S XIL 1000 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    p: 19.9,
    url: "https://negredopro.com/champu-anticaida-reds-xil-1000ml",
    im: ["xil-shampoo-1000"],
    d: "Champú profesional con extracto de caviar y aceites esenciales para la rutina anticaída."
  }
];
const GAMAS = [
  {
    id: "color",
    nombre: "RED'S COLOR",
    subtitulo: "Coloración profesional",
    descripcion: "La línea principal de coloración de RED'S COLOR, pensada para conseguir un color intenso, uniforme y profesional.",
    imagen: "chica-rizada",
    producto: "caviar-sobrenosotros-sm",
    tipoImagen: "modelo",
    productos: [1]
  },
  {
    id: "argan",
    nombre: "RED'S ARGAN",
    subtitulo: "Color + nutrición",
    descripcion: "Coloración enriquecida con aceite de argán para aportar cuidado y suavidad al cabello.",
    imagen: "argan-mockup",
    tipoImagen: "producto",
    productos: []
  },
  {
    id: "keratin",
    nombre: "RED'S KERATIN",
    subtitulo: "Color + cuidado",
    descripcion: "Coloración con queratina para ayudar a cuidar la fibra capilar durante el proceso de coloración.",
    imagen: "chica-lisa",
    producto: "keratin2-sm",
    tipoImagen: "modelo",
    productos: [2]
  },
  {
    id: "nature",
    nombre: "RED'S NATURE",
    subtitulo: "Coloración de inspiración natural",
    descripcion: "Una alternativa dentro de la gama RED'S COLOR para quienes buscan una coloración con un enfoque más natural.",
    imagen: "nature",
    tipoImagen: "producto",
    productos: []
  }
];
const FAM = {
  Naturales: [
    ["6.0", "#7b5a3a"], ["7.0", "#a07a4c"], ["8.0", "#c09c66"], ["9.0", "#d8bd8c"]
  ],
  Cenizas: [
    ["6.1", "#8c847d"], ["7.1", "#a79f98"], ["8.1", "#c5bdb5"], ["9.1", "#d8d1ca"]
  ],
  Dorados: [
    ["6.3", "#93724b"], ["7.3", "#ae8a53"], ["8.3", "#c8a66c"], ["9.3", "#e0c690"]
  ],
  Cobrizos: [
    ["6.4", "#8a4421"],
    ["7.4", "#a8532a"]
  ],
  Rojos: [
    ["5.66", "#6e0f1a"],
    ["6.66", "#9c1428"],
    ["7.66", "#c01a2c"]
  ],
  Violetas: [
    ["4.67", "#60435f"], ["5.67", "#79566f"], ["6.66", "#9c1428"]
  ],
  Mixtos: [
    ["6.34", "#b8784c"], ["7.34", "#ca965e"], ["8.34", "#dfb779"]
  ]
};
const TONE_URLS = {
  color: {
    "6.0": "https://negredopro.com/tinte-reds-color-caviar-100ml-6",
    "7.0": "https://negredopro.com/tinte-reds-color-caviar-100ml-7",
    "8.0": "https://negredopro.com/tinte-reds-color-caviar-100ml-8",
    "9.0": "https://negredopro.com/tinte-reds-color-caviar-100ml-9",
    "6.1": "https://negredopro.com/tinte-reds-color-caviar-100ml-61",
    "7.1": "https://negredopro.com/tinte-reds-color-caviar-100ml-71",
    "8.1": "https://negredopro.com/tinte-reds-color-caviar-100ml-81",
    "9.1": "https://negredopro.com/tinte-reds-color-caviar-100ml-91",
    "6.3": "https://negredopro.com/tinte-reds-color-caviar-100ml-63",
    "7.3": "https://negredopro.com/tinte-reds-color-caviar-100ml-73",
    "8.3": "https://negredopro.com/tinte-reds-color-caviar-100ml-83",
    "9.3": "https://negredopro.com/tinte-reds-color-caviar-100ml-93",
    "6.4": "https://negredopro.com/tinte-reds-color-caviar-100ml-64",
    "7.4": "https://negredopro.com/tinte-reds-color-caviar-100ml-74",
    "6.66": "https://negredopro.com/tinte-reds-color-caviar-100ml-666",
    "7.66": "https://negredopro.com/tinte-reds-color-caviar-100ml-766"
  },
  keratin: {
    "6.0": "https://negredopro.com/tinte-con-queratina-reds-keratin-60-60ml",
    "7.0": "https://negredopro.com/tinte-con-queratina-reds-keratin-70-60ml",
    "8.0": "https://negredopro.com/tinte-con-queratina-reds-keratin-80-60ml",
    "9.0": "https://negredopro.com/tinte-con-queratina-reds-keratin-90-60ml",
    "6.1": "https://negredopro.com/tinte-con-queratina-reds-keratin-61-60ml",
    "7.1": "https://negredopro.com/tinte-con-queratina-reds-keratin-71-60ml",
    "8.1": "https://negredopro.com/tinte-con-queratina-reds-keratin-81-60ml",
    "6.3": "https://negredopro.com/tinte-con-queratina-reds-keratin-63-60ml",
    "7.3": "https://negredopro.com/tinte-con-queratina-reds-keratin-73-60ml",
    "8.3": "https://negredopro.com/tinte-con-queratina-reds-keratin-83-60ml",
    "9.3": "https://negredopro.com/tinte-con-queratina-reds-keratin-93-60ml",
    "6.4": "https://negredopro.com/tinte-con-queratina-reds-keratin-64-60ml",
    "7.4": "https://negredopro.com/tinte-con-queratina-reds-keratin-74-60ml",
    "6.34": "https://negredopro.com/tinte-con-queratina-reds-keratin-634-60ml",
    "7.34": "https://negredopro.com/tinte-con-queratina-reds-keratin-734-60ml",
    "8.34": "https://negredopro.com/tinte-con-queratina-reds-keratin-834-60ml",
    "6.66": "https://negredopro.com/tinte-con-queratina-reds-keratin-666-60ml",
    "4.67": "https://negredopro.com/tinte-con-queratina-reds-keratin-467-60ml",
    "5.67": "https://negredopro.com/tinte-con-queratina-reds-keratin-567-60ml"
  }
};
let SH = [];
