import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Tab,
  Tabs,
  Avatar,
  Modal,
  IconButton,
} from "@mui/material";
import {
  School,
  EmojiPeople,
  Terrain,
  Groups,
  AutoStories,
  Verified,
  Favorite,
  Close,
  NavigateBefore,
  NavigateNext,
  WhatsApp,
} from "@mui/icons-material";
import fishingSchool1 from "../../images/fishing_school_1.jpg";
import fishingSchool2 from "../../images/fishing_school_2.jpg";
import fishingSchool3 from "../../images/fishing_school_3.jpg";
import fishingSchool4 from "../../images/fishing_school_4.jpg";
import fishingSchool5 from "../../images/fishing_school_5.jpg";
import fishingSchool6 from "../../images/fishing_school_6.jpg";
import fishingSchool7 from "../../images/fishing_school_7.jpg";
import logoRobinson from "../../images/logo-robinson-fishing-school.png";
import "./FishingSchool.css";

const FishingSchoolScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 📸 Array de imágenes de galería
  const galleryImages = [
    fishingSchool1,
    fishingSchool2,
    fishingSchool3,
    fishingSchool4,
    fishingSchool5,
    fishingSchool6,
    fishingSchool7,
  ];

  // 📚 Datos de cursos
  const courses = [
    {
      id: 1,
      name: "Curso de técnica de lanzamiento",
      level: "Principiante",
      modality: "Presencial",
      duration: "4 clases de 2 horas",
      image: fishingSchool1,
      description:
        "Aprendé la técnica correcta desde el inicio. Lanzamiento preciso y sin vicios.",
      price: "$45.000",
    },
    {
      id: 2,
      name: "Introducción a la pesca con mosca",
      level: "Principiante",
      modality: "Mixto",
      duration: "6 clases (2 teóricas + 4 prácticas)",
      image: fishingSchool2,
      description: "Conocé el fascinante mundo del fly fishing desde cero.",
      price: "$65.000",
    },
    {
      id: 3,
      name: "Técnicas avanzadas de bait y spinning",
      level: "Avanzado",
      modality: "Presencial",
      duration: "5 clases de 3 horas",
      image: fishingSchool3,
      description:
        "Perfeccioná tu técnica en spinning y carnada viva con expertos.",
      price: "$58.000",
    },
    {
      id: 4,
      name: "Curso intensivo con práctica en campo",
      level: "Intermedio",
      modality: "Presencial",
      duration: "2 días completos (fin de semana)",
      image: fishingSchool4,
      description:
        "Fin de semana intensivo en el río. Teoría por la mañana, práctica todo el día.",
      price: "$120.000",
    },
    {
      id: 5,
      name: "Taller de armado y mantenimiento de equipos",
      level: "Intermedio",
      modality: "Presencial",
      duration: "3 clases de 2 horas",
      image: fishingSchool5,
      description:
        "Armá tus señuelos, mantené tu reel, conocé tu equipo a fondo.",
      price: "$38.000",
    },
    {
      id: 6,
      name: "Curso Junior (para chicos)",
      level: "Principiante",
      modality: "Presencial",
      duration: "4 clases de 1.5 horas",
      image: fishingSchool6,
      description:
        "Primer acercamiento a la pesca para chicos de 8 a 14 años. Divertido y seguro.",
      price: "$32.000",
    },
  ];

  // 👨‍🏫 Instructores
  // const instructors = [
  //   {
  //     id: 1,
  //     name: "Pablo Martínez",
  //     specialty: "Pesca con mosca",
  //     experience: "25 años pescando en Patagonia",
  //     image: fishingSchool7,
  //   },
  //   {
  //     id: 2,
  //     name: "Laura Gómez",
  //     specialty: "Spinning y bait",
  //     experience: "Instructora certificada con 15 años de experiencia",
  //     image: fishingSchool2,
  //   },
  //   {
  //     id: 3,
  //     name: "Diego Fernández",
  //     specialty: "Nudos y armado",
  //     experience: "Especialista en equipamiento y técnicas de casting",
  //     image: fishingSchool4,
  //   },
  //   {
  //     id: 4,
  //     name: "Marina Rodríguez",
  //     specialty: "Pesca deportiva",
  //     experience: "Campeona nacional de pesca, docente apasionada",
  //     image: fishingSchool5,
  //   },
  // ];

  // 🫂 Actividades comunitarias
  // const communityEvents = [
  //   {
  //     id: 1,
  //     title: "Jornada de pesca grupal",
  //     date: "15 Diciembre 2024",
  //     type: "Salida",
  //     image: fishingSchool1,
  //     description:
  //       "Salida al Delta con todo el grupo. Práctica libre y almuerzo compartido.",
  //   },
  //   {
  //     id: 2,
  //     title: "Charla abierta con Pablo Martínez",
  //     date: "20 Diciembre 2024",
  //     type: "Charla",
  //     image: fishingSchool3,
  //     description:
  //       "Experiencias en ríos de montaña. Entrada libre para alumnos.",
  //   },
  //   {
  //     id: 3,
  //     title: "Taller gratuito de nudos",
  //     date: "28 Diciembre 2024",
  //     type: "Taller",
  //     image: fishingSchool5,
  //     description: "Workshop abierto. Traé tu equipo y practicá con nosotros.",
  //   },
  //   {
  //     id: 4,
  //     title: "Limpieza de costa comunitaria",
  //     date: "5 Enero 2025",
  //     type: "Acción ambiental",
  //     image: fishingSchool6,
  //     description: "Jornada de cuidado del río. Cañas + conciencia ambiental.",
  //   },
  // ];

  // 💬 Testimonios
  const testimonials = [
    {
      id: 1,
      text: "Pensé que sabía lanzar… hasta que tomé el curso. Me cambió todo. Ahora pesco con confianza.",
      author: "Martín López",
      location: "Buenos Aires",
      image: fishingSchool2,
    },
    {
      id: 2,
      text: "Me encantó la comunidad: aprendés y encima hacés amigos. Los instructores son geniales.",
      author: "Carolina Suárez",
      location: "Rosario",
      image: fishingSchool4,
    },
    {
      id: 3,
      text: "Mi hijo de 10 años hizo el curso Junior. Ahora no para de hablar de nudos y señuelos. ¡Gracias!",
      author: "Roberto González",
      location: "La Plata",
      image: fishingSchool6,
    },
  ];

  // 🎣 Qué incluye
  const benefits = [
    {
      icon: <AutoStories sx={{ fontSize: 40 }} />,
      title: "Material teórico descargable",
      description: "PDFs, videos y guías para repasar en casa",
    },
    {
      icon: <Groups sx={{ fontSize: 40 }} />,
      title: "Acceso a grupos privados",
      description: "Comunidad de alumnos en WhatsApp y encuentros",
    },
    {
      icon: <Terrain sx={{ fontSize: 40 }} />,
      title: "Prácticas en vivo",
      description: "Salidas al río con guía y corrección en tiempo real",
    },
    {
      icon: <EmojiPeople sx={{ fontSize: 40 }} />,
      title: "Feedback personalizado",
      description: "Corrección individual de técnica y postura",
    },
    {
      icon: <Verified sx={{ fontSize: 40 }} />,
      title: "Certificado digital",
      description: "Diploma al completar el curso",
    },
    {
      icon: <Favorite sx={{ fontSize: 40 }} />,
      title: "Becas y promos para socios",
      description: "Descuentos especiales en equipamiento Robinson",
    },
  ];

  // 🧵 Técnica + Práctica
  const differentiators = [
    {
      icon: <Terrain sx={{ fontSize: 50 }} />,
      title: "Prácticas en campo",
      description: "Cada curso incluye salidas reales al río o laguna",
    },
    {
      icon: <EmojiPeople sx={{ fontSize: 50 }} />,
      title: "Corrección personalizada",
      description: "Feedback uno a uno durante las clases",
    },
    {
      icon: <AutoStories sx={{ fontSize: 50 }} />,
      title: "Material didáctico",
      description: "Manuales, videos y recursos digitales",
    },
    {
      icon: <School sx={{ fontSize: 50 }} />,
      title: "Técnica real",
      description: "Basada en experiencia de décadas en el agua",
    },
  ];

  // 🎒 Programas por nivel
  const levelPrograms = [
    {
      level: "Principiante",
      description: "Tu primer caña, tus primeros nudos, primeros lances.",
      color: "#4caf50",
      courses: courses.filter((c) => c.level === "Principiante"),
    },
    {
      level: "Intermedio",
      description: "Perfeccioná tu técnica, aprendé lectura de agua.",
      color: "#ff9800",
      courses: courses.filter((c) => c.level === "Intermedio"),
    },
    {
      level: "Avanzado",
      description:
        "Correcciones finas, lanzamiento, precisión y escenarios complejos.",
      color: "#f44336",
      courses: courses.filter((c) => c.level === "Avanzado"),
    },
  ];

  const generateWhatsAppLink = (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
  };

  const handleWhatsApp = (message) => {
    const link = generateWhatsAppLink("+54 9 11 6830-9347", message);
    window.open(link, "_blank");
  };

  const scrollToCourses = () => {
    document
      .querySelector("#cursos-disponibles")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // 📸 Funciones para el lightbox de galería
  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Manejar teclas de navegación en el lightbox
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNextImage();
    } else if (event.key === "ArrowLeft") {
      handlePrevImage();
    } else if (event.key === "Escape") {
      handleCloseLightbox();
    }
  };

  return (
    <div className="fishing-school-page">
      {/* 🎣 1) HERO INICIAL */}
      <section className="fishing-school-hero">
        <div className="hero-overlay" />
        <Container maxWidth="lg" className="hero-content">
          <Box className="hero-logo">
            <img src={logoRobinson} alt="Robinson Fishing School" />
          </Box>
          <Typography
            sx={{
              color: "#FFF !important",
              background: "none !important",
              backgroundClip: "unset !important",
              WebkitBackgroundClip: "unset !important",
              WebkitTextFillColor: "#ffffff !important",
            }}
            variant="h1"
            className="hero-title animate-fade-in"
          >
            Tu lugar para crecer en la pesca.
          </Typography>
          <Typography
            variant="h5"
            className="hero-subtitle animate-fade-in-delay"
          >
            Formación técnica y comunitaria para pescadores de todos los
            niveles.
          </Typography>
          <Box className="hero-buttons animate-fade-in-delay-2">
            <Button
              size="large"
              className="btn-secondary-school"
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
              startIcon={<WhatsApp />}
              variant="contained"
              onClick={() =>
                handleWhatsApp(
                  "Quiero más información sobre la Fishing School Robinson"
                )
              }
            >
              Contactanos por WhatsApp
            </Button>
          </Box>
        </Container>
      </section>

      {/* 🎣 9) QUÉ INCLUYE LA FISHING SCHOOL */}
      <section className="section-benefits">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Qué incluye la Fishing School
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Valor agregado en cada curso
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  className="benefit-box"
                  sx={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Box className="benefit-icon">{benefit.icon}</Box>
                  <Typography variant="h6" className="benefit-title">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* 📸 7) GALERÍA DE PRÁCTICAS */}
      <section className="section-gallery">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Galería de prácticas
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Momentos reales de aprendizaje y logros
          </Typography>

          <Box className="gallery-grid" sx={{ mt: 4 }}>
            {galleryImages.map((image, index) => (
              <Box
                key={index}
                className="gallery-item"
                onClick={() => handleOpenLightbox(index)}
                sx={{
                  backgroundImage: `url(${image})`,
                  animationDelay: `${index * 0.1}s`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`Ver imagen ${index + 1} de ${
                  galleryImages.length
                }`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleOpenLightbox(index);
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </section>

      {/* 🧵 5) TÉCNICA + PRÁCTICA */}
      <section className="section-differentiators">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Técnica + Práctica
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            No es teoría pura: aprendés haciendo
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {differentiators.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  className="differentiator-box"
                  sx={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Box className="differentiator-icon">{item.icon}</Box>
                  <Typography variant="h6" className="differentiator-title">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* 📚 2) NUESTROS CURSOS */}
      <section id="cursos-disponibles" className="section-courses">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Nuestros Cursos
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Encontrá el curso perfecto para tu nivel y estilo de pesca
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card
                  className="course-card"
                  sx={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={course.image}
                    alt={course.name}
                    className="course-image"
                  />
                  <CardContent>
                    <Box
                      sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                    >
                      <Chip
                        label={course.level}
                        size="small"
                        sx={{
                          backgroundColor:
                            course.level === "Principiante"
                              ? "#4caf50"
                              : course.level === "Intermedio"
                              ? "#ff9800"
                              : "#f44336",
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        label={course.modality}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "#2F5233", color: "#2F5233" }}
                      />
                    </Box>
                    <Typography variant="h6" className="course-name">
                      {course.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {course.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <School fontSize="small" sx={{ color: "#6B8E23" }} />
                      <Typography variant="body2" color="text.secondary">
                        {course.duration}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#6B8E23", fontWeight: 700, mb: 2 }}
                    >
                      {course.price}
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      className="btn-course-info"
                      onClick={() =>
                        handleWhatsApp(
                          `Quiero información sobre el curso: ${course.name}`
                        )
                      }
                    >
                      Ver más
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* 👨‍🏫 3) INSTRUCTORES EXPERTOS
      <section className="section-instructors">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Aprendé con instructores expertos
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Nuestro equipo docente te acompaña en cada paso
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {instructors.map((instructor, index) => (
              <Grid item xs={12} sm={6} md={3} key={instructor.id}>
                <Card
                  className="instructor-card"
                  sx={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Avatar
                    src={instructor.image}
                    alt={instructor.name}
                    sx={{ width: 140, height: 140, margin: "20px auto" }}
                    className="instructor-avatar"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      className="instructor-name"
                    >
                      {instructor.name}
                    </Typography>
                    <Chip
                      label={instructor.specialty}
                      size="small"
                      sx={{
                        backgroundColor: "#6B8E23",
                        color: "#fff",
                        margin: "10px auto",
                        display: "block",
                        width: "fit-content",
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ fontStyle: "italic", mt: 1 }}
                    >
                      "{instructor.experience}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section> */}

      {/* 🫂 4) ACTIVIDADES COMUNITARIAS
      <section className="section-community">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Actividades comunitarias
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Más que cursos, somos una comunidad de apasionados por la pesca
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {communityEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={3} key={event.id}>
                <Card
                  className="community-card"
                  sx={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent>
                    <Chip
                      label={event.type}
                      size="small"
                      sx={{
                        backgroundColor: "#D2691E",
                        color: "#fff",
                        mb: 1,
                        fontWeight: 600,
                      }}
                    />
                    <Typography variant="h6" className="community-title">
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      📅 {event.date}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              className="btn-primary-school"
              onClick={() =>
                handleWhatsApp("Quiero unirme a las actividades comunitarias")
              }
            >
              Unite a la comunidad
            </Button>
          </Box>
        </Container>
      </section> */}

      {/* 🎒 6) PROGRAMAS POR NIVEL */}
      <section className="section-programs">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Programas por nivel
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Elegí el camino que mejor se adapte a tu experiencia
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 4 }}>
            <Tabs
              value={selectedLevel}
              onChange={(e, newValue) => setSelectedLevel(newValue)}
              centered
              className="level-tabs"
            >
              {levelPrograms.map((program, index) => (
                <Tab
                  key={index}
                  label={program.level}
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    "&.Mui-selected": {
                      color: program.color,
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ mt: 4 }}>
            {levelPrograms.map((program, index) => (
              <Box
                key={index}
                role="tabpanel"
                hidden={selectedLevel !== index}
                sx={{ animation: "fadeIn 0.5s ease-in" }}
              >
                {selectedLevel === index && (
                  <Box>
                    <Typography
                      variant="h5"
                      align="center"
                      sx={{
                        color: program.color,
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {program.level}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      color="text.secondary"
                      sx={{ mb: 4, fontStyle: "italic", fontSize: "1.1rem" }}
                    >
                      {program.description}
                    </Typography>

                    <Grid container spacing={3}>
                      {program.courses.map((course) => (
                        <Grid item xs={12} sm={6} md={4} key={course.id}>
                          <Card className="program-course-card">
                            <CardMedia
                              component="img"
                              height="160"
                              image={course.image}
                              alt={course.name}
                            />
                            <CardContent>
                              <Typography
                                variant="h6"
                                className="program-course-name"
                              >
                                {course.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                              >
                                {course.description}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{ color: program.color, mb: 2 }}
                              >
                                {course.price}
                              </Typography>
                              <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                  borderColor: program.color,
                                  color: program.color,
                                  "&:hover": {
                                    backgroundColor: program.color,
                                    color: "#fff",
                                  },
                                }}
                                onClick={() =>
                                  handleWhatsApp(
                                    `Quiero inscribirme en el curso: ${course.name}`
                                  )
                                }
                              >
                                Inscribirme
                              </Button>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </section>

      {/* 🖼️ LIGHTBOX MODAL */}
      <Modal
        open={lightboxOpen}
        onClose={handleCloseLightbox}
        className="lightbox-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onKeyDown={handleKeyDown}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
        >
          {/* Botón cerrar */}
          <IconButton
            onClick={handleCloseLightbox}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.7)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.9)",
              },
              zIndex: 1,
            }}
            aria-label="Cerrar galería"
          >
            <Close />
          </IconButton>

          {/* Botón anterior */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: { xs: 10, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.7)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.9)",
              },
            }}
            aria-label="Imagen anterior"
          >
            <NavigateBefore fontSize="large" />
          </IconButton>

          {/* Imagen */}
          <Box
            component="img"
            src={galleryImages[selectedImageIndex]}
            alt={`Práctica de pesca ${selectedImageIndex + 1}`}
            sx={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          />

          {/* Botón siguiente */}
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: { xs: 10, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.7)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.9)",
              },
            }}
            aria-label="Siguiente imagen"
          >
            <NavigateNext fontSize="large" />
          </IconButton>

          {/* Contador de imágenes */}
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              bottom: { xs: 10, md: -40 },
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.9rem",
            }}
          >
            {selectedImageIndex + 1} / {galleryImages.length}
          </Typography>
        </Box>
      </Modal>

      {/* 💬 8) TESTIMONIOS DE ALUMNOS */}
      <section className="section-testimonials">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title" align="center">
            Lo que dicen nuestros alumnos
          </Typography>
          <Typography
            variant="body1"
            className="section-subtitle"
            align="center"
          >
            Experiencias reales de quienes ya pasaron por la escuela
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  className="testimonial-card"
                  sx={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent>
                    <Typography variant="body1" className="testimonial-text">
                      "{testimonial.text}"
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 3,
                      }}
                    >
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.author}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* 💬 10) CTA FINAL */}
      <section className="section-cta-final">
        <div className="cta-overlay" />
        <Container maxWidth="md">
          <Box className="cta-content">
            <Typography variant="h2" className="cta-title">
              Aprendé, viví y pescá con nosotros.
            </Typography>
            <Typography variant="h6" className="cta-subtitle">
              Sumate a la Fishing School Robinson y transformá tu técnica
            </Typography>
            <Box className="cta-buttons">
              <Button
                variant="contained"
                size="large"
                className="btn-cta-primary"
                onClick={scrollToCourses}
              >
                Ver cursos
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="btn-cta-secondary"
                onClick={() =>
                  handleWhatsApp("Quiero más información sobre los cursos")
                }
              >
                Quiero información
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default FishingSchoolScreen;
