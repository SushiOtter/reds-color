/* DATOS: productos (P), gamas (GAMAS), familias de la carta de color (FAM) y tonos disponibles por gama (TONE_URLS).
   Es una web de marca: no hay precios ni compra. Edita aquÃ­ nombres, descripciones, beneficios (ben) e imÃ¡genes. */

const P = [{
    id: 1,
    n: "Tinte RED'S COLOR Caviar 100 ml",
    l: "ColoraciÃ³n",
    area: "ColoraciÃ³n",
    gama: "color",
    tono: "6.0 Â· Rubio oscuro natural",
    url: "https://negredopro.com/tinte-reds-color-caviar-100ml-6",
    im: ["caviar2", "caviar1", "caviar2-sm"],
    d: "ColoraciÃ³n con colorantes de Ãºltima generaciÃ³n desarrollados por laboratorios americanos. Color intenso, uniforme y de larga duraciÃ³n.",
    ben: ["Colorantes de Ãºltima generaciÃ³n desarrollados por laboratorios americanos", "Resultados de coloraciÃ³n profesional intensos y uniformes", "Formato de 100 ml"]
  },
  {
    id: 2,
    n: "Tinte con queratina RED'S KERATIN 60 ml",
    l: "ColoraciÃ³n",
    area: "ColoraciÃ³n",
    gama: "keratin",
    tono: "6.0",
    url: "https://negredopro.com/tinte-con-queratina-reds-keratin-60-60ml",
    im: ["keratin2", "keratin1", "keratin2-sm"],
    d: "ColoraciÃ³n permanente enriquecida con proteÃ­nas de keratina y aceite de algodÃ³n para cuidar la fibra mientras colorea.",
    ben: ["ProteÃ­nas de keratina para fortalecer todo tipo de cabello", "Aceite de algodÃ³n para cuidar la melena", "ColoraciÃ³n profesional permanente Â· 60 ml"]
  },
  {
    id: 3,
    n: "DecoloraciÃ³n RED'S COLOR 500 g",
    l: "Oxidantes",
    area: "ColoraciÃ³n",
    url: "https://negredopro.com/decoloracion-reds-color-500g",
    im: ["bleach4", "bleach3", "bleach1"],
    d: "Decolorante de nueva tecnologÃ­a: inodoro, no volÃ¡til y con bajo contenido amoniacal para un aclarado controlado.",
    ben: ["TecnologÃ­a nueva: inodora y no volÃ¡til", "MÃ¡s agradable para las vÃ­as respiratorias", "Bajo contenido amoniacal Â· 500 g"]
  },
  {
    id: 4,
    n: "Pack AnticaÃ­da Red's Xil",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/pack-anticaida-reds-xil",
    im: ["pack-anticaida2-sm", "pack-anticaida1", "pack-anticaida3-xl"],
    d: "Tratamiento caÃ­da 2Âª fase + champÃº: un ritual completo para reforzar el cabello y reducir la caÃ­da.",
    ben: ["Incluye Tratamiento CaÃ­da 2Âª fase + Shampoo CaÃ­da", "Favorece la oxigenaciÃ³n y la actividad metabÃ³lica", "ActÃºa de forma selectiva sobre las cÃ©lulas con bajo nivel de proteÃ­nas"]
  },
  {
    id: 5,
    n: "Ampollas anticaÃ­da 1Âª fase RED'S XIL",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/ampollas-anticaida-1-fase-reds-xil",
    im: ["xil-ampollas-fase1", "ampolla-fase1-sm", "ampolla-fase2"],
    d: "Tratamiento preventivo y de mantenimiento para todos los tipos de caÃ­da.",
    ben: ["Tratamiento preventivo y de mantenimiento", "Indicado para todos los tipos de caÃ­da del cabello", "Primera fase del ritual RED'S XIL"]
  },
  {
    id: 6,
    n: "Oxidante en crema RED'S COLOR 20 vol 1000 ml",
    l: "Oxidantes",
    area: "ColoraciÃ³n",
    url: "https://negredopro.com/oxidante-en-crema-reds-color-20-vol-1000ml",
    im: ["oxidante1000", "oxidante20", "oxidante20-1-sm"],
    d: "Base cosmÃ©tica con emolientes y polÃ­mero filmÃ³geno que protegen el cabello y el cuero cabelludo.",
    ben: ["Base cosmÃ©tica enriquecida con emolientes y suavizantes", "PolÃ­mero filmÃ³geno que protege cabello y cuero cabelludo", "Trato mÃ¡s suave y sedoso Â· 1000 ml"]
  },
  {
    id: 7,
    n: "ChampÃº nutriente anticaspa RED'S XIL 300 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/champu-nutriente-reds-xil-300ml",
    im: ["xil-nutriente-300", "caspa", "caspa1"],
    d: "ChampÃº de uso frecuente para caspa seca y grasa. Regula el cuero cabelludo, calma el picor y nutre con extracto de caviar.",
    ben: ["Para caspa seca y grasa", "Regula el cuero cabelludo y calma el picor", "Nutre con extracto de caviar Â· 300 ml"]
  },
  {
    id: 8,
    n: "ChampÃº anticaÃ­da RED'S XIL 300 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/champu-anticaida-reds-xil-300ml",
    im: ["xil-shampoo-300"],
    d: "ChampÃº con extracto de caviar y aceites esenciales para el cabello dÃ©bil.",
    ben: ["Con extracto de caviar y aceites esenciales", "Pensado para cabello dÃ©bil", "Formato de 300 ml"]
  },
  {
    id: 9,
    n: "Oxidante en crema RED'S COLOR 10 vol 150 ml",
    l: "Oxidantes",
    area: "ColoraciÃ³n",
    url: "https://negredopro.com/oxidante-en-crema-reds-color-10-vol-150ml",
    im: ["oxidante10", "oxidante10-1-sm"],
    d: "Oxidante en crema de uso profesional.",
    ben: ["Oxidante en crema de uso profesional", "10 volÃºmenes", "Formato de 150 ml"]
  },
  {
    id: 10,
    n: "Oxidante en crema RED'S COLOR 40 vol 150 ml",
    l: "Oxidantes",
    area: "ColoraciÃ³n",
    url: "https://negredopro.com/oxidante-en-crema-reds-color-40-vol-150ml",
    im: ["oxidante40", "oxidante40-1-sm"],
    d: "Oxidante en crema de uso profesional.",
    ben: ["Oxidante en crema de uso profesional", "40 volÃºmenes", "Formato de 150 ml"]
  },
  {
    id: 11,
    n: "RED'S XIL Shock Fase 1 60 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/tratamiento-estimulador-capilar-1-fase-shock-reds-xil-60ml",
    im: ["xil-shock-fase1", "gotero-fase1-sm", "gotero1"],
    d: "Tratamiento estimulador de la primera fase, preventivo y de mantenimiento para todo tipo de caÃ­da.",
    ben: ["Tratamiento preventivo y de mantenimiento", "Indicado para todo tipo de caÃ­da", "Primera fase del ritual RED'S XIL Â· 60 ml"]
  },
  {
    id: 12,
    n: "RED'S XIL FTI Fase 2 60 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/tratamiento-estimulador-capilar-2-fase-fti-reds-xil-60ml",
    im: ["xil-fti-fase2", "gotero-fase2-sm", "ampolla-fase2-sm"],
    d: "Tratamiento estimulador capilar para la segunda fase del ritual anticaÃ­da.",
    ben: ["Tratamiento estimulador capilar", "Segunda fase del ritual RED'S XIL", "Formato de 60 ml"]
  },
  {
    id: 13,
    n: "ChampÃº anticaÃ­da RED'S XIL 1000 ml",
    l: "Tratamientos",
    area: "Tratamientos",
    gama: "xil",
    url: "https://negredopro.com/champu-anticaida-reds-xil-1000ml",
    im: ["xil-shampoo-1000"],
    d: "Formato profesional con extracto de caviar y aceites esenciales para la rutina anticaÃ­da.",
    ben: ["Con extracto de caviar y aceites esenciales", "Uso profesional para la rutina anticaÃ­da", "Formato de 1000 ml"]
  }
];
const GAMAS = [
  {
    id: "color",
    nombre: "RED'S COLOR",
    subtitulo: "ColoraciÃ³n profesional",
    descripcion: "La lÃ­nea principal de RED'S COLOR. ColoraciÃ³n intensa, uniforme y de larga duraciÃ³n con colorantes de Ãºltima generaciÃ³n.",
    escena: "campana-color",  // activa la imagen de campaÃ±a IA (si no existe, usa "imagen" como respaldo)
    imagen: "chica-rizada",
    producto: "caviar-sobrenosotros-sm",
    tipoImagen: "modelo",
    productos: [1]
  },
  {
    id: "argan",
    nombre: "RED'S ARGAN",
    subtitulo: "Color + nutriciÃ³n",
    descripcion: "ColoraciÃ³n enriquecida con aceite de argÃ¡n para aportar nutriciÃ³n y suavidad al cabello durante y despuÃ©s del color.",
    escena: "campana-argan",
    imagen: "argan-mockup",
    tipoImagen: "producto",
    productos: []
  },
  {
    id: "keratin",
    nombre: "RED'S KERATIN",
    subtitulo: "Color + cuidado",
    descripcion: "ColoraciÃ³n con proteÃ­nas de queratina y aceite de algodÃ³n para cuidar la fibra capilar mientras se colorea.",
    escena: "campana-keratin",
    imagen: "chica-lisa",
    producto: "keratin2-sm",
    tipoImagen: "modelo",
    productos: [2]
  },
  {
    id: "nature",
    nombre: "RED'S NATURE",
    subtitulo: "ColoraciÃ³n de inspiraciÃ³n natural",
    descripcion: "Una coloraciÃ³n de inspiraciÃ³n natural, para quienes buscan un enfoque mÃ¡s respetuoso dentro de la familia RED'S COLOR.",
    escena: "campana-nature",
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
/* Tonos que existen en cada gama (solo se usa para saber quÃ© tonos mostrar; la web no vende). */
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
