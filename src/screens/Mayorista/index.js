import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  TextField,
  Chip,
} from "@mui/material";
import {
  Inventory,
  LocalShipping,
  Stars,
  SupportAgent,
  AttachMoney,
  TrendingUp,
  WhatsApp,
} from "@mui/icons-material";
import logoMayorista from "../../images/logo-robinson-mayorista.png";
import "./Mayorista.css";
import Footer from "../../components/Footer";

const MayoristaScreen = () => {
  const sliderRef3 = useRef(null);
  const sliderRef4 = useRef(null);
  const [formData, setFormData] = useState({
    nombreComercio: "",
    nombreContacto: "",
    email: "",
    telefono: "",
    localidad: "",
    mensaje: "",
  });

  // 📦 Beneficios B2B
  const beneficiosB2B = [
    {
      icon: <Inventory fontSize="large" />,
      title: "Más de 5.000 artículos",
      description: "Catálogo completo para equipar tu negocio",
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: "Stock real y rotación constante",
      description: "Disponibilidad inmediata de productos",
    },
    {
      icon: <Stars fontSize="large" />,
      title: "Marcas líderes del mercado",
      description: "Shimano, Daiwa, Rapala y más",
    },
    {
      icon: <SupportAgent fontSize="large" />,
      title: "Atención personalizada",
      description: "Asesoramiento comercial dedicado",
    },
    {
      icon: <AttachMoney fontSize="large" />,
      title: "Precios y condiciones exclusivas",
      description: "Descuentos especiales por volumen",
    },
    {
      icon: <LocalShipping fontSize="large" />,
      title: "Envíos a todo el país",
      description: "Logística eficiente y confiable",
    },
  ];

  // 🏷️ Marcas Premium
  const marcasPremium = [
    "Shimano",
    "Daiwa",
    "Rapala",
    "Penn",
    "Abu Garcia",
    "Okuma",
    "Berkley",
    "Mustad",
    "Owner",
    "Yamashita",
    "Yo-Zuri",
    "Storm",
    "Rebel",
    "Bomber",
    "Lucky Craft",
  ];

  // 📦 Productos Destacados para Negocios
  const productosDestacados = [
    {
      id: 1,
      nombre: "Reels Shimano Serie FX",
      categoria: "Carretes",
      descripcion: "Línea de entrada ideal para comercios",
      minimo: "6 unidades",
      imagen: "🎣",
    },
    {
      id: 2,
      nombre: "Señuelos Rapala Original",
      categoria: "Artificiales",
      descripcion: "Best-seller mundial, alta rotación",
      minimo: "12 unidades",
      imagen: "🐟",
    },
    {
      id: 3,
      nombre: "Cañas Daiwa Aird-X",
      categoria: "Cañas",
      descripcion: "Relación calidad-precio excepcional",
      minimo: "4 unidades",
      imagen: "🎯",
    },
    {
      id: 4,
      nombre: "Anzuelos Mustad Surtido",
      categoria: "Accesorios",
      descripción: "Pack mayorista de alta demanda",
      minimo: "24 packs",
      imagen: "⚓",
    },
    {
      id: 5,
      nombre: "Líneas Berkley Trilene",
      categoria: "Líneas",
      descripcion: "Stock permanente, todas las libras",
      minimo: "10 rollos",
      imagen: "〰️",
    },
    {
      id: 6,
      nombre: "Kit Plomadas Variadas",
      categoria: "Plomos",
      descripcion: "Expositor incluido para tu comercio",
      minimo: "1 display",
      imagen: "⚖️",
    },
  ];

  // 💬 Testimonios B2B
  const testimoniosB2B = [
    {
      nombre: "Casa de Pesca El Dorado",
      ubicacion: "Mar del Plata, Buenos Aires",
      texto:
        "Robinson nos abastece hace 3 años. Stock confiable, marcas de primera y atención impecable.",
      año: "Cliente desde 2022",
    },
    {
      nombre: "Náutica y Pesca Río Negro",
      ubicacion: "Viedma, Río Negro",
      texto:
        "La logística es excelente. Los pedidos llegan en tiempo y forma. Muy buenos precios mayoristas.",
      año: "Cliente desde 2021",
    },
    {
      nombre: "Deportes Outdoor Córdoba",
      ubicacion: "Villa Carlos Paz, Córdoba",
      texto:
        "El catálogo es amplísimo y la atención personalizada marca la diferencia. Muy recomendable.",
      año: "Cliente desde 2023",
    },
  ];

  // 📋 Proceso de Trabajo
  const procesoTrabajo = [
    {
      numero: 1,
      titulo: "Registrá tu comercio",
      descripcion: "Completá el formulario con los datos de tu negocio",
    },
    {
      numero: 2,
      titulo: "Accedés al catálogo mayorista",
      descripcion: "Recibís usuario y contraseña en 24-48hs",
    },
    {
      numero: 3,
      titulo: "Hacés pedidos según tu necesidad",
      descripcion: "Portal online o vía WhatsApp/Email",
    },
    {
      numero: 4,
      titulo: "Enviamos a sucursal o domicilio",
      descripcion: "Logística propia y empresas de confianza",
    },
    {
      numero: 5,
      titulo: "Atención personalizada post-venta",
      descripcion: "Seguimiento y soporte comercial continuo",
    },
  ];

  // Auto-scroll para Marcas Premium (Sección 3)
  useEffect(() => {
    const slider3 = sliderRef3.current;
    if (!slider3) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll3 = setInterval(() => {
      if (slider3.scrollLeft >= slider3.scrollWidth - slider3.clientWidth) {
        slider3.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
        slider3.scrollLeft = scrollAmount;
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll3);
  }, []);

  // Auto-scroll para Productos Destacados (Sección 4)
  useEffect(() => {
    const slider4 = sliderRef4.current;
    if (!slider4) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll4 = setInterval(() => {
      if (slider4.scrollLeft >= slider4.scrollWidth - slider4.clientWidth) {
        slider4.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
        slider4.scrollLeft = scrollAmount;
      }
    }, scrollInterval);

    return () => clearInterval(autoScroll4);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `*SOLICITUD CLIENTE MAYORISTA*%0A%0A*Comercio:* ${formData.nombreComercio}%0A*Contacto:* ${formData.nombreContacto}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.telefono}%0A*Localidad:* ${formData.localidad}%0A*Mensaje:* ${formData.mensaje}`;
    window.open(`https://wa.me/5491168309347?text=${mensaje}`, "_blank");
  };

  const scrollToForm = () => {
    document
      .querySelector("#formulario-mayorista")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mayorista-page">
      {/* SECCIÓN 1: HERO CORPORATIVO */}
      <section className="mayorista-hero">
        <div className="hero-overlay-mayorista" />
        <Container maxWidth="lg" className="hero-content-mayorista">
          <Box className="hero-logo-mayorista">
            <img src={logoMayorista} alt="Robinson Mayorista" />
          </Box>
          <Typography variant="h1" className="hero-title-mayorista">
            Potenciamos tu negocio con ADN outdoor
          </Typography>
          <Typography variant="h5" className="hero-subtitle-mayorista">
            Distribución mayorista para comercios
          </Typography>
          <Box className="hero-buttons-mayorista">
            <Button
              variant="contained"
              size="large"
              className="btn-primary-mayorista"
              onClick={scrollToForm}
            >
              Quiero ser cliente mayorista
            </Button>
            <Button
              variant="outlined"
              size="large"
              className="btn-secondary-mayorista"
              onClick={() =>
                window.open(
                  "https://wa.me/5491168309347?text=Quiero acceder al catálogo mayorista",
                  "_blank"
                )
              }
            >
              Ver catálogo mayorista
            </Button>
          </Box>
        </Container>
      </section>

      {/* SECCIÓN 6: CÓMO TRABAJAMOS */}
      <section className="section-como-trabajamos">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="section-title-mayorista"
            align="center"
          >
            Cómo trabajamos
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle-mayorista"
            align="center"
          >
            Proceso simple y efectivo para comenzar
          </Typography>

          <Box className="proceso-timeline" sx={{ mt: 6 }}>
            {procesoTrabajo.map((paso, index) => (
              <Box
                key={index}
                className="proceso-step"
                sx={{ animationDelay: `${index * 0.15}s` }}
              >
                <Box className="paso-numero">{paso.numero}</Box>
                <Typography variant="h6" className="paso-titulo">
                  {paso.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {paso.descripcion}
                </Typography>
                {index < procesoTrabajo.length - 1 && (
                  <Box className="paso-connector" />
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </section>

      {/* SECCIÓN 2: BENEFICIOS PARA COMERCIOS */}
      <section className="section-beneficios-b2b">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="section-title-mayorista"
            align="center"
          >
            Beneficios para tu comercio
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle-mayorista"
            align="center"
          >
            Todo lo que necesitás para hacer crecer tu negocio
          </Typography>

          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            container
            spacing={4}
          >
            {beneficiosB2B.map((beneficio, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  className="beneficio-b2b-card"
                  sx={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box className="beneficio-icon">{beneficio.icon}</Box>
                    <Typography variant="h6" className="beneficio-title">
                      {beneficio.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {beneficio.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* SECCIÓN 3: MARCAS PREMIUM */}
      <section className="section-marcas-premium">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="section-title-mayorista"
            align="center"
          >
            Marcas líderes del mercado
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle-mayorista"
            align="center"
          >
            Trabajamos con las principales marcas de pesca deportiva
          </Typography>

          <Box className="marcas-slider-container" sx={{ mt: 4 }}>
            <Box className="marcas-slider" ref={sliderRef3}>
              {[...marcasPremium, ...marcasPremium].map((marca, index) => (
                <Box key={index} className="marca-item">
                  <Typography variant="h6" className="marca-nombre">
                    {marca}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </section>

      {/* SECCIÓN 4: DESTACADOS PARA NEGOCIOS */}
      <section className="section-destacados-negocios">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="section-title-mayorista"
            align="center"
          >
            Productos destacados
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle-mayorista"
            align="center"
          >
            Los más vendidos por comercios de todo el país
          </Typography>

          <Box className="productos-slider-container" sx={{ mt: 4 }}>
            <Box className="productos-slider" ref={sliderRef4}>
              {[...productosDestacados, ...productosDestacados].map(
                (producto, index) => (
                  <Card key={index} className="producto-destacado-card">
                    <CardContent>
                      <Box className="producto-emoji">{producto.imagen}</Box>
                      <Chip
                        label={producto.categoria}
                        size="small"
                        className="chip-categoria"
                      />
                      <Typography variant="h6" className="producto-nombre">
                        {producto.nombre}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {producto.descripcion}
                      </Typography>
                      <Box className="producto-minimo">
                        <Typography variant="caption" fontWeight={600}>
                          Pedido mínimo: {producto.minimo}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                )
              )}
            </Box>
          </Box>
        </Container>
      </section>

      {/* SECCIÓN 5: TESTIMONIOS B2B */}
      <section className="section-testimonios-b2b">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="section-title-mayorista"
            align="center"
          >
            Lo que dicen nuestros clientes
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle-mayorista"
            align="center"
          >
            Comercios que confían en Robinson
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {testimoniosB2B.map((testimonio, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  className="testimonio-b2b-card"
                  sx={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent>
                    <Typography variant="body1" className="testimonio-texto">
                      "{testimonio.texto}"
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" className="testimonio-nombre">
                        {testimonio.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonio.ubicacion}
                      </Typography>
                      <Chip
                        label={testimonio.año}
                        size="small"
                        sx={{ mt: 1 }}
                        className="chip-ano"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* SECCIÓN 7: CONTACTO DIRECTO / FORMULARIO */}
      <section id="formulario-mayorista" className="section-contacto-mayorista">
        <Container maxWidth="md">
          <Typography
            variant="h2"
            className="section-title-mayorista"
            align="center"
          >
            Registrá tu comercio
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle-mayorista"
            align="center"
          >
            Completá el formulario y nos contactamos en menos de 48 horas
          </Typography>

          <Card className="formulario-card">
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid
                  sx={{ display: "flex", justifyContent: "center" }}
                  container
                  spacing={3}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Nombre del comercio"
                      name="nombreComercio"
                      value={formData.nombreComercio}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Nombre de contacto"
                      name="nombreContacto"
                      value={formData.nombreContacto}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Localidad"
                      name="localidad"
                      value={formData.localidad}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Mensaje (opcional)"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      variant="outlined"
                      placeholder="Contanos sobre tu comercio, qué productos te interesan..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={{
                        placeSelf: "center",
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
                      size="large"
                      startIcon={<WhatsApp />}
                      type="submit"
                      variant="contained"
                      fullWidth
                    >
                      Enviar solicitud
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default MayoristaScreen;
