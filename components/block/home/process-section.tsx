import { process } from '@/data/site'

export function ProcessSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Process
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          How we work
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          A clear, collaborative process that keeps your project on track from kickoff to launch.
        </p>
      </div>
      <div className="mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {process.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col rounded-2xl border border-border/60 p-6"
            >
              <span className="text-sm font-medium text-primary/80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-heading font-medium mt-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
