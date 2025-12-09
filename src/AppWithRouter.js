import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { createCustomTheme } from "./utils";
import Topbar from "./components/Topbar";
import ScrollToTop from "./components/ScrollToTop";

// Importar las páginas
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import AcercaDe from "./pages/AcercaDe";
import Minorista from "./pages/Minorista";
import Mayorista from "./pages/Mayorista";
import Expediciones from "./pages/Expediciones";
import FishingSchool from "./pages/FishingSchool";

export default function App() {
  const [darkMode] = useState(false);
  const [variant, setVariant] = useState("NATURAL");

  const [hiddenComponents, setHiddenComponents] = useState(new Set());
  const theme = createCustomTheme(darkMode);

  const toggleComponentVisibility = (componentId) => {
    setHiddenComponents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(componentId)) {
        newSet.delete(componentId);
      } else {
        newSet.add(componentId);
      }
      return newSet;
    });
  };

  const isComponentVisible = (componentId) => {
    return !hiddenComponents.has(componentId);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box
          data-theme={variant === "NATURAL" ? "natural" : "default"}
          data-dark={darkMode ? "true" : "false"}
          sx={{
            minHeight: "100vh",
            background:
              variant === "NATURAL"
                ? darkMode
                  ? "linear-gradient(135deg, #1A1C23 0%, #242832 100%)"
                  : "linear-gradient(135deg, #FEF7E6 0%, #FDF2E9 100%)"
                : darkMode
                ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
                : "linear-gradient(135deg, #FFF9F9 0%, #f8f6f0 100%)", // Updated logic
          }}
        >
          {/* Header con AppBar */}
          <Topbar
            variant={variant}
            setVariant={setVariant}
            darkMode={darkMode}
          />

          {/* Rutas */}
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  variant={variant}
                  isComponentVisible={isComponentVisible}
                  onToggleVisibility={toggleComponentVisibility}
                />
              }
            />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/minorista" element={<Minorista />} />
            <Route path="/mayorista" element={<Mayorista />} />
            <Route path="/expediciones" element={<Expediciones />} />
            <Route path="/fishing-school" element={<FishingSchool />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
