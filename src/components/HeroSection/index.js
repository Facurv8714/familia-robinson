import React, { useState, useEffect } from "react";
import {
  Box,
  Chip,
  Container,
  Fade,
  Grid,
  Typography,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  ShoppingCart,
  Warehouse,
} from "@mui/icons-material";
import { PALETTE } from "../../constants";
import PromotionalSection from "./sections/PromotionalSection";
import PromotionalChips from "./sections/PromotionalChips";
import NavButtons from "./sections/NavButtons";

import { carouselImages } from "../../constants";

const HeroSection = ({ variant }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      setIsManualControl(true);
      setTimeout(() => setIsTransitioning(false), 200);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
      setIsManualControl(true);
      setTimeout(() => setIsTransitioning(false), 200);
    }, 300);
  };

  // Helper function to get the appropriate button for each slide
  const getSlideButton = (slideIndex) => {
    const buttons = [
      {
        text: "Ver tienda",
        href: "#minorista",
        icon: <ShoppingCart />,
        color: "secondary",
      },
      {
        text: "Ser distribuidor",
        href: "#mayorista",
        icon: <Warehouse />,
        color: "primary",
      },
      {
        text: "Ver cursos",
        href: "#fishing-school",
        icon: "🎓",
        color: "custom",
      },
      {
        text: "Próximamente",
        href: "#expediciones",
        icon: "🏔️",
        color: "custom",
      },
    ];
    return buttons[slideIndex] || buttons[0];
  };

  // Smooth scroll handler
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 10; // 10px offset to avoid topbar overlap
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // Auto-advance carousel every 4 seconds, but pause if user is manually controlling
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isManualControl) {
      // Reset manual control after 8 seconds of inactivity
      const resetTimeout = setTimeout(() => {
        setIsManualControl(false);
      }, 4000);

      return () => clearTimeout(resetTimeout);
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length, isManualControl]);

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
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      transform: isTransitioning ? "scale(1.03)" : "scale(1)",
                      opacity: isTransitioning ? 0.8 : 1,
                      filter: isTransitioning ? "blur(0.5px)" : "blur(0px)",
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
                      transition:
                        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      transform: isTransitioning
                        ? "translateY(8px)"
                        : "translateY(0)",
                      opacity: isTransitioning ? 0.85 : 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            transition: "all 0.5s ease-out",
                            transform: isTransitioning
                              ? "translateX(-8px)"
                              : "translateX(0)",
                          }}
                        >
                          {carouselImages[currentSlide].title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: isTransitioning ? 0.7 : 0.9,
                            transition: "all 0.5s ease-out",
                            transform: isTransitioning
                              ? "translateX(-8px)"
                              : "translateX(0)",
                            mb: 2,
                          }}
                        >
                          {carouselImages[currentSlide].description}
                        </Typography>
                      </Box>

                      <Button
                        variant="contained"
                        size="small"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSmoothScroll(getSlideButton(currentSlide).href);
                        }}
                        startIcon={
                          typeof getSlideButton(currentSlide).icon === "string"
                            ? null
                            : getSlideButton(currentSlide).icon
                        }
                        sx={{
                          ml: 2,
                          minWidth: "120px",
                          cursor: "pointer",
                          background:
                            getSlideButton(currentSlide).color === "primary"
                              ? `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`
                              : getSlideButton(currentSlide).color ===
                                "secondary"
                              ? `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.destacado})`
                              : `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.destacado})`,
                          "&:hover": {
                            background:
                              getSlideButton(currentSlide).color === "primary"
                                ? `linear-gradient(135deg, ${PALETTE.primario}dd, ${PALETTE.destacado}dd)`
                                : getSlideButton(currentSlide).color ===
                                  "secondary"
                                ? `linear-gradient(135deg, ${PALETTE.secundario}dd, ${PALETTE.destacado}dd)`
                                : `linear-gradient(135deg, ${PALETTE.acento}dd, ${PALETTE.destacado}dd)`,
                            transform: "scale(1.05)",
                            boxShadow: `0 8px 25px -8px rgba(0,0,0,0.3)`,
                          },
                          "&:active": {
                            transform: "scale(0.98)",
                          },
                          transition:
                            "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                      >
                        {typeof getSlideButton(currentSlide).icon ===
                          "string" && (
                          <span style={{ marginRight: "4px" }}>
                            {getSlideButton(currentSlide).icon}
                          </span>
                        )}
                        {getSlideButton(currentSlide).text}
                      </Button>
                    </Box>
                  </Box>

                  {/* Navigation Arrows */}
                  <IconButton
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    sx={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: `${PALETTE.primario}80`,
                      color: "white",
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      opacity: isTransitioning ? 0.5 : 1,
                      "&:hover": {
                        backgroundColor: PALETTE.primario,
                        transform: "translateY(-50%) scale(1.08)",
                        boxShadow: `0 8px 25px -8px ${PALETTE.primario}60`,
                      },
                      "&:disabled": {
                        backgroundColor: `${PALETTE.primario}40`,
                        color: "rgba(255,255,255,0.6)",
                      },
                    }}
                  >
                    <ArrowBackIos />
                  </IconButton>

                  <IconButton
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    sx={{
                      position: "absolute",
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: `${PALETTE.primario}80`,
                      color: "white",
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      opacity: isTransitioning ? 0.5 : 1,
                      "&:hover": {
                        backgroundColor: PALETTE.primario,
                        transform: "translateY(-50%) scale(1.08)",
                        boxShadow: `0 8px 25px -8px ${PALETTE.primario}60`,
                      },
                      "&:disabled": {
                        backgroundColor: `${PALETTE.primario}40`,
                        color: "rgba(255,255,255,0.6)",
                      },
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
                        onClick={() => {
                          if (isTransitioning || currentSlide === index) return;

                          setIsTransitioning(true);
                          setTimeout(() => {
                            setCurrentSlide(index);
                            setIsManualControl(true);
                            setTimeout(() => setIsTransitioning(false), 200);
                          }, 300);
                        }}
                        sx={{
                          width: currentSlide === index ? 12 : 10,
                          height: currentSlide === index ? 12 : 10,
                          borderRadius: "50%",
                          backgroundColor:
                            currentSlide === index
                              ? "white"
                              : "rgba(255,255,255,0.5)",
                          cursor: isTransitioning ? "default" : "pointer",
                          transition:
                            "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          boxShadow:
                            currentSlide === index
                              ? "0 4px 12px rgba(255,255,255,0.3)"
                              : "none",
                          "&:hover": {
                            backgroundColor: isTransitioning
                              ? undefined
                              : "white",
                            transform: isTransitioning ? "none" : "scale(1.15)",
                            boxShadow: isTransitioning
                              ? "none"
                              : "0 4px 12px rgba(255,255,255,0.4)",
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
