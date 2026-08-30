import { ArrowUpRight } from 'lucide-react'

import { projects } from '@/data/site'

export default function ProjectsPage() {
  return (
    <div className="w-full px-4 md:px-8 pt-32 pb-24">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Portfolio
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-medium !leading-snug mt-6">
          Our projects
        </h1>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          A selection of the products and systems we have designed, built, and shipped.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.map((project) => (
          <article
            key={project.title}
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
          </article>
        ))}
      </div>
    </div>
  )
}
