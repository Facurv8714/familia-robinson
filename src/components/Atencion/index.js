import React from "react";
import {
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const Atencion = () => {
  return (
    <Card
      sx={{
        margin: "auto",
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          p: 4,
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <Avatar
            sx={{
              width: 48,
              height: 48,
              background: `linear-gradient(135deg, #FFD700, #FF4500)`,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <LocationOn sx={{ fontSize: "1.5rem", color: "white" }} />
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#333",
            }}
          >
            Atención
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1rem",
            color: "#555",
            lineHeight: 1.6,
          }}
        >
          Encontrános en nuestro local:
          <br />
          <strong>Calle 413 N°441, Juan Maria Guitierrez</strong>
        </Typography>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3275.193341132427!2d-58.1833786!3d-34.8262311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a327b7cafd1469%3A0xdcb6a9a5262c8ae8!2sCasa%20de%20Pesca%20Robinson!5e0!3m2!1ses!2sar!4v1760129697878!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación Casa de Pesca Robinson"
        />

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
            }}
            href="https://maps.app.goo.gl/Ce5MgdHbD6aHCoM39?g_st=aw"
            target="_blank"
          >
            Ver en Google Maps
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Atencion;
