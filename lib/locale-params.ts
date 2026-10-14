import { notFound } from 'next/navigation'

import { isLocale, type Locale } from './i18n'

export interface LocaleParams {
  params: Promise<{ locale: string }>
}

/** Reads the [locale] segment; anything that isn't a supported locale is a 404. */
export async function resolveLocale({ params }: LocaleParams): Promise<Locale> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return locale
}
