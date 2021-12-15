import en from 'i18n/en'
import type { Translation } from 'i18n/i18n-types'

export default {
  ...(en as Translation),
  title: 'Темплейт Фронтенда',
  userCount: 'Количество пользователей: {count}',
} as Translation
