// src/animations/gsap-config.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Solo registra los plugins disponibles en la versión gratuita
const plugins = [ScrollTrigger, TextPlugin];

// Función para dividir texto manualmente (alternativa a SplitText)
export function splitTextIntoChars(element) {
  if (!element) return { chars: [] };

  const text = element.textContent;
  const chars = [];

  // Limpiar el elemento
  element.innerHTML = "";

  // Crear spans para cada caracter
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // Preservar espacios
    span.style.display = "inline-block";
    element.appendChild(span);
    chars.push(span);
  }

  return { chars };
}

// Verifica si estamos en el navegador antes de registrar plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(...plugins);

  // Configuración global de GSAP
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
    trialWarn: false, // Evitar warnings de trial
  });

  // Configuración por defecto de las animaciones
  gsap.defaults({
    duration: 1,
    ease: "power2.out",
  });
}

// Exporta las instancias para su uso en otros archivos
export { gsap, ScrollTrigger, TextPlugin };
