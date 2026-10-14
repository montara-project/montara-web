import type { ReactNode } from 'react'

import { Languages } from 'lucide-react'
import Link from 'next/link'

import { Section } from '@/components/common/section'
import { getDictionary } from '@/data/i18n'
import { legalDates, site } from '@/data/site'
import { formatDate, localizePath, type Locale } from '@/lib/i18n'

export interface LegalSection {
  id: string
  title: string
  content: ReactNode
}

type LegalDoc = 'terms' | 'privacy'

/** Section content per locale; receives the formatted effective date for "effective as of" copy */
export type LegalContent = Record<Locale, (effectiveDate: string) => LegalSection[]>

interface LegalPageProps {
  locale: Locale
  doc: LegalDoc
  content: LegalContent
}

export default function LegalPage({ locale, doc, content }: LegalPageProps) {
  const t = getDictionary(locale).legal
  const other: LegalDoc = doc === 'terms' ? 'privacy' : 'terms'
  const effectiveDate = formatDate(locale, legalDates[doc])
  const sections = content[locale](effectiveDate)

  return (
    <Section tag={t.tag} title={t[doc].title} description={t[doc].description}>
      <div className="mx-auto mt-12 max-w-5xl">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
          {t.effectiveDate}: {effectiveDate}
        </p>
        {t.translationNotice && (
          <p className="mt-4 flex max-w-3xl items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm leading-6 text-muted-foreground">
            <Languages className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
            {t.translationNotice}
          </p>
        )}

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label={t.onThisPage}
            className="rounded-xl border border-border bg-card p-5 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:overscroll-contain"
          >
            <p className="mb-3 text-sm font-semibold text-foreground">{t.onThisPage}</p>
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
              href={localizePath(locale, `/${other}`)}
              className="mt-4 flex min-h-11 items-center border-t border-border pt-4 text-sm font-medium text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t[other].related}
            </Link>
          </nav>

          <article aria-label={t[doc].title} className="min-w-0 space-y-10">
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
              <h2 className="font-heading text-xl font-semibold text-foreground">{t.questions}</h2>
              <p className="mt-2 text-base leading-7 text-muted-foreground">{t.questionsBody}</p>
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
