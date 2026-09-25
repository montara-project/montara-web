import { SectionTitle } from '@/components/common/section'
import { techStack } from '@/data/site'

export function TechStackSection() {
  return (
    <div className="flex flex-col justify-center py-20 md:py-28 w-full">
      <SectionTitle
        align="left"
        tag="Tech stack"
        title="Technologies we work with"
        description="We choose the right tool for the job and stay current with the modern web ecosystem."
      />
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
