'use client'

import translations from 'lib/translate/locales/en.json'

import { ReactNode } from 'react'
import { TranslateProvider } from 'lib/contexts/translate' // <-- This also needs to be an absolute path

type Props = {
  children: ReactNode
}

export default function Translate({ children }: Props) {
  return (
    <TranslateProvider value={translations}>
      {children}
    </TranslateProvider>
  )
}