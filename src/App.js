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
import { PALETTE } from "./constants";
import { createCustomTheme } from "./utils";
import Topbar from "./components/Topbar";
import HeroSection from "./components/HeroSection";

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
        <Topbar
          variant={variant}
          setVariant={setVariant}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Hero Section */}
        <HeroSection variant={variant} />

        {/* Sección Mayorista/Minorista/Fishing School/Expediciones */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4} sx={{ minHeight: "600px" }}>
            <Grid item xs={12} md={6}>
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
                      <Warehouse />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Robinson mayorista
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Distribución mayorista a comercios
                    <br />
                    del rubro.
                  </Typography>
                  <List sx={{ mb: 3, flex: 1 }}>
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
            </Grid>

            <Grid item xs={12} md={6}>
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
                      <ShoppingCart />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Robinson minorista
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ mb: 3, fontSize: "1.1rem" }}
                  >
                    Venta al público de artículos de pesca,
                    <br />
                    camping, outdoor e indumentaria.
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
            </Grid>

            <Grid item xs={12} md={6}>
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
                      🎓
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
                  </Typography>

                  <List sx={{ mb: 3, flex: 1 }}>
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
            </Grid>

            <Grid item xs={12} md={6}>
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
                      🏔️
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
                    Organizamos viajes y expediciones guiadas
                    <br />
                    para vivir la naturaleza en su máxima
                    <br />
                    expresión. Clínicas, experiencias y aventuras
                    <br />
                    diseñadas para explorar de manera segura.
                  </Typography>

                  <List sx={{ mb: 3, flex: 1 }}>
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
                      <ListItemText primary="Experiencias seguras y memorables" />
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
