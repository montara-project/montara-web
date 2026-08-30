import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { projects } from '@/data/site'

export function ProjectsSection() {
  const featured = projects.slice(0, 3)

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Selected work
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Featured projects
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          A snapshot of the products and systems we have helped bring to life.
        </p>
      </div>
      <div className="mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {featured.map((project) => (
            <Link
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
                <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h3 className="text-lg font-heading font-medium mt-4">{project.title}</h3>
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
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8"
          >
            View all projects
          </Link>
        </div>
      </div>
    </div>
  )
}
