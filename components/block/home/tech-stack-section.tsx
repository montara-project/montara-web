import { SectionTitle } from '@/components/common/section'
import { techStack } from '@/data/site'

export function TechStackSection() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-28 w-full">
      <SectionTitle
        tag="Tech stack"
        title="Technologies we work with"
        description="We choose the right tool for the job and stay current with the modern web ecosystem."
      />
      <div className="mt-12 md:mt-16 w-full flex flex-wrap justify-center gap-3 max-w-3xl">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-4 py-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
