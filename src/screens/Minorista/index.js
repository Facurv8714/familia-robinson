import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
  Fab,
} from "@mui/material";
import {
  PhishingOutlined,
  CabinOutlined,
  HikingOutlined,
  CheckroomOutlined,
  KitchenOutlined,
  ArrowForward,
  WhatsApp,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ArrowDownward,
} from "@mui/icons-material";
import robinsonMinorista from "../../images/robinson-minorista.avif";
import logoRobinson from "../../images/logo-robinson.png";
import Footer from "../../components/Footer";

// Datos de categorías
const categories = [
  {
    id: 1,
    title: "Pesca",
    icon: <PhishingOutlined sx={{ fontSize: 48 }} />,
    description: "Equipos y accesorios para tu próxima aventura",
    color: "#1976d2",
  },
  {
    id: 2,
    title: "Camping",
    icon: <CabinOutlined sx={{ fontSize: 48 }} />,
    description: "Todo para acampar con comodidad",
    color: "#2e7d32",
  },
  {
    id: 3,
    title: "Outdoor",
    icon: <HikingOutlined sx={{ fontSize: 48 }} />,
    description: "Equipamiento para tus expediciones",
    color: "#ed6c02",
  },
  {
    id: 4,
    title: "Indumentaria",
    icon: <CheckroomOutlined sx={{ fontSize: 48 }} />,
    description: "Vestimenta técnica y confortable",
    color: "#9c27b0",
  },
  {
    id: 5,
    title: "Cuchillería",
    icon: <KitchenOutlined sx={{ fontSize: 48 }} />,
    description: "Herramientas de corte premium",
    color: "#d32f2f",
  },
];

// Datos de productos destacados
const featuredProducts = [
  {
    id: 1,
    name: "Caña Shimano FX",
    price: "$85.000",
    brand: "Shimano",
    image: robinsonMinorista,
  },
  {
    id: 2,
    name: "Reel Abu Garcia",
    price: "$120.000",
    brand: "Abu Garcia",
    image: robinsonMinorista,
  },
  {
    id: 3,
    name: "Carpa Doite 4P",
    price: "$250.000",
    brand: "Doite",
    image: robinsonMinorista,
  },
  {
    id: 4,
    name: "Mochila 60L",
    price: "$95.000",
    brand: "National Geographic",
    image: robinsonMinorista,
  },
  {
    id: 5,
    name: "Cuchillo Victorinox",
    price: "$45.000",
    brand: "Victorinox",
    image: robinsonMinorista,
  },
];

// Datos de marcas premium
const premiumBrands = [
  "Abu Garcia",
  "Shimano",
  "Okuma",
  "Fenwick",
  "Daiwa",
  "Penn",
  "Ugly Stik",
  "Berkley",
  "Rapala",
  "Coleman",
  "Doite",
  "National Geographic",
  "The North Face",
  "Columbia",
  "Victorinox",
  "Leatherman",
  "Gerber",
  "Buck",
  "Kershaw",
  "Cold Steel",
];

