import {
  LocalizationContext,
  TemplateValues,
  Translations,
} from '@borodutch-labs/localize-react'
import { useContext, Context } from 'react'
import { messages } from 'localization/locales'

type Locales = keyof typeof messages

type LocaleValues = typeof messages[Locales]

// get all possible key paths
type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]-?: `${K & string}` | Concat<K & string, DeepKeys<T[K]>>
    }[keyof T]
  : ''

type Concat<K extends string, P extends string> = `${K}${'' extends P
  ? ''
  : '.'}${P}`

interface LocalizationContextValue {
  locale: Locales
  translate: Translate
  translations: Translations
}

type Translate = (
  key: DeepKeys<LocaleValues>,
  values?: TemplateValues,
  defaultMessage?: string
) => string

export const useLocalize = () => {
  return useContext<LocalizationContextValue>(
    LocalizationContext as Context<LocalizationContextValue>
  )
}
