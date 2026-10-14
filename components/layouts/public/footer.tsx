import type { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button-variants'
import { getDictionary } from '@/data/i18n'
import { navLinks, services, site } from '@/data/site'
import { localizePath, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

import { LanguageSwitcher } from './language-switcher'

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0"
      />
    </svg>
  )
}

const socialIcons: Record<string, ReactNode> = {
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const href = (path: string) => localizePath(locale, path)
  const columns = [
    {
      title: t.footer.company,
      links: [
        ...navLinks.map((link) => ({ label: t.nav.links[link.key], href: href(link.href) })),
        { label: t.footer.terms, href: href('/terms') },
        { label: t.footer.privacy, href: href('/privacy') },
      ],
    },
    {
      title: t.footer.services,
      links: services.map((service) => ({
        label: t.services[service.slug].title,
        href: href(`/services#${service.slug}`),
      })),
    },
  ]

  return (
    <footer className="w-full relative mt-16 md:mt-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />
      <div className="size-full mx-auto max-w-7xl px-4 md:px-12 py-14 md:py-20 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col items-start max-w-72">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/brand-logo.png"
              alt="Montara Project"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="text-xl font-heading font-semibold">{site.name}</span>
          </div>
          <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
            <span lang="en">{site.tagline}.</span> {t.footer.blurb}
          </p>
          <Link
            href={`mailto:${site.email}`}
            className={cn(buttonVariants({ size: 'lg' }), 'mt-8')}
          >
            {t.common.startProject}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold tracking-wide text-foreground">{col.title}</h2>
              <ul className="w-full">
                {col.links.map((link) => (
                  <li key={link.href} className="w-full">
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-foreground/55 hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="size-full mx-auto max-w-7xl px-4 md:px-12 py-6 border-t border-foreground/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale} label={t.nav.languageLabel} />
            {site.socials.map((social) => (
              <a
                key={social.label}
                className="inline-flex size-11 items-center justify-center rounded-md text-foreground/55 hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${social.label} ${t.common.opensInNewTab}`}
              >
                {socialIcons[social.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
