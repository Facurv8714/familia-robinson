import React from "react";
import { Container, Grid, Box, Fab } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { HIDEABLE_COMPONENTS } from "../../constants";
import HeroSection from "./components/HeroSection";
import ConfigurableSection from "./components/ConfigurableSection";
import ConfigurableGridItem from "./components/ConfigurableGridItem";
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
  configMode,
  isComponentVisible,
  onToggleVisibility,
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
      <BusinessCardsSection
        configMode={configMode}
        isComponentVisible={isComponentVisible}
        onToggleVisibility={onToggleVisibility}
      />

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
            <QuienesSomos />
          </ConfigurableGridItem>
        </Grid>
      </Container>

      {/* CTA Final */}
      {/* <ConfigurableSection
        sectionId={HIDEABLE_COMPONENTS.CTA_FINAL}
        isConfigMode={configMode}
        isVisible={isComponentVisible(HIDEABLE_COMPONENTS.CTA_FINAL)}
        onToggleVisibility={onToggleVisibility}
      >
        <Cotizar />
      </ConfigurableSection> */}

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
      <ConfigurableSection
        sectionId={HIDEABLE_COMPONENTS.FOOTER}
        isConfigMode={configMode}
        isVisible={isComponentVisible(HIDEABLE_COMPONENTS.FOOTER)}
        onToggleVisibility={onToggleVisibility}
      >
        <Footer />
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
            background: `#FFF`,
            "&:hover": {
              background: `linear-gradient(135deg, #FF0000dd, #FFD700dd)`,
            },
          }}
          onClick={scrollToContact}
        >
          <Phone />
        </Fab>
      </ConfigurableSection>
    </>
  );
}
