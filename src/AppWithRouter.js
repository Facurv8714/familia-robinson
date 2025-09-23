import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { PALETTE, getVariantStyles } from "./constants";
import { createCustomTheme } from "./utils";
import Topbar from "./components/Topbar";

// Importar las páginas
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import AcercaDe from "./pages/AcercaDe";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [variant, setVariant] = useState("NATURAL");
  const [configMode, setConfigMode] = useState(false);
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

  // Obtener los estilos de la variante actual
  const currentVariant = getVariantStyles(variant);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
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
                : `linear-gradient(135deg, ${currentVariant.background} 0%, #f8f6f0 100%)`,
          }}
        >
          {/* Header con AppBar */}
          <Topbar
            variant={variant}
            setVariant={setVariant}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            configMode={configMode}
            setConfigMode={setConfigMode}
          />

          {/* Rutas */}
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  variant={variant}
                  configMode={configMode}
                  isComponentVisible={isComponentVisible}
                  onToggleVisibility={toggleComponentVisibility}
                />
              }
            />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
