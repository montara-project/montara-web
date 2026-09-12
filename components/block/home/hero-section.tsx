import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { asset, site } from '@/data/site'

const heroAvatars = [
  '/assets/images/avatars/men-1.jpg',
  '/assets/images/avatars/women-2.jpg',
  '/assets/images/avatars/men-5.jpg',
  '/assets/images/avatars/women-6.jpg',
  '/assets/images/avatars/men-9.jpg',
]

export function HeroSection() {
  return (
    <div className="relative mt-8 md:mt-10">
      <section className="relative isolate overflow-hidden px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
        <div
          aria-hidden="true"
          className="absolute -top-44 left-1/2 -translate-x-1/2 h-96 w-[46rem] rounded-full bg-brand/20 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-40 -left-32 h-72 w-96 rounded-full bg-primary/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute top-52 -right-32 h-72 w-96 rounded-full bg-brand/10 blur-[120px]"
        />

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-white/80 backdrop-blur px-4 py-1.5 shadow-sm select-none">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-brand opacity-60 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-xs font-medium tracking-wide text-primary">
              Available for new projects
            </span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground mt-7 leading-[1.08]">
            Build something{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-0.08em] bottom-[0.06em] h-[0.3em] -rotate-1 rounded-full bg-brand/40"
              />
              <span className="relative">different</span>
            </span>
            <br className="hidden md:block" /> with Montara Project
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            We design and build reliable web products end to end — backend, frontend, and DevOps.
            From idea to production, we ship software that scales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9 w-full sm:w-auto">
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none bg-primary text-primary-foreground hover:bg-navy-deep hover:-translate-y-0.5 shadow-[0_10px_28px_rgba(20,33,61,0.22)] h-11 px-8 w-full sm:w-max"
            >
              Start a project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none border border-border bg-white text-foreground hover:border-primary/30 hover:bg-muted hover:-translate-y-0.5 h-11 px-8 w-full sm:w-max"
            >
              View our work
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-10" aria-hidden="true">
            <div className="flex -space-x-2.5">
              {heroAvatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>
            <div className="text-start">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Shipped products across fintech, edtech &amp; Web3
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl mt-14 md:mt-16">
          <div
            aria-hidden="true"
            className="absolute -inset-4 md:-inset-6 -z-10 gradient opacity-30 blur-2xl rounded-[2rem]"
          />
          <div className="relative rounded-xl lg:rounded-2xl border border-black/10 bg-white p-2 shadow-[0_24px_80px_rgba(20,33,61,0.16)]">
            <div className="rounded-lg lg:rounded-xl border border-white/10 bg-black overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Product dashboard built by Montara Project"
                loading="lazy"
                width={1920}
                height={1080}
                decoding="async"
                className="rounded-lg lg:rounded-xl w-full h-auto"
                style={{ color: 'transparent' }}
                src={asset('/images/dashboard.png')}
              />
            </div>
          </div>

          <div className="absolute -top-5 right-4 md:right-10 hidden sm:flex items-center gap-2.5 rounded-xl border border-black/10 bg-white/90 backdrop-blur px-4 py-3 shadow-[0_12px_32px_rgba(20,33,61,0.14)]">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-brand/15 text-base">
              ⚡
            </span>
            <div className="text-start">
              <p className="text-xs font-semibold text-foreground">End-to-end delivery</p>
              <p className="text-[11px] text-muted-foreground">Backend · Frontend · DevOps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
