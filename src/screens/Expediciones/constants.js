import {
  Group,
  EmojiNature,
  CheckCircle,
  Security,
  School,
  Restaurant,
  LocalShipping,
  CameraAlt,
  FavoriteBorder,
} from "@mui/icons-material";
import robinsonExpediciones from "../../images/robinson-expediciones.avif";
import robinsonMinorista from "../../images/robinson-minorista.avif";
import "./Expediciones.css";

// Tipos de expediciones
export const expeditionTypes = [
  {
    id: 1,
    title: "Pesca con devolución",
    subtitle: "Catch & Release en ríos remotos",
    description: "Técnicas de pesca con mosca y spinning en entornos naturales",
    image: robinsonExpediciones,
    level: "Intermedio",
    color: "#1976d2",
  },
  {
    id: 2,
    title: "Lagos y ríos remotos",
    subtitle: "Explorá la Patagonia profunda",
    description: "Aventuras en lugares poco transitados, naturaleza pura",
    image: robinsonMinorista,
    level: "Avanzado",
    color: "#2e7d32",
  },
  {
    id: 3,
    title: "Clínicas técnicas",
    subtitle: "Aprendé con expertos",
    description: "Workshops de casting, lectura de agua y entomología",
    image: robinsonExpediciones,
    level: "Principiante",
    color: "#ed6c02",
  },
  {
    id: 4,
    title: "Escapes de fin de semana",
    subtitle: "2 o 3 días de aventura",
    description: "Jornadas cortas cerca de Buenos Aires",
    image: robinsonMinorista,
    level: "Todos los niveles",
    color: "#9c27b0",
  },
  {
    id: 5,
    title: "Experiencias familiares",
    subtitle: "Aventuras para compartir",
    description: "Actividades outdoor para toda la familia",
    image: robinsonExpediciones,
    level: "Familiar",
    color: "#d32f2f",
  },
  {
    id: 6,
    title: "Aventura extrema",
    subtitle: "Para los más audaces",
    description: "Expediciones de alta montaña y trekking técnico",
    image: robinsonMinorista,
    level: "Experto",
    color: "#f57c00",
  },
];

// Próximas expediciones
export const upcomingExpeditions = [
  {
    id: 1,
    name: "Patagonia - Pesca con mosca",
    location: "Río Limay, Neuquén",
    duration: "5 días / 4 noches",
    date: "15-19 Febrero 2025",
    level: "Intermedio",
    price: "$450.000",
    image: robinsonExpediciones,
    badge: "¡Nuevas!",
    available: 4,
    total: 8,
  },
  {
    id: 2,
    name: "Delta del Paraná - Full Day",
    location: "Tigre, Buenos Aires",
    duration: "1 día completo",
    date: "Sábados de Enero",
    level: "Principiante",
    price: "$85.000",
    image: robinsonMinorista,
    badge: "Quedan pocos lugares",
    available: 2,
    total: 10,
  },
  {
    id: 3,
    name: "Travesía en kayak",
    location: "Lago Nahuel Huapi",
    duration: "3 días / 2 noches",
    date: "1-3 Marzo 2025",
    level: "Intermedio",
    price: "$320.000",
    image: robinsonExpediciones,
    badge: null,
    available: 6,
    total: 12,
  },
  {
    id: 4,
    name: "Clínica de casting Shimano",
    location: "Buenos Aires",
    duration: "4 horas",
    date: "Domingos de Febrero",
    level: "Todos los niveles",
    price: "$35.000",
    image: robinsonMinorista,
    badge: "¡Nuevas!",
    available: 12,
    total: 15,
  },
];

// Diferenciadores Robinson
export const robinsonDifferences = [
  {
    icon: <Group sx={{ fontSize: 48 }} />,
    title: "Guías certificados",
    description: "Expertos con años de experiencia en cada destino",
  },
  {
    icon: <Security sx={{ fontSize: 48 }} />,
    title: "Seguridad y equipo incluido",
    description: "Todo lo necesario para tu tranquilidad y disfrute",
  },
  {
    icon: <School sx={{ fontSize: 48 }} />,
    title: "Aprendizaje técnico real",
    description: "Mejorá tus habilidades con profesionales",
  },
  {
    icon: <EmojiNature sx={{ fontSize: 48 }} />,
    title: "Respeto por el ambiente",
    description: "Prácticas sustentables y conservación",
  },
];

// Qué incluye
export const included = [
  { icon: <Group />, text: "Guías especializados certificados" },
  { icon: <CheckCircle />, text: "Equipos seleccionados de pesca" },
  {
    icon: <LocalShipping />,
    text: "Transporte interno desde punto de encuentro",
  },
  { icon: <School />, text: "Material didáctico y clínicas técnicas" },
  { icon: <Restaurant />, text: "Comidas durante la expedición" },
  { icon: <Security />, text: "Seguro de accidentes personales" },
  { icon: <CameraAlt />, text: "Fotografías profesionales del viaje" },
  {
    icon: <FavoriteBorder />,
    text: "Acceso a comunidad Robinson Expediciones",
  },
];

export const stats = [
  { number: "+200", label: "Aventureros" },
  { number: "+15", label: "Destinos" },
  { number: "+8", label: "Años de experiencia" },
  { number: "100%", label: "Satisfacción" },
];
