export function menuHamburguesa() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuClose = document.getElementById("menu-close");

  if (!menuToggle || !mobileMenu || !menuClose) {
    console.error(
      "Error: No se encontraron todos los elementos necesarios para el menú hamburguesa",
    );
    return;
  }

  let isMenuOpen = false;
  let isTransitioning = false;

  function openMenu() {
    if (isMenuOpen || isTransitioning) return;

    isTransitioning = true;
    isMenuOpen = true;

    // Quitar hidden y agregar las clases flex necesarias
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex", "flex-col");

    // Forzar reflow
    mobileMenu.offsetHeight;

    // Aplicar la transición de opacidad
    requestAnimationFrame(() => {
      mobileMenu.classList.add("opacity-100");
      mobileMenu.classList.remove("opacity-0");
    });

    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      isTransitioning = false;
    }, 300);
  }

  function closeMenu() {
    if (!isMenuOpen || isTransitioning) return;

    isTransitioning = true;
    isMenuOpen = false;

    // Aplicar transición de opacidad
    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.remove("opacity-100");

    // Esperar a que termine la transición
    setTimeout(() => {
      if (!isMenuOpen) {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex", "flex-col");
        document.body.style.overflow = "";
      }
      isTransitioning = false;
    }, 300);

    menuToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Inicializar estado
  menuToggle.setAttribute("aria-expanded", "false");

  // Event listeners
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  menuClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });

  // Cerrar al hacer clic fuera del menú (opcional)
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });

  // Cerrar menú al hacer clic en enlaces
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeMenu, 100);
    });
  });

  // Manejar redimensionamiento
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      closeMenu();
    }
  });

  // Función de limpieza
  return function cleanup() {
    document.body.style.overflow = "";
  };
}
