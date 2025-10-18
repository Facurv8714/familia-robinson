import React from "react";
import { Box, Typography } from "@mui/material";
import logoRobinson from "../../../../../../images/logo-robinson.png";

const Presentacion = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 3,
        borderRadius: 3,
        background: "var(--card-background)",
        boxShadow: "var(--shadow-primary)",
        border: `2px solid var(--primary-color)20`,
      }}
    >
      <Box
        component="img"
        src={logoRobinson}
        alt="Logo Robinson"
        sx={{
          width: { xs: 100, md: 140 },
          height: { xs: 100, md: 140 },
          objectFit: "contain",
          filter: `drop-shadow(0 8px 16px var(--primary-color)30)`,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05) rotate(2deg)",
            filter: `drop-shadow(0 12px 24px var(--primary-color)40)`,
          },
        }}
      />
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "var(--text-color)",
            lineHeight: 1,
            fontSize: { xs: "2rem", md: "2.5rem" },
            textShadow: `2px 2px 4px var(--primary-color)20`,
          }}
        >
          Familia Robinson
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "var(--text-secondary-color)",
            fontWeight: 500,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          Casa de Pesca
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "var(--text-secondary-color)",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.2rem" },
            mt: 2,
          }}
        >
          Desde pequeños recibimos de nuestros padres y abuelos la pasión por la
          pesca, fue así que comenzó nuestro sueño de ser una casa de pesca que
          priorice al cliente con el que compartimos nuestra pasión.
        </Typography>
      </Box>
    </Box>
  );
};

export default Presentacion;
