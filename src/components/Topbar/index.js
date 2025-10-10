import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import {
  LightMode,
  DarkMode,
  Settings,
  SettingsBackupRestore,
  Home,
  Inventory,
  Info,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import logoRobinson from "../../images/logo-robinson.png";
import "../../styles/natural.css"; // Importing the natural.css file

const Topbar = ({ darkMode, setDarkMode, configMode, setConfigMode }) => {
  const location = useLocation();

  const navigationItems = [
    { label: "Inicio", path: "/", icon: <Home /> },
    { label: "Mayorista", path: "/mayorista", icon: <Inventory /> },
    { label: "Minorista", path: "/minorista", icon: <Inventory /> },
    { label: "Fishing School", path: "/fishing-school", icon: <Info /> },
    { label: "Expediciones", path: "/expediciones", icon: <Info /> },
  ];

  return (
    // <HideOnScroll>
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "none", // Explicitly unset any background property
        backgroundColor: darkMode ? "#000000 !important" : "#FFFFFF !important", // Use !important to ensure it is not overridden
        color: darkMode ? "#FFFFFF" : "#000000", // Adjust text color accordingly
        borderBottom: "1px solid",
        borderColor: darkMode ? "#333333" : "#DDDDDD", // Subtle border for separation
        opacity: 1,
        pt: 2,
        pb: 2,
      }}
      className={`${darkMode ? "text-white" : "text-black"}`}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              component="img"
              src={logoRobinson}
              alt="Logo Robinson"
              sx={{
                width: 48,
                height: 48,
                objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
              }}
            />
            {/* <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "text.primary",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Familia Robinson
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                }}
              >
                Casa de Pesca
              </Typography>
            </Box> */}
          </Box>

          {/* Navegación */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 4 }}>
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                variant={location.pathname === item.path ? "contained" : "text"}
                size="x-small"
                className={`${
                  location.pathname === item.path
                    ? "text-white bg-primary"
                    : "text-black"
                } rounded-md px-2 py-1 transition-all duration-300 ease-in-out`}
                sx={{
                  border:
                    location.pathname === item.path ? "2px solid red" : "none",
                  "&:hover": {
                    backgroundColor:
                      location.pathname === item.path ? "#FFCDD2" : "#E3F2FD",
                    color:
                      location.pathname === item.path ? "#B71C1C" : "#0D47A1",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>{" "}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Modo configuración */}
          {configMode && (
            <Chip
              label="Modo Configuración Activo"
              color="warning"
              size="small"
              sx={{
                fontWeight: 600,
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0.7 },
                  "100%": { opacity: 1 },
                },
                mr: 1,
              }}
            />
          )}

          {/* Toggle modo configuración */}
          <Tooltip
            title={
              configMode
                ? "Salir del modo configuración"
                : "Activar modo configuración"
            }
            arrow
          >
            <IconButton
              onClick={() => setConfigMode(!configMode)}
              sx={{
                color: configMode ? "warning.main" : "primary.main",
                background: configMode
                  ? "rgba(255,193,7,0.2)"
                  : "rgba(3,169,244,0.1)",
                "&:hover": {
                  background: configMode
                    ? "rgba(255,193,7,0.3)"
                    : "rgba(3,169,244,0.2)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.3s ease",
                border: configMode ? "2px solid warning.main" : "none",
                animation: configMode ? "configPulse 2s infinite" : "none",
                "@keyframes configPulse": {
                  "0%": {
                    boxShadow: `0 0 0 0 rgba(255,193,7,0.4)`,
                  },
                  "70%": {
                    boxShadow: `0 0 0 10px transparent`,
                  },
                  "100%": {
                    boxShadow: `0 0 0 0 transparent`,
                  },
                },
              }}
            >
              {configMode ? <SettingsBackupRestore /> : <Settings />}
            </IconButton>
          </Tooltip>

          {/* Toggle modo oscuro */}
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              color: "primary.main",
              background: "rgba(3,169,244,0.1)",
              "&:hover": {
                background: "rgba(3,169,244,0.2)",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    // </HideOnScroll>
  );
};

export default Topbar;
