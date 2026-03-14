
export function formatPrice(cents: number, _locale?: string): string {
  const value = cents / 100;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
