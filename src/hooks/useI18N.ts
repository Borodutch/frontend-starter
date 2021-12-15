import { I18nContext } from 'i18n/i18n-react'
import { useContext } from 'react'

export default function useI18N() {
  return useContext(I18nContext)
}
