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
              className="rounded-2xl border border-border/60 p-6 md:p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                <h2 className="text-2xl font-heading font-medium">{service.title}</h2>
                {service.comingSoon && (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-foreground/80">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{service.tagline}</p>
              <p className="text-base text-accent-foreground/80 mt-4">{service.description}</p>

              {!service.comingSoon && (
                <>
                  <h3 className="text-sm font-medium text-foreground mt-6">What&apos;s included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-sm font-medium text-foreground mt-6">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-border/60 text-muted-foreground"
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
