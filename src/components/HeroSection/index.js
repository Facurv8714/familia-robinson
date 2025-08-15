import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Fade,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Paper,
} from "@mui/material";
import {
  Info,
  ShoppingCart,
  Warehouse,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { PALETTE } from "../../constants";
import PromotionalSection from "./sections/PromotionalSection";
import PromotionalChips from "./sections/PromotionalChips";
import NavButtons from "./sections/NavButtons";

const HeroSection = ({ variant }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Imágenes genéricas de pesca y camping
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center",
      title: "Pesca en Lagos",
      description: "Equipos profesionales para la pesca perfecta",
    },
    {
      url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=400&fit=crop&crop=center",
      title: "Camping Aventura",
      description: "Todo lo necesario para tu próxima aventura",
    },
    {
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      title: "Pesca Deportiva",
      description: "Cañas y accesorios de alta calidad",
    },
    {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=400&fit=crop&crop=center",
      title: "Camping Familiar",
      description: "Carpas y equipos para toda la familia",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <Container
      maxWidth="lg"
      sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 6, md: 10 } }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Fade in timeout={1100}>
            <Box>
              <Chip
                label="✨ Bienvenido a Familia Robinson ✨"
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

              {/* Carousel Component */}
              <Box
                sx={{
                  mb: 4,
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: "relative",
                    height: { xs: 250, md: 300 },
                    background: `linear-gradient(135deg, ${PALETTE.primario}15, ${PALETTE.secundario}15)`,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={carouselImages[currentSlide].url}
                    alt={carouselImages[currentSlide].title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all 0.5s ease-in-out",
                    }}
                  />

                  {/* Overlay with gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: `linear-gradient(transparent, ${PALETTE.primario}90)`,
                      p: 3,
                      color: "white",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {carouselImages[currentSlide].title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {carouselImages[currentSlide].description}
                    </Typography>
                  </Box>

                  {/* Navigation Arrows */}
                  <IconButton
                    onClick={prevSlide}
                    sx={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: `${PALETTE.primario}80`,
                      color: "white",
                      "&:hover": {
                        backgroundColor: PALETTE.primario,
                        transform: "translateY(-50%) scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowBackIos />
                  </IconButton>

                  <IconButton
                    onClick={nextSlide}
                    sx={{
                      position: "absolute",
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: `${PALETTE.primario}80`,
                      color: "white",
                      "&:hover": {
                        backgroundColor: PALETTE.primario,
                        transform: "translateY(-50%) scale(1.1)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowForwardIos />
                  </IconButton>

                  {/* Dots Indicator */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    {carouselImages.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor:
                            currentSlide === index
                              ? "white"
                              : "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "white",
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Box>

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
              <NavButtons />
              <PromotionalChips />
            </Box>
          </Fade>
        </Grid>

        <PromotionalSection />
      </Grid>
    </Container>
  );
};

export default HeroSection;
