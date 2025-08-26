import { certificateManager } from "./CertificateManager.js";

/**
 * Obtiene todos los certificados de inglés (mantiene compatibilidad)
 * @returns {Promise<Array>} Array de URLs de certificados de inglés
 */
export const getCertificates = async () => {
  try {
    return await certificateManager.getCertificatesByCategory("english");
  } catch (error) {
    console.error("Error al cargar certificados:", error);
    return [];
  }
};

/**
 * Obtiene certificados de una categoría específica
 * @param {string} categoryId - ID de la categoría
 * @returns {Promise<Array>} Array de URLs de certificados
 */
export const getCertificatesByCategory = async (categoryId) => {
  try {
    return await certificateManager.getCertificatesByCategory(categoryId);
  } catch (error) {
    console.error(`Error al cargar certificados de ${categoryId}:`, error);
    return [];
  }
};

/**
 * Obtiene todas las categorías disponibles
 * @returns {Array} Array de categorías con información
 */
export const getCategories = () => {
  return certificateManager.getCategories();
};

/**
 * Obtiene información de una categoría específica
 * @param {string} categoryId - ID de la categoría
 * @returns {Object|null} Información de la categoría
 */
export const getCategoryInfo = (categoryId) => {
  return certificateManager.getCategoryInfo(categoryId);
};

// Mantener compatibilidad con el código existente
const englishCertificates = [
  "https://platzi.com/MigueEc/curso/2567-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/2519-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/2414-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/9144-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/2418-course/diploma-og/og.jpeg",
  "https://platzi.com/MigueEc/curso/7736-course/diploma-og/og.jpeg",
];

const checkImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};
