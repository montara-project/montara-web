import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/common/section'
import { services } from '@/data/site'

export function ServicesSection() {
  return (
    <div className="flex flex-col justify-center py-20 md:py-28 w-full">
      <SectionTitle
        align="left"
        tag="Services"
        title="What we do"
        description="We handle project-based work across the full stack — from APIs and interfaces to the infrastructure that runs them."
      />
      <div className="mt-12 md:mt-16 w-full reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-brand hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-brand group-hover:text-black">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground/70 transition-colors duration-200 group-hover:text-brand">
                    {service.comingSoon ? 'Coming soon' : 'Learn more'}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mt-6">
                  {service.title}
                </h3>
                <p className="text-sm text-primary/70 mt-1 font-medium">{service.tagline}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
