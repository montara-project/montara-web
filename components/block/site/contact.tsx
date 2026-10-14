import { Clock, Mail } from 'lucide-react'
import Link from 'next/link'

import type { Locale } from '@/lib/i18n'

import { Section } from '@/components/common/section'
import { buttonVariants } from '@/components/ui/button-variants'
import { getDictionary } from '@/data/i18n'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <Section tag={t.contact.tag} title={t.contact.title} description={t.contact.description}>
      <div className="mt-14 md:mt-16 flex flex-col items-center reveal">
        <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-8 md:p-10 text-center shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/15 text-primary">
            <Mail className="w-5.5 h-5.5" strokeWidth={1.75} />
          </span>
          <h2 className="text-xl font-heading font-semibold text-foreground mt-5">
            {t.contact.cardTitle}
          </h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.contact.cardBody}</p>
          <Link
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ size: 'xl' }), 'mt-6 max-w-full')}
          >
            <Mail aria-hidden="true" />
            {site.email}
          </Link>
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {t.contact.responseTime}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-6">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              {social.label}
              <span className="sr-only"> {t.common.opensInNewTab}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
