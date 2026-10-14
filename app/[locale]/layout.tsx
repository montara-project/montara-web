import '../globals.css'

import type { Metadata, Viewport } from 'next'

import { Outfit, Work_Sans } from 'next/font/google'

import PublicLayout from '@/components/layouts/public/layout'
import { META } from '@/lib/constants/meta'
import { locales } from '@/lib/i18n'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'
import { cn } from '@/lib/utils'

export const metadata: Metadata = META

export const viewport: Viewport = {
  themeColor: '#080a0c',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
  params,
}: Readonly<LocaleParams & { children: React.ReactNode }>) {
  const locale = await resolveLocale({ params })

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.masb0ymas.com/script.js"
          data-website-id="9ff12a9b-5fdf-4755-9cfa-ac4f10063f96"
        ></script>
      </head>
      <body className={cn(outfit.variable, workSans.variable, 'font-sans antialiased')}>
        <PublicLayout locale={locale}>{children}</PublicLayout>
      </body>
    </html>
  )
}
