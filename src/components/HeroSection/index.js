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
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { getVariantStyles, HIDEABLE_COMPONENTS } from "../../constants";
import PromotionalSection from "./sections/PromotionalSection";
import PromotionalChips from "./sections/PromotionalChips";
import NavButtons from "./sections/NavButtons";
import ConfigurableSection from "../ConfigurableSection";

import { carouselImages } from "../../constants";
import logoRobinson from "../../images/logo-robinson.svg";

const HeroSection = ({
  variant,
  configMode = false,
  isComponentVisible = () => true,
  onToggleVisibility = () => {},
}) => {
  const variantStyles = getVariantStyles(variant);
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
        icon: "🛒",
        color: "secondary",
      },
      {
        text: "Ser distribuidor",
        href: "#mayorista",
        icon: "🏪",
        color: "primary",
      },
      {
        text: "Ver cursos",
        href: "#fishing-school",
        icon: "🎣",
        color: "custom",
      },
      {
        text: "Próximamente",
        href: "#expediciones",
        icon: "🏕️",
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
      sx={{
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
        background: variantStyles.gradient.hero,
        borderRadius: 4,
        margin: "auto",
        mt: 2,
        boxShadow: variantStyles.shadow.secondary,
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Fade in timeout={1100}>
            <Box>
              {/* Logo Robinson */}
              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_LOGO_SECTION}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_LOGO_SECTION
                )}
                onToggleVisibility={onToggleVisibility}
                sx={{ mb: 3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: 3,
                    background: variantStyles.gradient.card,
                    boxShadow: variantStyles.shadow.primary,
                    border: `2px solid ${variantStyles.primary}20`,
                  }}
                >
                  <Box
                    component="img"
                    src={logoRobinson}
                    alt="Logo Robinson"
                    sx={{
                      width: { xs: 100, md: 140 },
                      height: { xs: 100, md: 140 },
                      objectFit: "contain",
                      filter: `drop-shadow(0 8px 16px ${variantStyles.primary}30)`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05) rotate(2deg)",
                        filter: `drop-shadow(0 12px 24px ${variantStyles.primary}40)`,
                      },
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: variantStyles.textColor,
                        lineHeight: 1,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        textShadow: `2px 2px 4px ${variantStyles.primary}20`,
                      }}
                    >
                      Familia Robinson
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: variantStyles.textSecondary,
                        fontWeight: 500,
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                      }}
                    >
                      Casa de Pesca
                    </Typography>
                  </Box>
                </Box>
              </ConfigurableSection>

              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_MAIN_TITLE}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_MAIN_TITLE
                )}
                onToggleVisibility={onToggleVisibility}
                sx={{ mb: 3 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: variantStyles.textColor,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontWeight: 900,
                    textShadow: `3px 3px 6px ${variantStyles.primary}25`,
                    "&:hover": {
                      transform: "scale(1.02)",
                      textShadow: `4px 4px 8px ${variantStyles.primary}35`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Todo tu equipamiento outdoor
                </Typography>
              </ConfigurableSection>

              {/* Carousel Component */}
              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_CAROUSEL}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_CAROUSEL
                )}
                onToggleVisibility={onToggleVisibility}
                sx={{ mb: 4 }}
              >
                <Box
                  sx={{
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
                      background: variantStyles.gradient.card,
                      borderRadius: 2,
                      overflow: "hidden",
                      border: `3px solid ${variantStyles.primary}30`,
                      boxShadow: variantStyles.shadow.primary,
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
                        background: `linear-gradient(transparent, ${variantStyles.primary}90)`,
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
                            className="textos-carrousel"
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
                            className="textos-carrousel"
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
                            handleSmoothScroll(
                              getSlideButton(currentSlide).href
                            );
                          }}
                          startIcon={
                            typeof getSlideButton(currentSlide).icon ===
                            "string"
                              ? null
                              : getSlideButton(currentSlide).icon
                          }
                          sx={{
                            ml: 2,
                            minWidth: "120px",
                            cursor: "pointer",
                            background: variantStyles.gradient.accent,
                            color: "white",
                            fontWeight: 700,
                            boxShadow: variantStyles.shadow.accent,
                            "&:hover": {
                              background: variantStyles.gradient.secondary,
                              transform: "scale(1.05)",
                              boxShadow: variantStyles.shadow.primary,
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
                        backgroundColor: `${variantStyles.primary}80`,
                        color: "white",
                        transition:
                          "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        opacity: isTransitioning ? 0.5 : 1,
                        boxShadow: variantStyles.shadow.accent,
                        "&:hover": {
                          backgroundColor: variantStyles.primary,
                          transform: "translateY(-50%) scale(1.08)",
                          boxShadow: variantStyles.shadow.primary,
                        },
                        "&:disabled": {
                          backgroundColor: `${variantStyles.primary}40`,
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
                        backgroundColor: `${variantStyles.primary}80`,
                        color: "white",
                        transition:
                          "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        opacity: isTransitioning ? 0.5 : 1,
                        boxShadow: variantStyles.shadow.accent,
                        "&:hover": {
                          backgroundColor: variantStyles.primary,
                          transform: "translateY(-50%) scale(1.08)",
                          boxShadow: variantStyles.shadow.primary,
                        },
                        "&:disabled": {
                          backgroundColor: `${variantStyles.primary}40`,
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
                            if (isTransitioning || currentSlide === index)
                              return;

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
                              transform: isTransitioning
                                ? "none"
                                : "scale(1.15)",
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
              </ConfigurableSection>

              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_DESCRIPTION}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_DESCRIPTION
                )}
                onToggleVisibility={onToggleVisibility}
                sx={{ mb: 4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: variantStyles.textColor,
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: variantStyles.background,
                    border: `2px solid ${variantStyles.primary}20`,
                    boxShadow: variantStyles.shadow.secondary,
                  }}
                >
                  Marcas confiables, stock real y envíos rápidos. Comprá{" "}
                  <Box
                    component="span"
                    sx={{
                      color: variantStyles.primary,
                      fontWeight: 700,
                    }}
                  >
                    mayorista
                  </Box>{" "}
                  o{" "}
                  <Box
                    component="span"
                    sx={{
                      color: variantStyles.secondary,
                      fontWeight: 700,
                    }}
                  >
                    minorista
                  </Box>
                  , aprendé en nuestra{" "}
                  <Box
                    component="span"
                    sx={{
                      color: variantStyles.accent,
                      fontWeight: 700,
                    }}
                  >
                    Fishing School
                  </Box>{" "}
                  y viví{" "}
                  <Box
                    component="span"
                    sx={{
                      color: variantStyles.primary,
                      fontWeight: 700,
                    }}
                  >
                    expediciones
                  </Box>{" "}
                  únicas con {variantStyles.name}.
                </Typography>
              </ConfigurableSection>

              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_NAV_BUTTONS}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_NAV_BUTTONS
                )}
                onToggleVisibility={onToggleVisibility}
              >
                <NavButtons />
              </ConfigurableSection>

              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_CHIPS}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_CHIPS
                )}
                onToggleVisibility={onToggleVisibility}
              >
                <PromotionalChips />
              </ConfigurableSection>
            </Box>
          </Fade>
        </Grid>

        <ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_SECTION}
          isConfigMode={configMode}
          isVisible={isComponentVisible(
            HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_SECTION
          )}
          onToggleVisibility={onToggleVisibility}
        >
          <PromotionalSection />
        </ConfigurableSection>
      </Grid>
    </Container>
  );
};

export default HeroSection;
