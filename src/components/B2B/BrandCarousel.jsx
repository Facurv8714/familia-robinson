import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

/**
 * BrandCarousel Component
 * Auto-scrolling carousel for displaying brand logos
 * Professional presentation for B2B pages
 */
const BrandCarousel = ({
  brands,
  itemsToShow = 3,
  autoScrollInterval = 2500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= brands.length - itemsToShow ? 0 : prev + 1
      );
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [brands.length, itemsToShow, autoScrollInterval]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? brands.length - itemsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= brands.length - itemsToShow ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ position: "relative", py: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          minHeight: "120px",
        }}
      >
        {brands
          .slice(currentIndex, currentIndex + itemsToShow)
          .map((brand, index) => (
            <Box
              key={`${brand}-${index}`}
              sx={{
                background: "white",
                borderRadius: 3,
                p: 4,
                minWidth: { xs: "250px", md: "300px" },
                textAlign: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#1a237e",
                  letterSpacing: 1,
                }}
              >
                {brand}
              </Typography>
            </Box>
          ))}
      </Box>

      {/* Navigation buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: { xs: -10, md: 0 },
          top: "50%",
          transform: "translateY(-50%)",
          background: "white",
          boxShadow: 3,
          "&:hover": {
            background: "#e3f2fd",
          },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: -10, md: 0 },
          top: "50%",
          transform: "translateY(-50%)",
          background: "white",
          boxShadow: 3,
          "&:hover": {
            background: "#e3f2fd",
          },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default BrandCarousel;
