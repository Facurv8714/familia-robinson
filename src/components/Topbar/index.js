import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { PALETTE } from "../../constants";
import { HideOnScroll } from "../../utils"; // Assuming you have this utility function
const Topbar = ({ variant, setVariant, darkMode, setDarkMode }) => (
  // <HideOnScroll>
  <AppBar
    position="sticky"
    elevation={0}
    sx={{
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      color: "text.primary",
    }}
  >
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          sx={{
            background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`,
            width: 48,
            height: 48,
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          F-R
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1 }}>
            Pesca & Camping
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            Mayorista y minorista
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* Selector de variante */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
          {["A", "B", "C"].map((v) => (
            <Button
              key={v}
              size="small"
              variant={variant === v ? "contained" : "outlined"}
              onClick={() => setVariant(v)}
              sx={{ minWidth: 40 }}
            >
              {v}
            </Button>
          ))}
        </Box>

        {/* Toggle modo oscuro */}
        <IconButton onClick={() => setDarkMode(!darkMode)} color="primary">
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  // </HideOnScroll>
);

export default Topbar;
