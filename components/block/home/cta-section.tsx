import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button-variants'
import { getDictionary } from '@/data/i18n'
import { site } from '@/data/site'
import { localizePath, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function CtaSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-28 w-full relative">
      <div className="relative flex flex-col items-center justify-center text-center w-full px-6 py-20 md:py-24 mx-auto rounded-3xl bg-navy border border-foreground/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(252,163,17,0.28),transparent_75%)]"
        />
        <div
          aria-hidden="true"
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground !leading-tight tracking-tight">
            {t.home.cta.titleLead} <br className="hidden md:block" /> {t.home.cta.titleTrail}
          </h2>
          <p className="text-base md:text-lg text-center text-foreground/70 max-w-xl mx-auto mt-6 leading-relaxed">
            {t.home.cta.body}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 mt-9">
            <Link
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ size: 'xl' }), 'w-full md:w-max')}
            >
              {t.common.startProject}
            </Link>
            <Link
              href={localizePath(locale, '/contact')}
              className={cn(
                buttonVariants({ variant: 'subtle-navy', size: 'xl' }),
                'w-full md:w-max'
              )}
            >
              {t.common.contactUs}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
