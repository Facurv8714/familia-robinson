import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import logoRobinsonMayorista from "../../images/logo-robinson-mayorista.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Mayorista = () => {
  const generateWhatsAppLink = (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
  };
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h1"
        sx={{
          color: "#1976d2",
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: 900,
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(0,0,0,0.10)",
          mb: 2,
        }}
      >
        Venta mayorista
      </Typography>
      <Box sx={{ justifyContent: "center", mb: 3 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2.2rem" },
            background: "#FFF",
            borderRadius: 3,
            px: 4,
            py: 2,
            boxShadow: 3,
            letterSpacing: 1,
            textShadow: "0 2px 8px rgba(0,0,0,0.10)",
            border: "2px solid var(--primary-color)",
            mb: 0,
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          Abasteciendo comercios, impulsando aventuras.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          minHeight: "100%",
          background:
            "linear-gradient(to bottom, var(--background-color), var(--background-color)80)",
          borderRadius: 4,
          p: { xs: 2, md: 4 },
          boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--primary-color)10",
        }}
      >
        {/* Left Column - BusinessCard */}
        <Grid item xs={12} md={6}>
          <Card
            id="school-info"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent
              sx={{
                p: 4,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontSize: "1.4rem",
                  color: "var(--text-color)",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, var(--primary-color)10, var(--secondary-color)10)",
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
                  border: "1px solid var(--primary-color)20",
                }}
              >
                Distribuimos productos de pesca, camping y outdoor a comercios
                que buscan calidad y confianza para sus clientes. Somos el socio
                estratégico que potencia tu negocio con el mejor abastecimiento
                y atención personalizada.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Box
                  component="img"
                  src={logoRobinsonMayorista}
                  alt="Robinson mayorista Logo"
                  sx={{
                    maxWidth: "200px",
                    width: "100%",
                    height: "auto",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.15))",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Info Cards and Download Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card
                sx={{
                  p: 3,
                  background: "var(--background-color)",
                  border: "2px solid var(--primary-color)20",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "var(--shadow-primary)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "var(--primary-color)", fontWeight: 700 }}
                >
                  ¿Querés más información?
                </Typography>
                <Typography variant="body1">
                  Contactanos:
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    key={1}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Card sx={{ flex: 1, maxWidth: "400px" }}>
                      <CardContent sx={{ p: 4, textAlign: "center" }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 800, mb: 1 }}
                        >
                          Mayorista
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                          +54 9 11 6107-2292
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "8px",
                            mb: 2,
                          }}
                        >
                          <IconButton
                            component="a"
                            href={generateWhatsAppLink(
                              "+54 9 11 6107-2292",
                              "Hola buen día! Quiero obtener mas información"
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "#25D366 !important", // WhatsApp green color
                            }}
                          >
                            <WhatsAppIcon sx={{ fontSize: 32 }} />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Mayorista;
