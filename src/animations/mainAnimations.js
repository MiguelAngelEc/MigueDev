// src/scripts/mainAnimations.js
import { gsap, ScrollTrigger, SplitText } from './gsap-config.js';

export function initMainAnimations() {

  const h1Element = document.querySelector('h1')
  const h2Element = document.querySelector('h2')
  const pElement = document.querySelector('p')
  const spanElement = document.querySelector('.char')
  const imgElement = document.querySelectorAll('.rotate img');
  const divElement = document.querySelector('.dev-img img')
  const mainElement = document.querySelector('main');
  const split1 = new SplitText(spanElement, { type: "chars" });
  const split2 = new SplitText(h2Element, { type: "chars" });

  //Animacion de texto sin scroll
  gsap.from(split1.chars, {
    duration: 0.8,
    x: -100,
    opacity: 0,
    stagger: 0.05,
    ease: 'power3.out',
  });

  gsap.from(split2.chars, {
    duration: 0.5,
    x: 100,
    opacity: 0,
    stagger: 0.05,
    ease: 'power2.out',
  });

  //Animacion de texto con scroll
  gsap.to([h1Element, h2Element, pElement], {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: mainElement,
      start: "top top",
      end: "+=400",
      scrub: true,
    }
  });

  //Animacion de Dev-img 
  gsap.to ([divElement],{
    opacity: 0,
    x: 30, // Reducir el desplazamiento
    scale: 0.9, // Ligeramente más pequeño
    duration: 1,
    scrollTrigger: {
      trigger: mainElement,
      start: "top top",
      end: "+=200",
      scrub: true,
      toggleActions: "play none none none"
    }
  })

  //Animacion de Inconos de redes Sociales
  imgElement.forEach((img, i) => {
    // Configurar el estado inicial
    gsap.set(img, {
      rotation: 0,
      x: 0,
      opacity: 1
    });

    // Crear la animación controlada por scroll
    gsap.to(img, {
      opacity: 0,
      x: -100,
      rotation: 360,
      ease: "power1.out",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: mainElement, // Usar el elemento principal como disparador
        start: "top top",    // Comenzar cuando el top del viewport toque el top del trigger
        end: "+=250",         // Terminar después de 500px de scroll
        scrub: true,
        toggleActions: "play none none none" // Solo reproducir en scroll hacia abajo
      }
    });
  });
}

// Limpieza
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  SplitText.revert();
}