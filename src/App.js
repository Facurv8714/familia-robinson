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

// Importar las páginas
import HomePage from "./pages/HomePage";
import Mayorista from "./pages/Mayorista";
import Minorista from "./pages/Minorista";
import FishingSchool from "./pages/FishingSchool";
import Expediciones from "./pages/Expediciones";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          data-theme="natural"
          data-dark={darkMode ? "true" : "false"}
          sx={{
            minHeight: "100vh",
            background: darkMode
              ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"
              : "linear-gradient(135deg, #FEF7E6 0%, #FDF2E9 100%)",
          }}
        >
          {/* Header con AppBar */}
          <Topbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            configMode={configMode}
            setConfigMode={setConfigMode}
          />

          {/* Rutas */}
          <Box sx={{ paddingTop: "12px" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    configMode={configMode}
                    isComponentVisible={isComponentVisible}
                    onToggleVisibility={toggleComponentVisibility}
                  />
                }
              />
              <Route path="/mayorista" element={<Mayorista />} />
              <Route path="/minorista" element={<Minorista />} />
              <Route path="/fishing-school" element={<FishingSchool />} />
              <Route path="/expediciones" element={<Expediciones />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
