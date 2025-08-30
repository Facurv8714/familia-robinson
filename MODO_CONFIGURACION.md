# Modo Configuración - Familia Robinson

## 📋 Descripción

Se ha implementado un **Modo Configuración** que permite ocultar/mostrar cualquier componente o sección de la aplicación web de Familia Robinson. Esta funcionalidad incluye **reacomodo automático de espacios** para que no queden espacios en blanco cuando se ocultan secciones.

## 🎯 Funcionalidades Implementadas

### 1. Activación del Modo Configuración

- **Ubicación**: Topbar (barra superior)
- **Botón**: Ícono de engranaje (⚙️) en la topbar
- **Estados**:
  - 🔧 Modo activo: Ícono con efecto pulsante y color amarillo/warning
  - ⚙️ Modo inactivo: Ícono gris normal

### 2. ✨ Reacomodo Automático de Espacios

- **Sin espacios en blanco**: Las secciones ocultas no ocupan espacio cuando no está en modo configuración
- **Grid responsivo**: Las tarjetas se redistribuyen automáticamente para ocupar el espacio disponible
- **Transiciones suaves**: Animaciones de 500ms para cambios de visibilidad usando Material-UI Collapse
- **Expansión inteligente**: Si solo queda una tarjeta visible, ocupa todo el ancho (12 columnas)
- **Collapse con unmount**: Los componentes se desmontan completamente para liberar memoria
- **Placeholders compactos**: En modo configuración, las secciones ocultas muestran un placeholder mínimo

### 3. Componentes Configurables

#### Secciones Principales:

- ✅ **Hero Section** (sección principal)
- ✅ **Tarjeta Mayorista**
- ✅ **Tarjeta Minorista**
- ✅ **Tarjeta Fishing School**
- ✅ **Tarjeta Expediciones**
- ✅ **Sección Quiénes Somos**
- ✅ **Tarjeta de Atención**
- ✅ **CTA Final**
- ✅ **Formulario de Contacto**
- ✅ **Footer**
- ✅ **Botón Flotante (FAB)**

#### Subsecciones del Hero Section:

- 🏷️ **Logo y branding**
- 🏆 **Chip de marca/variante**
- 📝 **Título principal**
- 🖼️ **Carousel de imágenes**
- 📖 **Descripción textual**
- 🔘 **Botones de navegación**
- 🎯 **Chips promocionales**
- 📊 **Sección promocional lateral**

## 🎮 Cómo Usar

### Activar el Modo Configuración:

1. Haz clic en el ícono ⚙️ en la topbar
2. Se activará el modo configuración (aparece indicador visual)
3. Aparecen íconos de configuración en cada sección

### Ocultar/Mostrar Componentes:

1. Con el modo activo, cada sección muestra íconos flotantes:

   - 👁️ **Verde**: Sección visible - clic para ocultar
   - 👁️‍🗨️ **Rojo**: Sección oculta - clic para mostrar
   - ⚙️ **Azul**: Configuración adicional (futuro)

2. Las secciones ocultas muestran un placeholder con el nombre

### Desactivar el Modo:

1. Haz clic nuevamente en el ícono en la topbar
2. Los íconos de configuración desaparecen
3. Solo se muestran las secciones visibles

## 🔧 Implementación Técnica

### Archivos Modificados:

- `src/constants.js` - Constantes de componentes configurables
- `src/components/ConfigurableSection/index.js` - Componente wrapper con Collapse y unmountOnExit
- `src/components/ConfigurableGridItem/index.js` - **NUEVO**: Wrapper especializado para Grid items
- `src/components/Topbar/index.js` - Botón de modo configuración
- `src/App.js` - Estado global y lógica de visibilidad con helpers de reacomodo
- `src/components/HeroSection/index.js` - Subsecciones configurables

### Estado de la Aplicación:

```javascript
const [configMode, setConfigMode] = useState(false);
const [hiddenComponents, setHiddenComponents] = useState(new Set());

// Nuevas funciones helper para reacomodo automático
const getVisibleSectionsCount = (groupIds) => {
  return groupIds.filter(id => isComponentVisible(id)).length;
};

const isAnyGroupSectionVisible = (groupIds) => {
  return groupIds.some(id => isComponentVisible(id));
};
```

