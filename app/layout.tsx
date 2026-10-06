import './globals.css'

import type { Metadata, Viewport } from 'next'

import { Outfit, Work_Sans } from 'next/font/google'

import { META } from '@/lib/constants/meta'
import { cn } from '@/lib/utils'

export const metadata: Metadata = META

export const viewport: Viewport = {
  themeColor: '#080a0c',
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.masb0ymas.com/script.js"
          data-website-id="9ff12a9b-5fdf-4755-9cfa-ac4f10063f96"
        ></script>
      </head>
      <body className={cn(outfit.variable, workSans.variable, 'font-sans antialiased')}>
        {children}
      </body>
    </html>
  )
}
