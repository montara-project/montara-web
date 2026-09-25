import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(252,163,17,0.12),transparent_70%)]"
      />
      <div className="relative flex flex-col items-center">
        <Image
          src="/assets/images/brand-logo.png"
          alt="Montara Project"
          width={44}
          height={44}
          className="rounded-xl"
        />
        <p className="mt-10 font-heading text-7xl md:text-8xl font-semibold tracking-tight text-foreground tabular-nums">
          404
        </p>
        <h1 className="mt-4 text-2xl font-heading font-semibold text-foreground">Page not found</h1>
        <p className="mt-3 max-w-md text-base text-muted-foreground leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have moved. Check the URL, or head
          back to where you came from.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-95 select-none bg-primary text-primary-foreground hover:bg-navy-deep hover:-translate-y-0.5 h-11 px-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 active:scale-95 select-none border border-border bg-white text-foreground hover:border-primary/30 hover:bg-muted h-11 px-8"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
