'use client'

import { createContext, ReactNode, useContext, useState, useEffect } from 'react'

import { getTranslateFromMap } from 'lib/translate'
import {
  CommonTranslate,
  HomeTranslate,
  ResultTranslate
} from 'lib/translate/core'

interface TranslateContext {
  homeTranslate: HomeTranslate
  commonTranslate: CommonTranslate
  resultTranslate: ResultTranslate
  locale: 'ar' | 'en'
  setLocale: (locale: 'ar' | 'en') => void
}

const TranslateContext = createContext<TranslateContext>({} as TranslateContext)

type TranslateProviderProps = {
  children: ReactNode
  locale: 'ar' | 'en'
}

export function TranslateProvider({
  children,
  locale: initialLocale
}: TranslateProviderProps) {
  const [locale, setLocale] = useState<'ar' | 'en'>(initialLocale)
  
  const homeTranslate = getTranslateFromMap('home', locale)
  const commonTranslate = getTranslateFromMap('common', locale)
  const resultTranslate = getTranslateFromMap('result', locale)

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
  }, [locale])

  return (
    <TranslateContext.Provider
      value={{ homeTranslate, commonTranslate, resultTranslate, locale, setLocale }}
    >
      {children}
    </TranslateContext.Provider>
  )
}

export function useTranslate() {
  const context = useContext(TranslateContext)
  if (context === undefined) {
    throw new Error('useTranslate must be used within a TranslateProvider')
  }
  return context
}
