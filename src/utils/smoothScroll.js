// /**
//  * Configura el scroll suave para los enlaces internos
//  */
// function setupSmoothScroll() {
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetId = anchor.getAttribute("href");
//             if (targetId === "#") return;

//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             }
//         });
//     });
// }

// // Hacer la función disponible globalmente
// window.setupSmoothScroll = setupSmoothScroll;

// export { setupSmoothScroll };

// // Inicialización automática cuando el DOM esté listo
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', setupSmoothScroll);
// } else {
//     setupSmoothScroll();
// }
