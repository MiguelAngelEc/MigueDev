---
description: "Reglas de desarrollo para Portfolio Personal - Astro + Tailwind CSS"
globs:
  - "**/*.astro"
  - "**/*.js" 
  - "**/*.ts"
  - "**/*.jsx"
  - "**/*.tsx"
  - "**/*.css"
  - "**/*.md"
  - "**/*.json"
alwaysApply: true
---

# PROJECT RULES - Portfolio Personal

## 📋 Propósito del Proyecto

Este proyecto tiene como objetivo construir un **portafolio profesional** utilizando tecnologías modernas, priorizando:
- ⚡ **Rendimiento óptimo**
- ♿ **Accesibilidad web**
- 🎨 **Experiencia de usuario excepcional**
- 📱 **Diseño responsivo**

---

## 🛠️ Stack Tecnológico

### Tecnologías Principales
- **Framework:** [Astro](https://astro.build/) - Framework estático moderno
- **Lenguaje:** JavaScript ES6+ 
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Control de versiones:** Git

### Librerías Adicionales
- Solo se permiten librerías ligeras y específicamente aprobadas
- Cada nueva dependencia debe ser justificada y documentada
- Priorizar soluciones nativas antes que librerías externas

---

## 📁 Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables (.astro, .js)
├── pages/              # Páginas del sitio (.astro)
├── layouts/            # Layouts base (.astro)
├── styles/             # Estilos globales (.css)
├── assets/             # Recursos estáticos (imágenes, iconos, fonts)
├── utils/              # Funciones utilitarias (.js)
├── data/               # Datos estáticos (.json, .js)
└── types/              # Definiciones de tipos (si es necesario)

public/                 # Archivos públicos accesibles directamente
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

### Reglas de Organización
- Mantener cada carpeta con un propósito específico y claro
- No mezclar tipos de archivos en carpetas incorrectas
- Crear subcarpetas cuando sea necesario para mejor organización

---

## 💻 Estilo de Código

### Convenciones de JavaScript
```javascript
// ✅ Correcto - ES6+ moderno
const getUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

// ✅ Destructuring y arrow functions
const { name, email, avatar } = user;
const filteredProjects = projects.filter(project => project.featured);
```

### Formato y Legibilidad
- **Indentación:** 2 espacios (no tabs)
- **Punto y coma:** Siempre al final de statements
- **Comillas:** Usar comillas simples `'` para strings
- **Longitud de línea:** Máximo 80-100 caracteres

### Comentarios
```javascript
/**
 * Calcula el tiempo de lectura estimado de un artículo
 * @param {string} content - Contenido del artículo
 * @param {number} wordsPerMinute - Palabras por minuto (default: 200)
 * @returns {number} Tiempo en minutos
 */
const calculateReadingTime = (content, wordsPerMinute = 200) => {
  // Implementación...
};
```

---

## 📝 Convenciones de Nombres

### Archivos y Carpetas
- **Componentes Astro:** `PascalCase.astro`
  - Ejemplo: `Header.astro`, `ProjectCard.astro`
- **Archivos JavaScript:** `camelCase.js`
  - Ejemplo: `utils.js`, `apiHelpers.js`
- **Carpetas:** `kebab-case`
  - Ejemplo: `project-cards/`, `user-profile/`
- **Imágenes:** `kebab-case.ext`
  - Ejemplo: `hero-image.webp`, `project-thumbnail.jpg`

### Variables y Funciones
```javascript
// ✅ Variables - camelCase
const userName = 'John Doe';
const isProjectFeatured = true;
const userProfileData = {};

// ✅ Funciones - camelCase con verbos descriptivos
const fetchProjectData = () => {};
const handleFormSubmit = () => {};
const validateEmailFormat = () => {};

// ✅ Constantes - SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const MAX_PROJECTS_PER_PAGE = 6;
```

---

## 🎯 Buenas Prácticas

### Desarrollo
- **Componentes reutilizables:** Crear componentes modulares y reutilizables
- **DRY Principle:** Evitar duplicación de código
- **Separación de responsabilidades:** Cada función/componente debe tener un propósito claro
- **Manejo de errores:** Implementar try-catch y validaciones apropiadas

### Performance
- **Optimización de imágenes:** Usar formatos modernos (WebP, AVIF)
- **Lazy loading:** Implementar carga diferida para imágenes
- **Minificación:** Aprovechar las optimizaciones automáticas de Astro
- **Bundle size:** Monitorear el tamaño de los archivos generados

### Accesibilidad
```html
<!-- ✅ Ejemplos de buenas prácticas -->
<img src="project.jpg" alt="Captura de pantalla del proyecto ecommerce" />
<button aria-label="Abrir menú de navegación">☰</button>
<main role="main">
  <h1>Título principal de la página</h1>
</main>
```

### SEO
- Usar etiquetas meta apropiadas
- Implementar datos estructurados cuando sea relevante
- Optimizar títulos y descripciones
- Generar sitemap automáticamente

---

## 🧪 Testing y Quality Assurance

### Pruebas Visuales
- **Dispositivos:** Desktop (1920px+), Tablet (768px-1024px), Mobile (320px-768px)
- **Navegadores:** Chrome, Firefox, Safari, Edge
- **Modo oscuro/claro:** Si aplica
- **Estados de interacción:** Hover, focus, active

### Checklist antes de Commit
- [ ] El código funciona correctamente
- [ ] No hay errores en la consola
- [ ] Los estilos se ven correctos en diferentes tamaños
- [ ] Las imágenes tienen atributos `alt` descriptivos
- [ ] No hay enlaces rotos
- [ ] El rendimiento no se ha degradado

---

## 🔄 Flujo de Trabajo

### Git Workflow
```bash
# Crear feature branch
git checkout -b feature/nueva-funcionalidad

# Commits descriptivos
git commit -m "feat: agregar componente de galería de proyectos"
git commit -m "fix: corregir responsive en mobile para header"
git commit -m "style: actualizar colores del tema principal"
```

### Tipos de Commits
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `style:` Cambios de estilos/CSS
- `refactor:` Refactoring de código
- `docs:` Actualizaciones de documentación
- `perf:` Mejoras de rendimiento

---

## 🚫 Restricciones y Limitaciones

### No Permitido
- ❌ Usar frameworks CSS adicionales (Bootstrap, etc.)
- ❌ Incluir dependencias pesadas innecesariamente
- ❌ Código JavaScript obsoleto (var, function declarations en lugar de arrow functions)
- ❌ Estilos inline extensos
- ❌ Commits sin mensaje descriptivo

### Requiere Aprobación
- ⚠️ Nuevas dependencias de npm
- ⚠️ Cambios en la estructura de carpetas
- ⚠️ Modificaciones en configuraciones de build
- ⚠️ Cambios que afecten el rendimiento significativamente

---

## 📚 Recursos y Referencias

### Documentación Oficial
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

### Herramientas Recomendadas
- **Editor:** Cursor con extensiones de Astro y Tailwind
- **Testing:** Lighthouse para performance y accesibilidad
- **Formateo:** Prettier con configuración del proyecto

---

## 🔄 Mantenimiento de estas Reglas

- Este documento debe mantenerse actualizado con nuevas decisiones
- Cualquier cambio significativo debe ser discutido con el equipo
- Revisar y actualizar estas reglas periódicamente
- Documentar excepciones y sus justificaciones

---

## 📞 Dudas y Consultas

Ante cualquier duda sobre estas reglas o decisiones de implementación:
1. Consultar la documentación oficial de las tecnologías
2. Revisar ejemplos similares en el código existente
3. Discutir con el equipo antes de implementar cambios significativos
4. Documentar las decisiones tomadas para futuras referencias

---

- **Despliegue:** [Vercel](https://vercel.com/) - Plataforma de hosting y CI/CD optimizada para proyectos frontend y JAMstack, con integración automática desde GitHub, previsualizaciones de ramas y soporte para dominios personalizados.

**Versión:** 1.0  
**Última actualización:** [Fecha actual]  
**Siguiente revisión:** [Fecha programada]
