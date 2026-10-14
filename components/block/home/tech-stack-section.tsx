import type { Locale } from '@/lib/i18n'

import { SectionTitle } from '@/components/common/section'
import { getDictionary } from '@/data/i18n'
import { techStack } from '@/data/site'

export function TechStackSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.tech
  return (
    <div className="flex flex-col justify-center py-20 md:py-28 w-full">
      <SectionTitle align="left" {...t} />
      <div className="mt-12 md:mt-16 w-full reveal">
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm px-4 py-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
