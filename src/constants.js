// Import local images
import robinsonMinorista from "./images/robinson-minorista.avif";
import robinsonMayorista from "./images/robinson-mayorista.avif";
import robinsonSchool from "./images/robinson-school.avif";
import robinsonExpedition from "./images/robinson-expediciones.avif";

// Paleta original
// primario: "#2F5233",
// secundario: "#3A6B8A",
// acento: "#C25E2C",
// fondo: "#F4F1EA",
// texto: "#2D2D2D",
// destacado: "#7A9E7E",

// Paleta fiel al logo Robinson con mejor legibilidad
// Colores extraídos directamente del logo:
// #b4e4f9 - Azul claro/celeste (agua, aventura)
// #fff212 - Amarillo brillante (energía, sol)
// #f58634 - Naranja cálido (atardecer, acción)
// #933c84 - Púrpura/magenta (elegancia, marca)
// #373435 - Gris muy oscuro (textos, seriedad)
// #a9abae - Gris medio (neutro, balance)
// Agregados del logo:
// #dc2626 - Rojo intenso (alertas, urgencia)
// #ffffff - Blanco puro (limpieza, simplicidad)

export const PALETTE = {
  // Colores directos del logo
  primario: "#933c84", // Púrpura del logo - Color principal de marca
  secundario: "#b4e4f9", // Azul celeste del logo - Complementario suave
  acento: "#f58634", // Naranja cálido del logo - CTAs y destacados
  destacado: "#fff212", // Amarillo brillante del logo - Alertas y promociones

  // Colores para legibilidad mejorada
  texto: "#2d2d2d", // Gris muy oscuro para máxima legibilidad
  textoSecundario: "#4a5568", // Gris medio oscuro para subtítulos
  textoClaro: "#718096", // Gris medio para textos terciarios

  // Fondos y neutros
  fondo: "#ffffff", // Blanco puro para máximo contraste
  fondoSutil: "#f7fafc", // Gris muy claro para secciones
  fondoAlternativo: "#edf2f7", // Gris claro para alternancia
  neutro: "#a0aec0", // Gris medio para elementos neutros

  // Colores adicionales del logo
  rojo: "#dc2626", // Rojo intenso para alertas y urgencia
  rojoClaro: "#feb2b2", // Rojo claro para fondos
  rojoOscuro: "#991b1b", // Rojo oscuro para hover

  blanco: "#ffffff", // Blanco puro
  blancoSutil: "#f8fafc", // Blanco con tinte
  blancoCrema: "#fefefe", // Blanco crema

  // Variaciones mejoradas para UX
  primarioClaro: "#b65aa1",
  primarioOscuro: "#6b2c62",
  secundarioClaro: "#e0f4ff",
  secundarioOscuro: "#7ab8e8",
  acentoClaro: "#ffa366",
  acentoOscuro: "#e67429",
  destacadoClaro: "#ffff5c",
  destacadoOscuro: "#e6d411",

  // Estados de interacción con mejor contraste
  hover: "#805ad5", // Púrpura más claro para hover
  active: "#553c9a", // Púrpura más oscuro para active
  success: "#38a169", // Verde para éxito
  warning: "#d69e2e", // Amarillo oscuro para advertencias
  error: "#e53e3e", // Rojo para errores
  info: "#3182ce", // Azul para información
};

