import { createTheme, Slide, useScrollTrigger } from "@mui/material";
import "./styles/natural.css"; // Importing the natural.css file

export const createCustomTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#FF4B4B" : "#FF0000", // Static value for --color-primary
        light: darkMode ? "#FF6B6B" : "#FF4D4D", // Static value for --color-primary-light
        dark: darkMode ? "#CC0000" : "#CC0000", // Static value for --color-primary-dark
      },
      secondary: {
        main: darkMode ? "#3366CC" : "#FFD700", // Static value for --color-secondary
        light: darkMode ? "#A5D8FF" : "#FFE666", // Static value for --color-secondary-light
        dark: darkMode ? "#1971C2" : "#CCAC00", // Static value for --color-secondary-dark
      },
      accent: {
        main: darkMode ? "#FFE666" : "#0D2F6C", // Static value for --color-accent
        light: darkMode ? "#FFE066" : "#1A478F", // Static value for --color-accent-light
        dark: darkMode ? "#FFA94D" : "#092352", // Static value for --color-accent-dark
      },
      background: {
        default: darkMode ? "#1a1a1a" : "#FFF9F9", // Static value for --color-background
        paper: darkMode ? "#2d2d2d" : "#ffffff",
        alternative: darkMode ? "#252525" : "#FFF8E1", // Static value for --color-background-alternative
      },
      text: {
        primary: darkMode ? "#e9e9e9" : "#0D2F6C", // Static value for --color-text
        secondary: darkMode ? "#b0b0b0" : "#757575", // Static value for --color-text-secondary
        tertiary: darkMode ? "#888888" : "#BDBDBD", // Static value for --color-neutral
      },
      warning: {
        main: darkMode ? "#FFD43B" : "#FFC107", // Static value for --color-warning
        light: "#fff95c",
        dark: "#e6d411",
      },
      info: {
        main: darkMode ? "#A5D8FF" : "#3366CC", // Static value for --color-info
        light: darkMode ? "#74C0FC" : "#5C8FE6", // Static value for --color-info-light
        dark: "#d4722a",
      },
      success: {
        main: darkMode ? "#69DB7C" : "#4CAF50", // Static value for --color-success
        light: "#66bb6a",
        dark: "#388e3c",
      },
      error: {
        main: darkMode ? "#FF6B6B" : "#F44336", // Static value for --color-error
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
