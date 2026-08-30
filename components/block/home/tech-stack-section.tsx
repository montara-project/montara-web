import { techStack } from '@/data/site'

export function TechStackSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Tech stack
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Technologies we work with
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          We choose the right tool for the job and stay current with the modern web ecosystem.
        </p>
      </div>
      <div className="mt-16 w-full flex flex-wrap justify-center gap-3 max-w-3xl">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-4 py-2 rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/60 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
