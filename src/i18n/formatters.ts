/* eslint-disable require-await */
/* eslint-disable import/prefer-default-export */
import type { AsyncFormattersInitializer } from 'typesafe-i18n'
import type { Formatters, Locales } from 'i18n/i18n-types'

export const initFormatters: AsyncFormattersInitializer<
  Locales,
  Formatters
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = async (locale: Locales) => {
  const formatters: Formatters = {
    // add your formatter functions here
  }

  return formatters
}
