import { getCertificatesByCategory } from "./putCertificados.js";

/**
 * Espera a que todas las imágenes de certificados se carguen completamente
 * @param {HTMLElement} container - Contenedor con las imágenes
 * @param {number} expectedCount - Número esperado de imágenes
 * @param {HTMLElement} statusElement - Elemento para mostrar progreso (opcional)
 * @returns {Promise<void>}
 */
function waitForAllImages(container, expectedCount, statusElement = null) {
  return new Promise((resolve) => {
    const images = container.querySelectorAll('.certificate-img');
    let loadedCount = 0;
    let errorCount = 0;
    
    console.log(`📸 Esperando que carguen ${images.length} imágenes...`);
    
    if (images.length === 0) {
      resolve();
      return;
    }

    const updateProgress = () => {
      const total = images.length;
      const completed = loadedCount + errorCount;
      
      if (statusElement) {
        statusElement.textContent = `Cargando imágenes: ${completed}/${total}`;
      }
      
      if (completed >= total) {
        console.log(`✅ Todas las imágenes procesadas: ${loadedCount} exitosas, ${errorCount} con error`);
        if (statusElement) {
          statusElement.textContent = '¡Certificados cargados!';
        }
        resolve();
      }
    };

    images.forEach((img, index) => {
      const handleLoad = () => {
        loadedCount++;
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.5s ease-in-out';
        console.log(`📸 Imagen ${index + 1} cargada`);
        updateProgress();
      };

      const handleError = () => {
        errorCount++;
        // Mostrar placeholder mejorado
        img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmM2Y0ZjY7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZTVlN2ViO3N0b3Atb3BhY2l0eToxIiAvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNjAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2QiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0xMzUgMTQ1bDEwIDEwbTAtMTBsLTEwIDEwIiBzdHJva2U9IiNjY2QiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBCMLHSYW4sc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNiNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYWRvIG5vIGRpc3BvbmlibGU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI3NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYmJjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW50w6ludGVsbyBkZSBudWV2bzwvdGV4dD48L3N2Zz4=';
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.5s ease-in-out';
        console.log(`❌ Error al cargar imagen ${index + 1}`);
        updateProgress();
      };

      // Si la imagen ya está cargada
      if (img.complete && img.naturalWidth > 0) {
        handleLoad();
      } else if (img.complete) {
        // Imagen completa pero con error
        handleError();
      } else {
        // Configurar eventos
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleError, { once: true });
      }
    });

    // Timeout de seguridad
    setTimeout(() => {
      if (loadedCount + errorCount < images.length) {
        console.log(`⏰ Timeout: forzando resolución después de esperar imágenes`);
        resolve();
      }
    }, 10000); // 10 segundos máximo
  });
}

