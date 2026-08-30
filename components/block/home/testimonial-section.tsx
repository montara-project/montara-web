import { Testimonial, testimonialsRow1, testimonialsRow2 } from '@/data/mock'

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-neutral-50/[.05] hover:bg-foreground/10 p-4 transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          loading="lazy"
          width={32}
          height={32}
          decoding="async"
          className="rounded-full"
          style={{ color: 'transparent' }}
          src={t.avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">{t.name}</figcaption>
          <p className="text-xs font-medium text-foreground/40">{t.handle}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{t.quote}</blockquote>
    </figure>
  )
}

function MarqueeRow({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s]">
      <div
        className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
      >
        {items.map((t) => (
          <TestimonialCard key={t.handle} t={t} />
        ))}
      </div>
      <div
        className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
      >
        {items.map((t) => (
          <TestimonialCard key={t.handle} t={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Our Customers
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          What our customers say
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          We are proud to have helped thousands of customers across the globe. Here are some of
          their stories
        </p>
      </div>
      <div className="mt-16 w-full relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <MarqueeRow items={testimonialsRow1} />
          <MarqueeRow items={testimonialsRow2} reverse />
        </div>
      </div>
    </div>
  )
}
