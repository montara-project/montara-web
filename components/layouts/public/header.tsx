'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { LogoIcon } from '@/components/common/svg'
import { navLinks, site } from '@/data/site'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th h-12">
      <div className="size-full mx-auto max-w-6xl px-4 backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] md:px-2 flex items-center justify-start">
        <div className="flex items-center justify-between w-full sticky mt-[7px] lg:mt-auto mb-auto inset-x-0">
          <div className="flex items-center flex-1 lg:flex-none pl-1">
            <Link href="/" className="text-lg font-semibold text-foreground">
              <LogoIcon />
            </Link>
            <div className="items-center hidden ml-4 lg:flex">
              <nav
                aria-label="Main"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none"
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
              className="items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-foreground text-background hover:opacity-70 h-8 px-3 hidden sm:flex"
            >
              Start a project
              <ArrowRight className="w-4 h-4 ml-2 hidden lg:block" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none hover:bg-accent hover:text-accent-foreground lg:hidden p-2 w-8 h-8"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex-1">
            <div className="size-full flex flex-col justify-start">
              <ul className="flex flex-col items-start flex-1 w-full space-y-3">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
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
