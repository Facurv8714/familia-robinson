import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { createCustomTheme } from "./utils";
import Topbar from "./components/Topbar";
import ScrollToTop from "./components/ScrollToTop";

// Importar las páginas
import HomePage from "./screens/HomePage";
import Minorista from "./screens/Minorista";
import Mayorista from "./screens/Mayorista";
import FishingSchool from "./screens/FishingSchool";
import Expediciones from "./pages/Expediciones";

export default function App() {
  const [hiddenComponents, setHiddenComponents] = useState(new Set());
  const theme = createCustomTheme();

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
          data-theme="natural"
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #FEF7E6 0%, #FDF2E9 100%)",
          }}
        >
          {/* Header con AppBar */}
          <Topbar />

          {/* Rutas */}
          <Box sx={{ paddingTop: "12px" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    isComponentVisible={isComponentVisible}
                    onToggleVisibility={toggleComponentVisibility}
                  />
                }
              />
              <Route path="/mayorista" element={<Mayorista />} />
              <Route path="/minorista" element={<Minorista />} />
              <Route path="/fishing-school" element={<FishingSchool />} />
              <Route path="/expediciones" element={<Expediciones />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
