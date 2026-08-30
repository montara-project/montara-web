import './globals.css'

import type { Metadata } from 'next'

import { Google_Sans } from 'next/font/google'

import { META } from '@/lib/constants/meta'
import { cn } from '@/lib/utils'

export const metadata: Metadata = META

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  subsets: ['latin'],
  weight: '400',
  preload: true,
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
      <body className={cn(googleSans.className, 'antialiased')}>{children}</body>
    </html>
  )
}
