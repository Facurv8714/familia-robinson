import React from "react";
import { Box, Button } from "@mui/material";
import { Info, ShoppingCart, Warehouse } from "@mui/icons-material";

const NavButtons = () => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<Warehouse />}
      href="#mayorista"
    >
      Venta mayorista
    </Button>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      startIcon={<ShoppingCart />}
      href="#minorista"
    >
      Venta minorista
    </Button>
    <Button
      variant="outlined"
      color="primary"
      size="large"
      startIcon="🎓"
      href="#fishing-school"
    >
      Fishing School
    </Button>
    <Button
      variant="outlined"
      color="primary"
      size="large"
      startIcon={<Info />}
      href="#quienes"
      // Quienes somos
      // o conocenos
    >
      Conocenos
    </Button>
  </Box>
);

export default NavButtons;
