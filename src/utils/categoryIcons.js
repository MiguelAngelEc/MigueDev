/**
 * Configuración de iconos para las categorías de certificados
 * Usa iconos SVG inline para mejor rendimiento
 */

export const categoryIcons = {
  english: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.77-6.99l-.01-.01-1.07-1.07-1.07-1.07-.01-.01c-2.34-1.24-5.05-.97-6.99.77l-.03.03-2.51 2.54c-.78.78-.78 2.05 0 2.83l1.42 1.42c.78.78 2.05.78 2.83 0l2.51-2.54.03-.03c1.74-1.94 4.45-2.01 6.99-.77l.01.01 1.07 1.07 1.07 1.07.01.01c1.24 2.34 1.01 5.05-.77 6.99l-.03.03-2.54 2.51c-.78.78-.78 2.05 0 2.83l1.42 1.42c.78.78 2.05.78 2.83 0z"/>
    </svg>`,
    color: "text-blue-600",
  },
  python: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    color: "text-yellow-600",
  },
  javascript: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    color: "text-yellow-500",
  },
  uxui: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    color: "text-purple-600",
  },
};

/**
 * Obtiene el icono SVG para una categoría específica
 * @param {string} categoryId - ID de la categoría
 * @returns {Object} Objeto con svg y color
 */
export const getCategoryIcon = (categoryId) => {
  return categoryIcons[categoryId] || categoryIcons.english;
};

/**
 * Renderiza el icono SVG para una categoría
 * @param {string} categoryId - ID de la categoría
 * @param {string} className - Clases CSS adicionales
 * @returns {string} HTML del icono
 */
export const renderCategoryIcon = (categoryId, className = "") => {
  const icon = getCategoryIcon(categoryId);
  return `<div class="${icon.color} ${className}">${icon.svg}</div>`;
};
