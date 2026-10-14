'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import type { Dictionary } from '@/data/i18n'

import { buttonVariants } from '@/components/ui/button-variants'
import { navLinks, site } from '@/data/site'
import { localizePath, splitLocale, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

import { LanguageSwitcher } from './language-switcher'

export function SiteHeader({ locale, t }: { locale: Locale; t: Dictionary['nav'] }) {
  const pathname = usePathname()
  // The menu is open only on the route it was opened on, so any navigation closes it
  const [openOn, setOpenOn] = useState<string | null>(null)
  const mobileOpen = openOn === pathname
  const closeMenu = () => setOpenOn(null)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mobileOpen) return
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpenOn(null)
      toggleRef.current?.focus()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenOn(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [mobileOpen])

  const { path } = splitLocale(pathname)
  const isActive = (href: string) =>
    href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`)

  return (
    <header
      ref={headerRef}
      className="fixed top-4 inset-x-0 mx-auto max-w-7xl px-2 md:px-12 z-[100] h-12"
    >
      <div className="size-full mx-auto max-w-7xl px-4 bg-card/80 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-border shadow-[0_2px_16px_rgba(0,0,0,0.35)] md:px-2 flex items-center justify-start">
        <div className="flex items-center justify-between w-full my-auto inset-x-0">
          <div className="flex items-center flex-1 lg:flex-none pl-1">
            <Link
              href={localizePath(locale, '/')}
              className="text-lg font-semibold text-foreground"
            >
              <Image
                src="/assets/images/brand-logo.png"
                alt="Montara Project"
                width={32}
                height={32}
                priority
                className="rounded-xl"
              />
            </Link>
            <span className="hidden sm:block ml-2.5 font-heading text-sm font-semibold tracking-tight text-foreground">
              Montara Project
            </span>
            <div className="items-center hidden ml-6 lg:flex">
              <nav
                aria-label={t.mainLabel}
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  {navLinks.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={localizePath(locale, link.href)}
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        className={cn(
                          'relative h-10 px-4 py-2 text-sm font-medium rounded-md w-max transition-colors duration-200 hover:text-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60',
                          isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
                        )}
                      >
                        {t.links[link.key]}
                        {isActive(link.href) && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-brand"
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="items-center flex gap-2 lg:gap-3">
            <LanguageSwitcher locale={locale} label={t.languageLabel} className="hidden lg:flex" />
            <Link
              href={`mailto:${site.email}`}
              className={cn(buttonVariants(), 'px-3 hidden sm:inline-flex')}
            >
              {t.startProject}
              <ArrowRight className="hidden lg:block" />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpenOn(mobileOpen ? null : pathname)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? t.closeMenu : t.openMenu}
              className="inline-flex items-center justify-center rounded-md transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 active:scale-95 select-none hover:bg-foreground/5 lg:hidden size-11 -mr-2"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute top-[calc(100%+8px)] inset-x-0 p-4 z-20 bg-card rounded-xl border border-border shadow-[0_12px_40px_rgba(0,0,0,0.5)] lg:hidden"
          >
            <nav aria-label={t.mobileLabel}>
              <ul className="flex flex-col w-full space-y-1">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={localizePath(locale, link.href)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      onClick={closeMenu}
                      className={cn(
                        'flex min-h-11 w-full items-center rounded-md px-4 py-2 text-lg font-medium transition hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60',
                        isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      {t.links[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher
              locale={locale}
              label={t.languageLabel}
              variant="row"
              onSwitch={closeMenu}
              className="mt-3 border-t border-border pt-3"
            />
            <Link
              href={`mailto:${site.email}`}
              onClick={closeMenu}
              className={cn(buttonVariants({ size: 'xl' }), 'mt-4 w-full sm:hidden')}
            >
              {t.startProject}
              <ArrowRight />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
