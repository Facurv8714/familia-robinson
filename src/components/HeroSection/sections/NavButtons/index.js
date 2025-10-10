import React from "react";
import { Box, Button } from "@mui/material";
import { Info } from "@mui/icons-material";

const NavButtons = () => {
  // Smooth scroll handler
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 90; // 10px offset to avoid topbar overlap
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon="🏪"
        onClick={(e) => {
          e.preventDefault();
          handleSmoothScroll("#mayorista");
        }}
        sx={{
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px -8px rgba(0,0,0,0.3)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        }}
      >
        Venta mayorista
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon="🛒"
        onClick={(e) => {
          e.preventDefault();
          handleSmoothScroll("#minorista");
        }}
        sx={{
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px -8px rgba(0,0,0,0.3)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        }}
      >
        Venta minorista
      </Button>
      <Button
        variant="contained"
        color="info"
        size="large"
        startIcon="🎣"
        onClick={(e) => {
          e.preventDefault();
          handleSmoothScroll("#fishing-school");
        }}
        sx={{
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px -8px rgba(0,0,0,0.3)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        }}
      >
        Fishing School
      </Button>
      <Button
        variant="contained"
        color="success"
        size="large"
        startIcon="️️️️🏕️"
        onClick={(e) => {
          e.preventDefault();
          handleSmoothScroll("#expediciones");
        }}
        sx={{
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px -8px rgba(0,0,0,0.3)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        }}
      >
        Expediciones
      </Button>
    </Box>
  );
};

export default NavButtons;
