import { PropsWithChildren } from 'react'

import { SiteFooter } from './footer'
import { SiteHeader } from './header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to content
      </a>
      <div
        id="home"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,33,61,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,33,61,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px]"
        aria-hidden="true"
      />
      <div className="relative w-full h-full">
        <SiteHeader />
        <main id="main" className="mx-auto w-full z-40 px-4 md:px-12 relative max-w-7xl">
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
