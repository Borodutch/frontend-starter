import en from 'i18n/en'
import type { Translation } from 'i18n/i18n-types'

const ru = {
  title: 'Темплейт Фронтенда',
  userCount: 'Количество пользователей: {count}',
}

export default {
  ...(en as Translation),
  ...ru,
} as Translation
