import type { PropsWithChildren, ReactNode } from 'react'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  tag: string
  description: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  action?: ReactNode
  className?: string
}

function Tag({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary select-none">
      <span className="h-px w-6 bg-brand" aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionTitle({
  title,
  tag,
  description,
  align = 'center',
  as: Heading = 'h2',
  action,
  className,
}: SectionTitleProps) {
  if (align === 'left') {
    return (
      <div
        className={cn('flex flex-col gap-8 md:flex-row md:items-end md:justify-between', className)}
      >
        <div className="flex max-w-2xl flex-col items-start text-start">
          <Tag>{tag}</Tag>
          <Heading className="mt-5 text-3xl font-heading font-semibold leading-[1.12] tracking-tight text-foreground md:text-5xl">
            {title}
          </Heading>
        </div>
        <div className="flex flex-col items-start gap-5 md:items-end md:pb-1.5">
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-end">
            {description}
          </p>
          {action}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col items-center text-center max-w-2xl mx-auto', className)}>
      <Tag>{tag}</Tag>
      <Heading className="mt-6 text-3xl md:text-5xl font-heading font-semibold leading-[1.12] tracking-tight text-foreground">
        {title}
      </Heading>
      <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-xl text-pretty">
        {description}
      </p>
    </div>
  )
}

type SectionProps = PropsWithChildren & Omit<SectionTitleProps, 'as'>

export function Section({
  title,
  tag,
  description,
  align = 'center',
  action,
  children,
}: SectionProps) {
  return (
    <div className="w-full pt-28 md:pt-32 pb-24 md:pb-32">
      <SectionTitle
        as="h1"
        title={title}
        tag={tag}
        description={description}
        align={align}
        action={action}
      />
      {children}
    </div>
  )
}

export function SectionActionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded-md px-1 py-1"
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  )
}
