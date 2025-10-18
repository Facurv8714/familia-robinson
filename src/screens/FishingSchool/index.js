import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  IconButton,
  CardContent,
  Fab,
} from "@mui/material";
import { DownloadOutlined, ArrowBack, ArrowForward } from "@mui/icons-material";
import { ArrowDownward } from "@mui/icons-material";
import "./FishingSchool.css";

// Import all fishing school images
import fishingSchool1 from "../../images/fishing_school_1.jpg";
import fishingSchool2 from "../../images/fishing_school_2.jpg";
import fishingSchool3 from "../../images/fishing_school_3.jpg";
import fishingSchool4 from "../../images/fishing_school_4.jpg";
import fishingSchool5 from "../../images/fishing_school_5.jpg";
import fishingSchool6 from "../../images/fishing_school_6.jpg";
import fishingSchool7 from "../../images/fishing_school_7.jpg";
import flyer from "./flyer.pdf";
import schoolLogo from "../../images/logo-robinson-fishing-school.png";

const images = [
  { img: fishingSchool1, alt: "Fishing School 1" },
  { img: fishingSchool2, alt: "Fishing School 2" },
  { img: fishingSchool3, alt: "Fishing School 3" },
  { img: fishingSchool4, alt: "Fishing School 4" },
  { img: fishingSchool5, alt: "Fishing School 5" },
  { img: fishingSchool6, alt: "Fishing School 6" },
  { img: fishingSchool7, alt: "Fishing School 7" },
];

