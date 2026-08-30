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
            className="group relative flex flex-col rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-foreground/80">
                {project.category}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
            </div>
            <h2 className="text-lg font-heading font-medium mt-4">{project.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-foreground/5 text-muted-foreground"
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
