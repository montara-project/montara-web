import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { SectionActionLink, SectionTitle } from '@/components/common/section'
import { getDictionary } from '@/data/i18n'
import { projects } from '@/data/site'
import { localizePath, type Locale } from '@/lib/i18n'

export function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const featured = projects.slice(0, 3)

  return (
    <div className="flex flex-col justify-center py-20 md:py-28 w-full">
      <SectionTitle
        align="left"
        {...t.home.projects}
        action={
          <SectionActionLink
            href={localizePath(locale, '/projects')}
            label={t.common.viewAllProjects}
          />
        }
      />
      <div className="mt-12 md:mt-16 w-full reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={project.link ?? localizePath(locale, '/projects')}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/8 text-primary uppercase tracking-wide">
                  {project.category}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-4">
                {project.title}
                {project.link && <span className="sr-only"> {t.common.opensInNewTab}</span>}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t.projects[project.slug]}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
