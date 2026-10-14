export const locales = ['en', 'id'] as const
export type Locale = (typeof locales)[number]

/** English lives at the root (no prefix); every other locale is prefixed: /id/services */
export const defaultLocale: Locale = 'en'
export const LOCALE_COOKIE = 'locale'

export const localeNames: Record<Locale, string> = { en: 'English', id: 'Bahasa Indonesia' }
export const ogLocales: Record<Locale, string> = { en: 'en_US', id: 'id_ID' }

export function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? '')
}

/** '/services#backend' → '/id/services#backend' for id; unchanged for the default locale */
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

/**
 * '/id/services' → { locale: 'id', path: '/services' }. Unprefixed paths are the default locale;
 * '/en/...' (the internal rewrite target) is stripped too, so callers never see it.
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split('/')
  if (isLocale(first)) {
    return { locale: first, path: `/${rest.join('/')}` }
  }
  return { locale: defaultLocale, path: pathname || '/' }
}

export function formatDate(locale: Locale, isoDate: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(isoDate)
  )
}
