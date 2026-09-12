'use client'

import Image from 'next/image'

import { Section } from '@/components/common/section'
import { site, team } from '@/data/site'

export default function AboutSection() {
  return (
    <Section tag="About" title={`About ${site.name}`} description={site.description}>
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-heading font-semibold text-foreground">Our mission</h2>
        <p className="text-base text-muted-foreground mt-4 leading-relaxed">
          We believe great software comes from clear communication, solid engineering, and a focus
          on real outcomes. Our mission is to help teams and founders bring their ideas to life with
          reliable, maintainable technology.
        </p>
      </div>

      <div className="mt-16 mx-auto">
        <h2 className="text-2xl font-heading font-semibold text-foreground text-center">
          The team
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
              />
              <h3 className="text-lg font-heading font-semibold text-foreground mt-4">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary/70 mt-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
