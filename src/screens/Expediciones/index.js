import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  TextField,
} from "@mui/material";
import { ArrowForward, WhatsApp } from "@mui/icons-material";
import robinsonExpediciones from "../../images/robinson-expediciones.avif";
import robinsonMinorista from "../../images/robinson-minorista.avif";
import "./Expediciones.css";
import Footer from "../../components/Footer";

import {
  expeditionTypes,
  upcomingExpeditions,
  robinsonDifferences,
  included,
  stats,
} from "./constants";
import ExpeditionTypes from "./components/ExpeditionTypes";
import UpcomingExpeditions from "./components/UpcomingExpeditions";
import { generateWhatsAppLink } from "./utils";

// Estadísticas

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    const message = `Hola! Quiero recibir novedades sobre las expediciones Robinson. Mi email es: ${email}`;
    window.open(generateWhatsAppLink(message), "_blank");
  };

  return (
    <div>
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
                color: "#ffffff !important",
                fontSize: { xs: "3rem", md: "6rem" },
                fontWeight: 900,
                mb: 3,
                textShadow: "3px 3px 12px rgba(0,0,0,0.8)",
                letterSpacing: 3,
                animation: "fadeInUp 1s ease-out",
                background: "none !important",
                backgroundClip: "unset !important",
                WebkitBackgroundClip: "unset !important",
                WebkitTextFillColor: "#ffffff !important",
              }}
            >
              Aventuras que transforman
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#ffffff !important",
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
                  borderColor: "#FFF !important",
                  color: "#FFF !important",
                  borderWidth: 2,
                  "&::after": { content: "none", display: "none" },
                  "&:hover": {
                    background: "#1da851 !important",
                    color: "#FFF !important",
                    transform: "scale(1.02)",
                  },
                }}
              >
                Quiero más info
              </Button>
            </Box>

            {/* Estadísticas flotantes */}
            <Grid
              container
              spacing={3}
              sx={{ mt: 8, justifyContent: "center" }}
            >
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
                      sx={{
                        fontWeight: 900,
                        mb: 1,
                        color: "#ff6b35 !important",
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "white !important", fontWeight: 500 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

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
              ¿Por qué elegir Robinson Expediciones?
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
                color: "#FFF !important",
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
                color: "#FFF !important",
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
              a las personas con la naturaleza, la técnica y la comunidad
              outdoor. Cada expedición es una oportunidad para{" "}
              <strong style={{ color: "#ff6b35" }}>aprender, crecer</strong> y
              descubrir versiones nuevas de uno mismo.
            </Typography>
          </Container>
        </Box>

        {/* SECCIÓN 6: QUÉ INCLUYE */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 2,
              color: "#FFF !important",
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
              color: "#546e7a !important",
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

        {/* SECCIÓN 2: DESTINOS / TIPOS DE EXPEDICIONES */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 2,
              color: "#FFF !important",
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
              color: "#546e7a !important",
              maxWidth: "700px",
              margin: "0 auto 64px",
            }}
          >
            Elegí la aventura que se adapte a tu nivel y deseos
          </Typography>

          <Grid container spacing={3}>
            {expeditionTypes.map((type, index) => (
              <ExpeditionTypes key={type.id} index={index} type={type} />
            ))}
          </Grid>
        </Container>

        {/* SECCIÓN 4: PRÓXIMAS EXPEDICIONES */}
        <Container maxWidth="lg" sx={{ py: 10 }} id="proximas-expediciones">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 2,
              color: "#FFF !important",
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
              color: "#546e7a !important",
            }}
          >
            Reservá tu lugar en las próximas aventuras
          </Typography>

          <Grid container spacing={4}>
            {upcomingExpeditions.map((expedition) => (
              <UpcomingExpeditions
                key={expedition.id}
                expedition={expedition}
              />
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

        {/* SECCIÓN 8: GALERÍA DE AVENTURAS */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              mb: 2,
              color: "#FFF !important",
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
              color: "#546e7a !important",
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
                  src={
                    index % 2 === 0 ? robinsonExpediciones : robinsonMinorista
                  }
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
                    "&::after": { content: "none", display: "none" },
                    "&:hover": {
                      background: "#1da851 !important",
                      color: "#FFF !important",
                      transform: "scale(1.02)",
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
                  borderColor: "#2c3e50 !important",
                  color: "#2c3e50 !important",
                  borderWidth: 2,
                  "&::after": { content: "none", display: "none" },
                  "&:hover": {
                    background: "#1da851 !important",
                    color: "#FFF !important",
                    transform: "scale(1.02)",
                  },
                }}
              >
                WhatsApp Expediciones
              </Button>
            </Card>
          </Container>
        </Box>
      </Box>
      {/* FOOTER SIMPLE */}
      <Footer />
    </div>
  );
};

export default Expediciones;
