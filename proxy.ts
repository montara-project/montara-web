import { NextResponse, type NextRequest } from 'next/server'

import { defaultLocale, isLocale, LOCALE_COOKIE, localizePath } from '@/lib/i18n'

/**
 * Routes live under app/[locale]. English is served at unprefixed URLs (rewritten to /en/...),
 * other locales keep their prefix (/id/...). A visitor who explicitly chose a language via the
 * switcher (cookie) is sent to that language's URL; nobody is redirected by browser language.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]
  const url = request.nextUrl.clone()

  // /en/services is a duplicate of /services: canonicalize
  if (first === defaultLocale) {
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }

  if (isLocale(first)) return NextResponse.next()

  const preferred = request.cookies.get(LOCALE_COOKIE)?.value
  if (isLocale(preferred) && preferred !== defaultLocale) {
    url.pathname = localizePath(preferred, pathname)
    return NextResponse.redirect(url, 307)
  }

  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip API routes, framework/dev internals, static assets, and any path with a file extension
  matcher: ['/((?!api|_next|_vinext|assets|@|__|.*\\..*).*)'],
}