export function initializeCertificateLogic() {
  console.log("🔍 Iniciando certificate logic...");
  const certificateContainer = document.getElementById("certificate-container");
  const categoryCardsContainer = document.getElementById(
    "category-cards-container",
  );

  console.log("📦 Elementos encontrados:", {
    certificateContainer: !!certificateContainer,
    categoryCardsContainer: !!categoryCardsContainer
  });

  if (!certificateContainer || !categoryCardsContainer) {
    console.error("❌ Elementos necesarios no encontrados");
    return; // Salir si los elementos no existen en la página actual
  }

  let isLoading = false;

  const displayCertificates = async (categoryId) => {
    if (isLoading) return;

    isLoading = true;

    // Mostrar loading mejorado
    certificateContainer.innerHTML = `
      <div class="flex flex-col justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
        <span class="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Cargando certificados...</span>
        <span id="loading-status" class="text-sm text-gray-500 dark:text-gray-400">Obteniendo datos...</span>
      </div>
    `;

    try {
      console.log(`🔄 Cargando certificados para: ${categoryId}`);
      
      // Actualizar status de loading
      const loadingStatus = document.getElementById('loading-status');
      if (loadingStatus) {
        loadingStatus.textContent = `Obteniendo certificados de ${categoryId}...`;
      }

      const certificates = await getCertificatesByCategory(categoryId);
      console.log(`✅ Certificados obtenidos: ${certificates.length}`);
      
      if (loadingStatus) {
        loadingStatus.textContent = `Preparando ${certificates.length} certificados...`;
      }

      const categoryName =
        document.querySelector(`[data-category="${categoryId}"] h2`)
          ?.textContent || "Certificados";
      console.log(`📋 Nombre categoría: ${categoryName}`);

      const gridComponent = document.createElement("div");
      gridComponent.id = "certificate-display";
      gridComponent.className =
        "w-full transition-all duration-500 ease-in-out";
      gridComponent.setAttribute(
        "aria-label",
        `Certificados de ${categoryName}`,
      );

      if (certificates.length > 0) {
        // Crear la estructura HTML del grid
        const gridHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            ${certificates
              .map(
                (certUrl, index) => `
              <article class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 will-change-transform hover:scale-105" role="article">
                <img
                  class="certificate-img w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110 opacity-0"
                  src="${certUrl}"
                  alt="Certificado ${index + 1} de ${categoryName}"
                  loading="lazy"
                  width="300"
                  height="400"
                  data-cert-index="${index}"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p class="text-sm font-semibold">Certificado ${index + 1}</p>
                    <p class="text-xs">${categoryName}</p>
                  </div>
                </div>
              </article>
            `,
              )
              .join("")}
          </div>
        `;
        gridComponent.innerHTML = gridHTML;
      } else {
        gridComponent.innerHTML = `
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <div class="text-gray-400 dark:text-gray-600 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No hay certificados disponibles
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              No se encontraron certificados para esta categoría.
            </p>
          </div>
        `;
      }

      certificateContainer.innerHTML = "";
      certificateContainer.appendChild(gridComponent);

      // Si hay certificados, esperar a que todas las imágenes carguen
      if (certificates.length > 0) {
        // Buscar el contenedor de loading que aún puede estar visible
        const currentLoadingStatus = document.querySelector('#loading-status');
        if (currentLoadingStatus) {
          currentLoadingStatus.textContent = 'Cargando imágenes...';
        }
        await waitForAllImages(gridComponent, certificates.length, currentLoadingStatus);
      }

      setTimeout(() => {
        gridComponent.classList.add("opacity-100");
      }, 100);
    } catch (error) {
      console.error("Error al cargar certificados:", error);
      certificateContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <div class="text-red-400 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Error al cargar certificados
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Hubo un problema al cargar los certificados. Inténtalo de nuevo.
          </p>
        </div>
      `;
    } finally {
      isLoading = false;
    }
  };

  categoryCardsContainer.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const card = event.target.closest("button[data-category]");
    if (!card) return;

    const categoryId = card.getAttribute("data-category");
    if (!categoryId) return;

    const allCards = categoryCardsContainer.querySelectorAll(
      "button[data-category]",
    );
    allCards.forEach((c) => {
      c.classList.remove(
        "bg-blue-100",
        "dark:bg-blue-900",
        "border-blue-300",
        "dark:border-blue-600",
      );
      c.setAttribute("aria-pressed", "false");
    });

    card.classList.add(
      "bg-blue-100",
      "dark:bg-blue-900",
      "border-blue-300",
      "dark:border-blue-600",
    );
    card.setAttribute("aria-pressed", "true");

    displayCertificates(categoryId);
  });

  // Activar la primera categoría y cargar certificados por defecto
  const firstCard = document.querySelector('[data-category="english"]');
  if (firstCard) {
    firstCard.classList.add(
      "bg-blue-100",
      "dark:bg-blue-900",
      "border-blue-300",
      "dark:border-blue-600",
    );
    firstCard.setAttribute("aria-pressed", "true");
  }
  displayCertificates("english");
}
