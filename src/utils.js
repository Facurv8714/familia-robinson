import { createTheme, Slide, useScrollTrigger } from "@mui/material";
import { PALETTE } from "./constants";

export const createCustomTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: PALETTE.primario, // Púrpura del logo
        light: PALETTE.primarioClaro,
        dark: PALETTE.primarioOscuro,
      },
      secondary: {
        main: PALETTE.secundario, // Celeste del logo
        light: PALETTE.secundarioClaro,
        dark: "#87b4d9", // Versión más oscura del celeste
      },
      accent: {
        main: PALETTE.acento, // Naranja cálido del logo
        light: PALETTE.acentoClaro,
        dark: "#d4722a", // Versión más oscura del naranja
      },
      background: {
        default: darkMode ? "#1a1a1a" : PALETTE.fondo,
        paper: darkMode ? "#2d2d2d" : "#ffffff",
        alternative: darkMode ? "#252525" : PALETTE.fondoAlternativo,
      },
      text: {
        primary: darkMode ? "#e9e9e9" : PALETTE.texto,
        secondary: darkMode ? "#b0b0b0" : PALETTE.textoSecundario,
        tertiary: darkMode ? "#888888" : PALETTE.neutro,
      },
      // Colores personalizados adicionales
      warning: {
        main: PALETTE.destacado, // Amarillo brillante del logo
        light: "#fff95c",
        dark: "#e6d411",
      },
      info: {
        main: PALETTE.secundario, // Celeste del logo para info
        light: PALETTE.secundarioClaro,
        dark: "#87b4d9",
      },
      success: {
        main: PALETTE.success,
        light: "#66bb6a",
        dark: "#388e3c",
      },
      error: {
        main: PALETTE.error,
        light: "#f66",
        dark: "#d32f2f",
      },
    },
    typography: {
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      h1: {
        fontWeight: 900,
        fontSize: "3.5rem",
        lineHeight: 1.1,
      },
      h2: {
        fontWeight: 800,
        fontSize: "2.5rem",
      },
      h3: {
        fontWeight: 700,
        fontSize: "1.8rem",
      },
      button: {
        fontWeight: 600,
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            padding: "12px 24px",
            fontSize: "1rem",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
          },
        },
      },
    },
  });

export function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