const Minorista = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const generateWhatsAppLink = (message) => {
    const phone = "+5491158427688";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
  };

  // Auto-scroll de productos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) =>
        prev === featuredProducts.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll de marcas
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) =>
        prev >= premiumBrands.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Mostrar/ocultar botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
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

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const nextProduct = useCallback(() => {
    setCurrentProduct((prev) =>
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevProduct = useCallback(() => {
    setCurrentProduct((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contacto-minorista");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* SECCIÓN 1: HERO PRINCIPAL */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "70vh" },
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${robinsonMinorista})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
            zIndex: 0,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#FFF !important",
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 900,
              mb: 3,
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
              letterSpacing: 2,
            }}
          >
            Tu aliado para cada aventura
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#FFF !important",
              mb: 5,
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: 400,
              textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            Equipamiento outdoor de calidad para vivir la naturaleza
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              onClick={scrollToContact}
              sx={{
                color: "#FFF !important",
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderColor: "white",
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "white",
                  background: "rgba(255,255,255,0.1)",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver catálogo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SECCIÓN 2: CATEGORÍAS DESTACADAS */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
            color: "var(--text-color)",
          }}
        >
          Nuestras Categorías
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            mb: 6,
            color: "var(--text-color-secondary)",
          }}
        >
          Explorá nuestro universo de productos
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  border: "2px solid transparent",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: `0 12px 40px ${category.color}30`,
                    borderColor: category.color,
                    "& .category-icon": {
                      color: category.color,
                      transform: "scale(1.2) rotate(5deg)",
                    },
                    "& .explore-text": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  className="category-icon"
                  sx={{
                    color: category.color,
                    mb: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  {category.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: "var(--text-color)",
                  }}
                >
                  {category.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text-color-secondary)",
                    mb: 2,
                  }}
                >
                  {category.description}
                </Typography>
                <Typography
                  className="explore-text"
                  variant="button"
                  sx={{
                    color: category.color,
                    fontWeight: 700,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Explorar →
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SECCIÓN 3: PRODUCTOS DESTACADOS */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, var(--primary-color)05, var(--secondary-color)05)",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              mb: 2,
              color: "var(--text-color)",
            }}
          >
            Top Ventas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              mb: 6,
              color: "var(--text-color-secondary)",
            }}
          >
            Los productos más elegidos por nuestros clientes
          </Typography>

          {/* Carrusel de productos */}
          <Box
            sx={{
              position: "relative",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: { xs: 250, md: "auto" },
                  objectFit: "cover",
                }}
                image={featuredProducts[currentProduct].image}
                alt={featuredProducts[currentProduct].name}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 4,
                }}
              >
                <Chip
                  label={featuredProducts[currentProduct].brand}
                  size="small"
                  sx={{
                    mb: 2,
                    width: "fit-content",
                    background: "var(--primary-color)",
                    color: "white",
                    fontWeight: 700,
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "var(--text-color)",
                  }}
                >
                  {featuredProducts[currentProduct].name}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    color: "var(--primary-color)",
                  }}
                >
                  {featuredProducts[currentProduct].price}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsApp />}
                  href={generateWhatsAppLink(
                    `Hola! Me interesa el producto: ${featuredProducts[currentProduct].name}`
                  )}
                  target="_blank"
                  sx={{
                    background: "var(--primary-color)",
                    "&:hover": {
                      background: "var(--primary-color-dark)",
                    },
                  }}
                >
                  Consultar disponibilidad
                </Button>
              </CardContent>
            </Card>

            {/* Controles del carrusel */}
            <IconButton
              onClick={prevProduct}
              sx={{
                position: "absolute",
                left: { xs: 10, md: -60 },
                top: "50%",
                transform: "translateY(-50%)",
                background: "white",
                boxShadow: 3,
                "&:hover": {
                  background: "var(--primary-color)",
                  color: "white",
                },
              }}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton
              onClick={nextProduct}
              sx={{
                position: "absolute",
                right: { xs: 10, md: -60 },
                top: "50%",
                transform: "translateY(-50%)",
                background: "white",
                boxShadow: 3,
                "&:hover": {
                  background: "var(--primary-color)",
                  color: "white",
                },
              }}
            >
              <KeyboardArrowRight />
            </IconButton>

            {/* Indicadores */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 3,
              }}
            >
              {featuredProducts.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  sx={{
                    width: currentProduct === index ? 30 : 10,
                    height: 10,
                    borderRadius: 5,
                    background:
                      currentProduct === index
                        ? "var(--primary-color)"
                        : "var(--primary-color)30",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECCIÓN 4: MARCAS PREMIUM */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            mb: 2,
            color: "var(--text-color)",
          }}
        >
          Marcas Premium
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            mb: 6,
            color: "var(--text-color-secondary)",
          }}
        >
          Trabajamos con más de 20 marcas líderes mundiales
        </Typography>

        {/* Slider de marcas */}
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            py: 4,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "100px",
              zIndex: 1,
              pointerEvents: "none",
            },
            "&::before": {
              left: 0,
              background:
                "linear-gradient(to right, var(--background-color), transparent)",
            },
            "&::after": {
              right: 0,
              background:
                "linear-gradient(to left, var(--background-color), transparent)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              animation: "scroll 40s linear infinite",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {[...premiumBrands, ...premiumBrands].map((brand, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "200px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "white",
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "var(--text-color)",
                  }}
                >
                  {brand}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* SECCIÓN 6: CTA FINAL */}
      <Container maxWidth="lg" sx={{ py: 10 }} id="contacto-minorista">
        <Card
          sx={{
            p: { xs: 4, md: 8 },
            textAlign: "center",
            borderRadius: 4,
            background:
              "linear-gradient(135deg, var(--primary-color), var(--primary-color-dark))",
            color: "white",
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 900,
              mb: 3,
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Equipate para tu próxima aventura
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 5,
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              opacity: 0.95,
            }}
          >
            Encontrá todo lo que necesitás para vivir la naturaleza al máximo
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              href={generateWhatsAppLink(
                "Hola! Quiero ver el catálogo completo"
              )}
              target="_blank"
              sx={{
                px: 5,
                py: 2.5,
                fontSize: "1.2rem",
                fontWeight: 700,
                background: "white",
                color: "var(--primary-color)",
                "&:hover": {
                  "&:hover": {
                    background: "#1da851 !important",
                    color: "#FFF !important",
                    transform: "scale(1.02)",
                  },
                },
                transition: "all 0.3s ease",
              }}
            >
              Ver catálogo completo
            </Button>
          </Box>
        </Card>
      </Container>

      {/* Botón flotante de scroll */}
      {showScrollDown && (
        <Fab
          onClick={handleScrollToBottom}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "var(--primary-color)",
            color: "white",
            zIndex: 1000,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            "&:hover": {
              background: "var(--primary-color-dark)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <ArrowDownward />
        </Fab>
      )}
      <Footer />
    </Box>
  );
};

export default Minorista;
