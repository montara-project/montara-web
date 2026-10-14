import type { Metadata } from 'next'

import { CtaSection } from '@/components/block/home/cta-section'
import { HeroSection } from '@/components/block/home/hero-section'
import { ProcessSection } from '@/components/block/home/process-section'
import { ProjectsSection } from '@/components/block/home/projects-section'
import { ServicesSection } from '@/components/block/home/services-section'
import { TechStackSection } from '@/components/block/home/tech-stack-section'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return pageMeta(await resolveLocale(props), 'home', '/')
}

export default async function HomePage(props: LocaleParams) {
  const locale = await resolveLocale(props)
  return (
    <>
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <ProjectsSection locale={locale} />
      <TechStackSection locale={locale} />
      <ProcessSection locale={locale} />
      <CtaSection locale={locale} />
    </>
  )
}
