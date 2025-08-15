
// Importar GSAP desde el archivo de configuración centralizado
import { gsap, ScrollTrigger, SplitText } from './gsap-config';

export function initMainAnimations() {
  // Verificar que estamos en el navegador
  if (typeof window === 'undefined') return;

  //const of text
  const h1Element = document.querySelector('h1')
  const h2Element = document.querySelector('h2')
  const pElement = document.querySelector('p')
  const spanElement = document.querySelector('.char')
  //const of splitText
  const split1 = new SplitText(spanElement, { type: "chars" });
  const split2 = new SplitText(h2Element, { type: "chars" });
  //const of social media
  const imgElement = document.querySelectorAll('.rotate img');
  //const of dev-img
  const divElement = document.querySelector('.dev-img img')
  //const of main
  const mainElement = document.querySelector('main');
  //cost of CV
  const cvSticky = document.querySelector(".curriculum button");
  

  //Animation of text without scroll
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

  //Animation of text with scroll
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


  //Animation of Dev-img 
  gsap.to (divElement,{
    opacity: 0,
    x: 30, // Reducir el desplazamiento
    scale: 0.9, // Ligeramente más pequeño
    duration: 1,
    scrollTrigger: {
      trigger: mainElement,
      start: "top top",
      end: "+=400",
      scrub: true,
      toggleActions: "play none none none"
    }
  })

  //Animation of social media icons
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
      rotation: -360,
      ease: "power2.out",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: mainElement, // Usar el elemento principal como disparador
        start: "top",    // Comenzar cuando el top del viewport toque el top del trigger
        end: "+=100",         // Terminar después de 500px de scroll
        scrub: true,
        toggleActions: "play none none none" // Solo reproducir en scroll hacia abajo
      }
    });
  });

  //Animation of Button CV
  gsap.to(cvSticky, {
    x: 100,
    scrollTrigger: {
      trigger: mainElement,
      start: "top top", // empieza antes de que top llegue a top
      end: "+=100",       // termina cuando top top se alinea
      scrub: true
    }
  });

  ScrollTrigger.create({
    trigger: mainElement,
    start: "+=550",
    end: "+=9999",
    onEnter: () => {
      cvSticky.classList.add("fixed");
    },
    onLeaveBack: () => {
      cvSticky.classList.remove("fixed");
    }
  });
}

// Limpieza
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  SplitText.getAll().forEach(trigger => trigger.kill());
}