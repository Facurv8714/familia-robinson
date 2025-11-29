import React from "react";
import { Box, Typography } from "@mui/material";

/**
 * ProcessTimeline Component
 * Displays a horizontal timeline of steps/process
 * Perfect for explaining how businesses work with the company
 */
const ProcessTimeline = ({ steps }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: { xs: "block", md: "flex" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      {steps.map((step, index) => (
        <Box
          key={step.step || index}
          className="process-step"
          sx={{
            flex: 1,
            textAlign: "center",
            position: "relative",
            mb: { xs: 6, md: 0 },
          }}
        >
          {/* Connector line (desktop only) */}
          {index < steps.length - 1 && (
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: "60px",
                left: "calc(50% + 40px)",
                width: "calc(100% - 80px)",
                height: "3px",
                background: "linear-gradient(to right, #1565c0, #42a5f5)",
                zIndex: 0,
              }}
            />
          )}

          {/* Circle with step number */}
          <Box
            className="step-circle"
            sx={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1565c0, #42a5f5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              mb: 3,
              boxShadow: "0 8px 24px rgba(21, 101, 192, 0.3)",
              position: "relative",
              zIndex: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1) rotate(5deg)",
                boxShadow: "0 12px 32px rgba(21, 101, 192, 0.5)",
              },
            }}
          >
            <Box sx={{ color: "white", mb: 1 }}>{step.icon}</Box>
            <Typography variant="h4" sx={{ color: "white", fontWeight: 800 }}>
              {step.step || index + 1}
            </Typography>
          </Box>

          {/* Step title and description */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1.5,
              color: "#1a237e",
            }}
          >
            {step.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#546e7a",
              lineHeight: 1.7,
              px: 2,
            }}
          >
            {step.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProcessTimeline;
