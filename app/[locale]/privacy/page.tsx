import type { Metadata } from 'next'

import PrivacySection from '@/components/block/site/privacy'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return {
    ...pageMeta(await resolveLocale(props), 'privacy', '/privacy'),
    robots: { index: false, follow: true },
  }
}

export default async function PrivacyPage(props: LocaleParams) {
  return <PrivacySection locale={await resolveLocale(props)} />
}
