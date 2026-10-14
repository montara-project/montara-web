import type { Metadata } from 'next'

import ProjectSection from '@/components/block/site/project'
import { pageMeta } from '@/lib/constants/meta'
import { resolveLocale, type LocaleParams } from '@/lib/locale-params'

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return pageMeta(await resolveLocale(props), 'projects', '/projects')
}

export default async function ProjectsPage(props: LocaleParams) {
  return <ProjectSection locale={await resolveLocale(props)} />
}
