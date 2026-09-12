'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { navLinks, site } from '@/data/site'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-4 inset-x-0 mx-auto max-w-7xl px-2 md:px-12 z-[100] h-12">
      <div className="size-full mx-auto max-w-7xl px-4 bg-white/85 backdrop-blur-lg rounded-xl lg:rounded-2xl border border-black/10 shadow-[0_2px_16px_rgba(20,33,61,0.06)] md:px-2 flex items-center justify-start">
        <div className="flex items-center justify-between w-full my-auto inset-x-0">
          <div className="flex items-center flex-1 lg:flex-none pl-1">
            <Link href="/" className="text-lg font-semibold text-foreground">
              <Image
                src="/assets/images/brand-logo.png"
                alt="Montara Project"
                width={32}
                height={32}
                className="rounded-xl"
              />
            </Link>
            <span className="hidden sm:block ml-2.5 font-heading text-sm font-semibold tracking-tight text-primary">
              Montara Project
            </span>
            <div className="items-center hidden ml-6 lg:flex">
              <nav
                aria-label="Main"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="h-10 px-4 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 w-max"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="items-center flex gap-2 lg:gap-4">
            <Link
              href={`mailto:${site.email}`}
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-primary text-primary-foreground hover:bg-navy-deep h-8 px-3 hidden sm:flex"
            >
              Start a project
              <ArrowRight className="w-4 h-4 ml-2 hidden lg:block" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 active:scale-95 group select-none hover:bg-black/5 lg:hidden p-2 w-8 h-8"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="absolute top-[calc(100%+8px)] inset-x-0 p-4 z-20 bg-white rounded-xl border border-black/10 shadow-[0_12px_40px_rgba(20,33,61,0.12)] flex-1">
            <div className="size-full flex flex-col justify-start">
              <ul className="flex flex-col items-start flex-1 w-full space-y-1">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="w-full px-4 py-2 text-lg font-medium transition rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-black/5"
                  >
                    <Link href={link.href} className="flex items-center w-full text-start">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
