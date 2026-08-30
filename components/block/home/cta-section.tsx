import Link from 'next/link'

import { site } from '@/data/site'

export function CtaSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]" />
        <div className="flex flex-col items-center justify-center w-full z-20">
          <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6">
            Let&apos;s build <br className="hidden md:block" /> something different
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
            Have a project in mind? Tell us about it and we&apos;ll get back to you with how we can
            help.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-primary text-primary-foreground hover:opacity-70 bt-primary h-10 px-8 w-full md:w-max"
            >
              Start a project
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none text-primary bg-primary/10 hover:bg-primary/30 h-10 px-8 w-full md:w-max"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div
          className="pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]"
          style={{ '--grid-angle': '65deg' } as React.CSSProperties}
        >
          <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
            <div className="animate-grid [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_0)]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
        </div>
      </div>
    </div>
  )
}
