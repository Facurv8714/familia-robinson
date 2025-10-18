import React from "react";
import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Estilos para los botones del carousel
const navButtonStyle = (side, isTransitioning) => ({
  position: "absolute",
  [side]: 12,
  top: "50%",
  transform: "translateY(-50%)",
  background: "linear-gradient(135deg, #FF5722 60%, #FFC107 100%)",
  color: "#212121",
  border: "3px solid #FFF",
  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  width: 56,
  height: 56,
  zIndex: 2,
  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  opacity: isTransitioning ? 0.5 : 1,
  "&:hover": {
    background: "linear-gradient(135deg, #FFC107 60%, #FF5722 100%)",
    color: "#212121",
    border: "3px solid #FFF",
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
    transform: "translateY(-50%) scale(1.12)",
  },
  "&:disabled": {
    background: `#FFCCBC`,
    color: "rgba(33,33,33,0.5)",
    border: "3px solid #FFF",
  },
});

const Carousel = ({
  carouselImages,
  currentSlide,
  isTransitioning,
  prevSlide,
  nextSlide,
  handleSmoothScroll,
  getSlideButton,
  setIsTransitioning,
  setCurrentSlide,
  setIsManualControl,
}) => {
  return (
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
          background: "var(--card-background)",
          borderRadius: 2,
          overflow: "hidden",
          border: `3px solid var(--primary-color)30`,
          boxShadow: "var(--shadow-primary)",
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
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
            background: `linear-gradient(transparent, var(--primary-color)90)`,
            p: 3,
            color: "white",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: isTransitioning ? "translateY(8px)" : "translateY(0)",
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
                window.location.href = getSlideButton(currentSlide).href; // Navigate to the respective page
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
                backgroundColor: "var(--accent-gradient) !important",
                color: "white !important",
                fontWeight: 700,
                // boxShadow: "var(--shadow-accent) !important",
                border: "2px solid var(--primary-color) !important", // Add border
                borderRadius: "8px !important", // Optional: rounded corners
                "&:hover": {
                  background: "var(--secondary-gradient) !important",
                  transform: "scale(1.1) !important", // Slightly larger on hover
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3) !important",
                },
                "&:active": {
                  transform: "scale(0.98) !important",
                },
                transition:
                  "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important",
              }}
            >
              {typeof getSlideButton(currentSlide).icon === "string" && (
                <span style={{ marginRight: "4px" }}>
                  {getSlideButton(currentSlide).icon}
                </span>
              )}
              {getSlideButton(currentSlide).text}
            </Button>
          </Box>
        </Box>

        {/* Navigation Arrows mejorados */}
        <IconButton
          onClick={prevSlide}
          disabled={isTransitioning}
          sx={navButtonStyle("left", isTransitioning)}
        >
          <ArrowBackIos sx={{ fontSize: 32 }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          disabled={isTransitioning}
          sx={navButtonStyle("right", isTransitioning)}
        >
          <ArrowForwardIos sx={{ fontSize: 32 }} />
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
                  currentSlide === index ? "white" : "rgba(255,255,255,0.5)",
                cursor: isTransitioning ? "default" : "pointer",
                transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                boxShadow:
                  currentSlide === index
                    ? "0 4px 12px rgba(255,255,255,0.3)"
                    : "none",
                "&:hover": {
                  backgroundColor: isTransitioning ? undefined : "white",
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
  );
};

export default Carousel;
