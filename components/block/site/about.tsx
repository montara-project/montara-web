import Image from 'next/image'

import { Section } from '@/components/common/section'
import { site, team } from '@/data/site'

export default function AboutSection() {
  return (
    <Section tag="About" title={`About ${site.name}`} description={site.description}>
      <div className="mt-16 md:mt-20 max-w-3xl mx-auto reveal">
        <h2 className="text-2xl font-heading font-semibold text-foreground">Our mission</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed text-pretty">
          We believe great software comes from clear communication, solid engineering, and a focus
          on real outcomes. Our mission is to help teams and founders bring their ideas to life with
          reliable, maintainable technology.
        </p>
      </div>

      <div className="mt-16 md:mt-20 mx-auto reveal">
        <h2 className="text-2xl font-heading font-semibold text-foreground text-center">
          The team
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-brand/50 hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary/70 mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
