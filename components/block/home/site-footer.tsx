import Link from 'next/link'

import { LogoIcon } from '@/components/common/svg'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/' },
      { label: 'Pricing', href: '/' },
      { label: 'Contact', href: '/' },
      { label: 'Download', href: '/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Help Center', href: '/help-center' },
      { label: 'Community', href: '/community' },
      { label: 'Guides', href: '/guides' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API Docs', href: '/api-docs' },
      { label: 'SDKs', href: '/sdks' },
      { label: 'Tools', href: '/tools' },
      { label: 'Open Source', href: '/open-source' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
]

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

function DiscordIcon() {
  return (
    <svg
      className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M15.003 4c.744 0 1.53.26 2.25.547l.527.216c1.26.528 1.968 1.636 2.517 2.853c.891 1.975 1.51 4.608 1.724 6.61c.102.95.127 1.906-.056 2.549c-.197.687-.867 1.173-1.518 1.555l-.322.183l-.334.186q-.26.144-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 1 1-.894-1.788l.79-.39l-.58-.609c-1.39.57-3.027.893-4.766.893s-3.376-.322-4.766-.893l-.58.608l.793.39a1 1 0 1 1-.894 1.79l-.544-.27c-.402-.2-.805-.398-1.203-.607l-.928-.505l-.321-.183c-.651-.382-1.322-.868-1.518-1.555c-.184-.643-.158-1.598-.057-2.55c.214-2.001.833-4.634 1.724-6.609c.549-1.217 1.257-2.325 2.517-2.853C7.059 4.413 8.072 4 9 4c.603 0 1.077.555.99 1.147A14 14 0 0 1 12 5c.691 0 1.366.05 2.014.148A1.012 1.012 0 0 1 15.004 4ZM8.75 10.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"
        />
      </g>
    </svg>
  )
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
              <span className="text-xl font-medium">Luro</span>
            </div>
            <p className="text-base max-w mt-4">Empower your business with our AI tools.</p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-none text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none bg-primary text-primary-foreground hover:opacity-70 bt-primary h-9 px-4 py-2 mt-8">
              <Link href="/app">Start for free</Link>
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
            {columns.map((col) => (
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
          <p className="text-sm text-secondary-foreground">© 2024 Luro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="p-1" href="#">
              <InstagramIcon />
            </a>
            <a className="p-1" href="#">
              <XIcon />
            </a>
            <a className="p-1" href="#">
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