// SISTEMA DE VARIANTES FIELES AL LOGO CON LEGIBILIDAD MEJORADA
export const VARIANTS = {
  A: {
    name: "Robinson Classic",
    description: "Elegancia púrpura corporativa",
    primary: PALETTE.primario,
    secondary: PALETTE.secundario,
    accent: PALETTE.acento,
    background: PALETTE.fondo,
    textColor: PALETTE.texto,
    textSecondary: PALETTE.textoSecundario,
    gradient: {
      primary: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.primarioOscuro})`,
      secondary: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.secundarioOscuro})`,
      accent: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.acentoOscuro})`,
      hero: `linear-gradient(135deg, ${PALETTE.secundarioClaro}30, ${PALETTE.fondoSutil})`,
      card: `linear-gradient(145deg, ${PALETTE.fondo}, ${PALETTE.fondoSutil})`,
    },
    shadow: {
      primary: `0 4px 16px ${PALETTE.primario}20`,
      secondary: `0 2px 8px ${PALETTE.secundario}30`,
      accent: `0 3px 12px ${PALETTE.acento}25`,
    },
    style: "corporate",
  },
  B: {
    name: "Ocean Adventure",
    description: "Frescura acuática vibrante",
    primary: PALETTE.secundario,
    secondary: PALETTE.acento,
    accent: PALETTE.destacado,
    background: PALETTE.secundarioClaro,
    textColor: PALETTE.texto,
    textSecondary: PALETTE.textoSecundario,
    gradient: {
      primary: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.secundarioOscuro})`,
      secondary: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.acentoOscuro})`,
      accent: `linear-gradient(135deg, ${PALETTE.destacado}, ${PALETTE.destacadoOscuro})`,
      hero: `linear-gradient(135deg, ${PALETTE.secundarioClaro}40, ${PALETTE.fondo})`,
      card: `linear-gradient(145deg, ${PALETTE.fondo}, ${PALETTE.secundarioClaro}20)`,
    },
    shadow: {
      primary: `0 4px 16px ${PALETTE.secundario}25`,
      secondary: `0 2px 8px ${PALETTE.acento}30`,
      accent: `0 3px 12px ${PALETTE.destacado}20`,
    },
    style: "adventure",
  },
  C: {
    name: "Sunset Explorer",
    description: "Calidez naranja energética",
    primary: PALETTE.acento,
    secondary: PALETTE.destacado,
    accent: PALETTE.primario,
    background: "#fff8f0",
    textColor: PALETTE.texto,
    textSecondary: PALETTE.textoSecundario,
    gradient: {
      primary: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.acentoOscuro})`,
      secondary: `linear-gradient(135deg, ${PALETTE.destacado}, ${PALETTE.destacadoOscuro})`,
      accent: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.primarioOscuro})`,
      hero: `linear-gradient(135deg, ${PALETTE.acentoClaro}20, ${PALETTE.fondo})`,
      card: `linear-gradient(145deg, ${PALETTE.fondo}, #fff8f0)`,
    },
    shadow: {
      primary: `0 4px 16px ${PALETTE.acento}25`,
      secondary: `0 2px 8px ${PALETTE.destacado}20`,
      accent: `0 3px 12px ${PALETTE.primario}20`,
    },
    style: "energetic",
  },
  D: {
    name: "Robinson Fire",
    description: "Pasión roja intensa",
    primary: PALETTE.rojo,
    secondary: PALETTE.acento,
    accent: PALETTE.destacado,
    background: PALETTE.fondo,
    textColor: PALETTE.texto,
    textSecondary: PALETTE.textoSecundario,
    gradient: {
      primary: `linear-gradient(135deg, ${PALETTE.rojo}, ${PALETTE.rojoOscuro})`,
      secondary: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.acentoOscuro})`,
      accent: `linear-gradient(135deg, ${PALETTE.destacado}, ${PALETTE.destacadoOscuro})`,
      hero: `linear-gradient(135deg, ${PALETTE.rojoClaro}15, ${PALETTE.fondo})`,
      card: `linear-gradient(145deg, ${PALETTE.fondo}, ${PALETTE.rojoClaro}10)`,
    },
    shadow: {
      primary: `0 4px 16px ${PALETTE.rojo}25`,
      secondary: `0 2px 8px ${PALETTE.acento}25`,
      accent: `0 3px 12px ${PALETTE.destacado}20`,
    },
    style: "intense",
  },
  E: {
    name: "Robinson Pure",
    description: "Elegancia blanca limpia",
    primary: PALETTE.texto,
    secondary: PALETTE.primario,
    accent: PALETTE.acento,
    background: PALETTE.blanco,
    textColor: PALETTE.texto,
    textSecondary: PALETTE.textoSecundario,
    gradient: {
      primary: `linear-gradient(135deg, ${PALETTE.texto}, ${PALETTE.textoSecundario})`,
      secondary: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.primarioClaro})`,
      accent: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.acentoClaro})`,
      hero: `linear-gradient(135deg, ${PALETTE.blanco}, ${PALETTE.fondoSutil})`,
      card: `linear-gradient(145deg, ${PALETTE.blanco}, ${PALETTE.blancoSutil})`,
    },
    shadow: {
      primary: `0 4px 16px rgba(0,0,0,0.08)`,
      secondary: `0 2px 8px ${PALETTE.primario}15`,
      accent: `0 3px 12px ${PALETTE.acento}15`,
    },
    style: "minimal",
  },
  NATURAL: {
    name: "Robinson Natural",
    description: "Paleta naranja natural inspirada en el logo",
    primary: "#E67E22", // Naranja principal del logo
    secondary: "#3498DB", // Celeste/azul del logo
    accent: "#F39C12", // Naranja más claro para acentos
    background: "#FEF7E6", // Fondo cálido crema
    textColor: "#2C3E50", // Texto principal
    textSecondary: "#7B7D7D", // Texto secundario
    highlight: "#52C4B0", // Verde azulado complementario
    detailYellow: "#F1C40F", // Amarillo vibrante para detalles
    detailViolet: "#9B59B6", // Violeta para detalles contrastantes
    cyanLogo: "#5DADE2", // Celeste más presente del logo
    gradient: {
      primary: "linear-gradient(135deg, #E67E22, #F39C12)",
      secondary: "linear-gradient(135deg, #5DADE2, #3498DB)",
      accent: "linear-gradient(135deg, #F1C40F, #E67E22)",
      sunset: "linear-gradient(135deg, #E67E22, #9B59B6)",
      tropical: "linear-gradient(135deg, #5DADE2, #52C4B0)",
      warm: "linear-gradient(135deg, #F1C40F, #E67E22)",
      hero: "linear-gradient(135deg, #FEF7E6, #FDF2E9)",
      card: "linear-gradient(145deg, #FFFFFF, #FDF2E9)",
    },
    shadow: {
      primary: "0 4px 15px rgba(230, 126, 34, 0.3)",
      secondary: "0 4px 15px rgba(93, 173, 226, 0.3)",
      accent: "0 4px 15px rgba(241, 196, 15, 0.3)",
      violet: "0 4px 15px rgba(155, 89, 182, 0.3)",
    },
    style: "natural",
  },
};

// Función helper para obtener los estilos de variante
export const getVariantStyles = (variant) => {
  return VARIANTS[variant] || VARIANTS.A;
};

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