export default function FishingSchool() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = React.useRef();
  const [showScrollDown, setShowScrollDown] = useState(true);
  // Mostrar/ocultar botón flotante según scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Si estamos cerca del fondo, ocultar el botón
      if (windowHeight + scrollY >= docHeight - 150) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Handler para scroll al fondo
  const handleScrollToBottom = () => {
    const mainContent = document.querySelector(".main-content-end");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  // Helper to clear and restart interval
  const resetInterval = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 200);
      }, 300);
    }, 6000);
  }, []);

  const nextImage = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 200);
    }, 300);
    resetInterval();
  }, [resetInterval, isTransitioning]);

  const prevImage = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 200);
    }, 300);
    resetInterval();
  }, [resetInterval, isTransitioning]);

  // Reset interval on mount and when currentImageIndex changes
  useEffect(() => {
    resetInterval();
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [resetInterval]);

  const handleDownloadFlyer = () => {
    window.open(flyer, "_blank");
  };

  return (
    <Box
      style={{ marginTop: "-12px" }}
      sx={{
        minHeight: "100vh",
        background: "var(--background-color)",
        pb: 4,
      }}
    >
      <Box
        className="hero-carousel-section"
        sx={{
          position: "relative",
          height: "65vh",
          mb: 4,
        }}
      >
        <Box className="carousel-container">
          <Box
            className="carousel-item"
            sx={{
              position: "relative",
              height: "65vh",
              overflow: "hidden",
              borderRadius: "0 0 24px 24px",
            }}
          >
            <img
              src={images[currentImageIndex].img}
              alt={images[currentImageIndex].alt}
              className="carousel-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: isTransitioning ? "scale(1.03)" : "scale(1)",
                opacity: isTransitioning ? 0.8 : 1,
                filter: isTransitioning ? "blur(0.5px)" : "blur(0px)",
              }}
            />
            {/* Overlay with gradient */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: `linear-gradient(transparent, var(--primary-color)90)`,
                height: "30%",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: isTransitioning
                  ? "translateY(8px)"
                  : "translateY(0)",
                opacity: isTransitioning ? 0.85 : 1,
              }}
            />
          </Box>
          <Box className="carousel-navigation">
            <IconButton
              onClick={prevImage}
              disabled={isTransitioning}
              sx={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background:
                  "linear-gradient(135deg, #FF5722 60%, #FFC107 100%)",
                color: "#212121",
                border: "3px solid #FFF",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                width: 56,
                height: 56,
                zIndex: 2,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                opacity: isTransitioning ? 0.5 : 1,
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #FFC107 60%, #FF5722 100%)",
                  color: "#212121",
                  border: "3px solid #FFF",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  transform: "translateY(-50%) scale(1.12)",
                },
                "&:disabled": {
                  background: "#FFCCBC",
                  color: "rgba(33,33,33,0.5)",
                  border: "3px solid #FFF",
                },
              }}
            >
              <ArrowBack sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              onClick={nextImage}
              disabled={isTransitioning}
              sx={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background:
                  "linear-gradient(135deg, #FF5722 60%, #FFC107 100%)",
                color: "#212121",
                border: "3px solid #FFF",
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                width: 56,
                height: 56,
                zIndex: 2,
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                opacity: isTransitioning ? 0.5 : 1,
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #FFC107 60%, #FF5722 100%)",
                  color: "#212121",
                  border: "3px solid #FFF",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  transform: "translateY(-50%) scale(1.12)",
                },
                "&:disabled": {
                  background: "#FFCCBC",
                  color: "rgba(33,33,33,0.5)",
                  border: "3px solid #FFF",
                },
              }}
            >
              <ArrowForward sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>
          <Box className="carousel-indicators">
            {images.map((_, index) => (
              <Box
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 0, px: { xs: 2, sm: 4 } }}>
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
          Escuela de Pesca
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
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
            Aprendé, viví y pescá con nosotros.
          </Typography>
        </Box>
        {/* Main Content Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
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
                  Espacio de aprendizaje para pescadores de todos los niveles.
                  Ofrecemos cursos, talleres y actividades comunitarias para
                  perfeccionar técnicas, compartir experiencias, conectar con la
                  naturaleza y la pasión por la pesca.
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
                    src={schoolLogo}
                    alt="Robinson Fishing School Logo"
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
              {/* Clases Personalizadas */}
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
                    Clases Personalizadas
                  </Typography>
                  <Typography variant="body1">
                    Aprende las técnicas fundamentales de pesca con instructores
                    expertos en grupos reducidos.
                  </Typography>
                </Card>
              </Grid>

              {/* Equipamiento Incluido */}
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
                    Equipamiento Incluido
                  </Typography>
                  <Typography variant="body1">
                    Proporcionamos todo el equipo necesario para que tu
                    experiencia sea completa y segura.
                  </Typography>
                </Card>
              </Grid>

              {/* Certificación */}
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
                    Certificación
                  </Typography>
                  <Typography variant="body1">
                    Obtén tu certificado al completar el curso y únete a nuestra
                    comunidad de pescadores.
                  </Typography>
                </Card>
              </Grid>

              {/* Download Section */}
              <Grid item xs={12}>
                <Card
                  sx={{
                    background: "var(--gradient-primary)",
                    color: "#fff",
                    p: 4,
                    borderRadius: 4,
                    boxShadow: "var(--shadow-primary)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom>
                      ¿Querés saber más sobre nuestra escuela?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Descargá nuestro flyer informativo con todos los detalles,
                      información de contacto y más.
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<DownloadOutlined />}
                      onClick={handleDownloadFlyer}
                      sx={{
                        mt: 2,
                        backgroundColor: "#fff",
                        color: "var(--primary-color)",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                          transform: "scale(1.05)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Descargar Flyer
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="main-content-end"
          sx={{ width: "100%", height: "1px" }}
        />{" "}
        {/* End marker */}
      </Container>
      {/* Botón flotante scroll down */}
      {showScrollDown && (
        <Fab
          color="primary"
          aria-label="scroll down"
          onClick={handleScrollToBottom}
          sx={{
            position: "fixed",
            bottom: { xs: 24, md: 32 },
            right: { xs: 24, md: 32 },
            zIndex: 1200,
            boxShadow: 6,
            transition: "opacity 0.3s",
            opacity: 0.85,
            "&:hover": { opacity: 1 },
          }}
        >
          <ArrowDownward fontSize="large" />
        </Fab>
      )}
    </Box>
  );
}
