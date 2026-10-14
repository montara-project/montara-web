import type { Metadata } from 'next'

import TermsSection from '@/components/block/site/terms'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return {
    ...pageMeta(await resolveLocale(props), 'terms', '/terms'),
    robots: { index: false, follow: true },
  }
}

export default async function TermsPage(props: LocaleParams) {
  return <TermsSection locale={await resolveLocale(props)} />
}
