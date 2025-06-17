import { gsap, ScrollTrigger, SplitText } from './gsap-config.js';


export function initAboutAnimations() {
    const divElement = document.querySelector('.about-text')
    const sectionElement = document.querySelector('section');

    gsap.from(divElement, {
        opacity: 0,
        x: 325,
        y: -200,    
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: sectionElement,
            start: "+=25",
            end: "+=950",
            scrub: true
        }
    })
}