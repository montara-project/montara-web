import { Mail } from 'lucide-react'
import Link from 'next/link'

import { site } from '@/data/site'

export default function ContactPage() {
  return (
    <div className="w-full px-4 md:px-8 pt-32 pb-24">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Contact
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-medium !leading-snug mt-6">
          Let&apos;s talk
        </h1>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          Tell us about your project and we&apos;ll get back to you as soon as we can.
        </p>
      </div>

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
    </div>
  )
}
