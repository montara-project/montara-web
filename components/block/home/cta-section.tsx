import Link from 'next/link'

import { site } from '@/data/site'

export function CtaSection() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-28 w-full relative">
      <div className="relative flex flex-col items-center justify-center text-center w-full px-6 py-20 md:py-24 mx-auto rounded-3xl bg-navy overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-brand/30 blur-[100px]"
        />
        <div
          className="pointer-events-none absolute size-full overflow-hidden opacity-60 [perspective:200px]"
          style={{ '--grid-angle': '65deg' } as React.CSSProperties}
        >
          <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
            <div className="animate-grid [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_0)]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent to-90%" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <span aria-hidden="true" className="inline-block w-10 h-1 rounded-full bg-brand mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading heading font-semibold !leading-tight tracking-tight">
            Let&apos;s build <br className="hidden md:block" /> something different
          </h2>
          <p className="text-base md:text-lg text-center text-white/65 max-w-xl mx-auto mt-6 leading-relaxed">
            Have a project in mind? Tell us about it and we&apos;ll get back to you with how we can
            help.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 mt-9">
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none bg-brand text-black hover:bg-brand/85 h-11 px-8 w-full md:w-max"
            >
              Start a project
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none border border-white/25 bg-white/5 text-white hover:bg-white/15 h-11 px-8 w-full md:w-max"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
