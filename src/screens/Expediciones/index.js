import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  Badge,
} from "@mui/material";
import {
  Explore,
  DirectionsBoat,
  Terrain,
  PhotoCamera,
  Group,
  EmojiNature,
  CheckCircle,
  Star,
  ArrowForward,
  WhatsApp,
  LocationOn,
  CalendarToday,
  TrendingUp,
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
import Footer from "../../components/Footer";

// Tipos de expediciones
const expeditionTypes = [
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
const upcomingExpeditions = [
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
const robinsonDifferences = [
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
const included = [
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

// Testimonios
const testimonials = [
  {
    id: 1,
    text: "La mejor experiencia de pesca de mi vida. Aprendí más en 3 días que en 3 años pescando solo.",
    author: "Martín González",
    location: "Buenos Aires",
    year: "2023",
    image: robinsonExpediciones,
    rating: 5,
  },
  {
    id: 2,
    text: "Los guías son increíbles. No solo conocen los mejores spots, sino que te enseñan la técnica con paciencia y pasión.",
    author: "Laura Fernández",
    location: "Córdoba",
    year: "2024",
    image: robinsonMinorista,
    rating: 5,
  },
  {
    id: 3,
    text: "Una experiencia transformadora. Conectar con la naturaleza de esta forma cambió mi perspectiva completamente.",
    author: "Diego Ramírez",
    location: "Rosario",
    year: "2024",
    image: robinsonExpediciones,
    rating: 5,
  },
];

// Estadísticas
const stats = [
  { number: "+200", label: "Aventureros" },
  { number: "+15", label: "Destinos" },
  { number: "+8", label: "Años de experiencia" },
  { number: "100%", label: "Satisfacción" },
];

const Expediciones = () => {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generateWhatsAppLink = (message) => {
    const phone = "+5491158427688";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const message = `Hola! Quiero recibir novedades sobre las expediciones Robinson. Mi email es: ${email}`;
    window.open(generateWhatsAppLink(message), "_blank");
  };

  const getLevelColor = (level) => {
    const colors = {
      Principiante: "#4caf50",
      Intermedio: "#ff9800",
      Avanzado: "#f44336",
      Experto: "#9c27b0",
      "Todos los niveles": "#2196f3",
      Familiar: "#e91e63",
    };
    return colors[level] || "#757575";
  };

  return (
    <Box className="expediciones-page">
      {/* SECCIÓN 1: HERO ÉPICO CON PARALLAX */}
      <Box
        className="hero-section"
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${robinsonExpediciones})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: "brightness(0.4)",
            zIndex: 0,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            className="hero-title"
            sx={{
              fontSize: { xs: "3rem", md: "6rem" },
              fontWeight: 900,
              mb: 3,
              textShadow: "3px 3px 12px rgba(0,0,0,0.8)",
              letterSpacing: 3,
              animation: "fadeInUp 1s ease-out",
            }}
          >
            Aventuras que transforman
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 300,
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
              animation: "fadeInUp 1.2s ease-out",
            }}
          >
            Explorá con expertos, viví Robinson
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeInUp 1.4s ease-out",
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => {
                document
                  .querySelector("#proximas-expediciones")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                px: 5,
                py: 2.5,
                fontSize: "1.3rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #ff6b35, #f7931e)",
                boxShadow: "0 8px 24px rgba(255, 107, 53, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #f7931e, #ff6b35)",
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 32px rgba(255, 107, 53, 0.6)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver próximas expediciones
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<WhatsApp />}
              href={generateWhatsAppLink(
                "Hola! Quiero más información sobre las expediciones Robinson"
              )}
              target="_blank"
              sx={{
                px: 5,
                py: 2.5,
                fontSize: "1.3rem",
                fontWeight: 700,
                borderColor: "white",
                color: "white",
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "#fff",
                  background: "rgba(255,255,255,0.2)",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Quiero más info
            </Button>
          </Box>

          {/* Estadísticas flotantes */}
          <Grid container spacing={3} sx={{ mt: 8, justifyContent: "center" }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  sx={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 3,
                    p: 3,
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 900, mb: 1, color: "#ff6b35" }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECCIÓN 2: DESTINOS / TIPOS DE EXPEDICIONES */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 900,
            mb: 2,
            color: "#2c3e50",
          }}
        >
          Tipos de expediciones
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.3rem",
            mb: 8,
            color: "#546e7a",
            maxWidth: "700px",
            margin: "0 auto 64px",
          }}
        >
          Elegí la aventura que se adapte a tu nivel y deseos
        </Typography>

        <Grid container spacing={3}>
          {expeditionTypes.map((type, index) => (
            <Grid item xs={12} sm={6} md={4} key={type.id}>
              <Card
                className="expedition-card"
                sx={{
                  height: 400,
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    "& .expedition-overlay": {
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
                    },
                    "& .expedition-image": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  className="expedition-image"
                  component="img"
                  src={type.image}
                  alt={type.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  className="expedition-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Chip
                    label={type.level}
                    size="small"
                    sx={{
                      mb: 2,
                      width: "fit-content",
                      background: getLevelColor(type.level),
                      color: "white",
                      fontWeight: 700,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "white",
                      mb: 1,
                    }}
                  >
                    {type.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#ff6b35",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {type.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.6,
                    }}
                  >
                    {type.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SECCIÓN 3: LA EXPERIENCIA ROBINSON */}
      <Box sx={{ py: 10, background: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 2,
              color: "#2c3e50",
            }}
          >
            ¿Por qué Robinson Expediciones?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.3rem",
              mb: 8,
              color: "#546e7a",
            }}
          >
            Estos son los pilares de nuestra propuesta
          </Typography>

          <Grid container spacing={6}>
            {robinsonDifferences.map((diff, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      "& .diff-icon": {
                        color: "#ff6b35",
                        transform: "scale(1.2) rotate(5deg)",
                      },
                    },
                  }}
                >
                  <Box
                    className="diff-icon"
                    sx={{
                      color: "#2c3e50",
                      mb: 3,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {diff.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#2c3e50",
                    }}
                  >
                    {diff.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#546e7a",
                      lineHeight: 1.7,
                    }}
                  >
                    {diff.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECCIÓN 4: PRÓXIMAS EXPEDICIONES */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="proximas-expediciones">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 900,
            mb: 2,
            color: "#2c3e50",
          }}
        >
          Próximas expediciones
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.3rem",
            mb: 8,
            color: "#546e7a",
          }}
        >
          Reservá tu lugar en las próximas aventuras
        </Typography>

        <Grid container spacing={4}>
          {upcomingExpeditions.map((expedition) => (
            <Grid item xs={12} md={6} key={expedition.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {expedition.badge && (
                  <Chip
                    label={expedition.badge}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      zIndex: 2,
                      background: "#ff6b35",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="250"
                  image={expedition.image}
                  alt={expedition.name}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mb: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Chip
                      label={expedition.level}
                      size="small"
                      sx={{
                        background: getLevelColor(expedition.level),
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      icon={<LocationOn sx={{ fontSize: 16 }} />}
                      label={expedition.location}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#2c3e50",
                    }}
                  >
                    {expedition.name}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <CalendarToday sx={{ fontSize: 18, color: "#546e7a" }} />
                      <Typography variant="body2" sx={{ color: "#546e7a" }}>
                        {expedition.date}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <Explore sx={{ fontSize: 18, color: "#546e7a" }} />
                      <Typography variant="body2" sx={{ color: "#546e7a" }}>
                        {expedition.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Group sx={{ fontSize: 18, color: "#546e7a" }} />
                      <Typography variant="body2" sx={{ color: "#546e7a" }}>
                        Quedan {expedition.available} de {expedition.total}{" "}
                        lugares
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "#ff6b35",
                      }}
                    >
                      {expedition.price}
                    </Typography>
                    <Button
                      variant="contained"
                      endIcon={<WhatsApp />}
                      href={generateWhatsAppLink(
                        `Hola! Quiero reservar un lugar en: ${expedition.name}`
                      )}
                      target="_blank"
                      sx={{
                        background: "#ff6b35",
                        fontWeight: 700,
                        "&:hover": {
                          background: "#f7931e",
                        },
                      }}
                    >
                      Reservar cupo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SECCIÓN 5: TESTIMONIOS */}
      {/* <Box
        sx={{
          py: 10,
          background:
            "linear-gradient(135deg, rgba(255,107,53,0.05), rgba(247,147,30,0.05))",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 2,
              color: "#2c3e50",
            }}
          >
            Lo que dicen los aventureros
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.3rem",
              mb: 8,
              color: "#546e7a",
            }}
          >
            Experiencias reales de quienes ya vivieron Robinson
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 4,
                    position: "relative",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "#ff6b35",
                      boxShadow: "0 12px 40px rgba(255, 107, 53, 0.3)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", gap: 0.5, mb: 3 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: "#ff6b35", fontSize: 28 }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      fontStyle: "italic",
                      color: "#2c3e50",
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box
                    sx={{
                      borderTop: "2px solid #f0f0f0",
                      pt: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#2c3e50",
                        mb: 0.5,
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#546e7a",
                      }}
                    >
                      {testimonial.location} • {testimonial.year}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* SECCIÓN 6: QUÉ INCLUYE */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 900,
            mb: 2,
            color: "#2c3e50",
          }}
        >
          Qué incluye cada expedición
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.3rem",
            mb: 8,
            color: "#546e7a",
          }}
        >
          Todo lo que necesitás para una experiencia completa
        </Typography>

        <Grid container spacing={3}>
          {included.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 3,
                  borderRadius: 3,
                  background: "white",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 24px rgba(255, 107, 53, 0.2)",
                    "& .included-icon": {
                      color: "#ff6b35",
                      transform: "scale(1.2)",
                    },
                  },
                }}
              >
                <Box
                  className="included-icon"
                  sx={{
                    color: "#2c3e50",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#2c3e50",
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SECCIÓN 7: LA FILOSOFÍA ROBINSON */}
      <Box
        sx={{
          position: "relative",
          py: 12,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${robinsonExpediciones})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.3)",
            zIndex: 0,
          },
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 4,
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Nuestra filosofía
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              lineHeight: 1.8,
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              fontWeight: 300,
            }}
          >
            No solo organizamos viajes; creamos{" "}
            <strong style={{ color: "#ff6b35" }}>
              experiencias que conectan
            </strong>{" "}
            a las personas con la naturaleza, la técnica y la comunidad outdoor.
            Cada expedición es una oportunidad para{" "}
            <strong style={{ color: "#ff6b35" }}>aprender, crecer</strong> y
            descubrir versiones nuevas de uno mismo.
          </Typography>
        </Container>
      </Box>

      {/* SECCIÓN 8: GALERÍA DE AVENTURAS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 900,
            mb: 2,
            color: "#2c3e50",
          }}
        >
          Galería de aventuras
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.3rem",
            mb: 8,
            color: "#546e7a",
          }}
        >
          Momentos capturados en nuestras expediciones
        </Typography>

        {/* Grid tipo Pinterest */}
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                height: index % 3 === 0 ? 400 : 300,
              }}
            >
              <Box
                component="img"
                src={index % 2 === 0 ? robinsonExpediciones : robinsonMinorista}
                alt={`Aventura ${item}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  filter: "grayscale(30%)",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SECCIÓN 9: CTA FINAL */}
      <Box
        sx={{
          py: 12,
          background: "linear-gradient(135deg, #ff6b35, #f7931e)",
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              p: { xs: 4, md: 8 },
              textAlign: "center",
              borderRadius: 4,
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 900,
                mb: 3,
                color: "#2c3e50",
              }}
            >
              Tu próxima aventura empieza acá
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 5,
                fontSize: { xs: "1.2rem", md: "1.8rem" },
                color: "#546e7a",
              }}
            >
              Unite a la lista de espera y recibí novedades sobre nuevas
              expediciones
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
                mb: 4,
              }}
            >
              <TextField
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  flex: 1,
                  maxWidth: 400,
                  background: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  background: "#2c3e50",
                  "&:hover": {
                    background: "#1a252f",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Recibir novedades
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: "#546e7a", mb: 3 }}>
              o contactanos directamente
            </Typography>

            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              href={generateWhatsAppLink(
                "Hola! Quiero información sobre las expediciones Robinson"
              )}
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 700,
                borderColor: "#2c3e50",
                color: "#2c3e50",
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  background: "#2c3e50",
                  color: "white",
                },
              }}
            >
              WhatsApp Expediciones
            </Button>
          </Card>
        </Container>
      </Box>

      {/* FOOTER SIMPLE */}
      <Footer />
    </Box>
  );
};

export default Expediciones;
