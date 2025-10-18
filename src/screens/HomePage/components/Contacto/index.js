import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contacto = () => {
  const contacts = [
    {
      title: "Mayorista",
      phone: "+54 9 11 6107-2292",
      message: "Hola buen día! Quiero obtener mas información",
      row: 0,
    },
    {
      title: "Local",
      subtitle: "Minorista",
      phone: "+54 9 11 6641-7047",
      instagram:
        "https://www.instagram.com/casadepescarobinson?igsh=MTFndDlmdDI4dXZxNg==",
      message: "Hola buen día! Quiero obtener mas información",
      row: 0,
    },
    {
      title: "Fishing School",
      phone: "+54 9 11 6830-9347",
      message: "Hola buen día! Quiero obtener mas información sobre la escuela",
      row: 1,
    },
    {
      title: "Expediciones",
      phone: "+54 9 11 6830-9347",
      message:
        "Hola buen día! Quiero obtener mas información sobre las expediciones",
      row: 1,
    },
  ];

  const generateWhatsAppLink = (phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
  };

  return (
    <Box id="contacto">
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {contacts.map((contact, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={contact.row === 0 ? 6 : 6}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ flex: 1, maxWidth: "400px" }}>
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                  {contact.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {contact.phone}
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
                    href={generateWhatsAppLink(contact.phone, contact.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#25D366 !important", // WhatsApp green color
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 32 }} />
                  </IconButton>
                  {contact.instagram && (
                    <IconButton
                      component="a"
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#E4405F !important", // Instagram pink color
                      }}
                    >
                      <InstagramIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contacto;
