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
      <body className={cn(googleSans.className, 'antialiased')}>{children}</body>
    </html>
  )
}
