import type { Metadata } from 'next'

import ServiceSection from '@/components/block/site/service'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return pageMeta(await resolveLocale(props), 'services', '/services')
}

export default async function ServicesPage(props: LocaleParams) {
  return <ServiceSection locale={await resolveLocale(props)} />
}
