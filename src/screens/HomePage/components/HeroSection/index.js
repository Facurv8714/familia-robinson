import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Fade,
  Grid,
  Typography,
  // IconButton,
  // Paper,
  // Button,
} from "@mui/material";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Presentacion from "./Components/Presentacion/index.js";
// import NavButtons from "./sections/NavButtons";
import ConfigurableSection from "../ConfigurableSection";
import Carousel from "./Components/Carousel/index.js";

import { carouselImages, HIDEABLE_COMPONENTS } from "../../../../constants";
// import logoRobinson from "../../images/logo-robinson.png";

const HeroSection = ({
  configMode = false,
  isComponentVisible = () => true,
  onToggleVisibility = () => {},
}) => {
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
        text: "Ir a minorista",
        href: "/minorista",
        icon: "🛒",
        color: "secondary",
      },
      {
        text: "Ir a mayorista",
        href: "/mayorista",
        icon: "🏪",
        color: "primary",
      },
      {
        text: "Ir a Fishing School",
        href: "/fishing-school",
        icon: "🎣",
        color: "custom",
      },
      {
        text: "Ir a Expediciones",
        href: "/expediciones",
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
        padding: "14px 0 !important",
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
        borderRadius: 4,
        margin: "auto",
        mt: 2,
        boxShadow: "var(--shadow-secondary)",
      }}
      className="gradient-hero"
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Fade in timeout={1100}>
            <Box
              sx={{ display: "flex", gridGap: "16px", flexDirection: "column" }}
            >
              {/* Logo Robinson */}
              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_CHIPS}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_CHIPS
                )}
                onToggleVisibility={onToggleVisibility}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  border: "2px solid #FF4500",
                }}
              >
                <Presentacion />
              </ConfigurableSection>

              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_MAIN_TITLE}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_MAIN_TITLE
                )}
                onToggleVisibility={onToggleVisibility}
              >
                <Typography
                  variant="h1"
                  sx={{
                    mt: "24px",
                    color: "var(--text-color)",
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontWeight: 900,
                    textShadow: `3px 3px 6px var(--primary-color)25`,
                    "&:hover": {
                      transform: "scale(1.02)",
                      textShadow: `4px 4px 8px var(--primary-color)35`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Disfrutá tu nueva aventura
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
              >
                <Carousel
                  carouselImages={carouselImages}
                  currentSlide={currentSlide}
                  isTransitioning={isTransitioning}
                  prevSlide={prevSlide}
                  nextSlide={nextSlide}
                  handleSmoothScroll={handleSmoothScroll}
                  getSlideButton={getSlideButton}
                  setIsTransitioning={setIsTransitioning}
                  setCurrentSlide={setCurrentSlide}
                  setIsManualControl={setIsManualControl}
                />
              </ConfigurableSection>

              <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_DESCRIPTION}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_DESCRIPTION
                )}
                onToggleVisibility={onToggleVisibility}
              >
                <Typography
                  variant="h5"
                  sx={{
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: "var(--text-color)",
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: "var(--background-color)",
                    border: `2px solid var(--primary-color)20`,
                    boxShadow: "var(--shadow-secondary)",
                  }}
                >
                  Marcas confiables, stock real y envíos rápidos. Comprá{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "var(--primary-color)",
                      fontWeight: 700,
                    }}
                  >
                    mayorista
                  </Box>{" "}
                  o{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "var(--secondary-color)",
                      fontWeight: 700,
                    }}
                  >
                    minorista
                  </Box>
                  , aprendé en nuestra{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "var(--accent-color)",
                      fontWeight: 700,
                    }}
                  >
                    Fishing School
                  </Box>{" "}
                  y viví{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "var(--primary-color)",
                      fontWeight: 700,
                    }}
                  >
                    expediciones
                  </Box>{" "}
                  únicas con{" "}
                  <Box
                    component="span"
                    sx={{ color: "var(--primary-color)", fontWeight: 700 }}
                  >
                    nuestro estilo único
                  </Box>
                  .
                </Typography>
              </ConfigurableSection>

              {/* <ConfigurableSection
                sectionId={HIDEABLE_COMPONENTS.HERO_NAV_BUTTONS}
                isConfigMode={configMode}
                isVisible={isComponentVisible(
                  HIDEABLE_COMPONENTS.HERO_NAV_BUTTONS
                )}
                onToggleVisibility={onToggleVisibility}
              >
                <NavButtons />
              </ConfigurableSection> */}
            </Box>
          </Fade>
        </Grid>

        {/* <ConfigurableSection
          sectionId={HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_SECTION}
          isConfigMode={configMode}
          isVisible={isComponentVisible(
            HIDEABLE_COMPONENTS.HERO_PROMOTIONAL_SECTION
          )}
          onToggleVisibility={onToggleVisibility}
        >
          <PromotionalSection />
        </ConfigurableSection> */}
      </Grid>
    </Container>
  );
};

export default HeroSection;
