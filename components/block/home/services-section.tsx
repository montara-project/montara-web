import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/common/section'
import { services } from '@/data/site'

export function ServicesSection() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-28 w-full">
      <SectionTitle
        tag="Services"
        title="What we do"
        description="We handle project-based work across the full stack — from APIs and interfaces to the infrastructure that runs them."
      />
      <div className="mt-12 md:mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-brand group-hover:text-black">
                  <Icon className="w-5.5 h-5.5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-primary/70 mt-1 font-medium">{service.tagline}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm mt-5 font-medium text-primary group-hover:text-brand transition-colors duration-200">
                  {service.comingSoon ? 'Coming soon' : 'Learn more'}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
