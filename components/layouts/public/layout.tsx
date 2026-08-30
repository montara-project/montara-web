import { PropsWithChildren } from 'react'

import { SiteFooter } from './footer'
import { SiteHeader } from './header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div
        id="home"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px]"
      />
      <div className="relative w-full h-full">
        <SiteHeader />
        <main className="mx-auto w-full z-40 px-4 md:px-12 relative max-w-7xl">{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}
