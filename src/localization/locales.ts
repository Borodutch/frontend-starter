import en from 'localization/locales/en.json'
import ru from 'localization/locales/ru.json'

export const messages = {
  en,
  ru: { ...en, ...ru },
}
