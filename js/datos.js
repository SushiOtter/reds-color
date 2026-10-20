/* DATOS: productos (P), gamas (GAMAS), familias de la carta de color (FAM) y tonos disponibles por gama (TONES).

   Es una web de marca: no hay precios ni compra. Edita aquí nombres, descripciones, beneficios (ben) e imágenes. */



const P = [{

    id: 1,

    n: "Tinte RED'S COLOR Caviar",

    l: "Coloración",

    area: "Coloración",

    gama: "color",

    tono: "6.0 · Rubio oscuro natural",


    im: ["caviar2", "caviar1", "caviar2-sm"],

    d: "Coloración con colorantes de última generación desarrollados por laboratorios americanos. Color intenso, uniforme y de larga duración.",

    ben: ["Colorantes de última generación desarrollados por laboratorios americanos", "Resultados de coloración profesional intensos y uniformes"]

  },

  {

    id: 2,

    n: "Tinte con queratina RED'S KERATIN",

    l: "Coloración",

    area: "Coloración",

    gama: "keratin",

    tono: "6.0",


    im: ["keratin2", "keratin1", "keratin2-sm"],

    d: "Coloración permanente enriquecida con proteínas de keratina y aceite de algodón para cuidar la fibra mientras colorea.",

    ben: ["Proteínas de keratina para fortalecer todo tipo de cabello", "Aceite de algodón para cuidar la melena", "Coloración profesional permanente"]

  },

  {

    id: 3,

    n: "Decoloración RED'S COLOR",

    l: "Oxidantes",

    area: "Coloración",


    im: ["bleach4", "bleach3", "bleach1"],

    d: "Decolorante de nueva tecnología: inodoro, no volátil y con bajo contenido amoniacal para un aclarado controlado.",

    ben: ["Tecnología nueva: inodora y no volátil", "Más agradable para las vías respiratorias", "Bajo contenido amoniacal"]

  },

  {

    id: 4,

    n: "Pack Anticaída Red's Xil",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["pack-anticaida2-sm", "pack-anticaida1", "pack-anticaida3-xl"],

    d: "Tratamiento caída 2ª fase + champú: un ritual completo para reforzar el cabello y reducir la caída.",

    ben: ["Incluye Tratamiento Caída 2ª fase + Shampoo Caída", "Favorece la oxigenación y la actividad metabólica", "Actúa de forma selectiva sobre las células con bajo nivel de proteínas"]

  },

  {

    id: 5,

    n: "Ampollas anticaída 1ª fase RED'S XIL",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["xil-ampollas-fase1", "ampolla-fase1-sm", "ampolla-fase2"],

    d: "Tratamiento preventivo y de mantenimiento para todos los tipos de caída.",

    ben: ["Tratamiento preventivo y de mantenimiento", "Indicado para todos los tipos de caída del cabello", "Primera fase del ritual RED'S XIL"]

  },

  {

    id: 6,

    n: "Oxidante en crema RED'S COLOR 20 vol",

    l: "Oxidantes",

    area: "Coloración",


    im: ["oxidante1000", "oxidante20", "oxidante20-1-sm"],

    d: "Base cosmética con emolientes y polímero filmógeno que protegen el cabello y el cuero cabelludo.",

    ben: ["Base cosmética enriquecida con emolientes y suavizantes", "Polímero filmógeno que protege cabello y cuero cabelludo", "Trato más suave y sedoso"]

  },

  {

    id: 7,

    n: "Champú nutriente anticaspa RED'S XIL",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["xil-nutriente-300", "caspa", "caspa1"],

    d: "Champú de uso frecuente para caspa seca y grasa. Regula el cuero cabelludo, calma el picor y nutre con extracto de caviar.",

    ben: ["Para caspa seca y grasa", "Regula el cuero cabelludo y calma el picor", "Nutre con extracto de caviar"]

  },

  {

    id: 8,

    n: "Champú anticaída RED'S XIL",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["xil-shampoo-300"],

    d: "Champú con extracto de caviar y aceites esenciales para el cabello débil.",

    ben: ["Con extracto de caviar y aceites esenciales", "Pensado para cabello débil"]

  },

  {

    id: 9,

    n: "Oxidante en crema RED'S COLOR 10 vol",

    l: "Oxidantes",

    area: "Coloración",


    im: ["oxidante10", "oxidante10-1-sm"],

    d: "Oxidante en crema de uso profesional.",

    ben: ["Oxidante en crema de uso profesional", "10 volúmenes"]

  },

  {

    id: 10,

    n: "Oxidante en crema RED'S COLOR 40 vol",

    l: "Oxidantes",

    area: "Coloración",


    im: ["oxidante40", "oxidante40-1-sm"],

    d: "Oxidante en crema de uso profesional.",

    ben: ["Oxidante en crema de uso profesional", "40 volúmenes"]

  },

  {

    id: 11,

    n: "RED'S XIL Shock Fase 1",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["xil-shock-fase1", "gotero-fase1-sm", "gotero1"],

    d: "Tratamiento estimulador de la primera fase, preventivo y de mantenimiento para todo tipo de caída.",

    ben: ["Tratamiento preventivo y de mantenimiento", "Indicado para todo tipo de caída", "Primera fase del ritual RED'S XIL"]

  },

  {

    id: 12,

    n: "RED'S XIL FTI Fase 2",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["xil-fti-fase2", "gotero-fase2-sm", "ampolla-fase2-sm"],

    d: "Tratamiento estimulador capilar para la segunda fase del ritual anticaída.",

    ben: ["Tratamiento estimulador capilar", "Segunda fase del ritual RED'S XIL"]

  },

  {

    id: 13,

    n: "Champú anticaída RED'S XIL",

    l: "Tratamientos",

    area: "Tratamientos",

    gama: "xil",


    im: ["xil-shampoo-1000"],

    d: "Formato profesional con extracto de caviar y aceites esenciales para la rutina anticaída.",

    ben: ["Con extracto de caviar y aceites esenciales", "Uso profesional para la rutina anticaída"]

  }

];

