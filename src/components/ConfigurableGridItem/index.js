import React from "react";
import { Grid } from "@mui/material";
import ConfigurableSection from "../ConfigurableSection";

const ConfigurableGridItem = ({
  children,
  sectionId,
  isConfigMode,
  isVisible,
  onToggleVisibility,
  gridProps = { xs: 12, md: 6 },
  ...otherProps
}) => {
  // Si no está en modo configuración y no es visible, no renderizar nada
  if (!isVisible && !isConfigMode) {
    return null;
  }

  return (
    <Grid item {...gridProps} {...otherProps}>
      <ConfigurableSection
        sectionId={sectionId}
        isConfigMode={isConfigMode}
        isVisible={isVisible}
        onToggleVisibility={onToggleVisibility}
        collapsible={true}
      >
        {children}
      </ConfigurableSection>
    </Grid>
  );
};

export default ConfigurableGridItem;
