import type { ReactNode } from 'react'

import Link from 'next/link'

import { LogoIcon } from '@/components/common/svg'
import { footerColumns, site } from '@/data/site'

function InstagramIcon() {
  return (
    <svg
      className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
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
      className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
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
  X: <XIcon />,
  Instagram: <InstagramIcon />,
}

export function SiteFooter() {
  return (
    <footer className="w-full py-10 relative">
      <div className="w-full h-full">
        <div className="size-full mx-auto max-w-6xl px-4 md:px-12 relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
          <div className="absolute inset-0 w-full -z-10" aria-hidden="true">
            <canvas className="size-full" />
          </div>
          <div className="flex flex-col items-start max-w-48">
            <div className="flex items-center gap-2">
              <LogoIcon />
              <span className="text-xl font-medium">{site.name}</span>
            </div>
            <p className="text-base max-w mt-4">
              {site.tagline}. We build backend, frontend, and DevOps solutions.
            </p>
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-primary text-primary-foreground hover:opacity-70 bt-primary h-9 px-4 py-2 mt-8"
            >
              Start a project
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full max-w-lg mt-10 md:mt-0">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-medium">{col.title}</h4>
                <ul className="space-y-4 w-full">
                  {col.links.map((link) => (
                    <li
                      key={link.label}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all w-full"
                    >
                      <Link className="w-full" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="size-full mx-auto max-w-6xl px-4 md:px-12 pt-10 flex items-center justify-between relative">
          <p className="text-sm text-secondary-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {site.socials.map((social) => (
              <a key={social.label} className="p-1" href={social.href} aria-label={social.label}>
                {socialIcons[social.label]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
