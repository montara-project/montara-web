import type { Metadata } from 'next'

import { getDictionary, type Dictionary } from '@/data/i18n'
import { localizePath, locales, ogLocales, type Locale } from '@/lib/i18n'

export const META_URL = 'https://montaraproject.com'
export const META_TITLE = `Montara Project - Build Something Different`
export const META_DESCRIPTION = `Montara Project builds something different. We handle full-stack web development including backend, frontend, and DevOps, plus cross-platform desktop apps built with Tauri.`
export const META_IMAGE = '/assets/images/brand-logo.png'
export const META_KEYWORDS = `montara project, web development, backend development, frontend development, devops, full-stack development, desktop development, tauri`

const SITE_NAME = 'Montara Project'

export const META: Metadata = {
  metadataBase: new URL(META_URL),
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: META_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: META_IMAGE,
        width: 988,
        height: 922,
        alt: META_TITLE,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: META_URL,
    creator: SITE_NAME,
    images: [META_IMAGE],
  },
  icons: {
    icon: '/assets/favicon/favicon.ico',
    apple: '/assets/favicon/apple-touch-icon.png',
    shortcut: '/assets/favicon/favicon.ico',
    other: {
      rel: 'shortcut icon',
      url: '/assets/favicon/favicon.ico',
    },
  },
} as const

type PageKey = keyof Dictionary['meta']

/**
 * Per-page, per-locale metadata: localized title and description, a canonical URL for this
 * locale, hreflang alternates for every locale (x-default → English), and the OG locale.
 */
export function pageMeta(locale: Locale, page: PageKey, path: string): Metadata {
  const { title, description } = getDictionary(locale).meta[page]
  const url = `${META_URL}${localizePath(locale, path)}`
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${META_URL}${localizePath(l, path)}`])
  ) as Record<Locale, string>
  return {
    ...META,
    title,
    description,
    alternates: { canonical: url, languages: { ...languages, 'x-default': languages.en } },
    openGraph: {
      ...META.openGraph,
      title,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { ...META.twitter, title, description },
  }
}
