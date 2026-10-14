'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button-variants'
import { getDictionary } from '@/data/i18n'
import { localizePath, splitLocale } from '@/lib/i18n'

// not-found receives no params, so the locale comes from the URL
export default function NotFound() {
  const { locale } = splitLocale(usePathname())
  const t = getDictionary(locale).notFound
  return (
    <div className="relative flex min-h-[80dvh] pt-24 flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(252,163,17,0.12),transparent_70%)]"
      />
      <div className="relative flex flex-col items-center">
        <Image
          src="/assets/images/brand-logo.png"
          alt="Montara Project"
          width={44}
          height={44}
          className="rounded-xl"
        />
        <p className="mt-10 font-heading text-7xl md:text-8xl font-semibold tracking-tight text-foreground tabular-nums">
          404
        </p>
        <h1 className="mt-4 text-2xl font-heading font-semibold text-foreground">{t.title}</h1>
        <p className="mt-3 max-w-md text-base text-muted-foreground leading-relaxed">{t.body}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link href={localizePath(locale, '/')} className={buttonVariants({ size: 'xl' })}>
            <ArrowLeft aria-hidden="true" />
            {t.backHome}
          </Link>
          <Link
            href={localizePath(locale, '/contact')}
            className={buttonVariants({ variant: 'subtle', size: 'xl' })}
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </div>
  )
}
