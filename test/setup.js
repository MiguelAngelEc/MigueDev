// Configuración global para las pruebas
import { expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom";

// Limpia el entorno después de cada prueba
afterEach(() => {
  // Limpia solo si existen
  if (typeof document !== "undefined" && document.body) {
    document.body.innerHTML = "";
  }
  if (typeof document !== "undefined" && document.head) {
    document.head.innerHTML = "";
  }
});

// Configuración global para simular el entorno del navegador
global.CSS = {
  supports: () => false,
};

// Mock de GSAP
const gsapMock = {
  to: vi.fn().mockReturnThis(),
  from: vi.fn().mockReturnThis(),
  fromTo: vi.fn().mockReturnThis(),
  set: vi.fn(),
  config: vi.fn(),
  defaults: vi.fn(),
  registerPlugin: vi.fn(),
};

vi.mock("gsap", () => ({
  ...gsapMock,
  gsap: gsapMock,
}));

// Mock de ScrollTrigger
vi.mock("gsap/ScrollTrigger", () => ({
  default: vi.fn(),
  ScrollTrigger: vi.fn(),
}));

// Mock de TextPlugin
vi.mock("gsap/TextPlugin", () => ({
  default: vi.fn(),
  TextPlugin: vi.fn(),
}));

// Mock de splitTextIntoChars function
global.splitTextIntoChars = vi.fn().mockImplementation((element) => {
  if (!element || !element.textContent) return { chars: [] };
  return {
    chars: element.textContent.split("").map((char) => ({ textContent: char })),
  };
});
