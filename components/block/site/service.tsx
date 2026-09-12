'use client'

import { Check } from 'lucide-react'

import { Section } from '@/components/common/section'
import { services } from '@/data/site'

export default function ServiceSection() {
  return (
    <Section
      tag="Services"
      title="What we do"
      description="We handle project-based work across backend, frontend, and DevOps — with game development on the horizon."
    >
      <div className="mt-16 flex flex-col gap-8 max-w-4xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 scroll-mt-28"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Icon className="w-5.5 h-5.5" strokeWidth={1.75} />
                </span>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  {service.title}
                </h2>
                {service.comingSoon && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand/15 text-foreground/80 uppercase tracking-wide">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-primary/70 mt-3">{service.tagline}</p>
              <p className="text-base text-muted-foreground mt-2 leading-relaxed">
                {service.description}
              </p>

              {!service.comingSoon && (
                <>
                  <h3 className="text-sm font-semibold text-foreground mt-6">
                    What&apos;s included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-brand shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-sm font-semibold text-foreground mt-6">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-border bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </section>
          )
        })}
      </div>
    </Section>
  )
}
