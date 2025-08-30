import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { PALETTE, VARIANTS, getVariantStyles } from "../../constants";
import logoRobinson from "../../images/logo-robinson.svg";
// import { HideOnScroll } from "../../utils"; // Assuming you have this utility function
const Topbar = ({ variant, setVariant, darkMode, setDarkMode }) => {
  const currentVariant = getVariantStyles(variant);

  return (
    // <HideOnScroll>
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: darkMode
          ? "rgba(0,0,0,0.9)"
          : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${currentVariant.primary}20`,
        color: "text.primary",
        boxShadow: currentVariant.shadow.secondary,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src={logoRobinson}
            alt="Logo Robinson"
            sx={{
              width: 48,
              height: 48,
              objectFit: "contain",
              filter: `drop-shadow(0 2px 8px ${currentVariant.primary}40)`,
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                lineHeight: 1,
                color: currentVariant.textColor,
                textShadow: `1px 1px 2px ${currentVariant.primary}20`,
              }}
            >
              Familia Robinson
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: currentVariant.textSecondary,
                fontWeight: 500,
              }}
            >
              Casa de Pesca
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Selector de variante mejorado */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {["A", "B", "C", "D", "E"].map((v) => {
              const variantData = VARIANTS[v];
              const isActive = variant === v;

              return (
                <Tooltip
                  key={v}
                  title={`${variantData.name} - ${variantData.description}`}
                  arrow
                  placement="bottom"
                >
                  <Button
                    size="small"
                    variant={isActive ? "contained" : "outlined"}
                    onClick={() => setVariant(v)}
                    sx={{
                      minWidth: 44,
                      height: 36,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      background: isActive
                        ? variantData.gradient.primary
                        : "transparent",
                      borderColor: variantData.primary,
                      color: isActive ? "white" : variantData.textColor,
                      boxShadow: isActive ? variantData.shadow.primary : "none",
                      "&:hover": {
                        background: isActive
                          ? variantData.gradient.primary
                          : `${variantData.primary}10`,
                        transform: "scale(1.05)",
                        boxShadow: variantData.shadow.accent,
                        color: isActive ? "white" : variantData.primary,
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {v}
                  </Button>
                </Tooltip>
              );
            })}
          </Box>{" "}
          {/* Toggle modo oscuro */}
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              color: currentVariant.primary,
              background: `${currentVariant.primary}10`,
              "&:hover": {
                background: `${currentVariant.primary}20`,
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
