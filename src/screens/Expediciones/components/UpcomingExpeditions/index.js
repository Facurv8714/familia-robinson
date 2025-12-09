import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import {
  Explore,
  Group,
  WhatsApp,
  LocationOn,
  CalendarToday,
} from "@mui/icons-material";
import { generateWhatsAppLink, getLevelColor } from "../../utils";

const UpcomingExpeditions = ({ expedition }) => (
  <Card
    sx={{
      width: "45%",
      borderRadius: 4,
      overflow: "hidden",
      transition: "all 0.3s ease",
      position: "relative",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
      },
    }}
  >
    {expedition.badge && (
      <Chip
        label={expedition.badge}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 2,
          background: "#ff6b35",
          color: "white !important",
          fontWeight: 700,
          fontSize: "0.9rem",
        }}
      />
    )}
    <CardMedia
      component="img"
      height="250"
      image={expedition.image}
      alt={expedition.name}
    />
    <CardContent sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <Chip
          label={expedition.level}
          size="small"
          sx={{
            background: getLevelColor(expedition.level),
            color: "white !important",
            fontWeight: 600,
          }}
        />
        <Chip
          sx={{
            background: getLevelColor(expedition.level),
            color: "white !important",
            fontWeight: 600,
          }}
          icon={<LocationOn sx={{ fontSize: 16 }} />}
          label={expedition.location}
          size="small"
          variant="outlined"
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: "#2c3e50 !important",
        }}
      >
        {expedition.name}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <CalendarToday sx={{ fontSize: 18, color: "#546e7a !important" }} />
          <Typography variant="body2" sx={{ color: "#546e7a !important" }}>
            {expedition.date}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Explore sx={{ fontSize: 18, color: "#546e7a !important" }} />
          <Typography variant="body2" sx={{ color: "#546e7a !important" }}>
            {expedition.duration}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Group sx={{ fontSize: 18, color: "#546e7a !important" }} />
          <Typography variant="body2" sx={{ color: "#546e7a !important" }}>
            Quedan {expedition.available} de {expedition.total} lugares
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "#ff6b35 !important",
          }}
        >
          {expedition.price}
        </Typography>
        <Button
          variant="contained"
          endIcon={<WhatsApp />}
          href={generateWhatsAppLink(
            `Hola! Quiero reservar un lugar en: ${expedition.name}`
          )}
          target="_blank"
          sx={{
            background: "#ff6b35",
            fontWeight: 700,
            "&::after": { content: "none", display: "none" },
            "&:hover": {
              background: "#1da851 !important",
              color: "#FFF !important",
              transform: "scale(1.02)",
            },
          }}
        >
          Reservar cupo
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default UpcomingExpeditions;
