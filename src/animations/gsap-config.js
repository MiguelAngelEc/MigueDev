// src/animations/gsap-config.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';

// Solo registra los plugins necesarios
const plugins = [ScrollTrigger, TextPlugin, SplitText];

// Verifica si estamos en el navegador antes de registrar plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(...plugins);
  
  // Configuración global de GSAP
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  });

  // Configuración por defecto de las animaciones
  gsap.defaults({
    duration: 1,
    ease: "power2.out"
  });
}

// Exporta las instancias para su uso en otros archivos
export { gsap, ScrollTrigger, TextPlugin, SplitText };