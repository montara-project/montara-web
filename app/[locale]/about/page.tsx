import type { Metadata } from 'next'

import AboutSection from '@/components/block/site/about'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return pageMeta(await resolveLocale(props), 'about', '/about')
}

export default async function AboutPage(props: LocaleParams) {
  return <AboutSection locale={await resolveLocale(props)} />
}
