'use client'

import translations from '../../lib/translate/locales/en.json'

import translations from 'lib/translate/locales/en.json' // <-- Make sure this says en.json
import { ReactNode } from 'react'

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
