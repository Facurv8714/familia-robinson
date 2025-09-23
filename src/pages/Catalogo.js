import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  CardMedia,
} from "@mui/material";
import {
  ArrowBack,
  ShoppingCart,
  Star,
  LocalOffer,
  Inventory,
  CheckCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PALETTE } from "../constants";

export default function Catalogo() {
  // Datos de ejemplo para productos
  const productos = [
    {
      id: 1,
      nombre: "Caña de Pescar Profesional",
      precio: "$45.000",
      categoria: "Pesca",
      rating: 4.8,
      stock: "En stock",
      imagen: "🎣",
      descripcion: "Caña de fibra de carbono para pesca deportiva",
    },
    {
      id: 2,
      nombre: "Carpa 4 Estaciones",
      precio: "$120.000",
      categoria: "Camping",
      rating: 4.9,
      stock: "Pocas unidades",
      imagen: "⛺",
      descripcion: "Carpa resistente para 4 personas",
    },
    {
      id: 3,
      nombre: "Kit de Anzuelos Variados",
      precio: "$8.500",
      categoria: "Pesca",
      rating: 4.6,
      stock: "En stock",
      imagen: "🪝",
      descripcion: "Set completo de anzuelos de diferentes tamaños",
    },
    {
      id: 4,
      nombre: "Mochila Outdoor 65L",
      precio: "$75.000",
      categoria: "Camping",
      rating: 4.7,
      stock: "En stock",
      imagen: "🎒",
      descripcion: "Mochila impermeable para trekking y camping",
    },
    {
      id: 5,
      nombre: "Reel Spinning Profesional",
      precio: "$32.000",
      categoria: "Pesca",
      rating: 4.8,
      stock: "En stock",
      imagen: "🎣",
      descripcion: "Reel de alta precisión para spinning",
    },
    {
      id: 6,
      nombre: "Bolsa de Dormir -15°C",
      precio: "$55.000",
      categoria: "Camping",
      rating: 4.5,
      stock: "En stock",
      imagen: "🛌",
      descripcion: "Bolsa de dormir para temperaturas extremas",
    },
  ];

  const categorias = ["Todos", "Pesca", "Camping", "Accesorios"];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header de la página */}
      <Container maxWidth="lg" sx={{ pt: 4, pb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBack />}
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            Volver al inicio
          </Button>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
              Catálogo Completo
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Descubrí todos nuestros productos para pesca y camping
            </Typography>
          </Box>
        </Box>

        {/* Filtros por categoría */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Categorías
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {categorias.map((categoria) => (
              <Chip
                key={categoria}
                label={categoria}
                clickable
                variant={categoria === "Todos" ? "filled" : "outlined"}
                color={categoria === "Todos" ? "primary" : "default"}
                sx={{ borderRadius: 2 }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Grid de productos */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={3}>
          {productos.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                  borderRadius: 3,
                }}
              >
                {/* Imagen del producto */}
                <Box
                  sx={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${PALETTE.fondo}20, ${PALETTE.fondo}10)`,
                    fontSize: "4rem",
                  }}
                >
                  {producto.imagen}
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Categoría y stock */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Chip
                      label={producto.categoria}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label={producto.stock}
                      size="small"
                      color={producto.stock === "En stock" ? "success" : "warning"}
                      variant="filled"
                      icon={<Inventory />}
                    />
                  </Box>

                  {/* Nombre del producto */}
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}
                  >
                    {producto.nombre}
                  </Typography>

                  {/* Descripción */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {producto.descripcion}
                  </Typography>

                  {/* Rating */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Star sx={{ color: "#ffd700", fontSize: "1.2rem" }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {producto.rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      (127 reseñas)
                    </Typography>
                  </Box>

                  {/* Precio */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "primary.main",
                      mb: 3,
                    }}
                  >
                    {producto.precio}
                  </Typography>

                  {/* Botones de acción */}
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCart />}
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    >
                      Consultar
                    </Button>
                    <Button variant="outlined" sx={{ borderRadius: 2 }}>
                      <LocalOffer />
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Card
            sx={{
              p: 4,
              background: `linear-gradient(135deg, ${PALETTE.primario}10, ${PALETTE.acento}10)`,
              borderRadius: 3,
            }}
          >
            <Avatar
              sx={{
                width: 64,
                height: 64,
                mx: "auto",
                mb: 3,
                background: `linear-gradient(135deg, ${PALETTE.primario}, ${PALETTE.acento})`,
              }}
            >
              💬
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              ¿No encontrás lo que buscás?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Contáctanos y te ayudamos a encontrar el producto perfecto para tu
              aventura.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/#contacto"
              sx={{ borderRadius: 2, px: 4 }}
            >
              Contactar ahora
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}