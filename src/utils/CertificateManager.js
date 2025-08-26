/**
 * Clase para gestionar certificados por categorías
 * Implementa patrón orientado a objetos para manejo de certificados
 */
class CertificateManager {
  constructor() {
    const certificateEnglesh = [2567, 2519, 2414, 9144, 2418, 7736, 6934, 2417];
    const cetificatePython = [10002, 4261, 10662, 11025, 4260, 1775, 2299];
    const cetificateJavaScript = [
      1814, 3504, 1798, 10266, 10135, 6933, 8617, 2156, 6240, 3578, 3213, 2461,
      3175, 2332, 2419,
    ];
    const cetificateUXUI = [];
    this.categories = {
      english: {
        name: "English",
        logo: "/src/assets/logo-certif.png",
        certificates: certificateEnglesh.map(
          (num) =>
            `https://platzi.com/MigueEc/curso/${num}-course/diploma-og/og.jpeg`,
        ),
      },
      python: {
        name: "Python",
        logo: "/src/assets/logo-certif.png",
        certificates: cetificatePython.map(
          (num) =>
            `https://platzi.com/MigueEc/curso/${num}-course/diploma-og/og.jpeg`,
        ),
      },
      javascript: {
        name: "JavaScript",
        logo: "/src/assets/logo-certif.png",
        certificates: cetificateJavaScript.map(
          (num) =>
            `https://platzi.com/MigueEc/curso/${num}-course/diploma-og/og.jpeg`,
        ),
      },
      uxui: {
        name: "UX/UI",
        logo: "/src/assets/logo-certif.png",
        certificates: cetificateUXUI.map(
          (num) =>
            `https://platzi.com/MigueEc/curso/${num}-course/diploma-og/og.jpeg`,
        ),
      },
    };
  }

  /**
   * Obtiene todas las categorías disponibles
   * @returns {Array} Array de categorías con nombre y logo
   */
  getCategories() {
    return Object.entries(this.categories).map(([key, category]) => ({
      id: key,
      name: category.name,
      logo: category.logo,
    }));
  }

  /**
   * Obtiene certificados de una categoría específica
   * @param {string} categoryId - ID de la categoría
   * @returns {Promise<Array>} Array de URLs de certificados
   */
  async getCertificatesByCategory(categoryId) {
    try {
      const category = this.categories[categoryId];
      if (!category) {
        console.warn(`Categoría no encontrada: ${categoryId}`);
        return [];
      }

      // Devolver las URLs sin validación (más rápido)
      return category.certificates;

      // Si necesitas validación, descomenta la siguiente línea y comenta la anterior
      // return await this.validateCertificates(category.certificates);
    } catch (error) {
      console.error("Error al obtener certificados:", error);
      return [];
    }
  }

  /**
   * Valida que las URLs de certificados sean accesibles (versión optimizada)
   * @param {Array} urls - Array de URLs a validar
   * @returns {Promise<Array>} Array de URLs válidas
   */
  async validateCertificates(urls) {
    if (!urls || !urls.length) return [];

    try {
      // Usar Promise.allSettled para manejar errores sin detener la ejecución
      const results = await Promise.allSettled(
        urls.map((url) =>
          this.checkImageUrl(url).then((isValid) => ({ url, isValid })),
        ),
      );

      // Filtrar solo las promesas resueltas con isValid = true
      return results
        .filter(
          (result) => result.status === "fulfilled" && result.value.isValid,
        )
        .map((result) => result.value.url);
    } catch (error) {
      console.error("Error al validar certificados:", error);
      return [];
    }
  }

  /**
   * Verifica si una URL de imagen es accesible (versión optimizada)
   * @param {string} url - URL de la imagen
   * @returns {Promise<boolean>} true si la imagen es accesible
   */
  checkImageUrl(url) {
    return new Promise((resolve) => {
      // Si la URL no es válida, rechazar inmediatamente
      if (!url || typeof url !== "string") {
        return resolve(false);
      }

      const img = new Image();
      let timeoutId;

      // Configurar timeout para evitar esperas infinitas
      timeoutId = setTimeout(() => {
        cleanup();
        resolve(false);
      }, 3000); // 3 segundos de timeout

      const cleanup = () => {
        if (timeoutId) clearTimeout(timeoutId);
        img.onload = null;
        img.onerror = null;
        img.src = "";
      };

      img.onload = () => {
        // Verificar dimensiones para asegurar que es una imagen válida
        const isValid = img.width > 0 && img.height > 0;
        cleanup();
        resolve(isValid);
      };

      img.onerror = () => {
        cleanup();
        resolve(false);
      };

      // Configuración para mejorar el rendimiento
      img.crossOrigin = "anonymous";
      img.referrerPolicy = "no-referrer";
      img.loading = "lazy";

      // Iniciar carga
      img.src = url;
    });
  }

  /**
   * Obtiene información de una categoría específica
   * @param {string} categoryId - ID de la categoría
   * @returns {Object|null} Información de la categoría
   */
  getCategoryInfo(categoryId) {
    return this.categories[categoryId] || null;
  }
}

// Exportar instancia singleton
export const certificateManager = new CertificateManager();

// Exportar clase para testing
export { CertificateManager };
