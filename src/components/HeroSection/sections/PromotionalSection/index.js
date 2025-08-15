import React from "react";
import { Grid, Card, CardContent, Avatar, Typography } from "@mui/material";
import { PALETTE } from "../../../../constants";

const PromotionalSection = () => (
  <Grid item xs={12} md={6}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ textAlign: "center", height: "100%" }}>
          <CardContent>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
                background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.destacado})`,
                fontSize: "1.5rem",
              }}
            >
              🎣
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Reeles y cañas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Marcas líderes del mercado
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ textAlign: "center", height: "100%" }}>
          <CardContent>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
                background: `linear-gradient(135deg, ${PALETTE.secundario}, ${PALETTE.destacado})`,
                fontSize: "1.5rem",
              }}
            >
              ⛺
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Carpas y bolsas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Para todas las estaciones
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ textAlign: "center", height: "100%" }}>
          <CardContent>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
                background: `linear-gradient(135deg, ${PALETTE.acento}, ${PALETTE.primario})`,
                fontSize: "1.5rem",
              }}
            >
              🧥
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Indumentaria
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Impermeables y técnica
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Grid>
);

export default PromotionalSection;
