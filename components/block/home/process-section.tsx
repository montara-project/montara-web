import { SectionTitle } from '@/components/common/section'
import { process } from '@/data/site'

export function ProcessSection() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 lg:py-28 w-full">
      <SectionTitle
        tag="Process"
        title="How we work"
        description="A clear, collaborative process that keeps your project on track from kickoff to launch."
      />
      <div className="mt-12 md:mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 w-full">
          {process.map((step, i) => (
            <div key={step.title} className="relative flex flex-col border-t-2 border-border pt-6">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-0.5 w-10 -translate-y-0.5 bg-brand"
              />
              <span className="font-heading text-4xl font-semibold text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-heading font-semibold text-foreground mt-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
