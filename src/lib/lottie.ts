// infrastructure/helpers/loadLottieAnimation.ts
const animationModules = import.meta.glob('@/assets/animations/*.json');

export const loadLottieAnimation = async (name: string): Promise<any> => {
  const path = `/src/assets/animations/${name}.json`;

  const loader = animationModules[path];
  if (!loader) {
    throw new Error(`Animación "${name}" no encontrada`);
  }

  const mod = await loader();
  if (typeof mod === 'object' && mod !== null && 'default' in mod) {
    return (mod as { default: any }).default;
  }
  throw new Error('El módulo cargado no tiene una propiedad "default".');
};