### Componente ConfigurableSection Mejorado:

```javascript
<ConfigurableSection
  sectionId="unique-section-id"
  isConfigMode={configMode}
  isVisible={isComponentVisible(sectionId)}
  onToggleVisibility={toggleComponentVisibility}
  collapsible={true} // Control de animaciones Collapse
>
  {/* Contenido del componente */}
</ConfigurableSection>
```

### Nuevo ConfigurableGridItem (Para Tarjetas):

```javascript
<ConfigurableGridItem
  sectionId="card-id"
  isConfigMode={configMode}
  isVisible={isComponentVisible(sectionId)}
  onToggleVisibility={toggleComponentVisibility}
  gridProps={{ 
    xs: 12, 
    md: getVisibleSectionsCount(groupIds) === 1 ? 12 : 6 // Auto-expansión
  }}
>
  {/* Contenido de la tarjeta */}
</ConfigurableGridItem>
```

## 🎨 Indicadores Visuales

### Modo Configuración Activo:

- 🟡 Chip animado "Modo Configuración Activo" en topbar
- 🔴 Borde punteado rojo en secciones ocultas (placeholders compactos de 60px)
- 💫 Efectos de hover y animaciones en botones
- 🔴/🟢 Códigos de color para estados visible/oculto
- 📦 Emoji identificador en placeholders

### Animaciones Mejoradas:

- **Material-UI Collapse**: Transiciones suaves de 500ms con cubic-bezier
- **Pulse** en botón de configuración cuando activo
- **Desmontaje con unmountOnExit**: Sin ocupar espacio cuando oculto
- **Auto-expansión**: Las tarjetas restantes ocupan automáticamente el espacio libre
- **Efectos de escala** en hover de botones
- **Sombras dinámicas** según estado

## 🚀 Extensibilidad

El sistema está diseñado para ser fácilmente extensible:

1. **Agregar nuevos componentes**: Solo agregar ID en `HIDEABLE_COMPONENTS`
2. **Subsecciones**: Envolver con `ConfigurableSection`
3. **Grid items**: Usar `ConfigurableGridItem` para reacomodo automático
4. **Persistencia**: Se puede agregar localStorage fácilmente
5. **Configuración avanzada**: El botón azul está listo para futuras funciones

## ✨ Beneficios del Reacomodo Automático

### 🎯 **Experiencia de Usuario**:
- **Sin espacios vacíos**: Interfaz siempre optimizada visualmente
- **Responsive dinámico**: Las tarjetas se adaptan automáticamente al espacio disponible
- **Transiciones fluidas**: Cambios suaves que no desorientan al usuario
- **Consistencia visual**: Mantiene la armonía del diseño sin importar qué se oculte

### 🔧 **Beneficios Técnicos**:
- **Optimización de memoria**: Los componentes ocultos se desmontan completamente
- **Performance mejorado**: Menos elementos en DOM cuando no están en modo configuración
- **Grid inteligente**: Auto-expansión de 6 a 12 columnas cuando solo queda una tarjeta
- **Código reutilizable**: `ConfigurableGridItem` simplifica el manejo de layouts

### 📊 **Casos de Uso Prácticos**:
- **Demos personalizadas**: Mostrar solo servicios relevantes para cada cliente
- **A/B Testing**: Probar diferentes combinaciones de contenido
- **Eventos especiales**: Ocultar temporalmente secciones no relacionadas
- **Presentaciones focalizadas**: Destacar solo los servicios de interés

## 🎯 Casos de Uso

- **Demostración de productos**: Ocultar secciones no relevantes
- **Personalización por cliente**: Adaptar vista según necesidades
- **Testing de UI**: Probar diferentes combinaciones de contenido
- **Presentaciones**: Mostrar solo secciones específicas
- **Mantenimiento**: Ocultar temporalmente secciones en desarrollo
