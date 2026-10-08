/* DATOS: productos (P), tonos de la ficha (SH) y familias de la carta de color (FAM). Edita aquí nombres, precios e imágenes. */

const P = [{
    id: 1,
    n: "Tinte RED'S COLOR Caviar 100 ml",
    l: "Coloración",
    p: 6.9,
    b: "Nuevo",
    im: ["caviar2", "caviar1", "caviar2-sm"],
    d: "Coloración con colorantes de última generación desarrollados por laboratorios americanos."
  },
  {
    id: 2,
    n: "Tinte con queratina RED'S KERATIN 60 ml",
    l: "Coloración",
    p: 5.5,
    o: 6.5,
    b: "−15%",
    im: ["keratin2", "keratin1", "keratin2-sm"],
    d: "Coloración permanente con proteínas de keratina y aceite de algodón."
  },
  {
    id: 3,
    n: "Decoloración RED'S COLOR 500 g",
    l: "Oxidantes",
    p: 14.9,
    im: ["bleach4", "bleach3", "bleach1"],
    d: "Decolorante de nueva tecnología, inodoro y con bajo contenido amoniacal."
  },
  {
    id: 4,
    n: "Pack Anticaída Red's Xil",
    l: "Tratamientos",
    p: 29.9,
    o: 35.2,
    b: "Pack −15%",
    im: ["pack-anticaida2-sm", "pack-anticaida1", "pack-anticaida3-xl"],
    d: "Tratamiento caída 2ª fase + shampoo caída."
  },
  {
    id: 5,
    n: "Ampollas anticaída 1ª fase RED'S XIL",
    l: "Tratamientos",
    p: 19.5,
    b: "Top ventas",
    im: ["ampolla1", "ampolla-fase1-sm", "ampolla-fase2"],
    d: "Tratamiento preventivo y de mantenimiento para todos los tipos de caída."
  },
  {
    id: 6,
    n: "Oxidante en crema RED'S COLOR 20 vol 1000 ml",
    l: "Oxidantes",
    p: 7.9,
    im: ["oxidante1000", "oxidante20", "oxidante20-1-sm"],
    d: "Base cosmética con emolientes y polímero filmógeno que protegen el cabello y el cuero cabelludo."
  },
  {
    id: 7,
    n: "Shampoo anticaspa RED'S",
    l: "Tratamientos",
    p: 11.5,
    im: ["caspa", "caspa1", "caspa2"],
    d: "Combate la irritación y controla la aparición de escamas."
  },
  {
    id: 8,
    n: "Shampoo anticaída RED'S",
    l: "Tratamientos",
    p: 11.5,
    o: 13.5,
    b: "−15%",
    im: ["nutriente300", "nutriente1000", "composicion-shampoos-xl"],
    d: "Fortalece el cabello desde la raíz."
  },
  {
    id: 9,
    n: "Oxidante en crema RED'S COLOR 10 vol",
    l: "Oxidantes",
    p: 7.5,
    im: ["oxidante10", "oxidante10-1-sm"],
    d: "Oxidante en crema de uso profesional."
  },
  {
    id: 10,
    n: "Oxidante en crema RED'S COLOR 40 vol",
    l: "Oxidantes",
    p: 7.9,
    im: ["oxidante40", "oxidante40-1-sm"],
    d: "Oxidante en crema de uso profesional."
  },
  {
    id: 11,
    n: "Tratamiento caída 1ª fase RED'S XIL",
    l: "Tratamientos",
    p: 17.9,
    im: ["gotero-fase1", "gotero-fase1-sm", "gotero1"],
    d: "Tratamiento en gotero para la primera fase."
  },
  {
    id: 12,
    n: "Tratamiento caída 2ª fase RED'S XIL",
    l: "Tratamientos",
    p: 19.9,
    im: ["gotero-fase2-sm", "ampolla-fase2-sm"],
    d: "Tratamiento en gotero para la segunda fase."
  }
];
const SH = [
  ["Negro 1.0", "#161616"],
  ["Castaño 4.0", "#44301f"],
  ["Rubio 7.0", "#a07a4c"],
  ["Rubio claro 9.0", "#d8bd8c"],
  ["Cobrizo 7.4", "#a8532a"],
  ["Rojo 6.66", "#9c1428"],
  ["Chocolate 5.7", "#5a3a2a"],
  ["Ceniza 8.1", "#a79c92"]
];
const FAM = {
  Negros: [
    ["1.0", "#161616"],
    ["2.0", "#241f1d"]
  ],
  Castaños: [
    ["3.0", "#2e211b"],
    ["4.0", "#44301f"],
    ["5.0", "#5b3d28"]
  ],
  Rubios: [
    ["6.0", "#7b5a3a"],
    ["7.0", "#a07a4c"],
    ["8.0", "#c09c66"],
    ["9.0", "#d8bd8c"],
    ["10.0", "#ecd9b3"]
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
  Cenizas: [
    ["7.1", "#8c847d"],
    ["8.1", "#a79f98"],
    ["9.1", "#c5bdb5"]
  ]
};
