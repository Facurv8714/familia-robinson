// Import local images
import robinsonMinorista from "./images/robinson-minorista.avif";
import robinsonMayorista from "./images/robinson-mayorista.avif";
import robinsonSchool from "./images/robinson-school.avif";
import robinsonExpedition from "./images/robinson-expediciones.avif";

// carouselImages array
export const carouselImages = [
  {
    src: robinsonMinorista,
    title: "Robinson Minorista",
    description: "Todo lo que necesitas para tu próxima aventura.",
  },
  {
    src: robinsonMayorista,
    title: "Robinson Mayorista",
    description: "Abastecemos negocios con ADN outdoor.",
  },
  {
    src: robinsonSchool,
    title: "Robinson Fishing School",
    description: "Aprendé, viví y pescá con nosotros.",
  },
  {
    src: robinsonExpedition,
    title: "Robinson Expediciones (futuro)",
    description: "Viví la aventura Robinson en la naturaleza.",
  },
];

// Configuración de componentes que pueden ser ocultados
export const HIDEABLE_COMPONENTS = {
  HERO_LOGO_SECTION: "hero-logo-section",
  HERO_BRAND_CHIP: "hero-brand-chip",
  HERO_MAIN_TITLE: "hero-main-title",
  HERO_CAROUSEL: "hero-carousel",
  HERO_DESCRIPTION: "hero-description",
  HERO_NAV_BUTTONS: "hero-nav-buttons",
  HERO_PROMOTIONAL_CHIPS: "hero-promotional-chips",
  HERO_PROMOTIONAL_SECTION: "hero-promotional-section",

  MAYORISTA_CARD: "mayorista",
  MINORISTA_CARD: "minorista",
  FISHING_SCHOOL_CARD: "fishing-school",
  EXPEDICIONES_CARD: "expediciones",
  QUIENES_SOMOS: "quienes",
  ATENCION_CARD: "atencion",
  CTA_FINAL: "cta-final",
  CONTACTO_FORM: "contacto",
  FOOTER: "footer",
  FAB_BUTTON: "fab-button",
};
