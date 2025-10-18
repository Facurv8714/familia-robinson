import React from "react";
import {
  Container,
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { Phone } from "@mui/icons-material";

const Cotizar = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Card
        sx={{
          background: `linear-gradient(135deg, #FFF9F9f0, #FFF9F980)`,
        }}
      >
        <CardContent sx={{ p: 6, textAlign: "center" }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: "auto",
              mb: 3,
              background: `linear-gradient(135deg, #FF0000, #FFD700)`,
              fontSize: "2rem",
            }}
          >
            💬
          </Avatar>

          <Typography
            variant="h3"
            sx={{
              mb: 2,
              background: `linear-gradient(135deg, #FF0000, #FFD700)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
            }}
          >
            ¿Listo para cotizar?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Contanos qué necesitás y te respondemos en el día hábil con la mejor
            propuesta del mercado.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Phone />}
            href="#contacto"
            sx={{ px: 4, py: 2, fontSize: "1.1rem" }}
          >
            Contactar ahora
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Cotizar;
