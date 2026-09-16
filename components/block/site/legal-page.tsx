import type { ReactNode } from 'react'

import Link from 'next/link'

import { Section } from '@/components/common/section'
import { site } from '@/data/site'

export interface LegalSection {
  id: string
  title: string
  content: ReactNode
}

interface LegalPageProps {
  title: string
  description: string
  sections: LegalSection[]
  related: { label: string; href: string }
}

export default function LegalPage({ title, description, sections, related }: LegalPageProps) {
  return (
    <Section tag="Legal" title={title} description={description}>
      <div className="mx-auto mt-12 max-w-5xl">
        <div className="rounded-xl border border-brand/30 bg-brand/10 p-5 text-sm leading-relaxed text-foreground">
          <p className="font-semibold">Draft · Pending review</p>
          <p className="mt-1">
            This is an initial draft for owner and legal review, not a finalized policy. No
            effective date has been set.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="rounded-xl border border-border bg-card p-5">
            <p className="mb-3 text-sm font-semibold text-foreground">On this page</p>
            <ol className="space-y-1">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex min-h-11 items-center gap-3 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="text-xs tabular-nums" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <Link
              href={related.href}
              className="mt-4 flex min-h-11 items-center border-t border-border pt-4 text-sm font-medium text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {related.label}
            </Link>
          </nav>

          <article aria-label={title} className="min-w-0 space-y-10">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="scroll-mt-28 border-b border-border pb-10 last:border-0 last:pb-0"
              >
                <h2
                  id={`${section.id}-title`}
                  className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl"
                >
                  <span
                    className="mr-3 text-sm font-medium text-muted-foreground"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {section.content}
                </div>
              </section>
            ))}
            <div className="rounded-xl border border-border bg-muted p-6">
              <h2 className="font-heading text-xl font-semibold text-foreground">Questions?</h2>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                Contact {site.name} about this document.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-flex min-h-11 max-w-full items-center break-all text-base font-medium text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {site.email}
              </a>
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}
