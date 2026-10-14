import { ArrowRight, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button-variants'
import { getDictionary } from '@/data/i18n'
import { asset, projects, services, site } from '@/data/site'
import { localizePath, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero
  const common = getDictionary(locale).common
  const heroStats = [
    { value: String(projects.length), label: t.stats.projects },
    { value: String(services.length), label: t.stats.services },
    { value: '48h', label: t.stats.response },
  ]

  return (
    <section className="relative isolate w-screen ml-[calc(50%-50vw)] overflow-hidden pt-32 md:pt-44 pb-12 md:pb-16">
      {/* Gradient glows instead of filter: blur() layers — same look, no per-frame blur cost */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(45%_60%_at_25%_0%,rgba(252,163,17,0.12),transparent_70%),radial-gradient(30%_40%_at_95%_45%,rgba(20,33,61,0.55),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-12">
        <div className="flex w-full max-w-4xl flex-col items-start text-start">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 backdrop-blur px-4 py-1.5 shadow-sm select-none">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-brand opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              {t.available}
            </span>
          </span>

          {/* The brand line stays English in every locale (lang="en" keeps pronunciation right) */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground mt-7 leading-[1.06] text-balance">
            <span lang="en">{t.titleLead}</span>{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-0.08em] bottom-[0.06em] h-[0.3em] -rotate-1 rounded-full bg-brand/40"
              />
              <span lang="en" className="relative">
                {t.titleEmphasis}
              </span>
            </span>
            {t.titleTrail && <span lang="en"> {t.titleTrail}</span>}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed text-pretty">
            {t.lead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-9 w-full sm:w-auto">
            <Link
              href={`mailto:${site.email}`}
              className={cn(
                buttonVariants({ size: 'xl' }),
                'w-full sm:w-max shadow-[0_10px_28px_rgba(0,0,0,0.4)]'
              )}
            >
              {common.startProject}
              <ArrowRight />
            </Link>
            <Link
              href={localizePath(locale, '/projects')}
              className={cn(buttonVariants({ variant: 'subtle', size: 'xl' }), 'w-full sm:w-max')}
            >
              {common.viewWork}
            </Link>
          </div>

          <dl className="mt-12 flex flex-wrap items-start justify-start gap-x-8 gap-y-6 sm:gap-x-10">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  'flex flex-col-reverse items-start',
                  i > 0 && 'sm:border-l sm:border-border sm:pl-10'
                )}
              >
                <dt className="text-xs text-muted-foreground mt-1.5">{stat.label}</dt>
                <dd className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground tabular-nums">
                  {stat.value}
                </dd>
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
              <div className="rounded-lg lg:rounded-xl border border-foreground/10 bg-black overflow-hidden">
                <Image
                  src={asset('images/terarouter.png')}
                  alt={t.frameAlt}
                  width={1879}
                  height={984}
                  priority
                  sizes="(min-width: 1280px) 1184px, calc(100vw - 2rem)"
                  className="rounded-lg lg:rounded-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="absolute -top-5 right-4 md:right-10 hidden sm:flex items-center gap-2.5 rounded-xl border border-border bg-card/90 backdrop-blur px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
              <span
                aria-hidden="true"
                className="inline-flex size-8 items-center justify-center rounded-lg bg-brand/15 text-brand"
              >
                <Zap className="size-4" strokeWidth={2} />
              </span>
              <div className="text-start">
                <p className="text-xs font-semibold text-foreground">{t.badgeTitle}</p>
                <p className="text-[11px] text-muted-foreground">{t.badgeBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
