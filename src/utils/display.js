/**
 * Utilidades para manejo de display de certificados
 * Compatible con la nueva estructura orientada a objetos
 */

/**
 * Alterna la visibilidad de un elemento de certificados
 * @param {string} elementId - ID del elemento a alternar
 */
export const toggleDisplay = (elementId = "certificate-display") => {
  const displayElement = document.getElementById(elementId);
  if (displayElement) {
    displayElement.classList.toggle("display-visible");
  }
};

/**
 * Muestra un elemento de certificados
 * @param {string} elementId - ID del elemento a mostrar
 */
export const showDisplay = (elementId = "certificate-display") => {
  const displayElement = document.getElementById(elementId);
  if (displayElement) {
    displayElement.classList.add("display-visible");
  }
};

/**
 * Oculta un elemento de certificados
 * @param {string} elementId - ID del elemento a ocultar
 */
export const hideDisplay = (elementId = "certificate-display") => {
  const displayElement = document.getElementById(elementId);
  if (displayElement) {
    displayElement.classList.remove("display-visible");
  }
};

/**
 * Alterna la clase activa de las tarjetas de categoría
 * @param {string} activeCategoryId - ID de la categoría activa
 */
export const toggleCategoryActive = (activeCategoryId) => {
  const allCards = document.querySelectorAll("[data-category]");

  allCards.forEach((card) => {
    const categoryId = card.getAttribute("data-category");
    if (categoryId === activeCategoryId) {
      card.classList.add("bg-blue-100", "dark:bg-blue-900");
    } else {
      card.classList.remove("bg-blue-100", "dark:bg-blue-900");
    }
  });
};
