'use client'

import { PropsWithChildren } from 'react'

interface SectionTitleProps {
  title: string
  tag: string
  description: string
}

export function SectionTitle({ title, tag, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-primary select-none">
        <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
        {tag}
      </span>
      <h1 className="text-3xl md:text-5xl font-heading font-semibold leading-snug! tracking-tight mt-6 text-foreground">
        {title}
      </h1>
      <p className="text-base md:text-lg text-center text-muted-foreground mt-6 max-w-xl">
        {description}
      </p>
    </div>
  )
}

type SectionProps = PropsWithChildren & SectionTitleProps

export function Section({ title, tag, description, children }: SectionProps) {
  return (
    <div className="w-full pt-32 pb-24">
      <SectionTitle title={title} tag={tag} description={description} />
      {children}
    </div>
  )
}
