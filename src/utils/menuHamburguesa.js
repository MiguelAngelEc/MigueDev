export function menuHamburguesa (){
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuClose = document.getElementById("menu-close");
    
    function openMenu() {
        // Primero quitamos hidden y añadimos flex para que sea visible
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("flex");
        
        // Pequeño retraso para permitir que la transición funcione
        setTimeout(() => {
            mobileMenu.classList.add("opacity-100");
            mobileMenu.classList.remove("opacity-0");
        }, 10);
        
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden"; // Bloquea el scroll
    }
    
    function closeMenu() {
        // Primero aplicamos la transición de opacidad
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.remove("opacity-100");
        
        // Esperamos a que termine la transición antes de ocultar
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
            document.body.style.overflow = "auto"; // Restaura el scroll
        }, 300); // Mismo tiempo que la duración de la transición
        
        menuToggle.setAttribute("aria-expanded", "false");
    }
    
    // Inicializar con opacidad 0 para permitir transición
    mobileMenu.classList.add("opacity-0");
    
    // Añadir soporte para eventos touch y click
    menuToggle.addEventListener("click", openMenu);
    menuToggle.addEventListener("touchstart", function(e) {
        e.preventDefault();
        openMenu();
    });
    menuClose.addEventListener("click", closeMenu);
    menuClose.addEventListener("touchstart", function(e) {
        e.preventDefault();
        closeMenu();
    });
    
    // Cerrar el menú al hacer clic o tocar en los enlaces
    document.querySelectorAll("#mobile-menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
        link.addEventListener("touchstart", function(e) {
            // No prevenimos el comportamiento predeterminado aquí para permitir la navegación
            // Solo cerramos el menú
            closeMenu();
        });
    });
}