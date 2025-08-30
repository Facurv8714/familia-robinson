import React from "react";
import { Box, IconButton, Tooltip, Fade, Collapse } from "@mui/material";
import { Visibility, VisibilityOff, Settings } from "@mui/icons-material";
import { PALETTE } from "../../constants";

const ConfigurableSection = ({
  children,
  sectionId,
  isConfigMode,
  isVisible,
  onToggleVisibility,
  sx = {},
  collapsible = true, // Nueva prop para controlar si debe colapsar
}) => {
  // Si no está en modo configuración y no es visible, no renderizar nada
  if (!isVisible && !isConfigMode) {
    return null;
  }

  // Si está en modo configuración pero no es visible, mostrar placeholder compacto
  if (!isVisible && isConfigMode) {
    return (
      <Box
        sx={{
          position: "relative",
          border: `2px dashed ${PALETTE.error}`,
          borderRadius: 2,
          margin: 1,
          transition: "all 0.3s ease",
          minHeight: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: `${PALETTE.error}08`,
          ...sx,
        }}
      >
        <Fade in={true} timeout={300}>
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1000,
              display: "flex",
              gap: 1,
            }}
          >
            <Tooltip title="Mostrar sección" arrow placement="left">
              <IconButton
                onClick={() => onToggleVisibility(sectionId)}
                sx={{
                  backgroundColor: PALETTE.error,
                  color: "white",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    backgroundColor: PALETTE.error + "dd",
                    transform: "scale(1.1)",
                  },
                  boxShadow: `0 4px 12px ${PALETTE.error}40`,
                  transition: "all 0.3s ease",
                }}
              >
                <VisibilityOff fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Configurar sección" arrow placement="left">
              <IconButton
                sx={{
                  backgroundColor: PALETTE.primario,
                  color: "white",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    backgroundColor: PALETTE.primario + "dd",
                    transform: "scale(1.1)",
                  },
                  boxShadow: `0 4px 12px ${PALETTE.primario}40`,
                  transition: "all 0.3s ease",
                }}
              >
                <Settings fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Fade>

        <Box
          sx={{
            color: PALETTE.error,
            fontWeight: 600,
            fontSize: "0.9rem",
            textAlign: "center",
            opacity: 0.8,
            pr: 10, // Espacio para los botones
          }}
        >
          📦 {sectionId} (oculta)
        </Box>
      </Box>
    );
  }

  // Componente visible
  return (
    <Collapse
      in={isVisible}
      timeout={collapsible ? 500 : 0}
      unmountOnExit={!isConfigMode} // Desmontar cuando no está en modo config para liberar espacio
      sx={{
        transition: collapsible
          ? "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          : "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          transition: "all 0.3s ease",
          ...sx,
        }}
      >
        {isConfigMode && (
          <Fade in={isConfigMode} timeout={300}>
            <Box
              sx={{
                position: "absolute",
                top: -8,
                right: -8,
                zIndex: 1000,
                display: "flex",
                gap: 1,
              }}
            >
              <Tooltip title="Ocultar sección" arrow placement="left">
                <IconButton
                  onClick={() => onToggleVisibility(sectionId)}
                  sx={{
                    backgroundColor: PALETTE.success,
                    color: "white",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      backgroundColor: PALETTE.success + "dd",
                      transform: "scale(1.1)",
                    },
                    boxShadow: `0 4px 12px ${PALETTE.success}40`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Visibility />
                </IconButton>
              </Tooltip>

              <Tooltip title="Configurar sección" arrow placement="left">
                <IconButton
                  sx={{
                    backgroundColor: PALETTE.primario,
                    color: "white",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      backgroundColor: PALETTE.primario + "dd",
                      transform: "scale(1.1)",
                    },
                    boxShadow: `0 4px 12px ${PALETTE.primario}40`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Settings />
                </IconButton>
              </Tooltip>
            </Box>
          </Fade>
        )}

        {children}
      </Box>
    </Collapse>
  );
};

export default ConfigurableSection;
