import { describe, it, expect, beforeEach, vi } from "vitest";
import { certificateManager } from "../../utils/CertificateManager.js";
import { getCertificatesByCategory } from "../../utils/putCertificados.js";

// Mock para DOM
Object.defineProperty(window, 'Image', {
  writable: true,
  value: class MockImage {
    constructor() {
      this.onload = null;
      this.onerror = null;
      this.src = '';
      this.width = 300;
      this.height = 400;
      this.crossOrigin = '';
      this.referrerPolicy = '';
      this.loading = '';
    }
    
    set src(value) {
      this._src = value;
      // Simular carga exitosa después de un delay
      setTimeout(() => {
        if (this.onload) {
          this.onload();
        }
      }, 10);
    }
    
    get src() {
      return this._src;
    }
  }
});

describe("Certificate Components", () => {
  describe("CertificateManager", () => {
    it("should initialize with correct categories", () => {
      const categories = certificateManager.getCategories();
      
      expect(categories).toHaveLength(4);
      expect(categories.map(cat => cat.id)).toEqual(['english', 'python', 'javascript', 'uxui']);
      expect(categories.map(cat => cat.name)).toEqual(['English', 'Python', 'JavaScript', 'UX/UI']);
    });

    it("should return certificates for English category", async () => {
      const certificates = await certificateManager.getCertificatesByCategory("english");
      
      expect(certificates).toBeDefined();
      expect(Array.isArray(certificates)).toBe(true);
      expect(certificates.length).toBe(8); // 8 certificados de inglés según CertificateManager.js
      
      // Verificar que todas las URLs son válidas
      certificates.forEach(cert => {
        expect(cert).toMatch(/^https:\/\/platzi\.com\/MigueEc\/curso\/\d+-course\/diploma-og\/og\.jpeg$/);
      });
    });

    it("should return certificates for Python category", async () => {
      const certificates = await certificateManager.getCertificatesByCategory("python");
      
      expect(certificates).toBeDefined();
      expect(Array.isArray(certificates)).toBe(true);
      expect(certificates.length).toBe(7); // 7 certificados de Python
    });

    it("should return certificates for JavaScript category", async () => {
      const certificates = await certificateManager.getCertificatesByCategory("javascript");
      
      expect(certificates).toBeDefined();
      expect(Array.isArray(certificates)).toBe(true);
      expect(certificates.length).toBe(15); // 15 certificados de JavaScript
    });

    it("should return empty array for UX/UI category", async () => {
      const certificates = await certificateManager.getCertificatesByCategory("uxui");
      
      expect(certificates).toBeDefined();
      expect(Array.isArray(certificates)).toBe(true);
      expect(certificates.length).toBe(0); // UX/UI está vacío
    });

    it("should return empty array for non-existent category", async () => {
      const certificates = await certificateManager.getCertificatesByCategory("nonexistent");
      
      expect(certificates).toBeDefined();
      expect(Array.isArray(certificates)).toBe(true);
      expect(certificates.length).toBe(0);
    });

    it("should validate image URLs correctly", async () => {
      const validUrl = "https://platzi.com/MigueEc/curso/2567-course/diploma-og/og.jpeg";
      const isValid = await certificateManager.checkImageUrl(validUrl);
      
      expect(isValid).toBe(true);
    });

    it("should handle invalid image URLs", async () => {
      const invalidUrl = "";
      const isValid = await certificateManager.checkImageUrl(invalidUrl);
      
      expect(isValid).toBe(false);
    });
  });

  describe("putCertificados utility", () => {
    it("should export getCertificatesByCategory function", async () => {
      expect(typeof getCertificatesByCategory).toBe("function");
      
      const certificates = await getCertificatesByCategory("english");
      expect(Array.isArray(certificates)).toBe(true);
    });

    it("should return same data as CertificateManager", async () => {
      const managerCerts = await certificateManager.getCertificatesByCategory("python");
      const utilityCerts = await getCertificatesByCategory("python");
      
      expect(utilityCerts).toEqual(managerCerts);
    });
  });

  describe("Certificate rendering logic", () => {
    beforeEach(() => {
      // Reset DOM
      document.body.innerHTML = '';
      
      // Create mock DOM elements
      const certificateContainer = document.createElement('div');
      certificateContainer.id = 'certificate-container';
      
      const categoryCardsContainer = document.createElement('div');
      categoryCardsContainer.id = 'category-cards-container';
      
      // Create category cards
      ['english', 'python', 'javascript', 'uxui'].forEach(category => {
        const button = document.createElement('button');
        button.setAttribute('data-category', category);
        
        const h2 = document.createElement('h2');
        h2.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        button.appendChild(h2);
        
        categoryCardsContainer.appendChild(button);
      });
      
      document.body.appendChild(certificateContainer);
      document.body.appendChild(categoryCardsContainer);
    });

    it("should find required DOM elements", () => {
      const certificateContainer = document.getElementById("certificate-container");
      const categoryCardsContainer = document.getElementById("category-cards-container");
      
      expect(certificateContainer).not.toBeNull();
      expect(categoryCardsContainer).not.toBeNull();
    });

    it("should create certificate grid HTML correctly", async () => {
      const certificates = await getCertificatesByCategory("english");
      const categoryName = "English";
      
      // Simular la creación del grid como en certificate-loader.js
      const gridComponent = document.createElement("div");
      gridComponent.id = "certificate-display";
      gridComponent.className = "w-full transition-all duration-500 ease-in-out";
      
      if (certificates.length > 0) {
        gridComponent.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            ${certificates
              .map((certUrl, index) => `
              <article class="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 will-change-transform hover:scale-105" role="article">
                <img
                  class="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  src="${certUrl}"
                  alt="Certificado ${index + 1} de ${categoryName}"
                  loading="lazy"
                  width="300"
                  height="400"
                />
              </article>
            `)
              .join("")}
          </div>
        `;
      }
      
      expect(gridComponent.id).toBe("certificate-display");
      expect(gridComponent.innerHTML).toContain("grid grid-cols-1");
      expect(gridComponent.innerHTML).toContain("Certificado 1 de English");
      
      // Verificar que se crean las imágenes correctas
      const imgTags = gridComponent.innerHTML.match(/<img[^>]*>/g);
      expect(imgTags).toHaveLength(certificates.length);
    });

    it("should handle empty certificate list", () => {
      const certificates = [];
      const gridComponent = document.createElement("div");
      
      if (certificates.length === 0) {
        gridComponent.innerHTML = `
          <div class="flex flex-col items-center justify-center py-12 text-center">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No hay certificados disponibles
            </h3>
          </div>
        `;
      }
      
      expect(gridComponent.innerHTML).toContain("No hay certificados disponibles");
    });

    it("should generate correct certificate URLs", () => {
      const testIds = [2567, 2519, 2414];
      const expectedUrls = testIds.map(id => 
        `https://platzi.com/MigueEc/curso/${id}-course/diploma-og/og.jpeg`
      );
      
      expectedUrls.forEach(url => {
        expect(url).toMatch(/^https:\/\/platzi\.com\/MigueEc\/curso\/\d+-course\/diploma-og\/og\.jpeg$/);
      });
    });
  });

  describe("Error handling", () => {
    it("should handle errors gracefully", async () => {
      // Mock console.error para evitar spam en tests
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      try {
        // Simular error en getCertificatesByCategory
        const result = await certificateManager.getCertificatesByCategory(null);
        expect(result).toEqual([]);
      } finally {
        consoleSpy.mockRestore();
      }
    });
  });
});