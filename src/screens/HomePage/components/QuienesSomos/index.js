import React from "react";
import { Card, CardContent, Box, Avatar, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const QuienesSomos = () => {
  return (
    <Card id="quienes">
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <Avatar className="gradient-acento">
            <HelpOutlineIcon />
          </Avatar>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Conocé nuestra historia!
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Arrancamos con la venta desde casa allá por el 2015, luego pudimos
          abrir nuestro primer local en Juan María Gutiérrez, hicimos amigos,
          clientes y compañeros de aventuras, que nos apoyaron en nuestro
          proyecto y nos impulsaron a llegar a nuestro nuevo local. Crecimos
          rápidamente, manteniendo el foco en el cliente, sus necesidades y
          adaptándonos a los tiempos actuales, ampliando nuestros catálogos y
          sumándonos a la venta Online.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuienesSomos;
