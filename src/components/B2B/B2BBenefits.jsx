import React from "react";
import { Grid, Card, Box, Typography } from "@mui/material";

/**
 * B2BBenefits Component
 * Displays business benefits in a professional grid layout
 * Used for mayorista/B2B pages
 */
const B2BBenefits = ({ benefits }) => {
  return (
    <Grid container spacing={4}>
      {benefits.map((benefit, index) => (
        <Grid item xs={12} sm={6} md={4} key={benefit.id || index}>
          <Card
            className="b2b-benefit-card"
            sx={{
              height: "100%",
              p: 4,
              textAlign: "center",
              borderRadius: 3,
              border: "2px solid #e0e0e0",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-12px)",
                boxShadow: `0 16px 48px ${benefit.color}25`,
                borderColor: benefit.color,
                "& .benefit-icon": {
                  color: benefit.color,
                  transform: "scale(1.15) rotate(5deg)",
                },
              },
            }}
          >
            <Box
              className="benefit-icon"
              sx={{
                color: benefit.color,
                mb: 3,
                transition: "all 0.4s ease",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {benefit.icon}
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#263238",
              }}
            >
              {benefit.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#546e7a",
                lineHeight: 1.7,
              }}
            >
              {benefit.description}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default B2BBenefits;
