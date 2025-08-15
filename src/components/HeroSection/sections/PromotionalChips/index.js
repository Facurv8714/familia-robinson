import React from "react";
import { Box, Chip } from "@mui/material";
import { PALETTE } from "../../../../constants";

const PromotionalChips = () => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
    <Chip
      label="🔥 Descuentos por volumen"
      color="primary"
      variant="outlined"
    />
    <Chip label="⚡ Envíos 24/72 hs" color="secondary" variant="outlined" />
    <Chip
      label="👨‍💼 Atención especializada"
      sx={{
        borderColor: PALETTE.acento,
        color: PALETTE.acento,
      }}
      variant="outlined"
    />
  </Box>
);

export default PromotionalChips;
