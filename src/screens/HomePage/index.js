import React from "react";
import { Container, Grid, Box, Fab } from "@mui/material";
import { Phone } from "@mui/icons-material";
import HeroSection from "./components/HeroSection";

import Contacto from "./components/Contacto";
import Footer from "../../components/Footer";
import QuienesSomos from "./components/QuienesSomos";
import Atencion from "./components/Atencion";
import BusinessCardsSection from "./components/Sections/BusinessCardsSection";

const scrollToContact = (event) => {
  event.preventDefault();
  const contactSection = document.querySelector("#contacto");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HomePage({
  variant,
  isComponentVisible,
  onToggleVisibility,
}) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        variant={variant}
        isComponentVisible={isComponentVisible}
        onToggleVisibility={onToggleVisibility}
      />

      {/* Sección Quiénes somos */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <QuienesSomos />
        </Grid>
      </Container>

      {/* Sección Mayorista/Minorista/Fishing School/Expediciones */}
      <BusinessCardsSection
        isComponentVisible={isComponentVisible}
        onToggleVisibility={onToggleVisibility}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          gap: 1,
          mb: 4,
          pl: 16,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Atencion />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Contacto />
        </Box>
      </Box>

      {/* Footer */}

      <Footer />

      {/* Floating Action Button */}

      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: `#FFF`,
          "&:hover": {
            background: `linear-gradient(135deg, #FF0000dd, #FFD700dd)`,
          },
        }}
        onClick={scrollToContact}
      >
        <Phone />
      </Fab>
    </>
  );
}
