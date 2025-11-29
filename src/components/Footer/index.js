import React from "react";
import { Paper, Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={0}
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        background: "transparent",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            © Familia Robinson
          </Box>{" "}
          · Casa de pesca · Juan Maria Guitierrez Calle 413 N°441
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography
            variant="body2"
            component="a"
            href="#"
            sx={{ textDecoration: "underline", color: "text.secondary" }}
          >
            Cambios y devoluciones
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            sx={{ textDecoration: "underline", color: "text.secondary" }}
          >
            Términos y condiciones
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
