/* empty css                                      */
import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, r as renderTemplate, u as unescapeHTML, g as renderComponent } from '../chunks/astro/server_Dja6Hlxb.mjs';
import 'kleur/colors';
import { g as getCategories, $ as $$Layout } from '../chunks/putCertificados_CVVyjprn.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

/**
 * Configuración de iconos para las categorías de certificados
 * Usa iconos SVG inline para mejor rendimiento
 */

const categoryIcons = {
  english: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.77-6.99l-.01-.01-1.07-1.07-1.07-1.07-.01-.01c-2.34-1.24-5.05-.97-6.99.77l-.03.03-2.51 2.54c-.78.78-.78 2.05 0 2.83l1.42 1.42c.78.78 2.05.78 2.83 0l2.51-2.54.03-.03c1.74-1.94 4.45-2.01 6.99-.77l.01.01 1.07 1.07 1.07 1.07.01.01c1.24 2.34 1.01 5.05-.77 6.99l-.03.03-2.54 2.51c-.78.78-.78 2.05 0 2.83l1.42 1.42c.78.78 2.05.78 2.83 0z"/>
    </svg>`,
    color: 'text-blue-600'
  },
  python: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    color: 'text-yellow-600'
  },
  javascript: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    color: 'text-yellow-500'
  },
  uxui: {
    svg: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    color: 'text-purple-600'
  }
};

/**
 * Obtiene el icono SVG para una categoría específica
 * @param {string} categoryId - ID de la categoría
 * @returns {Object} Objeto con svg y color
 */
const getCategoryIcon = (categoryId) => {
  return categoryIcons[categoryId] || categoryIcons.english;
};

const $$Astro = createAstro();
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { id, name, logo, isActive = false, onClick } = Astro2.props;
  const categoryIcon = getCategoryIcon(id);
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`category-${id}`, "id")} class="flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 will-change-transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"${addAttribute(id, "data-category")}${addAttribute(`Ver certificados de ${name}`, "aria-label")}${addAttribute(isActive, "aria-pressed")}> <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"> ${logo ? renderTemplate`<img class="w-full h-full object-contain"${addAttribute(logo, "src")}${addAttribute(`Logo de ${name}`, "alt")} loading="lazy">` : renderTemplate`<div${addAttribute(`w-full h-full ${categoryIcon.color}`, "class")}>${unescapeHTML(categoryIcon.svg)}</div>`} </div> <h2 class="text-sm md:text-lg font-bold text-gray-900 dark:text-white text-center"> ${name} </h2> </button>`;
}, "C:/Users/Miguel Castillo/Desktop/Proyectos/Porfolio/MigueDev/src/components/CategoryCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Certificate = createComponent(($$result, $$props, $$slots) => {
  const categories = getCategories();
  return renderTemplate(_a || (_a = __template(["", '<main class="flex flex-col w-full h-auto min-h-[625px] px-4 py-4"> <!-- T\xEDtulo principal --> <h2 class="sr-only">Regresar</h2> <a href="/" class="flex items-center mb-8"> <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>\nRegresar\n</a> <div class="flex justify-center items-center mb-8"> <h1 class="text-[10vw] sm:text-[6vw] lg:text-[2vw] font-bold text-black dark:text-white text-center">\nCertificates Approved\n</h1> </div> <!-- Secci\xF3n de categor\xEDas --> <section class="mb-8" aria-labelledby="categories-heading"> <h2 id="categories-heading" class="sr-only">Categor\xEDas de certificados</h2> <div id="category-cards-container" class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"> ', ` </div> </section> <!-- Secci\xF3n de certificados --> <section id="certificates-section" class="w-full"> <div id="certificate-container" class="w-full"> <!-- Los certificados se cargar\xE1n din\xE1micamente aqu\xED --> </div> </section> </main> <script type="module">
  import { initializeCertificateLogic } from '../utils/certificate-loader.js';

  document.addEventListener('DOMContentLoaded', () => {
    initializeCertificateLogic();
  });
<\/script>`])), maybeRenderHead(), categories.map((category) => renderTemplate`${renderComponent($$result, "CategoryCard", $$CategoryCard, { "id": category.id, "name": category.name, "logo": category.logo })}`));
}, "C:/Users/Miguel Castillo/Desktop/Proyectos/Porfolio/MigueDev/src/components/Certificate.astro", void 0);

const $$Cetificate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Certificate", $$Certificate, {})} ` })}`;
}, "C:/Users/Miguel Castillo/Desktop/Proyectos/Porfolio/MigueDev/src/pages/cetificate.astro", void 0);

const $$file = "C:/Users/Miguel Castillo/Desktop/Proyectos/Porfolio/MigueDev/src/pages/cetificate.astro";
const $$url = "/cetificate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cetificate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
