# Sistema de Certificados - Estructura Orientada a Objetos

## 📋 Descripción

Este sistema implementa una arquitectura orientada a objetos para manejar certificados por categorías, siguiendo las mejores prácticas del proyecto y las reglas establecidas.

## 🏗️ Arquitectura

### Clase Principal: `CertificateManager`

```javascript
// src/utils/CertificateManager.js
class CertificateManager {
  constructor() {
    this.categories = {
      english: { name: 'English', logo: '...', certificates: [...] },
      python: { name: 'Python', logo: '...', certificates: [...] },
      javascript: { name: 'JavaScript', logo: '...', certificates: [...] },
      uxui: { name: 'UX/UI', logo: '...', certificates: [...] }
    };
  }
}
```

### Métodos Principales

- `getCategories()` - Obtiene todas las categorías disponibles
- `getCertificatesByCategory(categoryId)` - Obtiene certificados de una categoría
- `validateCertificates(urls)` - Valida URLs de certificados
- `checkImageUrl(url)` - Verifica si una imagen es accesible

## 📁 Estructura de Archivos

```
src/
├── utils/
│   ├── CertificateManager.js     # Clase principal OOP
│   ├── categoryIcons.js          # Configuración de iconos
│   ├── putCertificados.js        # API de compatibilidad
│   └── display.js               # Utilidades de display
├── components/
│   ├── Certificate.astro         # Componente principal
│   ├── CategoryCard.astro        # Tarjeta de categoría
│   └── CertificateGrid.astro     # Grilla de certificados
```

## 🎯 Características

### ✅ Implementadas

- **Orientación a Objetos**: Clase `CertificateManager` para gestión centralizada
- **Categorías Múltiples**: English, Python, JavaScript, UX/UI
- **Validación de URLs**: Verificación automática de certificados accesibles
- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Accesibilidad**: Atributos ARIA y navegación por teclado
- **Performance**: Lazy loading y optimización de imágenes
- **Compatibilidad**: Mantiene API existente para no romper código

### 🎨 UI/UX

- **Iconos Específicos**: Cada categoría tiene su icono distintivo
- **Estados Visuales**: Feedback visual para categorías activas
- **Animaciones**: Transiciones suaves y efectos hover
- **Loading States**: Indicadores de carga durante peticiones
- **Error Handling**: Manejo elegante de errores

## 🔧 Uso

### Obtener Categorías
```javascript
import { getCategories } from '../utils/putCertificados.js';
const categories = getCategories();
```

### Obtener Certificados
```javascript
import { getCertificatesByCategory } from '../utils/putCertificados.js';
const certificates = await getCertificatesByCategory('python');
```

### Agregar Nueva Categoría
```javascript
// En CertificateManager.js
this.categories.newCategory = {
  name: 'Nueva Categoría',
  logo: '/path/to/logo.png',
  certificates: ['url1', 'url2', 'url3']
};
```

## 🚀 Beneficios

1. **Escalabilidad**: Fácil agregar nuevas categorías
2. **Mantenibilidad**: Código organizado y documentado
3. **Reutilización**: Componentes modulares
4. **Performance**: Validación y carga optimizada
5. **Accesibilidad**: Cumple estándares WCAG
6. **Responsive**: Funciona en todos los dispositivos

## 📝 Convenciones

- **Nombres**: camelCase para métodos, PascalCase para clases
- **Comentarios**: JSDoc para documentación
- **Error Handling**: Try-catch con logging apropiado
- **TypeScript**: Tipos definidos para mejor desarrollo

## 🔄 Flujo de Datos

1. **Inicialización**: `CertificateManager` carga categorías
2. **Selección**: Usuario selecciona categoría
3. **Validación**: Sistema verifica URLs de certificados
4. **Renderizado**: Componente muestra certificados válidos
5. **Interacción**: Usuario puede navegar entre categorías

## 🧪 Testing

El sistema está diseñado para ser fácilmente testeable:

```javascript
// Ejemplo de test
const manager = new CertificateManager();
const categories = manager.getCategories();
expect(categories).toHaveLength(4);
```

## 📈 Futuras Mejoras

- [ ] Cache de certificados validados
- [ ] Filtros por fecha/plataforma
- [ ] Búsqueda de certificados
- [ ] Exportación de certificados
- [ ] Integración con APIs externas 