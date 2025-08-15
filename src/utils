import { createTheme, Slide, useScrollTrigger } from "@mui/material";
import { PALETTE } from "./constants";

export const createCustomTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: PALETTE.primario,
        light: "#4a7552",
        dark: "#1e3421",
      },
      secondary: {
        main: PALETTE.secundario,
        light: "#4a7a9c",
        dark: "#2a4f63",
      },
      accent: {
        main: PALETTE.acento,
        light: "#d4723a",
        dark: "#a04d1f",
      },
      background: {
        default: darkMode ? "#1a1a1a" : PALETTE.fondo,
        paper: darkMode ? "#2d2d2d" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#e9e9e9" : PALETTE.texto,
        secondary: darkMode ? "#b0b0b0" : "#666666",
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
