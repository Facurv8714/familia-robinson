import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ChevronRight, CheckCircle, ShoppingCart } from "@mui/icons-material";

const cardData = [
  {
    id: "mayorista",
    avatar: "🏪",
    title: "Robinson Mayorista",
    description: (
      <>
        Distribuimos productos de pesca, camping y outdoor
        <br />a comercios que buscan
        <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
          &nbsp;calidad y confianza
        </Box>
        <br />
        para sus clientes.
      </>
    ),
    listItems: [
      "Potenciamos tu negocio con ADN outdoor.",
      "Abastecimiento eficiente y confiable",
      "Abasteciendo comercios, impulsando aventuras.",
    ],
    button: {
      text: "Ver mas",
      href: "/mayorista",
      color: "primary",
      endIcon: <ChevronRight />,
    },
  },
  {
    id: "minorista",
    avatar: "🛒",
    title: "Robinson Minorista",
    description: (
      <>
        Tu tienda especializada para amantes de la pesca,
        <br />
        el camping y la vida al aire libre. Encontrá lo necesario
        <br />
        para que cada aventura sea
        <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
          &nbsp;inolvidable.
        </Box>
      </>
    ),
    listItems: [
      "Equipate para cada aventura.",
      "Tu aliado en la naturaleza.",
      "Calidad y confianza para tus días al aire libre.",
    ],
    button: {
      text: "Ver mas",
      href: "/minorista",
      color: "secondary",
      startIcon: <ShoppingCart />,
    },
  },
  {
    id: "fishing-school",
    avatar: "🎣",
    title: "Robinson Fishing School",
    description: (
      <>
        Espacio de aprendizaje para pescadores de todos
        <br />
        los niveles. Ofrecemos cursos, talleres y actividades
        <br />
        comunitarias para perfeccionar técnicas,
        <br />
        compartir experiencias, conectar con la naturaleza y la
        <br />
        <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
          pasión por la pesca.
        </Box>
      </>
    ),
    listItems: [
      "De pescador a pescador: aprendé y disfrutá.",
      "Cursos presenciales y salidas grupales",
      "Técnicas de pesca especializada",
    ],
    button: {
      text: "Ver mas",
      href: "/fishing-school",
      color: "default",
      endIcon: <ChevronRight />,
    },
  },
  {
    id: "expediciones",
    avatar: "🏕️",
    title: "Robinson Expediciones (futuro)",
    description: (
      <>
        Organizamos viajes y expediciones guiadas para vivir
        <br />
        la naturaleza en su máxima expresión.
        <br />
        Clínicas, experiencias y aventuras diseñadas para <br />
        quienes buscan explorar, aprender y conectar con el
        <br />
        entorno natural de manera
        <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
          &nbsp;segura y apasionante.
        </Box>
      </>
    ),
    listItems: [
      "Aventuras que transforman.",
      "Explorá con expertos, viví Robinson.",
      "Tu puerta a la naturaleza salvaje.",
    ],
    button: {
      text: "Ver mas",
      href: "/expediciones",
      color: "default",
      endIcon: <ChevronRight />,
    },
  },
];

const BusinessCard = ({ card }) => (
  <Card
    id={card.id}
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
    onClick={() => {
      window.location.href = card.button.href;
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            fontSize: "1.5rem",
          }}
        >
          {card.avatar}
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {card.title}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ mb: 3, fontSize: "1rem", color: "rgba(0, 0, 0, 0.7)" }}
      >
        {card.description}
      </Typography>
      <List sx={{ mb: 3, flex: 1 }}>
        {card.listItems.map((item, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemIcon>
              <CheckCircle sx={{ color: "primary.main" }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color={card.button.color}
        startIcon={card.button.startIcon}
        endIcon={card.button.endIcon}
        href={card.button.href}
        fullWidth
        sx={{
          mt: "auto",
          py: 1.5,
          fontSize: "0.9rem",
          fontWeight: 600,
          borderRadius: 2,
        }}
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click event
          window.location.href = card.button.href;
        }}
      >
        {card.button.text}
      </Button>
    </CardContent>
  </Card>
);

const BusinessCardsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <BusinessCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BusinessCardsSection;
