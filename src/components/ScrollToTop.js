import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que hace scroll hacia arriba cuando cambia la ruta
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantáneo al tope de la página
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
