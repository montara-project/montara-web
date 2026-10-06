import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { asset, site } from '@/data/site'

const heroStats = [
  { value: '12+', label: 'Projects shipped' },
  { value: '4', label: 'Industries served' },
  { value: '48h', label: 'Avg. response time' },
]

export function HeroSection() {
  return (
    <section className="relative isolate w-screen ml-[calc(50%-50vw)] overflow-hidden pt-32 md:pt-44 pb-12 md:pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(70%_80%_at_30%_0%,rgba(252,163,17,0.10),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-44 left-1/4 -translate-x-1/2 h-96 w-[46rem] rounded-full bg-brand/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -right-32 h-72 w-96 rounded-full bg-navy/40 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12">
        <div className="flex w-full max-w-4xl flex-col items-start text-start">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 shadow-sm select-none">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-brand opacity-60 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Available for new projects
            </span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground mt-7 leading-[1.06] text-balance">
            Build something{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-0.08em] bottom-[0.06em] h-[0.3em] -rotate-1 rounded-full bg-brand/40"
              />
              <span className="relative">different</span>
            </span>{' '}
            with Montara Project
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed text-pretty">
            We design and build reliable web products end to end — backend, frontend, and DevOps.
            From idea to production, we ship software that scales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-9 w-full sm:w-auto">
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-[0_10px_28px_rgba(0,0,0,0.4)] h-11 px-8 w-full sm:w-max"
            >
              Start a project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none border border-border bg-white/[0.04] text-foreground hover:border-muted-foreground/30 hover:bg-white/[0.08] hover:-translate-y-0.5 h-11 px-8 w-full sm:w-max"
            >
              View our work
            </Link>
          </div>

          <dl className="flex flex-wrap items-start justify-start gap-x-10 gap-y-6 mt-12">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i === 0
                    ? 'flex flex-col items-start'
                    : 'flex flex-col items-start pl-10 border-l border-border'
                }
              >
                <dd className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground tabular-nums">
                  {stat.value}
                </dd>
                <dt className="text-xs text-muted-foreground mt-1.5">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto mt-14 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute -inset-4 md:-inset-6 -z-10 gradient opacity-20 blur-2xl rounded-[2rem]"
          />
          <div className="hero-tilt">
            <div className="relative rounded-xl lg:rounded-2xl border border-border bg-card p-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <div className="rounded-lg lg:rounded-xl border border-white/10 bg-black overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Tera Router AI dashboard built by Montara Project"
                  loading="lazy"
                  width={1879}
                  height={984}
                  decoding="async"
                  className="rounded-lg lg:rounded-xl w-full h-auto"
                  style={{ color: 'transparent' }}
                  src={asset('/images/terarouter.png')}
                />
              </div>
            </div>

            <div className="absolute -top-5 right-4 md:right-10 hidden sm:flex items-center gap-2.5 rounded-xl border border-border bg-card/90 backdrop-blur px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-brand/15 text-base">
                ⚡
              </span>
              <div className="text-start">
                <p className="text-xs font-semibold text-foreground">End-to-end delivery</p>
                <p className="text-[11px] text-muted-foreground">Backend · Frontend · DevOps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
