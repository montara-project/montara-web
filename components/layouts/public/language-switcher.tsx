'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import {
  LOCALE_COOKIE,
  localeNames,
  localizePath,
  locales,
  splitLocale,
  type Locale,
} from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  locale: Locale
  label: string
  /** 'row' fills the mobile menu with 44px targets; 'inline' is the compact header/footer form */
  variant?: 'inline' | 'row'
  onSwitch?: () => void
  className?: string
}

export function LanguageSwitcher({
  locale,
  label,
  variant = 'inline',
  onSwitch,
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { path } = splitLocale(pathname)

  return (
    <div role="group" aria-label={label} className={cn('flex items-center gap-1', className)}>
      {locales.map((target) => {
        const href = localizePath(target, path)
        const active = target === locale
        return (
          <Link
            key={target}
            href={href}
            hrefLang={target}
            lang={target}
            aria-label={localeNames[target]}
            aria-current={active ? 'true' : undefined}
            // The proxy redirects by cookie, so a prefetched URL could resolve to the old language
            prefetch={false}
            onClick={(event) => {
              // Remember an explicit choice for a year; the proxy honors it on unprefixed URLs
              document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`
              onSwitch?.()
              if (active) {
                event.preventDefault()
                return
              }
              // Keep the section anchor (e.g. /services#backend) across languages
              if (window.location.hash) {
                event.preventDefault()
                router.push(`${href}${window.location.hash}`)
              }
            }}
            className={cn(
              'relative inline-flex items-center justify-center rounded-md text-sm font-medium tabular-nums transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60',
              variant === 'row' ? 'min-h-11 flex-1 px-4 text-base' : 'h-10 px-2.5',
              active
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
            )}
          >
            {target.toUpperCase()}
            {active && (
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -bottom-px h-0.5 rounded-full bg-brand',
                  variant === 'row' ? 'inset-x-6' : 'inset-x-2.5'
                )}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}
