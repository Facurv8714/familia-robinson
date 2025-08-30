import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
  Fab,
  TextField,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import {
  Phone,
  ShoppingCart,
  Warehouse,
  Info,
  ChevronRight,
  LocationOn,
  CheckCircle,
} from "@mui/icons-material";
import { PALETTE, HIDEABLE_COMPONENTS } from "./constants";
import { createCustomTheme } from "./utils";
import Topbar from "./components/Topbar";
import HeroSection from "./components/HeroSection";
import ConfigurableSection from "./components/ConfigurableSection";
import ConfigurableGridItem from "./components/ConfigurableGridItem";

/**
 * HOME – Pesca & Camping (Material-UI Design)
 * - Diseño moderno con Material-UI
 * - Paleta de colores respetada
 * - Tema personalizado con modo oscuro
 * - Componentes MUI optimizados
 */

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [variant, setVariant] = useState("A");
  const [configMode, setConfigMode] = useState(false);
  const [hiddenComponents, setHiddenComponents] = useState(new Set());
  const theme = createCustomTheme(darkMode);

  const toggleComponentVisibility = (componentId) => {
    setHiddenComponents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(componentId)) {
        newSet.delete(componentId);
      } else {
        newSet.add(componentId);
      }
      return newSet;
    });
  };

  const isComponentVisible = (componentId) => {
    return !hiddenComponents.has(componentId);
  };

  // Función helper para verificar si al menos una sección del grupo está visible
  const isAnyGroupSectionVisible = (groupIds) => {
    return groupIds.some(id => isComponentVisible(id));
  };

  // Función helper para obtener el número de secciones visibles en un grupo
  const getVisibleSectionsCount = (groupIds) => {
    return groupIds.filter(id => isComponentVisible(id)).length;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
            : `linear-gradient(135deg, ${PALETTE.fondo} 0%, #f8f6f0 100%)`,
        }}
      >
        {/* Header con AppBar */}
        <Topbar
          variant={variant}
          setVariant={setVariant}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          configMode={configMode}
          setConfigMode={setConfigMode}
        />

        {/* Hero Section */}
        {/*<ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.HERO_SECTION}
          isConfigMode={configMode}
          isVisible={isComponentVisible(HIDEABLE_COMPONENTS.HERO_SECTION)}
          onToggleVisibility={toggleComponentVisibility}
        > */}
        <HeroSection
          variant={variant}
          configMode={configMode}
          isComponentVisible={isComponentVisible}
          onToggleVisibility={toggleComponentVisibility}
        />
        {/* </ConfigurableSection> */}

        {/* Sección Mayorista/Minorista/Fishing School/Expediciones */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4} sx={{ minHeight: "600px" }}>
            <ConfigurableGridItem
              sectionId={HIDEABLE_COMPONENTS.MAYORISTA_CARD}
              isConfigMode={configMode}
              isVisible={isComponentVisible(HIDEABLE_COMPONENTS.MAYORISTA_CARD)}
              onToggleVisibility={toggleComponentVisibility}
              gridProps={{ 
                xs: 12, 
                md: getVisibleSectionsCount([
                  HIDEABLE_COMPONENTS.MAYORISTA_CARD,
                  HIDEABLE_COMPONENTS.MINORISTA_CARD,
                  HIDEABLE_COMPONENTS.FISHING_SCHOOL_CARD,
                  HIDEABLE_COMPONENTS.EXPEDICIONES_CARD
                ]) === 1 ? 12 : 6 
              }}
            >
              <Card
                id="mayorista"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`,
                      }}
                    >
                      🏪
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Robinson Mayorista
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Distribución mayorista a comercios del rubro.
                    <br />
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      Abastecemos negocios con ADN outdoor.
                    </Box>
                  </Typography>
                  <List sx={{ mb: 3, flex: 1 }}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText primary="Abastecimiento eficiente y confiable" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText primary="Descuentos progresivos 10/25/50 uds" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText primary="CSV semanal (SKU · stock · PVP)" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText primary="Garantía y postventa especializada" />
                    </ListItem>
                  </List>

                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ChevronRight />}
                    href="#contacto"
                    fullWidth
                    sx={{ mt: "auto" }}
                  >
                    Quiero ser distribuidor
                  </Button>
                </CardContent>
              </Card>
            </ConfigurableGridItem>

            <ConfigurableGridItem
              sectionId={HIDEABLE_COMPONENTS.MINORISTA_CARD}
              isConfigMode={configMode}
              isVisible={isComponentVisible(HIDEABLE_COMPONENTS.MINORISTA_CARD)}
              onToggleVisibility={toggleComponentVisibility}
              gridProps={{ 
                xs: 12, 
                md: getVisibleSectionsCount([
                  HIDEABLE_COMPONENTS.MAYORISTA_CARD,
                  HIDEABLE_COMPONENTS.MINORISTA_CARD,
                  HIDEABLE_COMPONENTS.FISHING_SCHOOL_CARD,
                  HIDEABLE_COMPONENTS.EXPEDICIONES_CARD
                ]) === 1 ? 12 : 6 
              }}
            >
              <Card
                id="minorista"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.destacado})`,
                      }}
                    >
                      🛒
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Robinson Minorista
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Venta al público de artículos de pesca,
                    <br />
                    camping, outdoor e indumentaria.
                    <br />
                    <Box
                      component="span"
                      sx={{ color: "secondary.main", fontWeight: 600 }}
                    >
                      Todo lo que necesitas para tu próxima aventura.
                    </Box>
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 3,
                      flex: 1,
                    }}
                  >
                    <Chip
                      label="📦 Variedad y atención personalizada"
                      size="small"
                    />
                    <Chip label="📦 Envío a todo el país" size="small" />
                    <Chip label="💳 Todos los medios de pago" size="small" />
                    <Chip label="📱 WhatsApp directo" size="small" />
                  </Box>

                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ShoppingCart />}
                    href="#catalogo"
                    fullWidth
                    sx={{ mt: "auto" }}
                  >
                    Ver catálogo completo
                  </Button>
                </CardContent>
              </Card>
            </ConfigurableGridItem>

            <ConfigurableGridItem
              sectionId={HIDEABLE_COMPONENTS.FISHING_SCHOOL_CARD}
              isConfigMode={configMode}
              isVisible={isComponentVisible(HIDEABLE_COMPONENTS.FISHING_SCHOOL_CARD)}
              onToggleVisibility={toggleComponentVisibility}
              gridProps={{ 
                xs: 12, 
                md: getVisibleSectionsCount([
                  HIDEABLE_COMPONENTS.MAYORISTA_CARD,
                  HIDEABLE_COMPONENTS.MINORISTA_CARD,
                  HIDEABLE_COMPONENTS.FISHING_SCHOOL_CARD,
                  HIDEABLE_COMPONENTS.EXPEDICIONES_CARD
                ]) === 1 ? 12 : 6 
              }}
            >
              <Card
                id="fishing-school"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.destacado})`,
                      }}
                    >
                      🎣
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Robinson Fishing School
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Formación técnica y comunitaria para
                    <br />
                    pescadores de todos los niveles.
                    <br />
                    <Box
                      component="span"
                      sx={{ color: PALETTE.acento, fontWeight: 600 }}
                    >
                      Aprendé, viví y pescá con nosotros.
                    </Box>
                  </Typography>

                  <List sx={{ mb: 3, flex: 1 }}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: PALETTE.acento }} />
                      </ListItemIcon>
                      <ListItemText primary="Formación técnica y comunidad" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: PALETTE.acento }} />
                      </ListItemIcon>
                      <ListItemText primary="Cursos presenciales y salidas grupales" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: PALETTE.acento }} />
                      </ListItemIcon>
                      <ListItemText primary="Técnicas de pesca especializada" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: PALETTE.acento }} />
                      </ListItemIcon>
                      <ListItemText primary="Equipo y material incluido" />
                    </ListItem>
                  </List>

                  <Button
                    variant="contained"
                    sx={{
                      background: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.destacado})`,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${PALETTE.acento}dd, ${PALETTE.destacado}dd)`,
                      },
                      mt: "auto",
                    }}
                    endIcon={<ChevronRight />}
                    href="#contacto"
                    fullWidth
                  >
                    Conocer cursos
                  </Button>
                </CardContent>
              </Card>
            </ConfigurableGridItem>

            <ConfigurableGridItem
              sectionId={HIDEABLE_COMPONENTS.EXPEDICIONES_CARD}
              isConfigMode={configMode}
              isVisible={isComponentVisible(
                HIDEABLE_COMPONENTS.EXPEDICIONES_CARD
              )}
              onToggleVisibility={toggleComponentVisibility}
              gridProps={{ xs: 12, md: 6 }}
            >
              <Card
                id="expediciones"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${PALETTE.destacado}, ${PALETTE.primario})`,
                      }}
                    >
                      🏕️
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Robinson Expediciones
                      <br />
                      (futuro)
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Viajes, clínicas, experiencias guiadas.
                    <br />
                    <Box
                      component="span"
                      sx={{ color: PALETTE.destacado, fontWeight: 600 }}
                    >
                      Viví la aventura Robinson en la naturaleza.
                    </Box>
                  </Typography>

                  <List sx={{ mb: 3, flex: 1 }}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: PALETTE.destacado }} />
                      </ListItemIcon>
                      <ListItemText primary="Experiencias guiadas y seguras en la naturaleza" />
                    </ListItem>
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
                      <ListItemText primary="Clínicas especializadas en naturaleza" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: PALETTE.destacado }} />
                      </ListItemIcon>
                      <ListItemText primary="Para aventureros y turistas outdoor" />
                    </ListItem>
                  </List>

                  <Button
                    variant="contained"
                    sx={{
                      background: `linear-gradient(135deg, ${PALETTE.destacado}, ${PALETTE.primario})`,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${PALETTE.destacado}dd, ${PALETTE.primario}dd)`,
                      },
                      mt: "auto",
                    }}
                    endIcon={<ChevronRight />}
                    href="#contacto"
                    fullWidth
                  >
                    Próximamente
                  </Button>
                </CardContent>
              </Card>
            </ConfigurableGridItem>
          </Grid>
        </Container>

        {/* Sección Quiénes somos */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            <ConfigurableGridItem
              sectionId={HIDEABLE_COMPONENTS.QUIENES_SOMOS}
              isConfigMode={configMode}
              isVisible={isComponentVisible(HIDEABLE_COMPONENTS.QUIENES_SOMOS)}
              onToggleVisibility={toggleComponentVisibility}
              gridProps={{ xs: 12, md: 8 }}
            >
              <Card id="quienes">
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.primario})`,
                      }}
                    >
                      <Info />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Quiénes somos
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
                  >
                    Desde{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      2008
                    </Box>{" "}
                    la{" "}
                    <Box
                      component="span"
                      sx={{ color: PALETTE.primario, fontWeight: 700 }}
                    >
                      Familia Robinson
                    </Box>{" "}
                    crece con{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      4 submarcas especializadas
                    </Box>
                    : venta{" "}
                    <Box
                      component="span"
                      sx={{ color: "secondary.main", fontWeight: 600 }}
                    >
                      minorista
                    </Box>{" "}
                    y{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      mayorista
                    </Box>
                    , nuestra{" "}
                    <Box
                      component="span"
                      sx={{ color: PALETTE.acento, fontWeight: 600 }}
                    >
                      Fishing School
                    </Box>{" "}
                    y futuras{" "}
                    <Box
                      component="span"
                      sx={{ color: PALETTE.destacado, fontWeight: 600 }}
                    >
                      expediciones
                    </Box>
                    . Todo con{" "}
                    <Box
                      component="span"
                      sx={{ color: PALETTE.acento, fontWeight: 600 }}
                    >
                      trato honesto
                    </Box>
                    ,{" "}
                    <Box
                      component="span"
                      sx={{ color: "secondary.main", fontWeight: 600 }}
                    >
                      stock real
                    </Box>{" "}
                    y{" "}
                    <Box
                      component="span"
                      sx={{ color: PALETTE.destacado, fontWeight: 600 }}
                    >
                      asesoría técnica especializada
                    </Box>
                    .
                  </Typography>
                </CardContent>
              </Card>
            </ConfigurableGridItem>

            <ConfigurableGridItem
              sectionId={HIDEABLE_COMPONENTS.ATENCION_CARD}
              isConfigMode={configMode}
              isVisible={isComponentVisible(HIDEABLE_COMPONENTS.ATENCION_CARD)}
              onToggleVisibility={toggleComponentVisibility}
              gridProps={{ xs: 12, md: 4 }}
            >
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        background: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.primario})`,
                      }}
                    >
                      <LocationOn sx={{ fontSize: "1rem" }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Atención
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    L–V 9–18 hs
                    <br />
                    Quilmes, Buenos Aires
                  </Typography>

                  <Button
                    variant="text"
                    color="primary"
                    href="#contacto"
                    endIcon={<ChevronRight />}
                  >
                    Ver información de contacto
                  </Button>
                </CardContent>
              </Card>
            </ConfigurableGridItem>
          </Grid>
        </Container>

        {/* CTA Final */}
        <ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.CTA_FINAL}
          isConfigMode={configMode}
          isVisible={isComponentVisible(HIDEABLE_COMPONENTS.CTA_FINAL)}
          onToggleVisibility={toggleComponentVisibility}
        >
          <Container maxWidth="md" sx={{ py: 8 }}>
            <Card
              sx={{
                background: `linear-gradient(135deg, ${PALETTE.fondo}f0, ${PALETTE.fondo}80)`,
              }}
            >
              <CardContent sx={{ p: 6, textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
                    fontSize: "2rem",
                  }}
                >
                  💬
                </Avatar>

                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 900,
                  }}
                >
                  ¿Listo para cotizar?
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  Contanos qué necesitás y te respondemos en el día hábil con la
                  mejor propuesta del mercado.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Phone />}
                  href="#contacto"
                  sx={{ px: 4, py: 2, fontSize: "1.1rem" }}
                >
                  Contactar ahora
                </Button>
              </CardContent>
            </Card>
          </Container>
        </ConfigurableSection>

        {/* Footer */}
        <ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.FOOTER}
          isConfigMode={configMode}
          isVisible={isComponentVisible(HIDEABLE_COMPONENTS.FOOTER)}
          onToggleVisibility={toggleComponentVisibility}
        >
          <Paper
            component="footer"
            elevation={0}
            sx={{
              mt: 4,
              borderTop: "1px solid",
              borderColor: "divider",
              background: "transparent",
            }}
          >
            <Container maxWidth="lg" sx={{ py: 4 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Familia Robinson
                </Box>{" "}
                · Pesca & Camping · Quilmes, Buenos Aires · L–V 9 a 18 hs
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography
                  variant="body2"
                  component="a"
                  href="#"
                  sx={{ textDecoration: "underline", color: "text.secondary" }}
                >
                  Cambios y devoluciones
                </Typography>
                <Typography
                  variant="body2"
                  component="a"
                  href="#"
                  sx={{ textDecoration: "underline", color: "text.secondary" }}
                >
                  Términos y condiciones
                </Typography>
              </Box>
            </Container>
          </Paper>
        </ConfigurableSection>

        {/* Contacto */}
        <ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.CONTACTO_FORM}
          isConfigMode={configMode}
          isVisible={isComponentVisible(HIDEABLE_COMPONENTS.CONTACTO_FORM)}
          onToggleVisibility={toggleComponentVisibility}
        >
          <Container maxWidth="md" sx={{ pb: 8 }} id="contacto">
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
                    }}
                  >
                    <Phone />
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    Contacto
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nombre completo"
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Teléfono" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Localidad" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contanos qué necesitás y te respondemos con la mejor propuesta..."
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Phone />}
                      fullWidth
                      sx={{ py: 2 }}
                    >
                      Enviar consulta
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </ConfigurableSection>

        {/* Floating Action Button */}
        <ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.FAB_BUTTON}
          isConfigMode={configMode}
          isVisible={isComponentVisible(HIDEABLE_COMPONENTS.FAB_BUTTON)}
          onToggleVisibility={toggleComponentVisibility}
        >
          <Fab
            color="primary"
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
              "&:hover": {
                background: `linear-gradient(135deg, ${PALETTE.primario}dd, ${PALETTE.acento}dd)`,
              },
            }}
            href="#contacto"
            component="a"
          >
            <Phone />
          </Fab>
        </ConfigurableSection>
      </Box>
    </ThemeProvider>
  );
}
