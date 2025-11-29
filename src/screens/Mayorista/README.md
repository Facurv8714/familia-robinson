# Página Mayorista (B2B) - Documentación

## 🎯 Objetivo

Transmitir profesionalismo, volumen, catálogo amplio y beneficios exclusivos para negocios. Página enfocada en distribución mayorista con diseño corporativo.

## 📦 Estructura de la Página

### 1. **Hero Corporativo**

- Imagen de depósito, bultos, logística
- Título: "Potenciamos tu negocio con ADN outdoor"
- Subtítulo: "Distribución mayorista para comercios"
- Botones:
  - "Quiero ser cliente mayorista" → scroll a formulario
  - "Ver catálogo mayorista" → descarga de catálogo

### 2. **Beneficios para Comercios** ⭐

Grid 3x2 con tarjetas profesionales:

- ✅ Más de 5.000 artículos
- ✅ Stock real y rotación constante
- ✅ Marcas líderes del mercado
- ✅ Atención personalizada
- ✅ Precios y condiciones exclusivas
- ✅ Envíos a todo el país

### 3. **Carrusel de Marcas Premium**

- Auto-scroll de marcas con las que trabajan
- Navegación manual con flechas
- Presentación profesional en tarjetas blancas

### 4. **Destacados para Negocios**

Productos con alta rotación:

- Cañas de pesca variadas
- Reels y carretes
- Carpas y equipamiento camping
- Cuchillería premium

### 5. **Testimonios B2B**

Casos reales de otros negocios:

- Outdoors & Co (Mar del Plata)
- Pesca Total (Rosario)
- Aventura Sport (Mendoza)

### 6. **Cómo Trabajamos**

Timeline horizontal con 5 pasos:

1. Registrá tu comercio
2. Accedé al catálogo mayorista
3. Hacé pedidos según tu necesidad
4. Enviamos a sucursal o domicilio
5. Atención personalizada post-venta

### 7. **Formulario de Contacto Mayorista**

Campos:

- Nombre del comercio
- Nombre de contacto
- Email
- Teléfono
- Ubicación del negocio
- Mensaje (detalles sobre el negocio)

Botón: Enviar solicitud por WhatsApp

**Contacto directo adicional:**

- WhatsApp Mayorista
- Email Mayorista

## 🎨 Diseño y Estilo

### Diferencias vs Página Minorista

| Aspecto               | Minorista                 | Mayorista                         |
| --------------------- | ------------------------- | --------------------------------- |
| **Paleta de colores** | Colores vivos, outdoor    | Azules/grises corporativos        |
| **Tono**              | Emocional, aventura       | Profesional, confiable            |
| **Imágenes**          | Naturaleza, acción        | Depósito, volumen, orden          |
| **Tipografía**        | Más display, creativa     | Más limpia, corporativa           |
| **CTAs**              | "Ver catálogo", "Comprar" | "Ser cliente", "Solicitar acceso" |

### Variables CSS Principales

```css
--b2b-primary: #1565c0 (Azul corporativo)
--b2b-primary-dark: #0d47a1
--b2b-primary-light: #42a5f5
--b2b-secondary: #546e7a (Gris profesional)
--b2b-text: #263238
```

## 🧩 Componentes Reutilizables

### B2BBenefits.jsx

Muestra beneficios en grid con:

- Íconos personalizados
- Animaciones hover profesionales
- Colores por categoría

**Props:**

```javascript
benefits: [
  {
    id: number,
    icon: ReactElement,
    title: string,
    description: string,
    color: string,
  },
];
```

### BrandCarousel.jsx

Carrusel automático de marcas:

- Auto-scroll configurable
- Navegación manual
- Responsive

**Props:**

```javascript
brands: string[]
itemsToShow: number (default: 3)
autoScrollInterval: number (default: 2500ms)
```

### ProcessTimeline.jsx

Timeline horizontal de pasos:

- Diseño paso a paso numerado
- Íconos y descripciones
- Líneas conectoras

**Props:**

```javascript
steps: [
  {
    step: number,
    title: string,
    description: string,
    icon: ReactElement,
  },
];
```

## 📱 Responsive Design

- **Desktop (>960px)**: Layout completo, timeline horizontal
- **Tablet (600-960px)**: Grid ajustado, 2 columnas
- **Mobile (<600px)**: Stack vertical, timeline vertical

## 🔧 Uso de los Componentes

### Ejemplo de uso:

```javascript
import { B2BBenefits, BrandCarousel, ProcessTimeline } from '../../components/B2B';

// En tu página
<B2BBenefits benefits={benefitsData} />
<BrandCarousel brands={brandsArray} itemsToShow={3} />
<ProcessTimeline steps={processSteps} />
```

## 🚀 Funcionalidades Implementadas

### WhatsApp Integration

- Formulario envía datos estructurados por WhatsApp
- Links directos a consultas mayoristas
- Formato profesional de mensajes

### Animaciones

- Slide-in para tarjetas de beneficios
- Hover effects profesionales
- Transiciones suaves (cubic-bezier)

### Accesibilidad

- Focus states visibles
- Keyboard navigation
- ARIA labels donde corresponde

## 📋 Próximas Mejoras Sugeridas

- [ ] Sistema de login para catálogo privado
- [ ] Descarga de PDF con catálogo mayorista
- [ ] Portal de clientes mayoristas
- [ ] Sistema de pedidos online
- [ ] Dashboard con historial de compras
- [ ] Integración con sistema de stock en tiempo real

## 🎯 Métricas de Conversión

Elementos optimizados para conversión:

1. CTA visible en hero
2. Beneficios claros y tangibles
3. Testimonios de casos reales
4. Proceso transparente
5. Contacto directo múltiple

---

**Autor:** Familia Robinson Team  
**Última actualización:** Noviembre 2024  
**Versión:** 1.0.0
