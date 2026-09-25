import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { SectionActionLink, SectionTitle } from '@/components/common/section'
import { projects } from '@/data/site'

export function ProjectsSection() {
  const featured = projects.slice(0, 3)

  return (
    <div className="flex flex-col justify-center py-20 md:py-28 w-full">
      <SectionTitle
        align="left"
        tag="Selected work"
        title="Featured projects"
        description="A snapshot of the products and systems we have helped bring to life."
        action={<SectionActionLink href="/projects" label="View all projects" />}
      />
      <div className="mt-12 md:mt-16 w-full reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {featured.map((project) => (
            <Link
              key={project.title}
              href={project.link ?? '/projects'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/8 text-primary uppercase tracking-wide">
                  {project.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-4">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {project.description}
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
