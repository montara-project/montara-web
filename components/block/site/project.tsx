'use client'

import { ArrowUpRight } from 'lucide-react'

import { Section } from '@/components/common/section'
import { projects } from '@/data/site'

export default function ProjectSection() {
  return (
    <Section
      tag="Portfolio"
      title="Our projects"
      description="A selection of the products and systems we have designed, built, and shipped."
    >
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link ?? '/projects'}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noreferrer' : undefined}
            className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand hover:shadow-[0_12px_32px_rgba(20,33,61,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary uppercase tracking-wide">
                {project.category}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </div>
            <h2 className="text-lg font-heading font-semibold text-foreground mt-4">
              {project.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