const GAMAS = [

  {

    id: "color",

    nombre: "RED'S COLOR",

    subtitulo: "Coloración profesional",

    descripcion: "La línea principal de RED'S COLOR. Coloración intensa, uniforme y de larga duración con colorantes de última generación.",

    escena: "campana-color",  // activa la imagen de campaña IA (si no existe, usa "imagen" como respaldo)

    imagen: "chica-rizada",

    producto: "caviar-sobrenosotros-sm",

    tipoImagen: "modelo",

    productos: [1]

  },

  {

    id: "argan",

    nombre: "RED'S ARGAN",

    subtitulo: "Color + nutrición",

    descripcion: "Coloración enriquecida con aceite de argán para aportar nutrición y suavidad al cabello durante y después del color.",

    escena: "campana-argan",

    imagen: "argan-mockup",

    tipoImagen: "producto",

    productos: []

  },

  {

    id: "keratin",

    nombre: "RED'S KERATIN",

    subtitulo: "Color + cuidado",

    descripcion: "Coloración con proteínas de queratina y aceite de algodón para cuidar la fibra capilar mientras se colorea.",

    escena: "campana-keratin",

    imagen: "chica-lisa",

    producto: "keratin2-sm",

    tipoImagen: "modelo",

    productos: [2]

  },

  {

    id: "nature",

    nombre: "RED'S NATURE",

    subtitulo: "Coloración de inspiración natural",

    descripcion: "Una coloración de inspiración natural, para quienes buscan un enfoque más respetuoso dentro de la familia RED'S COLOR.",

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

/* Tonos disponibles por gama para la carta de color. */
const TONES = {
  color: [
    "6.0", "7.0", "8.0", "9.0",
    "6.1", "7.1", "8.1", "9.1",
    "6.3", "7.3", "8.3", "9.3",
    "6.4", "7.4", "6.66", "7.66"
  ],
  keratin: [
    "6.0", "7.0", "8.0", "9.0",
    "6.1", "7.1", "8.1",
    "6.3", "7.3", "8.3", "9.3",
    "6.4", "7.4", "6.34", "7.34", "8.34",
    "6.66", "4.67", "5.67"
  ]
};

let SH = [];
