import { gsap, ScrollTrigger, SplitText } from './gsap-config.js';


export function initAboutAnimations() {
    const divElement = document.querySelector('.about-text-title')
    const aElement = document.querySelector('.about-text-a')
    const pElement = document.querySelector('.text-p')
    const sectionElement = document.querySelector('section');
    const containerStudy = document.querySelector('.container-study')

    gsap.from(divElement, {
        opacity: 0,
        x: 325,
        y: -200,    
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: sectionElement,
            start: "+=25",
            end: "+=450",
            scrub: true
        }
    })

    gsap.from(aElement, {
        opacity: 0,
        y: 200,   
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: sectionElement,
            start: "+=25",
            end: "+=450",
            scrub: true
        }
    })
    gsap.from(pElement, {
        opacity: 0,
        x: -400,   
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: sectionElement,
            start: "+=25",
            end: "+=450",
            scrub: true
        }
    })

    gsap.to(containerStudy, {
        opacity: 1,
        x: 40,   
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: sectionElement,
            start: "+=500",
            end: "+=1500",
            scrub: true,
            toggleActions: "play none none none"
        }
    })
}