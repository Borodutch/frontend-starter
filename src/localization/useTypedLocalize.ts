import {
  LocalizationContext,
  TemplateValues,
  Translations,
} from '@borodutch-labs/localize-react'
import { useContext, Context } from 'react'
import { messages } from 'localization/locales'

type Locales = keyof typeof messages

type LocaleValues = typeof messages[Locales]

type LoacleKeys = keyof LocaleValues

interface LocalizationContextValue {
  locale: Locales
  translate: Translate
  translations: Translations
}

type Translate = (
  key: LoacleKeys,
  values?: TemplateValues,
  defaultMessage?: string
) => string

export const useLocalize = () => {
  return useContext<LocalizationContextValue>(
    LocalizationContext as Context<LocalizationContextValue>
  )
}
