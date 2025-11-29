import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import {
  BusinessCenter,
  Inventory,
  LocalShipping,
  ThumbUp,
  Star,
  AttachMoney,
  HeadsetMic,
  PublicOutlined,
  WhatsApp,
  Email,
  ArrowForward,
  CheckCircle,
  Download,
} from "@mui/icons-material";
import robinsonMayorista from "../../images/robinson-mayorista.avif";
import logoRobinsonMayorista from "../../images/logo-robinson-mayorista.png";
import "./Mayorista.css";
import Footer from "../../components/Footer";

// Datos de beneficios B2B
const b2bBenefits = [
  {
    id: 1,
    icon: <Inventory sx={{ fontSize: 48 }} />,
    title: "Más de 5.000 artículos",
    description: "Amplio catálogo de productos outdoor y pesca",
    color: "#1565c0",
  },
  {
    id: 2,
    icon: <CheckCircle sx={{ fontSize: 48 }} />,
    title: "Stock real y rotación constante",
    description: "Disponibilidad garantizada para tu negocio",
    color: "#2e7d32",
  },
  {
    id: 3,
    icon: <Star sx={{ fontSize: 48 }} />,
    title: "Marcas líderes del mercado",
    description: "Trabajamos con las mejores marcas internacionales",
    color: "#f57c00",
  },
  {
    id: 4,
    icon: <HeadsetMic sx={{ fontSize: 48 }} />,
    title: "Atención personalizada",
    description: "Asesoramiento experto para tu comercio",
    color: "#7b1fa2",
  },
  {
    id: 5,
    icon: <AttachMoney sx={{ fontSize: 48 }} />,
    title: "Precios y condiciones exclusivas",
    description: "Beneficios especiales para mayoristas",
    color: "#388e3c",
  },
  {
    id: 6,
    icon: <LocalShipping sx={{ fontSize: 48 }} />,
    title: "Envíos a todo el país",
    description: "Logística confiable y tracking en tiempo real",
    color: "#0277bd",
  },
];

// Marcas premium
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
  "Patagonia",
  "Salomon",
];

// Productos destacados para negocios
const topSellingProducts = [
  {
    id: 1,
    name: "Cañas de pesca variadas",
    category: "Pesca deportiva",
    description: "Lo más vendido por comercios minoristas",
    image: robinsonMayorista,
  },
  {
    id: 2,
    name: "Reels y carretes",
    category: "Pesca deportiva",
    description: "Alta rotación y márgenes competitivos",
    image: robinsonMayorista,
  },
  {
    id: 3,
    name: "Carpas y equipamiento camping",
    category: "Camping",
    description: "Demanda estacional garantizada",
    image: robinsonMayorista,
  },
  {
    id: 4,
    name: "Cuchillería premium",
    category: "Outdoor",
    description: "Productos de alto valor agregado",
    image: robinsonMayorista,
  },
];

// Testimonios B2B
const testimonials = [
  {
    id: 1,
    business: "Outdoors & Co",
    location: "Mar del Plata, Buenos Aires",
    text: "Robinson nos abastece hace 3 años. Stock confiable y marcas de primera. Nuestros clientes siempre encuentran lo que buscan.",
    rating: 5,
  },
  {
    id: 2,
    business: "Pesca Total",
    location: "Rosario, Santa Fe",
    text: "La atención personalizada y los precios mayoristas nos permiten ser competitivos en nuestra zona. Excelente proveedor.",
    rating: 5,
  },
  {
    id: 3,
    business: "Aventura Sport",
    location: "Mendoza Capital",
    text: "Trabajamos con Robinson desde el inicio de nuestro local. Su catálogo amplio y la logística eficiente son clave para nuestro éxito.",
    rating: 5,
  },
];

// Proceso de trabajo
const workingProcess = [
  {
    step: 1,
    title: "Registrá tu comercio",
    description: "Completá el formulario con los datos de tu negocio",
    icon: <BusinessCenter sx={{ fontSize: 40 }} />,
  },
  {
    step: 2,
    title: "Accedé al catálogo mayorista",
    description: "Recibí acceso exclusivo a precios y condiciones",
    icon: <Inventory sx={{ fontSize: 40 }} />,
  },
  {
    step: 3,
    title: "Hacé pedidos según tu necesidad",
    description: "Comprá por unidad, pack o pallets completos",
    icon: <AttachMoney sx={{ fontSize: 40 }} />,
  },
  {
    step: 4,
    title: "Enviamos a sucursal o domicilio",
    description: "Logística confiable con seguimiento",
    icon: <LocalShipping sx={{ fontSize: 40 }} />,
  },
  {
    step: 5,
    title: "Atención personalizada post-venta",
    description: "Soporte continuo para tu negocio",
    icon: <HeadsetMic sx={{ fontSize: 40 }} />,
  },
];

