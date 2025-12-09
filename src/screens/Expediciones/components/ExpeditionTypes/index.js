import React from "react";
import { Box, Typography, Card, Chip } from "@mui/material";

import "../../Expediciones.css";

import { getLevelColor } from "../../utils";

const ExpeditionTypes = ({ index, type }) => (
  <Card
    className="expedition-card"
    sx={{
      width: "45%",
      height: 400,
      position: "relative",
      borderRadius: 4,
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.3s ease",
      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      "&:hover": {
        transform: "translateY(-10px) scale(1.02)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        "& .expedition-overlay": {
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
        },
        "& .expedition-image": {
          transform: "scale(1.1)",
        },
      },
    }}
  >
    <Box
      className="expedition-image"
      component="img"
      src={type.image}
      alt={type.title}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease",
      }}
    />
    <Box
      className="expedition-overlay"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        p: 3,
        transition: "all 0.3s ease",
      }}
    >
      <Chip
        label={type.level}
        size="small"
        sx={{
          mb: 2,
          width: "fit-content",
          background: getLevelColor(type.level),
          color: "white !important",
          fontWeight: 700,
        }}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "white !important",
          mb: 1,
        }}
      >
        {type.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#ff6b35 !important",
          fontWeight: 600,
          mb: 1,
        }}
      >
        {type.subtitle}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.9) !important",
          lineHeight: 1.6,
        }}
      >
        {type.description}
      </Typography>
    </Box>
  </Card>
);

export default ExpeditionTypes;
