// Import local images
import robinsonMinorista from "./images/robinson-minorista.avif";
import robinsonMayorista from "./images/robinson-mayorista.avif";
import robinsonSchool from "./images/robinson-school.avif";
import robinsonExpedition from "./images/robinson-expediciones.avif";

export const PALETTE = {
  primario: "#2F5233",
  secundario: "#3A6B8A",
  acento: "#C25E2C",
  fondo: "#F4F1EA",
  texto: "#2D2D2D",
  destacado: "#7A9E7E",
};

export const carouselImages = [
  {
    src: robinsonMinorista,
    title: "Robinson minorista",
    description: "Todo lo que necesitas para tu próxima aventura.",
  },
  {
    src: robinsonMayorista,
    title: "Robinson mayorista",
    description: "Abastecemos negocios con ADN outdoor.",
  },
  {
    src: robinsonSchool,
    title: "Robinson Fishing School",
    description: "Aprendé, viví y pescá con nosotros.",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
    title: "Robinson Expediciones (futuro)",
    description:
      "Organizamos viajes y expediciones guiadas para vivir la naturaleza en su máxima expresión. Clínicas, experiencias y aventuras diseñadas para quienes buscan explorar, aprender y conectar con el entorno natural de manera segura y apasionante.",
  },
  // {
  //   url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
  //   title: "Robinson Expediciones (futuro)",
  //   description: "Viví la aventura Robinson en la naturaleza.",
  // },
  // {
  //   url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=400&fit=crop&crop=center",
  //   title: "Camping Aventura",
  //   description: "Todo lo necesario para tu próxima aventura",
  // },
  // {
  //   url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
  //   title: "Pesca Deportiva",
  //   description: "Cañas y accesorios de alta calidad",
  // },
  // {
  //   url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=400&fit=crop&crop=center",
  //   title: "Camping Familiar",
  //   description: "Carpas y equipos para toda la familia",
  // },
];
