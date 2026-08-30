import { Metadata } from 'next'

export const META_URL = 'https://montaraproject.com'
export const META_TITLE = `Montara Project - Build Something Different`
export const META_DESCRIPTION = `Montara Project builds something different. We handle full-stack web development including backend, frontend, and DevOps, with game development coming soon.`
export const META_IMAGE = '/assets/images/brand-logo.png'
export const META_KEYWORDS = `montara project, web development, backend development, frontend development, devops, full-stack development, game development`

const SITE_NAME = 'Montara Project'

export const META: Metadata = {
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
        width: 1200,
        height: 630,
        alt: META_TITLE,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
