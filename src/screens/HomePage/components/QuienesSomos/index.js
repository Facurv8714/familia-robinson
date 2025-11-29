import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

const QuienesSomos = () => {
  // return (
  //   <Card id="quienes">
  //     <CardContent sx={{ p: 4 }}>
  //       <Box
  //         sx={{
  //           display: "flex",
  //           alignItems: "center",
  //           gap: 2,
  //           mb: 3,
  //         }}
  //       >
  //         <Avatar className="gradient-acento">
  //           <HelpOutlineIcon />
  //         </Avatar>
  //         <Typography variant="h4" sx={{ fontWeight: 800 }}>
  //           Conocé nuestra historia!
  //         </Typography>
  //       </Box>

  //       <Typography
  //         variant="body1"
  //         sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
  //       >
  //         Arrancamos con la venta desde casa allá por el 2015, luego pudimos
  //         abrir nuestro primer local en Juan María Gutiérrez, hicimos amigos,
  //         clientes y compañeros de aventuras, que nos apoyaron en nuestro
  //         proyecto y nos impulsaron a llegar a nuestro nuevo local. Crecimos
  //         rápidamente, manteniendo el foco en el cliente, sus necesidades y
  //         adaptándonos a los tiempos actuales, ampliando nuestros catálogos y
  //         sumándonos a la venta Online.
  //       </Typography>
  //     </CardContent>
  //   </Card>
  // );

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, var(--primary-color)10, var(--secondary-color)10)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                mb: 3,
                color: "var(--text-color)",
              }}
            >
              Nuestra Historia
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 3,
                color: "var(--text-color)",
              }}
            >
              Empezamos en <strong>2015</strong> vendiendo desde casa, con la
              pasión por la pesca y el outdoor corriendo por nuestras venas. Lo
              que comenzó como un sueño pequeño, creció junto a nuestros
              clientes.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 3,
                color: "var(--text-color)",
              }}
            >
              Hoy somos una <strong>comunidad outdoor</strong>, un punto de
              encuentro para quienes aman la naturaleza y buscan equipamiento de
              calidad respaldado por un servicio genuino y cercano.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
                color: "var(--text-color)",
              }}
            >
              Cada producto que vendemos lleva nuestra experiencia y compromiso.
              <strong> Te esperamos para equipar tu próxima aventura.</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QuienesSomos;
