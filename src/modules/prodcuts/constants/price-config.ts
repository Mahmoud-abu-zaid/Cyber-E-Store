export function usePriceConfig() {
  const minPrice = 50;
  const maxPrice = 1000;
  const gap = 10;
  const step = 10;

  return { minPrice, maxPrice, gap, step };
}