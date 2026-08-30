'use client'

import { Section } from '@/components/common/section'
import { site, team } from '@/data/site'

export default function AboutSection() {
  return (
    <Section tag="About" title={`About ${site.name}`} description={site.description}>
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-heading font-medium">Our mission</h2>
        <p className="text-base text-accent-foreground/80 mt-4">
          We believe great software comes from clear communication, solid engineering, and a focus
          on real outcomes. Our mission is to help teams and founders bring their ideas to life with
          reliable, maintainable technology.
        </p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-heading font-medium text-center">The team</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-2xl border border-border/60 p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-foreground/70 font-medium">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="text-lg font-heading font-medium mt-4">{member.name}</h3>
              <p className="text-sm text-primary/80 mt-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
