export const getLevelColor = (level) => {
  const colors = {
    Principiante: "#4caf50 !important",
    Intermedio: "#ff9800 !important",
    Avanzado: "#f44336 !important",
    Experto: "#9c27b0 !important",
    "Todos los niveles": "#2196f3 !important",
    Familiar: "#e91e63 !important",
  };
  return colors[level] || "#757575 !important";
};

export const generateWhatsAppLink = (message) => {
  const phone = "+5491158427688";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encodedMessage}`;
};
