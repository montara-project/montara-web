import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/common/section'
import { getDictionary } from '@/data/i18n'
import { services } from '@/data/site'
import { localizePath, type Locale } from '@/lib/i18n'

export function ServicesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <div className="flex flex-col justify-center py-20 md:py-28 w-full">
      <SectionTitle align="left" {...t.home.services} />
      <div className="mt-12 md:mt-16 w-full reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {services.map((service) => {
            const Icon = service.icon
            const copy = t.services[service.slug]
            return (
              <Link
                key={service.slug}
                href={localizePath(locale, `/services#${service.slug}`)}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-brand/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-brand group-hover:text-black">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-brand">
                    {service.comingSoon ? t.common.comingSoon : t.common.learnMore}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mt-6">
                  {copy.title}
                </h3>
                <p className="text-sm text-primary/70 mt-1 font-medium">{copy.tagline}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  {copy.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
