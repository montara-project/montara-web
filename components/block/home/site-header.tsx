'use client'

import { ArrowRight, ChevronDown, CopyCheck, Gem, Layers3, UserCog, Waypoints } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { LogoIcon } from '@/components/common/svg'

const navLinks = [
  { label: 'How it works', href: '/docs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Integrations', href: '/integrations' },
]

const featureItems = [
  { label: 'Content ideation', href: '/features' },
  { label: 'Advanced analytics', href: '/features' },
  { label: 'Image generation', href: '/features' },
  { label: 'Hashtags suggestions', href: '/features' },
]

const resourceItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'Community', href: '/community' },
  { label: 'Guides', href: '/guides' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

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
                  <li className="relative">
                    <button
                      type="button"
                      onMouseEnter={() => setFeaturesOpen(true)}
                      onMouseLeave={() => setFeaturesOpen(false)}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:text-accent-foreground focus:outline-none text-muted-foreground hover:text-foreground"
                    >
                      Features
                      <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                    {featuresOpen && (
                      <div className="absolute left-0 top-full pt-1">
                        <div className="w-48 rounded-lg border border-border bg-popover p-1 shadow-lg">
                          {featureItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="relative">
                    <button
                      type="button"
                      onMouseEnter={() => setResourcesOpen(true)}
                      onMouseLeave={() => setResourcesOpen(false)}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:text-accent-foreground focus:outline-none text-muted-foreground hover:text-foreground"
                    >
                      Resources
                      <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                    {resourcesOpen && (
                      <div className="absolute left-0 top-full pt-1">
                        <div className="w-48 rounded-lg border border-border bg-popover p-1 shadow-lg">
                          {resourceItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="items-center flex gap-2 lg:gap-4">
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none text-foreground bg-[#232323] hover:brightness-125 h-8 px-3 hover:translate-y-0 hover:scale-100"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-foreground text-background hover:opacity-70 h-8 px-3 hidden sm:flex"
            >
              Start for free
              <ArrowRight className="w-4 h-4 ml-2 hidden lg:block" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none hover:bg-accent hover:text-accent-foreground lg:hidden p-2 w-8 h-8"
            >
              <svg
                className="w-3.5 h-3.5 duration-300"
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9H15M1 1H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex-1">
            <div className="size-full flex flex-col justify-start">
              <ul className="flex flex-col items-start flex-1 w-full space-y-3">
                <li className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/how-it-works" className="flex items-center w-full text-start">
                    <UserCog className="w-4 h-4 mr-2" />
                    How it works
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/features" className="flex items-center w-full text-start">
                    <CopyCheck className="w-4 h-4 mr-2" />
                    Features
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/pricing" className="flex items-center w-full text-start">
                    <Gem className="w-4 h-4 mr-2" />
                    Pricing
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/integrations" className="flex items-center w-full text-start">
                    <Waypoints className="w-4 h-4 mr-2" />
                    Integrations
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link href="/resources" className="flex items-center w-full text-start">
                    <Layers3 className="w-4 h-4 mr-2" />
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
