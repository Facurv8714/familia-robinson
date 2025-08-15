import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Box,
  IconButton,
  Fab,
  TextField,
  Paper,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Fade,
  Backdrop,
} from "@mui/material";
import {
  Phone,
  ShoppingCart,
  Warehouse,
  Info,
  LightMode,
  DarkMode,
  ChevronRight,
  LocationOn,
  LocalShipping,
  Security,
  WhatsApp,
  CheckCircle,
} from "@mui/icons-material";

/**
 * HOME – Pesca & Camping (Material-UI Design)
 * - Diseño moderno con Material-UI
 * - Paleta de colores respetada
 * - Tema personalizado con modo oscuro
 * - Componentes MUI optimizados
 */

const PALETTE = {
  primario: "#2F5233",
  secundario: "#3A6B8A",
  acento: "#C25E2C",
  fondo: "#F4F1EA",
  texto: "#2D2D2D",
  destacado: "#7A9E7E",
};

// Tema personalizado de Material-UI
const createCustomTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: PALETTE.primario,
        light: "#4a7552",
        dark: "#1e3421",
      },
      secondary: {
        main: PALETTE.secundario,
        light: "#4a7a9c",
        dark: "#2a4f63",
      },
      accent: {
        main: PALETTE.acento,
        light: "#d4723a",
        dark: "#a04d1f",
      },
      background: {
        default: darkMode ? "#1a1a1a" : PALETTE.fondo,
        paper: darkMode ? "#2d2d2d" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#e9e9e9" : PALETTE.texto,
        secondary: darkMode ? "#b0b0b0" : "#666666",
      },
    },
    typography: {
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      h1: {
        fontWeight: 900,
        fontSize: "3.5rem",
        lineHeight: 1.1,
      },
      h2: {
        fontWeight: 800,
        fontSize: "2.5rem",
      },
      h3: {
        fontWeight: 700,
        fontSize: "1.8rem",
      },
      button: {
        fontWeight: 600,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            padding: "12px 24px",
            fontSize: "1rem",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
          },
        },
      },
    },
  });

// Componente para el scroll reveal
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [variant, setVariant] = useState("A");
  const theme = createCustomTheme(darkMode);

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
        <HideOnScroll>
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              color: "text.primary",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  sx={{
                    background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`,
                    width: 48,
                    height: 48,
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  PC
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, lineHeight: 1 }}
                  >
                    Pesca & Camping
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    Mayorista y minorista
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* Selector de variante */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
                  {["A", "B", "C"].map((v) => (
                    <Button
                      key={v}
                      size="small"
                      variant={variant === v ? "contained" : "outlined"}
                      onClick={() => setVariant(v)}
                      sx={{ minWidth: 40 }}
                    >
                      {v}
                    </Button>
                  ))}
                </Box>

                {/* Toggle modo oscuro */}
                <IconButton
                  onClick={() => setDarkMode(!darkMode)}
                  color="primary"
                >
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        {/* Hero Section */}
        <Container
          maxWidth="lg"
          sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 10 } }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Chip
                    label="✨ Formalidad · Impacto · Dinamismo · Accesible"
                    sx={{
                      mb: 3,
                      background:
                        variant === "A"
                          ? `linear-gradient(135deg, ${PALETTE.primario}, #386e45)`
                          : variant === "B"
                          ? `linear-gradient(135deg, ${PALETTE.secundario}, #2b536b)`
                          : `linear-gradient(135deg, ${PALETTE.destacado}, #5e7f62)`,
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      py: 1.5,
                      px: 2,
                    }}
                  />

                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.secundario})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: { xs: "2.5rem", md: "4rem" },
                    }}
                  >
                    Equipá tus aventuras de pesca y camping
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      opacity: 0.9,
                      lineHeight: 1.6,
                      fontWeight: 400,
                      color: "text.secondary",
                    }}
                  >
                    Marcas confiables, stock real y envíos rápidos. Comprá{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      mayorista
                    </Box>{" "}
                    o{" "}
                    <Box
                      component="span"
                      sx={{ color: "secondary.main", fontWeight: 600 }}
                    >
                      minorista
                    </Box>{" "}
                    con asesoría técnica especializada.
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Warehouse />}
                      href="#mayorista"
                    >
                      Venta mayorista
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      startIcon={<ShoppingCart />}
                      href="#minorista"
                    >
                      Venta minorista
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      startIcon={<Info />}
                      href="#quienes"
                    >
                      Quiénes somos
                    </Button>
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <Chip
                      label="🔥 Descuentos por volumen"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label="⚡ Envíos 24/72 hs"
                      color="secondary"
                      variant="outlined"
                    />
                    <Chip
                      label="👨‍💼 Atención especializada"
                      sx={{
                        borderColor: PALETTE.acento,
                        color: PALETTE.acento,
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ textAlign: "center", height: "100%" }}>
                    <CardContent>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          mx: "auto",
                          mb: 2,
                          background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`,
                          fontSize: "1.5rem",
                        }}
                      >
                        🎣
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        Reeles y cañas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Marcas líderes del mercado
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ textAlign: "center", height: "100%" }}>
                    <CardContent>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          mx: "auto",
                          mb: 2,
                          background: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.destacado})`,
                          fontSize: "1.5rem",
                        }}
                      >
                        ⛺
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        Carpas y bolsas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Para todas las estaciones
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ textAlign: "center", height: "100%" }}>
                    <CardContent>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          mx: "auto",
                          mb: 2,
                          background: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.primario})`,
                          fontSize: "1.5rem",
                        }}
                      >
                        🧥
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        Indumentaria
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Impermeables y técnica
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* Sección Mayorista/Minorista */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card id="mayorista" sx={{ height: "100%" }}>
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
                        background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`,
                      }}
                    >
                      <Warehouse />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Venta mayorista
                    </Typography>
                  </Box>

                  <List sx={{ mb: 3 }}>
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
                  >
                    Quiero ser distribuidor
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card id="minorista" sx={{ height: "100%" }}>
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
                        background: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.destacado})`,
                      }}
                    >
                      <ShoppingCart />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Venta minorista
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Comprá fácil y recibí en 24/72 hs en todo el país.
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                  >
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
                  >
                    Ver catálogo completo
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Sección Quiénes somos */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
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
                    equipamos a quienes aman el aire libre con{" "}
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
            </Grid>

            <Grid item xs={12} md={4}>
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
            </Grid>
          </Grid>
        </Container>

        {/* CTA Final */}
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

        {/* Footer */}
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
                Pesca & Camping
              </Box>{" "}
              · Quilmes, Buenos Aires · L–V 9 a 18 hs
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

        {/* Contacto */}
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

        {/* Floating Action Button */}
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
      </Box>
    </ThemeProvider>
  );
}
