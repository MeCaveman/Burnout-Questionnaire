import commonEsJson from './locales/ar/common.json'
import homeEsJson from './locales/ar/home.json'
import resultEsJson from './locales/ar/result.json'
import commonEnJson from './locales/en/common.json'
import homeEnJson from './locales/en/home.json'
import resultEnJson from './locales/en/result.json'

export type Locales = 'ar' | 'en'

export type CommonTranslate = typeof commonEsJson
export type HomeTranslate = typeof homeEsJson
export type ResultTranslate = typeof resultEsJson

export type TranslatesKeys = 'home' | 'result' | 'common'

export type TranslatesType = {
  home: HomeTranslate
  result: ResultTranslate
  common: CommonTranslate
}

export type TranslatesEntries = [
  TranslatesKeys,
  HomeTranslate | ResultTranslate | CommonTranslate
][]

export type TranslatesMap = Map<
  TranslatesKeys,
  HomeTranslate | ResultTranslate | CommonTranslate
>

export type TranslateContent<T extends TranslatesKeys> = T extends 'home'
  ? HomeTranslate
  : T extends 'result'
  ? ResultTranslate
  : CommonTranslate

const AR = {
  home: homeEsJson,
  result: resultEsJson,
  common: commonEsJson
} as TranslatesType

const EN = {
  home: homeEnJson,
  result: resultEnJson,
  common: commonEnJson
} as TranslatesType

const esEntries = Object.entries(AR) as TranslatesEntries
const enEntries = Object.entries(EN) as TranslatesEntries
const esMap = new Map(esEntries) as TranslatesMap
const enMap = new Map(enEntries) as TranslatesMap

type LocalesMap = {
  ar: TranslatesMap
  en: TranslatesMap
}

export const localesMap: LocalesMap = {
  ar: esMap,
  en: enMap
}

export const getTranslateFromMap = <T extends TranslatesKeys>(
  input: T,
  locale: Locales
) => {
  const coreMap = localesMap[locale]
  return coreMap.get(input) as TranslateContent<T>
}
