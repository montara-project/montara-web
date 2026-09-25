import { Clock, Mail } from 'lucide-react'
import Link from 'next/link'

import { Section } from '@/components/common/section'
import { site } from '@/data/site'

export default function ContactSection() {
  return (
    <Section
      tag="Contact"
      title="Let's talk"
      description="Tell us about your project and we'll get back to you as soon as we can."
    >
      <div className="mt-14 md:mt-16 flex flex-col items-center reveal">
        <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-8 md:p-10 text-center shadow-[0_12px_32px_rgba(20,33,61,0.06)]">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/15 text-primary">
            <Mail className="w-5.5 h-5.5" strokeWidth={1.75} />
          </span>
          <h2 className="text-xl font-heading font-semibold text-foreground mt-5">
            Email us directly
          </h2>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Tell us what you&apos;re building, your timeline, and what success looks like —
            we&apos;ll reply with how we can help.
          </p>
          <Link
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none bg-primary text-primary-foreground hover:bg-navy-deep hover:-translate-y-0.5 h-11 px-8"
          >
            <Mail className="w-4 h-4" />
            {site.email}
          </Link>
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-5">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            Typical response time: within 48 hours on business days
          </p>
        </div>

        <div className="flex items-center gap-6 mt-8">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
