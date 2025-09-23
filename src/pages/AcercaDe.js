import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  ArrowBack,
  People,
  Star,
  TrendingUp,
  School,
  Handshake,
  CheckCircle,
  Business,
  Store,
  Explore,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PALETTE } from "../constants";

export default function AcercaDe() {
  const hitos = [
    {
      año: "2008",
      titulo: "Fundación",
      descripcion: "Nace Robinson con la pasión por la pesca y el outdoor",
      icono: "🎣",
    },
    {
      año: "2012",
      titulo: "Expansión Mayorista",
      descripcion: "Comenzamos a distribuir a comercios especializados",
      icono: "🏪",
    },
    {
      año: "2018",
      titulo: "Robinson Fishing School",
      descripcion: "Creamos nuestra escuela de pesca para la comunidad",
      icono: "🎓",
    },
    {
      año: "2023",
      titulo: "Familia Robinson",
      descripcion: "Consolidamos nuestras 4 líneas de negocio",
      icono: "👨‍👩‍👧‍👦",
    },
    {
      año: "2025",
      titulo: "Robinson Expediciones",
      descripcion: "Próximo lanzamiento de nuestras expediciones guiadas",
      icono: "🏕️",
    },
  ];

  const valores = [
    {
      titulo: "Trato Honesto",
      descripcion: "Transparencia y confianza en cada interacción",
      icono: <Handshake />,
      color: PALETTE.primario,
    },
    {
      titulo: "Stock Real",
      descripcion: "Lo que mostramos es lo que tenemos disponible",
      icono: <CheckCircle />,
      color: PALETTE.secundario,
    },
    {
      titulo: "Asesoría Técnica",
      descripcion: "Conocimiento especializado para cada necesidad",
      icono: <School />,
      color: PALETTE.acento,
    },
    {
      titulo: "Crecimiento Constante",
      descripcion: "Siempre evolucionando para servir mejor",
      icono: <TrendingUp />,
      color: PALETTE.destacado,
    },
  ];

  const estadisticas = [
    { numero: "17+", label: "Años de experiencia" },
    { numero: "500+", label: "Productos en catálogo" },
    { numero: "50+", label: "Comercios abastecidos" },
    { numero: "1000+", label: "Clientes satisfechos" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header de la página */}
      <Container maxWidth="lg" sx={{ pt: 4, pb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBack />}
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            Volver al inicio
          </Button>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
              Acerca de Nosotros
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Conocé la historia de la Familia Robinson
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Estadísticas */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          {estadisticas.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", p: 3, borderRadius: 3 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 1,
                  }}
                >
                  {stat.numero}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Historia - Timeline */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Nuestra Historia
        </Typography>
        <Timeline position="alternate">
          {hitos.map((hito, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
                    width: 60,
                    height: 60,
                    fontSize: "1.5rem",
                  }}
                >
                  {hito.icono}
                </TimelineDot>
                {index < hitos.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "primary.main",
                      mb: 1,
                    }}
                  >
                    {hito.año}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {hito.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hito.descripcion}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>

      {/* Nuestros Valores */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Nuestros Valores
        </Typography>
        <Grid container spacing={4}>
          {valores.map((valor, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2,
                    bgcolor: valor.color,
                  }}
                >
                  {valor.icono}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {valor.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {valor.descripcion}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Nuestras Marcas */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          La Familia Robinson
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Avatar sx={{ bgcolor: PALETTE.primario }}>
                  <Business />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Robinson Mayorista
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Distribuimos productos de alta calidad a comercios
                especializados en pesca, camping y outdoor. Nuestro enfoque está
                en brindar un servicio confiable con stock real y asesoramiento
                técnico.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.primario }} />
                  </ListItemIcon>
                  <ListItemText primary="Más de 50 comercios abastecidos" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.primario }} />
                  </ListItemIcon>
                  <ListItemText primary="Entrega puntual y confiable" />
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Avatar sx={{ bgcolor: PALETTE.secundario }}>
                  <Store />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Robinson Minorista
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Nuestra tienda especializada para pescadores y amantes del
                camping. Ofrecemos productos cuidadosamente seleccionados con el
                asesoramiento que necesitás para cada aventura.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.secundario }} />
                  </ListItemIcon>
                  <ListItemText primary="Atención personalizada" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.secundario }} />
                  </ListItemIcon>
                  <ListItemText primary="Productos probados y recomendados" />
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Avatar sx={{ bgcolor: PALETTE.acento }}>
                  <School />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Robinson Fishing School
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Nuestro espacio de formación y comunidad donde pescadores de
                todos los niveles pueden aprender, compartir experiencias y
                perfeccionar sus técnicas.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.acento }} />
                  </ListItemIcon>
                  <ListItemText primary="Cursos para todos los niveles" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.acento }} />
                  </ListItemIcon>
                  <ListItemText primary="Salidas grupales organizadas" />
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Avatar sx={{ bgcolor: PALETTE.destacado }}>
                  <Explore />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Robinson Expediciones
                </Typography>
                <Box
                  component="span"
                  sx={{
                    bgcolor: "warning.main",
                    color: "warning.contrastText",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Próximamente
                </Box>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                Nuestro proyecto más ambicioso: expediciones guiadas y
                experiencias outdoor diseñadas para conectar con la naturaleza
                de manera segura y transformadora.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.destacado }} />
                  </ListItemIcon>
                  <ListItemText primary="Expediciones guiadas por expertos" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: PALETTE.destacado }} />
                  </ListItemIcon>
                  <ListItemText primary="Experiencias únicas en la naturaleza" />
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ pb: 8 }}>
        <Card
          sx={{
            p: 6,
            textAlign: "center",
            background: `linear-gradient(135deg, ${PALETTE.fondo}20, ${PALETTE.fondo}10)`,
            borderRadius: 3,
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: "auto",
              mb: 3,
              background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
            }}
          >
            <People sx={{ fontSize: "2rem" }} />
          </Avatar>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Sumate a la Familia Robinson
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Ya seas comerciante, pescador aficionado o amante del outdoor,
            tenemos un lugar para vos en nuestra familia.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/#contacto"
              sx={{ borderRadius: 2, px: 4 }}
            >
              Contactanos
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/catalogo"
              sx={{ borderRadius: 2, px: 4 }}
            >
              Ver Catálogo
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
