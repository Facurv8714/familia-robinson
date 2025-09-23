import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Fab,
  TextField,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Phone,
  ShoppingCart,
  Info,
  ChevronRight,
  LocationOn,
  CheckCircle,
} from "@mui/icons-material";
import { PALETTE, HIDEABLE_COMPONENTS } from "../constants";
import HeroSection from "../components/HeroSection";
import ConfigurableSection from "../components/ConfigurableSection";
import ConfigurableGridItem from "../components/ConfigurableGridItem";

export default function HomePage({ 
  variant, 
  configMode, 
  isComponentVisible, 
  onToggleVisibility 
}) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        variant={variant}
        configMode={configMode}
        isComponentVisible={isComponentVisible}
        onToggleVisibility={onToggleVisibility}
      />

      {/* Sección Mayorista/Minorista/Fishing School/Expediciones */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} sx={{ minHeight: "600px" }}>
          <ConfigurableGridItem
            sectionId={HIDEABLE_COMPONENTS.MAYORISTA_CARD}
            isConfigMode={configMode}
            isVisible={isComponentVisible(HIDEABLE_COMPONENTS.MAYORISTA_CARD)}
            onToggleVisibility={onToggleVisibility}
            gridProps={{
              xs: 12,
              md: 6,
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
                  Distribuimos productos de pesca, camping y outdoor
                  <br />a comercios que buscan
                  <Box
                    component="span"
                    sx={{ color: "primary.main", fontWeight: 600 }}
                  >
                    &nbsp;calidad y confianza
                  </Box>{" "}
                  <br />
                  para sus clientes.
                </Typography>
                <List sx={{ mb: 3, flex: 1 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Potenciamos tu negocio con ADN outdoor." />
                  </ListItem>
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
                    <ListItemText primary="Abasteciendo comercios, impulsando aventuras." />
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
            onToggleVisibility={onToggleVisibility}
            gridProps={{
              xs: 12,
              md: 6,
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
                  Tu tienda especializada para amantes de la pesca,
                  <br />
                  el camping y la vida al aire libre. Encontrá lo necesario
                  <br />
                  para que cada aventura sea
                  <Box
                    component="span"
                    sx={{ color: "secondary.main", fontWeight: 600 }}
                  >
                    &nbsp;inolvidable.
                  </Box>
                </Typography>
                <List sx={{ mb: 3, flex: 1 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Equipate para cada aventura." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Tu aliado en la naturaleza." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Calidad y confianza para tus días al aire libre." />
                  </ListItem>
                </List>
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
            isVisible={isComponentVisible(
              HIDEABLE_COMPONENTS.FISHING_SCHOOL_CARD
            )}
            onToggleVisibility={onToggleVisibility}
            gridProps={{
              xs: 12,
              md: 6,
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
                  Espacio de aprendizaje para pescadores de todos
                  <br />
                  los niveles. Ofrecemos cursos, talleres y actividades
                  <br />
                  comunitarias para perfeccionar técnicas,
                  <br />
                  compartir experiencias, conectar con la naturaleza y la
                  <br />
                  <Box
                    component="span"
                    sx={{ color: PALETTE.acento, fontWeight: 600 }}
                  >
                    pasión por la pesca.
                  </Box>
                </Typography>

                <List sx={{ mb: 3, flex: 1 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: PALETTE.acento }} />
                    </ListItemIcon>
                    <ListItemText primary="De pescador a pescador: aprendé y disfrutá." />
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
            onToggleVisibility={onToggleVisibility}
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
                  Organizamos viajes y expediciones guiadas para vivir
                  <br />
                  la naturaleza en su máxima expresión.
                  <br />
                  Clínicas, experiencias y aventuras diseñadas para <br />
                  quienes buscan explorar, aprender y conectar con el
                  <br />
                  entorno natural de manera
                  <Box
                    component="span"
                    sx={{ color: PALETTE.destacado, fontWeight: 600 }}
                  >
                    &nbsp;segura y apasionante.
                  </Box>
                </Typography>

                <List sx={{ mb: 3, flex: 1 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: PALETTE.destacado }} />
                    </ListItemIcon>
                    <ListItemText primary="Aventuras que transforman." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: PALETTE.destacado }} />
                    </ListItemIcon>
                    <ListItemText primary="Explorá con expertos, viví Robinson." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: PALETTE.destacado }} />
                    </ListItemIcon>
                    <ListItemText primary="Tu puerta a la naturaleza salvaje." />
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
            onToggleVisibility={onToggleVisibility}
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
            onToggleVisibility={onToggleVisibility}
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
        onToggleVisibility={onToggleVisibility}
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
        onToggleVisibility={onToggleVisibility}
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
        onToggleVisibility={onToggleVisibility}
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
        onToggleVisibility={onToggleVisibility}
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
    </>
  );
}