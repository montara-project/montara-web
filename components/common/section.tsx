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
      <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
        <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
          {tag}
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl font-heading font-medium leading-snug! mt-6">{title}</h1>
      <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
        {description}
      </p>
    </div>
  )
}

type SectionProps = PropsWithChildren & SectionTitleProps

export function Section({ title, tag, description, children }: SectionProps) {
  return (
    <div className="w-full px-4 md:px-8 pt-32 pb-24">
      <SectionTitle title={title} tag={tag} description={description} />
      {children}
    </div>
  )
}
