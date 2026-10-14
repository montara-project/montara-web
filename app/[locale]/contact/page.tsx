import type { Metadata } from 'next'

import ContactSection from '@/components/block/site/contact'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return pageMeta(await resolveLocale(props), 'contact', '/contact')
}

export default async function ContactPage(props: LocaleParams) {
  return <ContactSection locale={await resolveLocale(props)} />
}
