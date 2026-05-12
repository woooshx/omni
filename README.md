# OMNI Sales Page

Sales page optimizada para dispositivos móviles aplicando UI/UX con neuromarketing para la marca OMNI.

## 📁 Estructura del Proyecto

```
/workspace
├── index.html              # Página principal (HTML semántico)
├── css/
│   └── styles.css          # Hoja de estilos completa
├── js/
│   └── main.js             # JavaScript con funcionalidades UX
├── assets/
│   └── images/             # Directorio para imágenes (placeholder)
├── sales-page-omni.html    # Versión original monolítica (respaldo)
├── BRIEF_OMNI_conversión.md # Brief original de la marca
└── README.md               # Este archivo
```

## 🎨 Identidad Visual OMNI

### Paleta Alquímica 80/10/10

**80% - Base del Misterio:**
- `--azul-profundo-cosmos: #0B1026`
- `--negro-profundo-akasha: #050505`
- `--gris-carbon: #2E2E2E`
- `--sombra-amatista: #1A1525`
- `--verde-musgo-ritual: #14201A`

**10% - Sabiduría y Estructura:**
- `--oro-sagrado-metalico: #C5A059`
- `--blanco-pergamino: #F4F1EA`
- `--morado-astral: #4A148C`
- `--cobre-terrenal: #B87333`
- `--plata-lunar: #B0C4DE`

**10% - Energía Alquímica (CTA):**
- `--fucsia-tercer-ojo: #D500F9`
- `--ambar-alquimico: #FFD700`
- `--rojo-fuego-vital: #FF3D00`
- `--esmeralda-cuantico: #00FF7F`

### Tipografías

- **Títulos:** Cinzel Decorative (wght@700;900)
- **Cuerpo:** Quintessential
- **UI/Botones:** Montserrat (wght@500;600;700)

## 🧠 Estrategias de Neuromarketing Aplicadas

### 1. Disparadores FOMO (Fear Of Missing Out)
- Badges de escasez animados ("Casi agotado", "Última oportunidad")
- Contador de unidades limitadas en tiempo real
- Animación de pulso en elementos de urgencia

### 2. Lenguaje de Pertenencia
- Uso de "Círculo OMNI", "Portadores", "Reliquias"
- Verbos del arquetipo Explorador: "Reivindica", "Activa", "Portar"
- Creación de identidad tribal

### 3. Storyselling por Producto
- Cada producto tiene un mito asociado
- Conexión emocional antes de la tangibilización
- Narrativa de transformación personal

### 4. Efecto Resplandor
- Glow animations en elementos clave
- Sombras que simulan energía
- Gradientes que evocan lo místico

### 5. Prueba Social
- Testimonios con estrellas visibles
- Ubicación geográfica de los portadores
- Badge "Más vendido" en producto estrella

## 📱 Optimización Mobile-First

### Características Técnicas
- Diseño responsive progresivo (mobile → tablet → desktop)
- Sticky CTA persistente en móvil después del hero
- Touch targets de mínimo 44x44px
- Smooth scroll para navegación interna
- Animaciones fade-in al hacer scroll (Intersection Observer)

### Breakpoints
- **Mobile:** < 768px (diseño base)
- **Tablet:** ≥ 768px (grid 2-3 columnas)
- **Desktop:** ≥ 1024px (grid 3 columnas completo)

## ⚡ Funcionalidades JavaScript

### Módulo de Carrito
- Contador en tiempo real
- Feedback visual al añadir producto
- Eventos personalizados para analytics

### Sticky CTA Móvil
- Aparece después del hero section
- Desaparece al volver arriba
- Optimizado para conversión en scroll

### Animaciones Scroll
- Intersection Observer para fade-in
- Parallax suave en hero section
- Unobserve después de animar (performance)

### Lazy Loading
- Carga diferida de imágenes
- Mejora de performance en móviles
- Placeholder hasta carga completa

### Detección de Dispositivo
- Función `isMobile()` para ajustes específicos
- Preparado para integraciones PWA

## 🔗 Secciones de la Landing

1. **Header** - Logo + carrito sticky
2. **Hero** - Propuesta de valor + CTAs duales
3. **Beneficios** - 3 cards con iconos
4. **Productos** - Grid con storyselling
5. **Testimonios** - Prueba social
6. **Historia** - Storytelling de marca
7. **Newsletter** - Lead magnet 10%
8. **Footer** - Links + redes sociales

## 🚀 Cómo Usar

### Desarrollo Local
```bash
# Opción 1: Servidor simple de Python
cd /workspace
python -m http.server 8000

# Opción 2: Node.js live-server
npx live-server

# Opción 3: Abrir directamente
open index.html
```

### Producción
1. Subir todos los archivos al hosting
2. Asegurar ruta relativa correcta (`css/`, `js/`, `assets/`)
3. Configurar HTTPS para service workers (opcional)
4. Reemplazar placeholders de imágenes

## 📊 Métricas de Conversión Integradas

### Eventos Personalizados
```javascript
// Cuando se añade producto
window.dispatchEvent(new CustomEvent('productAdded', { 
    detail: { productName, cartCount } 
}));

// Cuando se suscribe al newsletter
window.dispatchEvent(new CustomEvent('newsletterSubscribed', { 
    detail: { email } 
}));

// Cuando carga la página
window.dispatchEvent(new CustomEvent('omniPageLoaded'));
```

### Integraciones Sugeridas
- Google Analytics 4
- Facebook Pixel
- Hotjar (heatmaps)
- Email marketing (Mailchimp, Klaviyo)

## ♿ Accesibilidad

- Contraste de colores WCAG AA
- Navegación por teclado
- Labels en formularios
- Alt text en imágenes (cuando se agreguen)
- Focus visible en elementos interactivos

## 📝 Notas de Implementación

### Pendientes
- [ ] Reemplazar placeholders con imágenes reales de productos
- [ ] Configurar endpoint real para newsletter
- [ ] Integrar pasarela de pagos
- [ ] Añadir página de gracias post-compra
- [ ] Implementar service worker para PWA

### Optimizaciones Futuras
- Critical CSS inline para above-the-fold
- Preload de fuentes críticas
- Compresión de imágenes WebP
- Minificación de CSS/JS para producción

---

**FORJADO EN COLOMBIA** ✨  
© OMNI 2026. Todos los derechos reservados.
