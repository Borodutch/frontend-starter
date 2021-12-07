import en from 'localization/locales/en.json'
import ru from 'localization/locales/ru.json'

const messages = {
  en,
  ru: { ...en, ...ru },
}

export default messages
