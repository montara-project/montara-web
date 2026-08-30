import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { services } from '@/data/site'

export function ServicesSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Services
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          What we do
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          We handle project-based work across the full stack — from APIs and interfaces to the
          infrastructure that runs them.
        </p>
      </div>
      <div className="mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/60"
              >
                <div className="mb-4">
                  <Icon
                    className="w-8 h-8 text-muted-foreground transition-colors group-hover:text-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-heading font-medium">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.tagline}</p>
                <p className="text-sm text-muted-foreground mt-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm mt-4 text-foreground/70 group-hover:text-foreground">
                  {service.comingSoon ? 'Coming soon' : 'Learn more'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
