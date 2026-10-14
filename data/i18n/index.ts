import type { Locale } from '@/lib/i18n'

import { en } from './en'
import { id } from './id'

export type { Dictionary } from './en'

const dictionaries = { en, id }

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
