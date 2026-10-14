import Image from 'next/image'

import type { Locale } from '@/lib/i18n'

import { Section } from '@/components/common/section'
import { getDictionary } from '@/data/i18n'
import { team } from '@/data/site'

export default function AboutSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <Section tag={t.about.tag} title={t.about.title} description={t.about.description}>
      <div className="mt-16 md:mt-20 max-w-3xl mx-auto reveal">
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          {t.about.missionTitle}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed text-pretty">
          {t.about.mission}
        </p>
      </div>

      <div className="mt-16 md:mt-20 mx-auto reveal">
        <h2 className="text-2xl font-heading font-semibold text-foreground text-center">
          {t.about.teamTitle}
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-brand/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={member.photo}
                  alt={`${t.about.portraitAlt} ${member.name}`}
                  fill
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary/70 mt-1">
                  {t.team[member.slug].role}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {t.team[member.slug].bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
