import { describe, it, expect, vi } from 'vitest';
//Unite text
describe('mainAnimations', () => {
  it('should import the module without errors', async () => {
    // Test básico: verificar que el módulo se puede importar
    const module = await import('../mainAnimations');
    expect(module).toBeDefined();
    expect(typeof module.initMainAnimations).toBe('function');
  });
  
  it('should export initMainAnimations function', async () => {
    const { initMainAnimations } = await import('../mainAnimations');
    expect(typeof initMainAnimations).toBe('function');
  });
});
