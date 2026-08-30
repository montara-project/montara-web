'use client'

import { Mail } from 'lucide-react'
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
      <div className="mt-16 flex flex-col items-center gap-6 max-w-xl mx-auto">
        <Link
          href={`mailto:${site.email}`}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-primary text-primary-foreground hover:opacity-70 bt-primary h-11 px-8"
        >
          <Mail className="w-4 h-4" />
          {site.email}
        </Link>

        <div className="flex items-center gap-4">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