const Mayorista = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const generateWhatsAppLink = (message) => {
    const phone = "+5491158427688";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Solicitud Cliente Mayorista*\n\n*Empresa:* ${formData.businessName}\n*Contacto:* ${formData.contactName}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.phone}\n*Ubicación:* ${formData.location}\n*Mensaje:* ${formData.message}`;
    window.open(generateWhatsAppLink(message), "_blank");
  };

  return (
    <Box className="mayorista-page">
      {/* SECCIÓN 1: HERO CORPORATIVO */}
      <Box
        className="hero-section"
        sx={{
          position: "relative",
          height: { xs: "70vh", md: "80vh" },
          minHeight: "600px",
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
            backgroundImage: `url(${robinsonMayorista})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)",
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
          <Box sx={{ mb: 3 }}>
            <img
              src={logoRobinsonMayorista}
              alt="Robinson Logo"
              style={{
                height: "80px",
                marginBottom: "20px",
              }}
            />
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 900,
              mb: 3,
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
              letterSpacing: 1,
              color: "#FFF !important",
            }}
          >
            Potenciamos tu negocio con ADN outdoor
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 5,
              fontSize: { xs: "1.3rem", md: "2rem" },
              fontWeight: 300,
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              color: "#FFF !important",
            }}
          >
            Distribución mayorista para comercios
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => {
                document
                  .querySelector("#formulario-mayorista")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                px: 5,
                py: 2.5,
                fontSize: "1.2rem",
                fontWeight: 700,
                background: "#1565c0",
                boxShadow: "0 8px 24px rgba(21, 101, 192, 0.4)",
                "&:hover": {
                  background: "#0d47a1",
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 32px rgba(21, 101, 192, 0.6)",
                },
                transition: "all 0.3s ease",
                color: "#FFF !important",
              }}
            >
              Quiero ser cliente mayorista
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<Download />}
              sx={{
                px: 5,
                py: 2.5,
                fontSize: "1.2rem",
                fontWeight: 700,
                borderColor: "white",
                color: "white",
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "#e3f2fd",
                  background: "rgba(255,255,255,0.15)",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
                color: "#FFF !important",
              }}
            >
              Ver catálogo mayorista
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SECCIÓN 2: BENEFICIOS PARA COMERCIOS */}
      <Box sx={{ py: 10, background: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 2,
              color: "#1a237e",
            }}
          >
            ¿Por qué elegirnos como tu proveedor?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              mb: 7,
              color: "#546e7a",
              maxWidth: "700px",
              margin: "0 auto 56px",
            }}
          >
            Brindamos soluciones integrales para que tu negocio crezca
          </Typography>

          <Grid container spacing={4}>
            {b2bBenefits.map((benefit) => (
              <Grid item xs={12} sm={6} md={4} key={benefit.id}>
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
        </Container>
      </Box>

      {/* SECCIÓN 3: CARRUSEL DE MARCAS */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              mb: 2,
              color: "#FFF !important",
            }}
          >
            Trabajamos con las mejores marcas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              mb: 6,
              color: "#FFF !important",
            }}
          >
            Calidad y prestigio para tu comercio
          </Typography>

          {/* Slider automático de marcas */}
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
                background: "linear-gradient(to right, #1a237e, transparent)",
              },
              "&::after": {
                right: 0,
                background: "linear-gradient(to left, #1a237e, transparent)",
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
                      color: "#1a237e",
                    }}
                  >
                    {brand}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECCIÓN 4: DESTACADOS PARA NEGOCIOS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            fontWeight: 800,
            mb: 2,
            color: "#1a237e",
          }}
        >
          Lo más vendido por comercios
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            mb: 7,
            color: "#546e7a",
          }}
        >
          Productos con alta rotación y demanda garantizada
        </Typography>

        {/* Slider infinito de productos */}
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
              background: "linear-gradient(to right, #ffffff, transparent)",
            },
            "&::after": {
              right: 0,
              background: "linear-gradient(to left, #ffffff, transparent)",
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
            {[...topSellingProducts, ...topSellingProducts].map(
              (product, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: "300px",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    border: "1px solid #e0e0e0",
                    filter: "grayscale(50%)",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "translateY(-8px) scale(1.05)",
                      boxShadow: "0 12px 40px rgba(21, 101, 192, 0.2)",
                      "& .product-overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <Box
                      className="product-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(to top, rgba(26,35,126,0.9), transparent)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "flex-end",
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{ color: "white", fontWeight: 700 }}
                      >
                        Consultar →
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#1565c0",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    >
                      {product.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "#263238",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#546e7a",
                        lineHeight: 1.6,
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              )
            )}
          </Box>
        </Box>
      </Container>

      {/* SECCIÓN 5: TESTIMONIOS B2B */}
      <Box sx={{ py: 10, background: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 2,
              color: "#1a237e",
            }}
          >
            La confianza de otros negocios
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              mb: 7,
              color: "#546e7a",
            }}
          >
            Conocé la experiencia de quienes ya trabajan con nosotros
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 3,
                    border: "2px solid #e0e0e0",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(21, 101, 192, 0.2)",
                      borderColor: "#1565c0",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      mb: 3,
                      justifyContent: "center",
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: "#ffc107", fontSize: 28 }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "#263238",
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      fontSize: "1.05rem",
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box
                    sx={{
                      borderTop: "2px solid #e0e0e0",
                      pt: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#1a237e",
                        mb: 0.5,
                      }}
                    >
                      {testimonial.business}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#546e7a",
                      }}
                    >
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECCIÓN 6: CÓMO TRABAJAMOS */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            fontWeight: 800,
            mb: 2,
            color: "#1a237e",
          }}
        >
          Cómo trabajamos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            mb: 8,
            color: "#546e7a",
          }}
        >
          Un proceso simple y eficiente para abastecer tu negocio
        </Typography>

        {/* Timeline horizontal */}
        <Box
          sx={{
            position: "relative",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          {workingProcess.map((step, index) => (
            <Box
              key={step.step}
              sx={{
                flex: 1,
                textAlign: "center",
                position: "relative",
                mb: { xs: 6, md: 0 },
              }}
            >
              {/* Línea conectora (solo en desktop) */}
              {index < workingProcess.length - 1 && (
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

              {/* Círculo con número */}
              <Box
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
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: 800 }}
                >
                  {step.step}
                </Typography>
              </Box>

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
      </Container>

      {/* SECCIÓN 7: FORMULARIO DE CONTACTO MAYORISTA */}
      <Box
        id="formulario-mayorista"
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 2,
              color: "#FFF !important",
            }}
          >
            Convertite en cliente mayorista
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.2rem",
              mb: 6,
              color: "#FFF !important",
            }}
          >
            Completá el formulario y nos pondremos en contacto
          </Typography>

          <Card
            sx={{
              p: 5,
              borderRadius: 4,
              boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Nombre del comercio"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleFormChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Nombre de contacto"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleFormChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Ubicación del negocio"
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Contanos sobre tu negocio"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    variant="outlined"
                    placeholder="Ej: Tipo de comercio, productos que vendés, volumen de compra estimado, etc."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<WhatsApp />}
                    sx={{
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      background: "#25d366",
                      "&:hover": {
                        background: "#1da851",
                        color: "#FFF !important",
                        transform: "scale(1.02)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Enviar solicitud por WhatsApp
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>

          {/* Contacto directo */}
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{ color: "#FFF !important", fontWeight: 700, mb: 3 }}
            >
              ¿Preferís contactarnos directamente?
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                href={generateWhatsAppLink(
                  "Hola! Quisiera información sobre distribución mayorista"
                )}
                target="_blank"
                sx={{
                  background: "#FFF !important",
                  color: "#1a237e",
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  "&:hover": {
                    background: "#1da851 !important",
                    color: "#FFF !important",
                    transform: "scale(1.02)",
                  },
                }}
              >
                WhatsApp Mayorista
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                href="mailto:mayorista@familiarobinson.com.ar"
                sx={{
                  borderColor: "white",
                  color: "#FFF !important",
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    background: "rgba(255,255,255,0.1)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Email Mayorista
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FOOTER SIMPLE */}
      <Footer />
    </Box>
  );
};

export default Mayorista;
