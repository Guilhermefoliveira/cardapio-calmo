
export function formatPrice(cents: number, locale: string): string {
  const value = cents / 100;

  const localeMap: Record<string, string> = {
    pt: 'pt-BR',
    en: 'en-US',
    es: 'es-ES',
  };

  return new Intl.NumberFormat(localeMap[locale] ?? 'pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
